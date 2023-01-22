
// Make the SAVE INPUT button work with onclick.

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse (localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push((tabs[0].url))
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
         }
      )
   }
)



function render(leads) {
  let listItems = ""
  for (let i = 0;  i < leads.length;  i++) {
      listItems += 
      `<li>
          <a target='_blank' href=${leads}> ${leads[i]} </a>
      </li>`
     
  
  }
   ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))    
    render(myLeads)

    console.log( localStorage.getItem("myLeads"))
})



  //  innerHTML Practices

let container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy() {
    container.innerHTML += "<p>Thank you for buying!</p>"
}

  //  Template Literals  -> ` `

const recipient = "James"
const sender = "Jerry Chinwe"
const email = 

`Hey ${recipient}!

How is it going? Cheers

${sender}`

console.log(email)

console.log( Boolean("")    ) // false
console.log( Boolean("0")   ) // true
console.log( Boolean(100)   ) // true
console.log( Boolean(null)  ) // false
console.log( Boolean[0]     ) // true
console.log( Boolean(-0)    ) // false

   //  LocalStorage Practice

  // localStorage.setItem("myLeads", "www.examplelead.com")
// console.log (localStorage.getItem("myLeads"))

// localStorage.setItem("focus", "www.awesomelead.com")
// console.log (localStorage.getItem("focus"))
// localStorage.clear()

//  innerHTML Practice

 // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" 

 // listItems += "<li><a target='_blank' href='" + myLeads +"'>" +  myLeads[i] + "</a></li>"
    
          //  Alternatively
                                                    
        // Create Element
        // Set text content
        // Append to ul
    
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)


//  Converting Arrays to Strings and Viceversal

// let myLeads = `["www.awesomelead.com"]`

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.epiclead.com")

// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)



//  Functions with Parameters




