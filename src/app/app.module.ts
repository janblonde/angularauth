import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstellingenComponent } from './instellingen/instellingen.component';
import { RapportBalansComponent } from './rapport-balans/rapport-balans.component';
import { RapportInkomstenuitgavenComponent } from './rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component';
import { RapportIndividuelerekeningenComponent } from './rapport-individuelerekeningen/rapport-individuelerekeningen.component';

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
    DashboardComponent,
    InstellingenComponent,
    RapportBalansComponent,
    RapportInkomstenuitgavenComponent,
    RapportIndividuelerekeningenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MDBBootstrapModulesPro.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthService, EventService, MDBSpinningPreloader, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
