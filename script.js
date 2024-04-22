// chapter #12 to 13
// Qno#1

var a = "hello";
if(a != a.toUpperCase() ){
console.log("it is lowercase ")
}else{
    console.log("it is uppercase")
}

// Qno#2
var num1 = prompt("Enter the first integer:");
var num2 = prompt("Enter the second integer:");


if (num1 > num2) {
   console.log("The larger integer is: " + num1);
} else if (num2 > num1) {
    console.log("The larger integer is: " + num2);
} else {
   console.log("The two integers are equal.");
}

// Qno#5
var password = "12345";
let pass = prompt("enter a passwoed");
if(password != pass){
    console.log("please enter your password");
}else if( password === pass){
    console.log("Correct!");
}

else if(pass=""){
    alert("entre")
}
else{
    console.log("incorrect password");
}


// Qno#7
var time = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

time = parseInt(time);

if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
    console.log("Good evening!");
} else if (time >= 2000 && time < 2400) {
    console.log("Good night!");
} else {
    console.log("Invalid time input.");
}