import { Component, OnInit, Inject } from '@angular/core';
import { Customer } from 'src/app/core/models/customer';
import { CustomerService } from 'src/app/core/services/customer.service';
import { SubscriptionManagerService } from 'src/app/core/helpers/subscription-manager.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDatepickerInputEvent
} from '@angular/material';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.css'],
  providers: [SubscriptionManagerService, CustomerService]
})
export class CustomerModalComponent implements OnInit {
  public customer: Customer = {
    Id: 0,
    FirstName: '',
    LastName: '',
    Address1: '',
    Address2: '',
    City: '',
    ZIP: '',
    State: '',
    DateOfBirth: null,
    FullName: '',
    Age: 0
  };
  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService,
    private subManager: SubscriptionManagerService,
    public dialogRef: MatDialogRef<CustomerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  ngOnInit() {
    this.GetById(this.data);
  }

  GetById(idCustomer: number) {
    const service = this.customerService.GetCustomerById(idCustomer).subscribe(
      data => {
        if (data != null) {
          this.customer = data;
        }
      },
      error => {
        const errorMessage = `error_message: ${error.message}`;
        throw Error(errorMessage);
      },
      () => {}
    );
    this.subManager.add(service);
  }

  Create() {
    const service = this.customerService
      .CreateCustomer(this.customer)
      .subscribe(
        data => {
          this.toastr.success(`Success create ${data.FullName}`);
        },
        error => {
          const errorMessage = `error_message: ${error.message}`;
          throw Error(errorMessage);
        },
        () => {
          this.dialogRef.close();
        }
      );
    this.subManager.add(service);
  }

  Update() {
    const service = this.customerService
      .UpdateCustomer(this.customer)
      .subscribe(
        data => {
          this.toastr.success(`Success update ${data.FullName}`);
        },
        error => {
          const errorMessage = `error_message: ${error.message}`;
          throw Error(errorMessage);
        },
        () => {
          this.dialogRef.close();
        }
      );
    this.subManager.add(service);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.customer.DateOfBirth = event.value;
  }
}
