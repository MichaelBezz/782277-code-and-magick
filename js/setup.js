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
window.setup = setup;
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var setupUserName = setup.querySelector('.setup-user-name');

var wizardCoat = setup.querySelector('.wizard-coat');
var coatColor = setup.querySelector('[name="coat-color"]');

var wizardEyes = setup.querySelector('.wizard-eyes');
var eyesColor = setup.querySelector('[name="eyes-color"]');

var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');
var fireballColor = setup.querySelector('[name="fireball-color"]');

var SETUP_TOP;
var SETUP_CENTER = '50%';
var setupStartCoords = function () {
  var setupCoords = window.setup.getBoundingClientRect();
  SETUP_TOP = setupCoords.top;
};

// функция, для обработки события открытия
var onSetupWindowOpenClick = function () {
  setup.classList.remove('hidden');
  setupClose.addEventListener('click', onSetupWindowCloseClick);

  setupStartCoords();

  document.addEventListener('keydown', onEscKeydown);
};
// функция, для обработки события закрытия
var onSetupWindowCloseClick = function () {
  setup.classList.add('hidden');
  setupClose.removeEventListener('click', onSetupWindowCloseClick);

  setup.style.top = SETUP_TOP + 'px';
  setup.style.left = SETUP_CENTER;

  document.removeEventListener('keydown', onEscKeydown);
};

// функция, для обработки события по нажатию на esc
var onEscKeydown = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    onSetupWindowCloseClick();
  }
};
// функция, для обработки события по нажатию на enter
var onEnterKeydown = function (evt, callback) {
  if (evt.keyCode === ENTER_KEYCODE) {
    callback();
  }
};

// обработчик, который открывает по нажатию на enter настройку персонажа
setupOpen.addEventListener('keydown', function (evt) {
  onEnterKeydown(evt, onSetupWindowOpenClick);
});
// обработчик, который открывает по клику настройку персонажа
setupOpen.addEventListener('click', onSetupWindowOpenClick);

// обработчик, который закрывает по нажатию на enter
setupClose.addEventListener('keydown', function (evt) {
  onEnterKeydown(evt, onSetupWindowCloseClick);
});

// Если фокус находится на форме ввода имени, то окно закрываться не должно
setupUserName.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

// функция для изменения параметров волшебника
var changeYourWizard = function (property, hiddenProperty, arrayOfProperty) {
  var randomElement = getRandomArrayElement(arrayOfProperty);
  property.style.fill = randomElement;
  hiddenProperty.value = randomElement;
};

// Изменение цвета мантии персонажа по нажатию
wizardCoat.addEventListener('click', function () {
  changeYourWizard(wizardCoat, coatColor, WIZARD_COAT_COLOR);
});

// Изменение цвета глаз персонажа по нажатию
wizardEyes.addEventListener('click', function () {
  changeYourWizard(wizardEyes, eyesColor, WIZARD_EYES_COLOR);
});

// Изменение цвета фаерболов по нажатию
setupFireballWrap.addEventListener('click', function () {
  var randomColorOfFireball = getRandomArrayElement(WIZARD_FIREBALL_COLOR);
  setupFireballWrap.style.background = randomColorOfFireball;
  fireballColor.value = randomColorOfFireball;
});
