import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ContaAppComponent } from './conta.app.component';
import { LoginComponent } from './login/login.component';
import { AtualizacaoCadastroComponent } from './atualizacao-cadastro/atualizacao-cadastro.component';
import { ContaGuard } from './services/conta.guard';
import { CadastroComponent } from './cadastro/cadastro.component';

//coleção de rotas redirecionando pro component principal e permite navegação pelas rotas filhas
const contaRouterConfig: Routes = [
    {
        path: '', component: ContaAppComponent,
        children: [
            { path: 'login', component: LoginComponent, canActivate: [] },
            { path: 'cadastro', component: CadastroComponent, canDeactivate: [ContaGuard] },
            { path: 'perfil', component: AtualizacaoCadastroComponent, canDeactivate: [ContaGuard]},
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    exports: [RouterModule]
})

export class ContaRoutingModule {}