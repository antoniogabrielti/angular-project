import { Component, OnInit } from '@angular/core';
import { CotacaoService } from '../services/cotacao.service';

@Component({
  selector: 'app-confirma-cotacao',
  templateUrl: './confirma-cotacao.component.html',
  styleUrls: ['./confirma-cotacao.component.css']
})
export class ConfirmaCotacaoComponent implements OnInit {

  itens;

  constructor( private cotacaoService: CotacaoService) { }

  ngOnInit(): void {
    this.itens = this.cotacaoService.getItens();
    console.log(this.itens);

  }

}
