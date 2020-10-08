import { Component, OnInit } from "@angular/core";
import { Params, Router, ActivatedRoute } from "@angular/router";
import { RecipeServiceService } from "src/app/services/recipe-service.service";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Recipe } from "../recipe.model";
// import { Ingredient } from "src/app/shared/ingredient.model";
// import { relative } from "path";

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
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
      console.log(this.editMode);
      console.log("id is " + this.id);
    });
  }

  initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipSrv.getRecipe(this.id);
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
      console.log(recipe);
      console.log(recipeImagePath);
      console.log(recipeDescription);
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }
  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value["name"],
      this.recipeForm.value["description"],
      this.recipeForm.value["imagePath"],
      this.recipeForm.value["ingredients"]
    );
    // if name is same then
    // newRecipe= this.recipeForm.value
    console.log(this.recipeForm.value);
    if (this.editMode) {
      this.recipSrv.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipSrv.addRecipe(this.recipeForm.value);
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
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
  }
  rg;
  getformData() {
    this.rg = <FormArray>this.recipeForm.get("ingredients");
  }
}
