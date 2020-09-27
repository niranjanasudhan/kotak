import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShiftComponent } from './shift/shift.component';
import { SpaceComponent } from './space/space.component';
import { UploadMapComponent } from './upload-map/upload-map.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  }
  ,
  {
    path:'dashboard',
    component:DashboardComponent
  }
  ,
  {
    path:'space',
    component:SpaceComponent
  }
  ,
  {
    path:'shift',
    component:ShiftComponent
  }
  ,
  {
    path:'upload-map',
    component:UploadMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
