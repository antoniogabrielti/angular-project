import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCotacoesComponent } from './listar-cotacoes.component';

describe('ListarCotacoesComponent', () => {
  let component: ListarCotacoesComponent;
  let fixture: ComponentFixture<ListarCotacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCotacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
