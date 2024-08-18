// for (let i = 0; i < 10; i++) {
//   console.log(i + 112);
// }

// const obj = {
//   Ebullient: "Cheerful and full of energy.",
//   Obfuscate: "To render obscure, unclear, or unintelligible.",
//   Salubrious: "Health-giving; healthy.",
//   Cacophony: "A harsh, discordant mixture of sounds.",
// };
// for (const word in obj) {
//   console.log(word, "means", obj[word]);
// }

// let text = "hello";
// for (let char of text) {
//   console.log(char);
// }

const result = {
  harry: 98,
  rohan: 70,
  aakash: 7,
};

for (const marks in result) {
  console.log(` ${marks} got ${result[marks]}`);
}

const avg = (a, b, c, d, e) =>{
  return (a + b + c + d + e) / 5;
}

console.log(avg(465, 654, 6459, 616, 246));
