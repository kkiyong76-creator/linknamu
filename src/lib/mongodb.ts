import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

export async function getDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  // 개발 모드 HMR에서 연결이 계속 늘어나지 않도록 전역에 캐시
  globalForMongo._mongoClientPromise ??= new MongoClient(uri).connect();

  try {
    const client = await globalForMongo._mongoClientPromise;
    return client.db(process.env.MONGODB_DB ?? "linktree");
  } catch (error) {
    // 실패한 연결은 캐시하지 않고 다음 요청에서 재시도
    globalForMongo._mongoClientPromise = undefined;
    throw error;
  }
}
