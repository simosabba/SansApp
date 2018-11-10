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

module.exports = "<div>\n\n  <div [hidden]=\"isLoading() === false\">\n    <app-loader></app-loader>\n  </div>\n\n  <div class=\"page\" [hidden]=\"isLoading() === true\">\n\n    <div class=\"content\">\n      <app-header class=\"header\"></app-header>\n      <router-outlet class=\"router-flex\" #o=\"outlet\"></router-outlet>\n    </div>\n\n    <div class=\"footer\">\n      <app-footer></app-footer>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh; }\n\n.content {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column; }\n\n.header {\n  flex: 0 1 auto; }\n\n.footer {\n  flex-shrink: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxTaW1vbmVcXHNvdXJjZVxccmVwb3NcXFNhbnNBcHBcXHNyY1xcV2ViQXBwXFxTYW5zQXBwLkFuZ3VsYXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlciB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlciB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbiAgIl19 */"

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
/* harmony import */ var _components_totem_people_communication_people_communication_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/totem/people-communication/people-communication.component */ "./src/app/components/totem/people-communication/people-communication.component.ts");
/* harmony import */ var _components_totem_sound_graph_sound_graph_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/totem/sound-graph/sound-graph.component */ "./src/app/components/totem/sound-graph/sound-graph.component.ts");
/* harmony import */ var _components_totem_adv_banner_adv_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/totem/adv-banner/adv-banner.component */ "./src/app/components/totem/adv-banner/adv-banner.component.ts");
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
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_totem_people_communication_people_communication_component__WEBPACK_IMPORTED_MODULE_8__["PeopleCommunicationComponent"],
                _components_totem_sound_graph_sound_graph_component__WEBPACK_IMPORTED_MODULE_9__["SoundGraphComponent"],
                _components_totem_adv_banner_adv_banner_component__WEBPACK_IMPORTED_MODULE_10__["AdvBannerComponent"]
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

module.exports = "    <!-- Footer -->\n    <footer class=\"py-3 bg-light\">\n      <div class=\"container\">\n        <p class=\"m-0 text-center\">Copyright &copy; Shhhhh {{year}}</p>\n      </div>\n    </footer>\n    "

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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id=\"mainNav\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/\">Shhhhh</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        \r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link,\n.dropdown-item {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL0M6XFxVc2Vyc1xcU2ltb25lXFxzb3VyY2VcXHJlcG9zXFxTYW5zQXBwXFxzcmNcXFdlYkFwcFxcU2Fuc0FwcC5Bbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayxcclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

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

module.exports = "<div class=\"loader\"></div>\n<div class=\"shadow\"></div>\n"

/***/ }),

