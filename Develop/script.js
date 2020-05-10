// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLow = "abcdefghijklmnopqrstuvwxyz";
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var spVar = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var pref = [];
  confirm("Include lower case letters?") ? pref += charLow: null;
  confirm("Include upper case letters?") ? pref += charUp: null;
  confirm("Include numbers?") ? pref += num: null;
  confirm("Include special characters?") ? pref += spVar: null;

  var passLength = 0;
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Enter how long you would like your password to be: (8-128)");
  }

  randPass = "";
  for (var index = 0; index <= passLength; index++) {
    


    randPass += ;
    
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
