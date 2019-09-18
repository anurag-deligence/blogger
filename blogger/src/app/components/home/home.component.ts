import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router) {
  }
  araays: Array<number> = [];
  totalpage: number;
  blogs: any;
  page = 1;

  ngOnInit() {
    this.authservice.getHome({ pageNo: this.page }).subscribe(
      (response: any) => {
        console.log(response);
        this.blogs = response.data;
        this.totalpage = response.totalPage;
        this.araays = [];
        for (let i = 0; i < this.totalpage; i++)
          this.araays.push(i + 1);
      },
      (error) => { console.log("this is error", error) }
    )

  }

  previous() {
    if (this.page != 1)
      this.page = this.page - 1;
    console.log("this", this)
    this.ngOnInit();
  }

  next() {
    if (this.page < this.totalpage)
      this.page = this.page + 1;
    this.ngOnInit();
  }

  pageclick(value, event) {
    this.page = value;
    event.path[0].classList.remove('active');
    event.path[0].classList.add('active');
    this.ngOnInit();
  }
}
