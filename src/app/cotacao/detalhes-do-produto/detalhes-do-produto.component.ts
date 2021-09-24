import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CotacaoService } from '../services/cotacao.service';
import { Produto } from '../models/produtos';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detalhes-do-produto',
  templateUrl: './detalhes-do-produto.component.html',
  styleUrls: ['./detalhes-do-produto.component.css']
})
export class DetalhesDoProdutoComponent implements OnInit {

  produto: Produto;
  public id;
  errorMessage: string;

  addCarrinho(produto) {

    this.cotacaoService.adicionaNoCarrinho(produto);
    window.alert('Seu produto foi adicionar ao carrinho');
    // console.log(produto);
  }

  constructor( private cotacaoService:CotacaoService, private route: ActivatedRoute) { 

    this.route.params.subscribe(params => this.id= params['id']);

  }


  ngOnInit(): void {
    this.cotacaoService.obterPorId(this.id)
    .subscribe(
      teste => {this.produto = teste
  });

  }
}   
