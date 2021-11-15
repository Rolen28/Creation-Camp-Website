//This function validates the email format after everything else is proper in the validateContact() function
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

//This function is used to store data from the contact forms in the Local Storage
function storeContact() {

  //The next 4 lines sets up variables that can be used later in the function
  let a = document.ContactForm.name.value;
  let b = document.ContactForm.email.value;
  let c = document.ContactForm.stream.value;
  let d = document.ContactForm.message.value;
  
  //This function is used to create an object creator
  function personContact(name, email, stream, message) {
    this.name = name;
    this.email = email;
    this.stream = stream;
    this.message = message;
  }
  
  //This line of code is used to create a new object
  var x = new personContact(a, b, c, d);

  //This line of code stores the new object's information into Local Storage
  localStorage.setItem (x.name, x.email + ", " + x.stream + ", " + x.message);

  //This line of code has the contents of Local Storage show up in the console
  console.log(localStorage);
}

//This function is used to validate the information entered into the form on the home page
function validateForm() {

  //The next 4 lines sets up variables that can be used later in the function
  let x = document.TitleForm.name.value;
  let y = document.TitleForm.age.value;
  let z = document.TitleForm.phonenumber.value;
  let a = document.TitleForm.email.value;

  //This if statement checks if a name has been entered
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  else {

    //This if statement checks if an age has been entered
    if (y == "") {
      alert("Age must be filled out");
      return false;
    }

    else{
      
      //This if statement checks is the age is above 0
      if (isNaN(y) || x < 0) {
      alert("Age must be a numerical value greater than or equal to 0");
      return false;
      }

      else {

        //This if statement checks if a phone number has been entered
        if (z == "") {
          alert("Phone number must be filled out");
          return false;
        }

        else {

          //This if statement checks if an email has been entered
          if (a == ""){
            alert("Email must be filled out");
            return false;
          }

          else {
            //This line of code runs the validateEmail function to make sure the email is in the correct format
            return (validateEmail(document.TitleForm.email));
          }
        }
      }
    }
  }
}

//This function is used to validate the information entered into the contact forms
function validateContact() {
  
  //The next 4 lines sets up variables that can be used later in the function
  let x = document.ContactForm.name.value;
  let y = document.ContactForm.email.value;
  let z = document.ContactForm.stream.value;
  let a = document.ContactForm.message.value;

  //This if statement checks if a name has been entered
  if (x == "") {
    alert("Name cannot be empty");
    return false;
  }

  else {

    //This if statement checks if an email has been entered
    if (y == "") {
      alert("Email cannot be empty");
      return false;
    }

    else {

      //This if statement checks if a stream has been selected
      if (z == "Blank") {
        alert("Stream must be selected");
        return false;
      }

      else {
        
        //This if statement checks if a message has been entered
        if (a == "") {
          alert("Message cannot be empty");
          return false;
        }

        else {
          //This line of code runs the validateEmail function to make sure the email is in the correct format
          return (validateEmail(document.ContactForm.email));
        }
      }
    }
  }
}