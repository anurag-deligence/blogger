import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  showToken() {
    if (localStorage.getItem('token_id'))
      return false
    else
      return true
  }

  onLogout() {
    Swal.fire({
      title: 'Want to Logout?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.authservice.logout();
        this.router.navigate(['/login'])
      }
    })
  }

}
