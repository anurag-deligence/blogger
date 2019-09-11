import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  url = 'http://localhost:3000/users';
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) { }

  getHome(pageNo) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/home', pageNo, { headers });
  }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/register', user, { headers });
  }

  forgetPassword(user) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/forgetpassword', user, { headers });
  }

  loginUser(user) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/auth', user, { headers });
  }

  storeUserData(token, user) {
    localStorage.setItem('token_id', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    var token = localStorage.getItem('token_id');
    this.authToken = token;
  }

  getDashboard(pageNo) {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/dashboard', pageNo, { headers });
  }

  getProfile() {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + '/profile', { headers });
  }

  getChangePassword(user) {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/changePassword', user, { headers });
  }

  createBlog(data) {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/create-blog', data, { headers })
  }

  deleteBlog(blogId) {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/deleteBlog', blogId, { headers })
  }

  editBlog(blogId) {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/editBlog/:' + blogId, blogId, { headers })
  }

  updateBlog(data) {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/updateblog', data, { headers })
  }

  myBlog() {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + '/myblog', { headers })
  }

  userComment(blogId) {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/comments/:' + blogId, blogId, { headers })
  }

  addComments(data) {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/addComments', data, { headers })
  }

  deleteComment(comment) {
    let headers = new HttpHeaders();
    this.loadToken;
    headers = headers.append('Authorization', "Bearer " + this.authToken)
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + '/deleteComment', comment, { headers })
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
