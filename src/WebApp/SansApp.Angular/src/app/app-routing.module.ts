import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SendMessageComponent } from './components/pages/send-message/send-message.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'chat', component: SendMessageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
