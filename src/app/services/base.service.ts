import { HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs';
import { LocalStorageUtils } from '../utils/localstorage';
import { environment } from 'src/environments/environment';


export abstract class BaseService {
    
    public LocalStorage = new LocalStorageUtils(); 
    
    //acesso a url do servidor
    protected UrlService: string = environment.apiUrl

    protected GetHeaderJson(){
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origens':'AllowSpecificOrigin',
                'Authorization': `Bearer ${this.LocalStorage.obterTokenUsuario()}`

            })
        };
    }

    //autenticação por meio do cabeçalho do token
    protected ObterAuthHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origens':'AllowSpecificOrigin',
                'Authorization': `Bearer ${this.LocalStorage.obterTokenUsuario()}`
            })
        };
    }

    //retorno do response data ou objeto vazio
    protected extractData(response: any){
        return response.data;

    }

    //Tratativa de erros do servidor
    protected serviceError(response: Response | any) {
        let customError: string[] = [];
        let customResponse = { error: { errors: [] }}

        if (response instanceof HttpErrorResponse) {

            if (response.statusText === "Unknown Error") {
                customError.push("Ocorreu um erro desconhecido");
                response.error.errors = customError;
            }
        }
        if (response.status === 500) {
            customError.push("Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.");
            
            // Erros do tipo 500 não possuem uma lista de erros
            // A lista de erros do HttpErrorResponse é readonly                
            customResponse.error.errors = customError;
            return throwError(customResponse);
        }

        console.error(response);
        return throwError(response);
    }


}