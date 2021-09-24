import { Component, OnInit } from '@angular/core';
import { CotacaoService } from '../services/cotacao.service';
import { Cotacao, CotacaoPendente } from '../models/cotacao';

@Component({
  selector: 'app-exibir-cotacoes-vendedor',
  templateUrl: './exibir-cotacoes-vendedor.component.html',
  styleUrls: ['./exibir-cotacoes-vendedor.component.css'],
})
export class ExibirCotacoesVendedorComponent implements OnInit {

  cotacoes: CotacaoPendente[];

  constructor(private cotacaoService: CotacaoService) { }

  ngOnInit(): void {
    this.cotacaoService.obterTodasCotacoes()
    .subscribe(res => {this.cotacoes = res;
      console.log(this.cotacoes);
    });

  }
  

}
