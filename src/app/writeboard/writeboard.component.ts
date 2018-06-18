
import { RelatoservicesService } from '../relatoservices.service';
import { UserService } from '../user.service';
import { Relato } from './../interface.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writeboard',
  templateUrl: './writeboard.component.html',
  styleUrls: ['./writeboard.component.css'],
  providers: [UserService]
})
export class WriteboardComponent implements OnInit {

propuesta: any;
tiempo:any;


  constructor(private propuesta1: RelatoservicesService, private propuesta2: RelatoservicesService) { }

  ngOnInit() {
    
      this.propuesta = JSON.parse(localStorage.getItem('propuesta'));
       console.log(this.propuesta.tipo);

       this.tiempo = JSON.parse(localStorage.getItem('tiempo'));
       console.log(this.propuesta.tiempo); 

      }

  relato:Relato = {
    titulo:"",
    relato:""
  }



guardarRelato(){
  console.log(this.propuesta)
  console.log(this.tiempo)
  console.log(this.relato)
}


}