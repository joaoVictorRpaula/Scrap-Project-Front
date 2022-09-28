import { DataService } from './../../../services/data.service';
import { Router } from '@angular/router';
import { PartnumberService } from './../../../services/partnumber.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Partnumber } from 'src/app/models/Partnumber.model';
import { MatDialog } from '@angular/material/dialog';
import { ErrorAlertComponent } from '../../error-alert/error-alert.component';

@Component({
  selector: 'app-apontamento-form-typeNumber',
  templateUrl: './apontamento-form-typeNumber.component.html',
  styleUrls: ['./apontamento-form-typeNumber.component.css']
})
export class ApontamentoFormTypeNumberComponent implements OnInit {

  constructor(
    private partnumberService: PartnumberService,
    private router: Router,
    public dialog : MatDialog,
    private dataService : DataService
    ) { }

  myControl = new FormControl('', [Validators.required]);
  filteredPartnumbers!: Observable<string[]>;
  public partnumbers: Partnumber[] = []


  ngOnInit() {
    this.getPartnumbers()
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.partnumbers.map(p => {return p.partnumber}).filter(partnumber => partnumber.toLowerCase().includes(filterValue));
  }

  validate(form: FormControl){
    const validate = this.partnumbers.find(p => p.partnumber == form.value)?.partnumber
    if(validate==null){
      this.openDialog()
    }
    else{
      this.dataService.setPartnumber(form.value)
      this.nextPage()
    }
  }

  getPartnumbers(){
    this.partnumberService.getAllPartnumbers().subscribe((partnumbers: Partnumber[])=>{
      this.partnumbers = partnumbers;
      this.filteredPartnumbers = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      )
    })
  }

  nextPage(){
    this.router.navigate(["home/apontamento/operation"])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ErrorAlertComponent, {
    width: '250px',
    });
    dialogRef.componentInstance.text = 'Número de tipo';
  }
}
