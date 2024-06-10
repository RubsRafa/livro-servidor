import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import ControleEditoraService from './controle-editora.service';
import ControleLivrosService from './controle-livros.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'lista', component: LivroListaComponent },
      { path: 'dados', component: LivroDadosComponent },
      { path: '', redirectTo: '/lista', pathMatch: 'full' }
    ]),
    AppComponent,
    LivroListaComponent,
    LivroDadosComponent
  ],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: []
})
export class AppModule { }
