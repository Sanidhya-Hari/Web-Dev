let age = 18;

if (age >= 10 && age <= 20) {
  console.log("Yes");
} else {
  console.log("No");
}

let ch = "d";
switch (ch) {
  case "a":
    age += 10;
    break;
  case "b":
    age += 20;
    break;
  case "c":
    age += 30;
    break;
  default:
    console.log("Invalid input");
    break;
}
var drive = age <= 18 ? "Can drive" : "KID";
console.log(age);
console.log(drive);
