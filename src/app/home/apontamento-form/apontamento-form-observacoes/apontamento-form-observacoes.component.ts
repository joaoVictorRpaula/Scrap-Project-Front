import { DataService } from './../../../services/data.service';
import { SubmitDialogComponent } from './../submit-dialog/submit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorAlertComponent } from '../../error-alert/error-alert.component';

@Component({
  selector: 'app-apontamento-form-observacoes',
  templateUrl: './apontamento-form-observacoes.component.html',
  styleUrls: ['./apontamento-form-observacoes.component.css']
})
export class ApontamentoFormObservacoesComponent implements OnInit {


  constructor(
    private router: Router,
    private dialog: MatDialog,
    private dataService : DataService
    ) { }


  observacoesControl = new FormControl('');

  ngOnInit() {

  }

  validate(input : FormControl){
      this.dataService.setObservacoes(input.value)
      this.openConfirmDialog()
  }

  lastPage(){
    this.router.navigate(["home/apontamento/quantidade"])
  }

  openConfirmDialog() : void{
    const dialogRef = this.dialog.open(SubmitDialogComponent,{
      width: '450px',
    });
  }

}
