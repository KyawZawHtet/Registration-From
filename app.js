// Name Validation
document.getElementById("name").onfocus = function () {
  document.getElementById("nameError").innerHTML = "";
  this.style.borderColor = "";
};

document.getElementById("name").onblur = function () {
  let nameValue = this.value.trim();
  if (
    nameValue === "" ||
    /\d/.test(nameValue) ||
    nameValue.length < 4 ||
    nameValue.length > 50 ||
    !/^[A-Za-z\s]+$/.test(nameValue)
  ) {
    document.getElementById("nameError").innerHTML =
      "Please enter a name, must be 4-50 chars, contain only letters and must not be numbers.";
    this.style.borderColor = "#d00000";
  } else {
    this.style.borderColor = "";
  }
};

//Email Validation
document.getElementById("email").onfocus = function () {
  document.getElementById("emailError").innerHTML = "";
  this.style.borderColor = "";
};

document.getElementById("email").onblur = function () {
  const emailValue = this.value.trim();
  const gmailRegex = /^[^@\s]+@gmail\.com$/;

  if (!gmailRegex.test(emailValue)) {
    document.getElementById("emailError").innerHTML =
      "Please enter a valid email address, must be a @gmail.com.";
    this.style.borderColor = "#d00000";
  } else {
    this.style.borderColor = "";
  }
};

//Password and Confirm Password Validation
function validatePassword() {
  const password = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const passwordCriteria = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*]).{8,}$/;

  if (password.value.length === 0) {
    passwordError.textContent = "Please enter a password!";
    password.style.borderColor = "red";
  } else if (!passwordCriteria.test(password.value)) {
    passwordError.textContent =
      "Password must be at least 8 chars, include one uppercase letter, one special character, and one number.";
    password.style.borderColor = "red";
  } else {
    passwordError.textContent = "";
    password.style.borderColor = "";
  }
}

function validateConfirmPassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  if (confirmPassword.value.length === 0) {
    confirmPasswordError.textContent = "Please enter a confirm password!";
    confirmPassword.style.borderColor = "red";
  } else if (password !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords do not match!";
    confirmPassword.style.borderColor = "red";
  } else {
    confirmPasswordError.textContent = "";
    confirmPassword.style.borderColor = "";
  }
}

document.getElementById("password").onblur = validatePassword;
document.getElementById("confirm-password").onblur = validateConfirmPassword;

document.getElementById("password").onfocus = function () {
  document.getElementById("passwordError").textContent = "";
  this.style.borderColor = "";
};
document.getElementById("confirm-password").onfocus = function () {
  document.getElementById("confirmPasswordError").textContent = "";
  this.style.borderColor = "";
};

// Class
document.getElementById("class").onfocus = function () {
  document.getElementById("classError").textContent = "";
  this.style.borderColor = "";
};

document.getElementById("class").onblur = function () {
  const classSelection = document.getElementById("class").value;
  if (classSelection === "Select Class") {
    document.getElementById("classError").textContent =
      "Please select a class.";
    this.style.borderColor = "red";
  } else {
    document.getElementById("classError").textContent = "";
    this.style.borderColor = "";
  }
};

// Gender
document.querySelectorAll('input[name="gender"]').forEach(function (radio) {
  radio.onclick = function () {
    const genderError = document.getElementById("genderError");
    if (document.querySelector('input[name="gender"]:checked')) {
      genderError.textContent = "";
    } else {
      genderError.textContent = "Please select a gender.";
    }
  };
});

// Hobbies
document
  .querySelectorAll('input[type="checkbox"]')
  .forEach(function (checkbox) {
    checkbox.onclick = function () {
      const hobbiesError = document.getElementById("hobbiesError");
      if (
        document.querySelectorAll('input[type="checkbox"]:checked').length > 0
      ) {
        hobbiesError.textContent = "";
      } else {
        hobbiesError.textContent = "Please select at least one hobby.";
      }
    };
  });

// Form Submit Validation
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (e) {
    let isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("classError").innerText = "";
    document.getElementById("genderError").innerText = "";
    document.getElementById("hobbiesError").innerText = "";

    // Validate Name
    // let nameInput = document.getElementById("name");
    // let name = nameInput.value.trim();
    // if (name === "") {
    //   document.getElementById("nameError").innerText =
    //     "Please enter your name!.";
    //   nameInput.style.borderColor = "red";
    //   isValid = false;
    // } else if (!/^[A-Za-z\s]+$/.test(name)) {
    //   document.getElementById("nameError").innerText =
    //     "Name must contain only letters and spaces.";
    //   nameInput.style.borderColor = "red";
    //   isValid = false;
    // } else if (/\d/.test(name)) {
    //   document.getElementById("nameError").innerText =
    //     "Name must not contain numbers.";
    //   nameInput.style.borderColor = "red";
    //   isValid = false;
    // } else if (name.length < 4 || name.length > 50) {
    //   document.getElementById("nameError").innerText =
    //     "Name must be between 4 to 50 characters.";
    //   nameInput.style.borderColor = "red";
    //   isValid = false;
    // } else {
    //   nameInput.style.borderColor = "";
    // }
    let name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").innerText =
        "Please enter your name.";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      document.getElementById("nameError").innerText =
        "Name must contain only letters and spaces.";
      isValid = false;
    } else if (/\d/.test(name)) {
      document.getElementById("nameError").innerText =
        "Name must not contain numbers.";
      isValid = false;
    } else if (name.length < 4 || name.length > 50) {
      document.getElementById("nameError").innerText =
        "Name must be between 4 to 50 characters.";
      isValid = false;
    }

    // Validate Email
    let email = document.getElementById("email").value.trim();
    if (
      email === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      document.getElementById("emailError").innerText =
        "Please enter a valid email address.";
      isValid = false;
    }

    // Validate Password
    let password = document.getElementById("password").value;
    if (password.length < 8) {
      document.getElementById("passwordError").innerText =
        "Password must be at least 8 chars.";
      isValid = false;
    }

    // Validate Confirm Password
    let confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerText =
        "Passwords do not match.";
      isValid = false;
    }

    // Validate Class Selection
    let classSelected = document.getElementById("class").value;
    if (classSelected === "Select Class") {
      document.getElementById("classError").innerText =
        "Please select a class.";
      isValid = false;
    }

    // Validate Gender Selection
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
      document.getElementById("genderError").innerText =
        "Please select a gender.";
      isValid = false;
    }

    // Validate Hobbies Selection
    let hobbiesChecked = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;
    if (hobbiesChecked === 0) {
      document.getElementById("hobbiesError").innerText =
        "Please select at least one hobby.";
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
});
