import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from './core/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public globalSerivce: GlobalDataService) { }

  ngOnInit() {
  }

}
