import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
// import { Cliente } from 'src/app/cotacao/models/cliente';

@Component({
  selector: 'app-exibe-pedido',
  templateUrl: './exibe-pedido.component.html',
  styleUrls: ['./exibe-pedido.component.css']
})
export class ExibePedidoComponent implements OnInit {

  pedido: Pedido[];
  // cliente: Cliente[]
  constructor() { }

  ngOnInit(): void {
  //   this.pedido =[       
  //     { 
  //       codPedido: 11,
  //       descricao: "selo 2PL",
  //       quantidade: 200,
  //       preco: 2.50,
  //       total: 500
  //   },
  //   {
  //     codPedido: 12,
  //       descricao: "selo 2PL",
  //       quantidade: 200,
  //       preco: 2.50,
  //       total: 500
  //   },
  //   {
  //     codPedido: 13,
  //       descricao: "selo 2PL",
  //       quantidade: 200,
  //       preco: 2.50,
  //       total: 500
  //   }
  //   ],

  //   this.cliente = [
  //     {
  //         CodCli: 101,
  //         razaoSocial: "Brahma Corporation",
  //         endereco: "Rua Afonso Solano",
  //         CodCotacao: 1011102,
  //         status: "Pendente",
  //         dataProc: "10/02/2020",
  //     }
  //   ]
  }

}
