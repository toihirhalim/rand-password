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
const randomPassword = require('rand-password')

var password = randomPassword()

console.log(password) // .A&,#aG2Yn6M
```
we can also configure parameters  
```js
const randomPassword = require('rand-password')

var password = randomPassword({ minLength: 5, maxLength: 20 })

console.log(password) // 2m5aw/,!g[4hhH7
```
## Parameters
use the parameters generate customised passwords
| Option | Description | Default |
| --- | --- | --- |
| minLength | minimum length of the password | 8 |
| maxLength | maximum length of the password | 16 |
  
## License

[MIT](LICENSE)
