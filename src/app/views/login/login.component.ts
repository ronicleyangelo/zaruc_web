import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {JavaServiceModule} from "../service/javaService.module";
import {BackendCommunicationService} from "../service/javaService";
import {MatInputModule} from "@angular/material/input";

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [BackendCommunicationService, HttpClient],
  selector: 'app-login',
  standalone: true,
  styleUrls: [`./login.component.css`],
  templateUrl: `./login.component.html`
})
export class LoginComponent {
  loginForm: UntypedFormGroup;
  imgURL = './assets/images/transferir.jpg'

  constructor(private http: HttpClient, private fb: UntypedFormBuilder, private java: BackendCommunicationService) {
    this.loginForm = this.fb.group({
      login: new UntypedFormControl("", ),
      senha: new UntypedFormControl("", )
    })
  }
  // @ts-ignore
  // login(): Observable<any> {
  //   if (this.loginForm.valid) {
  //     const { username, senha } = this.loginForm.value;
  //
  //     return this.javaService.login({ username, senha });
  //   } else {
  //     return new Observable(observer => {
  //       observer.error('Formulário inválido');
  //       observer.complete();
  //     });
  //   }
  // }
  login() : Observable<any> {
    const { login, senha } = this.loginForm.value;
    console.log("LOGIN", { login, senha })
    return this.java.login({ login, senha });
  }

}
