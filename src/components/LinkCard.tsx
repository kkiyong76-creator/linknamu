import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  /** 첫 번째 카드: 포인트 색 배경 */
  primary?: boolean;
  clicks?: number;
};

export default function LinkCard({ link, primary = false, clicks }: LinkCardProps) {
  const isExternal = link.url.startsWith("http");
  const tone = primary
    ? "border-point bg-point text-on-point"
    : "border-border bg-card text-foreground hover:border-point";
  const sub = primary ? "text-on-point/70" : "text-muted";

  return (
    <a
      href={`/api/click/${link.id}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`flex h-[60px] w-full items-center gap-3 rounded-xl border px-5 transition duration-150 hover:-translate-y-px active:scale-[0.98] ${tone}`}
    >
      <div className="min-w-0 flex-1">
        <p className="truncate text-[15px] font-semibold">{link.title}</p>
        {link.description && <p className={`truncate text-xs ${sub}`}>{link.description}</p>}
      </div>
      {clicks !== undefined && (
        <span className={`shrink-0 text-xs tabular-nums ${sub}`}>{clicks.toLocaleString()}</span>
      )}
      <ArrowUpRight className={`h-[18px] w-[18px] shrink-0 ${sub}`} aria-hidden />
    </a>
  );
}
