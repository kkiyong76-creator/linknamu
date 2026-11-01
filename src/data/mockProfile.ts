// 화면 데모용 목업 데이터 (실제 동작 X). 실제 링크·클릭 집계는 profile.ts 참고
import {
  Briefcase,
  CalendarDays,
  FileText,
  GraduationCap,
  Handshake,
  LayoutTemplate,
  MessagesSquare,
  Newspaper,
  PenLine,
  Sparkles,
  Coffee,
  Video,
  type LucideIcon,
} from "lucide-react";
import type { SocialId } from "./profile";

export const mockProfile = {
  handle: "@skywalker.dev",
  role: "크리에이터",
  location: "서울",
  verified: true,
  bio: ["AI로 일하는 방식을 바꿉니다.", "바이브 코딩 · 생산성 · 러닝"],
  stats: [
    { label: "팔로워", value: "128K" },
    { label: "콘텐츠", value: "842" },
    { label: "협업 브랜드", value: "36" },
  ],
};

export type MockSocial = { id: SocialId | "x"; label: string };

// 실제 URL이 있는 SNS는 profile.socials 를 우선 사용
export const mockSocials: MockSocial[] = [{ id: "x", label: "X" }];

export const featured = {
  badge: "NEW",
  title: "바이브 코딩 입문 클래스 오픈",
  caption: "얼리버드 마감 D-3",
  icon: GraduationCap as LucideIcon,
};

export const latestVideo = {
  title: "Claude Code로 30분 만에 웹사이트 만들기",
  duration: "12:48",
  views: "조회수 3.1만",
};

export const nowPlaying = {
  title: "Midnight Drive",
  artist: "Lo-Fi Seoul",
};

export const newsletter = {
  title: "매주 금요일, AI 활용 팁 1개",
  subscribers: "구독자 9,412명",
};

export const coffeeChat = {
  title: "커피챗 예약",
  caption: "이번 주 2자리 남음",
  icon: Coffee as LucideIcon,
  calendarIcon: CalendarDays as LucideIcon,
};

export const instagramFeed = {
  handle: "@skywalker.dev",
  posts: "게시물 412",
  // 3x3 타일 그라데이션
  tiles: [
    "from-fuchsia-500 to-orange-400",
    "from-violet-600 to-indigo-500",
    "from-lime-300 to-emerald-500",
    "from-sky-400 to-blue-700",
    "from-rose-500 to-purple-600",
    "from-amber-300 to-pink-500",
    "from-teal-400 to-cyan-700",
    "from-indigo-500 to-fuchsia-500",
    "from-orange-400 to-red-600",
  ],
};

export type MockLink = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const mockLinks: MockLink[] = [
  { id: "blog", title: "블로그", description: "개발·생산성 기록", icon: PenLine },
  { id: "partnership", title: "협업·광고 문의", description: "브랜디드 콘텐츠 · 강연", icon: Handshake },
  { id: "openchat", title: "오픈채팅방", description: "바이브 코더 1,200명 참여 중", icon: MessagesSquare },
];

// 실제 링크(profile.links) 아이콘 · 설명 보강
export const realLinkMeta: Record<string, { icon: LucideIcon; description: string }> = {
  portfolio: { icon: Briefcase, description: "프로젝트 모아보기" },
  newsletter: { icon: Newspaper, description: "매주 금요일 발행" },
  instagram: { icon: Sparkles, description: "일상과 작업 기록" },
};

export type ContentItem = {
  id: string;
  kind: "영상" | "아티클";
  title: string;
  views: string;
  meta: string;
  gradient: string;
  icon: LucideIcon;
};

export const contents: ContentItem[] = [
  { id: "c1", kind: "영상", title: "Claude Code로 30분 만에 웹사이트 만들기", views: "조회수 4.2만", meta: "12:48", gradient: "from-violet-600 to-indigo-900", icon: Video },
  { id: "c2", kind: "아티클", title: "프롬프트 잘 쓰는 사람들의 5가지 습관", views: "조회수 1.8만", meta: "6분 읽기", gradient: "from-lime-400 to-emerald-700", icon: FileText },
  { id: "c3", kind: "영상", title: "노션 + AI로 하루 2시간 아끼기", views: "조회수 9.7만", meta: "18:05", gradient: "from-fuchsia-600 to-rose-800", icon: Video },
  { id: "c4", kind: "아티클", title: "비개발자의 첫 배포 체크리스트", views: "조회수 2.3만", meta: "4분 읽기", gradient: "from-sky-500 to-blue-900", icon: FileText },
  { id: "c5", kind: "영상", title: "30대 직장인 러닝 루틴 공개", views: "조회수 6.1만", meta: "09:32", gradient: "from-orange-500 to-red-800", icon: Video },
  { id: "c6", kind: "아티클", title: "바이브 코딩, 어디까지 맡겨도 될까", views: "조회수 3.5만", meta: "8분 읽기", gradient: "from-teal-500 to-cyan-900", icon: FileText },
];

export type Product = {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  best?: boolean;
  gradient: string;
  icon: LucideIcon;
};

export const products: Product[] = [
  { id: "p1", title: "노션 템플릿", price: 19000, originalPrice: 29000, best: true, gradient: "from-zinc-500 to-zinc-800", icon: LayoutTemplate },
  { id: "p2", title: "프롬프트 모음집", price: 9900, gradient: "from-lime-400 to-green-700", icon: Sparkles },
  { id: "p3", title: "1:1 코칭", price: 120000, originalPrice: 150000, gradient: "from-violet-500 to-indigo-800", icon: CalendarDays },
  { id: "p4", title: "굿즈 머그컵", price: 24000, gradient: "from-orange-400 to-rose-700", icon: Coffee },
];
