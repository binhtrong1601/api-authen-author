module.exports = {
  validateUsername(value) {
    const errors = [];

    if (value.length < 3 || value.length > 16) {
      errors.push('3 - 16 characters');
    }

    if (checkContainOneUppercase.test(value)) {
      errors.push('No uppercase');
    }

    if (checkContainSpecialCharacter.test(value)) {
      errors.push('No sepical characters');
    }

    const valueNonSpecialCharacter = value.replace(checkContainSpecialCharacter, '').trim();
    if (!checkEnglishAlphabet.test(valueNonSpecialCharacter)) {
      errors.push('Only numbers and letters');
    }

    if (checkContainWhiteSpace.test(value)) {
      errors.push('No white space');
    }

    return errors;
  },
};
