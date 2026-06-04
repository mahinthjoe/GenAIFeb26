import { getDb } from './mongo';
import { ObjectId } from 'mongodb';
import { ResumeCandidate } from '../types';

export async function bm25Query(query: string, topK = 10, filters: any = {}) {
  // Minimal stub: query the `resumes` collection using text search or return empty array
  const db = await getDb();
  try {
    const cursor = db.collection('resumes')
      .find({ $text: { $search: query }, ...filters })
      .limit(topK);
    const docs = await cursor.toArray();
    return docs.map((d: any) => ({ resumeId: String(d._id), snippet: d.text?.slice(0, 500) || '', score: d.score || 0, metadata: { name: d.name } } as ResumeCandidate));
  } catch (err) {
    return [];
  }
}

export async function vectorQuery(embedding: number[], topK = 10, filters: any = {}) {
  // Stub implementation: naive cosine with embeddings stored in `embedding` field
  const db = await getDb();
  try {
    const docs = await db.collection('resumes').find({ embedding: { $exists: true }, ...filters }).limit(100).toArray();
    // Compute cosine similarity
    const scores = docs.map((d: any) => {
      const vec: number[] = d.embedding || [];
      const dot = vec.reduce((s, v, i) => s + v * (embedding[i] || 0), 0);
      const magA = Math.sqrt(vec.reduce((s, v) => s + v * v, 0));
      const magB = Math.sqrt(embedding.reduce((s, v) => s + v * v, 0));
      const sim = magA && magB ? dot / (magA * magB) : 0;
      return { doc: d, score: sim };
    });
    scores.sort((a, b) => b.score - a.score);
    return scores.slice(0, topK).map(s => ({ resumeId: String(s.doc._id), snippet: s.doc.text?.slice(0, 500) || '', score: s.score, metadata: { name: s.doc.name } } as ResumeCandidate));
  } catch (err) {
    return [];
  }
}

export async function getResumeById(id: string) {
  const db = await getDb();
  const filter = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { _id: id };
  return db.collection('resumes').findOne(filter as any);
}
