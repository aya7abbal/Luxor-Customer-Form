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
window.findAddressFromZip = function(zipcode) {
  var city, state, zip;
  zip = zipcode.value;
  city = '';
  state = '';
  if (zip.length === 5) {
    $.ajax({
      type: 'POST',
      url: "http://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "?key=XXXXXXXXXXXXXXXXXXXX",
      success: (function(_this) {
        return function(data) {
          if (data["status"] === "OK") {
            $('input#user_account_attributes_address_attributes_city').val(data["results"][0]["address_components"][1]["long_name"]);
            return $('select#user_account_attributes_address_attributes_state').val(data["results"][0]["address_components"][4]["long_name"]);
          }
        };
      })(this)
    });
  }
};