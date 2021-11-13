import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BienService } from './annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  list;
  constructor(private bienService:BienService) { }

  ngOnInit(): void {
    this.bienService.getBien().subscribe(res=>{      
      this.list = res;
    });
  
  }

  showDetail($event){
    console.log($event);
  }

  addItem(){

  }
}
