import styles from "./Instructions.module.scss";
import { Instruction } from "../../../RecipeData";

interface Props {
  instructions: Instruction[];
}

const Instructions = ({ instructions }: Props) => {
  return (
    <div>
      <h2>Instructions</h2>
      <ol className={styles.list}>
        {instructions.map((step, index) => (
          <li key={index}>
            <strong>
              {step.title}
              {step.isOptional ? " (optional): " : ": "}
            </strong>
            {step.description}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
