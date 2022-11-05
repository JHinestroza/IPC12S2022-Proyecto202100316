# **Proyecto 2** 

| Informacion   | Contenido                    |
|---------------| :---------                   |
|Carnet         | 202100316                    |
| Nombre        | Jose Andres Hinestroza Garcia|
|Auxiliar       |Javier Oswaldo Mirón Cifuentes|

## Fronted 

<p style='text-align: justify;'> Las tegnologias implementadas para el funcionamiento de Angular fue Anfular, en la cual es un framewrok de javascrip de codigo abierto escrito en Typescript, la cual nos ayuda desarrolar aplicaciones. Encargandose Google del mantenimiento y las mejoras del mismo. Ademas de su Angular cli el cual permite crear proyectos en los que el CLI podrá añadir archivos y más exactamente, entidades Angular. Será posible añadir módulos, componentes, servicios o directivas en una línea de comandos.</p>


### Login 

<p style='text-align: justify;'> El login muestra una interfaz en la cual nos permite loguearnos con cualquiera de nuestros 3 diferentes usuarios. Asimismo nos mostrara cuando se ccuentren vacios los campos, o que el usuario o contraseña esten mal ingresados. </p>


![Login](Imagenes/Login.jpg)

<p style='text-align: justify;'> Asimismo se presenta un menu en el cual podemos seleccionar de donde pais, region o nombre deseamos que se busque y un boton de cerrar cesion</p>

![Menu](Imagenes/Menu.jpg)

## Backend

<p style='text-align: justify;'> Se implemento la tegnologia Node JS, la cual nos permite ejecutar JavaScript sin necesidad de un navegador web. Ademas de que podemos instalarlo y ejecutarlo en dieferentes sistemas operativos. Esta posee ciertas herramienras en la cual nos dan acceso al sistema, esto nos permite que podamos ejecutar JavaScript en un servidor, server, la cual nos permite intercambiar informacio, Backend, </p>

### Endpoints

<p style='text-align: justify;'> A continuacion se meustran los endpiont en los cuales se accedera a la informacion desde la API_URI para que se puedan compartir informacion </p>

```
config(): void {
        // this.router.get('/informacion',(reg,res) =>{res.send("Hola")});
        this.router.get('/todos', (req, res) => {
            res.send(Mundial);
        });
        this.router.get('/Nombre/:Nombre', (req, res) => {
            const jugadorn = this.infojugador(req.params.Nombre, 1)
            res.send(jugadorn); // se debe mandar parametro para saber que se quiere mandar
        });
        this.router.get('/Seleccion/:Seleccion', (req, res) => {
            const jugadorn = this.infojugador(req.params.Seleccion, 2)
            res.send(jugadorn); // se debe mandar parametro para saber que se quiere mandar
        });
        this.router.get('/Region/:Region', (req, res) => {
            const jugadorn = this.infojugador(req.params.Region, 3)
            res.send(jugadorn); // se debe mandar parametro para saber que se quiere mandar
        });
    }
```