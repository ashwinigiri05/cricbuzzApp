import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AdminformComponent } from './admin/adminform/adminform.component';
import { PlayerlistComponent } from './admin/playerlist/playerlist.component';
import { AdminSummeryComponent } from './admin/admin-summery/admin-summery.component';
import { ScorCardComponent } from './scor-card/scor-card.component';
import { CommentryComponent } from './commentry/commentry.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    AdminformComponent,
    PlayerlistComponent,
    AdminSummeryComponent,
    ScorCardComponent,
    CommentryComponent,
 
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
