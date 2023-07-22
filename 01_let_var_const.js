const accountId = 12345
let accountEmail = "abc@gmial.com"
var accountPassword = "abc123"
accountCity = "Pune"
let accountState 
// accountId = 45 // not allowed
console.log(accountId)



/* 
Prefer not to use var beacause of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])