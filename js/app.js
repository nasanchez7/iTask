"use strict";
//Obtener fecha de hoy
const getHour = () => {
    const date = new Date;
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return hour + ":" + minutes;
};
const getDay = () => {
    const date = new Date;
    const day = date.getDay();
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const dayString = days[day];
    const dayHtml = document.getElementById("date");
    const dayDate = dayString + " " + date.getDate();
    dayHtml.innerHTML = dayString + " " + date.getDate();
    return dayDate;
};
const getMonth = () => {
    const date = new Date;
    const monthNumber = date.getMonth();
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const monthString = months[monthNumber];
    const monthHtml = document.getElementById("month");
    monthHtml.innerHTML = monthString;
};
getDay();
getMonth();
getHour();
//Logica nueva tarea
class Task {
    constructor(info, date) {
        this.info = info;
        this.date = date;
    }
}
const tasks = [];
const btnTask = document.getElementById("btnTask");
const newTask = () => {
    const date = new Date;
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const time = hour + ":" + minutes;
    const infoTask = document.getElementById("taskContent");
    const newTask = new Task(infoTask.value, time);
    tasks.push(newTask);
    console.log(tasks);
    const listTask = document.getElementById("listTask");
    listTask.innerHTML = "";
    tasks.forEach((task, index) => {
        const newTask = document.createElement("div");
        newTask.className = "task";
        newTask.innerHTML = `
        <div class="infoTask">
            <h5> ${task.date} </h5>
            <p> ${task.info} </p>
        </div>
        <div class="deleteTask">
            <i class='bx bxs-trash' id="deleteTask${index}"></i>
        </div>
        `;
        listTask.appendChild(newTask);
    });
};
btnTask.addEventListener("click", newTask);
//# sourceMappingURL=app.js.map