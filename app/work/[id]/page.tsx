import { notFound } from "next/navigation";

import { ListItem } from "@/app/_components/ListItem/ListItem";
import { WORK_ITEMS } from "@/common/work";
import { WORK_DETAIL_ITEMS } from "@/common/workDetails";
import type { WorkDetailListItem } from "@/common/workDetails";

import styles from "./page.module.scss";

type WorkDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const renderActionItems = (items: WorkDetailListItem[]) => (
  <ul>
    {items.map((item) => (
      <li key={item.text}>
        {item.text}
        {item.children ? renderActionItems(item.children) : null}
      </li>
    ))}
  </ul>
);

export const generateStaticParams = () => WORK_ITEMS.map(({ id }) => ({ id }));

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
        {WORK_DETAIL_ITEMS.map(({ actionItems, ...item }, index) => (
          <ListItem
            key={`${item.period}-${item.title}`}
            {...item}
            isIconFilled={index === 0}
            actionContent={actionItems ? renderActionItems(actionItems) : undefined}
          />
        ))}
      </div>
    </article>
  );
}
