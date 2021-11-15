import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienService } from '../annonce.service';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {
  idAnnonce;
  annonce;
  constructor(private router:Router, private bienService:BienService) {
    if(this.router.getCurrentNavigation().extras.state){
      this.idAnnonce = this.router.getCurrentNavigation().extras.state.annonce;
    }
  }

  ngOnInit(): void {
   this.bienService.getBienById(this.idAnnonce).subscribe(res =>{
    this.annonce = res;
   });
  }

  convertebyteToImg(byteImg){
    return "data:image/jpeg;base64,"+byteImg
  }

}
