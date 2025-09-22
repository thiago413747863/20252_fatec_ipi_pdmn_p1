export const adicionarItem = (array, item) => {
  array[array.length] = item;
};

export const copiarLembretes = lembretes => {
  return lembretes.map(lembrete => ({
    titulo: lembrete.titulo,
    ehFavorito: lembrete.ehFavorito,
  }));
};

export const removerLembrete = (lembretes, lembreteEscolhido) => {
  const lembretesAtualizados = [];

  for (let i = 0; i < lembretes.length; i++) {
    if (lembretes[i] === lembreteEscolhido) continue;

    adicionarItem(lembretesAtualizados, lembretes[i]);
  }

  return lembretesAtualizados;
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
