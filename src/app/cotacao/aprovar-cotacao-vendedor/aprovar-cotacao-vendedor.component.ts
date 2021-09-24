import { Component, OnInit } from '@angular/core';
import { Cotacao, AprovaCotacao } from '../models/cotacao';
import { Cliente } from 'src/app/conta/models/cliente';
import { FormBuilder, NgForm } from '@angular/forms';
import { CotacaoService } from '../services/cotacao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-aprovar-cotacao-vendedor',
  templateUrl: './aprovar-cotacao-vendedor.component.html',
  styleUrls: ['./aprovar-cotacao-vendedor.component.css']
})
export class AprovarCotacaoVendedorComponent implements OnInit {
  
  aprovaCotacao: AprovaCotacao;
  public id;
  respostaCot = {} as AprovaCotacao;

  constructor( private cotacaoService:CotacaoService, private route: ActivatedRoute) { 

    this.route.params.subscribe(params => this.id= params['id']);

  }


  ngOnInit(): void {
    this.cotacaoService.obterCotacaoPorId(this.id)
    .subscribe(
      teste => {this.aprovaCotacao = teste
      console.log(this.aprovaCotacao)
  });

  
  // respostaCotacao(form: NgForm) {
  //   if(this.aprovaCotacao)
  // }

}
}


 
