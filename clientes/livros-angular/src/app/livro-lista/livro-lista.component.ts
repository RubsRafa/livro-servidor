import { Component, OnInit } from '@angular/core';
import ControleEditoraService from '../controle-editora.service';
import ControleLivrosService, { LivroMongo } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css',
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<LivroMongo> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.servLivros.obterLivros().then((livros) => {
      this.livros = livros;
    })
  }

  excluir = (codigo: String): void => {
    this.servLivros.excluir(codigo)
    .then(() => {
      this.servLivros.obterLivros().then((livros) => {
        this.livros = livros;
      })
    })
  };

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
