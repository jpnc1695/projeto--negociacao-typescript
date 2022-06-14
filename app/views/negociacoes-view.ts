import { Negociacoes } from './../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {

   protected template(model:Negociacoes):string {
        return `
        <table class="table table-hover table-bordered">
          <thead>
                <tr>
                    <th>
                        DATA
                        <i class="fa-solid fa-arrow-up"></i>
                        <i class="fa-solid fa-arrow-down"></i>
                    </th>
                    <th>
                        QUANTIDADE
                        <i class="fa-solid fa-arrow-up"></i>
                        <i class="fa-solid fa-arrow-down"></i>
                    </th>
                    <th>
                        VALOR
                        <i class="fa-solid fa-arrow-up"></i>
                        <i class="fa-solid fa-arrow-down"></i>
                    </th>
                    <th>
                        REMOVER NEGOCIAÇÃO
                        <i class="fa-solid fa-circle-trash"></i>
                    </th>
                </tr>
          </thead>
                <Tbody>
                  ${model.lista().map(negociacao => {
                      return `
                          <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td><i class="fa-solid fa-trash"></i></td> 
                          </tr>`}).join('')}
                  </Tbody>
          </table> `
    }

    private formatarData(data:Date):string {
      return new Intl.DateTimeFormat().format(data)
    }
    
}


  