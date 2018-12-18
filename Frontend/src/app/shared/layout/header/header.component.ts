import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private _userName: string;
  get userName(): string {
    return this._userName;
  }

  constructor() { }

}
