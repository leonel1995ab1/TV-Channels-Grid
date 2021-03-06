//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Angular Material modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Aplication components nd services
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { ChannelDetailsComponent } from './pages/channel-details/channel-details.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { CategoryService } from 'src/services/category.service';
import { InterceptorService } from 'src/services/interceptor.service';
import { LoadingComponent } from './components/loading/loading.component';
import { ChannelsGridComponent } from './pages/channels-grid/channels-grid.component';
import { GridListComponent } from './pages/grid-list/grid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChannelListComponent,
    ChannelDetailsComponent,
    ComingSoonComponent,
    ImageUploadComponent,
    LoadingComponent,
    ChannelsGridComponent,
    GridListComponent
  ],
  imports: [
    //Angular modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //Angular Material modules
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [CategoryService],
      useFactory: (categoryService: CategoryService) => {
        return () => categoryService.getCategories();
      },
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
