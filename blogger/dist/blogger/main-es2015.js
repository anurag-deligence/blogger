(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/change-password/change-password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/change-password/change-password.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=main>\n  <h2 class=\"text-center\">Change Password</h2>\n  <hr>\n  <form (ngSubmit)=\"changePassword()\" #cp=\"ngForm\">\n\n    <label>EMAIL:</label>\n    <span style=\"font-size:30px; color:midnightblue\" name='email'>{{userpass.email}}</span>\n    <br>\n\n    <label>OLD PASSWORD:</label>\n    <input type=\"password\" placeholder=\"Strong Password\" ngModel name=\"opassword\" required>\n    <br>\n\n    <label>NEW PASSWORD:</label>\n    <input type=\"password\" placeholder=\"Strong Password\" ngModel name=\"npassword\"\n      pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" #password=\"ngModel\" required>\n    <br>\n\n    <span *ngIf=\"!password.valid && password.touched\" class=\"help-block\">\n      Please Enter Strong Password (1 digit, 1 uppercase & lowercase, min length 8 ).\n    </span>\n    <br>\n\n    <label>CONFIRM PASSWORD:</label>\n    <input type=\"password\" placeholder=\"Strong Password\" ngModel name=\"ncpassword\" required>\n    <br><br>\n\n    <button type=\"submit\" class=\"btn btn-info btn-lg\" value=\"UPDATE\" [disabled]=\"!cp.valid\">UPDATE</button>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/comment/comment.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/comment/comment.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>comment works!</p>\n<div *ngIf=\"data\" style=\"background-color: #e0e0ca\">\n  <h2>{{data.title}}</h2>\n  <div id=\"description\" innerHTML=\"{{data.description}}\"></div>\n</div>\n<br><br>\n<div *ngFor=\"let comment of comments\" style=\"background-color: #e6f3ff\">\n  {{comment.email}}\n  <div innerHTML=\"{{comment.comment}}\"></div>\n  <span *ngIf=\"user.role == 'admin'|| comment.email == user.email\">\n    <button (click)=\"delCom(comment.comment,data._id)\" class=\"btn btn-danger\">Delete</button>\n  </span>\n</div>\n<textarea [froalaEditor] rows=\"7\" cols=\"50\" ngModel name=\"comment\" #comment></textarea>\n<button (click)=addComments(data._id,comment)>Comment</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/create-blog/create-blog.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/create-blog/create-blog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" (ngSubmit)=\"createblog()\" #cb=\"ngForm\">\n  <div class=a>\n    <div>\n      <label for=\"title\">TITLE</label>\n    </div>\n    <div>\n      <input ngModel name=\"title\" id=\"title\">\n    </div>\n  </div>\n  <div class=a>\n    <label for=\"description\">DESCRIPTION</label>\n    <textarea [froalaEditor] rows=\"20\" cols=\"200\" ngModel name=\"description\" id=\"description\"></textarea>\n  </div>\n\n  <div class=\"a row\">\n    <div class=\"col-sm-2\">\n      <label for=\"postType\">Post Type</label>\n    </div>\n    <div class=\"col-sm-2\">\n      <li><input type=\"radio\" ngModel name=\"postType\" value=\"public\">PUBLIC</li>\n      <li><input type=\"radio\" ngModel name=\"postType\" value=\"private\">PRIVATE</li>\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-default\">SUBMIT</button>\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ht\">\n  <div class=\"welcome\">\n    <h2>Share Your Knowledge By Creating Own Blog</h2>\n    <button class=\"create\" routerLink=\"/create-blog\">Create Blog</button>\n  </div>\n</div>\n\n<div *ngIf=\"role == 'admin'; else user\">\n  <div *ngFor=\"let blog of blogs\">\n    <div class=\"des\">\n      <h1> {{ blog.title }} </h1>\n      <div id=\"description\" innerHTML=\"{{blog.description}}\"></div>\n    </div>\n    <div class=\"delit\">\n      <button (click)=comments(blog._id) class=\"btn btn-secondary btn-md\">Comment</button>\n      <button (click)=blogEdit(blog._id) class=\"btn btn-info btn-md\">Edit</button>\n      <button (click)=\"blogDelete(blog._id)\" class=\"btn btn-danger btn-md\">Delete</button>\n    </div>\n\n  </div>\n</div>\n\n<ng-template #user>\n  <div *ngFor=\"let blog of blogs\">\n    <div class=\"des\">\n      <h1> {{ blog.title }} </h1>\n      <div innerHTML=\"{{blog.description}}\"></div>\n    </div>\n    <div class=\"delit\">\n      <span *ngFor=\"let myblog of myBlogs\">\n        <span *ngIf=\"blog._id == myblog\">\n          <button (click)=blogEdit(myblog) class=\"btn btn-info btn-md\">Edit</button>\n          <button (click)=\"blogDelete(myblog)\" class=\"btn btn-danger btn-md\">Delete</button>\n        </span>\n      </span>\n      <button class=\"btn btn-secondary btn-md\" (click)=comments(blog._id)>Comment</button>\n    </div>\n    <hr>\n  </div>\n</ng-template>\n\n<div style=\"text-align: center\">\n  <ul class=\"pagination\">\n    <li><a class=\"page-link\" (click)=\"previous()\">Previous</a></li>\n    <li *ngFor=\"let araay of araays\">\n      <a class=\"page-link\" (click)=\"pageclick(araay)\">{{araay}}</a>\n    </li>\n    <li><a class=\"page-link\" (click)=\"next()\">Next</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-blog/edit-blog.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-blog/edit-blog.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" (ngSubmit)=\"editBlog()\" #cb=\"ngForm\">\n  <div class=\"a\">\n    <div>\n      <label for=\"title\">Title</label>\n    </div>\n    <div>\n      <input [ngModel]=\"user.title\" name=\"title\" id=\"title\">\n    </div>\n  </div>\n\n  <div class=\"a\">\n    <label for=\"description\">Description</label>\n    <textarea [froalaEditor] rows=\"20\" cols=\"200\" [ngModel]=\"user.description\" name=\"description\"></textarea>\n  </div>\n\n  <div class=\"a row\">\n    <div class=\"col-sm-2\">\n      <label for=\"postType\">Post Type</label>\n    </div>\n    <div class=\"col-sm-2\">\n      <li><input type=\"radio\" ngModel name=\"postType\" value=\"public\">PUBLIC</li>\n      <li><input type=\"radio\" ngModel name=\"postType\" value=\"private\">PRIVATE</li>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">SUBMIT</button>\n\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forget-password/forget-password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forget-password/forget-password.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>ENTER EMAIL ID</h2>\n<br><br>\n<form (ngSubmit)=\"forgetPassword()\" #fp=\"ngForm\">\n  <input type=\"text\" ngModel name='email' placeholder='Enter the Registerd Email'>\n  <button type=\"submit\" class=\"btn btn-success btn-md\">RESET PASSWORD</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"ht\">\n  <div class=\"welcome\">\n    <p style=\"font-family:Verdana\">WELCOME TO BLOGU</p>\n    <h2>CREATE YOUR BLOG</h2>\n    <button class=\"btn\" routerLink=\"/register\">Start Your Blog</button>\n  </div>\n</header>\n\n<div class=\"des\" *ngFor=\"let blog of blogs\">\n  <div class=\"dat\">\n    <h1><b>{{ blog.title }}</b></h1>\n    <div innerHTML=\"{{blog.description}}\"></div>\n  </div>\n</div>\n\n<div style=\"text-align:center\">\n  <ul class=\"pagination\">\n    <li><a class=\"page-link\" (click)=\"previous()\">Previous</a></li>\n    <li *ngFor=\"let araay of araays\">\n      <a class=\"page-link\" (click)=\"pageclick(araay)\">{{araay}}</a>\n    </li>\n    <li><a class=\"page-link\" (click)=\"next()\">Next</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h2 class=\"text-center\">LOGIN</h2>\n  <hr>\n  <form (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n    <div class=\"eap\">\n      <label for=\"email\">EMAIL</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" ngModel name='email'>\n    </div>\n\n    <div class=\"eap\">\n      <label for=\"password\">PASSWORD</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" ngModel name='password'>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success mybtn\">SUBMIT</button>\n    <hr>\n    <a routerLink=\"/forgetpassword\"><span class=\"glyphicon glyphicon-user\">FORGET PASSWORD</span></a>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/my-blog/my-blog.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/my-blog/my-blog.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Your Blogs:- </h1>\n<div *ngIf=\"blogs\">\n  <div *ngIf=\"blogs.length == 0; else data\">\n    Zero\n  </div>\n  <ng-template #data>\n    <div *ngFor=\"let blog of blogs\">\n      <div class=\"des\">\n        <h2>{{blog.title}}<span style=\"color:blue;font-size:25px;\"> ({{blog.postType}})</span></h2>\n        <div id=\"description\" innerHTML=\"{{blog.description}}\"></div>\n      </div>\n      <div class=\"delit\">\n        <button (click)=blogEdit(blog._id) class=\"btn btn-info btn-md\">Edit</button>\n        <button (click)=\"blogDelete(blog._id)\" class=\"btn btn-danger btn-md\">Delete</button>\n        <hr>\n      </div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar \">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" routerLink=\"/\">BLOGU</a>\n\n    <div *ngIf=\"showToken(); else logout\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/\">Home</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-user\"></span> Sign In</a></li>\n        <li><a routerLink=\"/register\"><span class=\"glyphicon glyphicon-log-in\"></span> Get Started</a></li>\n      </ul>\n    </div>\n\n    <ng-template #logout>\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/dashboard\">Dashboard</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/myblog\"><span class=\"glyphicon glyphicon-user\"></span>My Blog</a></li>\n        <li><a routerLink=\"/profile\"><span class=\"glyphicon glyphicon-log-in\"></span>PROFILE</a></li>\n        <li><a (click)=\"onLogout()\" href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span>LOGOUT</a></li>\n      </ul>\n    </ng-template>\n  </div>\n</nav>\n\n\n<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n\n      </li>\n    </ul>\n  </div>\n</nav> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2>{{user.name}}</h2>\n  <h2>{{user.email}}</h2>\n  <a routerLink='/change-password'><span></span>Change Password</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h2 class=\"text-center\">SIGN UP</h2>\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"onRegister()\">\n\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n      <span *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\" class=\"help-block\">\n        Please Enter Valid Email.\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\"\n        pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\">\n      <span *ngIf=\"!signupForm.get('password').valid && signupForm.get('password').touched\" class=\"help-block\">\n        Please Enter Strong Password (1 digit, 1 uppercase & lowercase, min length 8 ).\n      </span>\n    </div>\n\n    <div class=\"radio\" *ngFor=\"let gender of genders\">\n      <label>\n        <input type='radio' name=\"gender\" formControlName=\"gender\" [value]=\"gender\">{{gender}}\n      </label>\n    </div>\n\n    <div *ngIf=\"buttonDisabled()\"></div>\n    <button type=\"submit\" class=\"btn btn-primary mybtn\" [disabled]=\"disableBtn\">SUBMIT</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/forget-password/forget-password.component */ "./src/app/components/forget-password/forget-password.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _components_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/create-blog/create-blog.component */ "./src/app/components/create-blog/create-blog.component.ts");
/* harmony import */ var _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/edit-blog/edit-blog.component */ "./src/app/components/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_my_blog_my_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/my-blog/my-blog.component */ "./src/app/components/my-blog/my-blog.component.ts");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");














