import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router/';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../services/store-auth/auth.reducer';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private store:Store<fromApp.AppState>,private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return   this.store.select('auth').pipe(map((authState: fromAuth.State) => {
      return authState.authenticated;
    }));
    /* if () {
      return true;
  }
  this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
    return false;
     */
  }
}
