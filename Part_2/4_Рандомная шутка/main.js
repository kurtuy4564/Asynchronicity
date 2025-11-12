const arrJoke = []
let currentJokeCount = 0

function getJoke() {
  const url = 'https://official-joke-api.appspot.com/jokes/random'
  return fetch(url).then(response => response.json())
}

document.addEventListener('DOMContentLoaded', () => {
  addJoke()
})

const buttonBack = document.getElementById('buttonBack')
const buttonNext = document.getElementById('buttonNext')
const countJoke = document.getElementById('countJoke')
const containerJoke = document.getElementById('containerJoke')

function renderJoke() {
  countJoke.innerHTML = `Шутки ${currentJokeCount + 1} из ${arrJoke.length}`

  containerJoke.innerHTML = `
  <div>${arrJoke[currentJokeCount].setup}</div> 
  <div>${arrJoke[currentJokeCount].punchline}</div>
  `
}

buttonBack.addEventListener('click', () => {
  if (currentJokeCount === 0) return
  currentJokeCount--
  renderJoke()
})

buttonNext.addEventListener('click', () => {
  currentJokeCount++
  if (currentJokeCount + 1 > arrJoke.length) {
    addJoke()
  } else {
    renderJoke()
  }
})

function addJoke() {
  getJoke()
    .then(joke => {
      arrJoke.push(joke)
    })
    .then(() => {
      console.log(arrJoke)
      console.log(arrJoke[0])
      renderJoke()
    })
}
