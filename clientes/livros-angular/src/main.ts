import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LivroListaComponent } from './app/livro-lista/livro-lista.component';
import { LivroDadosComponent } from './app/livro-dados/livro-dados.component';
import ControleEditoraService from './app/controle-editora.service';
import ControleLivrosService from './app/controle-livros.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'lista', component: LivroListaComponent },
      { path: 'dados', component: LivroDadosComponent },
      { path: '', redirectTo: '/lista', pathMatch: 'full' },
    ]),
    ControleEditoraService,
    ControleLivrosService,
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
