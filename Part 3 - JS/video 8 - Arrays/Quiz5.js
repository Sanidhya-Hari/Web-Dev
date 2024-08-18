const readline = require('readline');

// Initialize an empty array
let numbers = [];

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to take user input and add it to the array
function addNumbers() {
    rl.question("Enter a number to add to the array (or type 'stop' to finish): ", function(input) {
        if (input.toLowerCase() === 'stop') {
            // Stop taking input and display the array
            console.log("The numbers in the array are:", numbers);
            rl.close();
        } else {
            // Convert input to a number and add it to the array
            let number = Number(input);

            if (!isNaN(number)) {
                numbers.push(number);
            } else {
                console.log("Please enter a valid number.");
            }

            // Recursively call the function to continue adding numbers
            addNumbers();
        }
    });
}

// Start the input process
addNumbers();
