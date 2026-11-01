import { Music } from "lucide-react";
import { nowPlaying } from "@/data/mockProfile";
import MockLink from "../MockLink";

const bars = [0, 200, 400, 100];

export default function MusicCard() {
  return (
    <MockLink className="bento press flex flex-col justify-between gap-3 p-3.5">
      <div className="grid aspect-square w-full place-items-center rounded-2xl bg-linear-to-br from-amber-300 via-pink-500 to-violet-700">
        <Music className="h-8 w-8 text-white/80" aria-hidden />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-point">지금 듣는 음악</p>
        <div className="mt-1 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{nowPlaying.title}</p>
            <p className="truncate text-xs text-muted">{nowPlaying.artist}</p>
          </div>
          {/* 이퀄라이저 */}
          <div className="flex h-4 shrink-0 items-end gap-[3px]" aria-hidden>
            {bars.map((delay) => (
              <span
                key={delay}
                className="eq-bar h-full w-[3px] rounded-full bg-point"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </MockLink>
  );
}
