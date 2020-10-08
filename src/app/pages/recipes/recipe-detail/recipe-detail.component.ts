import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeServiceService } from "src/app/services/recipe-service.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Store } from "@ngrx/store";
import * as ShoppingListActions from "../../shopping-list/store/shopping-list.action";
import * as fromShoppingList from "../../shopping-list/store/shopping-list-reducer";
@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  // @Input() res: Recipe;

  res: Recipe;
  id: number;
  constructor(
    private recipSrv: RecipeServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngAfterViewInit() {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.res = this.recipSrv.getRecipe(this.id);
      console.log(this.res);
      console.log("id is " + this.id);
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(this.res.ingredients)
    );
  }

  onEditRecipe() {
    // this.router.navigate(['edit'],{relativeTo: this.route});
    // second way
    this.router.navigate(["../", this.id, "edit"], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipSrv.deleteRecipe(this.id);
    this.router.navigate(["/recipes"]);
  }
}
