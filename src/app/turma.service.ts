import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  public listarAlunosUrl = '/alunos/lista';
  public listarTurmasUrl = '/turma/turmas';
  // public listarProfessoresUrl = '';
  // public listarMateriasUrl = '';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${environment.urlApi + this.listarTurmasUrl}`);
  }

  excluirAluno(alunoId) {
    // return this.http.delete(alunoId);
    window.alert("Deletando aluno Id " + alunoId);
  }

}
