import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { SharedUiMaterialModule } from '@stevewitmanangular/shared/ui/material';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsPageComponent } from './posts-page/posts-page.component';

// export const adminNgnuggetsFeatPostsRoutes: Route[] = [
export const adminNgnuggetsFeatPostsRoutes: Route[] = [
  {
    path: '',
    component: PostsPageComponent,
  },
  {
    path: 'add-post',
    component: AddPostComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminNgnuggetsFeatPostsRoutes),
    SharedUiMaterialModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [AddPostComponent, PostsPageComponent],
})
export class AdminNgnuggetsFeatPostsModule {}
