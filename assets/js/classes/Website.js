class Website {
  constructor(nome, url, testes) {
    this.nome = nome
    this.testes = testes
    this.st = []
    this.url = url
    this._ = []
    this.logs = document.querySelector(`#${this.nome}`).children[2]
    this.closeBtn = this.logs.children[0]
    this.list = this.logs.children[1]
    this.btn = document.querySelector(`#${this.nome}`).children[1].children[1]
    this.active = false
    this.errors = []
    this.success = []
    this.warn = []

    this.closeBtn.addEventListener('click', () =>
      this.logs.classList.remove('active'))
  }

  testarModulos() {
    let n = 0
    const self = this

    const c = setInterval(function() {
      n++
      if(n >= 10) {
        document.querySelector('.error-messages').innerHTML = "O tempo para a verificação foi esgotado."
        document.querySelector('.error-messages').style.transform = 'translateY(0)'
        self.btn.removeAttribute('disabled')
        self.btn.innerHTML = 'Testar ambiente'

        clearInterval(c)

        setTimeout(function() {
          document.querySelector('.error-messages').style.transform = 'translateY(210%)'
        }, 3500)
      }
    }, 1000)

    this.active = true
    this.btn.innerHTML = `Testar ambiente<div class="logs__loader"></div>`
    this.btn.setAttribute('disabled', 'disabled')
    this.st = []
    this.testes.forEach(teste =>
      $.post(this.url, { function: teste }, res => {
        this.errors = [];
        this.success = [];
        this.warn = [];
        if(res.includes("JSON")) {
          let r = res.split(' <br>')
          r.forEach(r => {
            if(r.includes("ERRO")) {
              this.errors.push(r)
            } else if(r.includes("AVISO")) {
              this.warn.push(r)
            } else {
              this.success.push(r)
            }
          })
          let val;
          if(this.errors.length >= 2) {
            const p = this.errors[0].split("JSON", -1)[1]
            val = `<strong style='color: #f1c40f;''><i>AVISO:</i></strong> ${p.substr(0, p.length - 16)}, e mais ${this.errors.length - 1} itens não foram encontrados...`
          }
          this.st.push({ nome: teste, res: val })
        } else {
          this.st.push({ nome: teste, res });
        }

        if(this.st.length >= this.testes.length) {
          clearInterval(c)
          this.atualizarValores()
        }
    }))

    this._.push(this.st)
  }

  atualizarValores() {
    this.active = false
    this.list.innerHTML = ""
    this.st.forEach(t => {
      this.list.innerHTML += `<li>${t.res}</li>`
    })
    this.logs.classList.add('active')
    this.btn.innerHTML = 'Testar ambiente'
    this.btn.removeAttribute('disabled')
  }
}
