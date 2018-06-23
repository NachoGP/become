import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any;
  comprobarPass: any;
  userinfo: any;

  constructor(private router: Router, private usuarioService: UserService) { }

  ngOnInit() {

    this.form = new FormGroup({
      usuario: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      check: new FormControl('', Validators.required)
    })
  }
  onSubmit() {
     console.log(this.form.value);
    let userinfo = {
      usuario: this.form.value.usuario,
      password: this.form.value.password,
      country: this.form.value.country,
      city: this.form.value.city
    }
    this.usuarioService.guardarUsuario(userinfo)
      .then((res) => {
        console.log(res.json())
      })
    console.log("Registro ok");
    alert("Gracias por registrarte en BECOME A WRITER")
    this.router.navigate(['/login'])


  





  }
}



//1, paso: Injecto el servicio en el constructor ( private) (elijo el nombre parecido a la clase)
//2. paso: providers. dentro de @component (en este mismo)
//3. paso: Hacer la llamada al método que me interese. 
//4. devuelvo la promesa (then)  
