import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MidgroundComponent } from './midground/midground.component';
import { FooterComponent } from './footer/footer.component';
import { MalickComponent } from './malick/malick.component';
import { ScoreComponent } from './score/score.component';
import { ScorerService } from './scorer.service';

@NgModule({
  declarations: [
    AppComponent,
    MidgroundComponent,
    FooterComponent,
    MalickComponent,
    ScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScorerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
