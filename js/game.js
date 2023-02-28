
var language="es";
const actorBoxes= document.getElementById('actor-list');

let actor={};
let actors=[];
let numberActors=0;
let filmToGuess='';

function getOptions(){

    if(language==="en"){
        var movieOptions= document.getElementById('movies');

        for(var key in movieDatabase) {
            var movieTitle=movieDatabase[key].title;
            var option = document.createElement('option');
            movieTitle = movieTitle.replace('"', '');
            option.value=movieTitle;
            movieOptions.appendChild(option);
         }
    }else if(language==="es"){
        var movieOptions= document.getElementById('movies');

        for(var key in movieDatabase) {
            var movieTitle=movieDatabase[key].spanishTitle;
            var option = document.createElement('option');
            movieTitle = movieTitle.replace('"', '');
            option.value=movieTitle;
            movieOptions.appendChild(option);
         }
    }
    
    
     
}

function addActor() {
    let name=actor.name;
    let photo=actor.photo;
    
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src=photo;
    const textName= document.createTextNode(name);

    li.appendChild(img);
    li.appendChild(textName);

    actorBoxes.appendChild(li);
    numberActors++;

}
function winner(){
    alert("WINNER");
}


function pickRandomFilm(){
    var obj_keys = Object.keys(movieDatabase);
    var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    filmToGuess = movieDatabase[ran_key];
}


function getActor(){
    actors=filmToGuess.actors;
    actor=actors[numberActors];
    let actorPhoto=actor.photo;
    let actorName=actor.name;
    
    actor={name:actorName, photo:actorPhoto};
}

function startGame(){
    getOptions();
    pickRandomFilm();
    getActor();
    addActor();
}
startGame();


function checkGuess(){
    if(language==="es"){
            let guess=document.getElementById("movie-search").value;
        if(guess===filmToGuess.spanishTitle){
            winner();
        }else{
            getActor();
            addActor();
        }
    }else if(language==="en"){
        let guess=document.getElementById("movie-search").value;
        if(guess===filmToGuess.title){
            winner();
        }else{
            getActor();
            addActor();
        }
    }
}


const actorButton=document.getElementById('actor-button');
actorButton.addEventListener("click",checkGuess, false);
const flagButton=document.getElementById('actual-flag');
flagButton.addEventListener("click",clickFlag, false);

function clickFlag(){
    changeLanguage();
    getOptions();
}

function changeLanguage(){
    if(language==="es"){
        flagButton.src="img/Flags/English.png";
        language="en";
    }else if(language==="en"){
        flagButton.src="img/Flags/Spanish.png";
        language="es";
    }
}