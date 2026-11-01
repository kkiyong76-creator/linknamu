import { Play } from "lucide-react";
import { latestVideo } from "@/data/mockProfile";
import MockLink from "../MockLink";

export default function VideoCard() {
  return (
    <MockLink className="bento press flex flex-col overflow-hidden">
      <div className="relative grid aspect-video place-items-center bg-linear-to-br from-rose-600 via-red-700 to-zinc-900">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-black/40 backdrop-blur">
          <Play className="ml-0.5 h-4 w-4 fill-white text-white" aria-hidden />
        </span>
        <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums">
          {latestVideo.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2 p-3.5">
        <p className="line-clamp-2 text-sm font-semibold leading-snug">{latestVideo.title}</p>
        <p className="text-xs text-muted tabular-nums">유튜브 · {latestVideo.views}</p>
      </div>
    </MockLink>
  );
}
