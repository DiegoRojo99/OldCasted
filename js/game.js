
const actorBoxes= document.getElementById('actor-list');

const actor={name:"Jack Quaid", photo:"img/JackQuaid.jpg"};

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

}
function winner(){
    console.log("Winner");
}

let film="The Hunger Games";
let guess="The Hunger Games";

function checkGuess(){
    let guess=document.getElementById("movie-search").value;
    if(guess===film){
        winner();
    }else{
        addActor();
    }

}

addActor();

const actorButton=document.getElementById('actor-button');
actorButton.addEventListener("click",checkGuess, false);