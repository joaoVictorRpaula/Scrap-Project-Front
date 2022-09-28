import { DataService } from './../../../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorAlertComponent } from '../../error-alert/error-alert.component';

@Component({
  selector: 'app-apontamento-form-quantidade',
  templateUrl: './apontamento-form-quantidade.component.html',
  styleUrls: ['./apontamento-form-quantidade.component.css']
})
export class ApontamentoFormQuantidadeComponent implements OnInit {


  constructor(
    private router: Router,
    private dialog: MatDialog,
    private dataService : DataService
    ) { }


  quantidadeControl = new FormControl('', [Validators.required]);

  ngOnInit() {

  }

  validate(input : FormControl){
    if(input.value == null || input.value == 0){
      this.openDialog()
    }
    else{
      this.dataService.setQuantidade(input.value)
      this.nextPage()
    }
  }



  nextPage(){
    this.router.navigateByUrl("home/apontamento/observacoes")
  }

  lastPage(){
    this.router.navigate(["home/apontamento/defeito"])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ErrorAlertComponent, {
    width: '250px',
    });
    dialogRef.componentInstance.text = 'Quantidade';
  }
}
