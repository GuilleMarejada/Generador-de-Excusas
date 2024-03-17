/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
function creadorDeExcusas() {
    const who = ['Mi perro', 'Mi abuela', 'Su tortuga', 'Mi pájaro'];
    const action = ['se comió', 'se orinó en', 'aplastó', 'rompió'];
    const what = ['mi tarea', 'las llaves', 'el coche'];
    const when = ['antes de la clase', 'justo a tiempo', 'cuando terminé', 'durante mi almuerzo', 'mientras programaba'];

    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let phrase =randomWho.concat(' ',randomAction, ' ',randomWhat, ' ',randomWhen,"!!");

    document.getElementById("excuse").innerHTML = phrase;
}

document.getElementById("crear").addEventListener("click", creadorDeExcusas); 
  
  console.log("Generando excusas");
};
