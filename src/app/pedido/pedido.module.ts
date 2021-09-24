import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ngx-custom-validators';
import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';
import { ExibePedidoComponent } from './exibe-pedido/exibe-pedido.component';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { PedidoRoutingModule } from './pedido.route';
import { PedidoAppComponent } from './pedido.app.component';
import { PedidoService } from './services/pedido.service';

@NgModule({
  declarations: [
    ExibePedidoComponent,
    ListaPedidoComponent,
    PedidoAppComponent
  ],
  imports: [
    NgBrazil,
    TextMaskModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
    PedidoRoutingModule
  ],
  providers: [
    PedidoService
  ]
})
export class PedidoModule { }
