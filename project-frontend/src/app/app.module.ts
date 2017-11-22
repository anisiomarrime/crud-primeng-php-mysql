import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { InputTextModule, PasswordModule, GrowlModule,DataTableModule,SharedModule,ButtonModule, 
  DialogModule,ConfirmDialogModule,ToolbarModule, ConfirmationService } from 'primeng/primeng';

import { UsuarioService } from '../app/service/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    GrowlModule,
    DataTableModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    SharedModule
  ],
  providers: [UsuarioService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
