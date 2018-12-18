import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { SubscriptionManagerService } from 'src/app/core/helpers/subscription-manager.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [SubscriptionManagerService, CustomerService]
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
