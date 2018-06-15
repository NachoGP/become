import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RelatoservicesService {

  constructor(private http: Http) { }

  pedirRelatosbyDate(){
    let url = 'http://localhost:3000/api/relato/show/bydate'
    return this.http.get(url).toPromise()

  }

  pedirRelatosbyId(){
    let url = 'http://localhost:3000/api/relato/show2/byid'
    return this.http.get(url).toPromise()

  }

  pedirunRelato(id){
    let url = 'http://localhost:3000/api/relato/readstory/'+id
    return this.http.get(url).toPromise()
  }

  mostrarRelatosporUsuario(id){
    let url = 'http://localhost:3000/api/relato/readstory/'+id+'/totals'
    return this.http.get(url).toPromise()
  }
  
  
  pedirPropuesta1(){
    let url = 'http://localhost:3000/api/propuestas/prop1rand'
    return this.http.get(url).toPromise()

  }

  pedirPropuesta2(){
    let url = 'http://localhost:3000/api/propuestas/prop2rand'
    return this.http.get(url).toPromise()

  }

}
// https://becomeawriter-29781.firebaseio.com/relatos-escritos.json
//http://localhost:3000/api/relato/show/bydate