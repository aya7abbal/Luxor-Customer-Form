
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
function otherSelected(this) {
    if (getElementById("learnHow").value == "other") {
        document.getElementById("otherBox").style.display = "block";
    } else {
        document.getElementById("otherBox").style.display = "none";
    }
}

