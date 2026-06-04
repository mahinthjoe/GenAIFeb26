import { Router } from 'express';
import config from '../config';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    app: config.appName,
    version: config.version,
    uptime: process.uptime()
  });
});

router.get('/db', async (req, res) => {
  try {
    const { pingMongo } = await import('../repositories/mongo');
    const info = await pingMongo();
    res.json({ ok: true, ...info });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: String(err) });
  }
});

export default router;
