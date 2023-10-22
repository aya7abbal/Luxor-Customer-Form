
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
function otherSelected(id,textCheck) {
    if (document.getElementById("learnHow").value == textCheck) {
        document.getElementById("id").style.display = "block";
    } else {
        document.getElementById("id").style.display = "none";
    }
}

function checkBox(id, actionId) {
  const element = document.getElementById(id)
  toggleAttr(element)
      if (element.hasAttribute('sinkOff')) {
      document.getElementById(actionId).style.display = "block";
  } else {
      document.getElementById(actionId).style.display = "none";
  }
}

function toggleAttr(element) {
  if(element.hasAttribute('sinkOff')){
    element.removeAttribute('sinkOff')
  }else{
      element.setAttribute('sinkOff', true)
  }
}