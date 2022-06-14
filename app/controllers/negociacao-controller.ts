import { DiasDaSemana } from './../enums/dias-da-semana.js';
import { MensagemView } from '../views/mensagem-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
import { NegociacoesView } from '../views/negociacoes-view.js';


export class NegociacaoController {
  
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesview',true);
  private MensagemView = new MensagemView('#mensagemview');

  constructor(){
    this.inputData =<HTMLInputElement> document.querySelector('#data') ;  /* <HTMLInputElement> == as HTMLInputElement */
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValor = document.querySelector('#valor') as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  };

  public adiciona():void  {
      const negociacao = Negociacao.criaDe(
        this.inputData.value,
        this.inputQuantidade.value,
        this.inputValor.value
      );
      if(!this.eDiaUtil(negociacao.data)){
        this.MensagemView.update('Apenas negociações em dia úteis são aceitas');
        return
      }
      
      this.negociacoes.adiciona(negociacao);
      this.atualizaView()
      this.limpaFormulario();
      
  }

  private eDiaUtil(data:Date){
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay()< DiasDaSemana.SABADO;
  }

  private limpaFormulario():void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.MensagemView.update("Negociações adicionadas com sucesso")
  }

}