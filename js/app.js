"use strict";
const getDay = () => {
    const date = new Date;
    const day = date.getDay();
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const dayString = days[day];
    const dayHtml = document.getElementById("date");
    dayHtml.innerHTML = dayString + " " + date.getDate();
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
//# sourceMappingURL=app.js.map