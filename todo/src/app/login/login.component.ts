import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'dj153590';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log('Username is : ' + this.username + ' password was : ' + this.password);
  }
}
