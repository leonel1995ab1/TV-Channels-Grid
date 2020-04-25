//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Angular Material modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

//Aplication components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { ChannelDetailsComponent } from './pages/channel-details/channel-details.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChannelListComponent,
    ChannelDetailsComponent,
    ComingSoonComponent
  ],
  imports: [
    //Angular modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //Angular Material modules
    MatSelectModule,
    MatDialogModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
