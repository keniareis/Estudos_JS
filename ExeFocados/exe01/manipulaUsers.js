const users = require('./users.json')

function getActiveUsers(users){
   return result = users.filter(users => users.isActive);
}

console.log(getActiveUsers(users));

function getUserNames(users){
    return result = users.map(users => users.name);
}

console.log(getUserNames(users));

function getTotalAge(users){
    return result = users.reduce((acc, user) => acc + user.age, 0);
}

console.log(getTotalAge(users));

users.forEach(user => console.log(user.name + ' Cadastrado com sucesso!'));