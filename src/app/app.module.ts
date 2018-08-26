import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EndComponent } from './end/end.component';
import { GameComponent } from './game/game.component';
import { ControlsComponent } from './controls/controls.component';
import { StartComponent } from './start/start.component';
import {ConstantsService } from './_services/constants.service';
import { FeedbackComponent } from './feedback/feedback.component';
import {appRoutes } from './app.routes';

@NgModule({
  declarations: [
    HomeComponent,
    EndComponent,
    GameComponent,
    ControlsComponent,
    StartComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConstantsService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
