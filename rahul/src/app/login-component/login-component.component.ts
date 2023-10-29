import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  email!: String
  password!: String

  constructor(private router: Router){}

  SecurityCheckArray: any = [
    {
      userEmail: 'rahulsahu8092@gmail.com',
      userPassword: 'rahul-25'
    }
  ]

  checkData() {

    const checkedData = this.SecurityCheckArray.find((m: { userEmail: String; userPassword: String; }) => m.userEmail == this.email && m.userPassword == this.password)
    
    console.log(checkedData)
    if (checkedData == undefined) {
      this.router.navigate(['']);
      alert('user did not exist')
    } else {
      localStorage.setItem('message','login sucessfully')
      this.router.navigate(['/dashboard/third']);
    }
  }
}
