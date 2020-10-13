import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../services/store-auth/auth.reducer';
import {  switchMap , take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Intercepted :");

   
    return this.store.select('auth')

      .pipe(switchMap((authState: fromAuth.State) => {
        const copiedReq = req.clone({
          params: req.params.set("auth", authState.token),
        });
        return  next.handle(copiedReq);
    }));
    
    
  }
}
