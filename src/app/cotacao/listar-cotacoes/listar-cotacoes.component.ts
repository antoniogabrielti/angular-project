import { Component, OnInit } from '@angular/core';
import { Cotacao, CotacaoCliente } from '../models/cotacao';
import { CotacaoService } from '../services/cotacao.service';

@Component({
  selector: 'app-listar-cotacoes',
  templateUrl: './listar-cotacoes.component.html',
  styleUrls: ['./listar-cotacoes.component.css']
})
export class ListarCotacoesComponent implements OnInit {
  
  // cotacoes = this.cotacao;

  cotacaoCliente: CotacaoCliente[];
  errorMessage: string;

  constructor(private cotacaoService: CotacaoService) { }

  ngOnInit(): void {
    this.cotacaoService.obterCotacoesPorUsuario(localStorage.getItem('teste.user.userName'))
    .subscribe(
      teste => this.cotacaoCliente = teste,
      error => this.errorMessage);    
      
  //     this.cotacao =[   
  //       { 
  //         codProd: 11,
  //         descricao: "selo 2PL",
  //         quantidade: 200,
  //         preco: 2.50,
  //         total: 500,
  //     },
  //     {
  //         codProd: 12,
  //         descricao: "selo 2PL",
  //         quantidade: 200,
  //         preco: 2.50,
  //         total: 500,
  //     },
  //     {
  //         codProd: 13,
  //         descricao: "selo 2PL",
  //         quantidade: 200,
  //         preco: 2.50,
  //         total: 500,
  //     }
  //   ],

  //   [       
  //     { 
  //       codProd: 17,
  //       descricao: "selo 2PL",
  //       quantidade: 200,
  //       preco: 2.50,
  //       total: 500,
  //   },
  //   {
  //       codProd: 17,
  //       descricao: "selo 2PL",
  //       quantidade: 200,
  //       preco: 2.50,
  //       total: 500,
  //   },
  //   {
  //       codProd: 17,
  //       descricao: "selo 2PL",
  //       quantidade: 200,
  //       preco: 2.50,
  //       total: 500
  //   }
  //   ],
  //   [       
  //     { 
  //       codProd: 16,
  //       descricao: "selo 2PL",
  //       quantidade: 200,
  //       preco: 2.50,
  //       total: 500
  //   },
  //   {
  //       codProd: 15,
  //       descricao: "selo 2PL",
  //       quantidade: 200,
  //       preco: 2.50,
  //       total: 500
  //   },
  //   {
  //       codProd: 14,
  //       descricao: "selo 2PL",
  //       quantidade: 200,
  //       preco: 2.50,
  //       total: 500
  //   },
  //   ]   

  }
  

}
