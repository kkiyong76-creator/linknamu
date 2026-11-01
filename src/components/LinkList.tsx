import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

type LinkListProps = {
  links: LinkItem[];
  clickCounts: Record<string, number> | null;
};

export default function LinkList({ links, clickCounts }: LinkListProps) {
  return (
    <ul className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} clicks={clickCounts ? (clickCounts[link.id] ?? 0) : undefined} />
        </li>
      ))}
    </ul>
  );
}
