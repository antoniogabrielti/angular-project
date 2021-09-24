import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CotacaoAppComponent } from './cotacao.app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ngx-custom-validators';
import { CotacaoRoutingModule } from './cotacao.route';
import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';
import { ListarCotacoesComponent } from './listar-cotacoes/listar-cotacoes.component';
import { AprovarCotacaoVendedorComponent } from './aprovar-cotacao-vendedor/aprovar-cotacao-vendedor.component';
import { ExibirCotacoesVendedorComponent } from './exibir-cotacoes-vendedor/exibir-cotacoes-vendedor.component';

import { registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CotacaoService } from './services/cotacao.service';
import { CotacaoResolve } from './services/cotacao.resolve';
import { CotacaoClienteComponent } from './cotacao-cliente/cotacao-cliente.component';
import { DetalhesDoProdutoComponent } from './detalhes-do-produto/detalhes-do-produto.component';
import { ConfirmaCotacaoComponent } from './confirma-cotacao/confirma-cotacao.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    CotacaoAppComponent,
    ListarCotacoesComponent,
    AprovarCotacaoVendedorComponent,
    ExibirCotacoesVendedorComponent,
    CotacaoClienteComponent,
    DetalhesDoProdutoComponent,
    ConfirmaCotacaoComponent
    
  ],
  imports: [
    NgBrazil,
    TextMaskModule,
    CommonModule,
    RouterModule,
    FormsModule,
    CotacaoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    CotacaoService,
    CotacaoResolve
  ]
})
export class CotacaoModule { }
