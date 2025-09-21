import React from "react";
import LembreteEntrada from "./LembreteEntrada";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { lembretes: [], filtrarPorFavoritos: false };

  criarLembrete = (titulo) => {
    const novoLembrete = { titulo, ehFavorito: false };
    this.atualizarLembretes([...this.state.lembretes, novoLembrete]);
  };

  atualizarLembretes = (lembretesAtualizados) => {
    this.setState({
      lembretes: lembretesAtualizados,
      filtrarPorFavoritos: this.state.filtrarPorFavoritos,
    });
  };

  render() {
    return (
      <main className="container my-5">
        <div className="row">
          <LembreteEntrada criarLembrete={this.criarLembrete} />
        </div>
      </main>
    );
  }
}

export default App;
