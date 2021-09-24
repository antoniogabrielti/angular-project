import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Pedido, PedidosFaturados } from '../models/pedido';



@Injectable()
export class PedidoService extends BaseService {

    constructor(private http: HttpClient) { super() }

    //tras todos os pedidos ao vendedor
    obterTodasPedidos(): Observable<PedidosFaturados[]> {
        return this.http
            .get<PedidosFaturados[]>(this.UrlService + "Request")
            .pipe(
                tap(console.log),
    
            )        
        }
}
