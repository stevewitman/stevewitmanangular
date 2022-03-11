import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';


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
    FormsModule,
    ReactiveFormsModule,
    SharedUiMaterialModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireStorageModule,
  ],
  declarations: [AddPostComponent, PostsPageComponent],
  providers: [{ provide: BUCKET, useValue: 'dev-ngnuggetsdotcom.appspot.com' }],
})
export class AdminNgnuggetsFeatPostsModule {}
