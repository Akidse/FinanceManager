(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/transaction/transaction.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _dbd_report_dbd_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dbd-report/dbd-report.component */ "./src/app/dbd-report/dbd-report.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]], redirectTo: '/categories', pathMatch: 'full' },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"] },
    { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'transactions', component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_3__["TransactionsComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'category/:action', component: _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'category/:action/:id', component: _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'transaction/:action', component: _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_5__["TransactionComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'transaction/:action/:id', component: _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_5__["TransactionComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_6__["ReportComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'dbdreport', component: _dbd_report_dbd_report_component__WEBPACK_IMPORTED_MODULE_7__["DbdReportComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">FinanceManager</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/categories\">Categories</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/transactions\">Transactions</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" routerLinkActive=\"active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Actions\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"/category/add\">Add category</a>\n            <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"/transaction/add\">Add transaction</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" routerLinkActive=\"active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Reports\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"/report\">Expense/Revenue report</a>\n            <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"/dbdreport\">Day-by-day report</a>\n          </div>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" *ngIf=\"!authService.isLogged\">\n        <a class=\"nav-link\" >Log In</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isLogged\">\n        <a class=\"nav-link\" routerLink=\"/auth\" (click)=\"logOut()\">Log Out</a>\n      </li>\n    </ul>\n    </div>\n  </nav>\n  <div class=\"col-sm-12\">\n  <router-outlet></router-outlet>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Finance Manager';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/transaction/transaction.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _dbd_report_dbd_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dbd-report/dbd-report.component */ "./src/app/dbd-report/dbd-report.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/esm5/ngx-webstorage-service.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"],
                _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_7__["TransactionsComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
                _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_9__["TransactionComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"],
                _dbd_report_dbd_report_component__WEBPACK_IMPORTED_MODULE_11__["DbdReportComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastNoAnimationModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                    toastComponent: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastNoAnimation"],
                }),
                angular_highcharts__WEBPACK_IMPORTED_MODULE_14__["ChartModule"],
                ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_15__["StorageServiceModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authService.getToken()) {
            this.router.navigate(['/auth']);
        }
        return (this.authService.getToken() !== undefined);
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/esm5/ngx-webstorage-service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AuthService = /** @class */ (function () {
    function AuthService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.authUrl = '/api/login';
        this.isLogged = false;
        if (this.storage.get('auth-token') !== undefined)
            this.isLogged = true;
    }
    AuthService.prototype.logIn = function (login, pass) {
        return this.http.post(this.authUrl, { 'name': login, 'password': pass });
    };
    AuthService.prototype.setToken = function (token) {
        this.storage.set('auth-token', token);
        this.isLogged = true;
    };
    AuthService.prototype.getToken = function () {
        return this.storage.get('auth-token');
    };
    AuthService.prototype.logOut = function () {
        this.storage.remove('auth-token');
        this.isLogged = false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-block\r\n{\r\n\twidth: 50%;\r\n\tmargin: auto;\r\n\tbackground-color: #F8F9FA;\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid #CED4DA;\r\n}"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authService.isLogged\" class=\"alert alert-success\">You are logged in system. Go to <a routerLink=\"/categories\">categories</a></div>\n<div *ngIf=\"!authService.isLogged\" class=\"center-block mt-2 p-2\">\n\t<div class=\"form-group\">\n\t\t<label>Login: </label>\n\t\t<input [(ngModel)]=\"login\" class=\"form-control\" type=\"text\" name=\"login\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password: </label>\n\t\t<input [(ngModel)]=\"pass\" class=\"form-control\" type=\"password\" name=\"login\">\n\t</div>\n\t<button class=\"btn btn-primary btn-block\" (click)=\"submit()\">Log in</button>\n</div>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/esm5/ngx-webstorage-service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AuthComponent = /** @class */ (function () {
    function AuthComponent(storage, authService, router, toastr) {
        this.storage = storage;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.submit = function () {
        var _this = this;
        this.authService.logIn(this.login, this.pass)
            .subscribe(function (result) {
            if (result.auth) {
                _this.authService.setToken(result.token);
                _this.toastr.success("You are logged succesfully", "Success");
                _this.router.navigateByUrl('/categories');
            }
            else {
                _this.toastr.error("Password or login is not correct", "Error");
            }
        });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [Object, _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/categories.service.ts":
/*!***************************************!*\
  !*** ./src/app/categories.service.ts ***!
  \***************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesService = /** @class */ (function () {
    function CategoriesService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.categoriesUrl = '/api/categories';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'x-access-token': this.authService.getToken() });
    }
    CategoriesService.prototype.getCategories = function () {
        return this.http.get(this.categoriesUrl, { headers: this.headers });
    };
    CategoriesService.prototype.getCategory = function (id) {
        return this.http.get(this.categoriesUrl + '/' + id, { headers: this.headers });
    };
    CategoriesService.prototype.putCategory = function (category) {
        return this.http.put(this.categoriesUrl + '/' + category._id, category, { headers: this.headers });
    };
    CategoriesService.prototype.addCategory = function (category) {
        return this.http.post(this.categoriesUrl, category, { headers: this.headers });
    };
    CategoriesService.prototype.removeCategory = function (categoryId) {
        return this.http.delete(this.categoriesUrl + '/' + categoryId, { headers: this.headers });
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"categories !== undefined && categories.length\" class=\"table table-bordered table-hover m-2 table-auto-layout\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Description</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let category of categories; let i = index\">\n      <th scope=\"row\">{{i+1}}</th>\n      <td>{{category.name}}</td>\n      <td>{{category.description}}</td>\n      <td class=\"text-center\"><button routerLink=\"/category/view/{{category._id}}\" type=\"button\" class=\"btn btn-sm btn-primary mr-2\">Edit</button><button (click)=\"removeCategory(category._id)\" type=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n<div *ngIf=\"!categories.length\" class=\"m-2 alert alert-warning\">There aren't any categories, be free to add some :)</div>\n<button class=\"m-2 btn btn-primary\" routerLink=\"/category/add\">Add category</button>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoriesService, toastr) {
        this.categoriesService = categoriesService;
        this.toastr = toastr;
        this.categories = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    CategoriesComponent.prototype.removeCategory = function (categoryId) {
        var _this = this;
        this.categoriesService.removeCategory(categoryId)
            .subscribe(function () {
            _this.toastr.success("Category was removed succesfully", "Success");
            _this.getCategories();
        });
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/category.ts":
/*!*****************************!*\
  !*** ./src/app/category.ts ***!
  \*****************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());

;


/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n\t<label>Name: </label>\n\t<input class=\"form-control\" name=\"name\" [(ngModel)]=\"category.name\">\n</div>\n<div class=\"form-group\">\n\t<label>Description: </label>\n\t<textarea class=\"form-control\" name=\"name\" [(ngModel)]=\"category.description\"></textarea>\n</div>\n<div class=\"form-group\">\n\t<button class=\"btn btn-primary\" (click)=\"submit(category)\">Save</button>\n</div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category */ "./src/app/category.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(route, location, categoriesService, toastr) {
        this.route = route;
        this.location = location;
        this.categoriesService = categoriesService;
        this.toastr = toastr;
        this.category = new _category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.parseAction();
    };
    CategoryComponent.prototype.parseAction = function () {
        this.action = this.route.snapshot.paramMap.get('action');
        if (this.action == 'view')
            return this.getCategory();
    };
    CategoryComponent.prototype.getCategory = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.categoriesService.getCategory(id)
            .subscribe(function (category) { return _this.category = category; });
    };
    CategoryComponent.prototype.submit = function (category) {
        var _this = this;
        if (category.name.length == 0) {
            this.toastr.error('Category name can not be empty', 'Something goes wrong!');
            return;
        }
        if (this.action == 'add') {
            this.categoriesService.addCategory(category)
                .subscribe(function (category) { return _this.toastr.success('Category created successfully', 'Success!'); });
            this.category = new _category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        }
        if (this.action == 'view')
            this.categoriesService.putCategory(category)
                .subscribe(function (category) { return _this.toastr.success('Category saved successfully', 'Success!'); });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/dbd-report/dbd-report.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dbd-report/dbd-report.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dbd-report/dbd-report.component.html":
/*!******************************************************!*\
  !*** ./src/app/dbd-report/dbd-report.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isChartReady\">\n<div class=\"form-group\">\n    <label>Date from YYYY.MM.DD:</label>\n\t<input class=\"form-control\" type=\"date\" name=\"date_created_from\" [(ngModel)]=\"report.date_created_from\">\n</div>\n<div class=\"form-group\">\n    <label>Date till YYYY.MM.DD:</label>\n\t<input class=\"form-control\" type=\"date\" name=\"date_created_till\" [(ngModel)]=\"report.date_created_till\">\n</div>\n<div class=\"form-group\">\n    <label>Operation type:</label>\n\t<select class=\"form-control\" name=\"type\" [(ngModel)]=\"report.type\">\n\t\t<option value=\"expense\">Expense</option>\n\t\t<option value=\"revenue\">Revenue</option>\n\t</select>\n</div>\n<div class=\"form-group\">\n    <label>Category:</label>\n\t<select class=\"form-control\" name=\"type\" [(ngModel)]=\"report.category\">\n\t\t<option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.name}}</option>\n\t</select>\n</div>\n<div class=\"form-group\">\n\t<button class=\"btn btn-primary\" (click)=\"submit()\">Create report</button>\n</div>\n</div>\n<div *ngIf=\"isChartReady\">\n\t<div *ngIf=\"transactions.length == 0\" class=\"m-2 alert alert-warning\">\n\t\tThere aren't any transactions in this report. \n\t\t<button class=\"btn btn-primary\" (click)=\"regenerateReport()\">Regenerate report</button>\n\t</div>\n\t<div *ngIf=\"transactions.length != 0\"style=\"height: 400px;\">\n\t\t<div [chart]=\"chart\"></div>\n\t</div>\n\t<button class=\"btn btn-primary\" (click)=\"regenerateReport()\">Regenerate report</button>\n</div>\n"

/***/ }),

/***/ "./src/app/dbd-report/dbd-report.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dbd-report/dbd-report.component.ts ***!
  \****************************************************/
/*! exports provided: DbdReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbdReportComponent", function() { return DbdReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report */ "./src/app/report.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DbdReportComponent = /** @class */ (function () {
    function DbdReportComponent(categoriesService, transactionsService, toastr) {
        this.categoriesService = categoriesService;
        this.transactionsService = transactionsService;
        this.toastr = toastr;
        this.isChartReady = false;
        this.report = new _report__WEBPACK_IMPORTED_MODULE_2__["Report"]();
        this.reportCategoriesData = [];
    }
    DbdReportComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    DbdReportComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    DbdReportComponent.prototype.getTransactions = function (report) {
        var _this = this;
        this.transactionsService.getTransactions(report)
            .subscribe(function (transactions) {
            _this.transactions = transactions;
            _this.generateReport();
        });
    };
    DbdReportComponent.prototype.generateReport = function () {
        var reportData = {};
        var reportCategoriesData = [];
        this.transactions.forEach(function (transaction) {
            if (reportData[transaction.date_created.toString()] === undefined)
                reportData[transaction.date_created.toString()] = {
                    'date': transaction.date_created,
                    'y': transaction.total
                };
            else
                reportData[transaction.date_created.toString()].y += transaction.total;
        });
        for (var key in reportData) {
            var date = new Date(reportData[key].date);
            this.reportCategoriesData.push([
                Date.UTC(date.getFullYear(), date.getUTCMonth() + 1, date.getUTCDate()),
                reportData[key]['y']
            ]);
        }
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            title: {
                text: 'Chart of ' + this.report.type + ' for period'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            series: [{
                    name: this.getCategoryName(this.report.category),
                    data: this.reportCategoriesData
                }]
        });
        this.isChartReady = true;
        this.toastr.success("Report generated", "Success");
    };
    DbdReportComponent.prototype.getCategoryName = function (categoryId) {
        var category = this.categories.find(function (category) { return category._id == categoryId; });
        if (category == null)
            return "undefined";
        else
            return category.name;
    };
    DbdReportComponent.prototype.submit = function () {
        if (this.report.date_created_from > this.report.date_created_till) {
            this.toastr.error("'Date from' can not be more then 'date till'", "Something wrong");
            return;
        }
        if (this.report.category == null) {
            this.toastr.error("Category can not be empty", "Something wrong");
            return;
        }
        this.getTransactions(this.report);
    };
    DbdReportComponent.prototype.regenerateReport = function () {
        this.report = new _report__WEBPACK_IMPORTED_MODULE_2__["Report"]();
        this.reportCategoriesData = [];
        this.isChartReady = false;
        this.transactions = [];
    };
    DbdReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dbd-report',
            template: __webpack_require__(/*! ./dbd-report.component.html */ "./src/app/dbd-report/dbd-report.component.html"),
            styles: [__webpack_require__(/*! ./dbd-report.component.css */ "./src/app/dbd-report/dbd-report.component.css")]
        }),
        __metadata("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"],
            _transactions_service__WEBPACK_IMPORTED_MODULE_4__["TransactionsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], DbdReportComponent);
    return DbdReportComponent;
}());



/***/ }),

/***/ "./src/app/report.ts":
/*!***************************!*\
  !*** ./src/app/report.ts ***!
  \***************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
var Report = /** @class */ (function () {
    function Report() {
        this.type = "expense";
    }
    return Report;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isChartReady\">\n<div class=\"form-group\">\n    <label>Date from YYYY.MM.DD:</label>\n\t<input class=\"form-control\" type=\"date\" name=\"date_created_from\" [(ngModel)]=\"report.date_created_from\">\n</div>\n<div class=\"form-group\">\n    <label>Date till YYYY.MM.DD:</label>\n\t<input class=\"form-control\" type=\"date\" name=\"date_created_till\" [(ngModel)]=\"report.date_created_till\">\n</div>\n<div class=\"form-group\">\n    <label>Operation type:</label>\n\t<select class=\"form-control\" name=\"type\" [(ngModel)]=\"report.type\">\n\t\t<option ng-selected=\"!isChartReady\" value=\"expense\">Expense</option>\n\t\t<option value=\"revenue\">Revenue</option>\n\t</select>\n</div>\n<div class=\"form-group\">\n\t<button class=\"btn btn-primary\" (click)=\"submit()\">Create report</button>\n</div>\n</div>\n<div *ngIf=\"isChartReady\">\n\t<div *ngIf=\"transactions.length == 0\" class=\"m-2 alert alert-warning\">\n\t\tThere aren't any transactions in this report. \n\t\t<button class=\"btn btn-primary\" (click)=\"regenerateReport()\">Regenerate report</button>\n\t</div>\n\t<div *ngIf=\"transactions.length != 0\" class=\"row\" style=\"height: 400px;\">\n\t\t<div class=\"col-4 p-2\">\n\t\t\t<table class=\"table\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Category</th>\n\t\t\t\t\t<th>Percent</th>\n\t\t\t\t</tr>\n\t\t\t\t<tr *ngFor=\" let category of reportCategoriesData \">\n\t\t\t\t\t<td>{{category.name}}</td>\n\t\t\t\t\t<td>{{category.y | number: '1.2-2'}}%</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=\"2\" class=\"text-right\">\n\t\t\t\t\t\tTotal: {{reportTotalSum}}\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=\"2\">\n\t\t\t\t\t\t<button class=\"btn btn-block btn-primary\" (click)=\"regenerateReport()\">Regenerate report</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\t\t<div class=\"col-8\" [chart]=\"chart\"></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report */ "./src/app/report.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportComponent = /** @class */ (function () {
    function ReportComponent(categoriesService, transactionsService, toastr) {
        this.categoriesService = categoriesService;
        this.transactionsService = transactionsService;
        this.toastr = toastr;
        this.isChartReady = false;
        this.report = new _report__WEBPACK_IMPORTED_MODULE_2__["Report"]();
        this.reportCategoriesData = [];
        this.reportTotalSum = 0;
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Linechart'
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Line 1',
                    data: [1, 2, 3]
                }]
        });
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    ReportComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    ReportComponent.prototype.getTransactions = function (report) {
        var _this = this;
        this.transactionsService.getTransactions(report)
            .subscribe(function (transactions) {
            _this.transactions = transactions;
            _this.generateReport();
        });
    };
    ReportComponent.prototype.generateReport = function () {
        var _this = this;
        var reportData = {};
        var sum = 0;
        this.transactions.forEach(function (transaction) {
            _this.reportTotalSum += transaction.total;
            if (reportData[transaction.category] === undefined)
                reportData[transaction.category] = {
                    'name': _this.getCategoryName(transaction.category),
                    'y': transaction.total
                };
            else
                reportData[transaction.category].y += transaction.total;
        });
        for (var key in reportData) {
            reportData[key].y = (reportData[key].y / this.reportTotalSum) * 100;
            this.reportCategoriesData.push(reportData[key]);
        }
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Chart of ' + this.report.type + ' by categories till period'
            },
            tooltip: {
                pointFormat: '{point.name}: <b>{point.percentage:.2f}%</b>'
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Categories',
                    data: this.reportCategoriesData
                }]
        });
        this.isChartReady = true;
        this.toastr.success("Report generated", "Success");
    };
    ReportComponent.prototype.getCategoryName = function (categoryId) {
        var category = this.categories.find(function (category) { return category._id == categoryId; });
        if (category == null)
            return "undefined";
        else
            return category.name;
    };
    ReportComponent.prototype.submit = function () {
        if (this.report.date_created_from > this.report.date_created_till) {
            this.toastr.error("'Date from' can not be more then 'date till'", "Something wrong");
            return;
        }
        this.getTransactions(this.report);
    };
    ReportComponent.prototype.regenerateReport = function () {
        this.report = new _report__WEBPACK_IMPORTED_MODULE_2__["Report"]();
        this.reportCategoriesData = [];
        this.reportTotalSum = 0;
        this.isChartReady = false;
        this.transactions = [];
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"],
            _transactions_service__WEBPACK_IMPORTED_MODULE_4__["TransactionsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/transaction.ts":
/*!********************************!*\
  !*** ./src/app/transaction.ts ***!
  \********************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());



/***/ }),

