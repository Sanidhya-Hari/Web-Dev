// <!-- Sure! Here are five three-word shop names:

//       Urban Trend Boutique
//       Vintage Charm Shop
//       Modern Style Hub
//       Classic Finds Gallery
//       Elegant Craft Corner -->

let rand = Math.random();
let first, second, third;

if (rand < 0.2) {
  first = "Urban";
} else if (rand > 0.2 && rand <= 0.4) {
  first = "Vintage";
} else if (rand > 0.4 && rand <= 0.6) {
  first = "Modern";
} else if (rand > 0.6 && rand <= 0.8) {
  first = "Classic";
} else {
  first = "Elegant";
}

rand = Math.random();
if (rand < 0.2) {
  second = "Trend";
} else if (rand > 0.2 && rand <= 0.4) {
  second = "Charm";
} else if (rand > 0.4 && rand <= 0.6) {
  second = "Style";
} else if (rand > 0.6 && rand <= 0.8) {
  second = "Finds";
} else {
  second = "Craft";
}

rand = Math.random();
if (rand < 0.2) {
  third = "Boutique";
} else if (rand > 0.2 && rand <= 0.4) {
  third = "Shop";
} else if (rand > 0.4 && rand <= 0.6) {
  third = "Gallery";
} else if (rand > 0.6 && rand <= 0.8) {
  third = "Corner";
} else {
  third = "Hub";
}

console.log(`${first} ${second} ${third}`);
