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
    period: "2024.01 - 현재",
    title: "포트폴리오 서비스 개선",
    description: "Next.js 기반 화면 구조 개선\n공통 컴포넌트 설계 및 인터랙션 구현",
    skills: [{ label: "Next.js" }, { label: "React" }, { label: "TypeScript" }, { label: "SCSS" }],
  },
  {
    period: "2023.03 - 2023.12",
    title: "프론트엔드 운영 도구 개발",
    description: "업무 효율화를 위한 관리 화면 개발\n반복 UI 패턴 컴포넌트화",
    skills: [{ label: "React" }, { label: "TypeScript" }, { label: "ESLint" }],
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
