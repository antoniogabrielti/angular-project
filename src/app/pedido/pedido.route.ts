import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PedidoAppComponent } from './pedido.app.component';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { ExibePedidoComponent } from './exibe-pedido/exibe-pedido.component';

//coleção de rotas redirecionando pro component principal e permite navegação pelas rotas filhas
const pedidoRouterConfig: Routes = [
    {
        path: '', component: PedidoAppComponent,
        children: [
            { path: 'lista-pedidos', component: ListaPedidoComponent, canActivate: [] },
            { path: 'pedido-detalhe', component: ExibePedidoComponent},


        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pedidoRouterConfig)
    ],
    exports: [RouterModule]
})

export class PedidoRoutingModule {}