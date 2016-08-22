document.getElementById("contact-form").onsubmit = function() {
    //Validate Name
    if(document.getElementById("form-name-field").value === "") {
        document.getElementById("nameError").innerHTML = "Invalid Name! Please try again.";
        document.getElementById("nameError").className = "alert alert-danger";
        document.getElementById("nameError").style.display = "block";
    }
  //Validate Email
   if(document.getElementById("form-email-field").value === "") {
        document.getElementById("emailError").innerHTML = "Invalid Email! Please try again.";
        document.getElementById("emailError").className = "alert alert-danger";
        document.getElementById("emailError").style.display = "block";
    }
  //Validate Phone
   if(document.getElementById("form-email-field").value == "") {
        document.getElementById("phoneError").innerHTML = "Invalid Phone Number! Please try again.";
        document.getElementById("phoneError").className = "alert alert-danger";
        document.getElementById("phoneError").style.display = "block";
    }
 }
document.getElementById("term-field").style.display = "none";
document.getElementById("checkbox-form").onclick = function() {
  if(document.getElementById("checkbox-form").checked) {
    document.getElementById("term-field").style.display = "block";
  } else {
    document.getElementById("term-field").style.display = "none";
  }
}
