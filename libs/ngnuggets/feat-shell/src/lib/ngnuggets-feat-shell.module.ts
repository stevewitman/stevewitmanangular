import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';
import { SharedUiMaterialModule } from '@stevewitmanangular/shared/ui/material';
import { SharedUiAuthStatusModule } from '@stevewitmanangular/shared/ui/auth-status';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedUiMaterialModule,
    SharedUiAuthStatusModule,
  ],
  declarations: [MainNavComponent],
  exports: [MainNavComponent],
})
export class NgnuggetsFeatShellModule {}
