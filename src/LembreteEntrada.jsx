import React from 'react';
import { copiarLembretes } from './utils';

class LembreteEntrada extends React.Component {
  state = { textoDigitado: '' };

  aoMudarTexto = event => {
    this.setState({ textoDigitado: event.target.value });
  };

  aoCriarLembrete = () => {
    const titulo = this.state.textoDigitado;
    const novoLembrete = { titulo, ehFavorito: false };

    const copiaLembretes = copiarLembretes(this.props.lembretes);
    copiaLembretes.push(novoLembrete);

    this.setState({ textoDigitado: '' });
    this.props.atualizarLembretes(copiaLembretes);
  };

  render() {
    return (
      <div className="d-flex justify-content-between mt-2">
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Digite seu novo lembrete"
          onChange={this.aoMudarTexto}
          value={this.state.textoDigitado}
          className="form-control py-2 block"
        />
        <button
          className="btn btn-success ms-2 px-4 px-sm-5"
          onClick={this.aoCriarLembrete}
          disabled={!this.state.textoDigitado}
        >
          OK
        </button>
      </div>
    );
  }
}

export default LembreteEntrada;
