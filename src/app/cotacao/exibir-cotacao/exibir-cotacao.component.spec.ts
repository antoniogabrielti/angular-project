import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirCotacaoComponent } from './exibir-cotacao.component';

describe('ExibirCotacaoComponent', () => {
  let component: ExibirCotacaoComponent;
  let fixture: ComponentFixture<ExibirCotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirCotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
