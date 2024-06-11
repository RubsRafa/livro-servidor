import React from "react";
import { Livro } from "../modelo/Livro";

const baseURL = 'http://localhost:3030/livros'

interface LivroMongo {
  _id: String | null;
  codEditora: number;
  titulo: String;
  resumo: String;
  autores: String[];
}

class ControleLivro extends React.Component {

  async obterLivros () {
    const response = await fetch(baseURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const livrosMongo: LivroMongo[] = await response.json();
    
    console.log('AAAAAAa', livrosMongo)
    return livrosMongo

  }
  
  async incluir (livro: Livro) {
    const livroMongo: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livroMongo)
    });

    return response.ok;

  }

  async excluir (codigo: number) {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.ok;

  }
}

export default ControleLivro