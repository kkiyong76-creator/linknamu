export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
  /** 강조 카드 (빨간 테두리·글씨) */
  highlight?: boolean;
};

export type SocialId = "instagram" | "youtube" | "linkedin" | "github" | "email";

export type SocialItem = {
  id: SocialId;
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatar: string;
  socials: SocialItem[];
  links: LinkItem[];
};

const instagramUrl = "https://www.instagram.com/kkiyong76?psln=MWZyZ3RoMHd1cG92";

// TODO: example.com 으로 된 주소는 실제 주소로 교체
export const profile: Profile = {
  name: "SKYWALKER",
  bio: "VIBE CODING TEST",
  avatar: "/profile.jpg",
  socials: [
    { id: "instagram", label: "Instagram", url: instagramUrl },
    { id: "youtube", label: "YouTube", url: "https://example.com" },
    { id: "linkedin", label: "LinkedIn", url: "https://example.com" },
    { id: "github", label: "GitHub", url: "https://example.com" },
    { id: "email", label: "이메일", url: "mailto:you@example.com" },
  ],
  links: [
    { id: "portfolio", title: "포트폴리오", url: "https://example.com" },
    { id: "newsletter", title: "뉴스레터 구독", url: "https://example.com", highlight: true },
    { id: "instagram", title: "INSTAGRAM", url: instagramUrl, highlight: true },
  ],
};

export function findLink(id: string) {
  return profile.links.find((link) => link.id === id);
}
