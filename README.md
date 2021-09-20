# rand-password
   
## Description
Generate a random secure password  
  
## Instalation
### Using npm
 ```
npm install rand-password
```
### Using yarn
```
yarn add rand-password
```
   
## Example Usage
```js
const { randomPassword } = require('rand-password')

var password = randomPassword()

console.log(password) // .A&,#aG2Yn6M
```
we can also define parameters such as max, min length  
```js
const options = { minLength: 5, maxLength: 20 }

var password = randomPassword(options)

console.log(password) // 2m5aw/,!g[4hhH7
```
we can also use a callback
```js
generatePassword(options, (err, password) => {
    if (err) {
        // err
    }
    console.log(password)
})
```
### asynchronously
using async await
```js
const { generatePasswordAsync } = require('rand-password')

try {
    const password = await generatePasswordAsync(options)
    console.log(password)
} catch (err) {
    // err
}
```
using promies.then
```js
generatePasswordAsync(options)
    .then(password => console.log(password))
    .catch(err => {
        // err
    })
```
## Parameters
use the parameters generate customised passwords
| Option | Description | Default |
| --- | --- | --- |
| minLength | minimum length of the password | 8 |
| maxLength | maximum length of the password | 16 |
  
## License

[MIT](LICENSE)
