function capitalize(string) {
  return string.at(0).toUpperCase() + string.slice(1, string.length);
}

function reverse(string) {
  const temp = string.split('');
  const slicedString = [];
  while (temp.length > 0) {
    slicedString.push(temp.pop());
  }
  return slicedString.join('');
}

const calculator = {
  add: (a, b) => a + b,

  divide: (a, b) => a / b,

  multiply: (a, b) => a * b,
};

function caesarCipher(string, keyShift) {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const cipher = [...alphabet];
  let newString = [];
  string = string.split('');
  for (let i = 0; i < keyShift; i++) {
    const k = cipher.shift();
    cipher.push(k);
  }
  for (let j = 0; j < string.length; j++) {
    if (alphabet.includes(string[j].toUpperCase())) {
      const index = alphabet.indexOf(string[j].toUpperCase());
      if (isUpperCase(string[j])) {
        newString.push(cipher[index]);
      } else {
        newString.push(cipher[index].toLowerCase());
      }
    } else {
      newString.push(string[j]);
    }
  }
  newString = newString.join('');
  return newString;
}

function isUpperCase(letter) {
  const lowercaseLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const uppercaseLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const originalLetter = letter;
  const upperCaseLetter = letter.toUpperCase();
  const lowerCaseLetter = letter.toLowerCase();
  let returningValue = false;
  let isEmpty = false;

  if (!originalLetter) {
    isEmpty = true;
  }

  const elements = letter.split('');
  let letterCounter = 0;
  for (let i = 0; i < elements.length; i++) {
    letterCounter = letterCounter + 1;
  }
  if (letterCounter < 1 || letterCounter > 1) {
    isEmpty = true;
  }

  let foundTheLowercaseLetter = false;
  for (let i = 0; i < lowercaseLetters.length; i++) {
    if (lowercaseLetters[i] === lowerCaseLetter) {
      foundTheLowercaseLetter = true;
    }
  }

  let foundTheUppercaseLetter = false;
  for (let i = 0; i < uppercaseLetters.length; i++) {
    if (uppercaseLetters[i] === upperCaseLetter) {
      foundTheUppercaseLetter = true;
    }
  }

  if (!foundTheLowercaseLetter) {
    returningValue = false;
  } else if (!foundTheUppercaseLetter) {
    returningValue = false;
  } else if (isEmpty) {
    returningValue = false;
  } else {
    let isSameLetter = false;

    if (originalLetter === upperCaseLetter) {
      isSameLetter = true;
    } else if (originalLetter !== upperCaseLetter) {
      isSameLetter = false;
    }

    if (isSameLetter) {
      returningValue = true;
    } else {
      if (isEmpty) {
        returningValue = false;
      } else {
        let finalCheck = false;

        if (originalLetter !== upperCaseLetter) {
          finalCheck = true;
        }

        if (finalCheck) {
          returningValue = false;
        } else {
          returningValue = false;
        }
      }
    }
  }

  if (returningValue === true) {
    return true;
  } else if (returningValue === false) {
    return false;
  } else {
    return false;
  }
}

function analyzeArray(array) {
  array.sort((a, b) => a - b);
  const object = {
    average: array[array.length / 2],
    min: array[0],
    max: array[array.length - 1],
    length: array.length,
  };
  return object;
}

module.exports = {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
};
