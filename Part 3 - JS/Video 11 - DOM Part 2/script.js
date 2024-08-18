// console.log("Hello World");
//       document.body.children[0].children[0].firstElementChild.style.color =
//         "green";

// document.body.children[2].firstElementChild.style.backgroundColor = "green";

// document.body.children[2].lastElementChild.style.backgroundColor = "green";

let col = document.getElementsByTagName("li");

for (let i = 0; i < col.length; i++) {
  col[i].style.backgroundColor = "cyan";
}
