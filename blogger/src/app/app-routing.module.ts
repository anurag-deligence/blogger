import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { MyBlogComponent } from './components/my-blog/my-blog.component';
import { CommentComponent } from './components/comment/comment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'create-blog', component: CreateBlogComponent },
  { path: 'edit_blog/:id', component: EditBlogComponent },
  { path: 'myblog', component: MyBlogComponent },
  { path: 'comment/:id', component: CommentComponent },
  { path: 'forgetpassword/:id', component: ForgetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
