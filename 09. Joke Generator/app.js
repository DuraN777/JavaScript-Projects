const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

// fetching from 'icanhazdadjoke.com'
function generateJoke() {
  fetch('https://icanhazdadjoke.com', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    jokeEl.innerHTML = data.joke;
  })
}

jokeBtn.addEventListener('click', () => generateJoke());

// About fetch "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request 

/*  A basic fetch request, how it works:

  fetch('http://example.com/movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

Here we are fetching a JSON file across the network and printing it to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON. */