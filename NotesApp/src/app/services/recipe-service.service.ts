import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from '../pages/recipes/recipe.model';
import {  } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

private  recipes: Recipe[]=[
    new Recipe('Chiken and Rice dinner','Non Veg','https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('Pizza','Veg','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg'),
    new Recipe('Biryani','Veg','https://www.gimmesomeoven.com/wp-content/uploads/2017/07/How-To-Make-Fried-Rice-Recipe-2-1.jpg'),
    new Recipe('Chiken and Rice dinner','Non Veg','https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('Pizza','Veg','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg'),
    new Recipe('Biryani','Veg','https://www.gimmesomeoven.com/wp-content/uploads/2017/07/How-To-Make-Fried-Rice-Recipe-2-1.jpg'),
    new Recipe('Chiken and Rice dinner','Non Veg','https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('Pizza','Veg','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg'),
    new Recipe('Biryani','Veg','https://www.gimmesomeoven.com/wp-content/uploads/2017/07/How-To-Make-Fried-Rice-Recipe-2-1.jpg')
  ];

  constructor() { }
  recipeSelected=new EventEmitter<Recipe>();

  getRecipes(){
  return this.recipes.slice();
}

}
