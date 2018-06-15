import { ActivatedRoute } from '@angular/router';

import { RelatoservicesService } from './../relatoservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readstory',
  templateUrl: './readstory.component.html',
  styleUrls: ['./readstory.component.css'],
  providers: [RelatoservicesService]
})
export class ReadstoryComponent implements OnInit {

  arrayRelatoUno:any;
  countRelatos:any;
  id:any;

  constructor( private relatoservices : RelatoservicesService, private activatedRoute: ActivatedRoute) { 
   
    this.activatedRoute.params.subscribe( params => {
        console.log(params.id)
        this.id=params.id;
    })
  }

  ngOnInit() {
    // console.log(this.id)
    this.relatoservices.pedirunRelato(this.id)
      .then((res) => {
        console.log(res.json())
        this.arrayRelatoUno = res.json();
      })

    this.relatoservices.mostrarRelatosporUsuario(this.id)
      .then((res) => {
        console.log(res.json())
        this.countRelatos = res.json().total;
      })

  }

}
