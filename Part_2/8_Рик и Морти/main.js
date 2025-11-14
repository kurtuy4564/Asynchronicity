const personContainer = document.querySelector('.person-container')
const nextButton = document.querySelector('.next-button')
const prevButton = document.querySelector('.prev-button')
const stateButton = document.querySelector('.state-button')
const searchInput = document.querySelector('.search')
const infoPerson = document.querySelector('.info-person')
let personList = []
let info = {}
let currentPage = 1

let debounceTimer

searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimer)

  debounceTimer = setTimeout(() => {
    currentPage = 1
    const url = `https://rickandmortyapi.com/api/character/?name=${searchInput.value}`
    render(url)
  }, 400)
})

function getAllPerson(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw response
    }
    return response.json()
  })
}

nextButton.addEventListener('click', () => {
  if (!info.next) return
  render(info.next)
  currentPage++
})

prevButton.addEventListener('click', () => {
  if (!info.prev) return
  render(info.prev)
  currentPage--
})

document.addEventListener('DOMContentLoaded', () => {
  render('https://rickandmortyapi.com/api/character/?name')
})

function render(url) {
  personContainer.innerHTML = 'Загрузка...'
  getAllPerson(url)
    .then(person => {
      info = person.info
      stateButton.textContent = `Страница ${currentPage} из ${info.pages}`
      personList = person.results

      nextButton.classList.toggle('button-disabled', !info.next)
      prevButton.classList.toggle('button-disabled', !info.prev)

      return personList
    })
    .then(persons => {
      personContainer.innerHTML = ''
      persons.forEach(person => {
        createElement(person)
      })
    })
    .catch(error => {
      if (error.status === 404) {
        personContainer.innerHTML = 'Нет результатов'
      } else {
        personContainer.innerHTML = `Произошла ошибка: ${error.status || 'Неизвестная ошибка'}`
      }
      info = {}
      stateButton.textContent = `Страница ${currentPage}`
    })
}

function createElement(person) {
  const element = document.createElement('div')
  element.className = 'person'
  element.dataset.id = person.id

  element.innerHTML = `
  <div>
    <img src="${person.image}" class='image-person'/>
    <div>${person.name}</div>
  </div>
  `

  personContainer.appendChild(element)
  personContainer.addEventListener('click', attachHandlers)
}

function attachHandlers(event) {
  const person = event.target.closest('.person')
  if (!person) return

  const personId = +person.dataset.id
  const personItem = personList.find(el => el.id === personId)
  if (personItem) {
    console.log(personItem.url)
    fetch(personItem.url)
      .then(response => response.json())
      .then(person => {
        infoPerson.innerHTML = JSON.stringify(person, null, 2)
      })
  }
}
