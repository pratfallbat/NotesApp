import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

import { Http, Response } from "@angular/http";
import { AuthService } from "src/app/services/auth.service";
import { HttpEvent } from "@angular/common/http";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  constructor(public data: DataStorageService, public auth: AuthService) {}
  // made public for aot compilation

  ngOnInit() {}
  onSaveData() {
    this.data.storeRecipes().subscribe((res: HttpEvent<Object>) => {
      console.log(res);
    });
  }
  onFetchData() {
    this.data.getRecipes();
  }
  onLogOut() {
    this.auth.logout();
  }
}
