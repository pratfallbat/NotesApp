import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

import { HttpEvent } from "@angular/common/http";
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../services/store-auth/auth.reducer';
// import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../../services/store-auth/auth.action';

import { Observable } from 'rxjs';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {

authState: Observable<fromAuth.State>;
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  constructor(public data: DataStorageService, private store: Store<fromApp.AppState>) {}
  
  ngOnInit() {
     this.authState = this.store.select('auth');
   }
 
  
  onSaveData() {
    this.data.storeRecipes().subscribe((res: HttpEvent<Object>) => {
      console.log(res);
    });
  }
  onFetchData() {
    this.data.getRecipes();
  }
  onLogOut() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
