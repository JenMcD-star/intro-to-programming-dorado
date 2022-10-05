window.onload = function () {
  let year = new Date().getFullYear();
  document.getElementById("year").innerHTML = "© Jennifer McDougall " + year;
};

const nametext = document.getElementById("nametext");
const emailtext = document.getElementById("emailtext");
const messagetext = document.getElementById("messagetext");
const form = document.getElementById("form");
let name1;
let email;
let message;

function getUserInfo() {
  name1 = document.getElementById("name1").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
}

function changeText() {
  nametext.innerHTML = `Name: ${name1}`;
  emailtext.innerHTML = `Email: ${email}`;
  messagetext.innerHTML =`Message: ${message}`;

  console.log(nametext, emailtext, messagetext);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("your message has been submitted");
  getUserInfo();
  changeText();
});
//this is currently adding the new innerhtml but the problem is that the submit button makes the page reload
//I think I will need to look ahead into AJAX?
