
const actorBoxes= document.getElementById('actor-list');

let actor={};
let actors=[];
let numberActors=0;

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

const filmToGuess=movieDatabase.movie1;
function getFilm(){
}

function getActor(){
    actors=filmToGuess.actors;
    actor=actors[numberActors];
    let actorPhoto=actor.photo;
    let actorName=actor.name;
    
    actor={name:actorName, photo:actorPhoto};
}

function startGame(){
    getFilm();
    getActor();
    addActor();
}
startGame();


function checkGuess(){
    let guess=document.getElementById("movie-search").value;
    if(guess===filmToGuess.title){
        winner();
    }else{
        getActor();
        addActor();
    }
}


const actorButton=document.getElementById('actor-button');
actorButton.addEventListener("click",checkGuess, false);