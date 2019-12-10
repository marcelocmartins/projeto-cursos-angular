import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNovoAlunoComponent } from './cadastro-novo-aluno.component';

describe('CadastroNovoAlunoComponent', () => {
  let component: CadastroNovoAlunoComponent;
  let fixture: ComponentFixture<CadastroNovoAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroNovoAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNovoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
