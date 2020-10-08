import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm){
    console.log(form)
    const email = form.value.email;
    const password = form.value.password;
    console.log(email,password)
     this.auth.signUpUser(email,password);
    
  }

}
