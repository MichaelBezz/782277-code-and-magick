'use strict';

// #12 Учебный проект: нас орда
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NUMBER = 4;

// функция, которая возвращает случайный элемент массива
var getRandomArrayElement = function (arr) {
  var randomNumber = Math.floor(Math.random() * (arr.length - 1));
  return arr[randomNumber];
};

// функция, которая создает массив в котором находятся объекты - волшебники
var createSimilarWizards = function () {
  var wizards = [];
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    var similarWizard = {};
    similarWizard.name = getRandomArrayElement(WIZARD_NAMES) + getRandomArrayElement(WIZARD_SURNAME);
    similarWizard.coatColor = getRandomArrayElement(WIZARD_COAT_COLOR);
    similarWizard.eyesColor = getRandomArrayElement(WIZARD_EYES_COLOR);
    wizards.push(similarWizard);
  }
  return wizards;
};

var newSimilarWizards = createSimilarWizards();

// находим селектор .setup и удаляем атрибут hidden - выбор персонажа
// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

// находим селектор setup-similar и удаляем атрибут hidden - похожие волшебники
var similarWizards = document.querySelector('.setup-similar');
similarWizards.classList.remove('hidden');

// находим элемент в который втавляем похожих волшебников
var similarListElement = document.querySelector('.setup-similar-list');

// находим шаблон для волшебников
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
// функция, которая прописывает свойства волшебника в шаблон
var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = newSimilarWizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = newSimilarWizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = newSimilarWizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < WIZARD_NUMBER; i++) {
  fragment.appendChild(renderWizard(newSimilarWizards[i]));
}
similarListElement.appendChild(fragment);

// #14 Учебный проект: одеть Надежду
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var setupUserName = setup.querySelector('.setup-user-name');

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

// функция, для обработки события закрытия по esc
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    onPopupClose();
  }
};

// функция, для обработки события открытия + добавление обработки по клавиши esc
var onPopupOpen = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

// функция, для обработки события закрытия + удаление обработки по клавиши esc
var onPopupClose = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// обработчик, который открывает по клику
setupOpen.addEventListener('click', function () {
  onPopupOpen();
});

// обработчик, который открывает по нажатию на enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    onPopupOpen();
  }
});

// обработчик, который закрывает по клику
setupClose.addEventListener('click', function () {
  onPopupClose();
});

// обработчик, который закрывает по нажатию на enter
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    onPopupClose();
  }
});

// Если фокус находится на форме ввода имени, то окно закрываться не должно
setupUserName.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    // stopPropagation();
  }
});

// функция для изменения параметров волшебника
/* var changeYourWizard = function (property, arrayOfProperty) {
  property.style.fill = getRandomArrayElement(arrayOfProperty);
}; */

// Изменение цвета мантии персонажа по нажатию
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomArrayElement(WIZARD_COAT_COLOR);
});

// Изменение цвета глаз персонажа по нажатию
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomArrayElement(WIZARD_EYES_COLOR);
});

// Изменение цвета фаерболов по нажатию
setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.background = getRandomArrayElement(WIZARD_FIREBALL_COLOR);
});
