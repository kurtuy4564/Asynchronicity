function getFilm(name) {
  const url = `https://swapi.dev/api/films/?search=${name}`
  return fetch(url).then(response => response.json())
}

function getPeople(url) {
  return fetch(url).then(response => response.json())
}

function getHomeworld(url) {
  return fetch(url).then(response => response.json())
}

function getCharacters(filmTitle) {
  getFilm(filmTitle).then(films => {
    console.log(films)

    const characterUrls = films.results[0].characters.slice(0, 10)

    const characterPromises = characterUrls.map(urlPeople =>
      getPeople(urlPeople).then(people =>
        getHomeworld(people.homeworld).then(homeworld => ({
          ...people,
          homeworldName: homeworld.name,
        })),
      ),
    )

    Promise.all(characterPromises).then(characters => {
      const arrPeople = characters.map(people => ({
        people: people.name,
        homeworld: people.homeworldName,
      }))
      const arrHomeworld = characters.map(char => char.homeworldName)

      console.log(arrPeople)
      console.log([...new Set(arrHomeworld)])
    })
  })
}

getCharacters('The Empire Strikes Back')
