import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  clicks?: number;
};

export default function LinkCard({ link, clicks }: LinkCardProps) {
  const isExternal = link.url.startsWith("http");
  const tone = link.highlight
    ? "border-accent text-accent shadow-[3px_3px_0_var(--accent)] hover:shadow-[5px_5px_0_var(--accent)]"
    : "border-foreground shadow-[3px_3px_0_var(--foreground)] hover:shadow-[5px_5px_0_var(--foreground)]";

  return (
    <a
      href={`/api/click/${link.id}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`relative flex w-full items-center justify-center rounded-xl border-[2.5px] bg-card px-14 py-4 transition hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${tone}`}
    >
      <div className="min-w-0 text-center">
        <p className="truncate font-bold">{link.title}</p>
        {link.description && (
          <p className="truncate text-sm text-foreground/60">{link.description}</p>
        )}
      </div>
      {clicks !== undefined && (
        <span className="absolute right-3 rounded-full bg-white/70 px-2 py-0.5 text-xs font-medium text-foreground">
          {clicks.toLocaleString()}
        </span>
      )}
    </a>
  );
}
