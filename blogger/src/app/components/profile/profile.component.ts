import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('up', { static: false }) up: NgForm;
  imageUser: File = null;
  imageStr: any;
  user: Object;
  fun = true;

  constructor(private authservice: AuthService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.authservice.getProfile().subscribe(
      (response: any) => {
        console.log("Profile Component", response);
        this.user = response;
        console.log(response.image);
        if (response.image !== undefined)
          this.imageStr = this.sanitizer.bypassSecurityTrustUrl("../../../assets/" + response.image);
        else
          this.imageStr = this.sanitizer.bypassSecurityTrustUrl("../../../assets/default.png");
        console.log(this.imageStr);
      },
      (error) => {
        console.log("this is error q", error);
        this.authservice.logout();
        this.router.navigate(['/login']);
      }
    )
  }
  updatePhoto(event) {
    console.log(event);
    this.imageUser = <File>event.target.files[0];
  }

  updatePic() {
    console.log("run..")
    this.authservice.getUpdatePic(this.imageUser).subscribe(
      (response: any) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log("this is", error);
      }
    )
  }

  deleteAccount() {
    Swal.fire({
      title: 'Want to Delete Your Account Permanently?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      console.log("re", result)
      if (result.value) {
        this.authservice.deleteAccount().subscribe(
          (response: any) => {
            console.log(response)
            if (response.status === true) {
              this.authservice.logout();
              this.router.navigate(['/register']);
            }
          },
          (error) => {
            console.log("error", error);
          }
        )
        Swal.fire(
          'Deleted!',
          'Your account has been deleted.',
          'success'
        )
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your account is safe :)',
          'error'
        )
      }
    })
  }

  show() {
    if (this.fun === true)
      this.fun = false;
    else
      this.fun = true;
  }

}
