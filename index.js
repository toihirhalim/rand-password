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

async function generatePasswordAsync(options, callback) {
    const password = generatePassword(options)

    if (callback && typeof callback == 'function') {
        callback(null, password)
    }

    return password
}

module.exports = { generatePassword, generatePasswordAsync }