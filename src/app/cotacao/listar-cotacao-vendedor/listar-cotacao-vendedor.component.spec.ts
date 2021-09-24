import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCotacaoVendedorComponent } from './listar-cotacao-vendedor.component';

describe('ListarCotacaoVendedorComponent', () => {
  let component: ListarCotacaoVendedorComponent;
  let fixture: ComponentFixture<ListarCotacaoVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCotacaoVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCotacaoVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
