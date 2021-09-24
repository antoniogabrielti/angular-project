import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovaCotacoesComponent } from './aprova-cotacoes.component';

describe('AprovaCotacoesComponent', () => {
  let component: AprovaCotacoesComponent;
  let fixture: ComponentFixture<AprovaCotacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovaCotacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovaCotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
