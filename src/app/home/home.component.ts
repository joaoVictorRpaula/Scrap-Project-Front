import { Component, Inject, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFormComponent } from './user-form/user-form.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog : MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
      this.dialog.open(UserFormComponent, {
      width: '500px',
  });
}


}
