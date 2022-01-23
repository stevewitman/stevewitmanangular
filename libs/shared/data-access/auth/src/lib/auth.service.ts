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
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   const email = error.email;
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      //   console.log('[AuthService] ERROR while signing in !!!');
      //   console.log('[AuthService] ERROR code:', errorCode);
      //   console.log('[AuthService] ERROR messagee:', errorMessage);
      //   console.log('[AuthService] ERROR email:', email);
      //   console.log('[AuthService] ERROR credential:', credential);
      // });
  }

  updateUserData(user: User) {
    const userRef = doc(this.firestore, `users/${user.uid}`);
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
        // console.log('[AuthService] SUCCESSFULLY signed out');
      })
      .catch((error) => {
        console.log('[AuthService] ERROR while signing out', error);
      });
  }
}
