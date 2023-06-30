const express = require('express');
const v1Router = require("./v1/routes/index.js"); //si el archivo se llama index.js no es necesario ponerlo salvo que estemos con módulos
const v1WorkoutsRouter = require("./v1/routes/workoutRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;
const URL = "http://localhost:3000/api/v1/workouts"

//Primera prueba
// app.get('/', (req, res) => {
//     res.send("Server Rulando");
// });

//app.use("/api/v1", v1Router); //indicamos que usamos la url del módulo que acabamos de crear y le concatenamos delante el resto de cosas que queremos meter en la url, en este caso la versión de la api

app.use(express.json()); //todo lo que vayamos poniendo en use se va sumando. Esto es un middleware que modifica un poco el "req" para que podamos usar el post entre otras cosas (como autenticación, login...) son como capas
app.use("/api/v1/workouts", v1WorkoutsRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(URL);
});