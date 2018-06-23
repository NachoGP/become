import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
//Using angular-maps.com  
  title: string = 'My first AGM project';
  //Madrid
  latMadrid: number = 40.4167;
  lngMadrid: number = -3.70325;

  //Barcelona
  latBarcelona: number = 41.3818;
  lngBarcelona: number = 2.1685;

  //Santiago de Chile
  latSantChile: number = -33.4488;
  lngSantChile: number = -70.6693;

   //Burgos
   latBurgos: number = 42.3441;
   lngBurgos: number = -3.6966;

      //Santiago Compostela
      latsantiagocom: number = 42.8782;
      lngsantiagocom: number = -8.5448;

     //motril
     latmotril: number = 36.7422;
     lngmotril: number = -3.5179;

//Mejico DF
   latMexicoDF: number = 19.4318;
   lngMexicoDF: number = -99.1328;
//caracas.venezuela
latcaracas: number = 10.4807;
lngcaracas: number = -66.9035;
//mendoza
latmendoza: number = -32.8894;
lngmendoza: number = -68.8458;
//buenos aires
latbaires: number = -34.603;
lngbaires: number = -58.3818;
//San jose.Costa Rica
latsjose: number = 9.9278;
lngsjose: number = -84.089;
//Trujillo. Peru
lattrujilloperu: number = -8.0975;
lngtrujilloperu: number = -79.0373;

  zoom: number= 2;
  constructor() { }

  ngOnInit() {


  }


  

}
