import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Cotacao } from '../models/cotacao';
import { CotacaoService } from './cotacao.service';
import { CotacaoProduto } from '../models/cotacaoProduto';
import { Produto } from '../models/produtos';

@Injectable()
export class CotacaoResolve implements Resolve<Produto> {

    constructor(private cotacaoService: CotacaoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.cotacaoService.obterPorId(route.params['id']);
    }
}