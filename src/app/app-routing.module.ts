import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { RecipesComponent } from "./pages/recipes/recipes.component";
import { ShoppingListComponent } from "./pages/shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./pages/recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./pages/recipes/recipe-detail/recipe-detail.component";
import { RecipeeditComponent } from "./pages/recipes/recipeedit/recipeedit.component";

import { SigninComponent } from "./pages/auth/signin/signin.component";
import { AuthguardService } from "./services/authguard.service";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { SignupnewComponent } from "./pages/signupnew/signupnew.component";
import { SignupComponent } from "./pages/auth/signup/signup.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "recipes", loadChildren: "./pages/recipes/recipes.module#RecipesModule" },
  {
    path: "shopping-list",
    component: ShoppingListComponent,
    canActivate: [AuthguardService],
  },
  {
    path: "home",
    component: HomepageComponent,
    // canActivate: [AuthguardService],
  },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
      // pre load lazy  loading routes
      { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
