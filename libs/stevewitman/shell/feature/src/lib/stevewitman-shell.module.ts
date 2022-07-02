import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@stevewitmanangular/shared/ui/material';
import { StevewitmanShellRoutingModule } from './stevewitman-shell-routing.module';
import { SharedUiAuthStatusModule } from '@stevewitmanangular/shared/ui/auth-status';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    StevewitmanShellRoutingModule,
    SharedUiMaterialModule,
    SharedUiAuthStatusModule,
  ],
  declarations: [MainNavComponent],
  exports: [MainNavComponent],
})
export class StevewitmanShellModule {}
