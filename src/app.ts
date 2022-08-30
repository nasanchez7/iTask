const getDay = ()=> {
    const date: Date = new Date;

    const day = date.getDay();

    const days: string[]= ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

    const dayString: string = days[day];

    const dayHtml: any = document.getElementById("date");
    dayHtml.innerHTML = dayString + " " + date.getDate();
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












