import { ActivatedRoute } from '@angular/router';
let jQuery: any;
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
  arrayRelatosId:any;
  countRelatos:any;
  id:any;
  propuesta: any;
  tiempo:any;

  constructor( private relatoservices : RelatoservicesService, private relatos : RelatoservicesService, private activatedRoute: ActivatedRoute) { 
   
    this.activatedRoute.params.subscribe( params => {
        console.log(params.id)
        this.id=params.id;
    })
  }
 

  ngOnInit() {
    this.propuesta = JSON.parse(localStorage.getItem('propuesta'));
    console.log(this.propuesta.tipo);
    

    // console.log(this.id)
    this.relatoservices.pedirunRelato(this.id)
      .then((res) => {
        
        this.arrayRelatoUno = res.json()[0];
        console.log(this.arrayRelatoUno);
        
      })

    this.relatoservices.mostrarRelatosporUsuario(this.id)
      .then((res) => {
        // console.log(res.json())
        this.countRelatos = res.json().total;
      })

      this.relatos.pedirRelatosbyId(this.id)
      .then( (res) => {
        // console.log(res.json())
        this.arrayRelatosId = res.json();
        // console.log(this.arrayRelatosId);
        
  
        // console.log(res.json())
      })



  }

}
