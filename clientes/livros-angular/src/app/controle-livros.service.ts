import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = 'http://localhost:3030/livros';
export interface LivroMongo {
  _id: String | null;
  codEditora: number;
  titulo: String;
  resumo: String;
  autores: String[];
}

@Injectable({
  providedIn: 'root',
})
class ControleLivrosService {
  async obterLivros(): Promise<LivroMongo[]> {
    const response = await fetch(baseURL, {
      method: 'GET',
    });
    const livrosMongo: LivroMongo[] = await response.json();
    return livrosMongo;
  }

  async incluir(livro: Livro) {
    const livroMongo: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(livroMongo),
    });
    return response.ok;
  }

  async excluir(codigo: String) {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });
    return response.ok;
  }
}

export default ControleLivrosService;
