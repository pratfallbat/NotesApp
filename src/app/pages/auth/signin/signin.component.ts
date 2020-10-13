import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as  fromApp from '../../../store/app.reducer';
import * as  AuthActions from '../../../services/store-auth/auth.action';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }
  onSignIn(form:NgForm){
     
    const email = form.value.email;
    const password = form.value.password;
    console.log(email,password)
    this.store.dispatch(new AuthActions.TrySignin({username: email,password: password}))
    
  }
}
 