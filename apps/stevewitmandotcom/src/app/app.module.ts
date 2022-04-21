import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StevewitmanShellModule } from '@stevewitmanangular/stevewitman/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StevewitmanShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
