import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit {

id:number;
editMode=false;

  constructor(private recipSrv:RecipeServiceService,
    private route:ActivatedRoute,
    private router: Router) {

   }
  
 
  ngOnInit() {

this.route.params.subscribe(
  (params: Params) =>{
this.id= +params['id'];
this.editMode= params['id'] !=null;
console.log(this.editMode)
console.log('id is '+this.id)
  }
);

  }

}
