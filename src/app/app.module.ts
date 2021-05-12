import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MidgroundComponent } from './midground/midground.component';
import { FooterComponent } from './footer/footer.component';
import { MalickComponent } from './malick/malick.component';

@NgModule({
  declarations: [
    AppComponent,
    MidgroundComponent,
    FooterComponent,
    MalickComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