const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'forgetpassword', component: _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgetPasswordComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
    { path: 'change-password', component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"] },
    { path: 'create-blog', component: _components_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_10__["CreateBlogComponent"] },
    { path: 'edit_blog/:id', component: _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_11__["EditBlogComponent"] },
    { path: 'myblog', component: _components_my_blog_my_blog_component__WEBPACK_IMPORTED_MODULE_12__["MyBlogComponent"] },
    { path: 'comment/:id', component: _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! froala-editor/js/plugins.pkgd.min.js */ "./node_modules/froala-editor/js/plugins.pkgd.min.js");
/* harmony import */ var froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/forget-password/forget-password.component */ "./src/app/components/forget-password/forget-password.component.ts");
/* harmony import */ var _components_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/create-blog/create-blog.component */ "./src/app/components/create-blog/create-blog.component.ts");
/* harmony import */ var _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-blog/edit-blog.component */ "./src/app/components/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_my_blog_my_blog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/my-blog/my-blog.component */ "./src/app/components/my-blog/my-blog.component.ts");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
            _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
            _components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_17__["ForgetPasswordComponent"],
            _components_create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_18__["CreateBlogComponent"],
            _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_19__["EditBlogComponent"],
            _components_my_blog_my_blog_component__WEBPACK_IMPORTED_MODULE_20__["MyBlogComponent"],
            _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_21__["CommentComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_6__["FroalaEditorModule"].forRoot(),
            angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_6__["FroalaViewModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/change-password/change-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(router, authservice) {
        this.router = router;
        this.authservice = authservice;
        this.userpass = {
            email: '',
            opassword: '',
            npassword: '',
            ncpassword: ''
        };
        var user = localStorage.getItem('user');
        user = JSON.parse(user);
        var email = user.email;
        this.userpass.email = email;
    }
    ngOnInit() {
    }
    changePassword() {
        console.log("changepassword");
        this.userpass.opassword = this.cp.value.opassword;
        this.userpass.npassword = this.cp.value.npassword;
        this.userpass.ncpassword = this.cp.value.ncpassword;
        if (this.userpass.npassword == this.userpass.ncpassword) {
            this.authservice.getChangePassword(this.userpass).subscribe((response) => {
                console.log("this is response", response);
                this.authservice.logout();
                this.router.navigate(['/login']);
            }, (error) => {
                console.log("this is error", error);
            });
        }
        else
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("New Password and Confirm Password Not Same ");
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cp', { static: false })
], ChangePasswordComponent.prototype, "cp", void 0);
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/change-password/change-password.component.html"),
        styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/change-password/change-password.component.css")]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/components/comment/comment.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/comment/comment.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/comment/comment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CommentComponent = class CommentComponent {
    constructor(authservice, router, route) {
        this.authservice = authservice;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.blogId = this.route.snapshot.params.id;
        var user = localStorage.getItem('user');
        user = JSON.parse(user);
        this.user = user;
        this.authservice.userComment({ blogId: this.blogId }).subscribe((response) => {
            this.data = response[0];
            this.comments = response[1];
            console.log(this.data);
        }, (error) => {
            console.log("this is error", error);
            this.authservice.logout();
            this.router.navigate(['/login']);
        });
    }
    addComments(blogId, comment) {
        var user = { blogId: blogId, userComments: comment.value };
        console.log("comments", comment.value);
        this.authservice.addComments(user).subscribe((response) => {
            console.log(response);
            this.ngOnInit();
        }, (error) => {
            console.log(error);
        });
    }
    delCom(comment, id) {
        console.log('here');
        this.authservice.deleteComment({ comment: comment, id: id }).subscribe((response) => {
            console.log(response);
            this.ngOnInit();
        }, (error) => {
            console.log(error);
            this.router.navigate(['/login'], { relativeTo: this.route });
        });
    }
};
CommentComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: __webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/comment/comment.component.html"),
        styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/components/comment/comment.component.css")]
    })
], CommentComponent);



