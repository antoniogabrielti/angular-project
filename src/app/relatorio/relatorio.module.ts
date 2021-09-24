import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ngx-custom-validators';
import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';

import {  BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { RelatorioDeProdutosComponent } from './relatorio-de-produtos/relatorio-de-produtos.component';
import { RelatorioRoutingModule } from './relatorio.route';
import { RelatorioService } from './services/relatorio.service';
import { RelatorioAppComponent } from './relatorio.app.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    RelatorioDeProdutosComponent,
    RelatorioAppComponent
    
  ],
  imports: [
    NgBrazil,
    TextMaskModule,
    CommonModule,
    RouterModule,
    FormsModule,
    RelatorioRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    RelatorioService
  ]
})
export class RelatorioModule { }
