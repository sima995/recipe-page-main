import Header from "./Header/Header";
import Description from "./Description/Description";
import PrepTime from "./Description/PrepTime/PrepTime";
import Ingredients from "./Ingredients/Ingredients";
import Instructions from "./Instructions/Instructions";
import Nutrition from "./Nutrition/Nutrition";
import Separator from "./Separator/Separator";
import { RecipeData } from "../../RecipeData";

import styles from "./Recipe.module.scss";

interface Props {
  data: RecipeData;
}

const Recipe = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <Header imgUrl={data.imageUrl} />
      <Description title={data.title} description={data.description} />
      <PrepTime
        prep={data.preparationTime}
        cooking={data.cookTime}
        total={data.getTotalPrepTime()}
      />
      <Ingredients ingredients={data.ingredients} />
      <Separator />
      <Instructions instructions={data.instructions} />
      <Separator />
      <Nutrition nutrition={data.nutrition} />
    </div>
  );
};

export default Recipe;
