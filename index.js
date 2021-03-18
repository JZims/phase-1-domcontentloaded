


let swapText = document.querySelector("p")

document.addEventListener("DOMContentLoaded", function() {
    swapText.textContent= "This is really cool!"
})

console.log("This consolelog fires when js loads - before DOMContentLoaded is triggered")
