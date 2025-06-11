
var name = prompt ("Enter your name");
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("greeting".innerText = "Hi" + name + ", Welcome to Revou!";
});

function ValidateForm() {
    var name = document.forms["message-form"]["name"].value;
    var date = document.forms["message-form"]["date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;

    if (name == "" || date == "" || gender =="" || messages == "") {
        alert("Input cannot be empty");
}

document.getElementById("sender-name").innerText = name;
document.getElementById("sender-date").innerText = date;
document.getElementById("sender-gender").innerText = gender;
document.getElementById("sender-messages").innerText = messages;

}

document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const sender = document.getElementById("sender").value;
    document.getElementById("output").textContent = "Name: " + name;
  });
ocument.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const sender = document.getElementById("sender").value;
    document.getElementById("output").textContent = "Birth Date: " + birth-date;
  });
ocument.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const sender = document.getElementById("sender").value;
    document.getElementById("output").textContent = "Gender: " + gender;
  });
ocument.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const sender = document.getElementById("sender").value;
    document.getElementById("output").textContent = "Message: " + messages;
  });