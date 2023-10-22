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

        $(function() {
            
            $(document).ready( function() 
            {
                $('#citybox').hide();
                $('#statebox').hide();
                
            });
            
            // OnKeyDown Function
            $("#zip").keyup(function() {
                var zip_in = $(this);
                var zip_box = $('#zipbox');
                
                if (zip_in.val().length<5)
                {
                    zip_box.removeClass('error success');
                }
                else if ( zip_in.val().length>5)
                {
                    zip_box.addClass('error').removeClass('success');
                }
                else if ((zip_in.val().length == 5) ) 
                {
                    
                    // Make HTTP Request
                    $.ajax({
                        url: "http://api.zippopotam.us/us/" + zip_in.val(),
                        cache: false,
                        dataType: "json",
                        type: "GET",
                      success: function(result, success) {
                            // Make the city and state boxes visible
                            $('#citybox').slideDown();
                            $('#statebox').slideDown();
                        
                            // US Zip Code Records Officially Map to only 1 Primary Location
                            places = result['places'][0];
                            $("#city").val(places['place name']);
                            $("#state").val(places['state']);
                            zip_box.addClass('success').removeClass('error');
                        },
                        error: function(result, success) {
                            zip_box.removeClass('success').addClass('error');
                        }
                    });
                }
        });
    });
            
