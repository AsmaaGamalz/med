import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import{ AngularFireModule} from'@angular/fire';
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
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyApAxgQ0du3uMN76mPYLFTYKTVzxxaQceg",
      authDomain: "chemical-8b29a.firebaseapp.com",
      databaseURL: "https://chemical-8b29a.firebaseio.com",
      projectId: "chemical-8b29a",
      storageBucket: "chemical-8b29a.appspot.com",
      messagingSenderId: "831729955624",
      appId: "1:831729955624:web:9f4530ab8efdd8c749161d",
      measurementId: "G-DMBQKD7L2W"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
