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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div [hidden]=\"isLoading() === false\">\r\n    <app-loader></app-loader>\r\n  </div>\r\n\r\n  <div class=\"page\" [hidden]=\"isLoading() === true\">\r\n\r\n    <div class=\"content\">\r\n      <app-header class=\"header\"></app-header>\r\n      <router-outlet class=\"router-flex\" #o=\"outlet\"></router-outlet>\r\n    </div>\r\n\r\n    <div class=\"footer\">\r\n      <app-footer></app-footer>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh; }\n\n.content {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column; }\n\n.header {\n  flex: 0 1 auto; }\n\n.footer {\n  flex-shrink: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzaW1vbnNcXHNvdXJjZVxccmVwb3NcXHNpbW9zYWJiYVxcU2Fuc0FwcFxcc3JjXFxXZWJBcHBcXFNhbnNBcHAuQW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsY0FBYTtFQUNiLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudCB7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyIHtcclxuICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyIHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuICAiXX0= */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isAppReady = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.isAppReady = true;
        }, 1500);
    };
    AppComponent.prototype.isLoading = function () {
        return !this.isAppReady;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/loader/loader.component */ "./src/app/components/layout/loader/loader.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- Footer -->\r\n    <footer class=\"py-3 bg-light\">\r\n      <div class=\"container\">\r\n        <p class=\"m-0 text-center\">Copyright &copy; SansApp {{year}}</p>\r\n      </div>\r\n    </footer>\r\n    "

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id=\"mainNav\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/\">SansApp</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        \r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link,\n.dropdown-item {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL0M6XFxVc2Vyc1xcc2ltb25zXFxzb3VyY2VcXHJlcG9zXFxzaW1vc2FiYmFcXFNhbnNBcHBcXHNyY1xcV2ViQXBwXFxTYW5zQXBwLkFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxheW91dFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rLFxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/layout/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\"></div>\r\n<div class=\"shadow\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/layout/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/loader/loader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes mainAnimation {\n  0% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 150px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(0deg);\n            transform: translateX(-50px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 150px;\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    -webkit-transform: translateX(-150px) translateY(0px) rotate(90deg);\n            transform: translateX(-150px) translateY(0px) rotate(90deg); }\n  80% {\n    width: 50px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(90deg);\n            transform: translateX(-25px) translateY(0px) rotate(90deg); }\n  100% {\n    width: 50px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(90deg);\n            transform: translateX(-50px) translateY(0px) rotate(90deg); } }\n\n@keyframes mainAnimation {\n  0% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 150px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(0deg);\n            transform: translateX(-50px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 150px;\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    -webkit-transform: translateX(-150px) translateY(0px) rotate(90deg);\n            transform: translateX(-150px) translateY(0px) rotate(90deg); }\n  80% {\n    width: 50px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(90deg);\n            transform: translateX(-25px) translateY(0px) rotate(90deg); }\n  100% {\n    width: 50px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(90deg);\n            transform: translateX(-50px) translateY(0px) rotate(90deg); } }\n\n@-webkit-keyframes secundaryAnimation {\n  0% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  40% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  60% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  80% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  100% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); } }\n\n@keyframes secundaryAnimation {\n  0% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  40% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  60% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  80% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  100% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); } }\n\n@-webkit-keyframes shadowAnimation {\n  0% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 200px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  80% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  100% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); } }\n\n@keyframes shadowAnimation {\n  0% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 200px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  80% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  100% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); } }\n\n@-webkit-keyframes float {\n  0% {\n    top: 50%; }\n  50% {\n    top: 51%; }\n  100% {\n    top: 50%; } }\n\n@keyframes float {\n  0% {\n    top: 50%; }\n  50% {\n    top: 51%; }\n  100% {\n    top: 50%; } }\n\nhtml, body {\n  height: 100%; }\n\nbody {\n  position: relative;\n  background: #99d2e4;\n  background: linear-gradient(135deg, #99d2e4 0%, #ffd4da 100%); }\n\n.loader {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50%;\n  left: 50%;\n  margin-top: -25px;\n  margin-left: -25px;\n  background-color: #FFF5A5;\n  -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n          transform: translateX(0px) translateY(0px) rotate(0deg);\n  -webkit-animation: mainAnimation 2.6s ease 0s infinite forwards;\n          animation: mainAnimation 2.6s ease 0s infinite forwards;\n  z-index: 2; }\n\n.loader:after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 0;\n    left: -50px;\n    background-color: #FFF5A5;\n    -webkit-transform-origin: top right;\n            transform-origin: top right;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg);\n    -webkit-animation: secundaryAnimation 2.6s ease 0s infinite forwards;\n            animation: secundaryAnimation 2.6s ease 0s infinite forwards; }\n\n.shadow {\n  position: absolute;\n  width: 100px;\n  height: 10px;\n  top: 50%;\n  left: 50%;\n  margin-top: 50px;\n  margin-left: -75px;\n  border-radius: 50%;\n  background-color: #95a5a6;\n  -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n          transform: translateX(0px) translateY(0px) rotate(0deg);\n  -webkit-animation: shadowAnimation 2.6s ease 0s infinite forwards,\r float 5s ease-in-out 0s infinite forwards;\n          animation: shadowAnimation 2.6s ease 0s infinite forwards,\r float 5s ease-in-out 0s infinite forwards;\n  z-index: 1; }\n\n.logo {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  width: 42px;\n  height: 42px;\n  padding: 12px 5px;\n  margin-left: -21px;\n  box-sizing: border-box;\n  background-color: white;\n  border-radius: 50%;\n  transition: -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.logo:hover {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4); }\n\n.logo img {\n    width: 100%;\n    height: auto;\n    margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbG9hZGVyL0M6XFxVc2Vyc1xcc2ltb25zXFxzb3VyY2VcXHJlcG9zXFxzaW1vc2FiYmFcXFNhbnNBcHBcXHNyY1xcV2ViQXBwXFxTYW5zQXBwLkFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxheW91dFxcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDQztJQUNDLFlBQVc7SUFDWCxnRUFBdUQ7WUFBdkQsd0RBQXVELEVBQUE7RUFFeEQ7SUFDQyxZQUFXO0lBQ1gsZ0VBQXVEO1lBQXZELHdEQUF1RCxFQUFBO0VBRXhEO0lBQ0MsYUFBWTtJQUNaLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQTtFQUUxRDtJQUNDLGFBQVk7SUFDWix1Q0FBOEI7WUFBOUIsK0JBQThCO0lBQzlCLG9FQUEyRDtZQUEzRCw0REFBMkQsRUFBQTtFQUU1RDtJQUNDLFlBQVc7SUFDWCxtRUFBMEQ7WUFBMUQsMkRBQTBELEVBQUE7RUFFM0Q7SUFDQyxZQUFXO0lBQ1gsbUVBQTBEO1lBQTFELDJEQUEwRCxFQUFBLEVBQUE7O0FBeEI1RDtFQUNDO0lBQ0MsWUFBVztJQUNYLGdFQUF1RDtZQUF2RCx3REFBdUQsRUFBQTtFQUV4RDtJQUNDLFlBQVc7SUFDWCxnRUFBdUQ7WUFBdkQsd0RBQXVELEVBQUE7RUFFeEQ7SUFDQyxhQUFZO0lBQ1osa0VBQXlEO1lBQXpELDBEQUF5RCxFQUFBO0VBRTFEO0lBQ0MsYUFBWTtJQUNaLHVDQUE4QjtZQUE5QiwrQkFBOEI7SUFDOUIsb0VBQTJEO1lBQTNELDREQUEyRCxFQUFBO0VBRTVEO0lBQ0MsWUFBVztJQUNYLG1FQUEwRDtZQUExRCwyREFBMEQsRUFBQTtFQUUzRDtJQUNDLFlBQVc7SUFDWCxtRUFBMEQ7WUFBMUQsMkRBQTBELEVBQUEsRUFBQTs7QUFHNUQ7RUFDQztJQUNDLGdFQUF1RDtZQUF2RCx3REFBdUQsRUFBQTtFQUV4RDtJQUNDLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQTtFQUUxRDtJQUNDLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQTtFQUUxRDtJQUNDLGdFQUF1RDtZQUF2RCx3REFBdUQsRUFBQTtFQUV4RDtJQUNDLGdFQUF1RDtZQUF2RCx3REFBdUQsRUFBQTtFQUV4RDtJQUNDLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQSxFQUFBOztBQWpCM0Q7RUFDQztJQUNDLGdFQUF1RDtZQUF2RCx3REFBdUQsRUFBQTtFQUV4RDtJQUNDLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQTtFQUUxRDtJQUNDLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQTtFQUUxRDtJQUNDLGdFQUF1RDtZQUF2RCx3REFBdUQsRUFBQTtFQUV4RDtJQUNDLGdFQUF1RDtZQUF2RCx3REFBdUQsRUFBQTtFQUV4RDtJQUNDLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQSxFQUFBOztBQUczRDtFQUNDO0lBQ0MsYUFBWTtJQUNaLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQTtFQUUxRDtJQUNDLFlBQVc7SUFDWCxtRUFBMEQ7WUFBMUQsMkRBQTBELEVBQUE7RUFFM0Q7SUFDQyxhQUFZO0lBQ1osa0VBQXlEO1lBQXpELDBEQUF5RCxFQUFBO0VBRTFEO0lBQ0MsWUFBVztJQUNYLG1FQUEwRDtZQUExRCwyREFBMEQsRUFBQTtFQUUzRDtJQUNDLFlBQVc7SUFDWCxtRUFBMEQ7WUFBMUQsMkRBQTBELEVBQUE7RUFFM0Q7SUFDQyxhQUFZO0lBQ1osa0VBQXlEO1lBQXpELDBEQUF5RCxFQUFBLEVBQUE7O0FBdkIzRDtFQUNDO0lBQ0MsYUFBWTtJQUNaLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQTtFQUUxRDtJQUNDLFlBQVc7SUFDWCxtRUFBMEQ7WUFBMUQsMkRBQTBELEVBQUE7RUFFM0Q7SUFDQyxhQUFZO0lBQ1osa0VBQXlEO1lBQXpELDBEQUF5RCxFQUFBO0VBRTFEO0lBQ0MsWUFBVztJQUNYLG1FQUEwRDtZQUExRCwyREFBMEQsRUFBQTtFQUUzRDtJQUNDLFlBQVc7SUFDWCxtRUFBMEQ7WUFBMUQsMkRBQTBELEVBQUE7RUFFM0Q7SUFDQyxhQUFZO0lBQ1osa0VBQXlEO1lBQXpELDBEQUF5RCxFQUFBLEVBQUE7O0FBRzNEO0VBQ0M7SUFDQyxTQUFRLEVBQUE7RUFFVDtJQUNDLFNBQVEsRUFBQTtFQUVUO0lBQ0MsU0FBUSxFQUFBLEVBQUE7O0FBUlY7RUFDQztJQUNDLFNBQVEsRUFBQTtFQUVUO0lBQ0MsU0FBUSxFQUFBO0VBRVQ7SUFDQyxTQUFRLEVBQUEsRUFBQTs7QUFLVjtFQUNDLGFBQVksRUFDWjs7QUFDRDtFQUNDLG1CQUFrQjtFQUNsQixvQkFBNEI7RUFDNUIsOERBQThFLEVBQzlFOztBQUVEO0VBQ0MsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osU0FBUTtFQUNSLFVBQVM7RUFDVCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLDBCQTVHYztFQTZHZCxnRUFBdUQ7VUFBdkQsd0RBQXVEO0VBQ3ZELGdFQUF1RDtVQUF2RCx3REFBdUQ7RUFDdkQsV0FBVSxFQWNWOztBQXpCRDtJQWFFLFlBQVc7SUFDWCxzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxhQUFZO0lBQ1osT0FBTTtJQUNOLFlBQVc7SUFDWCwwQkF4SGE7SUF5SGIsb0NBQTJCO1lBQTNCLDRCQUEyQjtJQUMzQixnRUFBdUQ7WUFBdkQsd0RBQXVEO0lBQ3ZELHFFQUE0RDtZQUE1RCw2REFBNEQsRUFDNUQ7O0FBR0Y7RUFDQyxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVk7RUFDWixTQUFRO0VBQ1IsVUFBUztFQUNULGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixnRUFBdUQ7VUFBdkQsd0RBQXVEO0VBQ3ZELDhHQUdBO1VBSEEsc0dBR0E7RUNqQ0MsV0FBVyxFQUFFOztBQUVmO0VEb0NDLG1CQUFZO0VBQ1osYUFBUztFQUNULFVBQU87RUFDUCxZQUFZO0VBQ1osYUFBUztFQUNULGtCQUFrQjtFQUNsQixtQkFBWTtFQUNaLHVCQUF1QjtFQUN2Qix3QkFBa0I7RUFDbEIsbUJBQVk7RUFYYiwyRUFZUztFQVpULG1FQVlTO0VBWlQsbUlBWVMsRUFBQTs7QUNsQ1A7SURzQkYsOEJBZUs7WUFmTCxzQkFlSyxFQUFBOztBQ25DSDtJRHFDQSxZQUFZO0lBQ1osYUFBUTtJQ25DTixlQUFlLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3IgdmFyaWFibGVzXHJcbiRtYWluIDogI0ZGRjVBNTtcclxuJHNlY3VuZGFyeSA6ICNGRkQ0REE7XHJcbiR0ZXJjaGlhcnkgOiAjOTlEMkU0O1xyXG5cclxuLy8gYW5pbWF0aW9uIGtleWZyYW1lc1xyXG5Aa2V5ZnJhbWVzIG1haW5BbmltYXRpb24ge1xyXG5cdDAlIHtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcblx0MjAlIHtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcblx0NDAlIHtcclxuXHRcdHdpZHRoOiAxNTBweDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcblx0NjAlIHtcclxuXHRcdHdpZHRoOiAxNTBweDtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoOTBkZWcpO1xyXG5cdH1cclxuXHQ4MCUge1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1cHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoOTBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDkwZGVnKTtcclxuXHR9XHJcbn1cclxuQGtleWZyYW1lcyBzZWN1bmRhcnlBbmltYXRpb24ge1xyXG5cdDAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDIwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDE4MGRlZyk7XHJcblx0fVxyXG5cdDQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDE4MGRlZyk7XHJcblx0fVxyXG5cdDYwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQ4MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDE4MGRlZyk7XHJcblx0fVxyXG59XHJcbkBrZXlmcmFtZXMgc2hhZG93QW5pbWF0aW9uIHtcclxuXHQwJSB7XHJcblx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1cHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDIwJSB7XHJcblx0XHR3aWR0aDogNzVweDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNy41cHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDQwJSB7XHJcblx0XHR3aWR0aDogMjAwcHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1cHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDYwJSB7XHJcblx0XHR3aWR0aDogNzVweDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNy41cHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDgwJSB7XHJcblx0XHR3aWR0aDogNzVweDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNy41cHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xyXG5cdH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcclxuXHQwJSB7XHJcblx0XHR0b3A6IDUwJTtcclxuXHR9XHJcblx0NTAlIHtcclxuXHRcdHRvcDogNTElO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHRvcDogNTAlO1xyXG5cdH1cclxufVxyXG5cclxuLy8gU3R5bGluZ1xyXG5odG1sLCBib2R5IHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYm9keSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJhY2tncm91bmQ6IHJnYigxNTMsMjEwLDIyOCk7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDE1MywyMTAsMjI4KSAwJSxyZ2IoMjU1LDIxMiwyMTgpIDEwMCUpO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDUwcHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRtYXJnaW4tdG9wOiAtMjVweDtcclxuXHRtYXJnaW4tbGVmdDogLTI1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJG1haW47XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuXHRhbmltYXRpb246IG1haW5BbmltYXRpb24gMi42cyBlYXNlIDBzIGluZmluaXRlIGZvcndhcmRzO1xyXG5cdHotaW5kZXg6IDI7XHJcblx0JjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogLTUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbjtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0XHRhbmltYXRpb246IHNlY3VuZGFyeUFuaW1hdGlvbiAyLjZzIGVhc2UgMHMgaW5maW5pdGUgZm9yd2FyZHM7XHJcblx0fVxyXG59XHJcblxyXG4uc2hhZG93IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRtYXJnaW4tbGVmdDogLTc1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM5NWE1YTY7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuXHRhbmltYXRpb246IHNoYWRvd0FuaW1hdGlvbiAyLjZzIGVhc2UgMHMgaW5maW5pdGUgZm9yd2FyZHMsXHJcblx0XHRcdFx0XHRcdCBmbG9hdCA1cyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcztcclxuXHR6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vLyBNRCBMb2dvIC0gIWNsaWNrIHRvIHNlZSBtb3JlIGF3ZXNvbWUgd29yayFcclxuLmxvZ28ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDIwcHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdHdpZHRoOiA0MnB4O1xyXG5cdGhlaWdodDogNDJweDtcclxuXHRwYWRkaW5nOiAxMnB4IDVweDtcclxuXHRtYXJnaW4tbGVmdDogLTIxcHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGN1YmljLWJlemllcigwLjY4MCwgLTAuNTUwLCAwLjI2NSwgMS41NTApO1xyXG5cdCY6aG92ZXIge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xyXG5cdH1cclxuXHRpbWcge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcbn0iLCJAa2V5ZnJhbWVzIG1haW5BbmltYXRpb24ge1xuICAwJSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICAyMCUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7IH1cbiAgNDAlIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9XG4gIDYwJSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDkwZGVnKTsgfVxuICA4MCUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjVweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg5MGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDkwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgc2VjdW5kYXJ5QW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7IH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDE4MGRlZyk7IH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDE4MGRlZyk7IH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDE4MGRlZyk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHNoYWRvd0FuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9XG4gIDIwJSB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM3LjVweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICA0MCUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1cHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7IH1cbiAgNjAlIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzcuNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9XG4gIDgwJSB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM3LjVweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9IH1cblxuQGtleWZyYW1lcyBmbG9hdCB7XG4gIDAlIHtcbiAgICB0b3A6IDUwJTsgfVxuICA1MCUge1xuICAgIHRvcDogNTElOyB9XG4gIDEwMCUge1xuICAgIHRvcDogNTAlOyB9IH1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG5ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjOTlkMmU0O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTlkMmU0IDAlLCAjZmZkNGRhIDEwMCUpOyB9XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xuICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY1QTU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XG4gIGFuaW1hdGlvbjogbWFpbkFuaW1hdGlvbiAyLjZzIGVhc2UgMHMgaW5maW5pdGUgZm9yd2FyZHM7XG4gIHotaW5kZXg6IDI7IH1cbiAgLmxvYWRlcjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC01MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY1QTU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XG4gICAgYW5pbWF0aW9uOiBzZWN1bmRhcnlBbmltYXRpb24gMi42cyBlYXNlIDBzIGluZmluaXRlIGZvcndhcmRzOyB9XG5cbi5zaGFkb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogLTc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1YTVhNjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgYW5pbWF0aW9uOiBzaGFkb3dBbmltYXRpb24gMi42cyBlYXNlIDBzIGluZmluaXRlIGZvcndhcmRzLFxyIGZsb2F0IDVzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGZvcndhcmRzO1xuICB6LWluZGV4OiAxOyB9XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgcGFkZGluZzogMTJweCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpOyB9XG4gIC5sb2dvOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7IH1cbiAgLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwIGF1dG87IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/layout/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/layout/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/layout/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container align-self-center\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-4 col-md-offset-1\">\r\n      <div class=\"card p-4 my-4\">\r\n        aaa\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-10\">\r\n        <div class=\"card p-4 my-4\">\r\n          bbb\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\simons\source\repos\simosabba\SansApp\src\WebApp\SansApp.Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map