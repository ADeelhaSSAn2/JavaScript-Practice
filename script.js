// chapter #12 to 13
// Qno#1

// var a = "hello";
// if(a != a.toUpperCase() ){
// console.log("it is lowercase ")
// }else{
//     console.log("it is uppercase")
// }

// Qno#2
// var num1 = prompt("Enter the first integer:");
// var num2 = prompt("Enter the second integer:");


// if (num1 > num2) {
//    console.log("The larger integer is: " + num1);
// } else if (num2 > num1) {
//     console.log("The larger integer is: " + num2);
// } else {
//    console.log("The two integers are equal.");
// }

// Qno#5
// var password = "12345";
// let pass = prompt("enter a passwoed");
// if(password != pass){
//     console.log("please enter your password");
// }else if( password === pass){
//     console.log("Correct!");
// }

// else if(pass=""){
//     alert("entre")
// }
// else{
//     console.log("incorrect password");
// }


// Qno#7
// var time = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

// time = parseInt(time);

// if (time >= 0 && time < 1200) {
//     console.log("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Good afternoon!");
// } else if (time >= 1700 && time < 2000) {
//     console.log("Good evening!");
// } else if (time >= 2000 && time < 2400) {
//     console.log("Good night!");
// } else {
//     console.log("Invalid time input.");
// }


//  pdf 14 to 16 chapter
// Qno1

// let student =[
//     {
//         student1 :{
//             name: "adeel",
//             class:"smit",
//             roll:123,
//         },
//         student2 :{
//             name: "fahad",
//             class:"smit",
//             roll:323,
//         },

//     }
// ]

    //                                       MARKS SHEET
    // let studnetDetail ={
    //     student1:{
    //     name: "Adeel",

    //     },
    // }

//     let subject1 = +prompt("English");
//     let subject2 = +prompt("Math");
//     let subject3 = +prompt("Urdu");
//     if( subject1 >= 100 || subject2 >= 100 || subject3 >= 100){
// alert("Please input valid marks ")
//     }
//      let totalMarks = "300";
//      document.write("Total Marks = 300" + "</br>");
//      let obtainedMarks= subject1 + subject2 + subject3;
//      document.write("Obtained Marks =" +obtainedMarks +"</br>");
//      let percentage = (obtainedMarks/totalMarks)*100;
//      document.write("Percentage="+ percentage + "%" +"</br");

//      if(percentage >= 80 && subject1 >= 40 && subject2 >=40 && subject3 >= 40 ){
//         document.write("Grade A + One " +"</br>")
//         document.write("Remarks Passed" + "</br>")
//      }else if(percentage >= 70 && subject1 >= 40 && subject2 >=40 && subject3 >= 40 ){
//         document.write("Grade A  " +"</br>")
//         document.write("Remarks Passed" + "</br>")
//      }else if(percentage >= 60 && subject1 >= 40 && subject2 >=40 && subject3 >= 40 ){
//         document.write("Grade B " +"</br>")
//         document.write("Remarks Passed" + "</br>")
//      }else if(percentage >= 50 && subject1 >= 40 && subject2 >=40 && subject3 >= 40 ){
//         document.write("Grade C " +"</br>")
//         document.write("Remarks Passed" + "</br>")
//      }else if(percentage >= 40 && subject1 >= 40 && subject2 >=40 && subject3 >= 40 ){
//         document.write("Grade D " +"</br>")
//         document.write("Remarks Passed" + "</br>")
//      }else{
//         document.write("Marks: Failed" + "</br>")
//      }

   // qno#11
     var cities = ["Karachi","Lahore","Quetta","peshawar"];
     var a = cities.slice(1,3);
     console.log(a);

   //   qno#12
var c = ["This", "is" , "my" , "website"];
   var  cc=c.join(" ");
   console.log(cc)


   // Qno15
   // var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

   // // Writing HTML for dropdown/select menu
   // document.write("<label for='manufacturer'>Choose a phone manufacturer:</label>");
   // document.write("<select id='manufacturer'>");

   // // Looping through the manufacturers array to create options
   // for (var i = 0; i < manufacturers.length; i++) {
   //     document.write("<option value=" + manufacturers[i] + ">" + manufacturers[i] + "</option>");
   // }

   // document.write("</select>");

   var phoneManufactures =["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

   document.write("<label for = 'phoneManufactures'>Choose a Mobile Manufacturer:</label>");
   document.write("<select id='phoneManufactures'");

   for( var i = 0 ; i < phoneManufactures.length; i++){
 document.write("<option value="+ phoneManufactures[i] +">" + phoneManufactures[i] + "</option>");
   }
   document.write("</select>")



   // pdf 17 to 20
   // qno#3
var i = [1,2,3,4,5,6,7,8,9,10]
   for(var i = 1; i <= 10; i++)
    console.log(i)

// Qno#4
    // user se table pochne ka tarikaa

var userInput = +prompt("Enter table name");
var numberOfTimes = +prompt("Enter a table quantiy ")

for(var i = 0; i <= numberOfTimes; i++){
    document.write(userInput + " x " +i+ "=" + i*userInput + "<br/>") 
}



// even or odd number alag krne ka tarika
var even = []
var odd = []
var evens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (var i = 0; i < evens.length; i++) {
    if (evens[i] % 2 === 0) {
        even.push(evens[i])
    }
    else {
        odd.push(evens[i])
    }
}
console.log(odd)
console.log(even)

