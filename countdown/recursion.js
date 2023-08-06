function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));

// option 1 This worked
// function countdown(n, newArr = []) {
//     if (n <= 0) {
//         return newArr;
//     } else {
//         newArr.push(n);
//         return countdown(n - 1, newArr);
//     }
// }

// console.log(countdown(12));

function countdown(n) {
    if (n < 1) {
            console.log("At the end of recursion. Creating and returning an empty array.");
        return [];
    } else {
        const newArr = countdown(n-1);
            console.log("Got the following array back from the recursive call:")
            console.log(JSON.stringify(newArr));
        newArr.unshift(n);
            console.log("Prefixing it with " + n + " and returning the result");
            console.log(JSON.stringify(newArr));
        return newArr;
    }
}

console.log(countdown(10))