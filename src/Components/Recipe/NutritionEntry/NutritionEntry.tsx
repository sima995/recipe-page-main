import React from "react";
import styles from "./NutritionEntry.module.scss";

interface Props {
  title: string;
  value: string;
}

const NutritionEntry = ({ title, value }: Props) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <p className={styles.value}>
        <strong>{value}</strong>
      </p>
    </div>
  );
};

export default NutritionEntry;
