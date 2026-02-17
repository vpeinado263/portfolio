import { forwardRef } from "react";
import styles from "@/styles/TypedText.module.css";

const TypedText = forwardRef(({ text = "" }, ref) => {
  return (
    <div className={styles.container}>
      <div className={styles.typingWrapper}>
        <h1 ref={ref} className={styles.text}>
          {text}
        </h1>
      </div>
    </div>
  );
});

TypedText.displayName = "TypedText";

export default TypedText;
