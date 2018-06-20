import { UserService } from './../user.service';

import { RelatoservicesService } from './../relatoservices.service';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-newprofile',
  templateUrl: './newprofile.component.html',
  styleUrls: ['./newprofile.component.css'],
  providers: [RelatoservicesService]
})
export class NewprofileComponent implements OnInit {

  arrayRelatos: any;
  arrayRelatosId: any;
  id:any;
  constructor(private relatos : RelatoservicesService, private user:UserService) {

    //Este id es el del login del usuario, lo hemos colocado para eliminar tras hacer login
    this.id = 1
   }

  ngOnInit() {

    this.relatos.pedirRelatosbyDate()
      .then( (res) => {
        console.log(res.json())
        this.arrayRelatos = res.json();
  
        // console.log(res.json())
      })
    
    this.relatos.pedirRelatosbyId(this.id)
      .then( (res) => {
        console.log(res.json())
        this.arrayRelatosId = res.json();
        
  
        // console.log(res.json())
      })
  
  }

fecha = new Date()


}
