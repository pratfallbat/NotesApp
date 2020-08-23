import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router/';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private auth:AuthService,private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
  
    if (this.auth.isAuthenticated()) {
      // logged in so return true
      return true;
  }

  // not logged in so redirect to login page with the return url
  this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
  return false;
  }
}
