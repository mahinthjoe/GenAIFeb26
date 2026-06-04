import request from 'supertest';
import app from '../src/app';

jest.mock('../src/repositories/resumeRepository', () => ({
  bm25Query: jest.fn(async (q: string, topK: number) => [
    { resumeId: '1', snippet: 'Experienced Node.js developer', score: 1 }
  ]),
  vectorQuery: jest.fn(async (emb: number[], topK: number) => [
    { resumeId: '2', snippet: 'MongoDB specialist', score: 0.9 }
  ])
}));

describe('POST /v1/search/bm25', () => {
  it('returns BM25 results', async () => {
    const res = await request(app).post('/v1/search/bm25').send({ query: 'node' });
    expect(res.status).toBe(200);
    expect(res.body.results).toBeDefined();
    expect(res.body.results.length).toBeGreaterThan(0);
  });
});

describe('POST /v1/search/vector', () => {
  it('returns vector results', async () => {
    const res = await request(app).post('/v1/search/vector').send({ query: 'mongo' });
    expect(res.status).toBe(200);
    expect(res.body.results).toBeDefined();
  });
});
