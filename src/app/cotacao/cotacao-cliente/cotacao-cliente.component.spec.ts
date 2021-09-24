import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoClienteComponent } from './cotacao-cliente.component';

describe('CotacaoClienteComponent', () => {
  let component: CotacaoClienteComponent;
  let fixture: ComponentFixture<CotacaoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotacaoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotacaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
