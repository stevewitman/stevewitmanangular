import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  doc,
  updateDoc,
  docData,
} from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';

import { Post, DailyPosts, DailyPostsGroup } from '@stevewitmanangular/admin-ngnuggets/posts/data-access/models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  getDailyPostsGroupById(id: string): Observable<DailyPosts> {
    // POSTS: 'recent', 'month', '2022-01', '2022-02', '2022-03'
    const recentRef = doc(this.firestore, `dailyPostsGroups/${id}`);
    return docData(recentRef, { idField: 'id' }) as Observable<DailyPosts>;
  }

  addPosts(posts: DailyPosts) {
    const postsRef = collection(this.firestore, 'posts');
    return addDoc(postsRef, posts);
  }

  updatePosts(posts: DailyPosts) {
    const postsRef = collection(this.firestore, 'posts');
    return addDoc(postsRef, posts);
  }

  constructor(private firestore: Firestore) {}
}
