import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
allowNewServer=true;
csv='No server is created yet';
serverName= '';
getstatus(){return this.allowNewServer;}
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer =!this.allowNewServer;
    },2000);
  }

  ngOnInit() {
  }
  createServer(){
    this.csv='Server is created with name as'+this.serverName;
  }

  onUpdateServerName(event: any){
this.serverName=(<HTMLInputElement>event.target).value;
  }
}
