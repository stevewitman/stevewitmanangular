import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminNgnuggetsFeatShellModule } from '@stevewitmanangular/admin-ngnuggets/feat-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminNgnuggetsFeatShellModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    AngularFireStorageModule,
    provideStorage(() => getStorage()),
  ],
  providers: [{ provide: BUCKET, useValue: 'dev-ngnuggetsdotcom.appspot.com' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
