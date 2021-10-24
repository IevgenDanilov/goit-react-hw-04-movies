import { generate } from "shortid";
import styles from "./InputField.module.scss";

const InputField = ({ label, ...field }) => {
  const id = generate();

  return (
    <div className={styles.formGroup}>
      {label && <label htmlFor={id}></label>}
      <input {...field} id={id} className={styles.input} />
      <button className={styles.btn} type="submit">
        Пошук
      </button>
    </div>
  );
};

export default InputField;
