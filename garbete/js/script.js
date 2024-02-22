fetch('https://skolmaten.se/api/3/menu/?school=282367002&client=mrfmcbtuo7idkw93wdcw')
.then(response => response.json())
.then(data3 => {
    console.log(data3);
    let monLunch = data3.weeks[0].days[0].items[0];
    let monVeg = data3.weeks[0].days[0].items[1]; 
    
    let tueLunch = data3.weeks[0].days[1].items[0];
    let tueVeg = data3.weeks[0].days[1].items[1]; 

    let wedLunch = data3.weeks[0].days[2].items[0];
    let wedVeg = data3.weeks[0].days[2].items[1]; 

    let thurLunch = data3.weeks[0].days[3].items[0];
    let thurVeg = data3.weeks[0].days[3].items[1]; 

    let friLunch = data3.weeks[0].days[4].items[0];
    let friVeg = data3.weeks[0].days[4].items[1]; 

    if (currentDay == 1){
        document.getElementById("lunchMeny").innerHTML += `<b> ${monLunch} <br>`;
        document.getElementById("lunchMeny").innerHTML += `Vegetarisk alt. <b> ${monVeg}`;
    }

    else if (currentDay == 2){
        document.getElementById("lunchMeny").innerHTML += `<b> ${tueLunch} <br>`;
        document.getElementById("lunchMeny").innerHTML += `Vegetarisk alt. <b> ${tueVeg}`;
    }

    else if (currentDay == 3){
        document.getElementById("lunchMeny").innerHTML += `<b> ${wedLunch} <br>`;
        document.getElementById("lunchMeny").innerHTML += `Vegetarisk alt. <b> ${wedVeg}`;
    }

    else if (currentDay == 4){
        document.getElementById("lunchMeny").innerHTML += `<b> ${thurLunch} <br>`;
        document.getElementById("lunchMeny").innerHTML += `Vegetarisk alt. <b> ${thurVeg}`;
    }

    else if (currentDay == 5){
        document.getElementById("lunchMeny").innerHTML += `<b> ${friLunch} <br>`;
        document.getElementById("lunchMeny").innerHTML += `Vegetarisk alt. <b> ${friVeg}`;
    }

    else{
        document.getElementById("lunchMeny").innerHTML += `Lunch Meny Saknas`;
    }


    if (currentDay == 1){
        document.getElementById("lunchMeny2").innerHTML += `<b> ${tue} <br>`;
        document.getElementById("lunchMeny2").innerHTML += `Vegetarisk alt. <b> ${tueVeg}`;
    }

    else if (currentDay == 2){
        document.getElementById("lunchMeny2").innerHTML += `<b> ${wedLunch} <br>`;
        document.getElementById("lunchMeny2").innerHTML += `Vegetarisk alt. <b> ${wedVeg}`;
    }

    else if (currentDay == 3){
        document.getElementById("lunchMeny2").innerHTML += `<b> ${thurLunch} <br>`;
        document.getElementById("lunchMeny2").innerHTML += `Vegetarisk alt. <b> ${thurVeg}`;
    }

    else if (currentDay == 4){
        document.getElementById("lunchMeny2").innerHTML += `<b> ${friLunch} <br>`;
        document.getElementById("lunchMeny2").innerHTML += `Vegetarisk alt. <b> ${friVeg}`;
    }

    else if (currentDay == 5){
        document.getElementById("lunchMeny2").innerHTML += `<b> ${monLunch} <br>`;
        document.getElementById("lunchMeny2").innerHTML += `Vegetarisk alt. <b> ${monVeg}`;
    }

    else{
        document.getElementById("lunchMeny2").innerHTML += `Lunch Meny Saknas`;
    }

})


fetch('https://api.sl.se/api2/realtimedeparturesV4.json?key=d84c0e38afa248ddbfad0c63d3a09ead&siteid=7000&timewindow=30')
.then(res => res.json())
.then(data1 => {
    for(let i = 0; i < 7; i++){
        let bus = data1.ResponseData.Buses[i];
        document.getElementById("buss").innerHTML += `<div class="layout"> ${bus.LineNumber} ${bus.Destination} ${bus.DisplayTime}`;
    }
})

fetch('https://api.sl.se/api2/realtimedeparturesV4.json?key=d84c0e38afa248ddbfad0c63d3a09ead&siteid=7006&timewindow=30')
.then(res => res.json())
.then(data => {
    for(let i = 0; i < 6; i++){
        let trains = data.ResponseData.Trains[i];
        document.getElementById("trains").innerHTML += `<div class="layout"> ${trains.LineNumber} ${trains.Destination} ${trains.DisplayTime}`;
    }
})


fetch('https://api.openweathermap.org/data/2.5/weather?q=huddinge&appid=9a9c1e763b47c3d5abc0dd39cb95d8cd&units=metric')
.then(res => res.json()) 
.then(data => { 
    weather(data);
})


function weather(data){
    var round_number = Math.floor(data.main.temp);
    document.getElementById('weatherIcon').src="https://openweathermap.org/img/wn/02d.png";
    document.getElementById('temp').innerHTML = `${round_number} °C`;
}

const date = new Date();

let day = date.getDate();
let month = date.getMonth()+1; //+1 för att månaden börjar på 0 för januari, 1 för februari osv.
let year = date.getFullYear();

function addZero(i){
    if(i < 10) {i = "0" + i}
    return i;
}

let time = addZero(date.getHours());
let min = addZero(date.getMinutes());


document.getElementById('date').innerHTML = `${year}-${month}-${day}`;
document.getElementById('time').innerHTML = `${time}:${min}`;

const currentDay = date.getDay();

document.getElementById('test').innerHTML = `${currentDay}`;


