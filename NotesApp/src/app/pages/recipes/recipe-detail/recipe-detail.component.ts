import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() res: Recipe;

  constructor() {


   }
  
   ngAfterViewInit(){
    // this.name=this.res.name;
    // this.image=this.res.imagePath;
    // this.description=this.res.description;
 console.log(this.res)    
   }
  ngOnInit() {
  }
  // onSelected(){
  //   console.log(this.res)
  //   this.recipeService.recipeSelected.emit(this.res);
  // }

}
