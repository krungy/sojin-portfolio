export type WorkDetailListItem = {
  text: string;
  children?: WorkDetailListItem[];
};

export type WorkDetailItem = {
  period: string;
  title: string;
  description?: string;
  skills?: {
    id: string;
    label: string;
    iconSrc?: string;
  }[];
  actionItems?: WorkDetailListItem[];
};

export const WORK_DETAIL_ITEMS: WorkDetailItem[] = [
  {
    period: "2026.03 - 현재",
    title: "Kakao Home dev-console 개편",
    description:
      "React(TypeScript)·Vite 기반 신규 콘솔 구축 및 레거시 이관, 스타일 아키텍처·테스트·Storybook 환경 설계",
    skills: [
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "reactQuery", label: "React Query" },
      { id: "zustand", label: "Zustand" },
      { id: "jest", label: "Jest" },
      { id: "cypress", label: "Cypress" },
      { id: "storybook", label: "Storybook" },
      { id: "sass", label: "Sass" },
    ],
    actionItems: [
      { text: "Kakao Home dev-console 개편 프론트엔드 개발 (2026.03 ~ 진행 중)" },
      {
        text: "React(TypeScript) 기반 신규 콘솔 구축, Vite 개발·빌드 환경, TanStack React Query·Zustand를 활용한 서버 상태·클라이언트 상태 분리",
      },
      {
        text: "기존 레거시(Vue 등) 대비 동작·UI를 맞추는 방향의 화면·플로우 이관 및 신규 섹션(예: 검수·서비스 인증·Discover 등) 구현",
      },
      {
        text: "ESLint·Prettier 통합, import 정렬 등 규칙 정리, Husky 기반 Git Hook으로 커밋 전 품질 검사·포맷 일관성 확보",
      },
      {
        text: "스타일 아키텍처 설계 및 고도화",
        children: [
          {
            text: "SASS 레이어 구조(base / abstracts 등)와 디자인 토큰·글로벌 스타일 정리, CSS Modules로 컴포넌트 단위 스타일 캡슐화",
          },
          {
            text: "Radix UI Themes 연동 및 필요 시 토큰·오버라이드로 디자인 시스템과의 정합성 유지",
          },
        ],
      },
      {
        text: "Jest / Cypress 테스트 도입",
        children: [
          { text: "Jest 홈·스토어·도메인 헬퍼 단위 테스트 구축" },
          { text: "Cypress 라우팅·권한·레이아웃·API E2E 시나리오 구축" },
        ],
      },
      {
        text: "Storybook UI 카탈로그 구축",
        children: [
          {
            text: "common 컴포넌트 20종 Autodocs 스토리 작성, Vite·Radix Theme 연동으로 UI 카탈로그 및 컴포넌트 단위 검증 환경 구축",
          },
        ],
      },
    ],
  },
  {
    period: "2025.11 - 2026.04",
    title: "Kakao i 대화형 플랫폼 통합 어드민 구축",
    description: "대화형 플랫폼 운영 도구 통합 및 레거시 시스템 마이그레이션 프론트엔드 개발",
    skills: [
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "reactQuery", label: "React Query" },
      { id: "zustand", label: "Zustand" },
    ],
    actionItems: [
      { text: "Monorepo 구조 구성 (단일 Host + 다수 Remote 어드민 서비스)" },
      {
        text: "기존 운영 도구 마이그레이션 및 통합 어드민 구축",
        children: [
          {
            text: "기존 레거시 코드, 라이브러리(내부 개발 자체 라이브러리 등) 분석 및 최신 기술 스택 전환",
          },
          { text: "파편화된 운영 도구 통합을 위한 Monorepo 개발 환경 구성" },
          { text: "확장성을 고려한 Micro-frontend 아키텍처 설계 및 도입 검토" },
        ],
      },
      {
        text: "핵심 기능 페이지 구현 및 고도화",
        children: [
          { text: "스크립트 실행 및 테스트를 지원 에디터 환경 구축" },
          { text: "실시간 로그 추적 및 모니터링 UI/UX 구현" },
          { text: "실시간 데이터 모니터링 및 ID 검색 기능 화면 설계 및 구현" },
        ],
      },
      {
        text: "UI/UX 개선 및 공통 시스템 구축",
        children: [
          { text: "기획/디자인 단계 참여 및 figma 화면 설계" },
          { text: "Button, Input, Tab, Card, Title 등 재사용 가능한 UI 컴포넌트 구현" },
          { text: "전역 CSS 및 Typography, Color 변수 적용" },
        ],
      },
    ],
  },
  {
    period: "2024.06 - 2025.11",
    title: "Kakao i 대화형 플랫폼 통합 어드민 구축",
    description: "대화형 플랫폼 운영 도구 통합 및 레거시 시스템 마이그레이션 프론트엔드 개발",
    skills: [
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "reactQuery", label: "React Query" },
      { id: "zustand", label: "Zustand" },
    ],
    actionItems: [
      { text: "Monorepo 구조 구성 (단일 Host + 다수 Remote 어드민 서비스)" },
      {
        text: "기존 운영 도구 마이그레이션 및 통합 어드민 구축",
        children: [
          {
            text: "기존 레거시 코드, 라이브러리(내부 개발 자체 라이브러리 등) 분석 및 최신 기술 스택 전환",
          },
          { text: "파편화된 운영 도구 통합을 위한 Monorepo 개발 환경 구성" },
          { text: "확장성을 고려한 Micro-frontend 아키텍처 설계 및 도입 검토" },
        ],
      },
      {
        text: "핵심 기능 페이지 구현 및 고도화",
        children: [
          { text: "스크립트 실행 및 테스트를 지원 에디터 환경 구축" },
          { text: "실시간 로그 추적 및 모니터링 UI/UX 구현" },
          { text: "실시간 데이터 모니터링 및 ID 검색 기능 화면 설계 및 구현" },
        ],
      },
      {
        text: "UI/UX 개선 및 공통 시스템 구축",
        children: [
          { text: "기획/디자인 단계 참여 및 figma 화면 설계" },
          { text: "Button, Input, Tab, Card, Title 등 재사용 가능한 UI 컴포넌트 구현" },
          { text: "전역 CSS 및 Typography, Color 변수 적용" },
        ],
      },
    ],
  },
];
