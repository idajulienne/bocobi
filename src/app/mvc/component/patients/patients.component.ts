import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  data:any =[];
  
  constructor(private patientService: PatientService) {
    console.log(this.data);
    
    this.patientService.getPatients().subscribe(d=>{
      this.data=d; 
      console.log(this.data);
           
    });
  }

  ngOnInit(): void {
  }

}
