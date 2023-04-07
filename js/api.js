const apiKey = '409703fb44ff5c9499d81e5855ecf46b';
const baseUrl = 'https://api.themoviedb.org/3';
let actors = [], numberActors=0;
let movieIds=[];
let movieTitle="";

// Get a random movie from the discover endpoint
function getRandomMovie() {
    const endpoint = `${baseUrl}/movie/popular`;
    let randomPage=Math.floor(Math.random() * 5) + 1;
    const queryParams = `api_key=${apiKey}&include_adult=false&include_video=false&page=${randomPage}`;
    const url = `${endpoint}?${queryParams}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let movie=data.results[Math.floor(Math.random() * data.results.length)];
        movieTitle=movie.title;
        console.log(movieTitle);
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
        loadActors(cast);
        showActors();
      });
}

function loadActors(cast){
    actors=cast;
}
  
function showActors(){

    let actor=actors[numberActors];
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

function checkGuess(){
  
  const guessInput = document.getElementById('movie-search'); 
  const userGuess = guessInput.value;
  // Compare the user's guess to the movie title
  if (userGuess.toLowerCase() === movieTitle.toLowerCase()) {
    // The guess is correct
    window.alert('Congratulations, you guessed the movie!');
  } else {
    // The guess is incorrect
    console.log('Sorry, that is not the correct movie.');
    showActors();
  }

  // Clear the input field
  guessInput.value = '';

}

getRandomMovie();

let actorButton = document.getElementById("actor-button");
actorButton.addEventListener('click',checkGuess);