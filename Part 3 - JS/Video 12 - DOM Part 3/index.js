// let car = {
//   company: "Bentley",
//   model: "Bentega",
//   year: 2002,
// };

// console.log(car);
// console.dir(car);

// let buttonElement = document.getElementById("myButton");
// console.log(buttonElement.className);




// let buttonElement = document.getElementById("myButton");
// console.log(buttonElement.className);

// buttonElement.classList.add("active");

// console.log(buttonElement.className);

// buttonElement.classList.remove("primary");
// console.log(buttonElement.className);

// buttonElement.classList.toggle("disabled");

// console.log(buttonElement.classList.contains("active"));



// let counter = 0;

// let intervalId = setInterval(function() {
//   counter++;
//   console.log("Counter:", counter);
// }, 2000);

// setTimeout(function() {
//     console.log("5 seconds have passed");
//   }, 5000);

// // Stop the interval after 10 seconds
// setTimeout(function() {
//   clearInterval(intervalId);
//   console.log("Interval stopped");
// }, 10000);


document.getElementById("changeButton").addEventListener("click", function() {
    console.log("Button clicked!");
  });

  document.getElementById("textInput").addEventListener("keyup", function(event) {
    console.log("Current input value: " + event.target.value);
  });

  document.getElementById("textInput").addEventListener("focus", function() {
    console.log("Input field is focused!");
  });
