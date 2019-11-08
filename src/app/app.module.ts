import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitCreateComponent } from './unit-create/unit-create.component';
import { UnitEditComponent } from './unit-edit/unit-edit.component';
import { EigenaarCreateComponent } from './eigenaar-create/eigenaar-create.component';
import { EigenaarEditComponent } from './eigenaar-edit/eigenaar-edit.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { RekeningListComponent } from './rekening-list/rekening-list.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RekeningOngekoppeldComponent } from './rekening-ongekoppeld/rekening-ongekoppeld.component';
import { PartnerCreateComponent } from './partner-create/partner-create.component';
import { FactuurListComponent } from './factuur-list/factuur-list.component';
import { FactuurCreateComponent } from './factuur-create/factuur-create.component';
import { VoorschotListComponent } from './voorschot-list/voorschot-list.component';
import { RapportenComponent } from './rapporten/rapporten.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    RegisterComponent,
    LoginComponent,
    UnitListComponent,
    UnitCreateComponent,
    UnitEditComponent,
    EigenaarCreateComponent,
    EigenaarEditComponent,
    FileuploadComponent,
    RekeningListComponent,
    RekeningOngekoppeldComponent,
    PartnerCreateComponent,
    FactuurListComponent,
    FactuurCreateComponent,
    VoorschotListComponent,
    RapportenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthService, EventService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
