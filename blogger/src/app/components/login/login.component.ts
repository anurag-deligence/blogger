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
  @ViewChild('fp', { static: false }) fp: NgForm;
  @ViewChild('loginForm', { static: false }) loginForm: NgForm;
  user = {
    email: '',
    password: ''
  }
  fun: boolean = false;
  fun2: boolean = true;

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

  forgetPassword() {
    this.user.email = this.fp.value.email;
    this.authService.forgetPassword(this.user).subscribe(
      (response: any) => {
        console.log(response)
        if (response.status === true)
          Swal.fire("Mail Sent")
        else
          Swal.fire("User Not Found")
      },
      (error) => {
        console.log(error)
      }
    )
  }

  changePage() {
    this.fun = true;
    this.fun2 = false;
  }

  changeAgain() {
    this.fun = false;
    this.fun2 = true;
  }

}
