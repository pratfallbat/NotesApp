import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:string;
  

  signUpUser(email:string,password:string){
firebase.auth().createUserWithEmailAndPassword(email,password)
.catch(
error=>  console.error(error)
  
)
  }


  signInUser(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(response=>{
        this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
                .then(
                  (token: string)=> this.token=token
                )  
          console.log('token saved :   '+this.token)
          console.log(response);
        })
    .catch(error=> console.log(error))
  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
    .then(
      (token: string)=> this.token=token
    )  
     return this.token;
  }

  isAuthenticated(){
    return this.token!=null;
  }

  logout(){
    firebase.auth().signOut();
    this.token=null;
  }
  constructor(private router:Router) { }

}
