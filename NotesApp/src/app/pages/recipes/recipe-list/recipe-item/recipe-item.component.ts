import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';


@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
@Input() index:number;


  @Output() recipeWasSelected =new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
    console.log('index'+this.index)
    console.log(this.recipe)
  }

  onRecipeSelected() {
    console.log(this.recipe)
    this.recipeService.recipeSelected.emit(this.recipe);
    this.recipeWasSelected.emit(this.recipe);
  }


}
