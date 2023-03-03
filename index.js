const createNewProjectCard = (title, imageUrl, text) => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')

    const cardTitle = document.createElement('h3')
    cardTitle.classList.add('card__title')
    cardTitle.innerText = title
    newCard.appendChild(cardTitle)

    const cardImage = document.createElement('img')
    cardImage.classList.add('card__img')
    cardImage.src = imageUrl
    cardImage.alt = ''
    newCard.appendChild(cardImage)

    const cardDescription = document.createElement('p')
    cardDescription.classList.add('card__text')
    cardDescription.innerText = text
    newCard.appendChild(cardDescription)

    return newCard
}

const resetForm = () => {
    document.querySelector('#project__title').value = ''
    document.querySelector('#project-img-link').value = ''
    document.querySelector('#project-text').value = ''
}

const handleSubmit = (event) => {
    event.preventDefault()
    const formTitle = document.querySelector('#project-title').value
    const formImageUrl = document.querySelector('#project-img-link').value
    const formTexte = document.querySelector('#project-text').value
    const newProjectCard = createNewProjectCard(formTitle, formImageUrl, formTexte)
    document.querySelector('#cards').appendChild(newProjectCard)
    resetForm()
}