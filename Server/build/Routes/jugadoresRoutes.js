"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let contador = 1;
//const Mundial =  ("../jugadores.json")
const Mundial = [
    {
        numero: contador++,
        Nombre: "Cristiano",
        Apellido: "Ronaldo",
        Seleccion: "Portugal",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/020/801/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Diogo",
        Apellido: "da Silva",
        Seleccion: "Portugal",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/224/458/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Bruno",
        Apellido: "Fernandes",
        Seleccion: "Portugal",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/212/198/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "João ",
        Apellido: "Cancelo",
        Seleccion: "Portugal",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/210/514/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Kléper",
        Apellido: "Lima ",
        Seleccion: "Portugal",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/120/533/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Lionel",
        Apellido: "Messi",
        Seleccion: "Argentina",
        Region: "CONMEBOL",
        Imagen: "https://cdn.sofifa.net/players/158/023/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Lautaro",
        Apellido: "Martinez",
        Seleccion: "Argentina",
        Region: "CONMEBOL",
        Imagen: "https://cdn.sofifa.net/players/231/478/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Nicolás",
        Apellido: "Otamendi",
        Seleccion: "Argentina",
        Region: "CONMEBOL",
        Imagen: "https://cdn.sofifa.net/players/192/366/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Marcos",
        Apellido: "Acuña",
        Seleccion: "Argentina",
        Region: "CONMEBOL",
        Imagen: "https://cdn.sofifa.net/players/224/334/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Giovani",
        Apellido: "Lo Celso",
        Seleccion: "Argentina",
        Region: "CONMEBOL",
        Imagen: "https://cdn.sofifa.net/players/226/226/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Harry",
        Apellido: "Kane",
        Seleccion: "Inglaterra",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/202/126/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Harry",
        Apellido: "Maguire",
        Seleccion: "Inglaterra",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/203/263/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Philip",
        Apellido: "Foden",
        Seleccion: "Inglaterra",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/237/692/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Kyle",
        Apellido: "Walker",
        Seleccion: "Inglaterra",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/188/377/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Raheem",
        Apellido: "Sterling",
        Seleccion: "Inglaterra",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/202/652/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Neymar",
        Apellido: "Júnior",
        Seleccion: "Argentina",
        Region: "CONMEBOL",
        Imagen: "https://cdn.sofifa.net/players/190/871/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Vinícius ",
        Apellido: "Júnior",
        Seleccion: "Brasil",
        Region: "CONMEBOL",
        Imagen: "https://cdn.sofifa.net/players/238/794/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Carlos",
        Apellido: "Carlos ",
        Seleccion: "Brasil",
        Region: "CONMEBOL",
        Imagen: "https://cdn.sofifa.net/players/200/145/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Éder",
        Apellido: "Militão",
        Seleccion: "Brasil",
        Region: "CONMEBOL",
        Imagen: "https://cdn.sofifa.net/players/240/130/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Alisson ",
        Apellido: "Alisson ",
        Seleccion: "Brasil",
        Region: "CONMEBOL",
        Imagen: "https://cdn.sofifa.net/players/212/831/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Timo",
        Apellido: "Werner",
        Seleccion: "Alemania",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/212/188/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Thomas",
        Apellido: "Müller",
        Seleccion: "Alemania",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/212/188/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "İlkay  ",
        Apellido: "Gündoğan",
        Seleccion: "Alemania",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/186/942/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Manuel",
        Apellido: "Neuer",
        Seleccion: "Alemania",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/167/495/23_120.png"
    },
    {
        numero: contador++,
        Nombre: "Joshua",
        Apellido: "Kimmich",
        Seleccion: "Alemania",
        Region: "UEFA",
        Imagen: "https://cdn.sofifa.net/players/212/622/23_120.png"
    },
];
class JugadoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // this.router.get('/informacion',(reg,res) =>{res.send("Hola")});
        this.router.get('/todos', (req, res) => {
            res.send(Mundial);
        });
        this.router.get('/Nombre/:Nombre', (req, res) => {
            const jugadorn = this.infojugador(req.params.Nombre, 1);
            res.send(jugadorn); // se debe mandar parametro para saber que se quiere mandar
        });
        this.router.get('/Seleccion/:Seleccion', (req, res) => {
            const jugadorn = this.infojugador(req.params.Seleccion, 2);
            res.send(jugadorn); // se debe mandar parametro para saber que se quiere mandar
        });
        this.router.get('/Region/:Region', (req, res) => {
            const jugadorn = this.infojugador(req.params.Region, 3);
            res.send(jugadorn); // se debe mandar parametro para saber que se quiere mandar
        });
    }
    infojugador(nombreJugador, caso) {
        let temp = [];
        switch (caso) {
            case 1:
                for (const jugador of Mundial) { //for of hace una copia de cada objeto al recorrer el objeto
                    if (jugador.Nombre == nombreJugador) {
                        temp.push(jugador);
                    }
                }
                return temp;
            case 2:
                for (const jugador of Mundial) { //for of hace una copia de cada objeto al recorrer el objeto
                    if (jugador.Seleccion == nombreJugador) {
                        temp.push(jugador);
                    }
                }
                return temp;
            case 3:
                for (const jugador of Mundial) { //for of hace una copia de cada objeto al recorrer el objeto
                    if (jugador.Region == nombreJugador) {
                        temp.push(jugador);
                    }
                }
                return temp;
        }
    }
}
const jugadoresRouter = new JugadoresRoutes();
exports.default = jugadoresRouter.router;
