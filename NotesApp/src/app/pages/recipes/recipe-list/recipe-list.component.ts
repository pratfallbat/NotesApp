import { Component, OnInit, Output,EventEmitter, ɵConsole } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 
 
 recipes:Recipe[];
  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe: Recipe){
  //   // console.log('YAY'+recipe.name)
  //   this.recipeWasSelected.emit(recipe);
  // } 

}
