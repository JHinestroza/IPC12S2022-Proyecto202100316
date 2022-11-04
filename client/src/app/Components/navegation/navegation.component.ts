import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {
  Buscador: string = "";

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  Buscadora(){
    console.log(this.Buscador);
    this.router.navigate(['']);
  }
  CerrarSesion(){
    this.router.navigate([''])
  }
}
