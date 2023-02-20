
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

addActor(actor);

const actorButton=document.getElementById('actor-button');
actorButton.addEventListener("click",addActor, false);