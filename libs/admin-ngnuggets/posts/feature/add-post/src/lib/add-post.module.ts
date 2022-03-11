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
import { AddPostComponent } from './add-post.component';

export const adminNgnuggetsPostsRoutes: Route[] = [
  {
    path: '',
    component: AddPostComponent,
  },
  {
    path: 'add-post',
    component: AddPostComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminNgnuggetsPostsRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedUiMaterialModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireStorageModule,
  ],
  declarations: [AddPostComponent],
  providers: [{ provide: BUCKET, useValue: 'dev-ngnuggetsdotcom.appspot.com' }],
})
export class AddPostModule {}
