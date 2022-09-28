import { confirmationDialogComponent } from './../confirmation-dialog/confirmation-dialog.component';
import { DataService } from './../../../services/data.service';
import { Component ,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ErrorAlertComponent } from '../../error-alert/error-alert.component';


@Component({
  selector: 'app-submit-dialog',
  templateUrl: './submit-dialog.component.html',
  styleUrls: ['./submit-dialog.component.css']
})
export class SubmitDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SubmitDialogComponent>,
    private router: Router,
    public dialog : MatDialog,
    private spinnerService:SpinnerService,
    private dataService : DataService
  ) {
  }

  edv = '';
  partnumber = '';
  operation = '';
  machine = '';
  defeito = '';
  quantidade = 0;
  observacoes = '';

  ngOnInit() {
    this.edv = this.dataService.getEdv();
    this.partnumber = this.dataService.getPartnumber();
    this.operation = this.dataService.getOperation();
    this.machine = this.dataService.getMachine();
    this.defeito = this.dataService.getDefeito();
    this.quantidade = this.dataService.getQuantidade();
    this.observacoes = this.dataService.getObservacoes();
  }

  cancel(): void{
    this.dialogRef.close();
  }

  public addApontamento(){
    this.spinnerService.requestStarted()
    this.dataService.addApontamento().subscribe(a =>{
      this.spinnerService.requestEnded()
      this.openConfirmationDialog()
    },
    (error)=>{
      this.spinnerService.requestEnded()
      this.openErrorDialog()
    })
  }

  public openErrorDialog(){
    const dialogRef = this.dialog.open(ErrorAlertComponent, {
      width: '250px',
      });
      dialogRef.componentInstance.text = 'Apontamento';
  }

  public openConfirmationDialog(){
    const dialogRef = this.dialog.open(confirmationDialogComponent,{

    })
  }

}
