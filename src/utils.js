export const copiarLembretes = lembretes => {
  const copiaLembretes = [];
  for (let i = 0; i < lembretes.length; i++) copiaLembretes.push(lembretes[i]);

  return copiaLembretes;
};

export const favoritarLembrete = (lembretes, lembreteEscolhido) => {
  const lembretesAtualizados = lembretes.map(lembrete => {
    if (lembrete !== lembreteEscolhido) return lembrete;

    return {
      titulo: lembrete.titulo,
      ehFavorito: !lembreteEscolhido.ehFavorito,
    };
  });

  return lembretesAtualizados;
};

///////////////////////////////////////////////////////////////
// IMPLEMENTAÇÕES ADICIONAIS

export const adicionarItem = (array, item) => {
  array[array.length] = item;
};

export const removerLembrete = (lembretes, lembreteEscolhido) => {
  const lembretesAtualizados = [];

  for (let i = 0; i < lembretes.length; i++) {
    if (lembretes[i] === lembreteEscolhido) continue;

    adicionarItem(lembretesAtualizados, lembretes[i]);
  }

  return lembretesAtualizados;
};

export const filtrarFavoritos = lembretes => {
  const lembretesFiltrados = [];

  for (let i = 0; i < lembretes.length; i++) {
    if (!lembretes[i].ehFavorito) continue;

    adicionarItem(lembretesFiltrados, lembretes[i]);
  }

  return lembretesFiltrados;
};
