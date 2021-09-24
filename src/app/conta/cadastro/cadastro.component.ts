import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, AbstractControl, FormControl, CheckboxRequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, fromEvent, merge } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { MASKS, NgBrazilValidators } from 'ng-brazil';


import { ValidationMessages, GenericValidator, DisplayMessage } from 'src/app/utils/generic-from-validation';
import { Cliente } from '../models/cliente';
import { ContaService } from '../services/conta.service';
import { User } from '../models/usuario';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  public MASKS = MASKS;

  errors: any[] = [];
  cadastroForm: FormGroup;
  // customerForm: FormGroup;
  usuario: User = new User();
  cliente: Cliente[];

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
      UserID: {
        required: 'Informe um nome de usuário',
      },
      Password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir mais de 6 caracteres, tendo maisculos e especiais'
      },
      Email: {
        required: 'Insira um e-mail',
        email: 'E-mail Inválido'
      },
      Cnpj: {
        required: 'Informe o CNPJ',
        cnpj: 'cnpj invalido'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
     //validação das senhas
     let password = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    //  let confirmPassword = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(password)]);
   
    this.cadastroForm = this.fb.group({
       UserID: ['',[Validators.required]],
       Password: password,
      //  confirmPassword: confirmPassword,
       Email:['', [Validators.required, Validators.email]],
       Role: ['', [Validators.required]],


     Customer: this.fb.group({
      Cnpj: ['', [<any>Validators.required, NgBrazilValidators.cnpj]],
     })
    });
    
     this.cadastroForm.patchValue( {Role: 'CUSTOMER'});
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
      this.mudancasNaoSalvas = true;
    });
  }

  // validarFormulario() {
  //   this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
  //   this.mudancasNaoSalvas = true;
  // }

   adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.usuario);

      this.contaService.cadastrarUsuario(this.usuario)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.cadastroForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    this.mudancasNaoSalvas = false;

    let toast = this.toastr.success('Usuário cadastrado com sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!');
    this.router.navigate(['/conta/cadastro']);

    console.log(this.usuario.Role);

  }

}