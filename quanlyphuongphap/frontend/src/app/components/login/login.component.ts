import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;

  admin:any;
  member:any;

  constructor(
    private router: Router
  ) {
    this.admin = {
      username: 'admin',
      password: 'admin',
      role: 'ADMIN_ROLE'
    };
    this.member = {
      username: 'luong',
      password: 'luong123',
      role: 'MEMBER_ROLE'
    }
  }

  ngOnInit() {
  }

  login() {
    if(this.username === 'admin' && this.password === 'admin') {
      localStorage.user = JSON.stringify(this.admin);
      this.router.navigate(['']);
    } else if(this.username === 'luong' && this.password === 'luong123') {
      localStorage.user = JSON.stringify(this.member);
      this.router.navigate(['']);
    }
    console.log(this.username, this.password)
  }
}
