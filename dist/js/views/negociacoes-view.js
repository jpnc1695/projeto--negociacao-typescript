import { View } from './view.js';
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
          <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
          </thead>
                <Tbody>
                  ${model.lista().map(negociacao => {
            return `
                          <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                          </tr>`;
        }).join('')}
                  </Tbody>
          </table> `;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}