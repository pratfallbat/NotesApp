import { Component, OnInit, Output,EventEmitter, ɵConsole, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
 recipes:Recipe[];
 subscription:Subscription;
  constructor(private recipeService: RecipeServiceService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
  this.subscription=  this.recipeService.recipesChanged.subscribe(
(recipes:Recipe[])=>{
  this.recipes=recipes;
 }

    )
    this.recipes=this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe: Recipe){
  //   // console.log('YAY'+recipe.name)
  //   this.recipeWasSelected.emit(recipe);
  // } 
  onNewRecipe(){
  this.router.navigate(['new'],{relativeTo: this.route});

}
ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
