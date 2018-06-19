'use strict';
// #2 задание - создаем массив волшебников
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;

var getRandomArrayElement = function (arr) {
  var randomNumber = Math.floor(Math.random() * (arr.length - 1));
  return arr[randomNumber];
};

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

// #1 задание - находим селектор .setup и удаляем атрибут hidden - выбор персонажа
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// #5 задание - находим селектор setup-similar и удаляем атрибут hidden - похожие волшебники
var similarWizards = document.querySelector('.setup-similar');
similarWizards.classList.remove('hidden');

// находим элемент в который втавляем похожих волшебников
var similarListElement = document.querySelector('.setup-similar-list');
// находим шаблон для волшебников
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

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
