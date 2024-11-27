// 1. palidrome is a word, phrase and number, Forward and Backward.

function checkPalindrome() {
    const userInput = prompt("Enter string to check it's a palindrome:");
    if (!userInput) {
        console.log("You must enter a string to check!");
        return;
    }
    const cleanedString = userInput.replace(/\s+/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    const isPalindrome = cleanedString === reversedString;

    console.log(`Input string: ${userInput}`);
    if (isPalindrome) {
        console.log(`Output: true`);
        console.log(`Explanation: "${userInput}" is a palindrome! reads the same forwards and backwards.`);
    } else {
        console.log(`Output: false`);
        console.log(`Explanation: "${userInput}" is not a palindrome. It does not read the same forwards and backwards.`);
    }
}
checkPalindrome();


//2. A prime number is a number that is greater than 1 and is divisible only by 1 and itself.

//     function isPrime(num) {
//     if (num <= 1) return false; 
//   }
//   function countPrimes(n) {
//     let count = 0; 
//     return count;
//   }
//   // Test cases
//   console.log(countPrimes(10));
//   console.log(countPrimes(1));


//3. even numbers in a given array of integers. If no even nub are found, return 0 

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum; 
  }
  // Test case
  let test1 = [3, 6, 9, 12];
  let test2 = [7, 11, 13, 19];
  
  console.log("The output:", sumEvenNumbers(test1));
  console.log("Explanation:The even numbers are 6 and 12, so the sum is 6 + 12 = 18.");
  console.log("The output:", sumEvenNumbers(test2)); 
  console.log("Explanation:There are no even numbers in the array, so the output is 0.");
  


//4. both numbers and strings,returns new array with numbers sorted in ascending order/strings sorted alphabetically.


// function sortArray(arr) {
//     const numbers = arr.filter("number").sort();
//     const strings = arr.filter("string").sort();
//     return [...numbers, ...strings];
// }

// // Test Cases
// console.log(sortArray([42, "apple", 17, "banana", 2])); 
// console.log(sortArray([100, "zebra", 99, "lion", 1])); 


//5.Student Marksheet System

let students = [];

function addStudent(name, marks, subjects) {
  if (marks.length !== subjects.length) {
    console.log("Marks and subjects length not match.");
    return;
  }
  console.log(`Student ${name} added successfully!`);
}
// Test cases1
let action = prompt("Student detail;");

switch (action) {
  case 'add':
    let name = prompt("Enter student name:");
    let marksInput = prompt("Enter marks separated by commas:");
    let marks = marksInput.split(",").map(Number);
    let subjectsInput = prompt("Enter subjects separated by commas:");
    let subjects = subjectsInput.split(",");
    addStudent(name, marks, subjects);
    break;
  default:
    console.log("Invalid action.");

function displayStudents() {

}

function updateStudent(id,updates) {

}

function deleteStudent(id) {

}

}





  
  