
let bestPlayer = {
    name: "Jerry",
    chips: 200,


    //  METHOD are simply functions that are attached to objects.

    // sayHellpow: function() {
    //     console.log("Heisann!")
    // }
}

// bestPlayer.sayHellpow()



let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]  // Array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerLe = document.getElementById("player-el")

playerLe.textContent = bestPlayer.name + ": $" + bestPlayer.chips

/* let player = {
    name: "Jerry",
    chips: 145
}

let playetrEl = document.getElementById("player-el")
playetrEl.textContent = player.name + ": $" + player.chips */


function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10

    } else if (randomNum === 1) {
        return 11

    } else {
        return randomNum
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}


function renderGame() {
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    
    } else if(sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for(let i = 0;  i < cards.length;  i++) {
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

   //    ARRAYS

let mySelf = ["Jerry", 23, true]
console.log(mySelf[2])

let years = [7, 4]
years.push(6)
console.log(years)

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately"
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

messages.pop()
console.log(messages)

    //  Counting with JavaScript

for (count = 1; count < 11; count += 1) {
    console.log(count)
}

for (i = 10;  i < 101;  i += 10) {
    console.log(i)
}

  //  For Loops with Arrays

  let ourMessages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately",
    "Same here!",
    "Great to hear",
    "I'm in the school now",
    "I saw you"
]

 for(i = 0;  i < ourMessages.length; i++) {
    console.log(ourMessages[i])
 }

 let ourCard = [7, 3, 9]

 for(i = 0;  i < ourCard.length;  i++) {
    console.log(ourCard[i])
 }

    // For loops, Arrays, DOM

    let sentence = ["Hellow", "my", "name", "is", "Jerry"]
    let greetingEl = document.getElementById("greeting-el")
    
    for(let i = 0;  i < sentence.length;  i++) {
        greetingEl.textContent += sentence[i] + " "   
    }

   //   Return Function
  
   let player1Time = 102
   let player2Time = 107
   
   function getFastestRaceTime() {
       if (player1Time < player2Time) {
           return player1Time
   
       } else if (player2Time < player1Time) {
           return player2Time
   
       } else {
           return player1Time
       }
   }
   
   let fastestRace = getFastestRaceTime()
   console.log(fastestRace)

   function getTotalRaceTime() {
    return player1Time + player2Time
}


let totalTime = getTotalRaceTime()
console.log(totalTime)

   //  Another Example

let race1Time = 75
let race2Time = 70

function hightestRace() {
    if (race1Time < race2Time) {
        return race1Time

    } else if (race2Time < race1Time) {
        return race2Time

    } else {
        return race1Time
    }
}

let totalRace = hightestRace()
console.log(totalRace)

    //  Maths and Return Function

let flooredNumber = Math.floor(3.45632)
console.log(flooredNumber)

let floorNumber = Math.floor(Math.random() * 6)
console.log(floorNumber)

function rollDice() {
    let floorNumber = Math.floor(Math.random() * 6) + 1
    return floorNumber
}

console.log(rollDice())


//  The Logical AND operator

let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true) {
    if (givesCertificate === true) {
        generateCertificate()
    }
}

function generateCertificate() {
    console.log("Generating Certificate....")
}

  //  Better alternative to writing it

  let completedCourse = true
let certificate = true

if (completedCourse === true && certificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating Certificate....")
}

  // OR

  let SheHascompletedCourse = true
  let HerCertificate = true
  
  if (true && true) {
      generateCertificate()
  }
  
  function generateCertificate() {
      console.log("Generating Certificate....")
  }

    //  PRACTICE

    let hasSolvedChallenge = false
    let hasHintsLeft = false
    
    if (hasSolvedChallenge === false && hasHintsLeft === false) {
        showSolution()
    }
    
    function showSolution() {
        console.log("Showing the solution....")
    }

    //  The Logical OR  operator

    let haveSolvedChallenge = false
    let hisHintsLeft = false
    
    if (haveSolvedChallenge === false || hisHintsLeft === false) {
        showSolution()
    }
    
    function showSolution() {
        console.log("Showing the solution....")
    }

    // PRACTICE 

    let likesDocumentaries = true
    let likesStartups = false
    
    if (likesDocumentaries === true || likesStartups === true) {
        recommendMovie()
    }
    
    function recommendMovie() {
        console.log("Hey, check out this new film we think you will like!")
    }  


   //  OBJECTS 

   let course = {
    title: "Learn CSS Grid for Free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.isFree)

   //  PRACTICE

   let airBnb = {
    name: "Airbnb Castle Listing",
    number: 45,
    isOpen: true,
    rooms: ["Room1", "Room2", "Room3"]
}

console.log(airBnb.rooms[2])




/* console.log(sum)
console.log(hasBlackJack)
console.log(isAlive)
console.log(message)

let age = 21

if(age <= 20) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome")
}

console.log(age)

console.log(4 === 3)  // false
console.log(5 > 2)   //  true
console.log(12 > 12)  //  false
console.log(3 < 0)    //  false
console.log(3 >= 3)   //  true
console.log(11 <= 11)  // true
console.log(3 <= 2)  // false */