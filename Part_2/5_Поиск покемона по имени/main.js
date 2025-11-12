const inputSearch = document.getElementById('inputSearch')
const buttonSearch = document.getElementById('buttonSearch')
const containerPokemon = document.getElementById('containerPokemon')

buttonSearch.addEventListener('click', () => {
  searchPokemon(inputSearch.value)
    .then(pokemon => {
      containerPokemon.innerHTML = `
      <div>${pokemon.name}</div>
      <img src="${pokemon.sprites.front_default}">
      <div>Характеристика</div>
      <div>Вес: ${pokemon.weight}</div>
      <div>Рост: ${pokemon.height}</div>
      <div>ID: ${pokemon.id}</div>
      <div>Типы: ${pokemon.types.map(type => type.type.name).join(', ')}</div>
      `
    })
    .catch(error => {
      containerPokemon.innerHTML = 'Ошибка загрузки покемона'
    })
})

function searchPokemon(name) {
  if (!name) {
    containerPokemon.innerHTML = 'Введите покемона'
    return
  }
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  return fetch(url).then(response => response.json())
}
