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
      { id: "styledComponents", label: "Styled Components" },
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
    title: "커넥트 올웨이즈 제품화 / 내재화",
    description: "커넥트 올웨이즈 서비스 개선 프론트엔드 개발",
    skills: [
      { id: "vue", label: "Vue" },
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "reactQuery", label: "React Query" },
      { id: "zustand", label: "Zustand" },
      { id: "pinia", label: "Pinia" },
      { id: "chartJs", label: "Chart.js" },
      { id: "websocket", label: "WebSocket" },
      { id: "sass", label: "Sass" },
    ],
    actionItems: [
      { text: "기존 서비스 코드 구조 분석 및 개발 스펙 정의" },
      {
        text: "내재화 프로세스 진행 (Vue + Pinia)",
        children: [
          { text: "기능 단위 별 코드 개선, 버그 수정" },
          { text: "추가 페이지 구현 및 기능 구현 (store 데이터 구축)" },
          { text: "기존 코드 구조 공통 컴포넌트화로 관리 컴포넌트 갯수 감소" },
          { text: "함수 공통화로 중복 로직 감소" },
          { text: "기존 구조 컴포넌트화 / 재사용성 향상" },
        ],
      },
      {
        text: "올웨이즈 모바일 버전 개발",
        children: [
          { text: "React 18 + TypeScript + Zustand 개발 환경 구축" },
          { text: "Sockjs + Stomp.js 웹 소켓 실시간 대화 기능 구현" },
          { text: "Zustand 스토어 구축" },
          {
            text: "페이지 및 기능 구현",
            children: [{ text: "고객 목록, 대화 목록, 대화방, 알림, 설정" }],
          },
        ],
      },
      {
        text: "올웨이즈 웹 어드민 개편",
        children: [
          { text: "React 18 + TypeScript + Zustand 개발 환경 구축" },
          {
            text: "기존 노후화된 코드와 복잡한 데이터 구조 개선을 통한 유지보수성 향상 및 안정성·확장성 확보를 위한 개발 환경 재구축",
          },
        ],
      },
    ],
  },
  {
    period: "2024.04 - 2024.05",
    title: "Next.js 14 사내 보일러플레이트 개선",
    description: "사내 Next.js 14 보일러 플레이트 개선 작업",
    skills: [
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "next", label: "Next.js" },
      { id: "reactQuery", label: "React Query" },
      { id: "recoil", label: "Recoil" },
    ],
    actionItems: [
      { text: "필요 공통 컴포넌트 구현" },
      { text: "필요 공통 커스텀 훅 구현" },
      { text: "공통 컴포넌트 및 커스텀 훅 가이드 페이지 구현" },
    ],
  },
  {
    period: "2023.11 - 2024.04",
    title: "BizMessage 서비스",
    description: "카카오 사업자용 메세지 서비스 (BizMessage) 프론트엔드 개발",
    skills: [
      { id: "react", label: "React" },
      { id: "next", label: "Next.js" },
      { id: "chartJs", label: "Chart.js" },
      { id: "reactQuery", label: "React Query" },
      { id: "zustand", label: "Zustand" },
    ],
    actionItems: [
      { text: "고객사 별 서비스 관리 및 개선 작업" },
      { text: "기존 코드 타입 리펙토링" },
      {
        text: "일일 레포팅 사내 서비스 기획 및 개발",
        children: [
          {
            text: "Next.js (v14) + TypeScript + React + Zustand + React Query 기반 프로젝트 개발",
          },
          { text: "서비스 기획 및 화면 설계 / API 명세서 작성 및 MockServer 구성" },
          { text: "커스텀 훅 및 공통 유틸 구현" },
          { text: "API 공통 함수 구현 (Ofetch)" },
          { text: "상태 관리 스토어 구축" },
          { text: "막대, 파이, 스택 등 차트 구현" },
          { text: "버그 리포트 CRUD 페이지 구현 (검색, 무한스크롤)" },
          { text: "메세지 발송량 차트 페이지 구현" },
        ],
      },
    ],
  },
  {
    period: "2022.05 - 2023.11",
    title: "카카오 공동체 모수 통계 및 연산 서비스",
    description:
      "Audience Targeting Management (모수 통계 및 연산 서비스) 카카오 공동체 사내 응용분석 서비스 프론트엔드 개발",
    skills: [
      { id: "react", label: "React" },
      { id: "reduxToolkit", label: "Redux Toolkit" },
      { id: "rxJs", label: "RxJS" },
      { id: "styledComponents", label: "Styled Components" },
    ],
    actionItems: [
      { text: "데일리스크럼 및 Jira를 활용한 커뮤니케이션" },
      { text: "작업 단위 별 코드리뷰 진행" },
      { text: "개편 기획서 검토 및 필요 API 리스트업" },
      { text: "Redux-Toolkit 데이터 상태관리 패턴 구축" },
      { text: "기존 Rx.js 데이터 관리 구조 Redux-Toolkit 이관 작업" },
      {
        text: "Async-Thunk 비동기 환경 구축 및 Redux-toolkit을 통한 동기/비동기 데이터 상태관리 구현",
      },
      { text: "재귀 구조를 가진 객체 배열 데이터 리스트 상태 변경 및 데이터 작업" },
      {
        text: "선택한 데이터 그룹, 순서, 연산자, 유저키에 따른 데이터 연산에 필요한 로직 구현",
      },
      { text: "Atomic 디자인 패턴 적용" },
      { text: "공통 모듈 및 개편 페이지 구현" },
      { text: "개편건 내부 테스트 및 QA/QC 진행" },
      {
        text: "정교한 타게팅이 필요한 마케터, 영업자, 서비스 기획자의 데이터의 활용성을 높혔으며, 상반기 대비 58% 순방문자 유입 증대, 87% 클릭 증대",
      },
    ],
  },
  {
    period: "2022.05 - 2023.11",
    title: "카카오 공동체 분석 레포트, 데이터 분류 서비스",
    description:
      "분석 레포트 및 기술/트렌드 리서치 제공 및 데이터 분석 카카오 공동체 사내 응용분석 서비스 프론트엔드 개발\n유저 관심사 및 주요 활동 업종/서비스 데이터 분류 카카오 공동체 사내 응용분석 서비스 프론트엔드 개발",
    skills: [
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "highcharts", label: "Highcharts" },
      { id: "rxJs", label: "RxJS" },
      { id: "styledComponents", label: "Styled Components" },
      { id: "vue", label: "Vue" },
      { id: "vuex", label: "Vuex" },
      { id: "d3", label: "D3" },
    ],
    actionItems: [
      { text: "데일리스크럼 및 Jira를 활용한 커뮤니케이션" },
      { text: "작업 단위 별 코드리뷰 진행" },
      { text: "서비스 페이지 / 어드민 페이지 공동 개편" },
      { text: "개편 기획서 검토 및 필요 API 리스트업" },
      {
        text: "Vuex 데이터 상태 관리 패턴 구축 및 Vuex를 통한 동기/비동기 데이터 상태관리 구현",
      },
      { text: "레포트 UI 제공 방식 추가(모달 레이어) 및 레포트 url 공유하기 개선" },
      { text: "공통 모듈 및 개편 페이지 구현" },
      { text: "개편건 내부 테스트 및 QA/QC 진행" },
    ],
  },
];
