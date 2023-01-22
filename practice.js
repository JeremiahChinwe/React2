
  //  Objects and Functions 

let person = {
    name: "Jerry",
    age: 23,
    country: "Nigeria"
}

function logData() {
    console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`)
}

logData()

   //  IF STATEMENTS
   
   // less than 6 years old  -> free
   // 6 to 17 years old  -> child discount
   // 18 to 26 years old  -> student discount
   // 27 to 66 years old  -> full price
   // over 66 years old  -> senior citizen discount

   
  

   //  LOOPS AND ARRAYS 

   let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

   console.log("The 5 largest countries in the world:")
   for (let i = 0; i < largeCountries.length; i++) {
      console.log("- " + largeCountries[i])
   }

   //  PUSH, POP, UNSHIFT, SHIFT CHALLENGE
   
   let largestCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

   largestCountries.shift();
   largestCountries.unshift("China");
   largestCountries.pop();
   largestCountries.push("Pakistan");
   
   console.log(largestCountries)


   //  LOGICAL OPERATORS

   let dayOfMonth = 13
   let weekday = "Friday"
   
   if (dayOfMonth === 13 && weekday === "Friday") {
       console.log("Good Morning")
   }

   //  Rock papers scissors

   let hands = ["rock", "paper", "scissor"]

   function getHand() {
        let randomIndex = Math.floor( Math.random() * 3)
        return hands[randomIndex]
   }

   console.log( getHand() )

   //   Practice

   let food = ["Rice", "Beans", "Pizza", "Yam"]

   function getFood() {
    let randomFood = Math.floor(Math.random() * 4)
    return food[randomFood]
   }

   getFood()




   

