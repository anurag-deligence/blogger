import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: false }) loginForm: NgForm;
  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log("login running");
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;

    this.authService.loginUser(this.user).subscribe(
      (response: any) => {
        console.log(response)
        if (response.msg == 'User not found')
          Swal.fire("User not found");
        else if (response.msg == 'Incorrect Password')
          Swal.fire('Incorrect Password');
        else if (response.status === true) {
          this.authService.storeUserData(response.token, response.user);
          this.router.navigate(['/dashboard']);
        }
        else
          Swal.fire("Something Wrong");
      },
      (error) => {
        console.log("this is error", error);
      }
    )
  }

}