/***/ }),

/***/ "./src/app/components/create-blog/create-blog.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/create-blog/create-blog.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".a{\n  margin-bottom: 2% \n}\n\nlabel{\n  font-size: 25px;\n}\n\n.container{\n  font-size: 20px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtYmxvZy9jcmVhdGUtYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtYmxvZy9jcmVhdGUtYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF7XG4gIG1hcmdpbi1ib3R0b206IDIlIFxufVxuXG5sYWJlbHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY29udGFpbmVye1xuICBmb250LXNpemU6IDIwcHhcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/create-blog/create-blog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/create-blog/create-blog.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBlogComponent", function() { return CreateBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let CreateBlogComponent = class CreateBlogComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            title: '',
            description: '',
            postType: ''
        };
    }
    ngOnInit() {
    }
    createblog() {
        this.user.title = this.cb.value.title;
        this.user.description = this.cb.value.description;
        this.user.postType = this.cb.value.postType;
        this.authService.createBlog(this.user).subscribe((response) => {
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Done");
            this.cb.reset();
        }, (error) => {
            console.log(error);
        });
    }
};
CreateBlogComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cb', { static: false })
], CreateBlogComponent.prototype, "cb", void 0);
CreateBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-blog',
        template: __webpack_require__(/*! raw-loader!./create-blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/create-blog/create-blog.component.html"),
        styles: [__webpack_require__(/*! ./create-blog.component.css */ "./src/app/components/create-blog/create-blog.component.css")]
    })
], CreateBlogComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#description{\n  font-size: 20px;\n}\n\n.ht{\n  height: 200px !important\n}\n\n.create{\n    width: 30%;\n  padding: 10px 20px;\n  background-color:rgba(255, 123, 0, 0.883);\n  color: white;\n  font-size: 22px;\n  cursor: pointer;\n  text-align: center; \n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtJQUNJLFVBQVU7RUFDWixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rlc2NyaXB0aW9ue1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5odHtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50XG59XG5cbi5jcmVhdGV7XG4gICAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAxMjMsIDAsIDAuODgzKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let DashboardComponent = class DashboardComponent {
    constructor(authservice, router, route) {
        this.authservice = authservice;
        this.router = router;
        this.route = route;
        this.araays = [];
        this.page = 1;
    }
    ngOnInit() {
        this.authservice.getDashboard({ pageNo: this.page }).subscribe((response) => {
            this.blogs = response.data;
            this.myBlogs = response.myBlogsId;
            this.totalpage = response.totalPage;
            this.role = response.role;
            this.commentsUser = response.comments;
            this.araays = [];
            for (let i = 0; i < this.totalpage; i++)
                this.araays.push(i + 1);
        }, (error) => {
            console.log("this is error", error);
            this.authservice.logout();
            this.router.navigate(['/login']);
        });
    }
    blogDelete(blogId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                blogId = { blog: blogId };
                this.authservice.deleteBlog(blogId).subscribe((response) => {
                    console.log(response);
                    this.ngOnInit();
                }, (error) => {
                    console.log(error);
                    this.router.navigate(['/login'], { relativeTo: this.route });
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
    blogEdit(blogId) {
        this.router.navigate(['/edit_blog', blogId]);
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
        this.router.navigate(['/comment', blogId]);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/edit-blog/edit-blog.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/edit-blog/edit-blog.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n  font-size: 25px;\n}\n\n.a{\n  margin-bottom: 2% \n}\n\n.container{\n  font-size: 20px\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWJsb2cvZWRpdC1ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtYmxvZy9lZGl0LWJsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5he1xuICBtYXJnaW4tYm90dG9tOiAyJSBcbn1cblxuLmNvbnRhaW5lcntcbiAgZm9udC1zaXplOiAyMHB4XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/edit-blog/edit-blog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-blog/edit-blog.component.ts ***!
  \*************************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let EditBlogComponent = class EditBlogComponent {
    constructor(authservice, router, route) {
        this.authservice = authservice;
        this.router = router;
        this.route = route;
        this.user = {
            id: '',
            title: '',
            description: '',
            postType: ''
        };
    }
    ngOnInit() {
        this.blogId = this.route.snapshot.params.id;
        this.authservice.editBlog({ id: this.blogId }).subscribe((response) => {
            this.user.title = response.title;
            this.user.description = response.description;
            this.user.postType = response.postType;
        }, (error) => {
            console.log("this is error", error);
            this.authservice.logout();
            this.router.navigate(['/login']);
        });
    }
    editBlog() {
        this.user.id = this.blogId;
        this.user.title = this.cb.value.title;
        this.user.description = this.cb.value.description;
        this.user.postType = this.cb.value.postType;
        this.authservice.updateBlog(this.user).subscribe((response) => {
            console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Done");
            // this.cb.reset();
            this.router.navigate(['/dashboard']);
        }, (error) => {
            console.log(error);
        });
    }
};
EditBlogComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cb', { static: false })
], EditBlogComponent.prototype, "cb", void 0);
EditBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-blog',
        template: __webpack_require__(/*! raw-loader!./edit-blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-blog/edit-blog.component.html"),
        styles: [__webpack_require__(/*! ./edit-blog.component.css */ "./src/app/components/edit-blog/edit-blog.component.css")]
    })
], EditBlogComponent);



