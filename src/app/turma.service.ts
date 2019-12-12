import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  public listarTurmasUrl = '/turma/turmas';
  public exluirTurmaUrl = '/turma/';
  public atualizarTurmaUrl = '';
  public salvarTurmaUrl = '/turma/nova-turma';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${environment.urlApi + this.listarTurmasUrl}`);
  }

  salvarTurma(turma) {
    return this.http.post<any>(`${environment.urlApi + this.salvarTurmaUrl}`, turma);
  }

  excluirTurma(turmaId) {
    return this.http.delete<any>(`${environment.urlApi + this.exluirTurmaUrl + turmaId}`);
  }

  atualizarTurma(turma) {
    console.log('dentro do Service' + turma);
    return this.http.put(`${environment.urlApi}${this.atualizarTurmaUrl}`, turma);
  }

}
