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

  render() {
    return (
      <main
        className="container my-5 p-3 p-lg-5 rounded-2"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="row mb-4">
          <LembreteEntrada
            lembretes={this.state.lembretes}
            atualizarLembretes={this.atualizarLembretes}
          />
        </div>
        <div className="row m-0">
          <LembreteLista
            lembretes={this.state.lembretes}
            atualizarLembretes={this.atualizarLembretes}
          />
        </div>
      </main>
    );
  }
}

export default App;
