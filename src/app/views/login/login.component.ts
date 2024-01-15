import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import { Validators} from '@angular/forms';
import { Component } from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  selector: 'app-login',
  standalone: true,
  styleUrls: [`./login.component.css`],
  templateUrl: `./login.component.html`
})
export class LoginComponent {
  loginForm: UntypedFormGroup;
  private baseUrl = 'localhost:8080';
  loginModel: any = { username: '', senha: ''}

  constructor(private http: HttpClient, private fb: UntypedFormBuilder) {
    this.loginForm = this.fb.group({
      login: new UntypedFormControl("", [Validators.required]),
      senha: new UntypedFormControl("", [Validators.required])
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
    console.log({ login, senha })
    return this.http.post(`${this.baseUrl}/auth/login`, { login, senha });
  }
}
