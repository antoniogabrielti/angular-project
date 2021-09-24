import { Injectable } from "@angular/core";
import { CanDeactivate, CanActivate, Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { AtualizacaoCadastroComponent } from '../atualizacao-cadastro/atualizacao-cadastro.component';



@Injectable()
export class ContaGuard implements CanDeactivate<AtualizacaoCadastroComponent>, CanActivate{


    localStorageUtils = new LocalStorageUtils();

    constructor(private router: Router){}
    //metodo vai descobrir se eu ja alterei o estado do meu component e vai sugerir se eu quero abandonar o preenchimento do component
    canDeactivate(component: AtualizacaoCadastroComponent){
        if(component.mudancasNaoSalvas){
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');
        }

        return true
    }

    //verifica se tem usuario guardado no localstorage
    canActivate(){
        //ele vai navegar pra home caso o usuario esteja logado
        if(this.localStorageUtils.obterTokenUsuario()){
            this.router.navigate(['/home']);
        }

        //caso nao esteja ele entrará na rota
        return true;
    }

}