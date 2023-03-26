import { addIngredientRoute } from "./addIngredientRoute";
import { addMealRoute } from "./addMealRoute";
import { deleteIngredientRoute } from "./deleteIngredientRoute";
import { deleteMealRoute } from "./deleteMealRoute";
import { getIngredientRoute } from "./getIngredientRoute";
import { getMealsRoute } from "./getMealsRoute";
import { getShoppingListRoute } from "./getShoppingListRoute";
import { searchRecipesRoute } from "./searchRecipesRoute";

export const routes = [
  addIngredientRoute,
  addMealRoute,
  deleteIngredientRoute,
  deleteMealRoute,
  getIngredientRoute,
  getMealsRoute,
  getShoppingListRoute,
  searchRecipesRoute,
];
