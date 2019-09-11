import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  @ViewChild('fp', { static: false }) fp: NgForm;
  user = {
    email: ''
  }
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  forgetPassword() {
    this.user.email = this.fp.value.email;
    this.authservice.forgetPassword(this.user).subscribe(
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
}
