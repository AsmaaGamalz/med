import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { HighestComponent } from './highest/highest.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { PaboutComponent } from './pabout/pabout.component';
import { SseriveComponent } from './sserive/sserive.component';
import { DdepartmentComponent } from './ddepartment/ddepartment.component';
import { NavComponent } from './nav/nav.component';
import { MeetingComponent } from './meeting/meeting.component';

import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentComponent,
    HighestComponent,
    GalleryComponent,
    ContactComponent,
    PaboutComponent,
    SseriveComponent,
    DdepartmentComponent,
    NavComponent,
    MeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
