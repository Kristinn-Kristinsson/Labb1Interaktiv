
// modifiera sum() tills testet blir godkänt!
function sum(a, b) {

    console.log(a)
    console.log(b)
    return a + b;
}

function myOwnMultiplyFunction(a, b) {
    console.log(a)
    console.log(b)
    return a * b;
}

function round(a)
{
    b = a.toFixed(0);
    return parseInt(b)
}

function addingUp(a)
{
    let x = 0;
    for(i = 1; i <= a; i++)
    {
    x += i;
    }
    return x;
}

function findMinMax(array)
{
    min = Math.min.apply(Math, array);
    max = Math.max.apply(Math, array);
    return {min, max};
}

function afterXmasEve2020(date = new Date)
{
    if(date >= "2020-12-24")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function sortByStringLength(arr)
{
    arr.sort(function(a, b) {
    return a.length-b.length;
    });
    return arr;
}

function charCounter(c, str)
{
    str2 = str.toLowerCase();
    return (str2.split(c).length -1);
}

function numbersOnly(arr)
{
    let newly = [];
    for(i = 0; i < arr.length; i++)
    {
        whatIsIt = arr[i];
        if(isNaN(whatIsIt) === false)
            if(typeof whatIsIt === "number") 
        newly.push(whatIsIt);
    }
    return newly;
}

function sortNumbers(arr, order)
{
    arr.sort(function(a, b) {
        return a - b;
    });
    if(order === -1)
        return arr.reverse();
    else
        return arr;
}

class personFactory {
    constructor(firstname, lastname)
    {
        let fname;
        let lname;
        fname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
        this.firstname = fname;
        lname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
        this.lastname = lname;
        let initials = this.firstname.charAt(0) + "." + this.lastname.charAt(0);
        this.initials = initials;
        
    }
    


}

function doublePrice(obj)
{
    obj.forEach((o, index) => {
        obj[index].price *= 2;
    });

    return obj;
}

function and(state1, state2)
{
    if(state1 === false || state2 === false)
    return false;
    else
    return true;
}

function removeLeadingTrailing(nr)
{
    nr = +nr;
    return nr;
}

function getKeysAndValues(obj)
{
    arr1 = Object.keys(obj);
    arr = Object.values(obj);
    result = {"keys": arr1, "values": arr}
    return result; 
}

// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!


//etc...


// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = round
module.exports.addingUp = addingUp
module.exports.findMinMax = findMinMax
module.exports.afterXmasEve2020 = afterXmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = and
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero(a) {
    if(a < 0)
        return true;
    else(a > 0)
        return false;
}