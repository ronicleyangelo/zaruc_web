import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./views/login/login.component";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/compiler";
import {JavaServiceModule} from "./views/service/javaService.module";
import {LoginComponentModule} from "./views/login/login.component.module";
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
    HttpClientModule,
    JavaServiceModule,
    LoginComponentModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule  { }
