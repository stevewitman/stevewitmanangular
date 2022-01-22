import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';
import { SharedUiMaterialModule } from '@stevewitmanangular/shared/ui/material';
import { SharedUiAuthStatusModule } from '@stevewitmanangular/shared/ui/auth-status';

import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedUiMaterialModule,
    SharedUiAuthStatusModule,
    MatBadgeModule,
    MatDividerModule,
    MatMenuModule,
  ],
  declarations: [MainNavComponent],
  exports: [MainNavComponent],
})
export class AdminNgnuggetsFeatShellModule {}