/***/ "./src/app/components/layout/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/loader/loader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes mainAnimation {\n  0% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 150px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(0deg);\n            transform: translateX(-50px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 150px;\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    -webkit-transform: translateX(-150px) translateY(0px) rotate(90deg);\n            transform: translateX(-150px) translateY(0px) rotate(90deg); }\n  80% {\n    width: 50px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(90deg);\n            transform: translateX(-25px) translateY(0px) rotate(90deg); }\n  100% {\n    width: 50px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(90deg);\n            transform: translateX(-50px) translateY(0px) rotate(90deg); } }\n\n@keyframes mainAnimation {\n  0% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 150px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(0deg);\n            transform: translateX(-50px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 150px;\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    -webkit-transform: translateX(-150px) translateY(0px) rotate(90deg);\n            transform: translateX(-150px) translateY(0px) rotate(90deg); }\n  80% {\n    width: 50px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(90deg);\n            transform: translateX(-25px) translateY(0px) rotate(90deg); }\n  100% {\n    width: 50px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(90deg);\n            transform: translateX(-50px) translateY(0px) rotate(90deg); } }\n\n@-webkit-keyframes secundaryAnimation {\n  0% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  40% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  60% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  80% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  100% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); } }\n\n@keyframes secundaryAnimation {\n  0% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  40% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  60% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  80% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  100% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); } }\n\n@-webkit-keyframes shadowAnimation {\n  0% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 200px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  80% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  100% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); } }\n\n@keyframes shadowAnimation {\n  0% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 200px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  80% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  100% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); } }\n\n@-webkit-keyframes float {\n  0% {\n    top: 50%; }\n  50% {\n    top: 51%; }\n  100% {\n    top: 50%; } }\n\n@keyframes float {\n  0% {\n    top: 50%; }\n  50% {\n    top: 51%; }\n  100% {\n    top: 50%; } }\n\nhtml, body {\n  height: 100%; }\n\nbody {\n  position: relative;\n  background: #99d2e4;\n  background: linear-gradient(135deg, #99d2e4 0%, #ffd4da 100%); }\n\n.loader {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50%;\n  left: 50%;\n  margin-top: -25px;\n  margin-left: -25px;\n  background-color: #FFF5A5;\n  -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n          transform: translateX(0px) translateY(0px) rotate(0deg);\n  -webkit-animation: mainAnimation 2.6s ease 0s infinite forwards;\n          animation: mainAnimation 2.6s ease 0s infinite forwards;\n  z-index: 2; }\n\n.loader:after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 0;\n    left: -50px;\n    background-color: #FFF5A5;\n    -webkit-transform-origin: top right;\n            transform-origin: top right;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg);\n    -webkit-animation: secundaryAnimation 2.6s ease 0s infinite forwards;\n            animation: secundaryAnimation 2.6s ease 0s infinite forwards; }\n\n.shadow {\n  position: absolute;\n  width: 100px;\n  height: 10px;\n  top: 50%;\n  left: 50%;\n  margin-top: 50px;\n  margin-left: -75px;\n  border-radius: 50%;\n  background-color: #95a5a6;\n  -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n          transform: translateX(0px) translateY(0px) rotate(0deg);\n  -webkit-animation: shadowAnimation 2.6s ease 0s infinite forwards,\r float 5s ease-in-out 0s infinite forwards;\n          animation: shadowAnimation 2.6s ease 0s infinite forwards,\r float 5s ease-in-out 0s infinite forwards;\n  z-index: 1; }\n\n.logo {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  width: 42px;\n  height: 42px;\n  padding: 12px 5px;\n  margin-left: -21px;\n  box-sizing: border-box;\n  background-color: white;\n  border-radius: 50%;\n  transition: -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.logo:hover {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4); }\n\n.logo img {\n    width: 100%;\n    height: auto;\n    margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbG9hZGVyL0M6XFxVc2Vyc1xcU2ltb25lXFxzb3VyY2VcXHJlcG9zXFxTYW5zQXBwXFxzcmNcXFdlYkFwcFxcU2Fuc0FwcC5Bbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0M7SUFDQyxZQUFXO0lBQ1gsZ0VBQXVEO1lBQXZELHdEQUF1RCxFQUFBO0VBRXhEO0lBQ0MsWUFBVztJQUNYLGdFQUF1RDtZQUF2RCx3REFBdUQsRUFBQTtFQUV4RDtJQUNDLGFBQVk7SUFDWixrRUFBeUQ7WUFBekQsMERBQXlELEVBQUE7RUFFMUQ7SUFDQyxhQUFZO0lBQ1osdUNBQThCO1lBQTlCLCtCQUE4QjtJQUM5QixvRUFBMkQ7WUFBM0QsNERBQTJELEVBQUE7RUFFNUQ7SUFDQyxZQUFXO0lBQ1gsbUVBQTBEO1lBQTFELDJEQUEwRCxFQUFBO0VBRTNEO0lBQ0MsWUFBVztJQUNYLG1FQUEwRDtZQUExRCwyREFBMEQsRUFBQSxFQUFBOztBQXhCNUQ7RUFDQztJQUNDLFlBQVc7SUFDWCxnRUFBdUQ7WUFBdkQsd0RBQXVELEVBQUE7RUFFeEQ7SUFDQyxZQUFXO0lBQ1gsZ0VBQXVEO1lBQXZELHdEQUF1RCxFQUFBO0VBRXhEO0lBQ0MsYUFBWTtJQUNaLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQTtFQUUxRDtJQUNDLGFBQVk7SUFDWix1Q0FBOEI7WUFBOUIsK0JBQThCO0lBQzlCLG9FQUEyRDtZQUEzRCw0REFBMkQsRUFBQTtFQUU1RDtJQUNDLFlBQVc7SUFDWCxtRUFBMEQ7WUFBMUQsMkRBQTBELEVBQUE7RUFFM0Q7SUFDQyxZQUFXO0lBQ1gsbUVBQTBEO1lBQTFELDJEQUEwRCxFQUFBLEVBQUE7O0FBRzVEO0VBQ0M7SUFDQyxnRUFBdUQ7WUFBdkQsd0RBQXVELEVBQUE7RUFFeEQ7SUFDQyxrRUFBeUQ7WUFBekQsMERBQXlELEVBQUE7RUFFMUQ7SUFDQyxrRUFBeUQ7WUFBekQsMERBQXlELEVBQUE7RUFFMUQ7SUFDQyxnRUFBdUQ7WUFBdkQsd0RBQXVELEVBQUE7RUFFeEQ7SUFDQyxnRUFBdUQ7WUFBdkQsd0RBQXVELEVBQUE7RUFFeEQ7SUFDQyxrRUFBeUQ7WUFBekQsMERBQXlELEVBQUEsRUFBQTs7QUFqQjNEO0VBQ0M7SUFDQyxnRUFBdUQ7WUFBdkQsd0RBQXVELEVBQUE7RUFFeEQ7SUFDQyxrRUFBeUQ7WUFBekQsMERBQXlELEVBQUE7RUFFMUQ7SUFDQyxrRUFBeUQ7WUFBekQsMERBQXlELEVBQUE7RUFFMUQ7SUFDQyxnRUFBdUQ7WUFBdkQsd0RBQXVELEVBQUE7RUFFeEQ7SUFDQyxnRUFBdUQ7WUFBdkQsd0RBQXVELEVBQUE7RUFFeEQ7SUFDQyxrRUFBeUQ7WUFBekQsMERBQXlELEVBQUEsRUFBQTs7QUFHM0Q7RUFDQztJQUNDLGFBQVk7SUFDWixrRUFBeUQ7WUFBekQsMERBQXlELEVBQUE7RUFFMUQ7SUFDQyxZQUFXO0lBQ1gsbUVBQTBEO1lBQTFELDJEQUEwRCxFQUFBO0VBRTNEO0lBQ0MsYUFBWTtJQUNaLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQTtFQUUxRDtJQUNDLFlBQVc7SUFDWCxtRUFBMEQ7WUFBMUQsMkRBQTBELEVBQUE7RUFFM0Q7SUFDQyxZQUFXO0lBQ1gsbUVBQTBEO1lBQTFELDJEQUEwRCxFQUFBO0VBRTNEO0lBQ0MsYUFBWTtJQUNaLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQSxFQUFBOztBQXZCM0Q7RUFDQztJQUNDLGFBQVk7SUFDWixrRUFBeUQ7WUFBekQsMERBQXlELEVBQUE7RUFFMUQ7SUFDQyxZQUFXO0lBQ1gsbUVBQTBEO1lBQTFELDJEQUEwRCxFQUFBO0VBRTNEO0lBQ0MsYUFBWTtJQUNaLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQTtFQUUxRDtJQUNDLFlBQVc7SUFDWCxtRUFBMEQ7WUFBMUQsMkRBQTBELEVBQUE7RUFFM0Q7SUFDQyxZQUFXO0lBQ1gsbUVBQTBEO1lBQTFELDJEQUEwRCxFQUFBO0VBRTNEO0lBQ0MsYUFBWTtJQUNaLGtFQUF5RDtZQUF6RCwwREFBeUQsRUFBQSxFQUFBOztBQUczRDtFQUNDO0lBQ0MsU0FBUSxFQUFBO0VBRVQ7SUFDQyxTQUFRLEVBQUE7RUFFVDtJQUNDLFNBQVEsRUFBQSxFQUFBOztBQVJWO0VBQ0M7SUFDQyxTQUFRLEVBQUE7RUFFVDtJQUNDLFNBQVEsRUFBQTtFQUVUO0lBQ0MsU0FBUSxFQUFBLEVBQUE7O0FBS1Y7RUFDQyxhQUFZLEVBQ1o7O0FBQ0Q7RUFDQyxtQkFBa0I7RUFDbEIsb0JBQTRCO0VBQzVCLDhEQUE4RSxFQUM5RTs7QUFFRDtFQUNDLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLFNBQVE7RUFDUixVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQiwwQkE1R2M7RUE2R2QsZ0VBQXVEO1VBQXZELHdEQUF1RDtFQUN2RCxnRUFBdUQ7VUFBdkQsd0RBQXVEO0VBQ3ZELFdBQVUsRUFjVjs7QUF6QkQ7SUFhRSxZQUFXO0lBQ1gsc0JBQXFCO0lBQ3JCLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsYUFBWTtJQUNaLE9BQU07SUFDTixZQUFXO0lBQ1gsMEJBeEhhO0lBeUhiLG9DQUEyQjtZQUEzQiw0QkFBMkI7SUFDM0IsZ0VBQXVEO1lBQXZELHdEQUF1RDtJQUN2RCxxRUFBNEQ7WUFBNUQsNkRBQTRELEVBQzVEOztBQUdGO0VBQ0MsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixhQUFZO0VBQ1osU0FBUTtFQUNSLFVBQVM7RUFDVCxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsZ0VBQXVEO1VBQXZELHdEQUF1RDtFQUN2RCw4R0FHQTtVQUhBLHNHQUdBO0VDakNDLFdBQVcsRUFBRTs7QUFFZjtFRG9DQyxtQkFBWTtFQUNaLGFBQVM7RUFDVCxVQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQVk7RUFDWix1QkFBdUI7RUFDdkIsd0JBQWtCO0VBQ2xCLG1CQUFZO0VBWGIsMkVBWVM7RUFaVCxtRUFZUztFQVpULG1JQVlTLEVBQUE7O0FDbENQO0lEc0JGLDhCQWVLO1lBZkwsc0JBZUssRUFBQTs7QUNuQ0g7SURxQ0EsWUFBWTtJQUNaLGFBQVE7SUNuQ04sZUFBZSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yIHZhcmlhYmxlc1xyXG4kbWFpbiA6ICNGRkY1QTU7XHJcbiRzZWN1bmRhcnkgOiAjRkZENERBO1xyXG4kdGVyY2hpYXJ5IDogIzk5RDJFNDtcclxuXHJcbi8vIGFuaW1hdGlvbiBrZXlmcmFtZXNcclxuQGtleWZyYW1lcyBtYWluQW5pbWF0aW9uIHtcclxuXHQwJSB7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDIwJSB7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDQwJSB7XHJcblx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDYwJSB7XHJcblx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDkwZGVnKTtcclxuXHR9XHJcblx0ODAlIHtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDkwZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg5MGRlZyk7XHJcblx0fVxyXG59XHJcbkBrZXlmcmFtZXMgc2VjdW5kYXJ5QW5pbWF0aW9uIHtcclxuXHQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQyMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgxODBkZWcpO1xyXG5cdH1cclxuXHQ0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgxODBkZWcpO1xyXG5cdH1cclxuXHQ2MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcblx0ODAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgxODBkZWcpO1xyXG5cdH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNoYWRvd0FuaW1hdGlvbiB7XHJcblx0MCUge1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQyMCUge1xyXG5cdFx0d2lkdGg6IDc1cHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzcuNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQ0MCUge1xyXG5cdFx0d2lkdGg6IDIwMHB4O1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQ2MCUge1xyXG5cdFx0d2lkdGg6IDc1cHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzcuNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQ4MCUge1xyXG5cdFx0d2lkdGg6IDc1cHg7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzcuNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHdpZHRoOiAxNTBweDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjVweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcbn1cclxuQGtleWZyYW1lcyBmbG9hdCB7XHJcblx0MCUge1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0fVxyXG5cdDUwJSB7XHJcblx0XHR0b3A6IDUxJTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHR0b3A6IDUwJTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIFN0eWxpbmdcclxuaHRtbCwgYm9keSB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcbmJvZHkge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMTUzLDIxMCwyMjgpO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYigxNTMsMjEwLDIyOCkgMCUscmdiKDI1NSwyMTIsMjE4KSAxMDAlKTtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiA1MHB4O1xyXG5cdGhlaWdodDogNTBweDtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLXRvcDogLTI1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRtYWluO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0YW5pbWF0aW9uOiBtYWluQW5pbWF0aW9uIDIuNnMgZWFzZSAwcyBpbmZpbml0ZSBmb3J3YXJkcztcclxuXHR6LWluZGV4OiAyO1xyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IC01MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJG1haW47XHJcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xyXG5cdFx0YW5pbWF0aW9uOiBzZWN1bmRhcnlBbmltYXRpb24gMi42cyBlYXNlIDBzIGluZmluaXRlIGZvcndhcmRzO1xyXG5cdH1cclxufVxyXG5cclxuLnNoYWRvdyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi10b3A6IDUwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IC03NXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTVhNWE2O1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XHJcblx0YW5pbWF0aW9uOiBzaGFkb3dBbmltYXRpb24gMi42cyBlYXNlIDBzIGluZmluaXRlIGZvcndhcmRzLFxyXG5cdFx0XHRcdFx0XHQgZmxvYXQgNXMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgZm9yd2FyZHM7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLy8gTUQgTG9nbyAtICFjbGljayB0byBzZWUgbW9yZSBhd2Vzb21lIHdvcmshXHJcbi5sb2dvIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiAyMHB4O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR3aWR0aDogNDJweDtcclxuXHRoZWlnaHQ6IDQycHg7XHJcblx0cGFkZGluZzogMTJweCA1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0yMXB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBjdWJpYy1iZXppZXIoMC42ODAsIC0wLjU1MCwgMC4yNjUsIDEuNTUwKTtcclxuXHQmOmhvdmVyIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS40KTtcclxuXHR9XHJcblx0aW1nIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG59IiwiQGtleWZyYW1lcyBtYWluQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7IH1cbiAgMjAlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9XG4gIDQwJSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICA2MCUge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg5MGRlZyk7IH1cbiAgODAlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1cHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoOTBkZWcpOyB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg5MGRlZyk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHNlY3VuZGFyeUFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgxODBkZWcpOyB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgxODBkZWcpOyB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgxODBkZWcpOyB9IH1cblxuQGtleWZyYW1lcyBzaGFkb3dBbmltYXRpb24ge1xuICAwJSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjVweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICAyMCUge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNy41cHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7IH1cbiAgNDAlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9XG4gIDYwJSB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM3LjVweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICA4MCUge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNy41cHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjVweCkgdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgZmxvYXQge1xuICAwJSB7XG4gICAgdG9wOiA1MCU7IH1cbiAgNTAlIHtcbiAgICB0b3A6IDUxJTsgfVxuICAxMDAlIHtcbiAgICB0b3A6IDUwJTsgfSB9XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzk5ZDJlNDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzk5ZDJlNCAwJSwgI2ZmZDRkYSAxMDAlKTsgfVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGNUE1O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xuICBhbmltYXRpb246IG1haW5BbmltYXRpb24gMi42cyBlYXNlIDBzIGluZmluaXRlIGZvcndhcmRzO1xuICB6LWluZGV4OiAyOyB9XG4gIC5sb2FkZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGNUE1O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xuICAgIGFuaW1hdGlvbjogc2VjdW5kYXJ5QW5pbWF0aW9uIDIuNnMgZWFzZSAwcyBpbmZpbml0ZSBmb3J3YXJkczsgfVxuXG4uc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NWE1YTY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XG4gIGFuaW1hdGlvbjogc2hhZG93QW5pbWF0aW9uIDIuNnMgZWFzZSAwcyBpbmZpbml0ZSBmb3J3YXJkcyxcciBmbG9hdCA1cyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBmb3J3YXJkcztcbiAgei1pbmRleDogMTsgfVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDEycHggNXB4O1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTsgfVxuICAubG9nbzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpOyB9XG4gIC5sb2dvIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvOyB9XG4iXX0= */"

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

