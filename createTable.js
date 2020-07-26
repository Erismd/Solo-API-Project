
window.onload = () => {

    const getAllBtn = document.querySelector('#allMovies');
 
    
    getAllBtn.addEventListener('click', () => {
 
    const movieInfo = document.createElement('p');
    const showInfo = document.getElementById("allMovies");
	fetch(`http://localhost:5000/allMovies`, {
		method: 'GET',
	})
		.then((response) => response.json())
        .then(movie => {
            console.log(movie);
            moviesInfo.innerText = `${movie.title} ... ${movie.reviews}`;
            showInfo.append(movieInfo);
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    });
    

}