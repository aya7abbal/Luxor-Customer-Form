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

function is_int(value) {
  if ((parseFloat(value) == parseInt(value)) && !isNaN(value)) {
    return true;
  } else {
    return false;
  }
}

$(".fancy-form div > div").hide();

$("#zip").keyup(function() {

  // Cache
  var el = $(this);

  // Did they type five integers?
  if ((el.val().length == 5) && (is_int(el.val()))) {

    // Call Ziptastic for information
    $.ajax({
      url: "https://zip.getziptastic.com/v2/US/" + el.val(),
      cache: false,
      dataType: "json",
      type: "GET",
      success: function(result, success) {

        $(".zip-error, .instructions").slideUp(200);

        $("#city").val(result.city);

        $("#state").val(result.state);

        $(".fancy-form div > div").slideDown();

        $("#zip").blur();
        $("#address-line-1").show().focus();

      },
      error: function(result, success) {

        $(".zip-error").slideDown(300);

      }

    });

  } else if (el.val().length < 5) {

    $(".zip-error").slideUp(200);

  };

});


