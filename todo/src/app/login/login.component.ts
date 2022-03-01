import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'dj153590';
  password = '';
  validpwd : boolean = true;
  errormsg = 'Invalid Credentials';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if ( this.password === '123citi' ) {

      this.validpwd = true;
      console.log('Username is : ' + this.username + ' password is valid');  
      this.router.navigate(['welcome', this.username]);

    } else {
      
      this.validpwd = false;
      console.log('Username is : ' + this.username + ' password was invalid : ' );  

    }
      }
}
