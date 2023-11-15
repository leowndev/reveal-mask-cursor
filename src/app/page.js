"use client";
import styles from "@/app/page.module.css";
import useMousePosition from "../app/utils/useMousePosition";

export default function Home() {
  const { x, y } = useMousePosition();

  return (
    <main className={styles.main}>
      <div className={styles.mask}>
        <p className={styles.p}>
          You are now visualizing the hidden text. It was hidden behind the
          other paragraph.
        </p>
      </div>

      <div className={styles.body}>
        <p className={styles.p}>
          I'm a <span className={styles.span}>visible text</span> if you hover
          me you will see the hidden text behind me.
        </p>
      </div>
    </main>
  );
}
