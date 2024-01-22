import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BackendCommunicationService } from "../service/javaService";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [LoginComponent],
  providers: [BackendCommunicationService],
})

export class LoginComponentModule {}
