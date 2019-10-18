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
import { FileuploadComponent } from './fileupload/fileupload.component';


import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
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
    path: 'fileupload',
    component: FileuploadComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
