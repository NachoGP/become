import { RelatoservicesService } from './../relatoservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writeboard',
  templateUrl: './writeboard.component.html',
  styleUrls: ['./writeboard.component.css']
})
export class WriteboardComponent implements OnInit {

  propuesta: any


  constructor(private propuesta1: RelatoservicesService, private propuesta2: RelatoservicesService) { }

  ngOnInit() {
    
      this.propuesta = JSON.parse(localStorage.getItem('propuesta'));
       console.log(this.propuesta.tipo);
  }
}