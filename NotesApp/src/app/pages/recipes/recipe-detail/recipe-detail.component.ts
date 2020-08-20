import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() res: Recipe;

res: Recipe;
id:number;
  constructor(private recipSrv:RecipeServiceService,
    private route:ActivatedRoute,
    private router: Router) {

   }
  
   ngAfterViewInit(){
    // this.name=this.res.name;
    // this.image=this.res.imagePath;
    // this.description=this.res.description;
 console.log(this.res)    
   }
  ngOnInit() {
// const id=this.route.snapshot.params['id'];
// because it can change on click we subscribe
this.route.params.subscribe(
  (params: Params) =>{
this.id= +params['id'];
this.res=this.recipSrv.getRecipe(this.id);
console.log(this.res)
console.log('id is '+this.id)
  }
);

  }
  // onSelected(){
  //   console.log(this.res)
  //   this.recipeService.recipeSelected.emit(this.res);
  // }


  onAddToShoppingList(){
    console.log(this.id)

    this.res=this.recipSrv.getRecipe(this.id);

console.log(this.res)

    this.recipSrv.addIngredientsToShoppingList(this.res.ingredients);
  }




onEditRecipe(){
  // this.router.navigate(['edit'],{relativeTo: this.route});
  // second way
  this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route});
  

}
}
