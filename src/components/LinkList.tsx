import type { CSSProperties } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

type LinkListProps = {
  links: LinkItem[];
  clickCounts: Record<string, number> | null;
  /** 페이드인 순서 시작 번호 */
  startIndex?: number;
};

export default function LinkList({ links, clickCounts, startIndex = 0 }: LinkListProps) {
  return (
    <ul className="mt-8 flex w-full flex-col gap-2.5">
      {links.map((link, i) => (
        <li key={link.id} className="fade-up" style={{ "--i": startIndex + i } as CSSProperties}>
          <LinkCard
            link={link}
            primary={i === 0}
            clicks={clickCounts ? (clickCounts[link.id] ?? 0) : undefined}
          />
        </li>
      ))}
    </ul>
  );
}
