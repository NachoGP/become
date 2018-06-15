
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  target : any;
  form: any;
  preventDefault:any;
 password:any;
 name:any;
  constructor(private router: Router, private user:UserService) { }

  ngOnInit() {

    this.form = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.required)

    })
  }
  //  onSubmit(){
  //    console.log( this.form.value);
  //  }
 onSubmit(){
 
      
    //  if(name =='cio' && password =='neoland'){
    //   this.user.setUserLoggedIn();
    //   this.router.navigate(['newprofile']);

    //  }

     
   
   }


  }