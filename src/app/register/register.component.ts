import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any;
  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({
      username: new FormControl('', Validators.compose([
                                    Validators.required
      ])),
      password: new FormControl('', Validators.compose([
                                    Validators.minLength(6),
                                    Validators.required
      ])),
      repeatpassword: new FormControl('', Validators.compose([
                                    Validators.minLength(6),
                                    Validators.required                       
      ])),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      check: new FormControl('', Validators.required)
    })    
  }
   onSubmit(){
     console.log( this.form.value);
   }


   }



//1, paso: Injecto el servicio en el constructor ( private) (elijo el nombre parecido a la clase)
//2. paso: providers. dentro de @component (en este mismo)
//3. paso: Hacer la llamada al método que me interese. 
//4. devuelvo la promesa (then)  
