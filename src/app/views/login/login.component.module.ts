import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BackendCommunicationService } from "../service/javaService";
import {LoginComponent} from "./login.component";


@NgModule({
  imports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [LoginComponent],
  declarations: [
    LoginComponent
  ],
  providers: [BackendCommunicationService],
})

export class LoginComponentModule {}
