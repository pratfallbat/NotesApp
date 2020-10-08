import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auths: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Intercepted :");

    //   const copiedReq = req.clone({headers:req.headers.set('','')});
    //   override headers above
    const copiedReq = req.clone({
      params: req.params.set("auth", this.auths.getToken()),
    });
    return next.handle(copiedReq);
  }
}
