import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('up', { static: false }) up: NgForm;
  imageUser: File = null;
  user: Object;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.authservice.getProfile().subscribe(
      (response: any) => {
        console.log("Profile Component");
        this.user = response;
      },
      (error) => {
        console.log("this is error", error);
        this.authservice.logout();
        this.router.navigate(['/login']);
      }
    )
  }

}
