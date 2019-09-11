import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  @ViewChild('cb', { static: false }) cb: NgForm;
  blogId: any;
  user = {
    id: '',
    title: '',
    description: '',
    postType: ''
  }
  constructor(
    private authservice: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.blogId = this.route.snapshot.params.id;
    this.authservice.editBlog({ id: this.blogId }).subscribe(
      (response: any) => {
        this.user.title = response.title;
        this.user.description = response.description;
        this.user.postType = response.postType;

      },
      (error) => {
        console.log("this is error", error);
        this.authservice.logout();
        this.router.navigate(['/login']);
      }
    )
  }

  editBlog() {
    this.user.id = this.blogId;
    this.user.title = this.cb.value.title;
    this.user.description = this.cb.value.description;
    this.user.postType = this.cb.value.postType;
    this.authservice.updateBlog(this.user).subscribe(
      (response) => {
        console.log(response);
        Swal.fire("Done");
        // this.cb.reset();
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
      }
    )

  }

}



