document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("username-container").addEventListener("submit", onSubmit);


})


const onSubmit = (e) => {
  e.preventDefault();
  let name = document.getElementById("username").value;
  Promise.resolve(getUserComments(name)).then((data) => {console.log(data)});
  Promise.resolve(getUserSubmitted(name)).then((data) => {console.log(data)});
}

const getUserComments = (user) => (
  $.ajax({
    method: "GET",
    url: `https://www.reddit.com/user/${user}/comments.json`,
  })
)

const getUserSubmitted = (user) => (
  $.ajax({
    method: "GET",
    url: `https://www.reddit.com/user/${user}/submitted.json`,
  })
)
