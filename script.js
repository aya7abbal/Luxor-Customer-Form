document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("max", today);
});

// When option checked, show input area
const showHiddenFields = (id, actionId, textCheck = null, select = false) => {
  const element = document.getElementById(id);
  const action = document.getElementById(actionId);

  if (select)
    if (element.value == textCheck) {
      action.style.display = "block";
      document.getElementById("referralBox").style.display = "none";
    } else if (element.value.includes("Referral")) {
      document.getElementById("referralBox").style.display = "block";
      document.getElementById("otherBox").style.display = "none";
    } else {
      action.style.display = "none";
      document.getElementById("referralBox").style.display = "none";
    }
  else {
    switch (actionId) {
      case "otherBoxTwo":
        if (element.value === "New") {
          action.style.display = "block";
        } else {
          action.style.display = "none";
          document.getElementById("otherBoxThree").style.display = "none";
        }
        break;
        ``;
      case "otherBoxThree":
        if (element.value == "To be installed") {
          action.style.display = "block";
        } else if (element.value == "Already Installed") {
          action.style.display = "none";
        }
        break;
      case "otherBoxFour":
        if (element.value == "Round") {
          action.style.display = "block";
        }
        if (element.value == "Sharp") {
          action.style.display = "Block";
        }
        break;

      case "tearText":
        if (element.value == "yes") {
          toggleDisabled(action, "tearNo", "tearNo");
        } else {
          toggleDisabled(action, "tearYes", "tearYes");
        }
        break;
      case "checkText":
        if (element.value == "no") {
          toggleDisabled(action, "checkText", "svgOn");
        } else {
          toggleDisabled(action, "", "svgOff");
        }
        break;
      case "checkFaucet":
        if (element.value == "yes") {
          toggleDisabled(action, "faucetNo", "faucetNo");
        } else {
          toggleDisabled(action, "faucetYes", "faucetYes");
        }
        break;
      case "otherColor":
        if (element.value == "other") {
          action.style.display = "block";
        } else {
          action.style.display = "none";
        }
        break;
    }
  }
};

const toggleDisabled = (action, id, disableId) => {
  const disableElement = document.getElementById(disableId);
  if (action) {
    if (
      action.style.display === "none" &&
      (id == "tearNo" || id == "checkText")
    ) {
      action.style.display = "block";
    } else if (action.style.display === "block") action.style.display = "none";
  }
  disableElement.disabled = !disableElement.disabled;
};

const checkForInput = () => {
  const inputElements = document.querySelectorAll(".data-req");
  let isValid = true;

  for (const inputElement of inputElements) {
    if (inputElement.value === "") {
      toastr.error(`Please fill field ${inputElement.name}`, "Error", {
        positionClass: "toast-top-center",
        backgroundColor: "#ff0000",
      });
      isValid = false;
      break; // Exit the loop if an empty input is found
    }
  }

  return isValid;
};

const formatPhoneNumber = (input) => {
  let value = input.value.replace(/\D/g, ""); // Remove non-digit characters
  if (value.length > 0) {
    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
  }
  input.value = value;
};

const formatPrice = (input) => {
  let numericValue = input.value.replace(/[^0-9]/g, "");

  input.value = numericValue;
  // Add commas every 3 digits
  if (numericValue.length > 0) {
    numericValue = addCommas(numericValue);
    input.value = "$" + numericValue;
  }
};

function formatAreaInput(input) {
  // Remove non-numeric characters
  const numericValue = input.value.replace(/\D/g, "");

  // Update the input value with the symbol
  input.value = numericValue + " ft²";
}

const addCommas = (nStr) => {
  nStr += "";
  const x = nStr.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? "." + x[1] : "";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
};
// ----------------------------------- Add Email Js Details ------------------------------------------- //

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("_mtDuxd9bNq3NiHj2");
})();

const form = document.getElementById("customer-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("testing here");
  if (checkForInput()) {
    emailjs.sendForm("service_9y1ve0g", "template_h7enjtb", this).then(
      function () {
        toastr.success(
          "Thank you for filling out the form, your Data has been saved!",
          "Success",
          {
            positionClass: "toast-top-center",
            // backgroundColor: "#ff0000",
          }
        );

        setTimeout(function () {
          location.reload();
        }, 1500);

        // Scroll to the top of the page
        window.scrollTo(0, 0);
      },
      function (error) {
        toastr.error("Something went wrong!", "Error", {
          positionClass: "toast-top-center",
        });
      }
    );
  }
});

// Not to make them all required.
document.querySelectorAll(".valid").forEach(function (inputElement) {
  inputElement.addEventListener("input", function () {
    const label = this.nextElementSibling;
    if (this.value.trim() !== "") {
      label.classList.add("filled");
    } else {
      label.classList.remove("filled");
    }
  });
});
