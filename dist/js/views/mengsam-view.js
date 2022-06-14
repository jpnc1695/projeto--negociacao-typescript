export class MensagemView {
    constructor(seletor) {
        this.elmento = document.querySelector(seletor);
    }
    template(model) {
        return `
          <p class="alert alert-info">${model}</p>
    `;
    }
    update(model) {
        const template = this.template(model);
        this.elmento.innerHTML = template;
    }
}
