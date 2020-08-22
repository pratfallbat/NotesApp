import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
 
ingredients=[];
private subscription:Subscription;


  constructor(private ing:ShoppingListService) { 
    this.ingredients=this.ing.getInbgredient();
  }
  
 
  ngOnInit() {
   this.subscription= this.ing.ingreDientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();

  }
  onEditItem(index:number){
    this.ing.startedEditing.next(index);

  }

}
