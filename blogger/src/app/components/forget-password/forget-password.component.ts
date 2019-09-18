import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  @ViewChild('fp', { static: false }) fp: NgForm;
  user = {
    userid: '',
    npassword: '',
    ncpassword: ''
  }
  constructor(private authservice: AuthService, private route: ActivatedRoute,
    private router: Router, private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {
  }

  resetPassword() {
    var id = this.route.snapshot.params.id;
    this.user.userid = atob(id);
    this.user.npassword = this.fp.value.npassword;
    this.user.ncpassword = this.fp.value.ncpassword;
    if (this.user.npassword == this.user.ncpassword)
      this.authservice.forgetpasswordwithid(this.user).subscribe(
        (response: any) => {
          console.log(response)
          if (response.msg == 'Updated') {
            Swal.fire("Password Updated");
            this.router.navigate(['/login']);
          }
          else
            Swal.fire("User Not Found")
        },
        (error) => {
          console.log(error)
        }
      )
    else
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Both Are Not Same!"],
        dismissible: false,
        timeout: false,
        type: 'danger'
      });
  }
}
