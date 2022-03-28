const checkContainOneNumber = /\d+/;
const checkContainOneUppercase = /[A-Z]+/;
const checkContainSpecialCharacter = /[.!@#$%^&~`<>,;:'"+\-*?^()[\]{}|\\/_=]+/;
const checkContainWhiteSpace = /\s/;
const checkEnglishAlphabet = /^[\w\d]+$/;
const checkEmail = /^[\w\d]{3,}@[\w]+(\.[\w]{2,})+$/;
const checkPassword = /^[\d\w\W]{8,30}$/;
const checkValueAmount = /^\d*\.?\d*$/;
const checkPhoneCodeArea = /^\+{0,1}\d*$/;
const checkValueInteger = /^\d*$/;
const checkOtp = /^\d{0,6}$/;

module.exports = {
  checkContainOneNumber,
  checkContainOneUppercase,
  checkContainSpecialCharacter,
  checkContainWhiteSpace,
  checkEnglishAlphabet,
  checkEmail,
  checkPassword,
  checkValueAmount,
  checkValueInteger,
  checkPhoneCodeArea,
  checkOtp,
};
