
import { RelatoservicesService } from '../relatoservices.service';
import { Relato } from './../interface.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-writeboard',
  templateUrl: './writeboard.component.html',
  styleUrls: ['./writeboard.component.css']
})
export class WriteboardComponent implements OnInit {

propuesta: any;
tiempo:any;
relatoinfo:any;

  constructor(private relatosService: RelatoservicesService, private router: Router) { 

  }

  ngOnInit() {
    
      this.propuesta = JSON.parse(localStorage.getItem('propuesta'));
       console.log(this.propuesta.tipo);

       this.tiempo = JSON.parse(localStorage.getItem('tiempo'));
       console.log(this.propuesta.tiempo); 
      }

  relato:Relato = {
    titulo:"",
    texto:""
  }

  handleClickGuardar(){
    let relatoinfo = { 
      titulo:this.relato.titulo,
      tiempo: this.tiempo,
      relato:this.relato.texto,
      propuesta: this.propuesta.objeto,

    }
    
   this.relatosService.guardarRelato(relatoinfo)
   .then( (res) => {
    console.log(res.json())
  
  })

  this.router.navigate(['/newprofile'])
 

  }
}