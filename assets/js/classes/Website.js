class Website {
  constructor(nome, url, testes) {
    this.nome = nome;
    this.testes = testes;
    this.st = [];
    this.url = url;
    this._ = [];
    this.logs = document.querySelector(`#${this.nome}`).children[2];
    this.loader = this.logs.children[0];
    this.closeBtn = this.logs.children[1];
    this.list = this.logs.children[2];
    this.active = false;

    this.closeBtn.addEventListener('click', () =>
      this.logs.classList.remove('active'));
  }

  testarModulos() {
    this.logs.classList.add('active');
    this.st = [];
    this.testes.forEach(teste =>
      $.post(this.url, { function: teste }, res =>
        this.st.push({ nome: teste, res })));

    this._.push(this.st);

    this.atualizarValores();
  }

  atualizarValores() {
    this.loader.style.display = "none";
    this.list.innerHTML = "";
    this._.forEach(e => e.forEach(t => {
      this.list.innerHTML += `<li>${t.res}</li>`;
    }));
  }
}
