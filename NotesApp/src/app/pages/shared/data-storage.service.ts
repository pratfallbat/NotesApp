import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Recipe } from '../recipes/recipe.model';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeServiceService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://recipecustom.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());

  }

  getRecipes() {
     const token = this.authService.getToken();

    this.http.get('https://recipecustom.firebaseio.com/recipes.json?auth=' + token )
     .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          console.log('-----yaay fromh http---')
          console.log(recipes)
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
