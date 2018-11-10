import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LoaderComponent } from './components/layout/loader/loader.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PeopleCommunicationComponent } from './components/totem/people-communication/people-communication.component';
import { SoundGraphComponent } from './components/totem/sound-graph/sound-graph.component';
import { AdvBannerComponent } from './components/totem/adv-banner/adv-banner.component';
import { SendMessageComponent } from './components/pages/send-message/send-message.component';
import { SendMessageControlComponent } from './components/chat/send-message-control/send-message-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    HomeComponent,
    PeopleCommunicationComponent,
    SoundGraphComponent,
    AdvBannerComponent,
    SendMessageComponent,
    SendMessageControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
