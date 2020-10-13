import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServerComponent } from "./pages/server/server.component";
import { ServersComponent } from "./pages/servers/servers.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./pages/header/header.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { SidebarComponent } from "./pages/sidebar/sidebar.component";
import { ShoppingListComponent } from "./pages/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./pages/shopping-list/shopping-edit/shopping-edit.component";

import { ExtraditComponent } from "./pages/extradit/extradit.component";
import { RecipeServiceService } from "./services/recipe-service.service";
import { SignupComponent } from "./pages/auth/signup/signup.component";
import { SigninComponent } from "./pages/auth/signin/signin.component";

import { DataStorageService } from "./pages/shared/data-storage.service";
import { HttpModule } from "@angular/http";
import { AuthguardService } from "./services/authguard.service";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { SignupnewComponent } from "./pages/signupnew/signupnew.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./pages/shared/auth-inteceptor";
import { LoggingInterceptor } from "./pages/shared/response inteceptor/loggingInterceptor";
import { StoreModule } from "@ngrx/store";

import { reducers } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './services/store-auth/auth.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {  StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from './../environments/environment'
import { SharedmoduleModule } from './shared/sharedmodule/sharedmodule.module';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    
    
     ExtraditComponent,
    SignupComponent,
    SigninComponent,
    HomepageComponent,
    SignupnewComponent,
  ],
  imports: [
    SharedmoduleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule.forRoot(),
    !environment.production? StoreDevtoolsModule.instrument() : []

  ],
  providers: [
    DataStorageService,
    RecipeServiceService,
    AuthguardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
