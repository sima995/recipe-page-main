import styles from "./Nutrition.module.scss";
import { NutritionData } from "../../../RecipeData";
import NutritionEntry from "../NutritionEntry/NutritionEntry";
import Separator from "../Separator/Separator";

interface Props {
  nutrition: NutritionData;
}

const Nutrition = ({ nutrition }: Props) => {
  return (
    <div>
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className={styles.entries}>
        <NutritionEntry title="Calories" value={nutrition.getCal()} />
        <Separator />
        <NutritionEntry title="Carbs" value={nutrition.getCarbs()} />
        <Separator />
        <NutritionEntry title="Protein" value={nutrition.getProtein()} />
        <Separator />
        <NutritionEntry title="Fat" value={nutrition.getFat()} />
        {/* <p>Calories</p>
        <p>{nutrition.getCal()}</p>
        <p>Carbs</p>
        <p>{nutrition.getCarbs()}</p>
        <p>Protein</p>
        <p>{nutrition.getProtein()}</p>
        <p>Fat</p>
        <p>{nutrition.getFat()}</p> */}
      </div>
    </div>
  );
};

export default Nutrition;