/***/ "./src/app/transaction/transaction.component.css":
/*!*******************************************************!*\
  !*** ./src/app/transaction/transaction.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transaction/transaction.component.html":
/*!********************************************************!*\
  !*** ./src/app/transaction/transaction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n\t<label>Category: </label>\n\t<select class=\"form-control\" name=\"category\" [(ngModel)]=\"transaction.category\">\n\t\t<option *ngFor=\" let category of categories \" value=\"{{category._id}}\">{{category.name}}</option>\n\t</select>\n</div>\n<div class=\"form-group\">\n\t<label>Type: </label>\n\t<select class=\"form-control\" name=\"type\" [(ngModel)]=\"transaction.type\">\n\t\t<option value=\"expense\">Expense</option>\n\t\t<option value=\"revenue\">Revenue</option>\n\t</select>\n</div>\n<div class=\"form-group\">\n\t<label>Total: </label>\n\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"transaction.total\" name=\"total\">\n</div>\n<div class=\"form-group\">\n\t<label>Description: </label>\n\t<textarea class=\"form-control\" [(ngModel)]=\"transaction.description\" name=\"total\"></textarea>\n</div>\n<div class=\"form-group\">\n\t<label>Date DD.MM.YYYY: </label>\n\t<input class=\"form-control\" type=\"date\" [ngModel]=\"transaction.date_created | date:'yyyy-MM-dd'\" (ngModelChange)=\"transaction.date_created=$event\" name=\"date_created\">\n</div>\n<div class=\"form-group\">\n\t<button class=\"btn btn-primary\" (click)=\"submit(transaction)\">Save</button>\n</div>"

/***/ }),

