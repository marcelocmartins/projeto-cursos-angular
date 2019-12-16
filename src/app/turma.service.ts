import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  public listarTurmasUrl = '/turma/turmas';
  public listarTurmaUnicaUrl = '/turma/'
  public exluirTurmaUrl = '/turma/';
  public atualizarTurmaUrl = '/turma/turma';
  public salvarTurmaUrl = '/turma/nova-turma';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${environment.urlApi + this.listarTurmasUrl}`);
  }

  salvarTurma(turma) {
    console.log(turma)
    return this.http.post<any>(`${environment.urlApi + this.salvarTurmaUrl}`, turma);
  }

  listarTurmaUnica(turmaId) {
    return this.http.get(`${environment.urlApi}${this.listarTurmaUnicaUrl}${turmaId}`);
  }

  excluirTurma(turmaId) {
    return this.http.delete<any>(`${environment.urlApi + this.exluirTurmaUrl + turmaId}`);
  }

  atualizarTurma(turma) {
    console.log('dentro do Service' + turma);
    return this.http.put(`${environment.urlApi}${this.atualizarTurmaUrl}`, turma);
  }

}
