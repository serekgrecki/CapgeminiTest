import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormUSAPipe } from './pipes/date-form-usa.pipe';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ToastrModule } from 'ngx-toastr';
import {
  MatInputModule,
  MatProgressBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatProgressBarModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DateFormUSAPipe,
  ],
  exports: [
    CommonModule,
    DateFormUSAPipe,
    MatInputModule,
    MatProgressBarModule,
    ToastrModule
    ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
