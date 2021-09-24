import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, fromEvent, merge } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { MASKS, NgBrazilValidators } from 'ng-brazil';


import { ValidationMessages, GenericValidator, DisplayMessage } from 'src/app/utils/generic-from-validation';
import { Cliente } from '../models/cliente';
import { ContaService } from '../services/conta.service';
import { User } from '../models/usuario';

@Component({
  selector: 'app-atualizacao-cadastro',
  templateUrl: './atualizacao-cadastro.component.html',
  styleUrls: ['./atualizacao-cadastro.component.css']

})
export class AtualizacaoCadastroComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  public MASKS = MASKS;

  errors: any[] = [];
  clientForm: FormGroup;
  cliente: Cliente = new Cliente();
  usuario: User;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  formResult: string = '';

  mudancasNaoSalvas: boolean;

  constructor(private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private toastr: ToastrService) {

    this.validationMessages = {
      Cnpj: {
        required: 'Informe o CNPJ',
        cnpj: 'cnpj invalido'
      },
      CompanyName: {
        required: 'Informe a Razão Social',
      },
      TradingName: {
        required: 'Informe o Nome Fantasia',
      },
      Address: {
        required: 'Informe o Endereço',
      },
      Number: {
        required: 'Informe a Número',
      },
      City: {
        required: 'Informe a Cidade',
      },
      State: {
        required: 'Informe o Estado',
      },
      MunicipalRegister: {
        required: 'Informe o Registro Municipal',
      },
      StateRegister: {
        required: 'Informe o Registro Estadual',
      },
      Phone_1: {
        required: 'Informe um Número de telefone',
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {


    this.clientForm = this.fb.group({
      Cnpj: ['', [<any>Validators.required, NgBrazilValidators.cnpj]],
      CompanyName: ['', [Validators.required]],
      TradingName: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Number: ['', [Validators.required]],
      City: ['', [Validators.required]],
      State: ['', [Validators.required]],
      MunicipalRegister: ['', [Validators.required]],
      StateRegister: ['', [Validators.required]],
      Phone_1: ['', [Validators.required]],
      Phone_2: '',
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.clientForm);
      this.mudancasNaoSalvas = true;
    });
  }

   adicionarCliente() {
    if (this.clientForm.dirty && this.clientForm.valid) {
      this.cliente = Object.assign({}, this.cliente, this.clientForm.value);
      this.formResult = JSON.stringify(this.cliente);

      this.contaService.atualizarCliente(this.cliente)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.clientForm.reset();
    this.errors = [];

    let toast = this.toastr.success('Dados atualizados com sucesso!', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}