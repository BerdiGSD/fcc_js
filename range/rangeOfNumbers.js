//Option 1
function rangeOfNumbers (startNum, endNum) {
    if (endNum < startNum) {
        return [];
    }
    else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

console.log("Option 1: " + rangeOfNumbers(1, 20));

//Option 2
function rangeOfNumbers (startNum, endNum) {
    return endNum < startNum 
    ? []
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

console.log("Option 2: " + rangeOfNumbers(5, 20));

//Option 3
function rangeOfNumbers (startNum, endNum) {
    return endNum < startNum
    ? []
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}

console.log("Option 3: " + rangeOfNumbers(20, 20));