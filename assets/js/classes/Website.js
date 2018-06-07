class Website {
  constructor(nome, url, testes) {
    this.nome = nome;
    this.testes = testes;
    this.st = [];
    this.url = url;
    this._ = [];
    this.logs = document.querySelector(`#${this.nome}`).children[2];
    this.closeBtn = this.logs.children[0];
    this.list = this.logs.children[1];
    this.btn = document.querySelector(`#${this.nome}`).children[1].children[1];
    this.active = false;

    this.closeBtn.addEventListener('click', () =>
      this.logs.classList.remove('active'));
  }

  testarModulos() {
    let n = 0;
    const self = this;

    const c = setInterval(function() {
      n++;
      if(n >= 10) {
        document.querySelector('.error-messages').innerHTML = "O tempo para a verificação foi esgotado.";
        document.querySelector('.error-messages').style.transform = 'translateY(0)';
        self.btn.removeAttribute('disabled');
        self.btn.innerHTML = 'Testar ambiente';

        clearInterval(c);

        setTimeout(function() {
          document.querySelector('.error-messages').style.transform = 'translateY(210%)';
        }, 3500);
      }
    }, 1000);

    this.active = true;
    this.btn.innerHTML = `Testar ambiente<div class="logs__loader"></div>`;
    this.btn.setAttribute('disabled', 'disabled');
    this.st = [];
    this.testes.forEach(teste =>
      $.post(this.url, { function: teste }, res => {
        this.st.push({ nome: teste, res });
        if(this.st.length >= this.testes.length) {
          clearInterval(c);
           this.atualizarValores();
        }
    }));

    this._.push(this.st);
  }

  atualizarValores() {

    this.active = false;
    this.list.innerHTML = "";
    this.st.forEach(t => {
      this.list.innerHTML += `<li>${t.res}</li>`;
    });
    this.logs.classList.add('active');
    this.btn.innerHTML = 'Testar ambiente';
    this.btn.removeAttribute('disabled');
  }
}
