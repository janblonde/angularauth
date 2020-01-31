import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
    path: 'unitlist',
    component: UnitListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'unitcreate',
    component: UnitCreateComponent
  },
  {
    path: 'unitedit/:id',
    component: UnitEditComponent
  },
  {
    path: 'eigenaarcreate/:id',
    component: EigenaarCreateComponent
  },
  {
    path: 'eigenaaredit/:id',
    component: EigenaarEditComponent
  },
  {
    path: 'rekeninglist',
    component: RekeningListComponent
  },
  {
    path: 'rekeningedit/:id',
    component: RekeningEditComponent
  },
  {
    path: 'rekeningdetail/:id',
    component: RekeningDetailComponent
  },
  {
    path: 'ongekoppeld',
    component: RekeningOngekoppeldComponent
  },
  {
    path: 'partnercreate/:id',
    component: PartnerCreateComponent
  },
  {
    path: 'factuurlist',
    component: FactuurListComponent
  },
  {
    path: 'factuurcreate',
    component: FactuurCreateComponent
  },
  {
    path: 'factuurdetail/:id',
    component: FactuurDetailComponent
  },
  {
    path: 'factuuredit/:id',
    component: FactuurEditComponent
  },
  {
    path: 'voorschotlist',
    component: VoorschotListComponent
  },
  {
    path: 'rapportbalans',
    component: RapportBalansComponent
  },
  {
    path: 'rapportindividuelerekeningen',
    component: RapportIndividuelerekeningenComponent
  },
  {
    path: 'rapportinkomstenuitgaven',
    component: RapportInkomstenuitgavenComponent
  },
  {
    path: 'fileupload',
    component: FileuploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'instellingen',
    component: InstellingenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
