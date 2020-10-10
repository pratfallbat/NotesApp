import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Recipe } from "../recipes/recipe.model";
import { RecipeServiceService } from "src/app/services/recipe-service.service";
import { AuthService } from "src/app/services/auth.service";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeServiceService,
    private authService: AuthService
  ) {}

  storeRecipes() {
 
    const headers = new HttpHeaders()
      .set("Authorization", "Bearer  afka")
      .append("asdasd", "acddascas");
    /* return this.httpClient.put(
      "https://recipecustom.firebaseio.com/recipes.json",
      this.recipeService.getRecipes(),
      {
        observe: "body",
        params: new HttpParams().set("auth", token),
        // headers: headers
      }
    ); */

    //to know the progress of request

    const req = new HttpRequest(
      "PUT",
      "https://recipecustom.firebaseio.com/recipes.json",
      this.recipeService.getRecipes(),
      {
        reportProgress: true,
        // params: new HttpParams().set("auth", token),
      }
    );
    return this.httpClient.request(req);
    // now you can show progress bar by diving loaded by total
    // to show progredd of downloads
  }

  getRecipes() {
    // const token = this.authService.getToken();

    this.httpClient
      .get<Recipe[]>(
        "https://recipecustom.firebaseio.com/recipes.json" ,
        {
          observe: "body",
          responseType: "json",
        }
      )
      .pipe(
        map((recipes) => {
          console.log(recipes);

          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              recipe["ingredients"] = [];
            }
          }
          return recipes;
          return null;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        console.log("-----yaay fromh http---");
        console.log(recipes);
        this.recipeService.setRecipes(recipes);
      });
  }
}
