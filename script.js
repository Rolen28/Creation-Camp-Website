function validateEmail(emailId) {
  var mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(emailId.value.match(mailFormat)) {
    alert("Thank you for submitting!");
    //document.ContactForm.text1.focus();
    return true;
  }

  else {
    alert("Invalid email address.");
    //document.ContactForm.text1.focus();
    return false;
  }
}    

function personContact(name, email, stream, message){
  this.name = name;
  this.email = email;
  this.stream = stream;
  this.message = message;
}

function storeContact() {
  var log = new personContact(document.ContactForm.name.value, document.ContactForm.email.value, document.ContactForm.stream.value, document.ContactForm.message.value)

  console.log(log)
}

function validateForm() {
  let x = document.TitleForm.name.value;
  let y = document.TitleForm.age.value;
  let z = document.TitleForm.phonenumber.value;
  let a = document.TitleForm.email.value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  else {
    if (y == "") {
      alert("Age must be filled out");
      return false;
    }

    else{
      if (isNaN(y) || x < 0) {
      alert("Age must be a numerical value greater than or equal to 0");
      return false;
      }

      else {
        if (z == "") {
          alert("Phone number must be filled out");
          return false;
        }

        else {
          if (a == ""){
            alert("Email must be filled out");
            return false;
          }

          else {
            if ((a.match(/@/g)).length != 1) {
            alert("Email cannot have more than 1 '@'");
            return false;
            }
          }
        }
      }
    }
  }
}

function validateContact() {
  let x = document.ContactForm.name.value;
  let y = document.ContactForm.email.value;
  let z = document.ContactForm.stream.value;
  let a = document.ContactForm.message.value;
  if (x == "") {
    alert("Name cannot be empty");
    return false;
  }

  else {
    if (y == "") {
      alert("Email cannot be empty");
      return false;
    }

    else {
      if (z == "Blank") {
        alert("Stream must be selected");
        return false;
      }

      else {
        if (a == "") {
          alert("Message cannot be empty");
          return false;
        }

        else {
          return (validateEmail(document.ContactForm.email));
        }
      }
    }
  }
}