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

<script><![CDATA[
window.addEventListener('DOMContentLoaded', function() {
	// IMPORTANT: Fill in your client key
	var clientKey = "FILL_IN_CLIENT_KEY";

	var cache = {};
	var container = $("#example1");
	var errorElem = container.find(".label-error");

	/** Handle successful response */
	function handleResp(data)
	{
		// Check for error
		if (data.error_msg)
			errorElem.text(data.error_msg);
		else if ("city" in data)
		{
			// Set city and state
			container.find("input[name='city']").val(data.city);
			container.find("input[name='state']").val(data.state);
		}
	}

	// Set up event handlers
	container.find("input[name='zipcode']").on("keyup change", function() {
		// Get zip code
		var zipcode = $(this).val().substring(0, 5);
		if (zipcode.length == 5 && /^[0-9]+$/.test(zipcode))
		{
			// Clear error
			errorElem.empty();

			// Check cache
			if (zipcode in cache)
			{
				handleResp(cache[zipcode]);
			}
			else
			{
				// Build url
				var url = "https://www.zipcodeapi.com/rest/"+clientKey+"/info.json/" + zipcode + "/radians";

				// Make AJAX request
				$.ajax({
					"url": url,
					"dataType": "json"
				}).done(function(data) {
					handleResp(data);

					// Store in cache
					cache[zipcode] = data;
				}).fail(function(data) {
					if (data.responseText && (json = $.parseJSON(data.responseText)))
					{
						// Store in cache
						cache[zipcode] = json;

						// Check for error
						if (json.error_msg)
							errorElem.text(json.error_msg);
					}
					else
						errorElem.text('Request failed.');
				});
			}
		}
	}).trigger("change");
});
//]]></script>
