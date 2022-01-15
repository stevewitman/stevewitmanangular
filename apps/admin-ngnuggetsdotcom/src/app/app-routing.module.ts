import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '@stevewitmanangular/admin-ngnuggets/feat-home';
import { AdminNgnuggetsFeatPostsModule } from '@stevewitmanangular/admin-ngnuggets/feat-posts';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'Admin-ngNuggets - Home',
    },
  },
  {
    path: 'posts',
    loadChildren: () => AdminNgnuggetsFeatPostsModule,
    data: {
      title: 'Admin-ngNuggets - Posts',
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
