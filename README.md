# Sojin Portfolio

개인 포트폴리오 사이트입니다.

## Stack

- Next.js 16 (App Router)
- React 19 / TypeScript
- SCSS Modules
- Framer Motion
- ESLint / Prettier
- pnpm

## Pages

| Path         | Description                          |
| ------------ | ------------------------------------ |
| `/`          | 소개                                 |
| `/work`      | 경력 목록                            |
| `/work/[id]` | 경력 상세 (기간·기술 스택·담당 업무) |

## Structure

```text
app/
  _components/   # Header, Footer, ListItem, CardItem 등
  _sections/     # IntroSection, WorkListSection
  _hooks/        # useOutsideClick 등
  work/          # 경력 목록·상세 페이지
common/          # work, workDetails, skills 데이터
styles/          # 글로벌 스타일, 폰트, 토큰
public/
  fonts/         # Pretendard
  images/        # 로고·스킬 아이콘
```

## Getting Started

```bash
pnpm install
pnpm dev
```

## Scripts

```bash
pnpm dev          # 개발 서버
pnpm build        # 프로덕션 빌드
pnpm start        # 빌드 결과 실행
pnpm lint         # ESLint 검사
pnpm lint:fix    # ESLint 자동 수정
pnpm format       # Prettier 검사
pnpm format:write # Prettier 자동 포맷
```

## Content

경력·스킬 데이터는 `common/` 에서 관리합니다.

- `common/work.ts` — 회사/경력 카드
- `common/workDetails.ts` — 상세 업무·기술 스택
- `common/skills.ts` — 스킬 아이콘 경로
