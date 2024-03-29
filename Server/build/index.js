"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//import indexRoutes from './routes/indexRoutes';
const jugadoresRoutes_1 = __importDefault(require("./Routes/jugadoresRoutes"));
const usuariosRoutes_1 = __importDefault(require("./Routes/usuariosRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        //aqui nos dice donde estan nuestros endpoints
        //this.app.use('/', indexRoutes);
        this.app.use('/jugadores', jugadoresRoutes_1.default);
        this.app.use('/usuarios', usuariosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`El Servidor se esta ejecutando en el puerto`, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
