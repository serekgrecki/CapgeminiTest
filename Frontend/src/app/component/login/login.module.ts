import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule {}
