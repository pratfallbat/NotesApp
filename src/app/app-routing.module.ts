import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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

  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      {
        path: "",
        component: RecipeStartComponent,
        canActivate: [AuthguardService],
      },
      {
        path: "new",
        component: RecipeeditComponent,
        canActivate: [AuthguardService],
      },
      {
        path: ":id",
        component: RecipeDetailComponent,
        canActivate: [AuthguardService],
      },
      {
        path: ":id/edit",
        component: RecipeeditComponent,
        canActivate: [AuthguardService],
      },
    ],
  },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
