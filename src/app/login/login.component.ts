
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  target: any;
  form: any;
  preventDefault: any;
  password: any;
  usuario: any;
  useraccess: any;
  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {

    this.form = new FormGroup({
      usuario: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),

    })
  }
  //  onSubmit(){
  //    console.log( this.form.value);
  //  }
//   onSubmit() {
//     console.log(this.form.value);
//     let useraccess = {
//       usuario: this.form.value.usuario,
//       password: this.form.value.password
//     }
      
//       this.user.AccesoUsuario(useraccess)
//         .then((res) => {
//           console.log(res.json())
//         })  
 }
