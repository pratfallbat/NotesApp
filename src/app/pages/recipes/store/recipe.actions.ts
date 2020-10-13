import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPE = "SET_RECIPE";
export const ADD_RECIPE = "ADD_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const START_EDIT = "START_EDIT";
export const STOP_EDIT = "STOP_EDIT";

export class SetRecipe implements Action {
  readonly type = SET_RECIPE;
  constructor(public payload: Recipe[]) {}
}

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}
export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: {index:number, undatedRecipe: Recipe }) {}
}
export class DeleteRecipe implements Action {
    readonly type = DELETE_RECIPE;
    constructor(public payload: number) {}
}
// export class StartEdit implements Action {
//   readonly type = START_EDIT;
//   constructor(public payload: number) {}
// }
// export class StopEdit implements Action {
//   readonly type = STOP_EDIT;
// }

export type RecipeActions = SetRecipe | AddRecipe | UpdateRecipe | DeleteRecipe;
    // | StartEdit | StopEdit;