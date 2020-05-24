import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { ChannelDetailsComponent } from './pages/channel-details/channel-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'channels',
    pathMatch: 'full'
  },
  {
    path: 'channels',
    component: ChannelListComponent
  },
  {
    path: 'channel/new',
    component: ChannelDetailsComponent
  },
  {
    path: 'channel/:id',
    component: ChannelDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
