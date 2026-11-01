@AGENTS.md

# 링크나무 (Link in Bio 서비스)

## 프로젝트 개요
- Linktree처럼 내 모든 링크를 한 페이지에 모아두고 하나의 URL로 공유할 수 있는 서비스
- 타깃 사용자: SNS에 여러 링크를 공유하고 싶은 개인 창작자, 개발자, 프리랜서
- 출시 범위: 아래 주요 기능을 갖춘 웹 서비스 (모바일 반응형)

## 화면 구성 (위에서 아래로, 가운데 정렬)
"다크 벤토" 인플루언서 프로필 (최대 너비 480px)
1. 커버 + 프로필 (`ProfileCover`)
2. 통계 3칸 (`ProfileStats`)
3. 팔로우 · 메시지 · 공유 버튼 (`ProfileActions`)
4. SNS 아이콘 줄 (`SocialLinks`)
5. 링크 / 콘텐츠 / 샵 탭 (`ProfileTabs`)
   - 링크: 벤토 그리드(`components/links/`) + 링크 리스트(`LinkList`)
   - 콘텐츠: 가로 스크롤(`ContentCarousel`) · 샵: 상품 2열(`ShopGrid`)
6. 푸터 (`SiteFooter`)
- 실제 링크(`profile.ts`)만 `/api/click/[id]`로 집계. 나머지는 목업(`src/data/mockProfile.ts`) — `MockLink`가 `href="#"` + 토스트("준비 중인 기능이에요")
- 토스트: `Toast.tsx`의 `ToastProvider`(layout) + `useToast()`
- 색: 배경 `#0B0B0F`, 카드 `#16161C`, 테두리 `rgba(255,255,255,0.08)`, 텍스트 `#F5F5F7`/`#8E8E93`, 포인트 `#C6F432`(주요 버튼·배지·활성 탭만) — `globals.css` CSS 변수
- 공통 클래스: `.bento`(카드 + hover glow), `.press`(눌림), `.fade-up` + `--i`(순차 페이드인)
- 외부 이미지 금지: 썸네일은 그라데이션 + `lucide-react` 아이콘 (추가 라이브러리 금지)
- 폰트: Pretendard (jsDelivr CDN, `layout.tsx`)

## 기술 스택
- Next.js 16 (App Router)
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)
- Vercel (배포)

## 주요 기능
- 프로필 표시 (이름, 소개, 사진)
- 링크 카드 목록
- 링크 클릭 수 집계

## 코드 규칙
- TypeScript 사용
- 컴포넌트는 `src/components/` 아래에 작성
- 환경 변수는 `.env.local`에 저장 (절대 커밋하지 않음)
- 모바일 우선 반응형 디자인

## 구조
- `src/data/profile.ts` — 프로필·링크 데이터 (여기만 수정하면 페이지에 반영)
- `src/lib/mongodb.ts` — MongoDB 클라이언트 (개발 중 HMR 대비 전역 캐시)
- `src/lib/clicks.ts` — 클릭 수 조회/증가 (`clicks` 컬렉션, `{ _id: linkId, count }`)
- `src/app/api/click/[id]/route.ts` — 클릭 집계 후 실제 URL로 리다이렉트 (등록된 링크 id만 허용)
