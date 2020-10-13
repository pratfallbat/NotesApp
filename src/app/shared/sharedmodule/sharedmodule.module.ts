import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownDirective } from 'src/app/pages/shared/dropdowndirective';

@NgModule({
  declarations: [DropDownDirective],

  exports: [
    CommonModule,
    DropDownDirective
  ]
})
export class SharedmoduleModule { 

}
