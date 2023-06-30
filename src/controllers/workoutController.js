const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkouts});
};

const getWorkoutById = (req, res) => {
    const workout = workoutService.getWorkoutById();
    res.send(`Get workout ${req.params.workoutId}`);
};

const createWorkout = (req, res) => {
    const createWorkout = workoutService.createWorkout();
    res.send(`Create workout ${req.params.workoutId}`);
};
const updateWorkout = (req, res) => {
    const updateWorkout = workoutService.updateWorkout();
    res.send(`Update workout ${req.params.workoutId}`);
};
const deleteWorkout = (req, res) => {
    workoutService.deleteWorkout(); //el delete no devuelve nada por eso es distinto
    res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};