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
// Random password algorithm
function generatePassword() {
  var pref = [];
  var check = false;
  while (check == false) {
    confirm("Include lower case letters?") ? pref.push(charLow) : null;
    confirm("Include upper case letters?") ? pref.push(charUp) : null;
    confirm("Include numbers?") ? pref.push(num) : null;
    confirm("Include special characters?") ? pref.push(spVar) : null;
    if (pref.length != 0) check = true;
  }
  var passLength = 0;
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Enter how long you would like your password to be: (8-128)");
  }

  randPass = "";
  for (var index = 0; index < passLength; index++) {
    //Selects a random character type from the prefered options, 
    //then randomly selects a character from that type.
    var rType = [];
    rType += pref[getRndInteger(0, pref.length - 1)];
    rType[getRndInteger(0, rType.length - 1)];
    randPass += rType[getRndInteger(0, rType.length - 1)];

  }
  //The compleated random password
  return randPass;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
