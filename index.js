//calling all the elements and buttons from html
const washCarString = document.getElementById("wash-car-string")
const washCarCost = document.getElementById("wash-car-cost")
const mowLawnString = document.getElementById("mow-lawn-string")
const mowLawnCost = document.getElementById("mow-lawn-cost")
const pullWeedString = document.getElementById("pull-weed-string")
const pullWeedCost = document.getElementById("pull-weed-cost")
const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const totalAmount = document.getElementById("total-amount")
const resetBtn = document.getElementById("reset-btn")

//Declaring array and boolean. Boolean is used so that user can only charged for service once
let serviceRequested = []
let isWashCarServiceUsed = false
let isMowLawnServiceUsed = false
let isPullWeedServiceUsed = false

//function to display total amount in the web page
function sum() {
    let total = 0
    for (let i=0; i<serviceRequested.length; i++) {
        total += serviceRequested[i].cost
    }
    totalAmount.innerHTML = `$${total}`
}

// calling wash car button from html and performing function
washBtn.addEventListener("click", function() {
//Used if statement so that user can't use this button twice accidentally since the service can be charged only once   
    if (isWashCarServiceUsed === false) { 
        serviceRequested.push({string: "Wash Car", cost: 10}) //adding this to serviceRequested array
        washCarString.innerHTML = serviceRequested[(serviceRequested.length-1)].string //pulling data from array and display in the particular element
        // serviceRequested.length-1 is used so that output will always be last data added in the array
        washCarCost.innerHTML = `$${serviceRequested[(serviceRequested.length-1)].cost}`
        sum()
        isWashCarServiceUsed = true
    }
})

//// calling mow lawn button from html and performing function
mowBtn.addEventListener("click", function() {
    if (isMowLawnServiceUsed === false) {
        serviceRequested.push({string: "Mow Lawn", cost: 20})
        mowLawnString.innerHTML = serviceRequested[(serviceRequested.length-1)].string
        mowLawnCost.innerHTML = `$${serviceRequested[(serviceRequested.length-1)].cost}`
        sum()
        isMowLawnServiceUsed = true
    }
})

// calling pull weed button from html and performing function
pullBtn.addEventListener("click", function() {
    if (isPullWeedServiceUsed === false) {
        serviceRequested.push({string: "Pull Weed", cost: 30})
        pullWeedString.innerHTML = serviceRequested[(serviceRequested.length-1)].string
        pullWeedCost.innerHTML = `$${serviceRequested[(serviceRequested.length-1)].cost}`
        sum()
        isPullWeedServiceUsed = true
    }
})

// calling reset button from html and performing function to reset everything as it was in the start
resetBtn.addEventListener("click", function() {
    serviceRequested = []
    washCarString.innerHTML = ""
    washCarCost.innerHTML = ""
    mowLawnString.innerHTML = ""
    mowLawnCost.innerHTML = ""
    pullWeedString.innerHTML = ""
    pullWeedCost.innerHTML = ""
    totalAmount.innerHTML = "$0"
    isWashCarServiceUsed = false //used this so user can use the application without refreshing the page
    isMowLawnServiceUsed = false //used this so user can use the application without refreshing the page
    isPullWeedServiceUsed = false //used this so user can use the application without refreshing the page
    
})
