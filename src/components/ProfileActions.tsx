"use client";

import { useState } from "react";
import { Check, MessageCircle, Share2, UserPlus } from "lucide-react";
import { useToast } from "./Toast";

export default function ProfileActions() {
  const toast = useToast();
  const [following, setFollowing] = useState(false);

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // 클립보드 권한이 없어도 데모 토스트는 표시
    }
    toast("링크가 복사되었어요");
  };

  return (
    <section className="flex gap-2 px-6">
      <button
        type="button"
        onClick={() => setFollowing((v) => !v)}
        aria-pressed={following}
        className={`press flex h-12 flex-1 items-center justify-center gap-1.5 rounded-2xl text-[15px] font-semibold ${
          following ? "border border-line bg-card text-foreground" : "bg-point text-on-point"
        }`}
      >
        {following ? <Check className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
        {following ? "팔로잉" : "팔로우"}
      </button>
      <button
        type="button"
        onClick={() => toast("준비 중인 기능이에요")}
        className="press flex h-12 flex-1 items-center justify-center gap-1.5 rounded-2xl border border-line bg-card text-[15px] font-semibold"
      >
        <MessageCircle className="h-4 w-4" />
        메시지
      </button>
      <button
        type="button"
        onClick={share}
        aria-label="공유"
        className="press grid h-12 w-12 place-items-center rounded-2xl border border-line bg-card"
      >
        <Share2 className="h-4 w-4" />
      </button>
    </section>
  );
}
