import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { HomeComponent } from 'src/app/componentes/home/home.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  passwd: string;
 public verify: boolean;

  constructor(private userService: UserService, public router: Router) {
    this.verify = true;

  }

  ngOnInit(): void {
  }

  public login() {
    const user = { id: null, name: null, email: this.email, age: null, passwd: this.passwd }

    this.userService.loginUser(user).toPromise().then(data => {
      this.verify = data;
      if (data) {
        this.userService.auth = data;
        this.router.navigateByUrl('/');
      } 
    });
  }
}
