import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  user: any;
  blogId: any;
  data: any;
  constructor(private authservice: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.blogId = this.route.snapshot.params.id;
    var user = localStorage.getItem('user');
    user = JSON.parse(user);
    this.user = user;
    this.authservice.userComment({ blogId: this.blogId }).subscribe(
      (response: any) => {
        this.data = response.data;
        console.log(this.data);
      },
      (error) => {
        console.log("this is error", error);
        this.authservice.logout();
        this.router.navigate(['/login']);
      }
    )
  }

  addComments(blogId, comment) {
    var user = { blogId: blogId, userComments: comment.value }
    console.log("comments", comment.value)
    this.authservice.addComments(user).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  delCom(commentId, blogId) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this !',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.authservice.deleteComment({ commentId, blogId }).subscribe(
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
          'Your comment has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your comment is safe :)',
          'error'
        )
      }
    })
  }

}


