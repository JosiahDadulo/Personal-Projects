//specific id's that the api uses for the different genres of movies
var action = 18;
var adventure = 12;
var comedy = 35;
var sf = 878;
var animation  = 16;
var crime  = 80;
var documentary = 99;
var drama = 18;
var family = 10751;
var fantasy = 14;
var history  = 36;
var horror = 27;
var music = 10402;
var dystery = 9648;
var romance  = 10749;
var tvMovie =  10770;
var thriller = 53;
var war = 10752;
var western = 37;

//api url information
const imagePath = "https://image.tmdb.org/t/p/w1280";
var url = "http://api.themoviedb.org/3/movie/upcoming?api_key=dafc9932bd8eda59dc7c33b73efd3b4b&language=en-US&page=1&region=US&with_genres=";

//get each elements on html page
const movies = document.getElementById("movies");
const submit = document.getElementById("submit");
var e = document.getElementById("genres");


//function to get movies
function getMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    data.results.forEach(element => {
        //Create movies to add to movie list 
        const movie = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');
        const date = document.createElement('p');
        text.innerHTML = `${element.original_title}`;
        image.src = imagePath + element.poster_path;
        date.innerHTML = element.release_date;
        movie.appendChild(image);
        movie.appendChild(text);
        movie.append(date);
        movies.appendChild(movie);
    }); 
});
}


//event listener for the button to get movies
submit.addEventListener("click", button =>{
    //var to hold the selected index
    var strUser = e.options[e.selectedIndex].text; 

    //clears previous movies when new genre is selected
    while(movies.firstChild){
        movies.removeChild(movies.lastChild);
    }
    //variable to hold the genre selected
    var genre; 
    //if statements to check for the genre selected
    if(strUser == "Action"){
        genre = url + action;        
    } 
    if(strUser == "Adventure"){
        genre = url + adventure;
    }
    if(strUser == "Comedy"){
        genre = url + comedy;
    }
    if(strUser == "Science Fiction"){
        genre = url + sf;
    }
    if(strUser == "Animation"){
        genre= url + animation;
    }
    if(strUser == "Science Fiction"){
        genreurl + sf;
    }
    if(strUser == "Crime"){
        genre = url + crime;
    }
    if(strUser == "Documentary"){
        genre = url + documentary;
    }
    if(strUser == "Drama"){
        genre = url + drama;
    }
    if(strUser == "Family"){
        genre = url + family;
    }
    if(strUser == "Fantasy"){
        genre = url + fantasy;
    }
    if(strUser == "History"){
        genre = url + history;
    }
    if(strUser == "Horror"){
        genre = url + horror;
    }
    if(strUser == "Music"){
        genre = url + music;
    }
    if(strUser == "Mystery"){
        genre = url + mystery;
    }
    if(strUser == "Romance"){
        genre = url + romance;
    }
    if(strUser == "TV Movie"){
        genre = url + tvMovie;
    }
    if(strUser == "Thriller"){
        genre = url + thriller;
    }
    if(strUser == "War"){
        genre = url + war;
    }
    if(strUser == "Western"){
        genre = url + western;
    }
    //calls the get movie function
    getMovies(genre);
});



