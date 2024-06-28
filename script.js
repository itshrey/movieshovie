console.log('Hello!');
let i=2;

  document.querySelector('#darkMode').addEventListener('click',function(e){
    e.preventDefault();
    if(i==2){
      document.querySelector('body').style.backgroundColor='#36454F';
      document.querySelector('body').style.color='white';
      document.querySelector('.container').style.backgroundColor='#1B1212';
      document.querySelector('input').style.backgroundColor='#36454F'
      document.querySelector('input').style.Color='white'
      document.querySelector('.container').style.Color='#F5F5DC';
      document.querySelector('#darkMode').innerHTML='Bright Mode'
      
      i++;     
      console.log(i);
    }else{
      console.log('harry')
      document.querySelector('body').style.backgroundColor='#f4f4f4';
      document.querySelector('body').style.color='black';
      document.querySelector('.container').style.backgroundColor='#fff';
      document.querySelector('.container').style.Color='white';
      document.querySelector('input').style.backgroundColor='white'
      document.querySelector('#darkMode').innerHTML='Dark Mode'
      i--;
    }
  })

  document.getElementById('movieForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const movieTitle = document.getElementById('movieInput').value.trim();
    const encodedTitle = encodeURIComponent(movieTitle);
    const apiKey = '90583897'; // Replace with your OMDb API key
    const url = `https://www.omdbapi.com/?t=${encodedTitle}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                document.getElementById('title').textContent = data.Title;
                document.getElementById('poster').src = data.Poster;
                document.getElementById('date').textContent = data.Released;
                document.getElementById('plot').textContent = data.Plot;
                document.getElementById('cast').textContent = data.Actors;
                document.getElementById('rating').textContent = data.imdbRating;
                document.getElementById('genre').textContent = data.Genre;
                document.getElementById('movieDetails').classList.remove('hidden');
                document.getElementById('runtime').textContent = data.Runtime;
                document.getElementById('director').textContent = data.Director;
            } else {
                alert("Movie not found!");
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

