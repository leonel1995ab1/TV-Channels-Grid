import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { ChannelDetailsComponent } from './pages/channel-details/channel-details.component';
import { ChannelsGridComponent } from './pages/channels-grid/channels-grid.component';
import { GridListComponent } from './pages/grid-list/grid-list.component';

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
  },
  {
    path: 'grids',
    component: GridListComponent
  },
  {
    path: 'grid/new',
    component: ChannelsGridComponent
  },
  {
    path: 'grid/:id',
    component: ChannelsGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
