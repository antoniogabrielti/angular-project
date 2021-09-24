import { Component } from "@angular/core";
import { User } from 'src/app/conta/models/usuario';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent{

    public isCollapsed: boolean;
    token: string = "";
    role: string = "";
    user: any;
    UserID: string = "";
    localStorageUtils = new LocalStorageUtils();
    usuario: User
    //Para deixar o menu responsivo
    constructor(private router: Router){
        this.isCollapsed = true;
    }

    ativarRotaVendedor(): boolean{

        this.token = this.localStorageUtils.obterTokenUsuario();
        this.user = this.localStorageUtils.obterUsuario();

        if(this.usuario.Role === 'vendedor' || this.usuario.Role === 'gerente' || this.usuario.Role === 'admin'){
            this.role = this.usuario.Role;

            return this.token !== null;
        }
    }

    ativarRotaCliente():boolean{
        this.token = this.localStorageUtils.obterTokenUsuario();
        this.user = this.localStorageUtils.obterUsuario();

        if(this.usuario.Role === 'cliente'){
            this.role = this.usuario.Role;

            return this.token !== null;
        }
    }

    usuarioLogado(): boolean {
        this.token = this.localStorageUtils.obterTokenUsuario();
        this.user = this.localStorageUtils.obterUsuario();
      
        if (this.user)
          this.UserID = this.user.userName;
      
        return this.token !== null;
      }

    logout() {
        this.localStorageUtils.limparDadosLocaisUsuario();
        this.router.navigate(['/home']);
      }
}





