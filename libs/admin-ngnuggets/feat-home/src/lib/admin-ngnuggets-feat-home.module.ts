import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedMaterialModule } from '@stevewitmanangular/shared/material';
import { HomePageComponent } from './home-page/home-page.component';

import { MatMenuModule } from '@angular/material/menu';

export const adminNgnuggetsFeatHomeRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    MatMenuModule,
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class AdminNgnuggetsFeatHomeModule {}
