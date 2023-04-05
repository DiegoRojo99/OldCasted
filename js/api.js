const apiKey = '409703fb44ff5c9499d81e5855ecf46b';
const baseUrl = 'https://api.themoviedb.org/3';
let actors = [], numberActors=0;

// Get a random movie from the discover endpoint
function getRandomMovie() {
    const endpoint = `${baseUrl}/discover/movie`;
    let randomPage=Math.floor(Math.random() * 100) + 1;
    const queryParams = `api_key=${apiKey}&include_adult=false&include_video=false&page=${randomPage}`;
    const url = `${endpoint}?${queryParams}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let movie=data.results[Math.floor(Math.random() * data.results.length)];
        getCast(movie.id);
    });
}

// Get the cast for a movie
function getCast(movieId) {
    const endpoint = `${baseUrl}/movie/${movieId}/credits`;
    const queryParams = `api_key=${apiKey}`;
    const url = `${endpoint}?${queryParams}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let cast = data.cast.map(actor => ({
          name: actor.name,
          photo: `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        }));
        console.log("CAST: "+cast);
        showActors(cast);
      });
}

function loadActors(cast){
    console.log("Actors: ");
    actors=cast;
    console.log(actors);
}
  
function showActors(cast){

    console.log(cast);
    let actor=cast[numberActors];
    let name=actor.name;
    let photo=actor.photo;
    
    const actorBoxes= document.getElementById('actor-list');
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src=photo;
    const textName= document.createTextNode(name);

    li.appendChild(img);
    li.appendChild(textName);

    actorBoxes.appendChild(li);
    numberActors++;
}

getRandomMovie();
showActors();
