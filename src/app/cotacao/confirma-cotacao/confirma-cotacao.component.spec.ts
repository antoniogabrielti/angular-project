import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaCotacaoComponent } from './confirma-cotacao.component';

describe('ConfirmaCotacaoComponent', () => {
  let component: ConfirmaCotacaoComponent;
  let fixture: ComponentFixture<ConfirmaCotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmaCotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
