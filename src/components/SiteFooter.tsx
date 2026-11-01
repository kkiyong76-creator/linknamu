import MockLink from "./MockLink";

export default function SiteFooter() {
  return (
    <footer className="flex items-center justify-center gap-3 px-6 text-xs text-muted">
      <span>Made with 링크 나무2</span>
      <MockLink className="press rounded-full border border-line bg-white/5 px-3 py-1.5 font-semibold text-foreground">
        나도 만들기
      </MockLink>
    </footer>
  );
}
