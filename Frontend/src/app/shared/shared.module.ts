import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormUSAPipe } from './pipes/date-form-usa.pipe';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ToastrModule } from 'ngx-toastr';
import {
  MatInputModule,
  MatProgressBarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DateFormUSAPipe,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  exports: [
    CommonModule,
    DateFormUSAPipe,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule,
    ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
    };
  }
}
