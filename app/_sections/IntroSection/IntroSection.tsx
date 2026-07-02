import { MotionedSection } from "@/app/_components/Section/MotionedSection";
import styles from "./IntroSection.module.scss";

export function IntroSection() {
  return (
    <MotionedSection className={styles.section}>
      <div className={styles.intro}>
        <h1 className={styles.headline}>프론트엔드 개발자 이소진입니다.</h1>
        <p className={styles.description}>
          React, Vue, Next.js 기반의 웹 프론트엔드 프로젝트를 통해 실무 역량을 쌓아왔으며, 실시간
          데이터 처리, 데이터 시각화, 디자인 시스템 구축 등에 대한 경험이 있습니다.
        </p>
        <p className={styles.description}>
          사용자 경험을 고려한 UI 구현, 상태 관리 최적화, 컴포넌트 구조화 및 협업 중심의 개발 환경
          구성에 강점을 가지고 있습니다. 유지보수성과 확장성을 고려한 코드 작성과 동료 개발자와의
          원활한 커뮤니케이션을 지향합니다.
        </p>
      </div>
    </MotionedSection>
  );
}
