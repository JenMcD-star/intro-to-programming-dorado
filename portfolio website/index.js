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

const removeButton = document.createElement("button");
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("your message has been submitted");
  getUserInfo();
  console.log(name1, email, message);
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<div>
  <a class="link" href="mailto:${email}">
  ${name1}:</a> 
  <span>${message}</span>
</div>`;
  document.getElementById("messageSelection").appendChild(newMessage);

  removeButton.innerHTML = `<type = button>delete</button>`;
  newMessage.appendChild(removeButton)
  
  form.reset();
  
});


removeButton.addEventListener("click", function() {
  const entry = removeButton.parentNode;
  entry.remove();

})


/*        Inside the callback function, find the button's parent element using DOM Traversal (hint: parentNode property) and store it in a variable named entry
        Remove the entry element from the DOM (hint: remove method)
Append the removeButton to the newMessage element
    hint: appendChild method
Append the newMessage to the messageList element
Save and refresh your browser

*/
