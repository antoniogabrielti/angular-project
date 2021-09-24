import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { User } from '../models/usuario';
import { ContaService } from '../services/conta.service';
import { ValidationMessages, GenericValidator, DisplayMessage } from 'src/app/utils/generic-from-validation';
import { CustomValidators } from 'ngx-custom-validators';
import { Observable, fromEvent, merge } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //pega todos os dados do DOM e vai trazer todas as referencias dos elementos do form control
  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

    //coleção generica de erros vindo do servidor
  errors: any[] = [];
  loginForm: FormGroup;
  user: User;
  
  returnUrl: string;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  mostrarMenu: boolean = false;

  constructor(private fb: FormBuilder,
              private contaService: ContaService,
              private router: Router,
              private toastr: ToastrService) {

                this.validationMessages = {
                  UserID:{
                    required: 'Testando'
                  },
                  Password: {
                    required: 'Informe a senha',
                    rangeLength: 'A senha deve possuir entre 6 a 15 caracteres'
                  }
                };

                this.genericValidator = new GenericValidator(this.validationMessages);

  }

  ngOnInit(): void {

    //vai ser transformado em um form group
    this.loginForm = this.fb.group({
      UserID: ['', [Validators.required]],
      Password: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]]
    });

  }

  //valida o evento de tirar o foco
  ngAfterViewInit(): void{
      let controlBlurs: Observable<any>[] = this.formInputElements //observables serão disparadas conforme os elementos do meu form,e eles tiverem o evento blur ativado
        .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
      
      merge(...controlBlurs).subscribe(() => {
        this.displayMessage = this.genericValidator.processarMensagens(this.loginForm);

      })
  }


  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.user = Object.assign({}, this.user, this.loginForm.value);

      this.contaService.login(this.user)
      .subscribe(
          sucesso => {this.processarSucesso(sucesso)},
          falha => {this.processarFalha(falha)}
      );
    }
  }



  processarSucesso(response: any){
    this.loginForm.reset(); //zera o formulario
    this.errors = [];//zera a coleçãod e erros
    //usuario vai estar salvo e o token também dentro da aplicação e deixa o usuario logado
    console.log(response);
    
    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    let toast = this.toastr.success('Login realizado com Sucesso!', 'Bem vindo!!!');
    if(toast){
      toast.onHidden.subscribe(() => {
        this.returnUrl
        ? this.router.navigate([this.returnUrl])
        : this.router.navigate(['/home']);
      });
    //redireciona para pagina home
    // this.router.navigate(['/conta/login']);
    }
  }

  //metodo paramostrar os erros que derem na tela(vindas do backend)
  processarFalha(fail: any){
    this.errors = fail.error.errors; //error vem do response e errors é a coleção de erros que vou receber do back
    this.toastr.error('Ocorreu um erro!');
  }
}
