import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'channel-list',
    pathMatch: 'full'
  },
  {
    path: 'channel-list',
    component: ChannelListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
