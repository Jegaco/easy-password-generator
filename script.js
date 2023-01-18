var generateBtn = document.querySelector("#generate");

// Using criteria as my object, below are the stored arrays that will be used in the password generation.
var criteria = {

  charLength: 0,

  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  specialCharacter: ["!", "@", "#", "$", "%", "^", "&", "*","-", "+", "=", "/", "?"],

  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
}

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
// addEventListener calls for the function writePassword when the generate password button is clicked
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // console.log added here for debugging purposes to show when event is triggered
  console.log("Generate password button clicked!")
  
  // Variable to hold generated password
  var password = "";

  // Variables to hold input from users
  var characterLength = 0;
  var upperCase;
  var lowerCase;
  var specialCharacter;
  var numbers;

  characterLength = 0;
  criteria.charLength = 0;
  password = "";

  while(characterLength < 8 || characterLength > 128) {
    characterLength = prompt("How long do you want your password to be? \nPassword must be between 8 and 128 characters.");

    // This function prompts the user for the the criteria listed below
    function passPrompts() {
      lowerCase = confirm("Include lowercase letters?");
      upperCase = confirm("Include uppercase letters?");
      numbers = confirm("Include numbers?");
      specialCharacter = confirm("Include special characters?");
      }

    // If user does not input character length, or cancels, log into the console
    // Used for debugging purposes
    if(characterLength === null) {
      console.log("Password generation canceled.")
      return "Your secure password.";
    } else {

      // If characterLength input is not a number, will alert the user
      if (isNaN(characterLength)) {
        alert("Please enter a number");
        return "Your secure password.";
      } else {

        // If characterLength is less than or greater than parameters, will alert user
        if (characterLength < 8 || characterLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        } else {
          
          // Otherwise will continue to prompt user with password criteria
          passPrompts();
          
          // While loop will continue to execute the prompts defined in passPrompts function until one criteria is met.
          // While the Criteria character length is less than user's set length, will loop and add characters until user set length is met
          while (criteria.charLength < characterLength) {

            // If no criteria chosen, will alert user
            if (lowerCase === false && upperCase === false && specialCharacter === false && numbers === false) {
              alert("One of the prompted criteria must be chosen.")
              passPrompts();
            } else {

              // If lowerCase is true, randomly choose from array. Adds to the password until user inputted character length is met
              if (lowerCase === true && criteria.charLength < characterLength) {
                var lo = criteria.lowerCase[Math.floor(Math.random() * 26)]
                password = password + lo;
                criteria.charLength++;
              }

              // If upperCase is true, randomly choose from array. Adds to the password until user inputted character length is met
              if (upperCase === true && criteria.charLength < characterLength) {
                var up = criteria.upperCase[Math.floor(Math.random() * 26)]
                password = password + up;
                criteria.charLength++;
              }

              // If specialCharacter, is true randomly choose from array. Adds to the password until user inputted character length is met
              if (specialCharacter === true && criteria.charLength < characterLength) {
                var sp = criteria.specialCharacter[Math.floor(Math.random() * 13)]
                password = password + sp;
                criteria.charLength++;
              }

              // If numbers is true, randomly choose from array. Adds to the password until user inputted character length is met
              if (numbers === true && criteria.charLength < characterLength) {
                var nu = criteria.numbers[Math.floor(Math.random() * 10)]
                password = password + nu;
                criteria.charLength++;
              }
            }
          }
        }
      }
      // Returns generated password
      return password;
    }
  }
}