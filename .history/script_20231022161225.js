// When option checked, show input area
function showHiddenFields(id, actionId, textCheck = null, select = true) {
  const element = document.getElementById(id);
  const action = document.getElementById(actionId);
  switch (select) {
    case true:
      if (element.value == textCheck) {
        action.style.display = "block";
      } else {
        action.style.display = "none";
      }clear
    case false:
      toggleAttr(element);
      if (element.hasAttribute("sinkOff")) {
        action.style.display = "block";
      } else {
        action.style.display = "none";
      }
  }
}

function toggleAttr(element) {
  if (element.hasAttribute("sinkOff")) {
    element.removeAttribute("sinkOff");
  } else {
    element.setAttribute("sinkOff", true);
  }
}


// Zip Code Autofill

$("#zip").keyup(function() {
  var el = $(this);

  if ((el.val().length == 5) && (is_int(el.val()))) {
   
    // Make Ajax call, etc
 
  }

}

$.ajax({
  url: "http://zip.elevenbasetwo.com",
  cache: false,
  dataType: "json",
  type: "GET",
  data: "zip=" + el.val(),
  success: function(result, success) {

    $(".fancy-form div > div").slideDown(); /* Show the fields */

    $("#city").val(result.city); /* Fill the data */
    $("#state").val(result.state);

    $(".zip-error").hide(); /* In case they failed once before */

    $("#address-line-1").focus(); /* Put cursor where they need it */

  },
  error: function(result, success) {

    $(".zip-error").show(); /* Ruh row */

  }

});
