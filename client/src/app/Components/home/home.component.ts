import { Component, OnInit } from '@angular/core';

import { jugadoresInterface } from 'src/app/Models/jugadoresInterface';
import { usuarioInterface } from 'src/app/Models/usuarioInterface';

import { JugadoresService } from 'src/app/Services/jugadores.service';
import { UsuariosService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  usuario: usuarioInterface;
  datosJugadores: jugadoresInterface[] = [];

  constructor(public jugadorService: JugadoresService, private usuarioService: UsuariosService) { }

  ngOnInit(): void {  
    this.ObtenerJugadores();
    this.UsuarionLogueado();
  }
  UsuarionLogueado(){
    this.usuario = this.usuarioService.getUsuarioActual();
    console.log(this.UsuarionLogueado);
  }

  ObtenerJugadores() {
    this.jugadorService.CargarDatos().subscribe(async (res) =>{
      let datos: any = res;
      this.datosJugadores = datos;
      //console.log('Listado de Jugadores');
      //console.log(this.datosJugadores)
    },
    err => console.log(err));
  }
  

}
