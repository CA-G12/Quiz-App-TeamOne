const start = document.getElementById("start");
const scoreboard = document.getElementById("scoreboard");
const userName = document.getElementById("userName");
var user = { username: "", score: 0 };

start.addEventListener("click", () => {
  if (userName.value.length == 0) {
    window.location.href = "index.html";
  } else {
    user.username = userName.value;
    user.score = 0;
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "Html/quiz.html";
  }
});

function all_users() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = [];
  }
  return user;
}

scoreboard.addEventListener("click", () => {
  let allUser = all_users();
  console.log(allUser);
  alert(Object.values(allUser));
});
