import { OperationService } from 'src/app/services/operation.service';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from './../../../services/data.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ErrorAlertComponent } from '../../error-alert/error-alert.component';
import { MachineService } from 'src/app/services/machine.service';
import { Machine } from 'src/app/models/machine.model';

@Component({
  selector: 'app-apontamento-form-machine',
  templateUrl: './apontamento-form-machine.component.html',
  styleUrls: ['./apontamento-form-machine.component.css']
})
export class ApontamentoFormMachineComponent implements OnInit {


  constructor(
    private machineService : MachineService,
    private router: Router,
    private dataService : DataService,
    private dialog : MatDialog,
    private operationService : OperationService) { }

  myControl = new FormControl('');
  filteredMachines!: Observable<string[]>;
  public machines: Machine[] = []
  private operationId? : string;

  ngOnInit() {
    this.operationService.getidOperationObservable().subscribe(idOperation =>{
      this.operationId = idOperation;
    })
    this.getMachines()
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.machines.map(m => {return m.machineName}).filter(machine => machine.toLowerCase().includes(filterValue));
  }

  getMachines(){
    this.machineService.getAllMachinesFromOperation(this.operationId).subscribe((machines: Machine[])=>{
      this.machines = machines;
      this.filteredMachines = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      )
    })
  }

  validate(form: FormControl){
    //Validação se o valor existe nas opções
    const machineName = this.machines.find(m => m.machineName == form.value)?.machineName
    if(machineName==null){
      this.openDialog()
    }
    else{
      this.dataService.setMachine(form.value)
      this.nextPage()
    }
  }

  nextPage(){
    this.router.navigateByUrl("home/apontamento/defeito")
  }

  lastPage(){
    this.router.navigate(["home/apontamento/operation"])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ErrorAlertComponent, {
    width: '250px',
    });
    dialogRef.componentInstance.text = 'Máquina';
  }

}
