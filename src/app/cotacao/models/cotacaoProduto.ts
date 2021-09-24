import { Cotacao } from './cotacao';
import { Produto } from './produtos';

export class CotacaoProduto{
    QuotationId: number;
    Quotation: Cotacao;
    ProductId: number;
    Product: Produto;
    Qty: number;
    UnitValue: number;
}