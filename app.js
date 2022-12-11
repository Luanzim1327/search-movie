
const inputSearch = document.getElementById("search-movie");
const btnSearch = document.getElementById("submit");
const movieDetails = document.querySelector(".movie-details");

const execSearchMovie = async () => {

    let promise = new Promise(function(resolve , reject) {
        let error = false;
        if(!error) {
            resolve(console.log("ok!"));
            const nameMovie = inputSearch.value;
            const apikey = "7d37c447"
            const link = `http://www.omdbapi.com/?apikey=${apikey}&t=${nameMovie}`
            fetch(link).then(response => response.json().then(data => {
                console.log(data);
                movieShow("Movie: " + data.Title , data.Poster , "Plot :" + data.Plot , "Genre :" + data.Genre , "Rate :" +data.imdbRating);
                
        
            }))
        }else {
            reject({msg : "ERROR"})
        }
    })
    return promise

}

btnSearch.addEventListener("click" , execSearchMovie)


const movieShow = (movie , img , description , genre , rate) => {

    
    const imgMovie = document.getElementById("img-movie");
    imgMovie.src = img;

    const titleMovie = document.getElementById("title-movie");
    titleMovie.innerHTML = movie;
    
    const descriptionMovie = document.getElementById("desc-movie");
    descriptionMovie.innerHTML = description;
    
    const genreMovie = document.getElementById("gen-movie");
    genreMovie.innerHTML = genre;
    
    const rateMovie = document.getElementById("rate-movie");
    rateMovie.innerHTML = rate;
    
}