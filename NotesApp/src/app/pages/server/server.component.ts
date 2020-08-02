import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
status=true;
  getstatus(){return this.status;}
  constructor() { 
    setTimeout(()=>{
      this.status =!this.status;
    },2000);
  }

  ngOnInit() {
  }

}
