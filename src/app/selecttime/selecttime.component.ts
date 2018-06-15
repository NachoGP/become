import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecttime',
  templateUrl: './selecttime.component.html',
  styleUrls: ['./selecttime.component.css']
})
export class SelecttimeComponent implements OnInit {


  isActive = true;
  isActive2 = false;
  isActive3 = false;

  pressButton() {
    this.isActive = true;
    this.isActive2 = false;
    this.isActive3 = false;
  }

  pressButton2() {
    this.isActive = false;
    this.isActive2 = true;
    this.isActive3 = false;
  }

  pressButton3() {
    this.isActive = false;
    this.isActive2 = false;
    this.isActive3 = true;
  }


  constructor() { }

  ngOnInit() {
  }

}
