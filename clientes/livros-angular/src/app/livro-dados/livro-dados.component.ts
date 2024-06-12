import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import ControleEditoraService from '../controle-editora.service';
import ControleLivrosService from '../controle-livros.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css',
})
export class LivroDadosComponent implements OnInit {
  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  public livro: Livro = new Livro({
    codigo: '',
    titulo: '',
    resumo: '',
    codEditora: 1,
    autores: [],
  });
  public autoresForm: string = '';
  public editoras: Editora[] = [];

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.codEditora = Number(this.livro.codEditora);
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro).then(() => {
      this.router.navigateByUrl('/lista');
    });
  };
}
