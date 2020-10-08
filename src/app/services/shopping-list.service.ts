import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  /*   ingreDientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Mango", 2),
    new Ingredient("Cinnamon", 1),
  ];
  constructor() {}

  addIngredients(ings: Ingredient[]) {
  

    this.ingredients.push(...ings);
    this.ingreDientsChanged.next(this.ingredients.slice());
  }

  updateIngredients(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingreDientsChanged.next(this.ingredients.slice());
  }
  deleteIngredients(index: number) {
    this.ingredients.splice(index, 1);
    this.ingreDientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  } */
}
