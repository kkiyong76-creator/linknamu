import { NextResponse, type NextRequest } from "next/server";
import { findLink } from "@/data/profile";
import { incrementClick } from "@/lib/clicks";

export async function GET(request: NextRequest, ctx: RouteContext<"/api/click/[id]">) {
  const { id } = await ctx.params;
  const link = findLink(id);

  // 등록되지 않은 id는 홈으로 (오픈 리다이렉트 방지)
  if (!link) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  await incrementClick(link.id);
  return NextResponse.redirect(link.url);
}
