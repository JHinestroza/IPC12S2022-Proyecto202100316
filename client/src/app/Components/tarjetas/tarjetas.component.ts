import { Component, Input, OnInit } from '@angular/core';
import { jugadoresInterface } from 'src/app/Models/jugadoresInterface';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

//variable que recibe el dato desde un componente padre
//en este caso va obtener la informacion de un jugador

@Input() DatoJugadorEspecifico: jugadoresInterface;

  constructor() { }

  ngOnInit(): void {  
    //console.log(":::::::::::::::::>");
    //console.log(this.DatoJugadorEspecifico);
    //console.log(":::::::::::::::::>");
  }

}
