// var userId = prompt("please input username")
// var password = prompt("please input password")

function isUserIdValid(str){
  return str.length >=6 && !str.includes ("#") && !str.includes ("$") && !str.includes ("!")
}
function isPasswordValid(pass) {
  return pass.length >=6 && (parseInt(pass)) >= 0 && !pass.includes ("password") && (pass.includes ("#") || pass.includes ("$") || pass.includes ("!"))
}
function checkCred (id,pass) {
  return isUserIdValid (id) && isPasswordValid (pass)
}
function signIn () {
  var userId = prompt("Enter your username below:")
  var password = prompt("What's your code bro...?")
  alert ("COOL YOU GOT CRED!!!!" + checkCred(userId,password))
}
