import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-listagem',
  templateUrl: './aluno-listagem.component.html',
  styleUrls: ['./aluno-listagem.component.css']
})
export class AlunoListagemComponent implements OnInit {

  alunos: Array<any>;
  

  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.alunoService.listar().subscribe(response => this.alunos = response);
    console.log("estou no listar() dentro do aluno-listagem.component");
  }

  excluirAluno(alunoId) {
    if(window.confirm('Deseja realmente excluir esse aluno ?')) {
      this.alunoService.excluirAluno(alunoId).subscribe(response => {
        this.listar();
        this.router.navigate(['/alunos']), 
        console.log(response), 
        error => console.log(error)});
      } 
    }
}
