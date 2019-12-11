import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { AlunoService } from '../aluno.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-novo-aluno',
  templateUrl: './cadastro-novo-aluno.component.html',
  styleUrls: ['./cadastro-novo-aluno.component.css']
})
export class CadastroNovoAlunoComponent implements OnInit {

  turmas: Array<any>;
  salvarAlunoForm;
  alunoId;
  alunoDTO;

  public aluno = {
    id: this.alunoId,
    nome: "",
    cpf: "",
    idade: null,
    turmaDTO: null
  };

  constructor(private turmaService: TurmaService, private alunoService: AlunoService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {


    this.activatedRoute.params
      .subscribe(
        _response => {
          if (_response['id']) {
            this.alunoId = _response['id'];
          }
        }
      );
  }

  ngOnInit() {

    this.iniciaForm();

    this.listarTurma();

    if (this.alunoId) {
      this.listarAlunoUnico();
    }
  }

  get id() {
    return this.salvarAlunoForm.get("id");
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



  listarAlunoUnico() {
    this.alunoService.listarAlunoUnico(this.alunoId).subscribe(response => {
      this.salvarAlunoForm.patchValue({
        id: response['id'],
        nome: response['nome'],
        cpf: response['cpf'],
        idade: response['idade'],
        turmaDTO: response['idTurma']
      })
      console.log(response, 'estou dentro do patchValue'),
        error => console.log(error)
    });
  }



  private iniciaForm() {
    let cpfRegex = '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})';

    this.salvarAlunoForm = new FormGroup({
      id: new FormControl(this.aluno.id),
      nome: new FormControl(this.aluno.nome, [Validators.required, Validators.minLength(4), Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')]),
      cpf: new FormControl(this.aluno.cpf, [Validators.required, Validators.pattern(cpfRegex)]),
      idade: new FormControl(this.aluno.idade, [Validators.required, Validators.min(5), Validators.max(100)]),
      turmaDTO: new FormControl(this.aluno.turmaDTO, Validators.required)
    })
  }



  onSubmit() {

    // Atualiza o aluno caso tenha alunoId setado
    if (this.alunoId) {
      let aluno = this.salvarAlunoForm.value;
      

      this.alunoService.atualizarAluno(aluno).subscribe(response => {
        this.alunoService.listar();
        this.router.navigate(['/alunos']),
          console.log(response),
          error => console.log(error)
      });

      console.log("dentro do componente: ", aluno, this.alunoId);
      window.alert("O aluno foi atualizado com sucesso");
    }

    // Cria um novo aluno
    else {
      let aluno = this.salvarAlunoForm.value;
      this.alunoService.salvarAluno(aluno).subscribe(response => {
        this.alunoService.listar();
        this.router.navigate(['/alunos']),
          console.log(response),
          error => console.log(error)
      });

      console.log("salvando o aluno: ", aluno);
      window.alert("O aluno foi salvo com sucesso");
    }
  }
}