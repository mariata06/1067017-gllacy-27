var button = document.querySelector(".feedback-button");

var popup = document.querySelector(".modal-dialog");

var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".feedback-form");

var userName = popup.querySelector("[name=userName]");

var userEmail = popup.querySelector("[name=userEmail]");

var userMessage = popup.querySelector("[name=userMessage]");

var isStorageSupport = true;
var currentName = "";
var currentEmail = "";

try {
  currentName = localStorage.getItem("userName");
  currentEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus();
  if (currentName) {
    userName.value = currentName;
    userEmail.focus();
  } else {
    userName.focus();
  }

  if (currentEmail) {
    userEmail.value = currentEmail;
    userMessage.focus();
  } else {
    userEmail.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
