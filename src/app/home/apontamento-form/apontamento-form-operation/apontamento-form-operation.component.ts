import { DataService } from './../../../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Operation } from 'src/app/models/operation.model';
import { Partnumber } from 'src/app/models/Partnumber.model';
import { OperationService } from 'src/app/services/operation.service';
import { ErrorAlertComponent } from '../../error-alert/error-alert.component';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-apontamento-form-operation',
  templateUrl: './apontamento-form-operation.component.html',
  styleUrls: ['./apontamento-form-operation.component.css']
})
export class ApontamentoFormOperationComponent implements OnInit {


  constructor(
    private operationService: OperationService,
    private router: Router,
    private dialog: MatDialog,
    private dataService : DataService
    ) { }

  myControl = new FormControl('');
  filteredOperations!: Observable<string[]>;
  public operations: Operation[] = [];


  ngOnInit() {
    this.getOperations()
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.operations.map(o => {return o.operation}).filter(operation => operation.toLowerCase().includes(filterValue));
  }

  getOperations(){
    this.operationService.getAllOperations().subscribe((operations: Operation[])=>{
      this.operations = operations;
      this.filteredOperations = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      )
    })
  }

  validate(form: FormControl){
    const idOperation = this.operations.find(o => o.operation == form.value)?.idOperation
    if(idOperation==null){
      this.openDialog()
    }
    else{
      this.operationService.setidOperation(idOperation)
      this.dataService.setOperation(form.value)
      this.nextPage()
    }
  }

  nextPage(){
    this.router.navigateByUrl("home/apontamento/machine")
  }

  lastPage(){
    this.router.navigate(["home/apontamento/typenumber"])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ErrorAlertComponent, {
    width: '250px',
    });
    dialogRef.componentInstance.text = 'Operação';
  }

}
