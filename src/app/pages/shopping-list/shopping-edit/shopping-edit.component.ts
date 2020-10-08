import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list.component';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
 @ViewChild('f') slForm: NgForm;
  ingredients=[];
  newIngredient;
editMode=false;
editedItemIndex:number;
editedItem:Ingredient;

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

subscription:Subscription;


  constructor(private ing:ShoppingListService) { 
    this.ingredients=this.ing.getInbgredient();
  }

  ngOnInit() {
  this.subscription=    this.ing.startedEditing.subscribe(
  (index:number)=>{
  this.editedItemIndex=index;
  this.   editMode=true;
  this.editedItem=this.ing.getIngredient(index);
  this.slForm.setValue({
    name:this.editedItem.name,
    amount:this.editedItem.amount
  }) 

}

)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  // onAddItem() {

  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //    this.newIngredient = new Ingredient(ingName, ingAmount);
  //   console.log(':'+this.newIngredient.amount)
  //   this.ing.addIngredient(this.newIngredient);
  // }
  onAddItem(form: NgForm) {

    const value= form.value;
    this.newIngredient=new Ingredient(value.name,value.amount);   
    console.log(':'+this.newIngredient.amount);
    if(this.editMode){
    this.ing.updateIngredients(this.editedItemIndex,this.newIngredient);
  
  }
    else{
      this.ing.addIngredient(this.newIngredient);
    }
    // this.editMode=false;
    // form.reset();
  this.onClear();
  }

  onClear(){
    this.editMode=false;
    this.slForm.reset();

  }
  onDelete(){
    this.ing.deleteIngredients(this.editedItemIndex);
    this.onClear();
  
  }

}
