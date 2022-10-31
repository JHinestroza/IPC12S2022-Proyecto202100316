import { Router } from "express";
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

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.get('/todos', (req, res) => {
            res.send(todosUsuarios);
        });
    }

}
const usuariosRouter = new UsuariosRoutes();
export default usuariosRouter.router;