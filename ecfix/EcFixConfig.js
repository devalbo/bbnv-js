

let _typeforceEnabled = false;

function isTypeforceEnabled() {
  return _typeforceEnabled;
}

function setTypeforceEnabled(enabled) {
  _typeforceEnabled = enabled;
}

module.exports = {
  isTypeforceEnabled: isTypeforceEnabled,
  setTypeforceEnabled: setTypeforceEnabled
}