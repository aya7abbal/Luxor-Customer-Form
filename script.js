// When option checked, show input area
const showHiddenFields = (id, actionId, textCheck = null, select = false) => {
  const element = document.getElementById(id);
  const action = document.getElementById(actionId);
  if (select)
    if (element.value == textCheck) {
      action.style.display = "block";
    } else {
      action.style.display = "none";
    }
  else {
    switch (actionId) {
      case "otherBoxTwo":
        action.style.display = "block";
        break;
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

const checkForSelected = () => {
  const cabinetOptions = document.querySelectorAll("option.cabinets");
  document.getElementById("install").addEventListener("change", function () {
    const selectedOption = cabinetOptions[this.selectedIndex - 1];
    if (selectedOption) {
      const selectedValue = selectedOption.value;
      if (selectedValue == "To be installed") {
        console.log("test");
      }
    }
  });
};

const checkForInput = () => {
  const inputElements = document.querySelectorAll(".data-req");
  let isValid = true;

  for (const inputElement of inputElements) {
    if (inputElement.value === "") {
      toastr.error(`Please fill field ${inputElement.name}`, "Error", {
        positionClass: "toast-top-right",
        backgroundColor: "#ff0000",
      });
      isValid = false;
      break; // Exit the loop if an empty input is found
    }
  }

  return isValid;
};

// ----------------------------------- Add Email Js Details ------------------------------------------- //

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("_mtDuxd9bNq3NiHj2");
})();

const form = document.getElementById("customer-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(checkForInput());
  if (checkForInput()) {
    emailjs.sendForm("service_9y1ve0g", "template_h7enjtb", this).then(
      function () {
        toastr.success(
          "Thank you for filling out the form, your Data has been saved!",
          "Success",
          {
            positionClass: "toast-top-right",
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
          positionClass: "toast-top-right",
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
