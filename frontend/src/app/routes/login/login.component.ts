import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/routes/services/user.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm){

    let {email, password} = form.value

    if(!email || !password){
      Swal.fire({
        title: 'ERROR!',
        text: 'Debes llenar todos los campos',
        imageUrl: 'https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }

    this.userService.login(email, password).subscribe(
      (res: any) => {
        //localStorage.setItem('llave', valor)
        localStorage.setItem("token", res.token)
        this.router.navigate(['/home'])

        // proteger las vistar contra los usuarios que no esten logueados
        //mostrar los datos en la barra de navegación
      },
      (err) => Swal.fire
      ({
        title: 'ERROR!',
        text: 'El usuario no está registrado',
        imageUrl: 'https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    )
    }}