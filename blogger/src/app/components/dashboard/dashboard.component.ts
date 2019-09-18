import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router, private route: ActivatedRoute) { }
  araays: Array<number> = [];
  role: String;
  totalpage: number;
  blogs: any;
  myBlogs: any;
  page = 1;
  ngOnInit() {
    console.log(this.page);
    this.authservice.getDashboard({ pageNo: this.page }).subscribe(
      (response: any) => {
        console.log("cdvr", response);
        this.blogs = response.data;
        this.myBlogs = response.myBlogsId;
        this.totalpage = response.totalPage;
        this.role = response.role;
        this.araays = [];
        for (let i = 0; i < this.totalpage; i++)
          this.araays.push(i + 1);
      },
      (error) => {
        console.log("this is error", error);
        this.authservice.logout();
        this.router.navigate(['/login']);
      }
    )
  }

  blogDelete(blogId) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this !',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        blogId = { blog: blogId }
        this.authservice.deleteBlog(blogId).subscribe(
          (response: any) => {
            console.log(response);
            this.ngOnInit();
          },
          (error) => {
            console.log(error)
            this.router.navigate(['/login'], { relativeTo: this.route });
          }
        )
        Swal.fire(
          'Deleted!',
          'Your blog has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your blog is safe :)',
          'error'
        )
      }
    })
  }

  blogEdit(blogId) {
    this.router.navigate(['/edit_blog', blogId])
  }

  previous() {
    if (this.page != 1)
      this.page = this.page - 1;
    this.ngOnInit();
  }

  next() {
    if (this.page < this.totalpage)
      this.page = this.page + 1;
    this.ngOnInit();
  }

  pageclick(value) {
    this.page = value;
    this.ngOnInit();
  }

  comments(blogId) {
    this.router.navigate(['/comment', blogId])
  }

}
