
const defaultOptions = {
    minLength: 8,
    maxLength: 16
}

function generatePassword(options) {
    option = { ...defaultOptions, ...options }

    let length = Math.floor(Math.random() * (option.maxLength - option.minLength)) + option.minLength;

    let password = ''

    for (let i = 0; i < length; i++)
        password += String.fromCharCode(Math.floor(Math.random() * (126 - 32)) + 32);

    return password
}

module.exports = generatePassword