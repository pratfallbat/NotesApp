import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './pages/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeeditComponent } from './pages/recipes/recipeedit/recipeedit.component';

const routes: Routes = [
{path: '' ,redirectTo: '/recipes' ,pathMatch:'full' },

  {
  path:'recipes',component: RecipesComponent,children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeeditComponent},
    {path:':id',component:RecipeDetailComponent},  
    {path:':id/edit',component:RecipeeditComponent}
    
    
  ]
}
,
{
  path:'shopping-list',component: ShoppingListComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
