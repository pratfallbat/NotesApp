import { Injectable,EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingreDientsChanged=new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient [] = [
    new Ingredient('Apple',5),
    new Ingredient('Mango',2),
    new Ingredient('Cinnamon',1)
  ];
  constructor() { }
getInbgredient(){return this.ingredients.slice();}
addIngredient(ing:Ingredient){
  this.ingredients.push(ing);
  this.ingreDientsChanged.emit(this.ingredients.slice());

}

// 1st way but it has lot of event emissions
addIngredients(ings:Ingredient[]){

//   for(let i of ings){
//   this.addIngredient(i);
// }


this.ingredients.push(...ings);
this.ingreDientsChanged.emit(this.ingredients.slice())

}
}