/***/ "./src/app/transaction/transaction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/transaction/transaction.component.ts ***!
  \******************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transaction */ "./src/app/transaction.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(categoriesService, transactionsService, toastr, route, location) {
        this.categoriesService = categoriesService;
        this.transactionsService = transactionsService;
        this.toastr = toastr;
        this.route = route;
        this.location = location;
        this.transaction = new _transaction__WEBPACK_IMPORTED_MODULE_3__["Transaction"]();
    }
    TransactionComponent.prototype.ngOnInit = function () {
        this.parseAction();
        this.getCategories();
    };
    TransactionComponent.prototype.parseAction = function () {
        this.action = this.route.snapshot.paramMap.get('action');
        if (this.action == 'view')
            return this.getTransaction();
    };
    TransactionComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    TransactionComponent.prototype.getTransaction = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.transactionsService.getTransaction(id)
            .subscribe(function (transaction) { return _this.transaction = transaction; });
    };
    TransactionComponent.prototype.submit = function (transaction) {
        var _this = this;
        if (transaction.category.length == 0) {
            this.toastr.error('Category is wrong', 'Something goes wrong!');
            return;
        }
        if (transaction.total <= 0) {
            this.toastr.error('Total can not be zero or less', 'Something goes wrong!');
            return;
        }
        if (this.action == 'add') {
            if (!transaction.date_created)
                transaction.date_created = new Date();
            this.transactionsService.addTransaction(transaction)
                .subscribe(function (transaction) { return _this.toastr.success('Transaction created successfully', 'Success!'); });
            this.transaction = new _transaction__WEBPACK_IMPORTED_MODULE_3__["Transaction"]();
        }
        if (this.action == 'view')
            this.transactionsService.putTransaction(transaction)
                .subscribe(function (transaction) { return _this.toastr.success('Transaction saved successfully', 'Success!'); });
    };
    TransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__(/*! ./transaction.component.html */ "./src/app/transaction/transaction.component.html"),
            styles: [__webpack_require__(/*! ./transaction.component.css */ "./src/app/transaction/transaction.component.css")]
        }),
        __metadata("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
            _transactions_service__WEBPACK_IMPORTED_MODULE_5__["TransactionsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/transactions.service.ts":
/*!*****************************************!*\
  !*** ./src/app/transactions.service.ts ***!
  \*****************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpObjects = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/jsonp' })
};
var TransactionsService = /** @class */ (function () {
    function TransactionsService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.transactionsUrl = '/api/transactions';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'x-access-token': this.authService.getToken() });
    }
    TransactionsService.prototype.getTransactions = function (params) {
        return this.http.get(this.transactionsUrl, { params: params, headers: this.headers });
    };
    TransactionsService.prototype.getTransaction = function (id) {
        return this.http.get(this.transactionsUrl + '/' + id, { headers: this.headers });
    };
    TransactionsService.prototype.putTransaction = function (transaction) {
        return this.http.put(this.transactionsUrl + '/' + transaction._id, transaction, { headers: this.headers });
    };
    TransactionsService.prototype.addTransaction = function (transaction) {
        return this.http.post(this.transactionsUrl, transaction, { headers: this.headers });
    };
    TransactionsService.prototype.removeTransaction = function (categoryId) {
        return this.http.delete(this.transactionsUrl + '/' + categoryId, { headers: this.headers });
    };
    TransactionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TransactionsService);
    return TransactionsService;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.component.css":
