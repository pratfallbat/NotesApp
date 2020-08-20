import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,  Observer, Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit,OnDestroy {
 custyomSub:Subscription;
  theDataSource: Observable<string>;
  constructor() { }

  ngOnInit() {
     this.theDataSource= Observable.create((observer: Observer<string>)=>{
setTimeout(()=>{
  observer.next('firstr package');
},3000);  
setTimeout(()=>{
  observer.next('second package');
},5000); 
setTimeout(()=>{
  observer.complete();
},5000);  
setTimeout(()=>{
  observer.next('third package');
},6000); 
setTimeout(()=>{ 
  observer.error('this doees not work');
},7000);  
    });

this.custyomSub=    this.theDataSource.subscribe(
    (data:string)=>{console.log(data)},
    (error:string)=>{console.log(error)},
    ()=>{console.log('completed'); }
    );
 
    }
ngOnDestroy(){
  this.custyomSub.unsubscribe();
}
}
