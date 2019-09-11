import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  user: any;
  blogId: any;
  data: any;
  comments: Array<String>;
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
        this.data = response[0];
        this.comments = response[1];
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

  delCom(comment, id) {
    console.log('here')
    this.authservice.deleteComment({ comment: comment, id: id }).subscribe(
      (response: any) => {
        console.log(response);
        this.ngOnInit();
      },
      (error) => {
        console.log(error)
        this.router.navigate(['/login'], { relativeTo: this.route });
      }
    )
  }

}
