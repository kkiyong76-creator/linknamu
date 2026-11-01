import { Link2 } from "lucide-react";
import type { LinkItem } from "@/data/profile";
import { mockLinks, realLinkMeta } from "@/data/mockProfile";
import LinkRow, { linkRowClass } from "./links/LinkRow";
import MockLink from "./MockLink";

type LinkListProps = {
  links: LinkItem[];
  clickCounts: Record<string, number> | null;
};

export default function LinkList({ links, clickCounts }: LinkListProps) {
  // 순서: 포트폴리오 → 목업 링크 → 나머지 실제 링크
  const lead = links.filter((link) => link.id === "portfolio");
  const rest = links.filter((link) => link.id !== "portfolio");

  // 실제 링크: /api/click/[id] 로 집계 후 이동
  const renderReal = (link: LinkItem) => {
    const isExternal = link.url.startsWith("http");
    const meta = realLinkMeta[link.id];
    return (
      <li key={link.id}>
        <a
          href={`/api/click/${link.id}`}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={linkRowClass}
        >
          <LinkRow
            icon={meta?.icon ?? Link2}
            title={link.title}
            description={link.description ?? meta?.description}
            clicks={clickCounts ? (clickCounts[link.id] ?? 0) : undefined}
          />
        </a>
      </li>
    );
  };

  return (
    <ul className="flex flex-col gap-2.5">
      {lead.map(renderReal)}
      {mockLinks.map((link) => (
        <li key={link.id}>
          <MockLink className={linkRowClass}>
            <LinkRow icon={link.icon} title={link.title} description={link.description} />
          </MockLink>
        </li>
      ))}
      {rest.map(renderReal)}
    </ul>
  );
}
