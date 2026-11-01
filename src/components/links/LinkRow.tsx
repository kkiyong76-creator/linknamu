import type { ReactNode } from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type LinkRowProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  clicks?: number;
};

export const linkRowClass = "bento press flex h-[68px] items-center gap-3.5 px-4";

/** 일반 링크 한 줄의 내용 (a 태그는 바깥에서 감쌈) */
export default function LinkRow({ icon: Icon, title, description, clicks }: LinkRowProps): ReactNode {
  return (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06]">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-semibold">{title}</span>
        {description && <span className="block truncate text-xs text-muted">{description}</span>}
      </span>
      {clicks !== undefined && (
        <span className="shrink-0 text-xs text-muted tabular-nums">{clicks.toLocaleString()}</span>
      )}
      <ArrowUpRight className="h-[18px] w-[18px] shrink-0 text-muted" aria-hidden />
    </>
  );
}
