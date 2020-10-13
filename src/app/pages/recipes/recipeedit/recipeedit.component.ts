import { Component, OnInit } from "@angular/core";
import { Params, Router, ActivatedRoute } from "@angular/router";
import { RecipeServiceService } from "src/app/services/recipe-service.service";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Recipe } from "../recipe.model";
import * as RecipeActions from '../store/recipe.actions';
import * as fromRecipe from '../store/recipe.reducers';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  selector: "app-recipeedit",
  templateUrl: "./recipeedit.component.html",
  styleUrls: ["./recipeedit.component.css"],
})
export class RecipeeditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private recipSrv: RecipeServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private store:Store<fromRecipe.FeatureState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
      console.log(this.editMode);
      console.log("id is " + this.id);
      this.rg = <FormArray>this.recipeForm.get("ingredients");
      console.log(this.rg)
    });
  }
   
  initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
     
      this.store.select('recipes')
        .pipe(take(1))
        .subscribe((recipeState: fromRecipe.State) => {
          const recipe = recipeState.recipes[this.id];

          recipeName = recipe.name;
          recipeImagePath = recipe.imagePath;
          recipeDescription = recipe.description;
          if (recipe["ingredients"]) {
            for (let ingredient of recipe.ingredients) {
              recipeIngredients.push(
                new FormGroup({
                  name: new FormControl(ingredient.name, Validators.required),
                  amount: new FormControl(ingredient.amount, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/),
                  ]),
                })
              );
            }
    
          }


        });
   
     
     
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }
  onSubmit() {
/*     const newRecipe = new Recipe(
      this.recipeForm.value["name"],
      this.recipeForm.value["description"],
      this.recipeForm.value["imagePath"],
      this.recipeForm.value["ingredients"]
    ); */

    if (this.editMode) {

      this.store.dispatch(new RecipeActions.UpdateRecipe({index: this.id,undatedRecipe: this.recipeForm.value}))
    } else {
      this.store.dispatch(new RecipeActions.AddRecipe(this.recipeForm.value));
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onCancel() {
    console.log("cancel worked");
    this.router.navigate(["../"], { relativeTo: this.route });
  }
  onDeleteIngredient(index: number) {
    //  const ind=index
    // this.store.dispatch(new RecipeActions.DeleteRecipe(index))
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
  }
  rg;
  getformData() {
    this.rg = <FormArray>this.recipeForm.get("ingredients");
  }
}
