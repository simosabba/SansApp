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
import { TotemComponent } from './components/pages/totem/totem.component';
import { ControlComponent } from './components/pages/control/control.component';
import { NoiseChartComponent } from './components/controls/noise-chart/noise-chart.component';
import { AdmComponent } from './components/pages/adm/adm.component';
import { NoiseControlComponent } from './components/controls/noise-control/noise-control.component';
import { ChatComponent } from './components/chat/chat/chat.component';
import { ImgPreloadComponent } from './components/img-preload/img-preload.component';

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
    TotemComponent,
    ControlComponent,
    NoiseChartComponent,
    AdmComponent,
    NoiseControlComponent,
    ChatComponent,
    ImgPreloadComponent
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
