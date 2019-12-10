import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { AlunoService } from '../aluno.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-novo-aluno',
  templateUrl: './cadastro-novo-aluno.component.html',
  styleUrls: ['./cadastro-novo-aluno.component.css']
})
export class CadastroNovoAlunoComponent implements OnInit {

  turmas: Array<any>;
  salvarAlunoForm;

  public aluno = {
    nome: "",
    cpf: "",
    idade: null,
    turmaDTO: null
  };

 constructor(private turmaService: TurmaService, private alunoService: AlunoService, private formBuilder: FormBuilder, private router: Router) { 
      
  }

  ngOnInit() {

    let cpfRegex = '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})';

    this.salvarAlunoForm = new FormGroup({
      nome: new FormControl(this.aluno.nome, [Validators.required, Validators.minLength(4), Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')]),
      cpf: new FormControl(this.aluno.cpf, [Validators.required, Validators.pattern(cpfRegex)]),
      idade: new FormControl(this.aluno.idade, [Validators.required, Validators.min(5), Validators.max(100)]),
      turmaDTO: new FormControl(this.aluno.turmaDTO, Validators.required)
    })  

    this.listarTurma();
  }

  get nome() {
    return this.salvarAlunoForm.get("nome");
  }

  get cpf() {
    return this.salvarAlunoForm.get("cpf");
  }

  get idade() {
    return this.salvarAlunoForm.get("idade");
  }

  get turmaDTO() {
    return this.salvarAlunoForm.get("turmaDTO");
  }

  listarTurma() {
    this.turmaService.listar().subscribe(response => this.turmas = response);
  }

  onSubmit() {
  
    let aluno = this.salvarAlunoForm.value;
    this.alunoService.salvarAluno(aluno).subscribe(response => { 
      this.alunoService.listar();
      this.router.navigate(['/alunos']),
      console.log(response), 
      error => console.log(error)});
      
    console.log("salvando o aluno: ", aluno);
    window.alert("O aluno foi salvo com sucesso");
  } 
}
