import { forwardRef } from "react";
import styles from "@/styles/TypedText.module.css"; 



const TypedText = forwardRef(({ text }, ref) => (
  <div className={styles.typedText} id="typedText" >
    <h1 ref={ref} className={styles.titleText}>
    {text}
  </h1>
  </div>
));

TypedText.displayName = "TypedText";

export default TypedText;
