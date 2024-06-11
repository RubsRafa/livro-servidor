import ControleEditora from "../classes/controle/ControleEditora";
import { LivroMongo } from "../classes/controle/ControleLivros";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: LivroMongo;
  excluir: (codigo: String) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }: LinhaLivroProps) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora)
  return (
    <>
      <tr>
        <td>
          <h6>{livro.titulo}</h6>
          <button className="btn btn-danger" onClick={() => excluir(livro._id ? livro._id : '')}>Excluir</button>

        </td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <ul>
            {livro.autores.map((autor, idx) => <li key={idx}>{autor}</li>)}
          </ul>
        </td>

      </tr>
    </>
  )
}