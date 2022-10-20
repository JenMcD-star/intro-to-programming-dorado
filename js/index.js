window.onload = function () {
  let year = new Date().getFullYear();
  document.getElementById("year").innerHTML = "© Jennifer McDougall " + year;
};

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Problem Solving",
  "Effective Communication",
];

skills.forEach(function (item) {
  let li = document.createElement("li");
  let text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("skillsList").appendChild(li);
});

const submitButton = document.createElement("button");
const saveButton = document.createElement("button");
const editButton = document.createElement("button");
const removeButton = document.createElement("button");
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

function getMessage() {
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<div>
  <a class="link" href="mailto:${email}">
  ${name1}:</a> 
  <span id= "usermessage">${message}</span>
</div>`;
  document.getElementById("messageSelection").appendChild(newMessage);

  removeButton.innerHTML = `<type = button id ="delete">delete</button>`;
  newMessage.appendChild(removeButton);

  editButton.innerHTML = `<type = button id = "edit">edit</button>`;
  newMessage.appendChild(editButton);

  saveButton.innerHTML = `<type = button id ="save">save</button>`;
  newMessage.appendChild(saveButton);
  saveButton.disabled = true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getUserInfo();
  getMessage();

  form.reset();
});

removeButton.addEventListener("click", function () {
  const entry = removeButton.parentNode;
  entry.remove();
});

editButton.addEventListener("click", function () {
  saveButton.disabled = false;
  console.log(usermessage);
  document.getElementById("usermessage").contentEditable = true;
});

saveButton.addEventListener("click", function () {
  document.getElementById("usermessage").contentEditable = false;
  saveButton.disabled = true;
});

