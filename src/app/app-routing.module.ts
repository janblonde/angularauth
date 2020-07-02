import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordRequestComponent } from './password-request/password-request.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitCreateComponent } from './unit-create/unit-create.component';
import { UnitEditComponent } from './unit-edit/unit-edit.component';
import { EigenaarCreateComponent } from './eigenaar-create/eigenaar-create.component';
import { EigenaarEditComponent } from './eigenaar-edit/eigenaar-edit.component';
import { RekeningListComponent } from './rekening-list/rekening-list.component';
import { RekeningEditComponent } from './rekening-edit/rekening-edit.component';
import { RekeningDetailComponent } from './rekening-detail/rekening-detail.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { RekeningOngekoppeldComponent } from './rekening-ongekoppeld/rekening-ongekoppeld.component';
import { PartnerCreateComponent } from './partner-create/partner-create.component';
import { FactuurListComponent } from './factuur-list/factuur-list.component';
import { FactuurCreateComponent } from './factuur-create/factuur-create.component';
import { FactuurDetailComponent } from './factuur-detail/factuur-detail.component';
import { FactuurEditComponent } from './factuur-edit/factuur-edit.component';
import { VoorschotListComponent } from './voorschot-list/voorschot-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstellingenComponent } from './instellingen/instellingen.component';
import { RapportBalansComponent } from './rapport-balans/rapport-balans.component';
import { RapportIndividuelerekeningenComponent } from './rapport-individuelerekeningen/rapport-individuelerekeningen.component'
import { RapportInkomstenuitgavenComponent } from './rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component'
import { KostentypeListComponent } from './kostentype-list/kostentype-list.component'
import { KostentypeEditComponent } from './kostentype-edit/kostentype-edit.component'
import { KostentypeCreateComponent } from './kostentype-create/kostentype-create.component'
import { VerbruikListComponent } from './verbruik-list/verbruik-list.component';
import { VerbruikCreateComponent } from './verbruik-create/verbruik-create.component';
import { VerbruikEditComponent } from './verbruik-edit/verbruik-edit.component';
import { AfrekeningListComponent } from './afrekening-list/afrekening-list.component';
import { AfrekeningCreateComponent } from './afrekening-create/afrekening-create.component';
import { AfrekeningDetailComponent } from './afrekening-detail/afrekening-detail.component';


import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'passwordrequest',
    component: PasswordRequestComponent
  },
  {
    path: 'passwordreset',
    component: PasswordResetComponent,
  },
  {
    path: 'unitlist',
    component: UnitListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'unitcreate',
    component: UnitCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'unitedit/:id',
    component: UnitEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'eigenaarcreate/:id',
    component: EigenaarCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'eigenaaredit/:id',
    component: EigenaarEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rekeninglist',
    component: RekeningListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rekeningedit/:id',
    component: RekeningEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rekeningdetail/:id',
    component: RekeningDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ongekoppeld',
    component: RekeningOngekoppeldComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'partnercreate/:id',
    component: PartnerCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'factuurlist',
    component: FactuurListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'factuurcreate',
    component: FactuurCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'factuurdetail/:id',
    component: FactuurDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'factuuredit/:id',
    component: FactuurEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'voorschotlist',
    component: VoorschotListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rapportbalans',
    component: RapportBalansComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rapportindividuelerekeningen',
    component: RapportIndividuelerekeningenComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rapportinkomstenuitgaven',
    component: RapportInkomstenuitgavenComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fileupload',
    component: FileuploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'instellingen',
    component: InstellingenComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'kostentypelist',
    component: KostentypeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'kostentypeedit/:id',
    component: KostentypeEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'kostentypecreate',
    component: KostentypeCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'verbruiklist',
    component: VerbruikListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'verbruikcreate',
    component: VerbruikCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'verbruikedit/:id',
    component: VerbruikEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'afrekeninglist',
    component: AfrekeningListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'afrekeningcreate',
    component: AfrekeningCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'afrekeningdetail/:id',
    component: AfrekeningDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
