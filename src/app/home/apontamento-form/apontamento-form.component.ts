import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';




@Component({
  selector: 'app-apontamento-form',
  templateUrl: './apontamento-form.component.html',
  styleUrls: ['./apontamento-form.component.css']
})
export class ApontamentoFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  public user!: User;

  ngOnInit() {
   this.userService.data.subscribe(user=>
      {
        this.user = user
      })
  }



}
