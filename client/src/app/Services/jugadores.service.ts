import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

    API_URI = 'http://localhost:3000/jugadores';
  
    constructor(private http:HttpClient) { }
  
    headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    })
  
    CargarDatos(): any{
      return this.http.get(`${this.API_URI}/todos`);
    }
    ObtenerJugadorNombre(nombreJugador: string) : any {
      return this.http.get(`${this.API_URI}/Nombre/${nombreJugador}`);
    }
    ObtenerJugadoreleccion(SeleccionJugadores: string) : any {
      return this.http.get(`${this.API_URI}/Seleccion/${SeleccionJugadores}`);
    }
    ObtenerJugadoresRegion(RegionJugadores: string) : any {
      return this.http.get(`${this.API_URI}/Region/${RegionJugadores}`);
    }

}
