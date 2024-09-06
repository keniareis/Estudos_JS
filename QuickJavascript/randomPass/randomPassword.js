function generatePassword(length, includeLowerCase, includeUpperCase, includeNumber, includeSymbols){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-{}[]|\\:;\"'<>,.?/`~";

    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase? upperCaseChars : "";
    allowedChars += includeNumber? numberChars : "";
    allowedChars += includeSymbols? symbolChars : "";

    if(length <= 0){
        return `(password must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least one character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex =  Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSymbols);

console.log(`Generated password: ${password}`);
