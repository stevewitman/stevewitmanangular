import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '@stevewitmanangular/admin-ngnuggets/home';
import { AddPostModule } from '@stevewitmanangular/admin-ngnuggets/posts/feature/add-post';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'A-ngNug: Home',
    },
  },
  {
    path: 'posts',
    loadChildren: () => AddPostModule,
    data: {
      title: 'A-ngNug: Posts',
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
