import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/routes/services/user.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}