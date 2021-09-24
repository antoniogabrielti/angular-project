import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoCadastroComponent } from './atualizacao-cadastro.component';

describe('AtualizacaoCadastroComponent', () => {
  let component: AtualizacaoCadastroComponent;
  let fixture: ComponentFixture<AtualizacaoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizacaoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
