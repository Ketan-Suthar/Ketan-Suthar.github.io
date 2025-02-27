document.getElementById("submit-form").addEventListener("submit", function (e) {
  var name = document.forms.submitfrm.name.value;
  var email = document.forms.submitfrm.email.value;
  var subject = document.forms.submitfrm.subject.value;
  var message = document.forms.submitfrm.message.value;

  document.getElementById("errorname").innerText = "";
  document.getElementById("erroremail").innerText = "";
  document.getElementById("errorsubject").innerText = "";
  document.getElementById("errormessage").innerText = "";

  var hasError = false;

  if (name == "") {
    document.getElementById("errorname").innerText = "Name must be filled out";
    hasError = true;
  } 

  if (email == "") {
    document.getElementById("erroremail").innerText = "Email must be filled out";
    hasError = true;
  }

  if (subject == "") {
    document.getElementById("errorsubject").innerText = "Subject must be filled out";
    hasError = true;
  }

  if (message == "") {
    document.getElementById("errormessage").innerText = "Message must be filled out";
    hasError = true;
  }

  if (hasError) {
    e.preventDefault();
    return false;
  } else {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbxi8pW7AhW350WbOpCsIdPLC48l2MVBsGWo-mUbeSd_Jt5AJP2lHzbPpDtBH6TN7H3P/exec", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert("Form submitted successfully");
        window.location.reload();
        // window.location.href="https://google.com"
      } else if (xhr.status != 200) {
        alert("Something went wrong");
      }
    };

    xhr.send(new URLSearchParams(new FormData(document.getElementById("submit-form"))).toString());
  }
});