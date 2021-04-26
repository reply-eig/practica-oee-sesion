import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import {UserService} from './user.service';
import {User} from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gestionUser';
  public users!:User[];
  public user!:User;
  private auth: Boolean;


  constructor(private userService: UserService){
    this.auth = false;
  }

  ngOnInit() {
    this.onOpenModal(null,"sign");
    if (this.auth) {
      this.getUsers();
    }

 }

 public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddUser(addForm: NgForm): void {
   formElem: document.getElementById('add-user-form').click();
   this.userService.addUser(addForm.value).subscribe(
     (response: User) => {
       console.log(response);
       addForm.reset();
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
       addForm.reset();
     }
   );
 }

 public onSignUser(addForm: NgForm): void {
  formElem: document.getElementById('sign-user-form').click();
  this.userService.getUserByEmail(addForm.value.email).subscribe(
    (response: User) => {
      console.log(response);
      this.auth = true;
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}

 public onOpenModal(user: User, mode: string): void {
   const container = document.getElementById('main-container');
   const button = document.createElement('button');
   button.type = 'button';
   button.style.display = 'none';
   button.setAttribute('data-toggle', 'modal');
   if (mode === 'add') {
     button.setAttribute('data-target', '#addUserModal');
   }
   if (mode === 'sign') {
     button.setAttribute('data-target', '#signUserModal');
   }
   container.appendChild(button);
   button.click();
 }
}
