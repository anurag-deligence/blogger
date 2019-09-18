import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './services/auth.service';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { MyBlogComponent } from './components/my-blog/my-blog.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
    CreateBlogComponent,
    EditBlogComponent,
    MyBlogComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   //this used for template driven approch
    HttpClientModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CommonModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
