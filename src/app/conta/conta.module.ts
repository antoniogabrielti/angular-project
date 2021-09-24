import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ContaAppComponent } from './conta.app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ContaService } from './services/conta.service';
import { ContaRoutingModule } from './conta.route';
import { NgBrazil } from 'ng-brazil' 
import { AtualizacaoCadastroComponent } from './atualizacao-cadastro/atualizacao-cadastro.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ContaGuard } from './services/conta.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ContaAppComponent,
    LoginComponent,
    AtualizacaoCadastroComponent,
    CadastroComponent,
    
  ],
  imports: [
    ToastrModule,
    NgBrazil,
    TextMaskModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ContaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    ContaGuard,
    ContaService
  ]
})
export class ContaModule { }
