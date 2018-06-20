import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Relato } from './interface.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  relatoURL:string = " "

  
  constructor(private http:Http) { 

  }

}

