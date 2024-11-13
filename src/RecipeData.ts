export class RecipeData{
    imageUrl: string;
    title: string;
    description: string;
    ingredients: string[];
    instructions: Instruction[];
    preparationTime: number;
    cookTime: number;
    nutrition: NutritionData

    constructor(imageUrl: string, title: string, description: string, ingredients: string[], instructions: Instruction[], preparationTime: number, cookTime: number, nutrition: NutritionData){
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.preparationTime = preparationTime;
        this.cookTime = cookTime;
        this.nutrition = nutrition;
    }

    getTotalPrepTime(): number { 
        return this.cookTime + this.preparationTime
    };
 }

 export class Instruction{
    title: string;
    description: string;
    isOptional?: boolean

    constructor(title: string, description: string, isOptional: boolean = false){
        this.title = title;
        this.description = description;
        this.isOptional = isOptional
    }
 }

 export class NutritionData{
    private cal: number;
    private carbs: number;
    private protein: number;
    private fat: number;

    constructor(cal: number, carbs: number, protein: number, fat: number){
        this.cal = cal;
        this.carbs = carbs;
        this.protein = protein;
        this.fat = fat;
    }

    getCal(): string{
        return `${this.cal}kcal`;
    }

    getCarbs(): string{
        return `${this.carbs}g`;
    }

    getProtein(): string{
        return `${this.protein}g`;
    }

    getFat() : string{ //don't...
        return `${this.fat}g`;
    }
 }

 