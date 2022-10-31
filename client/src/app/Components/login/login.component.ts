import { Component, OnInit } from '@angular/core';
import { usuarioInterface } from 'src/app/Models/usuarioInterface';
import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variables para el ingreso del usuairo
  nombreUsuario: string = "";
  passwordUsuario: string = "";
  //Arreglo para los usuario
  datosUsuarios: usuarioInterface[] = [];

  constructor(private usuariosService: UsuariosService, public router: Router) { }

  ngOnInit(): void {
    this.CargarDatos();
  }
  CargarDatos(){
    this.usuariosService.CargarDatosUsuarios().subscribe(async (res) =>
    {
      let datos: any = res;
      this.datosUsuarios = datos;
      console.log("LISTADO DE USUARIOS: ");
      console.log(this.datosUsuarios);
    },
    err => console.log(err));
  }
  Login(){
    
      //console.log(this.nombreUsuario);
      //console.log(this.passwordUsuario);
    if(this.nombreUsuario != "" && this.passwordUsuario != "") {
      for (const usuario of this.datosUsuarios) {
        if (usuario.Usuario == this.nombreUsuario && usuario.Password == this.passwordUsuario){
          this.usuariosService.setUsuarioActual(usuario);
          this.router.navigate(['Menu']);
          break;
        }
      }
    } else {

    }
  }

}
