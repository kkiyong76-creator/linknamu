import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

// 클릭 수를 요청마다 최신으로 보여주기 위해 동적 렌더링
export const dynamic = "force-dynamic";

export default async function Home() {
  // MongoDB 미설정 시 클릭 수 배지는 숨김
  const clickCounts = process.env.MONGODB_URI ? await getClickCounts() : null;

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-8 sm:py-16">
      <div className="flex w-full max-w-md flex-col items-center gap-8 rounded-3xl border-[2.5px] border-foreground bg-white px-5 pb-7 pt-9 shadow-[6px_6px_0_var(--foreground)] sm:rounded-[2rem] sm:px-7 sm:pt-10">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatar={profile.avatar}
          socials={profile.socials}
        />
        <LinkList links={profile.links} clickCounts={clickCounts} />
        <footer className="text-sm text-foreground/70">powered by kiyong</footer>
      </div>
    </main>
  );
}
