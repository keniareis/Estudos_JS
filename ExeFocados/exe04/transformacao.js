object = { name: 'John', age: 35, isActive: true }

function convertObjectToJson(object){
    return JSON.stringify(object);
}

console.log(convertObjectToJson(object));

const json = `{
    "name": "John",
    "age": 35,
    "isActive": true
}`;

function convertJsonToObject(json){
    return JSON.parse(json);
}

console.log(convertJsonToObject(json));