const accountId = 234456
let accountEmail = "prasadshivanand5@gmail.com"
var accountPassword = "104817"
accountCity = "jsr"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functions scope.
*/

accountEmail = "prasadshivanand7@gmail.com"
accountPassword = "104807"
accountCity = "ranchi"
console.table([accountId,accountEmail,accountCity,accountPassword,accountState])