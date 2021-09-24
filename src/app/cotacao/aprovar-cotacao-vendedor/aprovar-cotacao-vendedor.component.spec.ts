import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarCotacaoVendedorComponent } from './aprovar-cotacao-vendedor.component';

describe('AprovarCotacaoVendedorComponent', () => {
  let component: AprovarCotacaoVendedorComponent;
  let fixture: ComponentFixture<AprovarCotacaoVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovarCotacaoVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarCotacaoVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
