import { ArrowUpRight } from "lucide-react";
import { featured } from "@/data/mockProfile";
import MockLink from "../MockLink";

export default function FeaturedCard() {
  const Icon = featured.icon;

  return (
    <MockLink className="bento press relative col-span-2 flex h-[180px] flex-col justify-between overflow-hidden p-5">
      {/* 배경 장식 */}
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-point/15 blur-2xl"
      />
      <Icon aria-hidden className="absolute -bottom-4 right-14 h-32 w-32 -rotate-12 text-white/[0.04]" />

      <span className="relative w-fit rounded-full bg-point px-2.5 py-1 text-[11px] font-bold tracking-wider text-on-point">
        {featured.badge}
      </span>
      <div className="relative">
        <p className="text-xl font-bold leading-snug">{featured.title}</p>
        <p className="mt-1.5 text-sm font-medium text-point">{featured.caption}</p>
      </div>
      <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white/10">
        <ArrowUpRight className="h-5 w-5" aria-hidden />
      </span>
    </MockLink>
  );
}
