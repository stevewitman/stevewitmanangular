import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StevewitmanShellModule } from '@stevewitmanangular/stevewitman/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StevewitmanShellModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
