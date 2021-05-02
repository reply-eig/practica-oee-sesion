import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  id: number;
  nombre: string;
  email: string;
  passwd: string;
  age: number;


  constructor(private userService: UserService, public router: Router) {
  }
  ngOnInit(): void {
  }

  public registrar() {
    this.id = null;
    const user = {id:this.id,
      name: this.nombre, email: this.email, age: this.age, passwd: this.passwd
    }
    this.userService.addUser(user).toPromise().then(data => {
      this.router.navigateByUrl('/login');
    });
  }

}
