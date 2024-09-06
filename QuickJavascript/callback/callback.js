function processArray(array, callback){
    let newArray = [];
    array.forEach(element => {
        newArray.push(callback(element));
    });
    return newArray;
}

function sum(element){
    return element * 2;
}

const array = [1,2,3,4,5,6,7,8];

console.log(processArray(array, sum));