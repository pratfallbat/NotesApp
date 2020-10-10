import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router } from '@angular/router'
import { AuthguardService } from 'src/app/services/authguard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeeditComponent } from './recipeedit/recipeedit.component';
import { RecipesComponent } from './recipes.component';
// import { RecipesComponent } from '../pages/recipes/recipes.component';
// import { RecipeStartComponent } from '../pages/recipes/recipe-start/recipe-start.component';
// import { RecipeeditComponent } from '../pages/recipes/recipeedit/recipeedit.component';
// import { RecipeDetailComponent } from '../pages/recipes/recipe-detail/recipe-detail.component';
// import { AuthguardService } from '../services/authguard.service';
// import { SignupComponent } from '../pages/auth/signup/signup.component';

const recipesRoutes: Routes=[

    {     path:'',component: RecipesComponent,children:[
          {path:'',component:RecipeStartComponent ,canActivate:[AuthguardService]},
          {path:'new',component:RecipeeditComponent ,canActivate:[AuthguardService]} ,
          {path:':id',component:RecipeDetailComponent ,canActivate:[AuthguardService]},  
          {path:':id/edit',component:RecipeeditComponent,canActivate:[AuthguardService]}
                  
        ]     }
        // ,
        // {path:'dummy',component:SignupComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(recipesRoutes)
    ],
    exports:[RouterModule]
})
export class RecipesRoutingModule{

}