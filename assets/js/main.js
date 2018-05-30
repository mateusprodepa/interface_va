function generateBoxes() {
  const c = Math.floor(Math.random() * (21 - 10) + 10);
  let boxes;

  boxes = new Array(c);
  for(var x = 0; x < boxes.length; x++) {
    const n = Math.floor(Math.random() * (7 - 2) + 2);
    const top = Math.floor(Math.random() * window.getComputedStyle(document.querySelector('.wrapper', null)).getPropertyValue('height').match(/\d*/gi)[0]) - 70;
    const left = Math.floor(Math.random() * window.getComputedStyle(document.querySelector('.wrapper', null)).getPropertyValue('width').match(/\d*/gi)[0]) + 150;
    document.querySelector('.wrapper').innerHTML += `<div style="top: ${top}px !important; left: ${left}px !important;" class='box box${n}'></div>`;
  }
}

generateBoxes();
