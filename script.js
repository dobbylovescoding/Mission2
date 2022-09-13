let robot;
const answer = 9;
while (robot != answer) {
  robot = prompt("🤖🤖🤖 No robots aloud, 3 x 3 =? 🤖🤖🤖");
  if (robot == answer) {
    alert("Thanks Mr Human");
  } else {
    alert(`${robot} is incorrect Mr Robot`);
  }
}
document.getElementById("budaImg").onclick = function () {
  let budaImg = document.getElementById("budaImg");
  if (budaImg.style.height == "450px") {
    budaImg.style.marginLeft = "auto";
    budaImg.style.marginRight = "auto";
    budaImg.style.marginTop = "0%";
    budaImg.style.marginBottom = "0%";
    budaImg.style.height = "100vh";
  } else {
    budaImg.style.height = "450px";
    budaImg.style.width = "auto";
    budaImg.style.marginLeft = "16%";
    budaImg.style.marginTop = "2%";
  }
};

// document.getElementById("pragImg").onclick = function () {
//   let pragImg = document.getElementById("pragImg");
//   if (pragImg.style.height == "450px") {
//     pragImg.style.marginLeft = "auto";
//     pragImg.style.marginRight = "auto";
//     pragImg.style.marginTop = "0%";
//     pragImg.style.marginBottom = "0%";
//     pragImg.style.height = "100vh";
//   } else {
//     pragImg.style.height = "450px";
//     pragImg.style.width = "auto";
//     pragImg.style.marginLeft = "53%";
//     pragImg.style.marginTop = "-47.2%";
//   }
// };
