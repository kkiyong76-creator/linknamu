import type { CSSProperties } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

// 클릭 수를 요청마다 최신으로 보여주기 위해 동적 렌더링
export const dynamic = "force-dynamic";

// 페이드인 순서: 사진·이름·소개·SNS(0~3) → 링크 카드(4~) → 푸터
const LINKS_START = 4;

export default async function Home() {
  // MongoDB 미설정 시 클릭 수 배지는 숨김
  const clickCounts = process.env.MONGODB_URI ? await getClickCounts() : null;

  return (
    <main className="flex flex-1 justify-center px-6 pb-12 pt-14">
      <div className="flex w-full max-w-[440px] flex-col items-center">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatar={profile.avatar}
          socials={profile.socials}
        />
        <LinkList links={profile.links} clickCounts={clickCounts} startIndex={LINKS_START} />
        <footer
          className="fade-up mt-10 text-xs text-muted"
          style={{ "--i": LINKS_START + profile.links.length } as CSSProperties}
        >
          powered by kiyong
        </footer>
      </div>
    </main>
  );
}
