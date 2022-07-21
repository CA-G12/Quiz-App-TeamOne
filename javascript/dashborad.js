const result = document.getElementsByClassName("result")[0];
const showScoreboard = document.getElementsByClassName("show-scoreboard")[0];
const tryAgain = document.getElementsByClassName("try-again")[0];
const resultHeading = document.getElementsByClassName("result-heading")[0];
const resultMax = document.getElementsByClassName("result-max")[0];
const resultParts = document.getElementsByClassName("result-parts")[0];
let user = JSON.parse(localStorage.getItem("user"));
let allUsers = [];

tryAgain.addEventListener("click", () => {
  window.location.href = "/index.html";
});

function apperResult() {
  result.textContent = user.score + "/10";
}
apperResult();
showScoreboard.addEventListener("click", arrangeScore);
function arrangeScore() {
  if (localStorage.getItem("All users") != null) {
    allUsers = JSON.parse(localStorage.getItem("All users"));
    allUsers.push(user);
    localStorage.setItem("All users", JSON.stringify(allUsers));
  } else {
    allUsers.push(user);
    localStorage.setItem("All users", JSON.stringify(allUsers));
  }

  let arranged = allUsers.sort((a, b) => {
    return a.score - b.score;
  });
  resultHeading.textContent = "Scores :";
  resultMax.style.display = "none";
  let userList = document.createElement("ul");
  userList.style.listStyle = "none";
  result.style.display = "none";
  resultParts.appendChild(userList);

  arranged.forEach((element) => {
    let userItem = document.createElement("li");
    userItem.style.color = "white";
    userItem.textContent = element.username + "   " + element.score;
    userList.appendChild(userItem);
  });
}

