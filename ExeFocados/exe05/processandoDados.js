const users = require('./dados.json')

function getActiveBrazilians(users){
    return activeBrazilians =  users.filter(users => users.country === "Brazil" && users.isActive);
}



function orderUsersByAge(users){
    return usersByAge =  users.sort((a, b) => a.age - b.age);
}

let activeBraziliansData = getActiveBrazilians(users)
let usersByAgeData = orderUsersByAge(activeBraziliansData)

console.log(JSON.stringify(usersByAgeData, null, 2));