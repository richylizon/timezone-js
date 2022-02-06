var url = "https://spring-format-transformet-serv.herokuapp.com/api/transform-time/json";

var tz = new XMLHttpRequest();
tz.open("POST", url);

tz.setRequestHeader("Content-Type", "application/json");

tz.onreadystatechange = function () {
   if (tz.readyState === XMLHttpRequest.DONE ) {
     document.write(tz.responseText);
   }};

//Formulario que deberia mandar el objeto por los input
   
/*  function capturar() {
    class data {
         constructor(time, timezone) {
             this.time = time;
             this.timezone = timezone;
         }
     }
    var timecapturado = document.getElementById("time").value;
    var timezonecapturado = document.getElementById("timezone").value;

    nuevodata = new data(timecapturado,timezonecapturado);
    console.log(nuevodata);
    agregar();  
} 
var baseDatos= [] ;
function agregar(){
    baseDatos.push(nuevodata);
    baseDatosJson = JSON.stringify(baseDatos);
    console.log(baseDatos);
    console.log(baseDatosJson);
    tz.send(baseDatosJson);
}   */   
const data = `{
"time":"12:00:00",
"timezone":"-4"
}`; 
console.log(data);

function MandarDato(){
tz.send(data);
} 