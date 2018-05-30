class Website {
  constructor(nome, url, testes) {
    this.nome = nome;
    this.testes = Object.assign({}, testes);
    this.st = null;
    this.url = url;
    this._ = this.testes.func;
  }

  testarAmbiente() {
    testes.forEach(teste => {
      this.testarModulo(this.url, this._);
    });
  }

  testarModulos() {
    for(var i in this.testes) {
      $.post(this.url, { function: this.testes[i] }, res => {
        console.log(res);
      });
    }
  }
}
