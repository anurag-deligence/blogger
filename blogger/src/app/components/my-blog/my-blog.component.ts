import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent implements OnInit {
  blogs: any;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.authservice.myBlog().subscribe(
      (response: any) => {
        console.log(response);
        this.blogs = response;
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
            this.router.navigate(['/login']);
          }
        )
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  blogEdit(blogId) {
    console.log(blogId)
    this.router.navigate(['/edit_blog', blogId])
  }

}
