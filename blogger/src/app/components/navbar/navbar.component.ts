import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    this.authservice.logout();
    this.router.navigate(['/login']);
  }

}
