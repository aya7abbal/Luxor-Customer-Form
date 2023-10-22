
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
function otherSelected() {
    if (document.getElementById("learnHow").value == "Other") {
        document.getElementById("otherBox").style.display = "block";
    } else {
        document.getElementById("otherBox").style.display = "none";
    }
}

function checkBox() {
  if (document.getElementById("cbxYes").value == is("checked") {
      document.getElementById("check-text").style.display = "block";
  } else {
      document.getElementById("check-text").style.display = "none";
  }
}

