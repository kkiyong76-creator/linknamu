"use client";

import { Mail } from "lucide-react";
import { newsletter } from "@/data/mockProfile";
import { useToast } from "../Toast";

export default function NewsletterCard() {
  const toast = useToast();

  return (
    <div className="bento col-span-2 p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-point/15 text-point">
          <Mail className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-[15px] font-semibold">{newsletter.title}</p>
          <p className="text-xs text-muted tabular-nums">{newsletter.subscribers}</p>
        </div>
      </div>
      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          toast("준비 중인 기능이에요");
        }}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          이메일
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="이메일 주소"
          className="h-11 min-w-0 flex-1 rounded-xl border border-line bg-white/5 px-4 text-sm placeholder:text-muted focus:border-point/50 focus:outline-none"
        />
        <button type="submit" className="press h-11 shrink-0 rounded-xl bg-point px-4 text-sm font-semibold text-on-point">
          구독
        </button>
      </form>
    </div>
  );
}
