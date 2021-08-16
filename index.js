function generatePassword(minLength = 8, maxLength = 16) {
    let length = Math.floor(Math.random() * (maxLength - minLength)) + maxLength;

    let password = ''

    for (let i = 0; i < length; i++)
        password += String.fromCharCode(Math.floor(Math.random() * (126 - 32)) + 32);

    return password
}

module.exports = generatePassword