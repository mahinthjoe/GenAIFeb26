import { MongoClient } from 'mongodb';

let client: MongoClient | null = null;

export async function connectMongo() {
  if (client) return client;
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
  client = new MongoClient(uri);
  await client.connect();
  return client;
}

export async function getDb() {
  if (!client) await connectMongo();
  return client!.db();
}

export async function pingMongo() {
  try {
    const start = Date.now();
    const c = await connectMongo();
    await c.db().command({ ping: 1 });
    const latency = Date.now() - start;
    return { status: 'ok', latencyMs: latency };
  } catch (err: any) {
    return { status: 'error', error: String(err) };
  }
}
