import type { ReactNode } from "react";
import type { SocialItem } from "@/data/profile";
import type { MockSocial } from "@/data/mockProfile";
import MockLink from "./MockLink";

const icons: Record<SocialItem["id"] | MockSocial["id"], ReactNode> = {
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
  x: <path d="M4 4l16 16M20 4 4 20" />,
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
};

const circle =
  "press grid h-10 w-10 place-items-center rounded-full border border-line bg-white/5 text-foreground/80 transition-colors hover:border-point/50 hover:text-point";

function Icon({ id }: { id: keyof typeof icons }) {
  return (
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
      {icons[id]}
    </svg>
  );
}

type SocialLinksProps = {
  socials: SocialItem[];
  /** 아직 주소가 없는 SNS: 토스트만 표시. email 앞에 끼워 넣음 */
  extras?: MockSocial[];
};

export default function SocialLinks({ socials, extras = [] }: SocialLinksProps) {
  const emailIndex = socials.findIndex((s) => s.id === "email");
  const real = emailIndex === -1 ? socials : socials.slice(0, emailIndex);
  const tail = emailIndex === -1 ? [] : socials.slice(emailIndex);

  const renderReal = (social: SocialItem) => {
    const isExternal = social.url.startsWith("http");
    return (
      <li key={social.id}>
        <a
          href={social.url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          aria-label={social.label}
          className={circle}
        >
          <Icon id={social.id} />
        </a>
      </li>
    );
  };

  return (
    <section>
      <ul className="flex justify-center gap-2">
        {real.map(renderReal)}
        {extras.map((social) => (
          <li key={social.id}>
            <MockLink label={social.label} className={circle}>
              <Icon id={social.id} />
            </MockLink>
          </li>
        ))}
        {tail.map(renderReal)}
      </ul>
    </section>
  );
}
