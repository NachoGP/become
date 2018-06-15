import { RelatoservicesService } from './../relatoservices.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css'],
  providers: [RelatoservicesService]
})
export class ProposalComponent implements OnInit {

buttonseleccion:string ="alert-danger"
arrayPropuesta1: any;
arrayPropuesta2: any;
isActive = false;
tipo:any;
prop1:any;
prop2:any;
// guardarPropuesta1:any

// guardarPropuesta2:any

activeButton() {
    this.isActive = !this.isActive;
}  
  constructor(private propuesta1 : RelatoservicesService, private propuesta2:RelatoservicesService, private router: Router) { }

  ngOnInit() {

    this.propuesta1.pedirPropuesta1()
    .then( (res) => {
      // console.log(res.json())
      this.arrayPropuesta1 = res.json();

    })
    this.propuesta2.pedirPropuesta2()
    .then( (res) => {
      // console.log(res.json())
      this.arrayPropuesta2 = res.json();

    })

  }

  

  guardarPropuesta(){
    
    this.prop1 = {
      tipo: 'propuesta1',
      objeto: this.arrayPropuesta1
    }

    this.prop2 = {
      tipo: 'propuesta2',
      objeto: this.arrayPropuesta2
    }

    if(this.isActive === true){
      let propuesta1 = localStorage.setItem('propuesta',JSON.stringify(this.prop1));
      console.log(this.arrayPropuesta1);
    }
    
    if(this.isActive === false){
      let propuesta2 = localStorage.setItem('propuesta',JSON.stringify(this.prop2));
      console.log(this.arrayPropuesta2);

    }

    this.router.navigate(['/writeboard'])


 
  }



}



