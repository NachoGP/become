import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RelatoservicesService {

  constructor(private http: Http) { }

  pedirRelatosbyDate() {
    let url = 'http://localhost:3000/api/relato/show/bydate'
    return this.http.get(url).toPromise()

  }
  pedirRelatosbyId(id) {
    let url = 'http://localhost:3000/api/relato/autor/' + id
    // console.log(url)
    return this.http.get(url).toPromise()

  }

  pedirunRelato(id) {
    let url = 'http://localhost:3000/api/relato/readstory/' + id
    return this.http.get(url).toPromise()
  }

  mostrarRelatosporUsuario(id) {
    let url = 'http://localhost:3000/api/relato/readstory/' + id + '/totals'
    return this.http.get(url).toPromise()
  }

  pedirPropuesta1() {
    let url = 'http://localhost:3000/api/propuestas/prop1rand'
    return this.http.get(url).toPromise()

  }

  pedirPropuesta2() {
    let url = 'http://localhost:3000/api/propuestas/prop2rand'
    return this.http.get(url).toPromise()

  }

  mostrarTips(){
    let url = 'http://localhost:3000/api/tips'
    return this.http.get(url).toPromise()
  }




  guardarRelato(relatoinfo) {
    // console.log(relatoinfo)
    let url = 'http://localhost:3000/api/relato/readstory/create'
    return this.http.post(url, {
      titulo: relatoinfo.titulo,
      categoria: relatoinfo.tiempo,
      relato: relatoinfo.relato,
      fecha: new Date(),
      usuario_id:this.id, //relatoinfo.id
      propuesta: JSON.stringify(relatoinfo.propuesta)
    }).toPromise()
  }
  //Este id esta para poder guardar el relato, pendiente de hacer el registro para eliminarlo
   id = 1
}
