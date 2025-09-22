import { favoritarLembrete, removerLembrete } from './utils';

const LembreteLista = props => {
  function aoRemover(lembreteEscolhido) {
    const lembretesAtualizados = removerLembrete(
      props.lembretes,
      lembreteEscolhido
    );

    props.atualizarLembretes(lembretesAtualizados);
  }

  function aoFavoritar(lembreteEscolhido) {
    const lembretesAtualizados = favoritarLembrete(
      props.lembretes,
      lembreteEscolhido
    );
    props.atualizarLembretes(lembretesAtualizados);
  }

  return (
    <ul className="p-3 m-0 rounded-2" style={{ backgroundColor: '#f8fafc' }}>
      {props.lembretes.length > 0 ? (
        props.lembretes.map(lembrete => (
          <li
            className="d-flex justify-content-between align-items-center p-2 my-3 rounded-2"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="text-center flex-grow-1">{lembrete.titulo}</div>
            <div className="d-flex">
              <button
                className={`btn ${
                  lembrete.ehFavorito ? 'btn-warning' : 'btn-secondary'
                }`}
                onClick={() => aoFavoritar(lembrete)}
                aria-label={!lembrete.ehFavorito ? 'Favoritar' : 'Desfavoritar'}
              >
                {!lembrete.ehFavorito ? (
                  <i className="fa-regular fa-star"></i>
                ) : (
                  <i className="fa-solid fa-star"></i>
                )}
              </button>
              <button
                className="btn btn-danger ms-2"
                onClick={() => aoRemover(lembrete)}
                aria-label="Excluir"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))
      ) : (
        <p
          className="text-center py-4 m-0"
          style={{ backgroundColor: '#ffffff' }}
        >
          Sem lembretes! Adicione um novo lembrete
        </p>
      )}
    </ul>
  );
};

export default LembreteLista;
