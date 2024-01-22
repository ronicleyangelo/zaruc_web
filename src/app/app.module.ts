import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler";
import { JavaServiceModule } from "./views/service/javaService.module";
import { LoginComponentModule } from "./views/login/login.component.module";
import { AppRouterModule } from "./app.routes";

@NgModule({
  bootstrap: [],
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JavaServiceModule,
    LoginComponentModule,
    AppRouterModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule  { }
