let t = new Array();
const wrapper = document.querySelector('.wrapper');
const dadosBtn = document.querySelectorAll('.dadosSistema__button');

function generateBoxes() {
  const c = Math.floor(Math.random() * (18 - 10) + 10);
  let boxes;

  boxes = new Array(c);
  for(var x = 0; x < boxes.length; x++) {
    const n = Math.floor(Math.random() * (7 - 2) + 2);
    const top = Math.floor(Math.random() *
    window.getComputedStyle(wrapper, null)
    .getPropertyValue('height')
    .match(/\d*/gi)[0]) - 70;

    const left = Math.floor(Math.random() *
    window.getComputedStyle(wrapper, null)
    .getPropertyValue('width')
    .match(/\d*/gi)[0]) + 150;

    wrapper.innerHTML += `<div style="top: ${top}px; left: ${left}px;" class='box box${n}'></div>`;
  }
}

dadosBtn
.forEach(teste => {
  t.push(new Website(teste.dataset.name, teste.dataset.url, teste.dataset.func.split(' ')));
});

dadosBtn
.forEach(teste => {
  teste.addEventListener('click', () => {
    t.find(tes => teste.dataset.name === tes.nome).testarModulos();
  });
});


generateBoxes();
