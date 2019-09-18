import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import Swal from 'sweetalert2';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  // @ViewChild('f', { static: false }) regForm: NgForm;
  // user = {
  //   name: '',
  //   username: '',
  //   email: '',
  //   password: ''
  // }
  genders = ['Male', 'Female', 'Others']
  name: String;
  email: String;
  password: String;
  gender: String;
  disableBtn: Boolean;
  signupForm: FormGroup;


  constructor(private authService: AuthService,
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService) {

  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl('Male', Validators.required)
    });
  }

  buttonDisabled() {
    if (this.signupForm.status === "VALID")
      this.disableBtn = false
    else
      this.disableBtn = true;
  }

  onRegister() {
    console.log("running");
    console.log(this.signupForm)
    this.authService.registerUser(this.signupForm.value).subscribe(
      (response: any) => {
        console.log(response);
        if (response.success === true) {
          Swal.fire("You Are Registered.");
          this.router.navigate(['/login']);
        }
        else {
          this.ngFlashMessageService.showFlashMessage({
            messages: ["Email is already registered!"],
            dismissible: false,
            timeout: false,
            type: 'danger'
          });
          this.signupForm.reset();
        }
      },
      (error) => {
        console.log("this is error", error);
        this.router.navigate(['/register']);
      }
    )

    // this is used with the local reference.
    // this.user.name = this.regForm.value.name;
    // this.user.username = this.regForm.value.username;
    // this.user.email = this.regForm.value.email;
    // this.user.password = this.regForm.value.password;
    // console.log(this.user.name)
    // console.log(this.user.username)
    // console.log(this.user.email)
  }

}
