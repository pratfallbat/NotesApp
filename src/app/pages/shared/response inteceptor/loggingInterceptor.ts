import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import "rxjs/add/operator/do";
import { tap } from "rxjs/operators";

import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  //   constructor(private auths: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // return null;
    //   using in place of do
    return next.handle(req).pipe(
      tap(
        (event) => {
          console.log("Logging interceptor", event);
        },
        (err: any) => {
          console.log("tap error");
        }
      )
    );
  }
}
