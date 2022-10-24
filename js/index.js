window.onload = function () {
  let year = new Date().getFullYear();
  let footer = document.getElementById("footerleft");
  let copyright = document.createElement("p");
  copyright.innerHTML = "© Jennifer McDougall " + year;
  footer.appendChild(copyright);
};

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Problem Solving",
  "Effective Communication",
];

const experience = [
  "Special Education Teacher",
  "Underwriting Assistant",
  "Person Care Attendant",
];

function listItems(area, id) {
  area.forEach(function (item) {
    let li = document.createElement("li");
    let text = document.createTextNode(item);
    li.appendChild(text);
    document.getElementById(id).appendChild(li);
  });
}

listItems(experience, "experienceList");
listItems(skills, "skillsList");

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

const projectSelection = document.getElementById("projects");
const projectList = projectSelection.querySelector("ul");


fetch("https://api.github.com/users/JenMcD-star/repos", { mode: "cors" })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    for (i = 0; i < response.length; i++) {
      console.log(response[i].name);
      let li = document.createElement("li");
      if (response[i].name == "Calculator") {
        li.innerHTML = `<a href="https://jenmcd-star.github.io/Calculator/"> ${response[i].name} Live View</a>`;
        console.log(li.innerHTML);
      } else if (response[i].name == "Etch-a-Sketch") {
        li.innerHTML = `<a href="https://jenmcd-star.github.io/Etch-a-Sketch/"> ${response[i].name} Live View</a>`;
      } else if (response[i].name == "landing_page") {
        li.innerHTML = `<a href="https://jenmcd-star.github.io/landing_page/"> ${response[i].name} Live View</a>`;
      } else {
        li.innerHTML = `<a href="${response[i].clone_url}"> ${response[i].name}</a>`;
      }
      document.getElementById("projectDisplay").appendChild(li);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
