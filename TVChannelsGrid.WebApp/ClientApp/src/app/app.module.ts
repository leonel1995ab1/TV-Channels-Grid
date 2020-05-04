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
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

//Aplication components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { ChannelDetailsComponent } from './pages/channel-details/channel-details.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChannelListComponent,
    ChannelDetailsComponent,
    ComingSoonComponent,
    ImageUploadComponent,
    PopupComponent
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
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
