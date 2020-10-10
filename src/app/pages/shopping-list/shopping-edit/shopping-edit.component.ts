import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";

import { Ingredient } from "src/app/shared/ingredient.model";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import * as ShoppingListActions from "../store/shopping-list.action";
// import * as fromShoppingList from "../store/shopping-list-reducer";
import * as fromApp from "../../../store/app.reducer";
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f") slForm: NgForm;
  ingredients = [];
  // newIngredient;
  editMode = false;
  subscription: Subscription;
  editedItem: Ingredient;
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.subscription = this.store.select("shoppingList").subscribe((data) => {
      if (data.editedIngredientIndex > -1) {
        this.editedItem = data.editedIngredient;
        this.editMode = true;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      } else {
        this.editMode = false;
      }
    });
  }
  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      // this.ing.updateIngredients(this.editedItemIndex, this.newIngredient);
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredients({
          ingredient: newIngredient,
        })
      );
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
      // this.ing.addIngredient(this.newIngredient);
    }
    // this.editMode=false;
    // form.reset();
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }
  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredients());
    this.onClear();
  }
}
