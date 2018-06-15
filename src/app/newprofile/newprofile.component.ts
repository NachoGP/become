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

  constructor(private todosrelatos : RelatoservicesService, private idrelatos : RelatoservicesService, private user:UserService) {
   }

  ngOnInit() {

    this.todosrelatos.pedirRelatosbyDate()
    .then( (res) => {
      console.log(res.json())
      this.arrayRelatos = res.json();

      // console.log(res.json())
    })
    
    this.idrelatos.pedirRelatosbyId()
    .then( (res) => {
      console.log(res.json())
      this.arrayRelatosId = res.json();
      

      // console.log(res.json())
    })
  
  }





fecha = new Date()


}
