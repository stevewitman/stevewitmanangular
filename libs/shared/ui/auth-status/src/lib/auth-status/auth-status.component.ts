import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'stevewitmanangular-auth-status',
  templateUrl: './auth-status.component.html',
  styleUrls: ['./auth-status.component.scss'],
})
export class AuthStatusComponent {
  @Input() isHandset$: Observable<boolean | null> = of(null);
  @Input() userAuthStatus$: Observable<User | null> = of(null);
  @Output() signInWithGoogle = new EventEmitter<boolean>();
  @Output() signOutWithGoogle = new EventEmitter<boolean>();

  onSignIn() {
    this.signInWithGoogle.emit(true);
  }

  onSignOut() {
    this.signOutWithGoogle.emit(true);
  }
}
