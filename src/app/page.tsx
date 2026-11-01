import type { CSSProperties, ReactNode } from "react";
import ProfileCover from "@/components/ProfileCover";
import ProfileStats from "@/components/ProfileStats";
import ProfileActions from "@/components/ProfileActions";
import SocialLinks from "@/components/SocialLinks";
import ProfileTabs from "@/components/ProfileTabs";
import BentoGrid from "@/components/links/BentoGrid";
import LinkList from "@/components/LinkList";
import ContentCarousel from "@/components/ContentCarousel";
import ShopGrid from "@/components/ShopGrid";
import SiteFooter from "@/components/SiteFooter";
import { profile } from "@/data/profile";
import { mockSocials } from "@/data/mockProfile";
import { getClickCounts } from "@/lib/clicks";

// 클릭 수를 요청마다 최신으로 보여주기 위해 동적 렌더링
export const dynamic = "force-dynamic";

export default async function Home() {
  // MongoDB 미설정 시 클릭 수 배지는 숨김
  const clickCounts = process.env.MONGODB_URI ? await getClickCounts() : null;

  // 진입 시 섹션이 위에서부터 순서대로 페이드인
  const sections: ReactNode[] = [
    <ProfileCover key="cover" name={profile.name} avatar={profile.avatar} />,
    <ProfileStats key="stats" />,
    <ProfileActions key="actions" />,
    <SocialLinks key="socials" socials={profile.socials} extras={mockSocials} />,
    <ProfileTabs
      key="tabs"
      tabs={[
        {
          id: "links",
          label: "링크",
          panel: (
            <div className="flex flex-col gap-3 px-6">
              <BentoGrid />
              <LinkList links={profile.links} clickCounts={clickCounts} />
            </div>
          ),
        },
        { id: "content", label: "콘텐츠", panel: <div className="px-6"><ContentCarousel /></div> },
        { id: "shop", label: "샵", panel: <div className="px-6"><ShopGrid /></div> },
      ]}
    />,
    <SiteFooter key="footer" />,
  ];

  return (
    <main className="mx-auto flex w-full max-w-[480px] flex-1 flex-col gap-6 pb-12 sm:pt-6">
      {sections.map((section, i) => (
        <div key={i} className="fade-up" style={{ "--i": i } as CSSProperties}>
          {section}
        </div>
      ))}
    </main>
  );
}
