import React from 'react';

class LembreteEntrada extends React.Component {
  state = { textoDigitado: '' };

  aoMudarTexto = event => {
    this.setState({ textoDigitado: event.target.value });
  };

  aoClicarConfirmar = () => {
    this.props.criarLembrete(this.state.textoDigitado);
    this.setState({ textoDigitado: '' });
  };

  render() {
    return (
      <div className="d-flex justify-content-between mt-4">
        <input
          type="text"
          placeholder="Digite seu novo lembrete"
          onChange={this.aoMudarTexto}
          value={this.state.textoDigitado}
          className="form-control"
        />
        <button
          className="btn btn-success ms-2 px-4 px-sm-5"
          onClick={this.aoClicarConfirmar}
        >
          OK
        </button>
      </div>
    );
  }
}

export default LembreteEntrada;
