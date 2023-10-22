const form = document.getElementById("review-form");
const formSteps = document.querySelectorAll(".form-step");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const currentStep = document.querySelector(".form-step.active");

  // Check if the current step is the last one
  if (currentStep === formSteps[formSteps.length - 1]) {
    // Submit the form or perform any desired action
    alert("Form submitted successfully!");
  } else {
    // Move to the next step
    const nextStep = formSteps[Array.from(formSteps).indexOf(currentStep) + 1];
    currentStep.classList.remove("active");
    nextStep.classList.add("active");
  }
});
