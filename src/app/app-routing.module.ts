import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { HighestComponent } from './highest/highest.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { PaboutComponent } from './pabout/pabout.component';
import { SseriveComponent } from './sserive/sserive.component';
import { MeetingComponent } from './meeting/meeting.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'department',component:DepartmentComponent},
{path:'highest',component:HighestComponent},
{path:'gallery',component:GalleryComponent},
{path:'contact',component:ContactComponent},
{path:'pabout',component:PaboutComponent},
{path:'sserive',component:SseriveComponent},
{path:'ddepartment',component:DepartmentComponent},
{path:'meeting',component:MeetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
