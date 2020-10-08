import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import "rxjs/add/operator/do";

import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  //   constructor(private auths: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return null;
    //   return next.handle(req).do((event) => {
    //   console.log("Logging Interceptor", event);
    // });
  }
}
