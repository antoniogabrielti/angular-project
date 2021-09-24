import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Cotacao, CotacaoPendente, CotacaoCliente, AprovaCotacao } from '../models/cotacao';
import { Produto, ProdutoCotacao } from '../models/produtos';
import { CotacaoProduto } from '../models/cotacaoProduto';
import { Cliente } from 'src/app/conta/models/cliente';

import { tap } from 'rxjs/operators';
import { User } from 'src/app/conta/models/usuario';
import { Pedido } from 'src/app/pedido/models/pedido';

@Injectable()
export class CotacaoService extends BaseService {

    constructor(private http: HttpClient) { super() }

    //para armazenar os produtos que forem sendo selecionados na pagina de cotação
    itens = [];


    //adiciona um produto no array de itens
    adicionaNoCarrinho(produto){
        this.itens.push(produto);
        console.log(this.itens);
    }

    //pega os itens que os usuários adicionam ao carrinho e retorna cada item com sua quantidade associada
    getItens(){
        return this.itens;
    }

    //retorna um array vazio de itens
    limpaCarrinho(){
        this.itens = [];
        return this.itens;
    }

    //obtem produto pelo id
    obterPorId(produtoId: number): Observable<Produto> {
        return this.http
            .get<Produto>(this.UrlService + "Product/" + produtoId, super.ObterAuthHeaderJson())
            .pipe(
                tap(console.log),
                catchError(super.serviceError)
            )
    }

    //obtem cotacao pelo id
    obterCotacaoPorId(cotacaoId: number): Observable<AprovaCotacao> {
        return this.http
            .get<AprovaCotacao>(this.UrlService + "Quotation/" + cotacaoId, super.ObterAuthHeaderJson())
            .pipe(
                tap(console.log)
            )
            
    }

    //enviar a atualização de cotação
    UpdateCotacao(cotacaoId: number): Observable<AprovaCotacao> {
        return this.http
            .put<AprovaCotacao>(this.UrlService + "UpdateQuotation/" + cotacaoId, super.ObterAuthHeaderJson())
            .pipe(
                tap(console.log)
            )      
    }

    //Obter todos os produtos
    obterTodosProdutos(): Observable<Produto[]> {
        return this.http
            .get<Produto[]>(this.UrlService + "Product")
            // .pipe(
            //     tap(console.log)
    
            // )        
        }

    //Faz a requisição pro backend e tras as cotações do usuario pelo localstorage logado no browser
    obterCotacoesPorUsuario(userId: string): Observable<CotacaoCliente[]>{
        return this.http
            .post<CotacaoCliente[]>(this.UrlService + "Quotation/GetQuotationByCustomer", {userId: userId} )
            .pipe(
                tap(console.log)
            )
    }
    
    
       //tras todas as cotações ao vendedor
    obterTodasCotacoes(): Observable<CotacaoPendente[]> {
    return this.http
        .get<CotacaoPendente[]>(this.UrlService + "Quotation")
        .pipe(
            tap(console.log)

        )        
    }

    //Obter os produtos 
    obterProdutos():Observable<Produto[]>{
        return this.http
        .get<Produto[]>(this.UrlService + "GetProduct", super.ObterAuthHeaderJson())
        .pipe(catchError(super.serviceError));
    }

    //criaçao de cotações
    criarCotacao(produto: Produto): Observable<Produto> {
        return this.http
            .post(this.UrlService + "produtos", produto, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }
}