module.exports = "\n<div class=\"container-fluid h-100 align-self-center\">\n\n  <div class=\"row align-items-start justify-content-center\">\n    <div class=\"col-md-8\">\n      <app-people-communication></app-people-communication>\n    </div>\n  </div>\n\n  <div class=\"row align-items-center justify-content-center\">\n    <div class=\"col-md-8\">\n      <app-sound-graph></app-sound-graph>\n    </div>\n  </div>\n\n  <div class=\"row align-items-end justify-content-center\">\n      <div class=\"col\">\n        <div class=\"carousel slide text-center\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <div class=\"d-block w-100\">\n                    <img src=\"/app/assets/img/banners/utra-banner-2.PNG\">\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                  <div class=\"d-block w-100\">\n                      <img src=\"/app/assets/img/banners/utra-banner-2.PNG\">\n                  </div>\n              </div>\n              <div class=\"carousel-item\">\n                  <div class=\"d-block w-100\">\n                      <img src=\"/app/assets/img/banners/utra-banner-2.PNG\">\n                  </div>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n</div>"

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

/***/ "./src/app/components/totem/adv-banner/adv-banner.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/totem/adv-banner/adv-banner.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  adv-banner works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/totem/adv-banner/adv-banner.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/totem/adv-banner/adv-banner.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG90ZW0vYWR2LWJhbm5lci9hZHYtYmFubmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/totem/adv-banner/adv-banner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/totem/adv-banner/adv-banner.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdvBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvBannerComponent", function() { return AdvBannerComponent; });
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

