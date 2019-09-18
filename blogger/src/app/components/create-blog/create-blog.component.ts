import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})

export class CreateBlogComponent implements OnInit {
  @ViewChild('cb', { static: false }) cb: NgForm;
  user = {
    title: '',
    description: '',
    postType: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  createblog() {
    this.user.title = this.cb.value.title;
    this.user.description = this.cb.value.description;
    this.user.postType = this.cb.value.postType;
    this.authService.createBlog(this.user).subscribe(
      (response) => {
        console.log(response);
        Swal.fire("Blog Is Created");
        this.cb.reset();
      },
      (error) => {
        console.log(error);
      })
  }
}
