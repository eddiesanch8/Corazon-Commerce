"use strict";

//----------------------- Form Validation DOM------------\\\
const formSection = document.getElementById("form");
const nameInput = document.querySelector("[data-input-name]");
const emailInput = document.querySelector("[data-input-email]");
const phoneInput = document.querySelector("[data-input-phone]");
const messageInput = document.querySelector("[data-input-message]");

// ----------- Getting all the error messages and assinging them to variables-------\\
const errorMessages = document.querySelectorAll("[data-error-msg]");
const nameError = errorMessages[0];
const emailError = errorMessages[1];
const phoneError = errorMessages[2];
const messageError = errorMessages[3];

// ------ regex patterns for email and phone -----------\\
const emailPattern = /^[^\s@]+@[^\s@]+\.(com|org|edu)$/i;
const phonePattern = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
const onlyString = /^[A-Za-z]+$/;

// used to clear all errors onsubmit if valid
const clearErrors = function () {
  errorMessages.forEach((error) => {
    error.textContent = "";
  });
};

// validation function expressions for different fields
const validateName = function () {
  const userName = nameInput.value.trim();
  if (userName === "") {
    nameError.textContent = "**Name is required";
  } else if (!onlyString.test(userName)) {
    nameError.textContent = "**Please don't use numerical values";
  }
};

const validateEmail = function () {
  const email = emailInput.value.trim();

  if (email === "") {
    emailError.textContent = "**Email is required";
  }

  if (!emailPattern.test(email)) {
    emailError.textContent =
      "**Email must contain @ and end with .com, .org, or .edu";
  }
};

const validatePhone = function () {
  const phone = phoneInput.value.trim();

  if (phone === "") {
    phoneError.textContent = "** Phone number is required";
  }

  if (!phonePattern.test(phone)) {
    phoneError.textContent =
      "**Please enter a valid phone number (e.g., 123-456-7890)";
  }
};

const validateMessage = function () {
  if (messageInput.value.trim() === "") {
    messageError.textContent = "**Message is required";
  }
};

// main function used in event handler
const validateForm = function (event) {
  // prevents form from being submitted
  event.preventDefault();

  // Clear previous if they have been fixed
  clearErrors();

  validateName();
  validateEmail();
  validatePhone();
  validateMessage();
};

// Add event listener to form submit
formSection.addEventListener("submit", validateForm);
