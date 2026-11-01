import { coffeeChat } from "@/data/mockProfile";
import MockLink from "../MockLink";

export default function CoffeeChatCard() {
  const Calendar = coffeeChat.calendarIcon;
  const Coffee = coffeeChat.icon;

  return (
    <MockLink className="bento press relative flex flex-col justify-between overflow-hidden p-4">
      <Coffee aria-hidden className="absolute -bottom-3 -right-3 h-20 w-20 text-white/[0.04]" />
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
        <Calendar className="h-5 w-5" aria-hidden />
      </span>
      <div className="relative mt-6">
        <p className="text-[15px] font-semibold">{coffeeChat.title}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-point" aria-hidden />
          {coffeeChat.caption}
        </p>
      </div>
    </MockLink>
  );
}
