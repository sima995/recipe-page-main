import styles from "./PrepTime.module.scss";

interface Props {
  prep: number;
  cooking: number;
  total: number;
}

const PrepTime = ({ prep, cooking, total }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Preparation time</h3>
      <ul className={styles.list}>
        <li>
          <strong>Total: </strong>Approximately {total} minutes
        </li>
        <li>
          <strong>Preparation: </strong>
          {prep} minutes
        </li>
        <li>
          <strong>Cooking: </strong>
          {cooking} minutes
        </li>
      </ul>
    </div>
  );
};

export default PrepTime;
