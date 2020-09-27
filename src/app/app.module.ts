import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SpaceComponent } from './space/space.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ShiftComponent } from './shift/shift.component';
import { UploadMapComponent } from './upload-map/upload-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpaceComponent,
    DashboardComponent,
    MenubarComponent,
    ShiftComponent,
    UploadMapComponent
  ],
  imports: [
   
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
