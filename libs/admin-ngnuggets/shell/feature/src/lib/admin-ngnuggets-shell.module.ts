import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@stevewitmanangular/shared/ui/material';
import { AdminNgnuggetsShellRoutingModule } from './admin-ngnuggets-shell-routing.module';
import { SharedUiAuthStatusModule } from '@stevewitmanangular/shared/ui/auth-status';
import { MainNavComponent } from './main-nav/main-nav.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AdminNgnuggetsShellRoutingModule,
    SharedUiMaterialModule,
    SharedUiAuthStatusModule,
    MatBadgeModule,
    MatDividerModule,
    MatMenuModule,
  ],
  declarations: [MainNavComponent],
  exports: [MainNavComponent],
})
export class AdminNgnuggetsShellModule {}
