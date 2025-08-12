document.addEventListener("DOMContentLoaded", function() {
  alert("Welcome to the Event Hub!");
});

// Background color change
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// Feedback form validation
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let event = document.getElementById("event").value;
  let comments = document.getElementById("comments").value.trim();
  let rating = document.querySelector('input[name="rating"]:checked');

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !event || !comments || !rating) {
    alert("Please fill all fields!");
    return;
  }

  if (!email.match(emailPattern)) {
    alert("Invalid email format!");
    return;
  }

  let msg = document.createElement("p");
  msg.textContent = "✅ Thank you for your feedback!";
  msg.style.color = "green";
  document.querySelector(".container").appendChild(msg);

  document.getElementById("feedbackForm").reset();
});
