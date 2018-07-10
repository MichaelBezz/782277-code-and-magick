'use strict';

(function () {

  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardCoat = window.setup.querySelector('.wizard-coat');
  var coatColor = window.setup.querySelector('[name="coat-color"]');
  var wizardEyes = window.setup.querySelector('.wizard-eyes');
  var eyesColor = window.setup.querySelector('[name="eyes-color"]');
  var setupFireballWrap = window.setup.querySelector('.setup-fireball-wrap');
  var fireballColor = window.setup.querySelector('[name="fireball-color"]');

  // функция для изменения параметров волшебника
  var changeYourWizard = function (property, hiddenProperty, arrayOfProperty) {
    var randomElement = window.data.getRandomArrayElement(arrayOfProperty);
    property.style.fill = randomElement;
    hiddenProperty.value = randomElement;
  };
  // Изменение цвета мантии персонажа по нажатию
  var onChangeColorCoatClick = function () {
    changeYourWizard(wizardCoat, coatColor, window.data.WIZARD_COAT_COLOR);
  };
  // Изменение цвета глаз персонажа по нажатию
  var onChangeColorEyesClick = function () {
    changeYourWizard(wizardEyes, eyesColor, window.data.WIZARD_EYES_COLOR);
  };
  // Изменение цвета фаерболов по нажатию
  var onChangeColorFireballClick = function () {
    var randomColorOfFireball = window.data.getRandomArrayElement(WIZARD_FIREBALL_COLOR);
    setupFireballWrap.style.background = randomColorOfFireball;
    fireballColor.value = randomColorOfFireball;
  };

  var addLisinerChangeYourWizard = function () {
    wizardCoat.addEventListener('click', onChangeColorCoatClick);
    wizardEyes.addEventListener('click', onChangeColorEyesClick);
    setupFireballWrap.addEventListener('click', onChangeColorFireballClick);
  };

  var removeLisinerChangeYourWizard = function () {
    wizardCoat.removeEventListener('click', onChangeColorCoatClick);
    wizardEyes.removeEventListener('click', onChangeColorEyesClick);
    setupFireballWrap.removeEventListener('click', onChangeColorFireballClick);
  };

  window.setupWizard = {
    addLisinerChangeYourWizard: addLisinerChangeYourWizard,
    removeLisinerChangeYourWizard: removeLisinerChangeYourWizard
  };

})();
