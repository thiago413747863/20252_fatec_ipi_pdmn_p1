import { dadosFicticios } from "./dados";

const LembreteLista = props => {
  return (
    <ul className="p-0">
      {props.lembretes.length > 0 ? (
        props.lembretes.map(lembrete => (
          <li className="d-flex justify-content-between align-items-center border p-2 mt-2 rounded-1">
            <div className="text-center flex-grow-1">{lembrete.titulo}</div>
          </li>
        ))
      ) : (
        <p className="text-center">
          Sem lembretes! Adicione o seu lembrete abaixo
        </p>
      )}
    </ul>
  );
};

export default LembreteLista;
