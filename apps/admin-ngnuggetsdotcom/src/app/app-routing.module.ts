import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '@stevewitmanangular/admin-ngnuggets/home';
import { AdminNgnuggetsFeatPostsModule } from '@stevewitmanangular/admin-ngnuggets/feat-posts';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'a-ngn: Home',
    },
  },
  {
    path: 'posts',
    loadChildren: () => AdminNgnuggetsFeatPostsModule,
    data: {
      title: 'a-ngn: Posts',
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
