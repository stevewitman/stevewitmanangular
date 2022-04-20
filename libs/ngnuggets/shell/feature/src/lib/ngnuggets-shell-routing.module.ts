import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '@stevewitmanangular/ngnuggets/home';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'ngNuggets - Home',
      position: 1,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top', // only works WITHOUT height: 100% on body,html
      preloadingStrategy: PreloadAllModules,
    }),
  ],

  exports: [RouterModule],
})
export class NgnuggetsShellRoutingModule {}
