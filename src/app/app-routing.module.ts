import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './modules/annonce/annonce.component';

const routes: Routes = [
  {path:'',redirectTo: '/annonce',pathMatch:'full'},
    {path:'annonce',component:AnnonceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
