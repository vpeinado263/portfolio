import { forwardRef } from "react";
import styles from "@/styles/TypedText.module.css"; 

const TypedText = forwardRef(({ text }, ref) => (
  <h1 ref={ref} id="typedText" className={styles.typedText}>
    {text}
  </h1>
));

TypedText.displayName = "TypedText";

export default TypedText;
