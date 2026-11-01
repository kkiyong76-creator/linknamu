"use client";

import { MoreHorizontal, Share2 } from "lucide-react";
import { useToast } from "./Toast";
import { useShareLink } from "./useShareLink";

const iconButton =
  "press grid h-11 w-11 place-items-center rounded-full border border-line bg-white/5 backdrop-blur";

export default function TopBar() {
  const toast = useToast();
  const share = useShareLink();

  return (
    <div className="flex items-center justify-between pt-3">
      <span className="text-sm font-semibold tracking-wide text-muted">linknamu</span>
      <div className="flex gap-2">
        <button type="button" onClick={share} aria-label="공유" className={iconButton}>
          <Share2 className="h-[18px] w-[18px]" />
        </button>
        <button type="button" onClick={() => toast("준비 중인 기능이에요")} aria-label="더보기" className={iconButton}>
          <MoreHorizontal className="h-[18px] w-[18px]" />
        </button>
      </div>
    </div>
  );
}
