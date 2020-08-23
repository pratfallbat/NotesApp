import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

import { Http, Response } from '@angular/http';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  constructor(private data:DataStorageService,private auth:AuthService) {
  
   }

  ngOnInit() {
  }
  onSaveData(){
    this.data.storeRecipes()
    .subscribe(
      (res:Response) => {console.log(res);}
      );
    
  }
  onFetchData(){
this.data.getRecipes();
  }
  onLogOut(){
    this.auth.logout();
  }
}
