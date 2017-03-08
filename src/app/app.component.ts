import { Component, Input } from '@angular/core';
import { UserNameComponentComponent } from './user-name-component/user-name-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  supermarketName: string;
  products: any;

  constructor(){
    this.supermarketName = 'Jumbo';

    this.products = [
        {name: 'Sinaasappels', quantity: 25},
        {name: 'Appels', quantity: 50},
        {name: 'Citroenen', quantity: 5},
        {name: 'Mandarijnen', quantity: 15},
        {name: 'Bananen', quantity: 31}
    ]
  }
}
