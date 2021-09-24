import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RelatorioAppComponent } from './relatorio.app.component';
import { RelatorioDeProdutosComponent } from './relatorio-de-produtos/relatorio-de-produtos.component';


//coleção de rotas redirecionando pro component principal e permite navegação pelas rotas filhas
const relatorioRouterConfig: Routes = [
    {
        path: '', component: RelatorioAppComponent,
        children: [
            { path: 'relatorio-de-produtos-mais-vendidos', component: RelatorioDeProdutosComponent, canActivate: [],
            // resolve: {
            //     cotacao: CotacaoResolve
            // }
         },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(relatorioRouterConfig)
    ],
    exports: [RouterModule]
})

export class RelatorioRoutingModule {}