import { DataService } from './../../services/data.service';
import { SpinnerService } from './../../services/spinner.service';
import { AuthService } from './../../services/auth.service';

import { User } from './../../models/user.model';
import { Component ,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ErrorAlertComponent } from '../error-alert/error-alert.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    public dialog : MatDialog,
    private spinnerService:SpinnerService,
    private dataService : DataService
  ) {
  }

  edv="";


  ngOnInit() {
  }

  cancel(): void{
    this.dialogRef.close();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ErrorAlertComponent, {
    width: '250px',
    });
    dialogRef.componentInstance.text = 'EDV';
  }

  searchEdv(edv: string){
    this.spinnerService.requestStarted()
    this.userService.getUserByEdv(edv).subscribe((user: User)=>{
      this.userService.setUser(user)
      this.dataService.setEdv(edv)
      this.authService.routeConfirm(true)
      this.spinnerService.requestEnded()
      this.router.navigate(["home/apontamento"])
    },
    (error)=>{
      this.spinnerService.requestEnded()
      this.openDialog()
    })
  }

}
