import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  serverName: string = "Mysql";
  serverPort: number = 2100;
  value: string = ' ';
  mytwin: string = ' ';
  isloggedIn: boolean = false;
  onserverChange() {
    this.serverPort = 4500;
  };

  ontakingValue(e: any) {
    this.isloggedIn = true;
    this.value = e.target.value;


  };
  getcolor() {

  }
}
