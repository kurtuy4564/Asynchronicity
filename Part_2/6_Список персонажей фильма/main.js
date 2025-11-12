function getFilm(name) {
  const url = `https://swapi.dev/api/films/?search=${name}`
  return fetch(url).then(response => response.json())
}

function getCharacters(filmTitle) {
  getFilm(filmTitle).then(films => {
    console.log(films)
    const arrPeople = []
    films.results[0].characters.slice(0, 10).forEach(urlPeople => {
      fetch(urlPeople)
        .then(response => response.json())
        .then(people => {
          arrPeople.push(people)
        })
    })

    console.log(arrPeople)
  })
}

getCharacters('The Empire Strikes Back')
