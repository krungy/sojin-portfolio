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
    period: "2026.07 - 진행중",
    title: "Kakao AI 서비스",
    description: "카카오톡 인앱 쇼핑 탭 기능 개선 및 운영 고도화",
    skills: [
      { id: "angular", label: "Angular" },
      { id: "typeScript", label: "TypeScript" },
      { id: "ngrx", label: "NgRx" },
      { id: "rxJs", label: "RxJS" },
      { id: "jest", label: "Jest" },
      { id: "cypress", label: "Cypress" },
    ],
    actionItems: [{ text: "카카오톡 인앱 쇼핑 탭 기능 개선 및 운영 고도화" }],
  },
  {
    period: "2026.03 - 2026.07",
    title: "Kakao Home dev-console 개편",
    description: "개발자 콘솔 초기 구축·기능 고도화·테스트·배포 환경 개선",
    skills: [
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "reactQuery", label: "React Query" },
      { id: "zustand", label: "Zustand" },
      { id: "sass", label: "SCSS" },
      { id: "storybook", label: "Storybook" },
      { id: "jest", label: "Jest" },
      { id: "cypress", label: "Cypress" },
    ],
    actionItems: [
      {
        text: "공통 레이아웃·라우팅·인증·권한 체계를 설계 및 파트너·서비스·테스트 케이스 관리 기능 구축",
      },
      {
        text: "기기 검색·서비스 인증·탐색·검수·테스트 스크립트 실행 등 개발·검수 업무 흐름 구현",
      },
      {
        text: "React Query와 Zustand를 활용한 서버 상태·전역 상태 분리 및 데이터 흐름 개선",
      },
      { text: "공통 UI 컴포넌트 구현 및 Storybook 가이드화" },
      {
        text: "Jest·Cypress 기반 테스트, Docker·배포 설정, 보안 스캔 대응 및 코드 규칙 정비 수행",
      },
    ],
  },
  {
    period: "2025.11 - 2026.04",
    title: "Kakao i 대화형 플랫폼 통합 어드민 구축",
    description: "React·TypeScript 기반 통합 어드민 초기 구조 구축 및 기존 운영 화면 이관",
    skills: [
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "reactQuery", label: "React Query" },
      { id: "zustand", label: "Zustand" },
      { id: "sass", label: "SCSS" },
      { id: "storybook", label: "Storybook" },
      { id: "jest", label: "Jest" },
      { id: "cypress", label: "Cypress" },
    ],
    actionItems: [
      { text: "GNB·공통 레이아웃·라우팅·환경별 URL 설정 구축 및 기존 운영 화면 이관" },
      {
        text: "Log, LogTracker, Server, DownChannel, Realtime, Playground 등 운영 기능 개발",
      },
      {
        text: "다중 서버 조회와 실시간 API 연동, 세션 검색·로그 조건·URL 상태 보존 기능 구현",
      },
      {
        text: "Dialog, DataTable, Filter 등 공통 UI 컴포넌트 및 자동 스크롤·포커스 트랩 등 인터랙션 훅 구현",
      },
      {
        text: "타입 체계·공통 유틸·린트·포맷·의존성 관리 정비를 통한 유지보수성 개선",
      },
      {
        text: "단일 Host·다수 Remote 기반 Monorepo 구조 구성, Micro-frontend 도입 검토 및 Figma 기반 화면 설계 참여",
      },
    ],
  },
  {
    period: "2024.06 - 2025.11",
    title: "커넥트 올웨이즈 제품화 / 내재화",
    skills: [
      { id: "vue", label: "Vue" },
      { id: "pinia", label: "Pinia" },
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "next", label: "Next.js" },
      { id: "zustand", label: "Zustand" },
      { id: "reactQuery", label: "React Query" },
      { id: "websocket", label: "WebSocket" },
      { id: "sass", label: "SCSS" },
      { id: "storybook", label: "Storybook" },
    ],
    actionItems: [
      {
        text: "Connect Always Web IKEA 상담 운영 플랫폼",
        children: [
          {
            text: "상담 포털·관리자 콘솔의 상담 배분, 가이드, 브랜치·채널·권한·계정 관리 기능 개발",
          },
          {
            text: "상담 메모·이력·파일 업로드·자주 쓰는 문구·단축키와 공지·알림·자동 메시지 기능 구현",
          },
          {
            text: "IKEA 운영 환경에 맞춘 메뉴·라우팅·권한 체계와 고객·고객군·계정 관리 기능 구축",
          },
          {
            text: "WebSocket 재연결·재구독·정리 로직 구현을 통한 실시간 상담 및 알림 기능 안정성 개선",
          },
          {
            text: "이미지 붙여넣기·파일/CDN 업로드·엑셀 다운로드, API 오류·응답 시간 표준화 등 운영 기능 고도화",
          },
          {
            text: "공통 UI 컴포넌트 및 Storybook 문서화, ESLint·Prettier·Docker 기반 개발·배포 환경 정비",
          },
        ],
      },
      {
        text: "Connect Always Web 상담 운영 플랫폼 재구축",
        children: [
          {
            text: "기존 Vue 서비스의 React·TypeScript 기반 Ver.2 전환 및 공통 레이아웃·라우팅·상담 관리 화면 구조 재구축",
          },
          {
            text: "인증·상담방·다이얼로그 상태 Zustand 설계, React Hook Form·Zod 기반 로그인 검증 및 인증 API 연동",
          },
          {
            text: "실시간 채팅·상담 이력·캘린더·상담 종료·이관·검토·메모·파일 업로드 등 운영 기능 구현",
          },
          {
            text: "공통 UI 컴포넌트 구현 및 가이드 페이지 구축을 통한 재사용 가능한 화면 개발 기반 마련",
          },
        ],
      },
      {
        text: "Connect Always 모바일 상담 앱",
        children: [
          {
            text: "Next.js 기반 모바일 상담 앱의 초기 구조와 WebSocket PoC 구축, 상담방·소켓·인증·알림·로딩 상태 관리 체계 설계",
          },
          {
            text: "실시간 상담 메시지, 후처리·메모·이관·상담 이력·템플릿·가이드 등 상담 업무 기능 구현",
          },
          {
            text: "고객·고객그룹·즐겨찾기·상담사 계정 관리와 공통 UI·유틸리티 개발, 알림 무한 스크롤·디바운스 적용을 통한 사용 경험 개선",
          },
        ],
      },
    ],
  },
  {
    period: "2024.04 - 2024.05",
    title: "Next.js 14 사내 보일러플레이트 개선",
    description: "TypeScript·Next.js 14 기반 공통 UI 컴포넌트 및 사용 가이드 페이지 개발",
    skills: [
      { id: "next", label: "Next.js" },
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "recoil", label: "Recoil" },
      { id: "reactQuery", label: "React Query" },
    ],
    actionItems: [
      {
        text: "Radio, Switch, Tab, Checkbox, Accordion, Filter, Table 등 주요 상태를 포함한 재사용 UI 컴포넌트 구현",
      },
      {
        text: "컴포넌트 Props·상태의 TypeScript 타입 설계, 공통 Custom Hooks와 예제 화면 구성",
      },
      {
        text: "컴포넌트별 가이드·코드 하이라이트 제공을 통한 사용성과 재사용성 향상",
      },
      {
        text: "코드 리뷰 반영, 미사용 코드 제거, ESLint·Prettier·개발 환경 설정 정비",
      },
    ],
  },
  {
    period: "2023.11 - 2024.04",
    title: "BizMessage 서비스",
    skills: [
      { id: "next", label: "Next.js" },
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "vue", label: "Vue" },
      { id: "vuex", label: "Vuex" },
      { id: "zustand", label: "Zustand" },
      { id: "reactQuery", label: "React Query" },
      { id: "chartJs", label: "Chart.js" },
    ],
    actionItems: [
      {
        text: "BizMessage 일일 리포팅 서비스",
        children: [
          { text: "서비스 기획·화면 설계, API 명세 작성 및 Mock Server 구성" },
          {
            text: "React Query 기반 데이터 조회 구조와 공통 Custom Hooks 구현, 배치 현황 조회·등록·수정·삭제 등 운영 기능 개발",
          },
          {
            text: "검색 조건·날짜 상태·API 타입 모델 설계, 차트 기반 요약·상세 대시보드 구현",
          },
        ],
      },
      {
        text: "BizMessage 통합 관리",
        children: [
          {
            text: "캠페인 타게팅 조건 조회·미리보기 및 Push·RCS·XMS 발송 가능 시간 제어 기능 구현",
          },
          {
            text: "통계 집계·엑셀 다운로드 오류 개선, 세션 타이머·이용약관·결제·사용 내역 화면 고도화",
          },
          {
            text: "ESLint·Prettier·Husky 도입 및 기존 코드의 타입 오류, 코드 규칙 정비",
          },
        ],
      },
      {
        text: "BizMessage Center 관리자",
        children: [
          { text: "중계사·발송사 분배 비율 설정과 고객 등록 관리자 화면 구현" },
          {
            text: "더미 데이터 기반 화면을 API·Vuex 기반 상태 관리 구조로 전환",
          },
          {
            text: "유효성 검증·비활성화 조건·모달 인터랙션 개선 및 고객 등록 폼 기능 확장",
          },
        ],
      },
    ],
  },
  {
    period: "2022.05 - 2023.11",
    title: "카카오 공동체 모수 통계 및 연산 서비스",
    skills: [
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "vue", label: "Vue" },
      { id: "vuex", label: "Vuex" },
      { id: "mobx", label: "MobX" },
      { id: "reduxToolkit", label: "Redux Toolkit" },
      { id: "rxJs", label: "RxJS" },
      { id: "highcharts", label: "Highcharts" },
      { id: "vega", label: "Vega" },
      { id: "styledComponents", label: "Styled Components" },
      { id: "sass", label: "Sass" },
    ],
    actionItems: [
      {
        text: "ATM Web / ATM Web Pro",
        children: [
          {
            text: "타게팅 데이터 관리 서비스의 이용 서비스 API 검색, 인증·토큰 관리, 로그인 라우팅·리다이렉트와 공통 API·다운로드·공유 URL 기능 구현",
          },
          {
            text: "기존 ATM Web의 타게팅 데이터 관리 화면을 ATM Pro 버전으로 개편하고, 기능 중심의 모듈형 프론트엔드 구조 구축",
            children: [
              {
                text: "인구통계·관심사·이용 서비스·카카오 채널 등 다차원 타게팅 조건의 탐색·검색·선택 상태 관리 구현",
              },
              {
                text: "타깃·비교 그룹·내 그룹 CRUD, 그룹 연산, 드래그 앤 드롭, 결과 그래프·다운로드 등 분석 운영 기능 개발",
              },
              {
                text: "중복 코드와 불필요 API 호출을 제거하고, 상반기 대비 순방문자 58%·클릭 87% 증가",
              },
            ],
          },
          {
            text: "서비스 이용 로그·배포 버전 관리, ESLint·Prettier 기반 코드 스타일 표준화",
          },
        ],
      },
      {
        text: "UFO Dashboard / UFO RM",
        children: [
          {
            text: "사용자 분석 대시보드의 로그인 상태, 카테고리 탭, 태그·분석 영역 UI와 ATM 연동 URL 기능 구현",
          },
          {
            text: "카테고리 통계·작업자 현황·검색 필터·서비스 태깅·다중 선택 등 데이터 운영 기능 개선",
          },
          {
            text: "크로스 태깅 조회 조건, 사용자 권한 제어, 시간별 처리량 다운로드 등 운영 기능 구현",
          },
          {
            text: "개발·운영 환경 URL 분리, 접속 오류 개선 및 ESLint·Prettier 기반 코드 품질 정비",
          },
        ],
      },
    ],
  },
  {
    period: "2022.05 - 2023.11",
    title: "카카오 공동체 분석 레포트, 데이터 분류 서비스",
    skills: [
      { id: "vue", label: "Vue" },
      { id: "vuex", label: "Vuex" },
      { id: "d3", label: "D3" },
      { id: "highcharts", label: "Highcharts" },
      { id: "sass", label: "Sass" },
    ],
    actionItems: [
      {
        text: "DataZOO Web / DataZOO Admin",
        children: [
          {
            text: "로그인·인증·토큰·세션 관리와 Axios 인터셉터·라우터 가드 기반의 API 오류 처리 구조 구현",
          },
          {
            text: "데이터 랩 화면의 검색·태그 필터·정렬·페이지네이션, Vuex 기반 상태 관리 및 URL 쿼리·딥링크 기능 개발",
          },
          {
            text: "추천 콘텐츠, 아코디언·모달·좋아요 등 사용자 인터랙션과 이벤트 로그 적용, QA 이슈 대응 수행",
          },
          {
            text: "관리자에서 콘텐츠 노출·정렬·페이지네이션과 리포트 등록·수정, 다중 이미지 업로드·삭제·순서 변경 기능 개발",
          },
          {
            text: "입력 검증·이미지 업로드 오류 처리·대체 텍스트·노출 레이아웃 개선, 운영 이슈 대응 및 코드 포맷 정비",
          },
        ],
      },
    ],
  },
];
