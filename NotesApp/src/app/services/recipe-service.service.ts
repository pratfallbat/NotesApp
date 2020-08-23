import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from '../pages/recipes/recipe.model';
import {  } from 'protractor';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
recipesChanged=new Subject<Recipe[]>();

private  recipes: Recipe[]=[
  new Recipe('Chiken and Rice dinner','Non Veg','https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg',[new Ingredient('Meat',1),
  new Ingredient('French Fries',5),
  new Ingredient('Cinnamon',1)]),
  new Recipe('Pizza','Veg','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',[new Ingredient('Apple',5),
  new Ingredient('Big Fat cheese',2),
  new Ingredient('Tomato',1)])
];;

  setRecipes(recipeX:Recipe[]){
this.recipes=recipeX;
this.recipesChanged.next(this.recipes.slice());
  }

  constructor(private sl:ShoppingListService) { }
  // recipeSelected=new EventEmitter<Recipe>();

  getRecipes(){
console.log(this.recipes.slice())
    return this.recipes.slice();
}
getRecipe(index:number){
  return this.recipes[index];
}

addIngredientsToShoppingList(ingredients:Ingredient[]){
  this.sl.addIngredients(ingredients);
}


addRecipe(recipe:Recipe){
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
}
updateRecipe(index:number,newRecipe:Recipe){
this.recipes[index]=newRecipe;
this.recipesChanged.next(this.recipes.slice());

}
deleteRecipe(index:number){
  this.recipes.splice(index,1);
  this.recipesChanged.next(this.recipes.slice());

  
}

}
