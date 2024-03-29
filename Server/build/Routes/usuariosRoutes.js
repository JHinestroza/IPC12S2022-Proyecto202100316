"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todosUsuarios = [
    {
        Usuario: "IPCB",
        Password: "Prueba123"
    },
    {
        Usuario: "IPCF",
        Password: "Prueba456"
    },
    {
        Usuario: "Hinestroza",
        Password: "1406"
    }
];
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/todos', (req, res) => {
            res.send(todosUsuarios);
        });
    }
}
const usuariosRouter = new UsuariosRoutes();
exports.default = usuariosRouter.router;
