const Workout = require("../database/Workout");

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};
const getWorkoutById = () => {
    return;
};
const createWorkout = () => {
    return;
};
const updateWorkout = () => {
    return;
};
const deleteWorkout = () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};