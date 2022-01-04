import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AbonnementService } from 'src/app/shared/Abonnement.service';
import { PatientService } from 'src/app/shared/patients.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientForm: FormGroup;

  data:any =[];

  constructor(
    public fb:FormBuilder,
    public router:Router, 
    public patient:PatientService ,
    private abnService: AbonnementService

  ) {    
    this.patientForm = this.fb.group({
    name: [''],
    email: [''],
    username: [''],
    sexe: [''],
    prenom: [''],
    password: ['']
  });
  this.abnService.getAbonnements().subscribe(d=>{
    this.data=d; 
    console.log(d);
    
  });
  }

  ngOnInit(): void {
  }

  savePatient(){ 
     this.patient.savePatients(this.patientForm.value).subscribe(d=>{
      this.router.navigate(['admin/patients'])
    });
  }
}
