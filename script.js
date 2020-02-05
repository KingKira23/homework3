// Assignment Code
// make arrays for all entrys
// make a blank array to place what is selected to randomize
// make random generators for each aspect
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","@","#","$","%","^","&","*"];
var slections= [];


var lowersel= confirm("would you like it to contain lowercase letters")
var uppersel= confirm("would you like it to contain uppercase letters")
var numsel= confirm("would you like it to contain numbers")
var symbolsel= confirm("would you like it to contain symbols")

if(lowersel === true){
  slections.push("lowercase");
}
if(uppersel === true){
  slections.push("uppercase")
}
if(numsel === true){
  slections.push("numbers")
}
if(symbolsel === true){
  slections.push("symbols")
}


// var rnumletter = Math.floor(Math.random()*26)
// var rnumnum = Math.floor(Math.random()*10)
// var rnumsym = Math.floor(Math.random()*8)
// var rnumsel = Math.floor(Math.random()*slections.length)

var input = prompt("how long would you like your password to be")


for (i=0;i<(parseInt(input));i++){
  var rnumsel = Math.floor(Math.random()*slections.length)
  if(slections[lowercase]){
    var rnumletter = Math.floor(Math.random()*26)
  }
  else if(slections[uppercase]){
    var rnumletter = Math.floor(Math.random()*26)
  }
  else if(slections[numbers]){
    var rnumnum = Math.floor(Math.random()*10)
  }
  else if(slections[symbols]){
    var rnumsym = Math.floor(Math.random()*8)
  }
}













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
