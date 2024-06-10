import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
class ControleLivrosService {
  livros: Array<Livro> = [
    new Livro({
      codigo: 1001,
      codEditora: 1,
      titulo: 'Use a Cabeça: Java',
      resumo:
        'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.',
      autores: ['Bert Bates', 'Kathy Sierra'],
    }),
    new Livro({
      codigo: 1002,
      codEditora: 2,
      titulo: 'Java, como Programar',
      resumo:
        'Milhoes de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
      autores: ['Paul Deitel', 'Harvey Deitel'],
    }),
    new Livro({
      codigo: 1003,
      codEditora: 3,
      titulo: 'Core Java for the Impatient',
      resumo:
        "Readers familiar with Horstmann's original, two-volume 'Core Java' books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how there new features impact the language and core libraries.",
      autores: ['Cay Horstmann'],
    }),
  ];

  obterLivros() {
    return this.livros;
  }

  incluir(livro: Livro) {
    const codigos: number[] = this.livros.map((liv) => liv.codigo);
    const novoCodigo = (codigos.length > 0 ? Math.max(...codigos) : 0) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
    console.log(this.livros);
  }

  excluir(codigo: number) {
    const index = this.livros.map((livro) => livro.codigo).indexOf(codigo);
    this.livros.splice(typeof index !== 'number' ? 0 : index, 1);
  }
}

export default ControleLivrosService;