var AdvBannerComponent = /** @class */ (function () {
    function AdvBannerComponent() {
    }
    AdvBannerComponent.prototype.ngOnInit = function () {
    };
    AdvBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adv-banner',
            template: __webpack_require__(/*! ./adv-banner.component.html */ "./src/app/components/totem/adv-banner/adv-banner.component.html"),
            styles: [__webpack_require__(/*! ./adv-banner.component.scss */ "./src/app/components/totem/adv-banner/adv-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvBannerComponent);
    return AdvBannerComponent;
}());



/***/ }),

/***/ "./src/app/components/totem/people-communication/people-communication.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/totem/people-communication/people-communication.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  people-communication works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/totem/people-communication/people-communication.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/totem/people-communication/people-communication.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG90ZW0vcGVvcGxlLWNvbW11bmljYXRpb24vcGVvcGxlLWNvbW11bmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/totem/people-communication/people-communication.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/totem/people-communication/people-communication.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PeopleCommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleCommunicationComponent", function() { return PeopleCommunicationComponent; });
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

var PeopleCommunicationComponent = /** @class */ (function () {
    function PeopleCommunicationComponent() {
    }
    PeopleCommunicationComponent.prototype.ngOnInit = function () {
    };
    PeopleCommunicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-people-communication',
            template: __webpack_require__(/*! ./people-communication.component.html */ "./src/app/components/totem/people-communication/people-communication.component.html"),
            styles: [__webpack_require__(/*! ./people-communication.component.scss */ "./src/app/components/totem/people-communication/people-communication.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PeopleCommunicationComponent);
    return PeopleCommunicationComponent;
}());



/***/ }),

/***/ "./src/app/components/totem/sound-graph/sound-graph.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/totem/sound-graph/sound-graph.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sound-graph works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/totem/sound-graph/sound-graph.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/totem/sound-graph/sound-graph.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG90ZW0vc291bmQtZ3JhcGgvc291bmQtZ3JhcGguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/totem/sound-graph/sound-graph.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/totem/sound-graph/sound-graph.component.ts ***!
  \***********************************************************************/
/*! exports provided: SoundGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundGraphComponent", function() { return SoundGraphComponent; });
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

var SoundGraphComponent = /** @class */ (function () {
    function SoundGraphComponent() {
    }
    SoundGraphComponent.prototype.ngOnInit = function () {
    };
    SoundGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sound-graph',
            template: __webpack_require__(/*! ./sound-graph.component.html */ "./src/app/components/totem/sound-graph/sound-graph.component.html"),
            styles: [__webpack_require__(/*! ./sound-graph.component.scss */ "./src/app/components/totem/sound-graph/sound-graph.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SoundGraphComponent);
    return SoundGraphComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Simone\source\repos\SansApp\src\WebApp\SansApp.Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map