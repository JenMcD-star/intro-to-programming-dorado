window.onload = function () {
  let year = new Date().getFullYear();
  document.getElementById("year").innerHTML = "© Jennifer McDougall " + year;
};

const skills = ['JavaScript', 'HTML', 'CSS', 'Problem Solving', 'Effective Communication']

skills.forEach(function(item) {
  let li = document.createElement("li");
  let text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("skillsList").appendChild(li);
});

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
  form.reset();
});

