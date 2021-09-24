import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Cliente } from 'src/app/conta/models/cliente';

import { tap } from 'rxjs/operators';
import { User } from 'src/app/conta/models/usuario';
import { Pedido } from 'src/app/pedido/models/pedido';

@Injectable()
export class RelatorioService extends BaseService {

    constructor(private http: HttpClient) { super() }


    //Faz a requisição pro backend e tras as cotações do usuario pelo localstorage logado no browser
    obterCotacoesPorUsuario(userId: string): Observable<[]>{
        return this.http
            .post<[]>(this.UrlService + "Quotation/GetQuotationByCustomer", {userId: userId} )
            .pipe(
                tap(console.log)
            )
    }
    

}
