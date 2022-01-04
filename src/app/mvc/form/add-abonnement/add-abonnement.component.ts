import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AbonnementService } from 'src/app/shared/Abonnement.service';

@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrls: ['./add-abonnement.component.css']
})
export class AddAbonnementComponent implements OnInit {

  abnForm: FormGroup;

  constructor(
    public fb:FormBuilder,
    public router:Router, 
    public abonnement:AbonnementService 

  ) {    
    this.abnForm = this.fb.group({
    nom: [''],
    description: [''],
    prix: [''],
    date_debut: [''],
    date_fin: ['']
  })}

  ngOnInit(): void {
  }

  saveAbn(){ 
     return this.abonnement.saveAbonnement(this.abnForm.value).subscribe(d=>{
      this.router.navigate(['admin/abonnements'])
    });
  }
}
