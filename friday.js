// var userId = prompt("please input username")
// var password = prompt("please input password")

function upperCheck(pass) {
  return pass.toLowerCase() != pass;
}

// user id check function
function isUserIdValid(str){
  return str.length >=6 && !str.includes ("#") && !str.includes ("$") && !str.includes ("!")
}
// user password check function
function isPasswordValid(pass) {
  return pass.length >=6 && upperCheck(pass) && !pass.includes ("password") && (pass.includes ("#") && pass.includes(1) || pass.includes(2) || pass.includes(3) || pass.includes(4) || pass.includes(5) || pass.includes(6) || pass.includes(7) || pass.includes(8) || pass.includes(9) || pass.includes(0) || pass.includes ("$") || pass.includes("!"))
}
// function to check if user id and pass are valid at the same time
function checkCred (id,pass) {
  return isUserIdValid (id) && isPasswordValid (pass)
}
// signin function
function signIn () {
  var userId = prompt("Enter your username below:")
  var password = prompt("What's your code bro...?")
  alert ("COOL YOU GOT CRED!!!!" + checkCred(userId,password))
}
