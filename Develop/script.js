// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    // define all vars needed
    let length = parseInt(prompt("Choose a password length between 8 and 128"))
    let upper = confirm("do you want upper")
    let lower = confirm("do you want lower")
    let nums = confirm("do you want nums")
    let special = confirm("do you want special")
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerChar = "abcdefghijklmnopqrstuvwxyz"
    let numsChar = "0123456789"
    let specialChar = "!@#$%^&*()_+"

    if (length < 129 || length > 7) {
        let newPass = ""
        let newPassChar = ""
        if(upper){
            newPassChar += upperChar
        }
        if(lower){
            newPassChar += lowerChar
        }
        if(nums){
            newPassChar += numsChar
        }
        if(special){
            newPassChar += specialChar
        }

        for (let i = 0; i < length; i++) {
            let newChar = newPassChar[Math.floor(Math.random() * newPassChar.length)]
            newPass += newChar
        }
        console.log(newPass)
        return newPass
    } else {
        alert("yo u got wrong length")
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
