"use client";
import styles from "@/app/page.module.css";
import useMousePosition from "../app/utils/useMousePosition";
import { motion } from "framer-motion";

export default function Home() {
  const { x, y } = useMousePosition();
  const size = 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
        }}
      >
        <p className={styles.p}>
          You are now visualizing the hidden text. It was hidden behind the
          other paragraph.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p className={styles.p}>
          I'm a <span className={styles.span}>visible text</span> if you hover
          me you will see the hidden text behind me.
        </p>
      </div>
    </main>
  );
}
