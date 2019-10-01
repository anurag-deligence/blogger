import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
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
  genders = ['Male', 'Female', 'Others'];
  username: String;
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
      'name': new FormControl('', [Validators.required, this.trim]),
      'userName': new FormControl('', [Validators.required, Validators.minLength(4), this.trim]),
      'email': new FormControl('', [Validators.required, Validators.email, this.trim]),
      'password': new FormControl('', [Validators.required, this.trim]),
      'gender': new FormControl('Male', [Validators.required, this.trim])
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
          var t = response.error[0];
          console.log("t", t)
          if (t == 'email') {
            console.log("here1");
            this.ngFlashMessageService.showFlashMessage({
              messages: ["Email is already registered!"],
              dismissible: false,
              timeout: false,
              type: 'danger'
            });
          }
          else if (t == "userName") {
            console.log("here2");
            this.ngFlashMessageService.showFlashMessage({
              messages: ["UserName is already taken!"],
              dismissible: false,
              timeout: false,
              type: 'danger'
            });
          }
          else {
            this.ngFlashMessageService.showFlashMessage({
              messages: ["Something Wrong!"],
              dismissible: false,
              timeout: false,
              type: 'danger'
            });
          }
        }
        this.signupForm.reset();
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

  trim(control: AbstractControl): ValidationErrors | null {
    if (control.value !== null && control.value.trim() != "") {
      return null;
    }
    else {
      return { 'trim': true }
    }
  }

}
