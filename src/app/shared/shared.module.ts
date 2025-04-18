import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShamsiDatePipe } from './pipes/shamsi-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    ShamsiDatePipe
  ],
  exports: [
    ShamsiDatePipe
  ]
})
export class SharedModule { }
