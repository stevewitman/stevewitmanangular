import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';
import { SharedMaterialModule } from '@stevewitmanangular/shared/material';

import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule,
    MatBadgeModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  declarations: [MainNavComponent],
  exports: [MainNavComponent],
})
export class AdminNgnuggetsFeatShellModule {}
