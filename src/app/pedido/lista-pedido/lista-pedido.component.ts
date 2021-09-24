import { Component, OnInit } from '@angular/core';
import { Pedido, PedidosFaturados } from '../models/pedido';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {

  pedidos: PedidosFaturados[];
  errorMessage: string;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.obterTodasPedidos()
      .subscribe(
        pedidosFat => this.pedidos = pedidosFat,
        error => this.errorMessage);
  }
}
