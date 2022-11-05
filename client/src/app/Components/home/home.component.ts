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
  Texto: String = ""; //Texto a recibir
  //Opcion: String = "";
  Opcion: number = 0;
  
  constructor(public jugadorService: JugadoresService, private usuarioService: UsuariosService) { }

  ngOnInit(): void {  
    //this.Nombre();
    this.ObtenerJugadores();
    this.UsuarionLogueado();
    //console.log(`${this.Texto}`);
  }
  UsuarionLogueado(){
    this.usuario = this.usuarioService.getUsuarioActual();
    console.log(this.UsuarionLogueado);
  }

  Jugadores(){
    console.log(this.Opcion);
    if (this.Opcion == 0){
      this.ObtenerJugadores();
    }
    if (this.Opcion ==1){
      this.Seleccion();
    }
    if (this.Opcion == 2){
      this.Nombre();
    }
    if (this.Opcion == 3){
      this.JugadoresRegion();
    }
  }

  ObtenerJugadores() {
    
      this.jugadorService.CargarDatos().subscribe(async (res) =>{
        let datos: any = res;
        this.datosJugadores = datos;
        console.log(this.Opcion);
        //console.log(`${this.Texto}`);
        //console.log('Listado de Jugadores');
        //console.log(this.datosJugadores)
      },
      err => console.log(err));
  }
  Nombre() {
    this.jugadorService.ObtenerJugadorNombre(`${this.Texto}`).subscribe(async (res) =>{
      let datos: any = res;
      this.datosJugadores = datos;
      //console.log('Listado de Jugadores');
      //console.log(this.datosJugadores)
    },
    err => console.log(err));
  }
  Seleccion() {
    this.jugadorService.ObtenerJugadoreleccion(`${this.Texto}`).subscribe(async (res) =>{
      let datos: any = res;
      this.datosJugadores = datos;
      //console.log('Listado de Jugadores');
      //console.log(this.datosJugadores)
    },
    err => console.log(err));
  }
  JugadoresRegion() {
    this.jugadorService.ObtenerJugadoresRegion(`${this.Texto}`).subscribe(async (res) =>{
      let datos: any = res;
      this.datosJugadores = datos;
      //console.log('Listado de Jugadores');
      //console.log(this.datosJugadores)
    },
    err => console.log(err));
  }
  

  

}
