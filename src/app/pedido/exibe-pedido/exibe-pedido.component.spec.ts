import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibePedidoComponent } from './exibe-pedido.component';

describe('ExibePedidoComponent', () => {
  let component: ExibePedidoComponent;
  let fixture: ComponentFixture<ExibePedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibePedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
