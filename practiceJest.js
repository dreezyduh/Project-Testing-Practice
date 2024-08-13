function capitalize(string) {
    return string.at(0).toUpperCase() + string.slice(1, string.length)
}

function reverse(string) {
    const temp = string.split('');
    const slicedString = [];
    while (temp.length > 0) {
        slicedString.push(temp.pop())
    }
    return slicedString.join('');
}

const calculator = {
    'add': (a, b) => a + b,

    'divide': (a, b) => a / b,

    'multiply': (a, b) => a * b
}

function caesarCipher(string, keyShift) {
    const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const cipher = [...alphabet]
    let newString = [];
    string = string.split('');
    for (let i = 0; i < keyShift; i++) {
        const k = cipher.shift();
        cipher.push(k);
    }
    for (let j = 0; j < string.length; j++) {
        if (alphabet.includes(string[j].toUpperCase())) {
            const index = alphabet.indexOf(string[j].toUpperCase())
            if (isUpperCase(string[j])) {
                newString.push(cipher[index])
            } else {
                newString.push(cipher[index].toLowerCase())
            }
        } else {
            newString.push(string[j])
        }
    }
    newString = newString.join('')
    return newString;
}

function isUpperCase(letter) {
    if (letter === letter.toUpperCase()) {
        return true;
    } else return false;
}

function analyzeArray(array) {
    array.sort((a, b) => a - b)
    const object = {
        'average': array[array.length/2],
        'min': array[0],
        'max': array[array.length - 1],
        'length': array.length
    }
    return object
}




module.exports = {capitalize, reverse, calculator, caesarCipher, analyzeArray}