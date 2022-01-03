import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '@stevewitmanangular/admin-ngnuggets/feat-home';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'Admin-ngNuggets - Home',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