/***/ }),

/***/ "./src/app/components/forget-password/forget-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/forget-password/forget-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/forget-password/forget-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forget-password/forget-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let ForgetPasswordComponent = class ForgetPasswordComponent {
    constructor(authservice) {
        this.authservice = authservice;
        this.user = {
            email: ''
        };
    }
    ngOnInit() {
    }
    forgetPassword() {
        this.user.email = this.fp.value.email;
        this.authservice.forgetPassword(this.user).subscribe((response) => {
            console.log(response);
            if (response.status === true)
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Mail Sent");
            else
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("User Not Found");
        }, (error) => {
            console.log(error);
        });
    }
};
ForgetPasswordComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fp', { static: false })
], ForgetPasswordComponent.prototype, "fp", void 0);
ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget-password',
        template: __webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forget-password/forget-password.component.html"),
        styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/components/forget-password/forget-password.component.css")]
    })
], ForgetPasswordComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.btn{\n  width: 40%;\n  padding: 14px 28px;\n  background-color:rgba(255, 123, 0, 0.883);\n  color: white;\n  font-size: 22px;\n  cursor: pointer;\n  text-align: center; \n}\n\n.dat{\n  margin-left: 20px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYnRue1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDEyMywgMCwgMC44ODMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVxuXG4uZGF0e1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.araays = [];
        this.page = 1;
    }
    ngOnInit() {
        this.authservice.getHome({ pageNo: this.page }).subscribe((response) => {
            this.blogs = response.data;
            this.totalpage = response.totalPage;
            console.log(this.totalpage);
            this.araays = [];
            for (let i = 0; i < this.totalpage; i++)
                this.araays.push(i + 1);
        }, (error) => { console.log("this is error", error); });
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
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    login() {
        console.log("login running");
        this.user.email = this.loginForm.value.email;
        this.user.password = this.loginForm.value.password;
        this.authService.loginUser(this.user).subscribe((response) => {
            console.log(response);
            if (response.msg == 'User not found')
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("User not found");
            else if (response.msg == 'Incorrect Password')
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Incorrect Password');
            else if (response.status === true) {
                this.authService.storeUserData(response.token, response.user);
                this.router.navigate(['/dashboard']);
            }
            else
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Something Wrong");
        }, (error) => {
            console.log("this is error", error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm', { static: false })
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/my-blog/my-blog.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/my-blog/my-blog.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktYmxvZy9teS1ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/my-blog/my-blog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/my-blog/my-blog.component.ts ***!
  \*********************************************************/
/*! exports provided: MyBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBlogComponent", function() { return MyBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let MyBlogComponent = class MyBlogComponent {
    constructor(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    ngOnInit() {
        this.authservice.myBlog().subscribe((response) => {
            console.log(response);
            this.blogs = response;
        }, (error) => {
            console.log("this is error", error);
            this.authservice.logout();
            this.router.navigate(['/login']);
        });
    }
    blogDelete(blogId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                blogId = { blog: blogId };
                this.authservice.deleteBlog(blogId).subscribe((response) => {
                    console.log(response);
                    this.ngOnInit();
                }, (error) => {
                    console.log(error);
                    this.router.navigate(['/login']);
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
    blogEdit(blogId) {
        console.log(blogId);
        this.router.navigate(['/edit_blog', blogId]);
    }
};
MyBlogComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MyBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-blog',
        template: __webpack_require__(/*! raw-loader!./my-blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/my-blog/my-blog.component.html"),
        styles: [__webpack_require__(/*! ./my-blog.component.css */ "./src/app/components/my-blog/my-blog.component.css")]
    })
], MyBlogComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\n  background-color: dodgerblue;\n}\n\nli a {\n  color :black;\n  font-size: 20px;\n  margin-left: 7px;\n}\n\n.navbar-brand{\n  font-family: 'Lucida Sans';\n  color: black !important;\n  font-size: 25px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbn1cblxubGkgYSB7XG4gIGNvbG9yIDpibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4ubmF2YmFyLWJyYW5ke1xuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJztcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let NavbarComponent = class NavbarComponent {
    constructor(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    ngOnInit() {
    }
    showToken() {
        if (localStorage.getItem('token_id'))
            return false;
        else
            return true;
    }
    onLogout() {
        this.authservice.logout();
        this.router.navigate(['/login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfileComponent = class ProfileComponent {
    constructor(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.imageUser = null;
    }
    ngOnInit() {
        this.authservice.getProfile().subscribe((response) => {
            console.log("Profile Component");
            this.user = response;
        }, (error) => {
            console.log("this is error", error);
            this.authservice.logout();
            this.router.navigate(['/login']);
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('up', { static: false })
], ProfileComponent.prototype, "up", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






// import { NgForm } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        // @ViewChild('f', { static: false }) regForm: NgForm;
        // user = {
        //   name: '',
        //   username: '',
        //   email: '',
        //   password: ''
        // }
        this.genders = ['Male', 'Female', 'Others'];
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Male', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    buttonDisabled() {
        if (this.signupForm.status === "VALID")
            this.disableBtn = false;
        else
            this.disableBtn = true;
    }
    onRegister() {
        console.log("running");
        console.log(this.signupForm);
        this.authService.registerUser(this.signupForm.value).subscribe((response) => {
            console.log(response);
            this.router.navigate(['/login']);
        }, (error) => {
            console.log("this is error", error);
            this.router.navigate(['/register']);
        });
        // this is used with the local reference.
        // this.user.name = this.regForm.value.name;
        // this.user.username = this.regForm.value.username;
        // this.user.email = this.regForm.value.email;
        // this.user.password = this.regForm.value.password;
        // console.log(this.user.name)
        // console.log(this.user.username)
        // console.log(this.user.email)
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    // httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000/users';
    }
    getHome(pageNo) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/home', pageNo, { headers });
    }
    registerUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/register', user, { headers });
    }
    forgetPassword(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/forgetpassword', user, { headers });
    }
    loginUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
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
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/dashboard', pageNo, { headers });
    }
    getProfile() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + '/profile', { headers });
    }
    getChangePassword(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/changePassword', user, { headers });
    }
    createBlog(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/create-blog', data, { headers });
    }
    deleteBlog(blogId) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/deleteBlog', blogId, { headers });
    }
    editBlog(blogId) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/editBlog/:' + blogId, blogId, { headers });
    }
    updateBlog(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/updateblog', data, { headers });
    }
    myBlog() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + '/myblog', { headers });
    }
    userComment(blogId) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/comments/:' + blogId, blogId, { headers });
    }
    addComments(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/addComments', data, { headers });
    }
    deleteComment(comment) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken;
        headers = headers.append('Authorization', "Bearer " + this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/deleteComment', comment, { headers });
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/deligence/Documents/blogU/blogger/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map