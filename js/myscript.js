// Ask user name
const firstName = prompt("Write your name");

// Ask user surname
const surname = prompt("Now write your surname");

// Ask user favorite color
const favColor = prompt("Lastly write your favorite color");

// New password
const newPassword = firstName + surname + favColor + 23;

// Result in Html
document.getElementById("result").innerHTML = newPassword;
