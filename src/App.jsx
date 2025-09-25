import React from 'react';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { lembretes: [], filtrarPorFavoritos: false };

  atualizarLembretes = lembretesAtualizados => {
    this.setState({
      lembretes: lembretesAtualizados,
      filtrarPorFavoritos: this.state.filtrarPorFavoritos,
    });
  };

  aoAlternarFIltro = () => {
    this.setState({
      lembretes: this.state.lembretes,
      filtrarPorFavoritos: !this.state.filtrarPorFavoritos,
    });
  };

  aplicarFiltrosAtivos = () => {
    if (this.state.filtrarPorFavoritos)
      return this.state.lembretes.filter(lembrete => lembrete.ehFavorito);

    return this.state.lembretes;
  };

  render() {
    return (
      <main
        className="container my-5 p-3 p-lg-5 rounded-2"
        style={{ backgroundColor: '#ffffff' }}
      >
        <LembreteEntrada
          lembretes={this.state.lembretes}
          atualizarLembretes={this.atualizarLembretes}
        />
        <div className="d-flex justify-content-end my-3">
          <button
            onClick={this.aoAlternarFIltro}
            className="btn btn-dark px-4 py-2"
            style={{ width: 200 }}
          >
            {this.state.filtrarPorFavoritos ? 'Ver Todos' : 'Apenas favoritos'}
          </button>
        </div>
        <LembreteLista
          lembretes={this.aplicarFiltrosAtivos()}
          atualizarLembretes={this.atualizarLembretes}
        />
      </main>
    );
  }
}

export default App;
