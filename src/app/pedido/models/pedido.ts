import { Cotacao } from 'src/app/cotacao/models/cotacao';

export class Pedido{
    Id: number;
    Quotation: Cotacao;
    RequestDate: Date;
}


export class PedidosFaturados{
    id: number;
    companyName: string;
    date: Date;
}