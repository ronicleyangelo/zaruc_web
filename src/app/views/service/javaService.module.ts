// SeuModulo.module.ts

import { NgModule } from '@angular/core';
import { BackendCommunicationService } from "./javaService";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
      HttpClientModule
    ],
    providers: [BackendCommunicationService],
})
export class JavaServiceModule { }
