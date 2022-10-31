import { Component, OnInit } from '@angular/core';
import { jugadoresInterface } from 'src/app/Models/jugadoresInterface';
import { JugadoresService } from 'src/app/Services/jugadores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datosJugadores: jugadoresInterface[] = [];


  constructor(public jugadorService: JugadoresService) { }

  ngOnInit(): void {
    this.ObtenerJugadores();
  }

  ObtenerJugadores() {
    this.jugadorService.CargarDatos().subscribe(async (res) =>{
      let datos: any = res;
      this.datosJugadores = datos;
      console.log('Listado de Jugadores');
      console.log(this.datosJugadores)
    },
    err => console.log(err));
  }

}
