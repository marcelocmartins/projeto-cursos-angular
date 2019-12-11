import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoListagemComponent } from './aluno-listagem/aluno-listagem.component';
import { AlunoService } from './aluno.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenuCursosComponent } from './menu-cursos/menu-cursos.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { CadastroNovoAlunoComponent } from './cadastro-novo-aluno/cadastro-novo-aluno.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AlunoListagemComponent,
    MenuCursosComponent,
    TopBarComponent,
    HomeComponent,
    CadastroNovoAlunoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'alunos', component: AlunoListagemComponent},
      {path: 'alunos/cadastro', component: CadastroNovoAlunoComponent},
      {path: 'alunos/editar/:id', component: CadastroNovoAlunoComponent}
    ])
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
