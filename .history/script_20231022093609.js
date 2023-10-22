
let timer;

document.addEventListener('input', e => {
  const el = e.target;
  
  if( el.matches('[data-color]') ) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
    }, 100)
  }
})


// When option checked, show input area
function otherSelect() {
  var other = document.getElementById("otherBox");
  if (document.forms[0].theItems.options[document.forms[0].theItems.selectedIndex].value == "other") {
  other.style.visibility = "visible";
  }
  else {
  other.style.visibility = "hidden";
  }
  }

