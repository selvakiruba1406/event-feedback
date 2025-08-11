document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let event = document.getElementById("event").value;
  let comments = document.getElementById("comments").value.trim();
  let rating = document.querySelector('input[name="rating"]:checked');

  // Email regex check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !event || !comments || !rating) {
    alert("Please fill all fields!");
    return;
  }

  if (!email.match(emailPattern)) {
    alert("Invalid email format!");
    return;
  }

  alert("Thank you for your feedback!");
  document.getElementById("feedbackForm").reset();
});
