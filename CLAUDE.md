@AGENTS.md

# 링크나무 (Link in Bio 서비스)

## 프로젝트 개요
- Linktree처럼 내 모든 링크를 한 페이지에 모아두고 하나의 URL로 공유할 수 있는 서비스
- 타깃 사용자: SNS에 여러 링크를 공유하고 싶은 개인 창작자, 개발자, 프리랜서
- 출시 범위: 아래 주요 기능을 갖춘 웹 서비스 (모바일 반응형)

## 화면 구성 (위에서 아래로, 가운데 정렬)
1. 원형 프로필 사진
2. 소셜 아이콘 줄 (인스타그램 · 유튜브 · 링크드인 · 깃허브 · 이메일)
3. 이름
4. 한 줄 소개
5. 링크 카드 목록 (세로로 나열된 둥근 모서리 카드, `highlight` 카드는 빨간 강조)
6. 하단 문구 "powered by kiyong"
- 전체를 흰색 카드 프레임(진한 테두리 + 오프셋 그림자)으로 감쌈
- 디자인 기준: `화면그리기2.png`, `../linknamu/프로필 wireframe.png` — 노랑 배경(`#ffec99`), 연두 프로필(`#b2f2bb`), 하늘색 카드(`#a5d8ff`), 빨간 강조(`#e03131`), 진한 테두리 (색상은 `globals.css`의 CSS 변수)
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
