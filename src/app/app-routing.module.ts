import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './modules/annonce/add-annonce/add-annonce.component';
import { AnnonceComponent } from './modules/annonce/annonce.component';
import { DetailAnnonceComponent } from './modules/annonce/detail-annonce/detail-annonce.component';

const routes: Routes = [
  {path:'',redirectTo: '/annonce',pathMatch:'full'},
  {path:'annonce',component:AnnonceComponent},
  {path:'add',component:AddAnnonceComponent},
  {path:'detail',component:DetailAnnonceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
