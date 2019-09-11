import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  @ViewChild('cp', { static: false }) cp: NgForm;

  userpass = {
    email: '',
    opassword: '',
    npassword: '',
    ncpassword: ''
  }

  constructor(private router: Router, private authservice: AuthService) {
    var user: any = localStorage.getItem('user')
    user = JSON.parse(user);
    var email = user.email;
    this.userpass.email = email;
  }

  ngOnInit() {
  }

  changePassword() {
    console.log("changepassword");
    this.userpass.opassword = this.cp.value.opassword;
    this.userpass.npassword = this.cp.value.npassword;
    this.userpass.ncpassword = this.cp.value.ncpassword;

    if (this.userpass.npassword == this.userpass.ncpassword) {
      this.authservice.getChangePassword(this.userpass).subscribe(
        (response: any) => {
          console.log("this is response", response);
          this.authservice.logout();
          this.router.navigate(['/login'])
        },
        (error) => {
          console.log("this is error", error);
        }
      )
    }
    else
      Swal.fire("New Password and Confirm Password Not Same ")
  }
}
