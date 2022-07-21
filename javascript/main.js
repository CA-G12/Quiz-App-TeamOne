const start = document.getElementById("start");
const userName = document.getElementById("userName");
var user = { username: "", score: 0 };

start.addEventListener("click", () => {
  user.username = userName.value;
  user.score = 0;

  localStorage.setItem("user", JSON.stringify(user));
  // console.log(user);
  window.location.href = "Html/quiz.html";
});
