import { NgModule } from '@angular/core';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { StevewitmanShellModule } from '@stevewitmanangular/stevewitman/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StevewitmanShellModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

