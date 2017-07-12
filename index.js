document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("username-container").addEventListener("submit", onSubmit);


})


const onSubmit = (e) => {
  e.preventDefault();
  let name = document.getElementById("username").value;
  Promise.resolve(getUserComments(name)).then((data) => {populateField("comments", data)});
  Promise.resolve(getUserSubmitted(name)).then((data) => {populateField("submitted", data)});
}

const populateField = (field, data) => {
  let element = document.getElementById(field);
  let innerListElements = "";
  let listElement = "";
  let i;
  if(field === "comments"){
    data = preprocessData("comment", data)
    i = 0
    while(i < 25){
      listElement = `<li class='comment'>${i}</li>`
      innerListElements = innerListElements.concat(listElement);
      i += 1;
    }
    console.log(data)
  } else {
    data = preprocessData("submitted", data)
    i = 0;
    while(i < 25){
      listElement = `<li class='submit-item'>${i}</li>`
      innerListElements = innerListElements.concat(listElement);
      i += 1;
    }
    console.log(data)
  }
  element.innerHTML = innerListElements;
}

const preprocessData = (type, data) => {
  let newData = [];
  if(type === "comment"){

    // data.data.children.forEach((datum) => {
    //   newData.push({
    //     body: datum.data.body,
    //     score: datum.data.score,
    //     link_url: datum.data.link_url
    //   });
    // })
    //
    // newData.sort((a, b) => {
    //   return a.score > b.score ? 1 : -1
    // })
    //

  } else {

    // data.data.children.forEach((datum) => {
    //   newData.push({
    //     title: datum.data.title,
    //     score: datum.data.score,
    //     url: datum.data.url
    //   });
    // })
    //
    // newData.sort((a, b) => {
    //   return a.score > b.score ? 1 : -1
    // })
    //
  }


  return newData;
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
