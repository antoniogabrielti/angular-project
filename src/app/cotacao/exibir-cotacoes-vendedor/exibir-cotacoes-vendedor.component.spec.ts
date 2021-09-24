import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirCotacoesVendedorComponent } from './exibir-cotacoes-vendedor.component';

describe('ExibirCotacoesVendedorComponent', () => {
  let component: ExibirCotacoesVendedorComponent;
  let fixture: ComponentFixture<ExibirCotacoesVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirCotacoesVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirCotacoesVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
