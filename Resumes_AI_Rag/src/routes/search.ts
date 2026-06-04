import { Router } from 'express';
import { bm25Search, vectorSearch, hybridSearch, endToEndSearch } from '../services/searchService';
import { rerankCandidates, summarizeCandidateFit } from '../services/llmService';

const router = Router();

router.post('/bm25', async (req, res) => {
  const { query, topK = 10, filters = {} } = req.body || {};
  if (!query || typeof query !== 'string') return res.status(400).json({ error: 'query required' });
  const out = await bm25Search(query, filters, topK);
  res.json({ query, topK, results: out.results, timings: { bm25Ms: out.bm25Ms } });
});

router.post('/vector', async (req, res) => {
  const { query, topK = 10, filters = {} } = req.body || {};
  if (!query || typeof query !== 'string') return res.status(400).json({ error: 'query required' });
  const out = await vectorSearch(query, filters, topK);
  res.json({ query, topK, results: out.results, timings: { vectorMs: out.vectorMs } });
});

router.post('/hybrid', async (req, res) => {
  const { query, topK = 10, filters = {} } = req.body || {};
  if (!query || typeof query !== 'string') return res.status(400).json({ error: 'query required' });
  const out = await hybridSearch(query, filters, topK);
  res.json(out);
});

router.post('/rerank', async (req, res) => {
  const { query, candidates = [], topK = 8 } = req.body || {};
  if (!query || !Array.isArray(candidates)) return res.status(400).json({ error: 'invalid payload' });
  const ranked = await rerankCandidates(query, candidates, topK);
  res.json({ query, ranked });
});

router.post('/summarize', async (req, res) => {
  const { query, candidate, style = 'short', maxTokens = 200 } = req.body || {};
  if (!query || !candidate) return res.status(400).json({ error: 'invalid payload' });
  const out = await summarizeCandidateFit(query, candidate, { style, maxTokens });
  res.json(out);
});

router.post('/', async (req, res) => {
  const { query, topK = 10, filters = {}, options = {} } = req.body || {};
  if (!query) return res.status(400).json({ error: 'query required' });
  const out = await endToEndSearch(query, filters, options);
  res.json(out);
});

export default router;
