'use strict';
// модуль, который формирует похожих волшебников //
(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_NUMBER = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizards = document.querySelector('.setup-similar');
  similarWizards.classList.remove('hidden');

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

  window.data = {
    WIZARD_COAT_COLOR: WIZARD_COAT_COLOR,
    WIZARD_EYES_COLOR: WIZARD_EYES_COLOR,
    getRandomArrayElement: getRandomArrayElement
  };

})();
