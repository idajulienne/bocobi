import { Component, OnInit } from '@angular/core';
import { AbonnementService } from 'src/app/shared/Abonnement.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

  data:any =[];
  
  constructor(private abnService: AbonnementService) {
    console.log(this.data);
    
    this.abnService.getAbonnements().subscribe(d=>{
      this.data=d; 
      console.log(this.data);
           
    });
  }

  ngOnInit(): void {
  }

}
