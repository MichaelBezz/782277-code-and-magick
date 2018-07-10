'use strict';
// модуль, который формирует похожих волшебников //
(function () {

  var WIZARD_NUMBER = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizards = document.querySelector('.setup-similar');
  similarWizards.classList.remove('hidden');
  // находим шаблон для волшебников
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  // функция, которая прописывает свойства волшебника в шаблон
  var renderWizard = function (item) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = item.name;
    wizardElement.querySelector('.wizard-coat').style.fill = item.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = item.colorEyes;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  var createSimilarWizards = function (data) {
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
  };

  // загрузка похожих волшебников с сервера
  var getSimilarWizard = function (data) {
    createSimilarWizards(data);
  };
  window.backend.load(getSimilarWizard);

})();
