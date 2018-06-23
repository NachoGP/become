import { RelatoservicesService } from './../relatoservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
  providers: [RelatoservicesService]
})
export class TipsComponent implements OnInit {
  

  arrayTips:any;

  constructor(private tips : RelatoservicesService) { }

  ngOnInit() {


    this.tips.mostrarTips()
      .then( (res)=>{
        console.log(res.json())
        this.arrayTips =res.json()
        
      })



  }
  fecha = new Date()
}
