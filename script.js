const button = document.getElementById('btn');
const body = document.body;
const menuField = document.querySelector('.wrap');
const gameField = document.createElement('div');
body.appendChild(gameField);
let isCardClick = false;

const addCardBox = () => {
  const cardBox = document.createElement('div');
  gameField.appendChild(cardBox);
  cardBox.className = 'card_box';

  const shirt = document.createElement('div');
  shirt.innerHTML="<img src='images/card.png'>";
  cardBox.appendChild(shirt);
  shirt.className = 'shirt';

  const faceCard = document.createElement('div');
  faceCard.className = 'face';
  let rand = Math.floor(Math.random() * 2);
  if (rand === 0) {
    faceCard.innerHTML = "<img src='images/cardBug.png'>";
  } else if (rand === 1) {
    faceCard.innerHTML = "<img src='images/cardTheEnd.png'>";
  }
  cardBox.appendChild(faceCard);

  const cardOnClick = () => cardBox.classList.toggle('flip');
  cardBox.addEventListener('click', () => {
    if (isCardClick) {
      gameField.style.display = 'none';
      menuField.style.display = '';
      isCardClick = false;
    } else {
      cardOnClick();
      isCardClick = true;
      }
  });
};

const startGame = () => {
  const allLevels = document.getElementsByName('level');
  let selectedLevel;
  for (let level of allLevels) {
    if (level.checked) {
      selectedLevel = level.value;
      break;
    }
  }
  const cards =  document.querySelectorAll('.card_box');
  cards.forEach(item => item.remove());
  menuField.style.display = 'none';
  gameField.style.display = '';
  if (selectedLevel === 'easy') {
    gameField.className = 'game_treecard';
    for ( let i = 0; i < 3; i++) {
    addCardBox();
    }
  } else if (selectedLevel === 'medium') {
    gameField.className = 'game_sixcard';
    for ( let i = 0; i < 6; i++) {
    addCardBox();
    }
  } else if (selectedLevel === 'hard') {
    gameField.className = 'game_tencard';
    for ( let i = 0; i < 10; i++) {
    addCardBox();
    }
  }
};

button.addEventListener('click', startGame);