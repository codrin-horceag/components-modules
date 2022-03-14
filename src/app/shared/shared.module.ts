import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivideComponent } from './divide/divide.component';



@NgModule({
  declarations: [DivideComponent],
  imports: [
    CommonModule
  ],
  exports: [DivideComponent]
})
export class SharedModule { }
