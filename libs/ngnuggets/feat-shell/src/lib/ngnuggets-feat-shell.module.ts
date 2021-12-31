import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';
import { SharedMaterialModule } from '@stevewitmanangular/shared/material';

@NgModule({
  imports: [CommonModule, RouterModule, SharedMaterialModule],
  declarations: [MainNavComponent],
  exports: [MainNavComponent],
})
export class NgnuggetsFeatShellModule {}
