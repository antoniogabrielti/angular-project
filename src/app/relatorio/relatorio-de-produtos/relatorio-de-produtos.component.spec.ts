import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDeProdutosComponent } from './relatorio-de-produtos.component';

describe('RelatorioDeProdutosComponent', () => {
  let component: RelatorioDeProdutosComponent;
  let fixture: ComponentFixture<RelatorioDeProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioDeProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioDeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
