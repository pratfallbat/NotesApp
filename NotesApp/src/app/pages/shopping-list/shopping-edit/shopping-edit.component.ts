import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list.component';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredients=[];
  newIngredient;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private ing:ShoppingListService) { 
    this.ingredients=this.ing.getInbgredient();
  }

  ngOnInit() {
  }
  
  onAddItem() {

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
     this.newIngredient = new Ingredient(ingName, ingAmount);
    console.log(':'+this.newIngredient.amount)
    this.ing.addIngredient(this.newIngredient);
  }

}
