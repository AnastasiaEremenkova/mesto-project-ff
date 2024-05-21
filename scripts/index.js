// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


const cards = document.querySelector('.places__list');

initialCards.forEach((cardInformation)=> {
   const cardElement = cardSight(cardInformation, deleteCard);
   cards.append(cardElement);

});


function cardSight(cardInformation, deleteCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardForm = cardTemplate.querySelector('.card');
    const cardElement = cardForm.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.alt = cardInformation.alt;
    cardImage.src = cardInformation.link;
    const cardTitle = cardForm.querySelector('.card__title');
    cardTitle.textContent = cardInformation.name;
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);

    return cardElement;
};

function deleteCard(event) {
    event.target.closest('.card').remove()
};