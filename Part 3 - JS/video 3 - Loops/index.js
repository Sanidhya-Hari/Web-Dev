console.log(" Introduction to loops");

//for loop
for (let a = 0; a < 10; a++) {
  console.log(a);
}

//for-in loop

let obj = {
  Name: "Sanidhya",
  Role: "Programmer",
  Company: "S&P Global",
};

// for (const key in object) {
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
        // const element = object[key];
        
    // }
// }

for (const key in obj) {
  const element = obj[key];
  console.log(element);
}

//for-off loop

for (const c of "Sanidhya") {
    console.log(c);
}

//while loop
let b=2;
while (b<8) {
    console.log(b);
    b++;
}

//do-while loop
let c=12;
do {
    console.log(c);
    c++;
} while (c<10);

