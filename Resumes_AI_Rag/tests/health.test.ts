import request from 'supertest';
import app from '../src/app';

describe('GET /v1/health', () => {
  it('returns app name and uptime', async () => {
    const res = await request(app).get('/v1/health');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('app');
    expect(res.body).toHaveProperty('uptime');
  });
});
