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
import { RecipesComponent } from "./pages/recipes/recipes.component";
import { RecipeListComponent } from "./pages/recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./pages/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./pages/recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./pages/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./pages/shopping-list/shopping-edit/shopping-edit.component";
import { DropDownDirective } from "./pages/shared/dropdowndirective";
import { ShoppingListService } from "./services/shopping-list.service";
import { RecipeStartComponent } from "./pages/recipes/recipe-start/recipe-start.component";
import { RecipeeditComponent } from "./pages/recipes/recipeedit/recipeedit.component";
import { ExtraditComponent } from "./pages/extradit/extradit.component";
import { RecipeServiceService } from "./services/recipe-service.service";
import { SignupComponent } from "./pages/auth/signup/signup.component";
import { SigninComponent } from "./pages/auth/signin/signin.component";
import { AuthService } from "./services/auth.service";

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
    DropDownDirective,
    
     ExtraditComponent,
    SignupComponent,
    SigninComponent,
    HomepageComponent,
    SignupnewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [
    DataStorageService,
    RecipeServiceService,
    AuthService,
    AuthguardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
