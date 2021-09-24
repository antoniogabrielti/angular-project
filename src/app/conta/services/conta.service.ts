import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { BaseService } from 'src/app/services/base.service';

import { User } from '../models/usuario';
import { Cliente } from '../models/cliente';

@Injectable()
export class ContaService extends BaseService{
    constructor(private http: HttpClient){ super();}


    login(usuario: User): Observable<any> {
        let response = this.http
            .post(this.UrlService + '/User/Login', usuario, this.GetHeaderJson())
            // .pipe(
            //     map(this.extractData)
            //     catchError(this.serviceError));
            //     console.log(response);

        return response;
    }

    atualizarCliente(cliente: Cliente): Observable<any>{
        // let clienteFunciona = ['UserID: ',
        //  localStorage.getItem('teste.user.userName').replace('"','').replace('"', ''), 
        //  'Customer: ', cliente] ;
        // console.log(clienteFunciona);

        let clienteFunciona = new User();
        clienteFunciona.UserID = localStorage.getItem('teste.user.userName');
        clienteFunciona.Customer = cliente;

        let response = this.http
        .put(this.UrlService + 'User/Update', clienteFunciona , this.GetHeaderJson())
        //mapeamento do resultado
        // .pipe(
        //     map(this.extractData),
        //     catchError(this.serviceError)
        // );

        return response;
    }

    cadastrarUsuario(usuario: User): Observable<any>{

        let response = this.http
        .post(this.UrlService + 'User/Create', usuario, this.GetHeaderJson())
        //mapeamento do resultado
        .pipe(
            map(this.extractData),
            catchError(this.serviceError)
        );

        return response;
    }
}