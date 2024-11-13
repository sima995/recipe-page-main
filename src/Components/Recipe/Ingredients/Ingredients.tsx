import styles from "./Ingredients.module.scss";

interface Props {
  ingredients: string[];
}

const Ingredients = ({ ingredients }: Props) => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul className={styles.list}>
        {ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
