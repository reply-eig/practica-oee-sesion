import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from '../../services/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'gestionUser';
  public users!: User[];
  public user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userService.auth);
    if (this.userService.auth) {
      this.getUsers();
    }
  }

  public getUsers(): void {
     this.userService.getUsers().subscribe(
       (response: User[]) => {
         this.users = response;
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
   }

}
