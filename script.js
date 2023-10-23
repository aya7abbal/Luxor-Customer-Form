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
  const inputIds = [
    "date",
    "aptTime",
    "clientName",
    "email",
    "address",
    "city",
    "zipcode",
    "state",
    "mobile",
    "cons",
    "learnHow",
    "material",
    "color",
    "edge",
    "corner",
    "backsplash",
  ];
  inputIds.forEach(function (id, index) {
    if (document.getElementById(id).value === "") {
      toastr.error(`Please fill field ${id}`, "Error", {
        positionClass: "toast-top-right",
        backgroundColor: "#ff0000",
      });
      return;
    }
  });
};
// ----------------------------------- Add Email Js Details ------------------------------------------- //

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("_mtDuxd9bNq3NiHj2");
})();
document
  .getElementById("customer-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    checkForInput();

    // these IDs from the previous steps
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
      },
      function (error) {
        toastr.error("Something went wrong!", "Error", {
          positionClass: "toast-top-right",
        });
      }
    );
  });
