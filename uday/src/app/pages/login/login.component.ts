import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  name: any;
  password: any;

  call() {
    console.log(this.name + this.password);
    this.router.navigate(['/dashboard']);
  }
}
