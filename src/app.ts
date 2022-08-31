//Obtener fecha y hora de hoy

const getHour = (): string => {

    const date: Date = new Date;

    const hour: number = date.getHours();
    const minutes: number = date.getMinutes();

    return hour + ":" + minutes
    
}

const getDay = (): string=> {
    const date: Date = new Date;

    const day = date.getDay();

    const days: string[]= ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

    const dayString: string = days[day];

    const dayHtml: any = document.getElementById("date");

    const dayDate: string = dayString + " " + date.getDate();

    dayHtml.innerHTML = dayString + " " + date.getDate();

    return dayDate
}

const getMonth = ()=> {
    const date: Date = new Date;

    const monthNumber = date.getMonth();
    const months: string[] = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    
    const monthString: string = months[monthNumber]; 

    const monthHtml: any = document.getElementById("month");
    monthHtml.innerHTML = monthString;
}

getDay();
getMonth();
getHour();


//Estructura tarea

class Task {
    info: string
    date: string

    constructor(info: string, date: string) {
        this.info = info;
        this.date = date;
    }
}

//Lista de tareas
const tasks: Task[] = [];

const btnTask: any = document.getElementById("btnTask");

//Agregar tarea nueva

const newTask = () => {


    const date: Date = new Date;
    const hour: number = date.getHours();
    const minutes: number = date.getMinutes();

    const time: string = hour + ":" + minutes;
    const infoTask: any = document.getElementById("taskContent");

    if(infoTask.value === ""){
        alert("Por favor complete el campo primero antes de agregar una nueva nota.")
        return;
    }

    const newTask: Task = new Task(infoTask.value, time);
    tasks.push(newTask);

    const listTask: any = document.getElementById("listTask");
    listTask.innerHTML = "";

    tasks.forEach((task, index) => {
        const newTask: any = document.createElement("div");
        newTask.className = "task";
        newTask.innerHTML = `
        <div class="infoTask">
            <h5> ${task.date} </h5>
            <p> ${task.info} </p>
        </div>
        <div class="deleteTask">
            <i class='bx bxs-trash' onclick="deleteTask(${index})"></i>
        </div>
        `
        listTask.appendChild(newTask);
    })

    infoTask.value = "";
}

const deleteTask = (index: number) => {
    //console.log(index);
    tasks.splice(index, 1);

    const listTask: any = document.getElementById("listTask");
    listTask.innerHTML = "";

    tasks.forEach((task, index) => {
        const newTask: any = document.createElement("div");
        newTask.className = "task";
        newTask.innerHTML = `
        <div class="infoTask">
            <h5> ${task.date} </h5>
            <p> ${task.info} </p>
        </div>
        <div class="deleteTask">
            <i class='bx bxs-trash' onclick="deleteTask(${index})"></i>
        </div>
        `
        listTask.appendChild(newTask);
    })
}

btnTask.addEventListener("click", newTask);








