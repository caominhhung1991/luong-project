import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubjectModalComponent } from './add-subject-modal/add-subject-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddSubjectModalComponent],
  exports: [
    AddSubjectModalComponent
  ]
})
export class ModalsModule { }
