import { Injectable } from '@angular/core';

import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';


import {
  Auth,
  User,
  getAuth,
  authState,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userAuthState$: Observable<User | null> = of(null);

  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {
    this.userAuthState$ = authState(this.auth);

    this.userAuthState$.subscribe((res) => {
      console.log('[AUTH SERV] NEW AUTH STATE:', res);
    });
  }

  getUserAuthState() {
    return this.userAuthState$;
  }

  async signInWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    const googleAuth = getAuth();
    await signInWithPopup(googleAuth, googleAuthProvider)
      .then((result) => {
          return this.updateUserData(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log('[AUTH SERV] ERROR WHILE SIGNING IN');
        console.log('[AUTH SERV] ERROR CODE:', errorCode);
        console.log('[AUTH SERV] ERROR MESSAGE:', errorMessage);
        console.log('[AUTH SERV] ERROR EMAIL:', email);
        console.log('[AUTH SERV] ERROR CREDENTIAL:', credential);
      });
  }

  updateUserData(user: User) {
    const userRef = doc(this.firestore, `users/${user.uid}`);
    console.log('[AUTH SERV] UID:', user.uid);
    console.log('[AUTH SERV] EMAIL:', user.email);
    console.log('[AUTH SERV] NAME:', user.displayName);
    console.log('[AUTH SERV] URL:', user.photoURL);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoURL,
    };
    return setDoc(userRef, data, { merge: true });
  }

  async signOutWithGoogle() {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        // console.log('[AUTH SERV] SUCCESSFULLY SIGNED OUT');
      })
      .catch((error) => {
        console.log('[AUTH SERV] ERROR WHILE SIGNING OUT');
      });
  }
}
