import { Eye, Play } from "lucide-react";
import { contents } from "@/data/mockProfile";
import MockLink from "./MockLink";

export default function ContentCarousel() {
  return (
    <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2">
      {contents.map((item) => {
        const Icon = item.icon;
        return (
          <MockLink
            key={item.id}
            className="bento press flex w-[220px] shrink-0 snap-start flex-col overflow-hidden"
          >
            <div className={`relative grid aspect-[4/3] place-items-center bg-linear-to-br ${item.gradient}`}>
              {item.kind === "영상" ? (
                <span className="grid h-10 w-10 place-items-center rounded-full bg-black/40 backdrop-blur">
                  <Play className="ml-0.5 h-4 w-4 fill-white text-white" aria-hidden />
                </span>
              ) : (
                <Icon className="h-9 w-9 text-white/70" aria-hidden />
              )}
              <span className="absolute left-2.5 top-2.5 rounded-full bg-black/50 px-2 py-0.5 text-[11px] font-semibold backdrop-blur">
                {item.kind}
              </span>
              <span className="absolute bottom-2.5 right-2.5 rounded bg-black/60 px-1.5 py-0.5 text-[11px] font-medium tabular-nums">
                {item.meta}
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-2 p-3.5">
              <p className="line-clamp-2 text-sm font-semibold leading-snug">{item.title}</p>
              <p className="flex items-center gap-1 text-xs text-muted tabular-nums">
                <Eye className="h-3.5 w-3.5" aria-hidden />
                {item.views}
              </p>
            </div>
          </MockLink>
        );
      })}
    </div>
  );
}
