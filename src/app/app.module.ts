import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceComponent } from './modules/annonce/annonce.component';
import { HostService } from './shared/services/host.service';
import { HttpClientRequest } from './shared/services/http-request.service';
import { DetailAnnonceComponent } from './modules/annonce/detail-annonce/detail-annonce.component';
import { AddAnnonceComponent } from './modules/annonce/add-annonce/add-annonce.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [HostService,HttpClientRequest],
  bootstrap: [AppComponent]
})
export class AppModule { }
