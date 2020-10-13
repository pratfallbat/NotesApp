import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipe_routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeeditComponent } from './recipeedit/recipeedit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './store/recipe.reducers';
import { SharedmoduleModule } from 'src/app/shared/sharedmodule/sharedmodule.module';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffect } from './store/recipe.effects';
// import { SharedModule } from '../shared/shared.module';
@NgModule({
declarations:[
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeeditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
    
 
],
    imports: [
    SharedmoduleModule,
    ReactiveFormsModule, CommonModule, RecipesRoutingModule,
        StoreModule.forFeature('recipes', recipeReducer),
    EffectsModule.forFeature([RecipeEffect])


]
})
export class RecipesModule{

}