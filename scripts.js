// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
var urlFilms = 'https://ghibliapi.vercel.app/films';
request.open('GET', urlFilms, true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    
    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
          console.log(movie.title)
        })
      } else {
        console.log('error')
      }
}

// Send request
request.send()

// async function getData() {
//     const response = await fetch(urlFilms)
//     const data = await response.json()
//   }
  

