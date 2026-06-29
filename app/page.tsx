import { MotionedSection } from "./_components/Section/MotionedSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <MotionedSection key={index}>
          <h1 className={styles.title}>Hello World</h1>
        </MotionedSection>
      ))}
    </>
  );
}
