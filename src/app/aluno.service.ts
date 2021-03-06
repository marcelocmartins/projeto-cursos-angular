import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  public listarAlunosUrl = '/alunos/lista';
  public listarTurmasUrl = '/turma/turmas';
  public salvarAlunoUrl = '/alunos/aluno';
  public excluirAlunoUrl = '/alunos/aluno/';
  public listarAlunoUnicoUrl = '/alunos/';
  public atualizarAlunoUrl = '/alunos/aluno';
  public exportarBoletimUrl = '/boletim/export/';
  public listarAlunoPorTurmaUrl = '/alunos/turma/';
  public aplicarNotaParaAlunoUrl = '/boletim/aplicar-nota';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${environment.urlApi + this.listarAlunosUrl}`);
  }

  excluirAluno(alunoId) {
    window.alert("O Aluno ID " + alunoId + " foi deletado com sucesso");
    return this.http.delete<any>(`${environment.urlApi + this.excluirAlunoUrl + alunoId}`);
  }

  salvarAluno(aluno) {
    return this.http.post<any>(`${environment.urlApi + this.salvarAlunoUrl}`, aluno);
  }

  listarAlunoUnico(alunoId) {
    return this.http.get(`${environment.urlApi}${this.listarAlunoUnicoUrl}${alunoId}`);
  }

  listarAlunoPorTurma(turmaId) {
    console.log('dentro do Service e listando os alunos da turma: ' + turmaId);
    return this.http.get<any>(`${environment.urlApi + this.listarAlunoPorTurmaUrl + turmaId}`)
  }

  atualizarAluno(aluno) {
    return this.http.put(`${environment.urlApi}${this.atualizarAlunoUrl}`, aluno);
  }

  exportarBoletim(alunoId) {
    window.open(`${environment.urlApi}${this.exportarBoletimUrl}${alunoId}`, '_blank');
  }

  aplicarNota(boletim) {
    return this.http.post<any>(`${environment.urlApi + this.aplicarNotaParaAlunoUrl}`, boletim);
  }
}
