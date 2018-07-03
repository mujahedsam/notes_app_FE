import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router) {  }


  ngOnInit() {
  }

  login(): void {
    if (this.username === 'admin' && this.password === '12345') {
      console.log(this);
      this.router.navigate(['notesinfo']);
    } else {
      alert('invalid user');
    }
  }


}
