import { notFound } from "next/navigation";

import { ListItem } from "@/app/_components/ListItem/ListItem";
import { WORK_ITEMS } from "@/common/work";

import styles from "./page.module.scss";

type WorkDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const DETAIL_ITEMS = [
  {
    period: "2026.03 - 현재",
    title: "Kakao Home dev-console 개편",
    description:
      "React(TypeScript)·Vite 기반 신규 콘솔 구축 및 레거시 이관, 스타일 아키텍처·테스트·Storybook 환경 설계",
    skills: [
      { id: "next", label: "Next.js" },
      { id: "react", label: "React" },
      { id: "typeScript", label: "TypeScript" },
      { id: "reactQuery", label: "React Query" },
      { id: "zustand", label: "Zustand" },
      { id: "jest", label: "Jest" },
      { id: "cypress", label: "Cypress" },
      { id: "storybook", label: "Storybook" },
      { id: "sass", label: "Sass" },
    ],
  },
  {
    period: "2023.03 - 2023.12",
    title: "프론트엔드 운영 도구 개발",
    description: "업무 효율화를 위한 관리 화면 개발\n반복 UI 패턴 컴포넌트화",
    skills: [
      { id: "react", label: "React" },
      { id: "typescript", label: "TypeScript" },
      { id: "eslint", label: "ESLint" },
    ],
  },
];

export function generateStaticParams() {
  return WORK_ITEMS.map(({ id }) => ({ id }));
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const workItem = WORK_ITEMS.find((item) => item.id === id);

  if (!workItem) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <div className={styles.content}>
        <p className={styles.kicker}>Work</p>
        <h1 className={styles.title}>{workItem.companyName}</h1>
        <p className={styles.meta}>{workItem.meta}</p>
      </div>
      <div className={styles.list}>
        {DETAIL_ITEMS.map((item, index) => (
          <ListItem key={`${item.period}-${item.title}`} {...item} isIconFilled={index === 0} />
        ))}
      </div>
    </article>
  );
}
