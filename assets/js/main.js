"use strict";

let t = new Array();
const wrapper = document.querySelector('.wrapper');
const dadosBtn = document.querySelectorAll('.dadosSistema__button');

function generateBoxes() {
  const c = Math.floor(Math.random() * (18 - 10) + 10);
  let boxes;

  boxes = new Array(c);
  for(var x = 0; x < boxes.length; x++) {
    const r = Math.floor(Math.random() * 360);
    const n = Math.floor(Math.random() * (7 - 2) + 2);
    const top = Math.floor(Math.random() *
    window.getComputedStyle(wrapper, null)
    .getPropertyValue('height')
    .match(/\d*/gi)[0]) - 120;

    const left = Math.floor(Math.random() *
    window.getComputedStyle(wrapper, null)
    .getPropertyValue('width')
    .match(/\d*/gi)[0]) + 170;

    wrapper.innerHTML += `<div style="top: ${top}px; left: ${left}px; transform: rotate(${r}deg)" class='box box${n}'></div>`;
  }
}

dadosBtn
.forEach(btn => {
  t.push(new Website(btn.dataset.name, btn.dataset.url, btn.dataset.func.split(' ')))
});

dadosBtn
.forEach(btn => {
  btn.addEventListener('click', () => {
    t.find(tes => btn.dataset.name === tes.nome).testarModulos()
  });
});

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() =>
    t.forEach(t =>
      t.testarModulos()), 15000)
})

generateBoxes();
