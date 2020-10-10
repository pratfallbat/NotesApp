import { NgModule} from '@angular/core';
// import { RecipesComponent } from '../pages/recipes/recipes.component';
// import { RecipeStartComponent } from '../pages/recipes/recipe-start/recipe-start.component';
// import { RecipeListComponent } from '../pages/recipes/recipe-list/recipe-list.component';
// import { RecipeeditComponent } from '../pages/recipes/recipeedit/recipeedit.component';
// import { RecipeDetailComponent } from '../pages/recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from '../pages/recipes/recipe-list/recipe-item/recipe-item.component';
// import { DropDownDirective } from '../pages/shared/dropdowndirective';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipe_routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeeditComponent } from './recipeedit/recipeedit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
// import { SharedModule } from '../shared/shared.module';
@NgModule({
declarations:[
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeeditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
    // DropDownDirective
    
 
],
imports:[
    ReactiveFormsModule,CommonModule,RecipesRoutingModule

]
})
export class RecipesModule{

}