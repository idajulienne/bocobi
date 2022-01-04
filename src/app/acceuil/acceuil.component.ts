import { Component, OnInit } from '@angular/core';

import { HomeModel } from '../../models/home';
import { DataService } from '../data.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  data:any =[];
 
  homes$ = this.homeService.getHomes();
 
  constructor(private homeService: DataService) {
    this.homeService.getHomes().subscribe(d=>{
      this.data=d;

    });

    console.warn(this.data);

  }

  ngOnInit(): void {
  }



}