/*!*********************************************************!*\
  !*** ./src/app/transactions/transactions.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transactions/transactions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"transactions !== undefined && transactions.length\"><div class=\"row m-2\">\n  <select class=\"col-3 form-control\" (change)=\"onFilterChanged($event.target.value)\">\n    <option value=\"all\" selected>Filter by category</option>\n    <option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.name}}</option>\n  </select>\n  </div>\n  <table class=\"table table-bordered table-hover m-2\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">Operation type</th>\n        <th scope=\"col\">Total</th>\n        <th scope=\"col\">Date</th>\n        <th scope=\"col\">Description</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\" let transaction of transactions; let i = index \">\n        <th scope=\"row\">{{i+1}}</th>\n        <td>{{getCategoryName(transaction.category)}}</td>\n        <td>{{transaction.type}}</td>\n        <td>{{transaction.total}}</td>\n        <td>{{transaction.date_created | date}}</td>\n        <td>{{transaction.description}}</td>\n        <td class=\"text-center\"><button routerLink=\"/transaction/view/{{transaction._id}}\" type=\"button\" class=\"btn btn-sm btn-primary mr-2\">Edit</button><button (click)=\"removeTransaction(transaction._id)\" type=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div *ngIf=\"!transactions.length\" class=\"m-2 alert alert-warning\">There aren't any transactions, be free to add some :)</div>\n<button class=\"m-2 btn btn-primary\" routerLink=\"/transaction/add\">Add transaction</button>\n"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(transactionsService, categoriesService, toastr) {
        this.transactionsService = transactionsService;
        this.categoriesService = categoriesService;
        this.toastr = toastr;
        this.transactions = [];
        this.categories = [];
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.getTransactions();
    };
    TransactionsComponent.prototype.getTransactions = function () {
        var _this = this;
        this.transactionsService.getTransactions()
            .subscribe(function (transactions) { return _this.transactions = transactions; });
    };
    TransactionsComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    TransactionsComponent.prototype.getCategoryName = function (categoryId) {
        if (this.categories === undefined)
            return "undefined";
        var category = this.categories.find(function (cat) { return cat._id === categoryId; });
        return (category === undefined ? "undefined" : category.name);
    };
    TransactionsComponent.prototype.removeTransaction = function (transactionId) {
        var _this = this;
        this.transactionsService.removeTransaction(transactionId)
            .subscribe(function () {
            _this.toastr.success("Transaction was removed succesfully", "Success");
            _this.getTransactions();
        });
    };
    TransactionsComponent.prototype.onFilterChanged = function (categoryId) {
        var _this = this;
        if (categoryId === "all") {
            this.transactionsService.getTransactions()
                .subscribe(function (transactions) { return _this.transactions = transactions; });
            return;
        }
        this.transactionsService.getTransactions({ 'category': categoryId })
            .subscribe(function (transactions) { return _this.transactions = transactions; });
    };
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.css */ "./src/app/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [_transactions_service__WEBPACK_IMPORTED_MODULE_1__["TransactionsService"],
            _categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\development\nodejs\financemanager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map