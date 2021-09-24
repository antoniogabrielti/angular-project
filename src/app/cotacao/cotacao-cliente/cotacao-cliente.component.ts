import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { Cotacao } from '../models/cotacao';
import { CotacaoService } from '../services/cotacao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Produto } from '../models/produtos';
import { FormControlName, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { MASKS } from 'ng-brazil';
import { ValidationMessages, GenericValidator, DisplayMessage } from 'src/app/utils/generic-from-validation';
import { CotacaoProduto } from '../models/cotacaoProduto';
import { FormBaseComponent } from 'src/app/base-component/base-component.component';

@Component({
  selector: 'app-cotacao-cliente',
  templateUrl: './cotacao-cliente.component.html',
  styleUrls: ['./cotacao-cliente.component.css']
})
export class CotacaoClienteComponent implements OnInit {

  
  
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  public MASKS = MASKS;

  produtos: Produto[];



  
  constructor(private cotacaoService: CotacaoService,
     private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private fb: FormBuilder) {}

  ngOnInit(): void {

    this.cotacaoService.obterTodosProdutos()
    .subscribe(res => {this.produtos = res;
      console.log(this.produtos);
    });
    
  }

  
}
