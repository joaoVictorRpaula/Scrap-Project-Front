import { DataService } from './../../../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { DefeitoService } from 'src/app/services/defeito.service';
import { Defeito } from 'src/app/models/defeito.model';
import { ErrorAlertComponent } from '../../error-alert/error-alert.component';

@Component({
  selector: 'app-apontamento-form-defeito',
  templateUrl: './apontamento-form-defeito.component.html',
  styleUrls: ['./apontamento-form-defeito.component.css']
})
export class ApontamentoFormDefeitoComponent implements OnInit {


  constructor(
    private defeitoService: DefeitoService,
    private router: Router,
    private dialog: MatDialog,
    private dataService : DataService
    ) { }

  myControl = new FormControl('');
  filteredDefeitos!: Observable<string[]>;
  public defeitos: Defeito[] = []


  ngOnInit() {
    this.getDefeitos()
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.defeitos.map(d => {return d.defeitoNome}).filter(defeito => defeito.toLowerCase().includes(filterValue));
  }

  validate(form : FormControl){
    const defeitoNome = this.defeitos.find(d => d.defeitoNome == form.value)?.defeitoNome
    if(defeitoNome==null){
      this.openDialog()
    }
    else{
      this.dataService.setDefeito(form.value)
      this.nextPage()
    }
  }

  getDefeitos(){
    this.defeitoService.getAllDefeitos().subscribe((defeitos: Defeito[])=>{
      this.defeitos = defeitos;
      this.filteredDefeitos = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      )
    })
  }

  nextPage(){
    this.router.navigateByUrl("home/apontamento/quantidade")
  }

  lastPage(){
    this.router.navigate(["home/apontamento/machine"])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ErrorAlertComponent, {
    width: '250px',
    });
    dialogRef.componentInstance.text = 'Defeito';
  }

}
