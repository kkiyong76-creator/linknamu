import { instagramFeed } from "@/data/mockProfile";
import MockLink from "../MockLink";

export default function InstagramCard() {
  return (
    <MockLink className="bento press flex flex-col gap-3 p-3.5">
      <div className="grid grid-cols-3 gap-1">
        {instagramFeed.tiles.map((tile) => (
          <span key={tile} className={`aspect-square rounded-md bg-linear-to-br ${tile}`} aria-hidden />
        ))}
      </div>
      <div>
        <p className="text-sm font-semibold">Instagram</p>
        <p className="text-xs text-muted tabular-nums">{instagramFeed.posts}</p>
      </div>
    </MockLink>
  );
}
