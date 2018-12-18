import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
import { CustomerModalComponent } from 'src/app/modals/customer-modal/customer-modal.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    CustomerRoutingModule
  ],
  declarations: [
    CustomerComponent,
    CustomerModalComponent
  ],
  entryComponents: [CustomerModalComponent],
  exports: [
    CustomerComponent,
    CustomerModalComponent
  ]
})
export class CustomerModule {}
