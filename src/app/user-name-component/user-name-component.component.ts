import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-name-component',
  templateUrl: './user-name-component.component.html',
  styleUrls: ['./user-name-component.component.css']
})
export class UserNameComponentComponent {
  @Input()
  storeName: string;

}
