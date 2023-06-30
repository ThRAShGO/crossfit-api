const express = require("express");
const router = express.Router(); //instanciamos el router que nos viene dentro de la librería express para poder modularizar las rutas

router.route("/").get((req, res) => { //siempre vamos a recibir un parámetro request que es la petición y un parámetro res que es la respuesta
    res.send(`holi desde ${req.baseUrl}`); //uno de los objetos que tiene la petición es la urlBase
});

module.exports = router;