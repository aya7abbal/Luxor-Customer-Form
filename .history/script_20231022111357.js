
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
  toggleAttr()
  console.log(document.getElementById("svgYes"))
  if (document.getElementById("cbxYes").check == true) {
      document.getElementById("checkText").style.display = "block";
  } else {
      document.getElementById("checkText").style.display = "none";
  }
}

function toggleAttr() {
  const element = document.getElementById("svgYes")
  if(element.hasAttribute('sinkOn')){
    element.removeAttribute('sinkOn')
  }else{
      element.setAttribute('sinkOn', true)
  }
}