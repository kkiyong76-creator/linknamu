import type { ReactNode } from "react";
import type { SocialId, SocialItem } from "@/data/profile";

const icons: Record<SocialId, ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5a3 3 0 0 0-.9-2.3c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.4 0C6.1 2.1 5 2.4 5 2.4a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 3.5 9.4c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.3V22" />
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
};

type SocialLinksProps = {
  socials: SocialItem[];
};

export default function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <ul className="flex gap-2">
      {socials.map((social) => {
        const isExternal = social.url.startsWith("http");
        return (
          <li key={social.id}>
            <a
              href={social.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-transparent text-icon transition-colors duration-150 hover:border-point hover:text-point"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px]"
                aria-hidden
              >
                {icons[social.id]}
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
