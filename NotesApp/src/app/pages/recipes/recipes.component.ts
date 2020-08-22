import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { Recipe } from './recipe.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipesReceived: Recipe;

  // constructor(private recipeSrv:RecipeServiceService) { }
  constructor(){}
  ngOnInit() {
    // this.recipeSrv.recipeSelected.subscribe((recipe:Recipe)=>{
    //   this.recipesReceived=recipe;
    // })
  }

// with service we dont need the chain of eventemitter from child to parent;

  // selRecipe(recipe:Recipe){
  // this.recipesReceived=recipe;
  // this.selectedRecipe=true;
  // console.log('on  main'+this.recipesReceived)
  // }

}
