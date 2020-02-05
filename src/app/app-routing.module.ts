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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
