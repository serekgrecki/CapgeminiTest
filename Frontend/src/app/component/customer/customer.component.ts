import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { SubscriptionManagerService } from 'src/app/core/helpers/subscription-manager.service';
import { GlobalDataService } from 'src/app/core/services/global.service';
import { Customer } from 'src/app/core/models/customer';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { CustomerModalComponent } from 'src/app/modals/customer-modal/customer-modal.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [SubscriptionManagerService, CustomerService]
})
export class CustomerComponent implements OnInit {
  loading = true;
  customers: Customer[] = [];
  displayedColumns: string[] = [
    'FullName',
    'Address1',
    'Address2',
    'City',
    'ZIP',
    'State',
    'Age',
    'Actions'
  ];
  constructor(
    public globalService: GlobalDataService,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private subManager: SubscriptionManagerService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.GetCustomers();
  }

  GetCustomers() {
    const service = this.customerService.GetAllCustomers().subscribe(
      data => {
        this.customers = data;
      },
      error => {
        this.ErrorHandler(error);
      },
      () => {
        this.loading = false;
      }
    );
    this.subManager.add(service);
  }

  AddCustomer() {
    const dialogRef = this.dialog.open(CustomerModalComponent, {
      width: '400px',
      data: 0
    });
    dialogRef.afterClosed().subscribe(result => {
      this.GetCustomers();
    });
  }

  UpdateCustomer(idCustomer: number) {
    const dialogRef = this.dialog.open(CustomerModalComponent, {
      width: '400px',
      data: idCustomer
    });
    dialogRef.afterClosed().subscribe(result => {
      this.GetCustomers();
    });
  }

  DeleteCustomer (idCustomer: number) {
    const service = this.customerService.DeleteCustomer(idCustomer).subscribe(
      data => {
        this.toastr.success(data);
      },
      error => {
        this.ErrorHandler(error);
      },
      () => {
        this.loading = false;
        this.GetCustomers();
      }
    );
    this.subManager.add(service);
  }

  ErrorHandler(error) {
    this.loading = false;
    const errorMessage = `error_message: ${error.message}`;
    this.toastr.error(errorMessage);
    throw Error(errorMessage);
  }

}
