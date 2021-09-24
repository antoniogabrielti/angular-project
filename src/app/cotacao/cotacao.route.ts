import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CotacaoAppComponent } from './cotacao.app.component';
import { ListarCotacoesComponent } from './listar-cotacoes/listar-cotacoes.component';
import { AprovarCotacaoVendedorComponent } from './aprovar-cotacao-vendedor/aprovar-cotacao-vendedor.component';
import { ExibirCotacoesVendedorComponent } from './exibir-cotacoes-vendedor/exibir-cotacoes-vendedor.component';
import { CotacaoResolve } from './services/cotacao.resolve';
import { CotacaoGuard } from './services/cotacao.guard';
import { CotacaoClienteComponent } from './cotacao-cliente/cotacao-cliente.component';
import { DetalhesDoProdutoComponent } from './detalhes-do-produto/detalhes-do-produto.component';
import { ConfirmaCotacaoComponent } from './confirma-cotacao/confirma-cotacao.component';

//coleção de rotas redirecionando pro component principal e permite navegação pelas rotas filhas
const cotacaoRouterConfig: Routes = [
    {
        path: '', component: CotacaoAppComponent,
        children: [
            { path: 'cotacar-selos', component: CotacaoClienteComponent},
            { path: 'produto/:id', component: DetalhesDoProdutoComponent},
            { path: 'minhas-cotacoes', component: ListarCotacoesComponent},
            { path: 'detalhes/:id', component: DetalhesDoProdutoComponent,
            resolve: {
                    cotacao: CotacaoResolve
                }
            },
            {
                path: 'carrinho', component: ConfirmaCotacaoComponent
            },
            { path: 'lista-de-cotacoes', component: ExibirCotacoesVendedorComponent,
            //   canActivate: [CotacaoGuard],
            //   data: [{claim: {nome: 'Cotacao', value: 'ExibirCotacoes'}}] 
             },
             {
                path: 'cotacao-pendente/:id', component: AprovarCotacaoVendedorComponent
             }

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(cotacaoRouterConfig)
    ],
    exports: [RouterModule]
})

export class CotacaoRoutingModule {}