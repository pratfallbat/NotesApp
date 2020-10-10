import { ActionReducerMap } from '@ngrx/store';
import * as fromShoppingList from '../pages/shopping-list/store/shopping-list-reducer';
import * as fromAuth from '../services/store-auth/auth.reducer';

export interface AppState {
    shoppingList: fromShoppingList.State;
    auth: fromAuth.State;
}
  
export const reducers: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shopplingListReducer,
    auth: fromAuth.authReducer
}