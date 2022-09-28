import { SubmitDialogComponent } from './apontamento-form/submit-dialog/submit-dialog.component';
import { DefeitoService } from './../services/defeito.service';
import { DataService } from './../services/data.service';
import { SpinnerService } from './../services/spinner.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { MachineService} from '../services/machine.service';
import { ApontamentoFormQuantidadeComponent } from './apontamento-form/apontamento-form-quantidade/apontamento-form-quantidade.component';
import { ApontamentoFormDefeitoComponent } from './apontamento-form/apontamento-form-defeito/apontamento-form-defeito.component';
import { OperationService } from './../services/operation.service';
import { PartnumberService } from './../services/partnumber.service';
import { AuthGuard } from './../guards/auth.guard';
import { AuthService } from './../services/auth.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './../services/user.service';
import { MaterialModule } from './../../material.module';
import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApontamentoFormTypeNumberComponent } from './apontamento-form/apontamento-form-typeNumber/apontamento-form-typeNumber.component';
import { ApontamentoFormComponent } from './apontamento-form/apontamento-form.component';
import { ApontamentoFormOperationComponent } from './apontamento-form/apontamento-form-operation/apontamento-form-operation.component';
import { ApontamentoFormMachineComponent } from './apontamento-form/apontamento-form-machine/apontamento-form-machine.component';
import { ApontamentoFormObservacoesComponent } from './apontamento-form/apontamento-form-observacoes/apontamento-form-observacoes.component';
import { confirmationDialogComponent } from './apontamento-form/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserFormComponent,
    SpinnerComponent,
    SubmitDialogComponent,
    confirmationDialogComponent,
    ApontamentoFormComponent,
    ApontamentoFormTypeNumberComponent,
    ApontamentoFormOperationComponent,
    ApontamentoFormMachineComponent,
    ApontamentoFormDefeitoComponent,
    ApontamentoFormQuantidadeComponent,
    ApontamentoFormObservacoesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers:[UserService, AuthService, AuthGuard, PartnumberService, OperationService, MachineService, SpinnerService, DataService, DefeitoService],
  exports:[HomeComponent]
})
export class HomeModule { }
