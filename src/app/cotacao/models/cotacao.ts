import { Cliente } from 'src/app/conta/models/cliente';
import { User } from 'src/app/conta/models/usuario';
import { DatePipe } from '@angular/common';
import { CotacaoProduto } from './cotacaoProduto';
import { Produto, ProdutoCotacao } from './produtos';

export class Cotacao{
    Id: number;
    Customer: Cliente;
    User: User;
    Status: boolean;
    IsRefused: boolean;
    QuotaDate: DatePipe;
    TotalValue: number;
    QuotationProducts: CotacaoProduto[];
    
}

export class AprovaCotacao{
  id: number;
  idCli: number;
  companyName: string;
  address: string;
  status: boolean;
  isRefused: boolean;
  quotaDate: Date;
  idProd: number;
  description: string;
  qty: number;
  unitValue: number;
  totalValue: number;
}


export interface CotacaoPendente{
    Id: number;
    CompanyName: string;
    Status: boolean;
  
  }

  export class CotacaoCliente{
      id: number;
      isRefused: boolean;
      quotationDate: string;
      status: boolean;
      Products: ProdutoCotacao[];

      get statusPedido():string{
        return status ? "Cancelado" : "pendente";
      }
    }

