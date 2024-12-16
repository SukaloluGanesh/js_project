let getUser = document.querySelector(".username");
let usedName = sessionStorage.getItem("LoggedIn-user");
console.log(JSON.parse(JSON.stringify(usedName)));
getUser.textContent = JSON.parse(usedName).username;
let userId = document.querySelector(".userId");
let userOptions = document.querySelector(".userOptions-1");

userId.addEventListener("click", () => {
  if (userOptions.style.display === "none") {
    userOptions.style.display = "block";
  } else {
    userOptions.style.display = "none";
  }
});
