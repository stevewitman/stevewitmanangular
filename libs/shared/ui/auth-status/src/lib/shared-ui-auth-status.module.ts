import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStatusComponent } from './auth-status/auth-status.component';
import { SharedUiMaterialModule } from '@stevewitmanangular/shared/ui/material';

@NgModule({
  imports: [CommonModule, SharedUiMaterialModule],
  declarations: [AuthStatusComponent],
  exports: [ AuthStatusComponent ]
})
export class SharedUiAuthStatusModule {}
