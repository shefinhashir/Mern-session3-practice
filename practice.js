for (let i = 1; i <= 10; i++) {
    console.log(i);
}



function sumArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));



function findLargest(numbers) {
    return Math.max(...numbers);
}

console.log(findLargest([10, 25, 7, 40, 15]));



function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(6));
console.log(checkEvenOdd(7));



function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));



const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];

console.log(result);



const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);



const name = "Alice";

const msg = `Hello ${name}, welcome!`;

console.log(msg);



const greet = (name) => {
    return "Hello, " + name;
};

console.log(greet("Alice"));