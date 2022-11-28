
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar) {
    return dollar * oneEuroIs.JPY;
}

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

function fromYenToPound(yen){
    return yen * oneEuroIs.GBP;
}


module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };

console.log(fromYenToPound(5));