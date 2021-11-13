import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceComponent } from './modules/annonce/annonce.component';
import { HostService } from './shared/services/host.service';
import { HttpClientRequest } from './shared/services/http-request.service';
import { DetailAnnonceComponent } from './modules/annonce/detail-annonce/detail-annonce.component';
import { AddAnnonceComponent } from './modules/annonce/add-annonce/add-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    DetailAnnonceComponent,
    AddAnnonceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HostService,HttpClientRequest],
  bootstrap: [AppComponent]
})
export class AppModule { }
