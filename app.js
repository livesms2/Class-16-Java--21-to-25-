// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// Prompt the user for first name and store it in a variable
/*var firstName = prompt("Shamim:");

// Prompt the user for last name and store it in a variable
var lastName = prompt("Akhtar:");

// Combine the first and last names to create the fullName
var fullName = firstName + " " + lastName;

// Greet the user using the full name
alert("Asslam o Alaikum, " + fullName + "! Welcome.");*/

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// Prompt the user for their favorite mobile phone model
/*var favoriteMobileModel = prompt("iPhone 15?");

// Calculate the length of the user's input
var inputLength = favoriteMobileModel.length;

// Display the length of the user's input in the browser
document.write("The length of your favorite mobile phone model is: " + inputLength);*/

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .


/*var word = "Pakistani";

// Find the index of the letter "n" in the word
var index = word.indexOf("n");

// Check if the letter "n" was found
if (index !== -1) {
  document.write("The index of 'n' in the word 'Pakistani' is: " + index);
} else {
  document.write("The letter 'n' was not found in the word 'Pakistani'.");
}
*/

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

// Define the word
/*var word = "Hello World";

// Find the last index of the letter "l" in the word
var lastIndex = word.lastIndexOf("l");

// Check if the letter "l" was found
if (lastIndex !== -1) {
  document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);
} else {
  document.write("The letter 'l' was not found in the word 'Hello World'.");
}
*/

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser

// Define the word
/*var word = "Pakistani";

// Find the character at the 3rd index
var characterAtIndex3 = word.charAt(3);

// Check if the character was found
if (characterAtIndex3) {
  document.write("The character at index 3rd is: " + characterAtIndex3);
} else {
  document.write("No character found at index 3rd'.");
}*/


// 6. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser Repeat question using string concat() method.

// Define the word
/*var word = "Pakistani";

// Concatenate the characters to find the character at the 3rd index
var characterAtIndex3 = word.charAt(0).concat(word.charAt(1)).concat(word.charAt(2));

// Check if the character was found
if (characterAtIndex3) {
  document.write("The character at the 3rd index in the word 'Pakistani' is: " + characterAtIndex3);
} else {
  document.write("No character found at the 3rd index in the word 'Pakistani'.");
}*/


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser


// Define the word
/*var word = "Hyderabad";

// Replace "Hyder" with "Islam" in the word
var modifiedWord = word.replace("Hyderabad", "Islamabad");

// Display the modified word in the browser
document.write("City Hayderabad: " + word + "<br>");
document.write("After Replacement: " + modifiedWord);
*/

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”

// Define the input string
/* var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&" in the string
var modifiedMessage = message.replace(/and/g, "&");

// Display the modified message in the browser
document.write("Original message: " + message + "<br>");
document.write("Modified message: " + modifiedMessage);*/

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.


// Define the string
/* var strNumber = "472";

// Convert the string to a number
var number = parseInt(strNumber);

// Display the value and type in the browser
document.write("Original string: " + strNumber + "<br>");
document.write("Converted number: " + number + "<br>");
document.write("Type of converted number: " + typeof number);
*/


// 10. Write a program that takes user input. Convert and show the input in capital letters.

// Define the input string
/*var userInput = "peanuts";

// Convert the input to uppercase
var uppercaseInput = userInput.toUpperCase();

// Display the converted text in the browser
document.write("Original input: " + userInput + "<br>");
document.write("Uppercase input: " + uppercaseInput);*/

// 11. Write a program that takes user input. Convert and show the input in title case

// Prompt the user for input
/* var userInput = prompt("javascript:");

// Function to convert a string to title case
function toTitleCase(input) {
  return input.toLowerCase().split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

// Convert the user input to title case
var titleCaseInput = toTitleCase(userInput);

// Display the converted text in the browser
document.write("Original input: " + userInput + "<br>");
document.write("Title case input: " + titleCaseInput);
*/
// 12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// Define the variable num
/* var num = 35.36;

// Convert the number to a string and remove the dot
var numAsString = num.toString().replace(".", "");

// Display the result in the browser
document.write("Original number: " + num + "<br>");
document.write("Formatted string: " + numAsString);
*/

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// Prompt the user for a username
/*var username = prompt("Shamim:");

// Function to check if the username contains special symbols
function hasSpecialSymbols(input) {
  var specialSymbols = ['@', '.', ',', '!'];
  for (var i = 0; i < specialSymbols.length; i++) {
    if (input.indexOf(specialSymbols[i]) !== -1) {
      return true;
    }
  }
  return false;
}

// Check if the username contains special symbols
if (hasSpecialSymbols(username)) {
  alert("Please enter a valid username without special symbols (@, ., ,, !).");
} else {
  alert("Username is valid: " + username);
}

*/
// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// Given array
/* var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for an item to search for
var userInput = prompt("Enter an item to search for:");

// Function to search for an item in the array
function searchItem(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true; // Item found
    }
  }
  return false; // Item not found
}

// Check if the user's input is found in the array
if (searchItem(A, userInput)) {
  alert("Yes, " + userInput + " is available in the list.");
} else {
  alert("I am sorry, " + userInput + " the item is not available here at the moment.");
}
*/

/* 15. Write a program to take password as an input from user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.*/

// Function to check if a string contains only alphabets and numbers

/* function containsOnlyAlphabetsAndNumbers(str) {
    var pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(str);
  }
  
  // Function to check if a string starts with an alphabet
  function startsWithAlphabet(str) {
    var firstChar = str.charAt(0);
    return (firstChar >= 'a' && firstChar <= 'z') || (firstChar >= 'A' && firstChar <= 'Z');
  }
  
  // Prompt the user for a password
  var password = prompt("Enter a password:");
  
  // Check if the password meets the requirements
  if (
    password.length >= 6 &&
    containsOnlyAlphabetsAndNumbers(password) &&
    startsWithAlphabet(password)
  ) {
    alert("Password is valid.");
  } else {
    alert("Please enter a valid password that meets the requirements.");
  }
  */

  /* 16. Write a program to convert the following string to an array using string split method.
  var university = “University of Karachi”;*/

  /* var universityString = "University of Karachi";
  var universityArray = universityString.split(' ');

console.log(universityArray);*/

// 17. Write a program to display the last character of a user input.


/* var word = "Pakistan";

// Find the character at the 7th index
var characterAtIndex7 = word.charAt(7);

// Check if the character was found
if (characterAtIndex7) {
  document.write("The character at index 7th is: " + characterAtIndex7);
} else {
  document.write("No character found at index 7th'.");
}
*/


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string

// Define the input string
/* var inputString = "The quick brown fox jumps over the lazy dog";

// Convert the input string to lowercase to make the search case-insensitive
var lowercaseString = inputString.toLowerCase();

// Define the word to search for
var searchWord = "the";

// Split the lowercase string into an array of words
var words = lowercaseString.split(' ');

// Initialize a counter to keep track of the occurrences
var count = 0;

// Iterate through the words and count occurrences of the search word
for (var i = 0; i < words.length; i++) {
  if (words[i] === searchWord) {
    count++;
  }
}

// Display the count of occurrences
console.log("The word '" + searchWord + "' appears " + count + " times in the given string.");

*/



