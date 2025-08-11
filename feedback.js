document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;
    let projectTitle = document.getElementById("projectTitle").value.trim();

    // Validation
    if(name === "" || email === "" || department === "" || year === "" || projectTitle === ""){
        alert("Please fill all fields.");
        return;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    alert("Registration Successful");
    document.getElementById("registrationForm").reset();
});
