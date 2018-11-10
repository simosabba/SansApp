import { TotemComponent } from './components/pages/totem/totem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SendMessageComponent } from './components/pages/send-message/send-message.component';
import { ControlComponent } from './components/pages/control/control.component';

const routes: Routes = [
  { path: '', component: TotemComponent},
  { path: 'chat', component: ControlComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
