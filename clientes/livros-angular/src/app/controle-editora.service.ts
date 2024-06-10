import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
class ControleEditoraService {
  private editoras: Array<Editora> = [
    new Editora({ codEditora: 1, nome: 'Alta Books' }),
    new Editora({ codEditora: 2, nome: 'Pearson' }),
    new Editora({ codEditora: 3, nome: 'Addison Wesley' }),
  ];

  getNomeEditora(codEditora: number) {
    const editora = this.editoras.filter(
      (editora) => editora.codEditora === codEditora
    );
    return editora.length > 0 ? editora[0].nome : undefined;
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }
}

export default ControleEditoraService;
