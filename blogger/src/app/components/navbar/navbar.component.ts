import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataTransferService } from '../../services/data-transfer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  somethings: any;
  values: '';
  selected = 'category';
  constructor(private authservice: AuthService,
    private router: Router,
    private dataservice: DataTransferService) { }

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

  onKey(event: any, selected) {
    this.values = event.target.value;
    console.log(this.values, "$", selected);
    this.authservice.searchKeyup({ value: this.values, category: selected }).subscribe(
      (response) => {
        console.log("keyup", response);
        this.somethings = response;
      },
      (error) => {
        console.log("keyerr", error)
      }
    )
  }

  searchBtn(value, selected) {
    console.log(value.value);
    this.authservice.searchUser({ type: value.value, category: selected }).subscribe(
      (response) => {
        this.dataservice.setUserData(response);
        this.router.navigate(['/searchuser'])
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
