function calculateMoney(ticketSale) {

    let restOfMoney;
    let ticketPrice = 120;
    let watchManPayment = 500;
    let staff = 8;
    let staffPayment = 50;
    if (ticketSale >= 0) {

        restOfMoney = (ticketSale * ticketPrice) - (watchManPayment + (staff * staffPayment));
        return restOfMoney;

    }
    else {
        return "Invalid Number"
    }
};

console.log(calculateMoney(10))
console.log(calculateMoney(1055))
console.log(calculateMoney(93))
console.log(calculateMoney(-130))


// -----------------------------------------------------------------------------------------


function checkName(name) {

    if (typeof name === 'string' && isNaN(name)) {

        let myName = name.toLowerCase();
        let lastChar = myName.length - 1;

        if (myName[lastChar] === 'a' || myName[lastChar] === 'y' || myName[lastChar] === 'i' || myName[lastChar] === 'e' || myName[lastChar] === 'o' || myName[lastChar] === 'u' || myName[lastChar] === 'w') {
            return 'Good Name';
        }
        else {
            return 'Bad Name';
        }
    }
    else {
        return 'invalid';
    }
};

console.log(checkName('Salman'))
console.log(checkName('RAFEE'))
console.log(checkName('Jhankar'))
console.log(checkName('199'))
console.log(checkName(["Rashed"]))

// ------------------------------------------------------------------


function deleteInvalids(numbers) {
    let numberArray = [];
    if (Array.isArray(numbers) === true) {

        for (number of numbers) {

            if (typeof number === 'number' && !isNaN(number)) {
                numberArray.push(number);
            }
        }
        return numberArray;
    }
    else {
        return 'Invalid Array';
    }
};

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))
console.log(deleteInvalids(["1" , {num:2} , NaN ]))
console.log(deleteInvalids([ 1 , 2 , -3 ]))
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))


// ------------------------------------------------------------------------------------------


function password(person) {

    let objectLength = Object.keys(person).length;
    let birthYearLength = Object.keys(person.birthYear.toString()).length;

    if (birthYearLength == 4 && objectLength == 3) {

        let name = person.name;
        let birthYear = person.birthYear;
        let siteName = person.siteName;
        let letter = siteName[0];
        let firstLetter = letter.toUpperCase();
        let restLetter = siteName.slice(1);

        let pass = `${firstLetter}${restLetter}#${name}@${birthYear}`
        return pass;
    }
    else {
        return 'invalid';
    }
};

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }))
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }))
console.log(password({ name: "maisha", birthYear: 2002 }))


// -----------------------------------------------------------------------------


function monthlySavings(payments, livingCost) {

    let totalPayment = 0;
    let restOfMoney;

    if (Array.isArray(payments) && !isNaN(livingCost) && typeof livingCost !== 'string') {

        for (payment of payments) {

            if (payment >= 3000) {
                let tax = (payment * 20) / 100;
                payment = payment - tax;
            }
            totalPayment = totalPayment + payment;
        }

        restOfMoney = totalPayment - livingCost;

        if (restOfMoney >= 0) {

            return restOfMoney;

        } else {
            return 'Earn More';
        }
    }
    else {
        return 'Invalid input';
    }
};

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400))
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000))
console.log(monthlySavings(100, [ 900 , 2700 , 3400]))
