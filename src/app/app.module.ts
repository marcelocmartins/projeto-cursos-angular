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
import { TurmaListagemComponent } from './turma-listagem/turma-listagem.component';
import { TurmaService } from './turma.service';
import { CadastroNovaTurmaComponent } from './cadastro-nova-turma/cadastro-nova-turma.component';
import { ProfessorService } from './professor.service';

@NgModule({
  declarations: [
    AppComponent,
    AlunoListagemComponent,
    MenuCursosComponent,
    TopBarComponent,
    HomeComponent,
    CadastroNovoAlunoComponent,
    TurmaListagemComponent,
    CadastroNovaTurmaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      // ALUNOS
      {path: '', component: HomeComponent},
      {path: 'alunos', component: AlunoListagemComponent},
      {path: 'alunos/cadastro', component: CadastroNovoAlunoComponent},
      {path: 'alunos/editar/:id', component: CadastroNovoAlunoComponent},
      
      // TURMAS
      {path: 'turmas', component: TurmaListagemComponent},
      {path: 'turmas/cadastro', component: CadastroNovaTurmaComponent},
      {path: 'turmas/editar/:id', component: CadastroNovaTurmaComponent}
    ])
  ],
  providers: [
    AlunoService,
    TurmaService, 
    ProfessorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
