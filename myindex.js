
//document.getElementById("count-el").innerText = 5

/* let count = 0
console.log(count)

let myAge = 23;
let humanDogRatio = 21;
let myDogAge = myAge * humanDogRatio
console.log(myDogAge)

let bonusPoints = 50;
console.log(bonusPoints)

bonusPoints = bonusPoints + 50;
console.log(bonusPoints)

bonusPoints = bonusPoints - 75;
console.log(bonusPoints)

bonusPoints = bonusPoints + 45;
console.log(bonusPoints) */


// Initialize the count as 0
// Listen for clicks in the increment button
// Increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

/* function increment() {
    console.log("The button was clicked")
}

function myNumber() {
    console.log(42)
}
myNumber()

let lap1 = 34
let lap2 = 33
let lap3 = 36

function myLogger() {
    let sum = lap1 + lap2 + lap3;
    console.log(sum)
}
myLogger()


let lapsCompleted = 0

function incrementLap() {
     lapsCompleted = lapsCompleted + 1
}
incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted) */



 //  Passenger Counter App

/* let mySaveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let myCount = 0

function increment() {
    myCount += 1
    countEl.textContent = myCount 
}

function save() {
    let countStr = myCount + " - "
    mySaveEl.textContent += countStr
    countEl.textContent = 0
    myCount = 0
    
}
save()
console.log(myCount) */


/* myIncrement()
console.log(myCount)
let saveEl = document.getElementById("save-btn")
function save() {
    console.log(myCount)
}
save()




let username = "Jerry, "
let message = "You have three new notifications"
console.log(username + message)

let messageToUser = username + message + "!"
console.log(messageToUser)

let name = "Jerry"
let greeting = "Good morning "
let myGreeting = greeting + name
console.log(myGreeting)

let welcomeEl = document.getElementById("welcome-el")
let myName = "Jerry"
let greet = "Welcome back "
welcomeEl.innerText = greet + myName
welcomeEl.innerText += " (wave emoji)"
console.log(welcomeEl) */

// PRACTICE TIME --- VARIABLES

/* let firstName = "Jeremaih"
let lastName = "Chinwe"
let fullName = firstName + " " + lastName
console.log(fullName)

//  FUNCTIONS 

let name = "Linda"
let greeting = "Hi there"
function myGreeting() {
    console.log(greeting + ", " + name + "!")
}
myGreeting()

//  Incrementing and Decrementing

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Points() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points
remove1Points()
remove1Points()
console.log(myPoints) */

// Strings and Numbers

/* console.log("2" + 2) // 22
console.log(11 + 7)  // 18
console.log(6 + "5")  // 65
console.log("My points: " + 5 + 9)  // My points: 59
console.log(2 + 2)  // 4
console.log("11" + "14")  // 1114 */

// Rendering an error message

/* let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    errorParagraph.textContent = "Something went wrong, please try again"
    
} */

//  Calculator Challenge 

let num1 = 8
let num2 = 2
let sum = "Sum: 0"

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
document.getElementById("sum-el").textContent = sum


let sumEl = document.getElementById("sum-el")


function add() {
    sumEl.textContent = "Sum: " + Number(num1 + num2)
}

function subtract() {
    sumEl.textContent = "Sum: " + Number(num1 - num2)
}


function divide() {
    sumEl.textContent = "Sum: " + Number(num1 / num2)
}


function multiply() {
    sumEl.textContent = "Sum: " + Number(num1 * num2)
}

function reset() {
    sumEl.textContent = "Sum: " + 0
}














