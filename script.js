//11. Write a function generateSeries that takes a number n as input and returns an array of numbers
function generateSeries(n) {
  const series = [];

  for (let i = 1; i <= n; i++) {
    series.push(i);
  }

  return series;
}

console.log(generateSeries(5));
console.log(generateSeries(0));
console.log(generateSeries(10));

//12. Write a function calculateArea that calculates the area of a rectangle given its width and height

function calculateArea(width, height) {
  if (width <= 0 || height <= 0) {
    return 0;
  }

  const area = width * height;

  return area;
}

console.log(calculateArea(5, 3));
console.log(calculateArea(10, 8));
console.log(calculateArea(4, 0));

//13. Write a function filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([11, 13, 17, 20]));
console.log(filterEvenNumbers([]));

//14. Write a function capitalizeWords that takes a sentence as input and returns the sentence with the first letter of each word capitalized.

function capitalizeWords(sentence) {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return word;
    }
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });

  const capitalizedSentence = capitalizedWords.join(" ");

  return capitalizedSentence;
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("JavaScript is fun"));
console.log(capitalizeWords(""));

//15. Create an object called calculator with methods add, subtract, multiply, and divide that perform the respective operations on two numbers.

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  },
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(3, 7));
console.log(calculator.divide(15, 3));

//16. Write a function delayedGreeting that takes a name as input and logs a greeting message with that name after a delay of 2 seconds.

function delayedGreeting(name) {
  setTimeout(function () {
    console.log(`Hello, ${name}!`);
  }, 2000);
}

delayedGreeting("Alice");

//17. Write a function divideSafely that takes two numbers as input and returns their division. Handle the case where the denominator is 0 by throwing an error.

function divideSafely(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return numerator / denominator;
}

console.log(divideSafely(10, 2));
try {
  console.log(divideSafely(8, 0));
} catch (error) {
  console.error(error.message);
}

//18. Write a function forEach that takes an array and a callback function as arguments and calls the callback function for each element in the array.

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const numbers = [1, 2, 3, 4, 5];
forEach(numbers, (num) => {
  console.log(num * 2);
});
