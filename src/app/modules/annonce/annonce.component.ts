import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienService } from './annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  list;
  constructor(private bienService:BienService,private router:Router) { }

  ngOnInit(): void {
    this.bienService.getBien().subscribe(res=>{      
      this.list = res;
    });
  
  }

  /**
   * show Detail annonce
   * @param $event 
   */
  showDetail($event){
    console.log($event.idBien);
    
    this.router.navigateByUrl('/detail',{state:{annonce:$event.idBien}})
  }

  /**
   * add item
   */
  addItem(){
    this.router.navigateByUrl('/add')
  }

  convertebyteToImg(byteImg){
    return "data:image/jpeg;base64,"+byteImg
  }
}
