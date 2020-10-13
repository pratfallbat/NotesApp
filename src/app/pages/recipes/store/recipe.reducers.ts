import {Ingredient} from 'src/app/shared/ingredient.model';
import {Recipe} from '../recipe.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../../store/app.reducer';

export interface FeatureState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];

}


const initialState: State = {
    recipes: [
        new Recipe("Chiken and Rice dinner", "Non Veg", "https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg", [
            new Ingredient("Meat", 1),
            new Ingredient("French Fries", 5),
            new Ingredient("Cinnamon", 1),
        ]),
        new Recipe("Pizza", "Veg", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg", [
            new Ingredient("Apple", 5),
            new Ingredient("Big Fat cheese", 2),
            new Ingredient("Tomato", 1),
        ]),
    ]
};


export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case(RecipeActions.SET_RECIPE):
            return {
                ... state,
                recipes: [... action.payload]
            };
        case(RecipeActions.ADD_RECIPE):
            return {
                ... state,
                recipes: [
                    ... state.recipes,
                    action.payload
                ]
            };
        case(RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ... recipe,
                ... action.payload.undatedRecipe
            }
            const recipes = [... state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ... state,
                recipes: recipes
            };


        case(RecipeActions.DELETE_RECIPE):
            const oldRecipe = [... state.recipes];
            oldRecipe.splice(action.payload, 1)
            return {
                ... state,
                recipes: oldRecipe
            }

        default:
            return state;
    }

}
