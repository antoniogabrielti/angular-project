import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Injectable()
//implementação do can activate pras permissões de rota dentro da cotação
export class CotacaoGuard implements CanActivate{

    localStorageUtils = new LocalStorageUtils();
    constructor(private router: Router){}

    canActivate(routeAC: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        if(!this.localStorageUtils.obterTokenUsuario()){
            this.router.navigate(['/conta/login']);
        }

        let user = this.localStorageUtils.obterUsuario();//pegando dados do usuario
        let claim: any = routeAC.data[0]; //pega o item 0 da coleção de dados la do data do aprovar cotacao

        if(claim !== undefined){ //verifica se tem dados
            let claim: any = routeAC.data[0]['claim'];

            if(claim){
                if(!user.claims){
                    this.acessoNegadoRedirecionar();
                }

                let userClaims = user.claims.find(x => x.type === claim.nome);

                if(!userClaims){
                    this.acessoNegadoRedirecionar();
                }

                let valuesClaim = userClaims.value as string; //foi pego as claims do usario e busca o valor trazido na claim tipo exibir ou aceitar cotacao
            
                if(valuesClaim.includes(claim.value)){ //verifica se dentro dos valores existe algum que deveria o usuario deveria ter acesso
                    this.acessoNegadoRedirecionar();
                }


            }
        } // pra verificar se obteve algum dado da rota
        return true;
    }

    acessoNegadoRedirecionar(){
        this.router.navigate(['/acesso-negado']);
    }
}