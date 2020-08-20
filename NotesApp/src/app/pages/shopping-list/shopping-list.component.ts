import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 
ingredients=[];

  constructor(private ing:ShoppingListService) { 
    this.ingredients=this.ing.getInbgredient();
  }
  
 
  ngOnInit() {
    this.ing.ingreDientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
    })
  }

}
