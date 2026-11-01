import { getDb } from "./mongodb";

type ClickDoc = { _id: string; count: number };

async function clicksCollection() {
  const db = await getDb();
  return db?.collection<ClickDoc>("clicks") ?? null;
}

export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const collection = await clicksCollection();
    if (!collection) return {};
    const docs = await collection.find().toArray();
    return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  } catch (error) {
    console.error("클릭 수 조회 실패", error);
    return {};
  }
}

export async function incrementClick(linkId: string) {
  try {
    const collection = await clicksCollection();
    if (!collection) return;
    await collection.updateOne({ _id: linkId }, { $inc: { count: 1 } }, { upsert: true });
  } catch (error) {
    // 집계 실패해도 사용자는 링크로 이동해야 하므로 에러를 삼킴
    console.error("클릭 수 저장 실패", error);
  }
}
