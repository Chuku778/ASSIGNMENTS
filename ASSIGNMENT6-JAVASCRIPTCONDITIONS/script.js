// SECTION 1(QUESTION2)
let hour = 2 ; // 24-hour format
if (hour < 12) {//   
  console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!")}
    // Section 1-(question 3)
 let number = -5;
if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}
// SECTION 2 (question 7)
function add(a, b){
    return a + b;
}
   console.log(add(4,5));

//    SECTION 2 (QUESTION 8)
   function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } 
  else {
    return "Odd";
  }
}
console.log(checkEvenOrOdd(4)); 

// SECTION C
// 1
function greaterNumber(a, b) {
  if (a > b) {
    console.log(a + " is greater");
  } else if (b > a) {
    console.log(b + " is greater");
  } else {
    console.log("Both numbers are equal");
  }
}

greaterNumber(15, 8);

// 2
let userAge = 20

  if (userAge <= 18) {
    console.log("YOU ARE A MINOR") 
}
else  (userAge <=59);
{console.log ("YOU ARE AN ADULT")};



// 3 

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } 
  else {
    return "Odd";
  }
}
console.log(checkEvenOrOdd(4)); 
// 4
 let studentScore = 30;
if (studentScore>= 90){
    console.log("A");
}
else if( studentScore >= 80 ){
    console.log("B");
}
else if (studentScore >= 70){
    console.log ("C")}
    else if (studentScore >= 60){
        console.log("D")}
    else {
        console.log ("Fail")}
// 5

     let dayoftheweek = "1";
     switch (dayoftheweek) {
      case "1":
      console.log("Monday");
      break;
      case "2":
      console.log("Tuesday");
      break;
      case "3":
      console.log("wednessday");
      break;
      case "4":
      console.log("Thursday");
      break;
      case "5":
      console.log("Friday");
      break;
      case "6":
      console.log("Saturday");
      break;
      case "7":
      console.log("Sunday");
      break;
      default:
        console.log("NOT FOUND");
     }

// 6
 let fruit = "apple";

switch (fruit.toLowerCase()) {
    case "apple":
        console.log("Apple is red");
        break;
    case "banana":
        console.log("Banana is yellow");
        break;
    case "orange":
        console.log("Orange is orange");
        break;
    default:
        console.log("Unknown fruit");
}


// 7
let num = 15;

if (num > 10) {
    console.log("Big number");
} else {
    console.log("Small number");
}

// 8
const year = 2004;
const isLeapYear = (year % 400 === 0) ? true : (year % 100 === 0) ? false : (year % 4 === 0);
console.log(isLeapYear);
9
let amount = 30000;
let balance = 20000;
if (balance >= amount ){console.log ("Withdrawal Succesful")

}
else {console.log("Insufficient Funds")

}
// 10

let trafficLight = "Green";
 switch (trafficLight){
    case "Red":
    console.log("Stop");
    break;
    case "Yellow":
    console.log("Get Ready");
    break;
    case "Green":
    console.log("Go");
    break;
    default:
    console.log("Invalid color");
 }