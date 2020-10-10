import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as ShoppingListActions from "./store/shopping-list.action";
import * as fromApp from "../../store/app.reducer";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.shoppingListState = this.store.select("shoppingList");
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
