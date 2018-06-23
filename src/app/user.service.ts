
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  relatoURL:string = " "
 

  constructor(private http:Http) { }

  guardarUsuario(userinfo) {
    console.log(userinfo)
    let url = 'http://localhost:3000/api/insert/newuser'
    return this.http.post(url, {
      usuario: userinfo.usuario,
      password: userinfo.password,
      country: userinfo.country,
      city: userinfo.city
    }).toPromise()
  }

  AccesoUsuario(useraccess){

    console.log(useraccess)
    let url = 'http://localhost:3000/api/usuario/id'

       return this.http.post(url, {
      usuario: useraccess.usuario,
      password: useraccess.password
    }).toPromise()

  }









}

