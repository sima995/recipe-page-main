import "./App.css";
import "../dist/css/main.css";

import Recipe from "./Components/Recipe/Recipe";
import { RecipeData } from "./RecipeData";
import { Instruction } from "./RecipeData";
import { NutritionData } from "./RecipeData";
import omletteImage from "./assets/image-omelette.jpeg";

export const omletteRecipe = new RecipeData(
  omletteImage,
  "Simple Omelette Recipe",
  "An easy and quick dish, perfect for any meal. This classic omlette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cokked meats, herbs",
  ],
  [
    new Instruction(
      "Beat the eggs",
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
    ),
    new Instruction(
      "Heat the pan",
      "Place a non-stick frying pan over medium heat and add butter or oil."
    ),
    new Instruction(
      "Cook the omelette",
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
    ),
    new Instruction(
      "Add Fillings",
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
      true
    ),
    new Instruction(
      "Fold and serve",
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
    ),
    new Instruction(
      "Enjoy",
      "    Serve hot, with additional salt and pepper if needed"
    ),
  ],
  5,
  5,
  new NutritionData(277, 0, 20, 22)
);

function App() {
  return (
    <>
      <Recipe data={omletteRecipe}></Recipe>
    </>
  );
}

export default App;
