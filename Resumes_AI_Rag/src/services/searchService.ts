import config from '../config';
import { bm25Query, vectorQuery } from '../repositories/resumeRepository';
import { embedText } from './embeddingService';
import { rerankCandidates } from './llmService';
import { ResumeCandidate } from '../types';

export async function bm25Search(query: string, filters: any = {}, topK = 10) {
  const start = Date.now();
  try {
    const results = await bm25Query(query, topK, filters);
    const bm25Ms = Date.now() - start;
    config.logger.info({ bm25Ms }, 'BM25 search completed');
    return { results, bm25Ms };
  } catch (err: any) {
    const bm25Ms = Date.now() - start;
    config.logger.error({ err, bm25Ms }, 'BM25 search failed');
    return { results: [], bm25Ms, error: String(err) };
  }
}

export async function vectorSearch(query: string, filters: any = {}, topK = 10) {
  const start = Date.now();
  try {
    const emb = await embedText(query);
    const results = await vectorQuery(emb.embedding, topK, filters);
    const vectorMs = Date.now() - start;
    config.logger.info({ vectorMs }, 'Vector search completed');
    return { results, vectorMs };
  } catch (err: any) {
    const vectorMs = Date.now() - start;
    config.logger.error({ err, vectorMs }, 'Vector search failed');
    return { results: [], vectorMs, error: String(err) };
  }
}

export async function hybridSearch(query: string, filters: any = {}, topK = 10) {
  const [bm25Res, vectorRes] = await Promise.all([bm25Search(query, filters, topK), vectorSearch(query, filters, topK)]);
  return { bm25: bm25Res, vector: vectorRes };
}

export async function endToEndSearch(query: string, filters: any = {}, options: any = {}) {
  const timings: any = {};
  // 1. BM25
  const bm25 = await bm25Search(query, filters, options.topK || 10);
  timings.bm25Ms = bm25.bm25Ms;
  // 2. Vector
  const vector = await vectorSearch(query, filters, options.topK || 10);
  timings.vectorMs = vector.vectorMs;

  // 3. Merge dedupe — simple merge by resumeId
  const map = new Map<string, ResumeCandidate>();
  [...(bm25.results || []), ...(vector.results || [])].forEach((c: any) => map.set(c.resumeId, c));
  const merged = Array.from(map.values()).slice(0, options.mergeLimit || 50);

  // 4. Rerank top N via LLM
  let rerank = [];
  try {
    const topForRerank = merged.slice(0, options.rerankTop || 8);
    rerank = await rerankCandidates(query, topForRerank as ResumeCandidate[], options.rerankTop || 8);
    timings.rerankMs = 0; // stub
  } catch (err: any) {
    config.logger.error({ err }, 'Rerank failed, falling back');
    rerank = merged.map((c: any, i: number) => ({ id: c.resumeId, score: c.score || 0 }));
    timings.rerankMs = 0;
  }

  return { query, mergedCount: merged.length, rerank, timings };
}
