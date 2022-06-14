import { DiasDaSemana } from './../enums/dias-da-semana.js';
import { MensagemView } from '../views/mensagem-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesview', true);
        this.MensagemView = new MensagemView('#mensagemview');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    ;
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.eDiaUtil(negociacao.data)) {
            this.MensagemView.update('Apenas negociações em dia úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }
    eDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.MensagemView.update("Negociações adicionadas com sucesso");
    }
}
