import { ApontamentoFormMachineComponent } from './apontamento-form/apontamento-form-machine/apontamento-form-machine.component';
import { ApontamentoFormOperationComponent } from './apontamento-form/apontamento-form-operation/apontamento-form-operation.component';
import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ApontamentoFormTypeNumberComponent } from './apontamento-form/apontamento-form-typeNumber/apontamento-form-typeNumber.component';
import { ApontamentoFormComponent } from './apontamento-form/apontamento-form.component';
import { ApontamentoFormDefeitoComponent } from './apontamento-form/apontamento-form-defeito/apontamento-form-defeito.component';
import { ApontamentoFormQuantidadeComponent } from './apontamento-form/apontamento-form-quantidade/apontamento-form-quantidade.component';
import { ApontamentoFormObservacoesComponent } from './apontamento-form/apontamento-form-observacoes/apontamento-form-observacoes.component';


const routes: Routes = [
  {path: '',
    component: HomeComponent
  },
  {
    path:'apontamento',
    canActivate: [AuthGuard],
    component: ApontamentoFormComponent,
    children:[
        {path: '', redirectTo:'typenumber',pathMatch:'full'},
        {path:'typenumber',component: ApontamentoFormTypeNumberComponent, canActivate: [AuthGuard],},
        {path: 'operation',component: ApontamentoFormOperationComponent, canActivate: [AuthGuard],},
        {path: 'machine', component: ApontamentoFormMachineComponent, canActivate: [AuthGuard],},
        {path: 'defeito', component: ApontamentoFormDefeitoComponent, canActivate: [AuthGuard],},
        {path: 'quantidade', component: ApontamentoFormQuantidadeComponent, canActivate: [AuthGuard],},
        {path: 'observacoes', component: ApontamentoFormObservacoesComponent, canActivate: [AuthGuard],}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
