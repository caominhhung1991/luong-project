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

/***/ "./src/app/animation/animation.ts":
/*!****************************************!*\
  !*** ./src/app/animation/animation.ts ***!
  \****************************************/
/*! exports provided: flyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
// src/app/core/expand-collapse.animation.ts

// OPTION 1:
var flyInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
    ])
]);


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
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '**',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
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

module.exports = "<router-outlet></router-outlet>\n \n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modals_modals_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modals.module */ "./src/app/modals/modals.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_app_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/app-service.service */ "./src/app/services/app-service.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_phuongphap_phuongphap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/phuongphap/phuongphap.component */ "./src/app/components/phuongphap/phuongphap.component.ts");
/* harmony import */ var _components_congthuc_congthuc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/congthuc/congthuc.component */ "./src/app/components/congthuc/congthuc.component.ts");
/* harmony import */ var _components_ckeditor_ckeditor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ckeditor/ckeditor.component */ "./src/app/components/ckeditor/ckeditor.component.ts");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _modals_add_method_modal_add_method_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modals/add-method-modal/add-method-modal.component */ "./src/app/modals/add-method-modal/add-method-modal.component.ts");
/* harmony import */ var _components_navs_nav_filter_nav_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navs/nav-filter/nav-filter.component */ "./src/app/components/navs/nav-filter/nav-filter.component.ts");
/* harmony import */ var _modals_update_method_modal_update_method_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modals/update-method-modal/update-method-modal.component */ "./src/app/modals/update-method-modal/update-method-modal.component.ts");
/* harmony import */ var _services_math_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/math.service */ "./src/app/services/math.service.ts");
/* harmony import */ var _services_animate_jquery_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/animate-jquery.service */ "./src/app/services/animate-jquery.service.ts");
/* harmony import */ var _components_ckeditor_update_ckeditor_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ckeditor-update/ckeditor-update.component */ "./src/app/components/ckeditor-update/ckeditor-update.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Service

// component
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_phuongphap_phuongphap_component__WEBPACK_IMPORTED_MODULE_10__["PhuongphapComponent"],
                _components_congthuc_congthuc_component__WEBPACK_IMPORTED_MODULE_11__["CongthucComponent"],
                _components_ckeditor_ckeditor_component__WEBPACK_IMPORTED_MODULE_12__["CkeditorComponent"],
                _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _modals_add_method_modal_add_method_modal_component__WEBPACK_IMPORTED_MODULE_16__["AddMethodModalComponent"],
                _components_navs_nav_filter_nav_filter_component__WEBPACK_IMPORTED_MODULE_17__["NavFilterComponent"],
                _modals_update_method_modal_update_method_modal_component__WEBPACK_IMPORTED_MODULE_18__["UpdateMethodModalComponent"],
                _components_ckeditor_update_ckeditor_update_component__WEBPACK_IMPORTED_MODULE_21__["CkeditorUpdateComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_24__["MainComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"],
                _modals_modals_module__WEBPACK_IMPORTED_MODULE_6__["ModalsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
                _services_app_service_service__WEBPACK_IMPORTED_MODULE_8__["AppServiceService"],
                _services_math_service__WEBPACK_IMPORTED_MODULE_19__["MathService"],
                _services_animate_jquery_service__WEBPACK_IMPORTED_MODULE_20__["AnimateJqueryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app-service.service */ "./src/app/services/app-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.appService.getUserLogin()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/ckeditor-update/ckeditor-update.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/ckeditor-update/ckeditor-update.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ckeditor-update/ckeditor-update.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/ckeditor-update/ckeditor-update.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<textarea name=\"ckeditorUpdate\" id=\"ckeditorUpdate\" cols=\"30\" rows=\"10\"></textarea>"

/***/ }),

/***/ "./src/app/components/ckeditor-update/ckeditor-update.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/ckeditor-update/ckeditor-update.component.ts ***!
  \*************************************************************************/
/*! exports provided: CkeditorUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkeditorUpdateComponent", function() { return CkeditorUpdateComponent; });
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

var CkeditorUpdateComponent = /** @class */ (function () {
    function CkeditorUpdateComponent() {
    }
    CkeditorUpdateComponent.prototype.ngOnInit = function () {
    };
    CkeditorUpdateComponent.prototype.ngAfterContentInit = function () {
        CKEDITOR.replace('ckeditorUpdate');
    };
    CkeditorUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ckeditor-update',
            template: __webpack_require__(/*! ./ckeditor-update.component.html */ "./src/app/components/ckeditor-update/ckeditor-update.component.html"),
            styles: [__webpack_require__(/*! ./ckeditor-update.component.css */ "./src/app/components/ckeditor-update/ckeditor-update.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CkeditorUpdateComponent);
    return CkeditorUpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/ckeditor/ckeditor.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/ckeditor/ckeditor.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ckeditor/ckeditor.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/ckeditor/ckeditor.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ckeditor [readonly]=\"false\" debounce=\"300\">\n</ckeditor> -->\n\n<textarea name=\"ckeditor\" id=\"ckeditor\" cols=\"30\" rows=\"10\">content display here</textarea>\n<!-- <ckeditor\n    [(ngModel)]=\"ckeditorContent\"\n    [config]=\"{uiColor: '#99000'}\"\n    [readonly]=\"false\"\n    (change)=\"onChange($event)\"\n    (editorChange)=\"onEditorChange($event)\"\n    (ready)=\"onReady($event)\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"onBlur($event)\"\n    (contentDom)=\"onContentDom($event)\"\n    (fileUploadRequest)=\"onFileUploadRequest($event)\"\n    debounce=\"500\">\n  </ckeditor> -->"

/***/ }),

/***/ "./src/app/components/ckeditor/ckeditor.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ckeditor/ckeditor.component.ts ***!
  \***********************************************************/
/*! exports provided: CkeditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkeditorComponent", function() { return CkeditorComponent; });
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

var CkeditorComponent = /** @class */ (function () {
    function CkeditorComponent() {
    }
    CkeditorComponent.prototype.ngOnInit = function () {
    };
    CkeditorComponent.prototype.ngAfterContentInit = function () {
        CKEDITOR.replace('ckeditor', {
            extraPlugins: 'mathjax'
        });
        // console.log(CKEDITOR.config);
    };
    CkeditorComponent.prototype.getContentNhapTay = function () {
    };
    CkeditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ckeditor',
            template: __webpack_require__(/*! ./ckeditor.component.html */ "./src/app/components/ckeditor/ckeditor.component.html"),
            styles: [__webpack_require__(/*! ./ckeditor.component.css */ "./src/app/components/ckeditor/ckeditor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CkeditorComponent);
    return CkeditorComponent;
}());



/***/ }),

/***/ "./src/app/components/comment/comment.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/comment/comment.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n    width: 100%;\n}\n\np {\n    font-family: sans-serif;\n    font-size: 13px;\n    margin-bottom: 3px;\n    color: #384047;\n}\n\n.comments {\n    padding-bottom: 20px;\n}\n\n.comment {\n    padding: 10px 0;\n    border-bottom: 1px solid rgb(156, 156, 156);\n}\n\n.comment-content {\n    font-family: 'Baloo Paaji', cursive;\n    font-size: 15px;\n}\n\n.comment-info {\n    color: rgb(168, 168, 168);\n\n}"

/***/ }),

/***/ "./src/app/components/comment/comment.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/comment/comment.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"3\"></textarea> -->\n<!-- <div class=\"sendComment\">\n  <button class=\"btn btn-primary mt-1\">Gửi comment</button>\n</div> -->\n\n<h4>Báo lỗi (2)</h4>\n<div class=\"comments\">\n  <div class=\"comment\">\n    <p class=\"comment-content\">Why the video buffering on this site is so slow. I have Internet speed of 5 MB/S (not megabits , megabyte it is ).</p>\n    <div class=\"comment-info\">\n      <p>Posted\n        <strong>on Nov 8, 2017</strong> by\n        <strong>Atif Imam</strong>\n      </p>\n    </div>\n  </div>\n\n  <div class=\"comment\">\n    <p class=\"comment-content\">Changing what am Studying</p>\n    <div class=\"comment-info\">\n      <p>Posted\n        <strong>on Sep 21, 2017</strong> by\n        <strong>Brian Sigilai</strong>\n      </p>\n    </div>\n  </div>\n</div>\n\n<nav>\n  <ul class=\"pagination\">\n    <li class=\"page-item disabled\">\n      <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\n    </li>\n    <li class=\"page-item active\">\n      <a class=\"page-link\" href=\"#\">1<span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"page-item \">\n      <a class=\"page-link\" href=\"#\">2</a>\n    </li>\n    <li class=\"page-item\">\n      <a class=\"page-link\" href=\"#\">3</a>\n    </li>\n    <li class=\"page-item\">\n      <a class=\"page-link\" href=\"#\">Next</a>\n    </li>\n  </ul>\n</nav>"

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

var CommentComponent = /** @class */ (function () {
    function CommentComponent() {
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/components/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/components/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/components/congthuc/congthuc.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/congthuc/congthuc.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    font-family: 'Baloo Paaji', cursive;\n    color: #384047\n  }\n  \n  "

/***/ }),

/***/ "./src/app/components/congthuc/congthuc.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/congthuc/congthuc.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"form\">\n    <div class=\"form-group\">\n        <app-nav-filter [color]=\"color\"></app-nav-filter>\n    </div>\n</form> -->\n\n<div class=\"alert alert-primary alert-dismissible fade show\" role=\"alert\">\n    <strong>Welcome</strong> to website.\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<div class=\"row justify-content-center align-self-center\">\n    <h1>Giải phương trình bậc 2\n        <i class=\"fa fa-edit pointer hover-darkred\"></i>\n    </h1>\n</div>\n\n<div class=\"mt-1\">\n    <h4>Lý thuyết</h4>\n    <div class=\"huong-dan\">\n        <img class=\"\" src=\"assets/img/phuong_trinh_bac_2.png\" alt=\"\">\n    </div>\n</div>\n\n<div class=\"mt-3\">\n    <h4>Video giải thích</h4>\n    <div class=\"d-flex justify-content-center\" style=\"margin-top:-35px\">\n        <video id=\"video1\" width=\"500\" controls>\n            <source src=\"../upload/video/video1_480.mp4\" type=\"video/mp4\">\n            <source src=\"mov_bbb.ogg\" type=\"video/ogg\"> Your browser does not support HTML5 video.\n        </video>\n    </div>\n    <!-- <img class=\"img-fluid\" src=\"assets/img/video.png\" alt=\"video\"> -->\n</div>\n\n<div class=\"mt-3\">\n    <app-comment></app-comment>\n</div>"

/***/ }),

/***/ "./src/app/components/congthuc/congthuc.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/congthuc/congthuc.component.ts ***!
  \***********************************************************/
/*! exports provided: CongthucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongthucComponent", function() { return CongthucComponent; });
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

var CongthucComponent = /** @class */ (function () {
    function CongthucComponent() {
        this.color = 'congthuc';
    }
    CongthucComponent.prototype.ngOnInit = function () {
    };
    CongthucComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-congthuc',
            template: __webpack_require__(/*! ./congthuc.component.html */ "./src/app/components/congthuc/congthuc.component.html"),
            styles: [__webpack_require__(/*! ./congthuc.component.css */ "./src/app/components/congthuc/congthuc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CongthucComponent);
    return CongthucComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n:host .navbar {\n  background-color: #087090;\n}\n:host .navbar .navbar-brand {\n  color: #fff;\n}\n:host .navbar .nav-item > a {\n  color: rgb(223, 223, 223);\n}\n:host .navbar .nav-item > a:hover {\n  color: #fff;\n}\n:host .messages {\n  width: 300px;\n}\n:host .messages .media {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n:host .messages .media:last-child {\n  border-bottom: none;\n}\n:host .messages .media-body h5 {\n  font-size: 13px;\n  font-weight: 600;\n}\n:host .messages .media-body .small {\n  margin: 0;\n}\n:host .messages .media-body .last {\n  font-size: 12px;\n  margin: 0;\n}\n:host .active {\n  color: white !important;\n}\n:host .phuongphap {\n  background-color: #0069d9;\n  color: #fff;\n  border-color:#0062cc;\n}\n:host .congthuc {\n  background-color: #ffc107;\n  color: #212529 !important;\n  border-color: #ffc107;  \n}\n:host .baoloi {\n  background-color: #17a2b8;\n  border-color: #17a2b8;  \n}\n  "

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Ghi Chú</a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n    <!-- <span class=\"navbar-toggler-icon\"></span> -->\n    <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"collapse navbar-collapse\">\n    <form class=\"form-inline my-2 my-lg-0\">\n      <!-- Search Method -->\n      <input class=\"form-control mr-sm-2\" type=\"text\" id=\"searchMethod\" (change)=\"searchMethod()\" placeholder=\"Tìm kiếm...\">\n      <div class=\"nav-item\">\n        <a class=\"nav-link btn\" [ngClass]=\"{\n          'active': loai==='phương pháp',\n          'phuongphap': loai==='phương pháp'\n        }\" (click)=\"[choose('phương pháp'), truyenLoaiToSidebarEmit(), queryMethodFunc()]\" href=\"javascript:void(0)\" >Phương pháp</a>\n      </div> \n      <div class=\"nav-item\">\n        <a class=\"nav-link btn\" [ngClass]=\"{\n          'active': loai==='công thức',\n          'congthuc': loai==='công thức'\n        }\"  (click)=\"[choose('công thức'), truyenLoaiToSidebarEmit(), queryMethodFunc()]\" href=\"javascript:void(0)\" >Công thức</a>\n      </div>\n      <div *ngIf=\"admin\" class=\"nav-item\">\n          <a class=\"nav-link btn\" [ngClass]=\"{\n            'active': baoloi==='báo lỗi',\n            'baoloi': baoloi==='báo lỗi'\n          }\"  (click)=\"[chooseBaoLoi('báo lỗi')]\" href=\"javascript:void(0)\" >\n            Báo lỗi <span class=\"badge badge-light\">{{baolois_length}}</span></a>\n        </div>\n    </form>\n    <ul class=\"navbar-nav ml-auto\">\n      <li><button class=\"btn btn-danger btn-sm mt-2\" (click)=\"logout()\">Logout</button></li>\n      <li *ngIf=\"admin\" class=\"nav-item\">\n        <a href=\"javascript:void(0)\" id=\"themMethod\" class=\"nav-link mt-1\" style=\"padding: 0.375rem 1rem !important; border-color: #999;\" (click)=\"truyenLoaiToModalEmit()\" data-toggle=\"modal\" data-target=\"#addMethodModal\">Thêm {{loai}}</a>\n      </li> &nbsp;\n      <!-- <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" class=\"nav-link mt-1\" style=\"padding: 0.375rem 1rem !important; border-color: #999;\" data-toggle=\"modal\" data-target=\"#addBaoLoiTestModal\">Thêm báo lỗi test</a>\n        </li> &nbsp; -->\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-service.service */ "./src/app/services/app-service.service.ts");
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
    // this.admin = false;
    // this.admin = this.appService.checkAdmin();
    function HeaderComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.truyenLoaiToAddModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.truyenLoaiToSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.queryMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.queryMethodTree = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.truyenBaoLoisToSideBar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.truyenMethodsToSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pushRightClass = 'push-right';
        this.loai = 'phương pháp';
        this.baolois = [];
        this.baolois_length = 0;
        this.arrayCheckBaoLoiExisted = [];
        this.baoloi = '';
        this.checkLocalStorageLoai();
        this.admin = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getBaoLois();
        this.admin = this.appService.checkAdmin();
        console.log(this.admin);
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
    };
    HeaderComponent.prototype.truyenLoaiToSidebarEmit = function () {
        if (this.loai == '') {
            this.truyenLoaiToSidebar.emit('');
        }
        else {
            this.truyenLoaiToSidebar.emit(this.loai);
        }
    };
    HeaderComponent.prototype.truyenLoaiToModalEmit = function () {
        if (this.loai == '') {
            this.loai = 'phương pháp';
            this.baoloi = '';
            this.truyenLoaiToAddModal.emit(this.loai);
            this.truyenLoaiToSidebar.emit(this.loai);
        }
        else {
            this.truyenLoaiToAddModal.emit(this.loai);
        }
    };
    HeaderComponent.prototype.checkLocalStorageLoai = function () {
        if (localStorage.getItem('loai') == null) {
            localStorage.setItem('loai', this.loai);
        }
        this.loai = localStorage.getItem('loai');
    };
    HeaderComponent.prototype.choose = function (loai) {
        this.loai = loai;
        this.baoloi = '';
        localStorage.setItem('loai', this.loai);
        this.queryMethodTree.emit('');
    };
    HeaderComponent.prototype.chooseBaoLoi = function (baoloi) {
        // baoloi = "báo lỗi"
        this.baoloi = baoloi;
        this.loai = '';
        this.truyenBaoLoisToSideBar.emit(this.baolois);
        // console.log("truyen bao loi")
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    // pushRightClass: string = 'push-right';
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        // this.translate.use(language);
    };
    HeaderComponent.prototype.queryMethodFunc = function () {
        this.queryMethod.emit("nothing");
    };
    HeaderComponent.prototype.queryMethodTreeFunc = function () {
        this.queryMethod.emit("nothing");
    };
    HeaderComponent.prototype.getBaoLois = function () {
        var _this = this;
        this.appService.getBaoLois().then(function (res) {
            for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
                var loi = _a[_i];
                if (_this.arrayCheckBaoLoiExisted.indexOf(loi.title) == -1) {
                    _this.arrayCheckBaoLoiExisted.push(loi.title);
                    _this.baolois.push(loi);
                }
            }
            // console.log(this.baolois)
            _this.baolois_length = res.data.length;
        });
    };
    HeaderComponent.prototype.searchMethod = function () {
        var _this = this;
        var searchConent = $("#searchMethod").val().trim();
        // let searchConent = "a";
        // console.log(searchConent)
        this.appService.searchMethod(searchConent).then(function (res) {
            // console.log(res.data)
            $("#searchMethod").val("");
            $("#searchMethod").blur();
            _this.truyenMethodsToSidebar.emit(res.data);
        });
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem("user");
        this.router.navigate(['login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "truyenLoaiToAddModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "truyenLoaiToSidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("queryMethod"),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "queryMethod", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("queryMethodTree"),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "queryMethodTree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("truyenBaoLoisToSideBar"),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "truyenBaoLoisToSideBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("truyenMethodsToSidebar"),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "truyenMethodsToSidebar", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 400px; margin:auto; padding-top:30px\">\n  <form class='form'>\n    <div class=\"form-group\">\n      Username:\n      <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" name=\"username\" (keyup.enter)=\"login()\">\n    </div>\n    <div class=\"form-group\">\n      Password:\n      <input [(ngModel)]=\"password\"  type=\"text\" class=\"form-control\" name=\"password\" (keyup.enter)=\"login()\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"button\" class=\"form-control btn btn-sm btn-success\" value=\"Login\" (click)=\"login()\">\n    </div>\n  </form>\n</div>\n "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.admin = {
            username: 'admin',
            password: 'admin',
            role: 'ADMIN_ROLE'
        };
        this.member = {
            username: 'luong',
            password: 'luong123',
            role: 'MEMBER_ROLE'
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (this.username === 'admin' && this.password === 'admin') {
            localStorage.user = JSON.stringify(this.admin);
            this.router.navigate(['']);
        }
        else if (this.username === 'luong' && this.password === 'luong123') {
            localStorage.user = JSON.stringify(this.member);
            this.router.navigate(['']);
        }
        console.log(this.username, this.password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n    margin-top: 56px;\n    margin-left: 200px;\n    padding: 15px;\n    -ms-overflow-x: hidden;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    position: relative;\n    overflow: hidden;\n  }\n  \n  @media screen and (max-width: 992px) {\n    .main-container {\n      margin-left: 0px !important;\n    }\n  }"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header  -->\n<app-header #header \n    (truyenLoaiToAddModal)=\"truyenLoaiToAddModal($event)\" \n    (truyenLoaiToSidebar)=\"truyenLoaiToSidebar($event)\"\n    (queryMethodTree)=\"queryMethodTree($event)\"\n    (queryMethod)=\"queryMethod($event)\"\n    (truyenMethodsToSidebar)=\"truyenMethodsToSidebar($event)\"\n    (truyenBaoLoisToSideBar)=\"truyenBaoLoisToSideBar($event)\">\n</app-header>\n<app-sidebar #sidebar \n    (truyenLoaiToAddModal)=\"truyenLoaiToAddModal($event)\" \n    (truyenLoaiToHeader)=\"truyenLoaiToHeader($event)\"\n    (truyenMethodToDisplay)=\"truyenMethodToDisplay($event)\"\n    (goToBottom)=\"goToBottom($event)\">\n</app-sidebar>\n\n<section class=\"main-container\">\n    <form class=\"form\">\n        <div class=\"form-group\">\n            <app-nav-filter #navFilter \n                (truyenMethodsToSidebar)=\"truyenMethodsToSidebar($event)\"\n                (truyenMethodToPhuongPhap)=\"truyenMethodToDisplay($event)\">\n            </app-nav-filter>\n        </div>\n    </form>\n    <app-phuongphap #phuongphap (truyenMethodToUpdate)=\"truyenMethodToUpdate($event)\"\n        (truyenXoaBaoLoiToHeader)=\"truyenXoaBaoLoiToHeader($event)\">\n    </app-phuongphap>\n    <router-outlet></router-outlet>\n</section>\n\n<!--  -->\n<app-add-method-modal #addMethodModal (queryMethodToUpdate)=\"queryMethodToUpdate($event)\"></app-add-method-modal>\n<app-update-method-modal #updateMethodModal \n    (truyenXoaBaoLoiToHeader)=\"truyenXoaBaoLoiToHeader($event)\"\n    (queryMethodToUpdate)=\"queryMethodToUpdate($event)\"></app-update-method-modal>"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app-service.service */ "./src/app/services/app-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(appService) {
        this.appService = appService;
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        $('[data-toggle="tooltip"]').tooltip({
            delay: { "show": 400, "hide": 100 }
        });
    };
    // Hàm truyền tới component AppAddMethodModal
    MainComponent.prototype.truyenLoaiToAddModal = function (loai) {
        this.addMethodModal.loai = loai;
        console.log("\ncomponent parent nhận từ header và truyền cho modal add \n" + loai);
    };
    MainComponent.prototype.truyenLoaiToSidebar = function (loai) {
        this.sidebar.loai = loai;
        this.navFilter.loai = loai;
        this.sidebar.baoloi = '';
        this.navFilter.baoloi = '';
    };
    MainComponent.prototype.truyenLoaiToHeader = function (loai) {
        this.header.loai = loai;
        this.header.baoloi = '';
        this.navFilter.loai = loai;
        this.navFilter.baoloi = '';
    };
    MainComponent.prototype.truyenMethodsToSidebar = function (methods) {
        this.sidebar.methods = methods;
        this.sidebar.methodSelected = methods[0];
        this.sidebar.setCurrentPage(0);
    };
    MainComponent.prototype.truyenMethodToDisplay = function (method) {
        this.phuongphap.handleVideo(method);
        this.phuongphap.method = method;
        this.phuongphap.check();
        this.phuongphap.setCurrentPage(0);
        this.updateMethodModal.countNhapTay = 1;
        this.updateMethodModal.nhaptayHidden = true;
        this.updateMethodModal.displayContentNhapTay = true;
    };
    MainComponent.prototype.truyenMethodToUpdate = function (method) {
        this.updateMethodModal.nhanMethodFromPhuongPhap(method);
    };
    MainComponent.prototype.queryMethod = function (nothing) {
        // this.navFilter.methods
        this.navFilter.queryMethodTree();
        // this.navFilter.queryMethod();
    };
    MainComponent.prototype.queryMethodTree = function (nothing) {
        // this.navFilter.qu
    };
    MainComponent.prototype.queryMethodToUpdate = function (nothing) {
        this.navFilter.queryMethodTree();
        this.navFilter.queryMethod();
    };
    MainComponent.prototype.truyenBaoLoisToSideBar = function (baolois) {
        var _this = this;
        this.sidebar.baolois = baolois;
        this.sidebar.baoloiSelected = baolois[0];
        this.sidebar.baoloi = 'Báo lỗi';
        this.navFilter.baoloi = 'Báo lỗi';
        console.log(baolois[0]);
        if (baolois[0] !== undefined) {
            this.appService.getMethodById(baolois[0].method_id).then(function (res) {
                var comments = res.data[0].comments;
                comments.sort(function (a, b) {
                    return b.created_time.localeCompare(a.created_time);
                });
                _this.phuongphap.method = res.data[0];
                _this.phuongphap.gotoBottom();
                _this.phuongphap.check();
                _this.phuongphap.setCurrentPage(0);
            }, function (res) {
                console.log(res);
            });
        }
    };
    MainComponent.prototype.truyenXoaBaoLoiToHeader = function (event) {
        this.header.baolois_length = this.header.baolois_length - event;
    };
    MainComponent.prototype.goToBottom = function (event) {
        this.phuongphap.gotoBottom();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('header'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addMethodModal'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "addMethodModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('navFilter'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "navFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('phuongphap'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "phuongphap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('updateMethodModal'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "updateMethodModal", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/navs/nav-filter/nav-filter.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/navs/nav-filter/nav-filter.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navs/nav-filter/nav-filter.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/navs/nav-filter/nav-filter.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"baoloi !== 'Báo lỗi'\" class=\"row\">\n    <div class=\"col-md-3 mb-2\">\n        <div class=\"input-group input-group-sm\">\n            <div class=\"input-group-prepend\">\n                <span [ngStyle]=\"{\n                'background-color': loai==='phương pháp' ? color1_bg : color2_bg,\n                'color': loai==='phương pháp' ? color1_color : color2_color,\n                'border-color': loai==='phương pháp' ? color1_border : color2_border\n              }\" class=\"input-group-text\" id=\"inputGroup-sizing\">Môn:</span>\n            </div>\n            <select (change)=\"chonMon($event)\" class=\"form-control\" id=\"mon\">\n                <option *ngFor=\"let mon of mons\" value=\"{{mon}}\">{{mon}}</option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"col-md-3 mb-2\">\n        <div class=\"input-group input-group-sm\">\n            <div class=\"input-group-prepend\">\n                <button class=\"btn\" [ngClass]=\"{\n                'btn-outline-primary': loai==='phương pháp', \n                'btn-outline-warning': loai!=='phương pháp'\n              }\" type=\"button\" (click)=\"changeLopChuyende()\">{{ LopChuyende }}\n                    <i class=\"fa fa-refresh\"></i>\n                </button>\n            </div>\n            <select [hidden]=\"checkLopChuyende\" (change)=\"chonLop($event)\" class=\"form-control\" id=\"lop\">\n                <option *ngFor=\"let lop of lops\" value=\"{{ lop }}\">{{ lop }}</option>\n            </select>\n        </div>\n    </div>\n\n    <div [hidden]=\"checkLopChuyende\" class=\"col-md-3 mb-2\">\n        <div class=\"input-group input-group-sm\">\n            <div class=\"input-group-prepend\">\n                <!-- <span  [ngStyle]=\"{\n                'background-color': loai==='phương pháp' ? color1_bg : color2_bg,\n                'color': loai==='phương pháp' ? color1_color : color2_color,\n                'border-color': loai==='phương pháp' ? color1_border : color2_border\n              }\" class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Chương:</span> -->\n                <button class=\"btn pointer\" [ngClass]=\"{\n                'btn-primary': loai==='phương pháp', \n                'btn-warning': loai!=='phương pháp'\n              }\" type=\"button\" (click)=\"toggleChuong()\">Chương:\n                </button>\n            </div>\n            <select class=\"form-control\" (change)=\"chonChuong($event)\" id=\"chuong\">\n                <option *ngFor=\"let chuong of chuongs\"  value=\"{{chuong}}\">{{ chuong }}</option>\n            </select>\n        </div>\n    </div>\n    <div [hidden]=\"checkLopChuyende\" class=\"col-md-2 mb-2\">\n        <div class=\"input-group input-group-sm\">\n            <div class=\"input-group-prepend\">\n                <!-- <span   [ngStyle]=\"{\n                'background-color': loai==='phương pháp' ? color1_bg : color2_bg,\n                'color': loai==='phương pháp' ? color1_color : color2_color,\n                'border-color': loai==='phương pháp' ? color1_border : color2_border\n              }\" class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Bài:</span> -->\n                <button class=\"btn pointer\" [ngClass]=\"{\n                'btn-primary': loai==='phương pháp', \n                'btn-warning': loai!=='phương pháp'\n              }\" type=\"button\" (click)=\"toggleBai()\">Bài:\n                </button>\n            </div>\n            <select (change)=\"chonBai($event)\" class=\"form-control\" id=\"bai\">\n                <option *ngFor=\"let bai of bais\" value=\"{{bai}}\">{{bai}}</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"col-md-1 mb-2\">\n        <button class=\"btn btn-sm\" [ngClass]=\"{\n        'btn-primary': loai==='phương pháp',\n        'btn-warning': loai!=='phương pháp'\n        }\" (click)=\"queryMethod()\">Enter</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/navs/nav-filter/nav-filter.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/navs/nav-filter/nav-filter.component.ts ***!
  \********************************************************************/
/*! exports provided: NavFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavFilterComponent", function() { return NavFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app-service.service */ "./src/app/services/app-service.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavFilterComponent = /** @class */ (function () {
    function NavFilterComponent(appService) {
        this.appService = appService;
        this.collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
        this.tam = "";
        this.mons = [];
        this.lops = [];
        this.chuongs = [];
        this.bais = [];
        this.methods = [];
        this.truyenMethodsToSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.truyenMethodToPhuongPhap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.baoloi = '';
        this.checkChuong = true;
        this.checkBai = true;
        this.checkLopChuyende = false;
        // color primary
        this.color1_bg = '#0069d9';
        this.color1_color = '#fff';
        this.color1_border = '#0062cc';
        // color warning
        this.color2_bg = '#ffc107';
        this.color2_color = '#212529';
        this.color2_border = '#ffc107';
        this.LopChuyende = 'Lớp';
        this.loai = localStorage.getItem('loai');
        this.queryMethodTree();
    }
    NavFilterComponent.prototype.ngOnInit = function () {
        this.check();
        this.queryMethod();
    };
    NavFilterComponent.prototype.queryMethodTree = function () {
        var _this = this;
        this.resetMonsLopsChuongsBais(true, true, true, true);
        this.appService.getListMethodByMethod(this.loai).then(function (res) {
            _this.methods = res.data;
            _this.monsHandle();
            _this.lopsHandle();
            _this.chuongsHandle();
            _this.baisHandle();
            _this.queryMethod();
        });
    };
    NavFilterComponent.prototype.chonMon = function (event) {
        // we have had tenmon
        this.resetMonsLopsChuongsBais(false, true, true, true);
        this.tenmon = event.target.value;
        this.lopsHandle();
        this.chuongsHandle();
        this.baisHandle();
    };
    NavFilterComponent.prototype.chonLop = function (event) {
        // we have had tenmon, tenlop
        this.resetMonsLopsChuongsBais(false, false, true, true);
        this.tenlop = event.target.value;
        this.chuongsHandle();
        this.baisHandle();
    };
    NavFilterComponent.prototype.chonChuong = function (event) {
        // we have had tenmon, tenlop, tenchuong
        this.resetMonsLopsChuongsBais(false, false, false, true);
        this.tenchuong = event.target.value;
        this.baisHandle();
    };
    NavFilterComponent.prototype.chonBai = function (event) {
    };
    NavFilterComponent.prototype.check = function () {
        if (this.LopChuyende === 'Lớp') {
            this.checkLopChuyende = false;
        }
        else {
            this.checkLopChuyende = true;
        }
    };
    // Toogle Lớp and Chương
    NavFilterComponent.prototype.changeLopChuyende = function () {
        if (this.LopChuyende == 'Lớp') {
            this.LopChuyende = 'Chuyên đề';
        }
        else {
            this.LopChuyende = 'Lớp';
        }
        this.check();
        this.queryMethod();
    };
    // Call to server to get data 
    // 1. công thức/ phương pháp  - this.loai
    // 2. Môn                     - mon
    // 3. 1-lớp/ 2-chuyên đề      - this.LopChuyenDe
    // 3. Lớp                     - lop
    // 4. Chương 
    // 5. Bài 
    NavFilterComponent.prototype.queryMethod = function () {
        var _this = this;
        var mon = $("#mon").val();
        var lop = $("#lop").val();
        var chuong = this.checkChuong ? $("#chuong").val() : 'empty';
        var bai = this.checkBai ? $("#bai").val() : 'empty';
        // console.log(this.loai, mon, this.LopChuyende, lop, chuong, bai);
        var tam = this.loai == "công thức" ? "congthuc" : "phuongphap";
        this.appService.findById(tam, mon, this.LopChuyende, lop, chuong, bai)
            .then(function (res) {
            if (res.data.length == 0) {
                res.data = [{
                        title: "Nhấn tìm để lấy dữ liệu"
                    }];
            }
            _this.truyenMethodsToSidebar.emit(res.data);
            _this.truyenMethodToPhuongPhap.emit(res.data[0]);
        }, function (res) {
            console.log(res);
        });
    };
    NavFilterComponent.prototype.toggleChuong = function () {
        this.checkChuong = !this.checkChuong;
        this.checkBai = this.checkChuong;
        console.log('chuong: ' + this.checkChuong);
        var display = this.checkChuong == false ? 'none' : 'block';
        $("#chuong").css("display", display, "important");
        $("#bai").css("display", display, "important");
        this.queryMethod();
    };
    NavFilterComponent.prototype.toggleBai = function () {
        if (this.checkChuong == false)
            return;
        this.checkBai = !this.checkBai;
        console.log('bai:' + this.checkBai);
        var display = this.checkBai == false ? 'none' : 'block';
        $("#bai").css("display", display, "important");
        this.queryMethod();
    };
    // if array == true, array will be reset
    NavFilterComponent.prototype.resetMonsLopsChuongsBais = function (mons, lops, chuongs, bais) {
        this.mons = mons == false ? this.mons : [];
        this.lops = lops == false ? this.lops : [];
        this.chuongs = chuongs == false ? this.chuongs : [];
        this.bais = bais == false ? this.bais : [];
    };
    NavFilterComponent.prototype.monsHandle = function () {
        for (var _i = 0, _a = this.methods; _i < _a.length; _i++) {
            var method = _a[_i];
            if (this.mons.indexOf(method.mon) == -1) {
                this.mons.push(method.mon);
            }
        }
        this.tenmon = this.mons.sort(this.collator.compare)[0];
    };
    NavFilterComponent.prototype.lopsHandle = function () {
        for (var _i = 0, _a = this.methods; _i < _a.length; _i++) {
            var method = _a[_i];
            if (this.lops.indexOf(method.lop) == -1 && method.loai == "Lớp" && method.mon == this.tenmon) {
                this.lops.push(method.lop);
            }
        }
        this.tenlop = this.lops.sort(this.collator.compare)[0];
    };
    NavFilterComponent.prototype.chuongsHandle = function () {
        for (var _i = 0, _a = this.methods; _i < _a.length; _i++) {
            var method = _a[_i];
            if (this.chuongs.indexOf(method.chuong) == -1 && method.loai == "Lớp" && method.mon == this.tenmon && method.lop == this.tenlop) {
                this.chuongs.push(method.chuong);
            }
        }
        this.tenchuong = this.chuongs.sort(this.collator.compare)[0]; // 6.
    };
    NavFilterComponent.prototype.baisHandle = function () {
        for (var _i = 0, _a = this.methods; _i < _a.length; _i++) {
            var method = _a[_i];
            if (this.bais.indexOf(method.bai) == -1 && method.loai == "Lớp" && method.mon == this.tenmon && method.lop == this.tenlop && method.chuong == this.tenchuong) {
                this.bais.push(method.bai);
            }
        }
        this.bais.sort(this.collator.compare);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavFilterComponent.prototype, "loai", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavFilterComponent.prototype, "truyenMethodsToSidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavFilterComponent.prototype, "truyenMethodToPhuongPhap", void 0);
    NavFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-filter',
            template: __webpack_require__(/*! ./nav-filter.component.html */ "./src/app/components/navs/nav-filter/nav-filter.component.html"),
            styles: [__webpack_require__(/*! ./nav-filter.component.css */ "./src/app/components/navs/nav-filter/nav-filter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]])
    ], NavFilterComponent);
    return NavFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/phuongphap/phuongphap.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/phuongphap/phuongphap.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh1 {\n  font-family: 'Times New Roman', cursive;\n  color: #384047\n}\n\ntextarea {\n  width: 100%;\n}\n\np {\n  font-family: sans-serif;\n  font-size: 13px;\n  margin-bottom: 3px;\n  color: #384047;\n}\n\n.comments {\n  padding-bottom: 20px;\n}\n\n.comment {\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(156, 156, 156);\n}\n\n.comment-content {\n  font-family: 'Times New Roman', cursive;\n  font-size: 15px;\n}\n\n.comment-info {\n  color: rgb(168, 168, 168);\n\n}\n\n#ghichu {\n    width: 100%;\n    /* margin: auto; */\n}\n\n#ghichu-title {\n    text-align: center;\n    font-size: 35px;\n    font-family: 'Times New Roman', cursive;\n    color: #384047;\n    margin-bottom: 10px;\n}\n\n.ghichu-header-h4 {\n    /* text-align: center; */\n    margin: 7px 0;\n    font-size: 25px;\n    font-family: 'Times New Roman', cursive;\n    color: #c9302c;\n}\n\n#ghichu-lythuyet-images {\n    /* width: 100%; */\n}\n\n.ghichu-lythuyet-image {\n    border-radius: 3px;\n    width: 100%;\n}\n\n/* ------ Ghi chu videos ------*/\n\n.ghichu-videos {\n    margin-top: 15px;\n}\n\n.ghichu-video {\n    border-radius: 3px;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\n#selectNumsPerPage {\n    font-size: 16px;\n    position: relative;\n    top: -5px;\n}\n\n/* Small devices (landscape phones, 576px and up) */\n\n@media (min-width: 576px) { \n    #ghichu{\n        /* width: 85%; */\n        /* margin: auto; */\n    }\n\n    #ghichu-title {\n        font-size: 40px;\n    }\n\n    .ghichu-lythuyet-image {\n        border-radius: 4px;\n        /* margin:auto; */\n    }\n }\n\n/* Medium devices (tablets, 768px and up) */\n\n@media (min-width: 768px) { \n    #ghichu {\n        /* margin: auto; */\n    }\n    #ghichu-title {\n        /* font-size: 45px; */\n    }\n}\n\n/* Large devices (desktops, 992px and up) */\n\n@media (min-width: 992px) { \n    #ghichu {\n        width: 75%;\n        /* margin: auto; */\n    }\n    #ghichu-title {\n        /* font-size: 55px; */\n    }\n }\n\n/* Extra large devices (large desktops, 1200px and up) */\n\n@media (min-width: 1200px) {\n    #ghichu-title {\n        /* font-size: 50px; */\n    }\n }"

/***/ }),

/***/ "./src/app/components/phuongphap/phuongphap.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/phuongphap/phuongphap.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"ghichu\">\n  <!-- <h1 id=\"ghichu-title\">{{method.title}}</h1> -->\n  <h1 id=\"ghichu-title\">{{method.title}}\n    <span *ngIf=\"admin\" [hidden]=\"checkEdit\">\n      <i data-toggle=\"modal\" data-target=\"#updateMethodModal\" (click)=\"truyenMethodToUpdateEmit()\" class=\"fa fa-edit pointer hover-darkred\"></i>\n    </span>\n  </h1>\n  <div [hidden]=\"checkEdit\">\n    <div id=\"ghichu-lythuyet\">\n      <h4 class=\"ghichu-header-h4\">Lý thuyết</h4>\n      <div id=\"ghichu-lythuyet-images\">\n        <div *ngFor=\"let image of method.images\">\n          <img class=\"ghichu-lythuyet-image\" src=\"upload/hinh/{{method.url}}/{{image}}\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ghichu-videos\">\n      <h4 class=\"ghichu-header-h4\">Video giải thích và Ví dụ: <button class=\"btn btn-sm btn-success\" (click)=\"openVideo($event)\">Mở video (-500C)</button></h4>\n      <div *ngIf=\"checkOpenVideo\" id=\"ghichu-videos\">\n        <video class=\"ghichu-video\" *ngFor=\"let video of method.videos\" controls>\n          <source src=\"upload/video/{{method.url}}/{{video}}\" type=\"video/mp4\" />\n        </video>\n      </div>\n    </div>\n\n    <div *ngIf=\"admin\" class=\"mt-3\">\n      <h4 id=\"baoloi\" (click)=\"paginationComments()\" class=\"ghichu-header-h4\">\n        Báo lỗi: \n        <select class=\"ml-1\" id=\"selectNumsPerPage\" (change)=\"changeCurrentPage($event)\">\n          <option>3</option>\n          <option>5</option>\n          <option>10</option>\n          <option>15</option>\n        </select>\n      </h4>\n      <nav aria-label=\"Page navigation example\">\n        <ul class=\"pagination\">\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"previous()\">Previous</a>\n          </li>\n          <li *ngFor=\"let i of numbers\" class=\"page-item\" [ngClass]=\"{'active': i==selectedPagination}\">\n            <a class=\"page-link\" id=\"pagination{{i}}\" href=\"javascript:void(0)\" (click)=\"[setCurrentPage(i-1), choosePagination(i)] \">{{i}}</a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"next()\">Next</a>\n          </li>\n        </ul>\n      </nav>\n\n      <!-- sort -->\n      <div *ngFor=\"let comment of comments\" class=\"comments\">\n        <div class=\"comment\">\n          <p class=\"comment-content\">{{comment.content}}</p>\n          <div class=\"comment-info\">\n            <p>Posted\n              <strong>{{comment.created_time | date:'medium'}}</strong> by\n              <strong>{{comment.username}}</strong>\n            </p>\n          </div>\n\n          <!-- Nút check đã chọn -->\n          <button class=\"btn btn-outline-danger btn-sm\"\n            (click)=\"deleteComment(comment)\">Xoá</button>\n\n          <button class=\"btn btn-outline-info btn-sm\"\n            (click)=\"[truyenMethodToUpdateEmit()]\" \n            data-toggle=\"modal\" \n            data-target=\"#updateMethodModal\">Sửa</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/phuongphap/phuongphap.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/phuongphap/phuongphap.component.ts ***!
  \***************************************************************/
/*! exports provided: PhuongphapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhuongphapComponent", function() { return PhuongphapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app-service.service */ "./src/app/services/app-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhuongphapComponent = /** @class */ (function () {
    // checkOpenVideo: Boolean = true;
    function PhuongphapComponent(appService) {
        this.appService = appService;
        this.truyenMethodToUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.truyenXoaBaoLoiToHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.method = { comments: [] };
        this.methodCurrent = null;
        this.checkEdit = true;
        this.checkOpenVideo = false;
        this.currentPage = 0;
        this.numPerPage = 5;
        this.numbers = [];
        this.admin = false;
    }
    PhuongphapComponent.prototype.ngOnInit = function () {
        this.choosePagination(1);
        $("#selectNumsPerPage").val("5");
        this.admin = this.appService.checkAdmin();
    };
    PhuongphapComponent.prototype.check = function () {
        if (this.method.title == 'Nhấn tìm để lấy dữ liệu') {
            this.checkEdit = true;
        }
        else {
            this.checkEdit = false;
        }
        // sort comments by time soon
    };
    PhuongphapComponent.prototype.gotoBottom = function () {
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    };
    PhuongphapComponent.prototype.goToBottom = function () {
        $("html, body").animate({ scrollTop: 3000 }, 1000);
        // console.log("gotoTop")
    };
    PhuongphapComponent.prototype.gotoTop = function (number) {
        // $(window).scrollTop(number, number);
        $("html, body").animate({ scrollTop: $(document).height() }, 4000);
        console.log("gotoTop");
    };
    PhuongphapComponent.prototype.truyenMethodToUpdateEmit = function () {
        this.truyenMethodToUpdate.emit(this.method);
    };
    PhuongphapComponent.prototype.paginationComments = function () {
        this.commentsALL = this.method.comments;
        if (this.method.comments) {
            this.numPages = Math.ceil(this.method.comments.length / this.numPerPage);
            this.numbers = [];
            for (var i = 1; i <= this.numPages; i++) {
                this.numbers.push(i);
            }
            this.comments = this.commentsALL
                .slice(this.currentPage * this.numPerPage, (this.currentPage + 1) * this.numPerPage);
        }
    };
    PhuongphapComponent.prototype.setCurrentPage = function (number) {
        this.currentPage = number;
        this.paginationComments();
    };
    PhuongphapComponent.prototype.next = function () {
        if (this.currentPage < this.numPages - 1) {
            this.currentPage++;
            this.choosePagination(this.currentPage + 1);
            this.paginationComments();
        }
    };
    PhuongphapComponent.prototype.previous = function () {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.choosePagination(this.currentPage + 1);
            this.paginationComments();
        }
    };
    PhuongphapComponent.prototype.choosePagination = function (number) {
        this.selectedPagination = number;
    };
    PhuongphapComponent.prototype.changeCurrentPage = function (event) {
        console.log(event.target.value);
        this.numPerPage = parseInt(event.target.value);
        this.paginationComments();
    };
    // Delete comment from comments and add to comments_delete
    PhuongphapComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        for (var i = 0; i < this.method.comments.length; i++) {
            if (comment._id == this.method.comments[i]._id) {
                var commentTam = this.method.comments[i];
                commentTam.deleted_time = new Date();
                this.method.comments_delete.push(commentTam);
                this.method.comments.splice(i, 1);
                this.paginationComments();
                break;
            }
        }
        console.log(this.method);
        this.appService.deleteBaoLoiById(comment._id).then(function (res) {
            _this.appService.updateMethod(_this.method).then(function (res) {
                _this.truyenXoaBaoLoiToHeader.emit(1);
                // alert("Xoa báo lỗi thành công!");
            }, function (res) { return console.log(res); });
        }, function (res) { return console.log(res); });
    };
    PhuongphapComponent.prototype.openVideo = function (event) {
        console.log(event.target);
        var user = JSON.parse(localStorage.user);
        console.log(user);
        if (this.checkOpenVideo === false) {
            this.checkOpenVideo = true;
        }
    };
    PhuongphapComponent.prototype.handleVideo = function (method) {
        console.log('check video dang dc chon hay chua');
        if (method !== this.methodCurrent) {
            this.checkOpenVideo = false;
            this.methodCurrent = method;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhuongphapComponent.prototype, "truyenMethodToUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhuongphapComponent.prototype, "truyenXoaBaoLoiToHeader", void 0);
    PhuongphapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phuongphap',
            template: __webpack_require__(/*! ./phuongphap.component.html */ "./src/app/components/phuongphap/phuongphap.component.html"),
            styles: [__webpack_require__(/*! ./phuongphap.component.css */ "./src/app/components/phuongphap/phuongphap.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]])
    ], PhuongphapComponent);
    return PhuongphapComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n    border-radius: 0;\n    position: fixed;\n    z-index: 1000;\n    top: 56px;\n    left: 200px;\n    width: 200px;\n    margin-left: -200px;\n    border: none;\n    border-radius: 0;\n    overflow-y: auto;\n    background-color: #087090;\n    bottom: 0;\n    overflow-x: hidden;\n    padding-bottom: 40px;\n    transition: all 0.2s ease-in-out;\n  }\n  .sidebar .list-group a.list-group-item {\n    background: #0CA2D0;\n    border: 0;\n    border-radius: 0;\n    color: rgb(231, 231, 231);\n    text-decoration: none;\n  }\n  .sidebar .list-group a:hover {\n    background: #0CA2D0;\n    color: #fff;\n  }\n  .sidebar .list-group a.router-link-active {\n    background: #0CA2D0;\n    color: #fff;\n  }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px;\n  }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n    border-top: 1px solid rgba(255, 255, 255, 0.2);\n  }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none;\n  }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0;\n  }\n  .sidebar .sidebar-dropdown .panel-title a {\n    color: #999;\n    text-decoration: none;\n    font-weight: 400;\n    background: #222;\n  }\n  .sidebar .sidebar-dropdown .panel-title a span {\n    position: relative;\n    display: block;\n    padding: 0.75rem 1.5rem;\n    padding-top: 1rem;\n  }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n  .sidebar .sidebar-dropdown .panel-title a:focus {\n    color: #fff;\n    outline: none;\n    outline-offset: -2px;\n  }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #0CA2D0;\n  }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none;\n  }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n    border-radius: 0;\n    background-color: #0CA2D0;\n    border: 0 solid transparent;\n  }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n    color: #999;\n  }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n    color: #fff;\n  }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n    background: #0CA2D0;\n  }\n  .nested-menu .list-group-item {\n    cursor: pointer;\n  }\n  .nested-menu .nested {\n    list-style-type: none;\n  }\n  .nested-menu ul.submenu {\n    display: none;\n    margin-bottom: 0;\n    height: 0;\n  }\n  .nested-menu .expand ul.submenu {\n    display: block;\n    list-style-type: none;\n    height: auto;\n  }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block;\n  }\n  .active {\n    color: white !important;\n  }\n  @media screen and (max-width: 991.98px) {\n    .sidebar {\n      top: 54px;\n      left: 0px;\n    }\n  }\n  @media (min-width: 991.98px) {\n    .header-fields {\n      display: none;\n    }\n  }\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 0px white;\n    border-radius: 3px;\n  }\n  ::-webkit-scrollbar-thumb {\n    border-radius: 3px;\n    -webkit-box-shadow: inset 0 0 3px white;\n  }\n  "

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    <div class=\"list-group\">\n        <span *ngIf=\"baoloi != 'Báo lỗi'\">\n            <div *ngFor=\"let method of methods\" class=\"methods\">\n                <a [ngStyle]=\"{ \n                            'color': methodSelected===method ? 'white': '#F4F4F4',\n                            'background-color': methodSelected===method ? '#0CA2D0':'transparent'\n                         }\" href=\"javascript:void(0)\" (click)=\"chooseMethod(method)\" class=\"list-group-item\">\n                    {{ method.title }}\n                </a>\n            </div>\n        </span>\n\n        <span *ngIf=\"baoloi== 'Báo lỗi'\">\n            <div *ngFor=\"let baoloi of baolois\" class=\"baolois\">\n                <a [ngStyle]=\"{ \n                            'color': baoloiSelected===baoloi ? 'white':'#F4F4F4',\n                            'background-color': baoloiSelected===baoloi ? '#151515':'transparent'\n                         }\" href=\"javascript:void(0)\" (click)=\"[chooseBaoLoi(baoloi), goToBottomEmit()]\" class=\"list-group-item\">\n                    {{ baoloi.title }}\n                </a>\n            </div>\n        </span>\n\n\n        <div *ngIf=\"admin\" class=\"header-fields\">\n            <a href=\"javascript:void(0)\" (click)=\"truyenLoaiToModalEmit()\" data-toggle=\"modal\" data-target=\"#addMethodModal\" class=\"list-group-item\">\n                <span>\n                    <i class=\"fa fa-plus\"></i> Thêm {{loai}}</span>\n            </a>\n        </div>\n        <div class=\"header-fields\">\n            <a [ngClass]=\"{'active': loai==='phương pháp'}\" (click)=\"[choose('phương pháp'), truyenLoaiToHeaderEmit()]\" href=\"javascript:void(0)\"\n                class=\"list-group-item\">\n                <span>&nbsp; Phương pháp</span>\n            </a>\n            <a [ngClass]=\"{'active': loai==='công thức'}\" (click)=\"[choose('công thức'), truyenLoaiToHeaderEmit()]\" href=\"javascript:void(0)\"\n                class=\"list-group-item\">\n                <span>&nbsp; Công thức</span>\n            </a>\n        </div>\n\n        <nav aria-label=\"Page navigation example\" style=\"position: absolute; bottom: 0\">\n            <ul class=\"pagination pagination-sm\" >\n                <li class=\"page-item\">\n                    <a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"previous()\"><</a>\n                </li>\n                <li *ngFor=\"let i of numbers\" class=\"page-item\" [ngClass]=\"{'active': i==selectedPagination}\">\n                    <a class=\"page-link\" id=\"pagination{{i}}\" href=\"javascript:void(0)\" (click)=\"[choosePagination(i)] \">{{i}}</a>\n                </li>\n                <li class=\"page-item\">\n                    <a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"next()\">></a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</nav> "

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app-service.service */ "./src/app/services/app-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    // this.admin = false;
    // this.admin = this.appService.checkAdmin();
    function SidebarComponent(appService) {
        this.appService = appService;
        this.truyenLoaiToAddModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.truyenLoaiToHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.truyenMethodToDisplay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.methods = [{ title: "Chưa có dữ liệu" }];
        this.methodSelected = this.methods[0];
        this.baolois = [];
        this.baoloi = '';
        this.baoloiSelected = [];
        this.isActive = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.currentPage = 0; // vi tri hien tai dang chon
        this.numPerPage = 10; // so luong hien thi tren 1 trang
        this.numbers = [];
        this.selectedPagination = 1;
        this.checkLocalStorageLoai();
        this.admin = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.admin = this.appService.checkAdmin();
        // this.choosePagination(1);
    };
    SidebarComponent.prototype.truyenLoaiToModalEmit = function () {
        this.truyenLoaiToAddModal.emit(this.loai);
    };
    SidebarComponent.prototype.truyenLoaiToHeaderEmit = function () {
        this.truyenLoaiToHeader.emit(this.loai);
        this.baoloi = '';
    };
    SidebarComponent.prototype.chooseMethod = function (method, event) {
        this.methodSelected = method;
        this.truyenMethodToDisplay.emit(method);
    };
    SidebarComponent.prototype.choose = function (loai) {
        this.loai = loai;
        localStorage.setItem('loai', this.loai);
    };
    SidebarComponent.prototype.checkLocalStorageLoai = function () {
        if (localStorage.getItem('loai') == null) {
            localStorage.setItem('loai', this.loai);
        }
        this.loai = localStorage.getItem('loai');
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    SidebarComponent.prototype.chooseBaoLoi = function (baoloi) {
        var _this = this;
        this.baoloiSelected = baoloi;
        this.appService.getMethodById(baoloi.method_id).then(function (res) {
            var comments = res.data[0].comments;
            comments.sort(function (a, b) {
                return b.created_time.localeCompare(a.created_time);
            });
            _this.truyenMethodToDisplay.emit(res.data[0]);
        }, function (res) {
            console.log(res);
        });
    };
    SidebarComponent.prototype.goToBottomEmit = function () {
        this.goToBottom.emit("nothing");
    };
    SidebarComponent.prototype.paginationComments = function () {
        this.methodsALL = this.methods;
        if (this.methods) {
            this.numPages = Math.ceil(this.methods.length / this.numPerPage);
            this.numbers = [];
            for (var i = 1; i <= this.numPages; i++) {
                this.numbers.push(i);
            }
            this.methods = this.methodsALL
                .slice(this.currentPage * this.numPerPage, (this.currentPage + 1) * this.numPerPage);
        }
    };
    SidebarComponent.prototype.setCurrentPage = function (number) {
        this.currentPage = number;
        this.paginationComments();
    };
    SidebarComponent.prototype.next = function () {
        if (this.currentPage < this.numPages - 1) {
            this.currentPage++;
            this.choosePagination(this.currentPage + 1);
            this.methods = this.methodsALL
                .slice(this.currentPage * this.numPerPage, (this.currentPage + 1) * this.numPerPage);
        }
    };
    SidebarComponent.prototype.previous = function () {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.choosePagination(this.currentPage + 1);
            this.methods = this.methodsALL
                .slice(this.currentPage * this.numPerPage, (this.currentPage + 1) * this.numPerPage);
        }
    };
    SidebarComponent.prototype.choosePagination = function (number) {
        this.selectedPagination = number;
        this.currentPage = number - 1;
        this.methods = this.methodsALL
            .slice((this.currentPage) * this.numPerPage, (this.currentPage + 1) * this.numPerPage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "truyenLoaiToAddModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "truyenLoaiToHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "truyenMethodToDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "goToBottom", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/modals/add-method-modal/add-method-modal.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modals/add-method-modal/add-method-modal.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modals/add-method-modal/add-method-modal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modals/add-method-modal/add-method-modal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"addMethodModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addMethodModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"addMethodModalLabel\">Thêm mới phương pháp/ công thức\n          <button class=\"btn btn-sm\" [ngClass]=\"{\n            'btn-outline-primary': loai==='phương pháp', \n            'btn-outline-warning': loai!=='phương pháp'\n          }\" type=\"button\" (click)=\"toggleLoai()\">{{ loai }}\n            <i class=\"fa fa-refresh\"></i>\n          </button>\n\n          <button class=\"btn btn-sm btn-outline-info\" type=\"button\" (click)=\"toggleTree()\">Thêm đường dẫn\n          </button>\n        </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" style=\"display:none\">\n          <div id=\"alert-method-content\"></div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <form class=\"form needs-validation\" novalidate>\n          <!-- lựa chọn -->\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <div class=\"input-group input-group-sm\">\n                  <div class=\"input-group-prepend\">\n                    <span [ngStyle]=\"{\n                      'background-color': loai==='phương pháp' ? color1_bg : color2_bg,\n                      'color': loai==='phương pháp' ? color1_color : color2_color,\n                      'border-color': loai==='phương pháp' ? color1_border : color2_border\n                    }\" class=\"input-group-text pointer\" id=\"inputGroup-sizing-sm\">Môn:</span>\n                  </div>\n                  <select class=\"form-control form-control-sm\" id=\"monModal\">\n                    <option *ngFor=\"let mon of mons\">{{mon}}</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"col-md-3\">\n                <div class=\"input-group input-group-sm\">\n                  <div class=\"input-group-prepend\">\n                    <button class=\"btn\" [ngClass]=\"{\n                      'btn-outline-primary': loai==='phương pháp', \n                      'btn-outline-warning': loai!=='phương pháp'\n                    }\" type=\"button\" (click)=\"changeLopChuyende()\">{{ LopChuyende }}\n                      <i class=\"fa fa-refresh\"></i>\n                    </button>\n                  </div>\n                  <select *ngIf=\"checkLopChuyende\" class=\"form-control form-control-sm\" id=\"lopModal\">\n                    <option *ngFor=\"let lop of lops\">{{ lop }}</option>\n                  </select>\n                </div>\n              </div>\n\n              <div *ngIf=\"checkLopChuyende\" class=\"col-md-3\">\n                <div class=\"input-group input-group-sm\">\n                  <div class=\"input-group-prepend\">\n                    <span [ngStyle]=\"{\n                      'background-color': loai==='phương pháp' ? color1_bg : color2_bg,\n                      'color': loai==='phương pháp' ? color1_color : color2_color,\n                      'border-color': loai==='phương pháp' ? color1_border : color2_border\n                    }\" class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Chương:</span>\n                  </div>\n                  <select class=\"form-control form-control-sm\" id=\"chuongModal\">\n                    <option *ngFor=\"let chuong of chuongs\">{{ chuong }}</option>\n                  </select>\n                </div>\n              </div>\n\n              <div *ngIf=\"checkLopChuyende\" class=\"col-md-3\">\n                <div class=\"input-group input-group-sm\">\n                  <div class=\"input-group-prepend\">\n                    <span [ngStyle]=\"{\n                      'background-color': loai==='phương pháp' ? color1_bg : color2_bg,\n                      'color': loai==='phương pháp' ? color1_color : color2_color,\n                      'border-color': loai==='phương pháp' ? color1_border : color2_border\n                    }\" class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Bài:</span>\n                  </div>\n                  <select class=\"form-control form-control-sm\" id=\"baiModal\">\n                    <option *ngFor=\"let bai of bais\">{{bai}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Ô để thêm lựa chọn -->\n          <div *ngIf=\"tree\" class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <label for=\"basic-url\">Môn:</label>\n                <div class=\"input-group input-group-sm\">\n                  <input id=\"monPath\" type=\"text\" class=\"form-control\" placeholder=\"môn\" list=\"listMon\">\n                  <div class=\"input-group-append\">\n                    <span class=\"btn btn-danger input-group-text pointer\" (click)=\"MLCB_DeleteHandle('mon')\">\n                      <i class=\"fa fa-trash\"></i>\n                    </span>\n                    <span class=\"btn btn-success input-group-text pointer\" (click)=\"themMon()\">\n                      <i class=\"fa fa-save\"></i>\n                    </span>\n                  </div>\n                  <datalist id=\"listMon\">\n                    <option *ngFor=\"let mon of mons\" value=\"{{mon}}\"></option>\n                  </datalist>\n                </div>\n                <div id=\"monPathFeedbackError\" class=\"invalid-feedback\">{{messageMonError}}</div>\n                <div id=\"monPathFeedbackSuccess\" class=\"valid-feedback\">{{messageMonSuccess}}</div>\n              </div>\n\n              <!-- LOP - Class -->\n              <div class=\"col-md-3\">\n                <label for=\"basic-url\">Lớp:</label>\n                <div class=\"input-group input-group-sm\">\n                  <input id=\"lopPath\" type=\"text\" class=\"form-control\" placeholder=\"lớp\" list=\"listLop\">\n                  <datalist id=\"listLop\">\n                    <option *ngFor=\"let lop of lops\" value=\"{{lop}}\"></option>\n                  </datalist>\n                  <div class=\"input-group-append\">\n                    <span class=\"btn btn-danger input-group-text pointer\" (click)=\"MLCB_DeleteHandle('lop')\">\n                      <i class=\"fa fa-trash\"></i>\n                    </span>\n                    <span class=\"btn btn-success input-group-text pointer\" (click)=\"themLop()\">\n                      <i class=\"fa fa-save\"></i>\n                    </span>\n                  </div>\n                </div>\n                <div id=\"lopPathFeedbackError\" class=\"invalid-feedback\">{{messageLopError}}</div>\n                <div id=\"lopPathFeedbackSuccess\" class=\"valid-feedback\">{{messageLopSuccess}}</div>\n              </div>\n\n              <div class=\"col-md-3\">\n                <label for=\"basic-url\">Chương:</label>\n                <div class=\"input-group input-group-sm\">\n                  <input id=\"chuongPath\" type=\"text\" class=\"form-control\" placeholder=\"chương\" list=\"listChuong\">\n                  <datalist id=\"listChuong\">\n                    <option *ngFor=\"let chuong of chuongs\" value=\"{{chuong}}\"></option>\n                  </datalist>\n                  <div class=\"input-group-append\">\n                    <span class=\"btn btn-danger input-group-text pointer\" (click)=\"MLCB_DeleteHandle('chuong')\">\n                      <i class=\"fa fa-trash\"></i>\n                    </span>\n                    <span class=\"btn btn-success input-group-text pointer\" (click)=\"themChuong()\">\n                      <i class=\"fa fa-save\"></i>\n                    </span>\n                  </div>\n                </div>\n                <div id=\"chuongPathFeedbackError\" class=\"invalid-feedback\">{{messageChuongError}}</div>\n                <div id=\"chuongPathFeedbackSuccess\" class=\"valid-feedback\">{{messageChuongSuccess}}</div>\n              </div>\n\n              <div class=\"col-md-3\">\n                <label for=\"basic-url\">Bài:</label>\n                <div class=\"input-group input-group-sm\">\n                  <input id=\"baiPath\" type=\"text\" class=\"form-control\" placeholder=\"bài\" list=\"listBai\">\n                  <div class=\"input-group-append\">\n                    <span class=\"btn btn-danger input-group-text pointer\" (click)=\"MLCB_DeleteHandle('bai')\">\n                      <i class=\"fa fa-trash\"></i>\n                    </span>\n                    <span class=\"btn btn-success input-group-text pointer\" (click)=\"themBai()\">\n                      <i class=\"fa fa-save\"></i>\n                    </span>\n                  </div>\n                  <datalist id=\"listBai\">\n                    <option *ngFor=\"let bai of bais\" value=\"{{bai}}\"></option>\n                  </datalist>\n                </div>\n                <div id=\"baiPathFeedbackError\" class=\"invalid-feedback\">{{messageBaiError}}</div>\n                <div id=\"baiPathFeedbackSuccess\" class=\"valid-feedback\">{{messageBaiSuccess}}</div>\n              </div>\n            </div>\n\n          </div>\n          <!-- Input thêm tên -->\n          <div class=\"form-group\">\n            <label for=\"method-name\">Tên: </label>\n            <input [(ngModel)]=\"method.title\" name=\"title\" class=\"form-control\" id=\"method-name\" type=\"text\" placeholder=\"Tên\" required>\n            <div id=\"method-name-feedback\" class=\"invalid-feedback\">Tên không được để trống</div>\n          </div>\n\n          <!-- Input mô tả method -->\n          <div class=\"form-group\">\n            <label for=\"method-descriptions\">Mô tả phương pháp:</label>\n            <textarea [(ngModel)]=\"method.mota\" name=\"mota\" id=\"mota\" rows=\"3\" class=\"form-control\" placeholder=\"Miêu tả ngắn gọn về phương pháp, công thức\"></textarea>\n          </div>\n\n          <!-- Ô nhập hình lý thuyết -->\n          <div id=\"lythuyet-input\" class=\"form-group\">\n            <label>Lý thuyết:</label>\n            <!-- Button add, minus input template here -->\n            <div class=\"mb-2\">\n              <button class=\"btn btn-outline-danger btn-sm\" (click)=\"addInputLyThuyet()\">\n                <i class=\"fa fa-plus\"></i>\n              </button>\n              <button class=\"btn btn-outline-danger btn-sm\" (click)=\"deleteInputLyThuyet()\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n              <button class=\"btn btn-sm btn-outline-info\" type=\"button\" (click)=\"toggleNhapTay()\" data-toggle=\"tooltip\" data-placement=\"top\"\n                title=\"công cụ nhập tay\">Chuyển\n                <i class=\"fa fa-refresh\"></i>\n              </button>\n              <button [hidden]=\"displayContentNhapTay\" class=\"btn btn-sm btn-outline-warning\" type=\"button\" (click)=\"xemContentNhapTay()\">xem nội dung nhập</button>\n            </div>\n\n            <!-- <app-ckeditor id=\"nhaptay\" [@fadeIn]=\"nhaptayHidden\"></app-ckeditor> -->\n            <div [hidden]=\"nhaptayHidden\" id=\"nhaptay\" class=\"mb-2\">\n              <app-ckeditor (change)=\"xemContentNhapTay()\"></app-ckeditor>\n            </div>\n\n            <!-- Input lythuyet image here -->\n\n          </div>\n\n          \n\n          <div class=\"form-group\">\n            <div id=\"lythuyet-img\" class=\"row\">\n              <!-- display img and delete button here -->\n\n            </div>\n          </div>\n          \n          <!-- Display content from Nhap Tay -->\n          <div [hidden]=\"displayContentNhapTay\" class=\"form-group\" id=\"lythuyet-nhaptay\">\n\n          </div>\n          <!-- Video Input - Ô nhập video -->\n          <div id=\"video-input\" class=\"form-group\">\n            <label for=\"\">Video:</label>\n            <!-- Button add, minus input template here -->\n            <div class=\"mb-2\">\n              <button class=\"btn btn-outline-danger btn-sm\" (click)=\"addInputVideo()\">\n                <i class=\"fa fa-plus\"></i>\n              </button>\n              <button class=\"btn btn-outline-danger btn-sm\" (click)=\"deleteInputVideo()\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n            </div>\n            <!-- Video template will be add here -->\n\n          </div>\n\n          <div class=\"form-group\">\n            <div id=\"video-url\" class=\"row\">\n              <!-- display img and delete button here -->\n\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"luu()\">Lưu</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/add-method-modal/add-method-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modals/add-method-modal/add-method-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddMethodModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMethodModalComponent", function() { return AddMethodModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app-service.service */ "./src/app/services/app-service.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _animation_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/animation */ "./src/app/animation/animation.ts");
/* harmony import */ var _models_method__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/method */ "./src/app/models/method.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AddMethodModalComponent = /** @class */ (function () {
    function AddMethodModalComponent(http, appService) {
        this.http = http;
        this.appService = appService;
        // Test 
        this.collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
        this.queryMethodToUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tree = false;
        this.nhaptayHidden = true;
        this.checkLopChuyende = true;
        this.displayContentNhapTay = true;
        this.videoURL = 'Chọn video';
        this.filesToUpload = [];
        this.contentNhapTay = "";
        // color primary - phương pháp
        this.color1_bg = '#0069d9';
        this.color1_color = '#fff';
        this.color1_border = '#0062cc';
        // color warning - công thức
        this.color2_bg = '#ffc107';
        this.color2_color = '#212529';
        this.color2_border = '#ffc107';
        // 1. khởi tạo Lý thuyết count - biến đếm
        // 2. khởi tạo Video count - biến đếm
        this.LTCount = 1;
        this.VCount = 1;
        this.luachon = null;
        this.methods = [];
        this.mons = [];
        this.lops = [];
        this.chuongs = [];
        this.bais = [];
        this.feedbacks = [
            'monPathFeedbackSuccess',
            'monPathFeedbackError',
            'lopPathFeedbackSuccess',
            'lopPathFeedbackError',
            'chuongPathFeedbackSuccess',
            'chuongPathFeedbackError',
            'baiPathFeedbackError',
            'baiPathFeedbackSuccess'
        ];
        this.messageMonError = "";
        this.messageMonSuccess = "";
        this.messageLopError = "";
        this.messageLopSuccess = "";
        this.messageChuongError = "";
        this.messageChuongSuccess = "";
        this.messageBaiError = "";
        this.messageBaiSuccess = "";
        this.messages = {
            loiEmpty: "Không được để trống",
            loiExisted: "Đã tồn tại",
            loiNotExisted: 'Chưa tồn tại',
            uploadSuccess: "Đã thêm thành công",
            deleteSuccess: "Đã xóa thành công"
        };
        this.LopChuyende = 'Lớp';
        this.initMethod();
        // this.checkLocalStorageLoai();
    }
    AddMethodModalComponent.prototype.ngOnInit = function () {
        this.check();
        this.addInputLyThuyet();
        this.addInputVideo();
        this.queryMethodTree();
        this.locArray();
    };
    AddMethodModalComponent.prototype.locArray = function () {
        var _mons = [], _lops = [], _chuongs = [], _bais = [];
        this.appService.getListMethod().then(function (res) {
            for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
                var method = _a[_i];
                if (_mons.indexOf(method.mon) == -1 && method.loai == "Lớp") {
                    _mons.push(method.mon);
                }
                if (_lops.indexOf(method.lop) == -1 && method.loai == "Lớp") {
                    _lops.push(method.lop);
                }
                if (_chuongs.indexOf(method.chuong) == -1 && method.loai == "Lớp") {
                    _chuongs.push(method.chuong);
                }
                if (_bais.indexOf(method.bai) == -1 && method.loai == "Lớp") {
                    _bais.push(method.bai);
                }
            }
            // console.log(_mons); console.log(_lops); console.log(_chuongs); console.log(_bais);
        });
    };
    // Lưu phương pháp/chuyên đề
    // Và nếu lưu thành công sẽ reset lại modal
    AddMethodModalComponent.prototype.luu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mon, loai, lop, chuong, bai, methodName, arrayLT, url_upload, nhaptay_name, LTfiles, _i, LTfiles_1, file, url, formData, files, Vfiles, arrayV, _a, Vfiles_1, file, url, formData, files;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mon = $("#monModal").val();
                        loai = this.LopChuyende;
                        lop = $("#lopModal").val();
                        chuong = $("#chuongModal").val();
                        bai = $("#baiModal").val();
                        methodName = $("#method-name").val();
                        // Kiểm tra trường nhập yêu cầu nhập tên không đc để trống
                        if (methodName === '') {
                            console.log('empty');
                            $('#method-name-feedback').css('display', 'block');
                            return [2 /*return*/];
                        }
                        else {
                            $('#method-name-feedback').css('display', 'none');
                        }
                        arrayLT = [];
                        url_upload = "";
                        nhaptay_name = "";
                        if (loai == 'Chuyên đề') {
                            url_upload = this.xulikhoangtrang(this.loai) + "/" + this.xulikhoangtrang(mon) + "/" + this.xulikhoangtrang(loai);
                            nhaptay_name = this.createdDate + "_" + this.xulikhoangtrang(methodName) + "nhaptay.png";
                        }
                        else {
                            url_upload = this.xulikhoangtrang(this.loai) + "/" + this.xulikhoangtrang(mon) + "/" + this.xulikhoangtrang(loai) + "/" + this.xulikhoangtrang(lop) + "/" + this.xulikhoangtrang(chuong);
                            nhaptay_name = this.createdDate + "_" + this.xulikhoangtrang(bai) + "-" + this.xulikhoangtrang(methodName) + "nhaptay.png";
                        }
                        LTfiles = $('.lythuyet-input');
                        for (_i = 0, LTfiles_1 = LTfiles; _i < LTfiles_1.length; _i++) {
                            file = LTfiles_1[_i];
                            if (file.files[0]) {
                                arrayLT.push(this.createdDate + "_" + file.files[0].name);
                                url = '/upload/photos';
                                formData = new FormData();
                                files = file.files;
                                formData.append("hinh/" + url_upload, files[0], this.createdDate + "_" + files[0].name);
                                this.http.post(url, formData)
                                    .map(function (files) { return files.json(); })
                                    .subscribe(function (files) { return console.log("files", files); });
                            }
                        }
                        return [4 /*yield*/, this.xemContentNhapTay()];
                    case 1:
                        _b.sent();
                        if (this.displayContentNhapTay === false) {
                            this.getContentNhapTay(); // Lay noi dung nhap tay trc
                            this.method.contentNhapTay = this.getContentNhapTay();
                            if (this.method.contentNhapTay != "") {
                                arrayLT.push("" + nhaptay_name);
                                this.change2Canvas(url_upload, nhaptay_name);
                            }
                        }
                        Vfiles = $('.video-input');
                        arrayV = [];
                        for (_a = 0, Vfiles_1 = Vfiles; _a < Vfiles_1.length; _a++) {
                            file = Vfiles_1[_a];
                            if (file.files[0]) {
                                arrayV.push(this.createdDate + "_" + file.files[0].name);
                                url = '/upload/photos';
                                formData = new FormData();
                                files = file.files;
                                formData.append("video/" + url_upload, files[0], this.createdDate + "_" + files[0].name);
                                this.http.post(url, formData)
                                    .map(function (files) { return files.json(); })
                                    .subscribe(function (files) { return console.log("files", files); });
                            }
                        }
                        this.method.method = this.loai;
                        this.method.mon = mon;
                        this.method.loai = loai;
                        this.method.images = arrayLT;
                        this.method.videos = arrayV;
                        this.method.url = url_upload;
                        if (loai === "Lớp") {
                            this.method.lop = lop;
                            this.method.chuong = chuong;
                            this.method.bai = bai;
                        }
                        console.log(this.method);
                        // lưu thông qua service app-service.service.ts
                        // 1. Nếu lưu thành công thì alert "Lưu thành công" và reset lại modal
                        // 2. Nếu lưu thất bại in ra console
                        this.appService.pushFileToServer(this.method).then(function (res) {
                            alert("Lưu thành công!");
                            _this.queryMethodToUpdate.emit("nothing");
                            _this.initMethod();
                            _this.resetAddMethodModal();
                            console.log(res);
                        }, function (res) {
                            console.log(res);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddMethodModalComponent.prototype.toggleLoai = function () {
        if (this.loai === 'công thức') {
            this.loai = 'phương pháp';
        }
        else {
            this.loai = 'công thức';
        }
        this.queryMethodTree();
    };
    AddMethodModalComponent.prototype.toggleTree = function () {
        this.tree = !this.tree;
    };
    AddMethodModalComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        // this.product.photo = fileInput.target.files[0]['name'];
    };
    AddMethodModalComponent.prototype.check = function () {
        if (this.LopChuyende === 'Lớp') {
            this.checkLopChuyende = true;
        }
        else {
            this.checkLopChuyende = false;
        }
    };
    AddMethodModalComponent.prototype.changeLopChuyende = function () {
        if (this.LopChuyende == 'Lớp') {
            this.LopChuyende = 'Chuyên đề';
        }
        else {
            this.LopChuyende = 'Lớp';
        }
        this.check();
    };
    /**
     * add and delete for lythuyet input
     */
    AddMethodModalComponent.prototype.addInputLyThuyet = function () {
        var lythuyet_input = "\n    <div id=\"lythuyet" + this.LTCount + "\" class=\"input-group mb-1 lythuyet-input-img\">\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input lythuyet-input\" id=\"lythuyet" + this.LTCount + "-input\" onchange=\"onChangeImage(event, 'lythuyet" + this.LTCount + "URL', 'btn-xoa" + this.LTCount + "', 'label" + this.LTCount + "');\">\n        <label id='label" + this.LTCount + "' class=\"custom-file-label\" for=\"lythuyet" + this.LTCount + "\">Ch\u1ECDn h\u00ECnh</label>\n      </div>\n    </div>\n    ";
        var lythuyet_img = "\n    <div id=\"xoa" + this.LTCount + "\" class=\"col-md-4\">\n      <div class=\"container_\">\n        <img id=\"lythuyet" + this.LTCount + "URL\" class=\"img-fluid image \">\n        <div class=\"middle\">\n          <button id=\"btn-xoa" + this.LTCount + "\" class=\"btn btn-danger\" onclick=\"deleteImageInput('lythuyet" + this.LTCount + "-input', 'lythuyet" + this.LTCount + "URL', 'btn-xoa" + this.LTCount + "', 'label" + this.LTCount + "')\">X\u00F3a</button>\n        </div>\n      </div>\n    </div>\n    ";
        $("#lythuyet-input").append(lythuyet_input);
        $("#lythuyet-img").append(lythuyet_img);
        this.LTCount++;
    };
    AddMethodModalComponent.prototype.deleteInputLyThuyet = function () {
        if (this.LTCount > 1) {
            this.LTCount--;
            $("div").remove("#lythuyet" + this.LTCount);
            $("div").remove("#xoa" + this.LTCount);
        }
        console.log(this.LTCount);
    };
    /**
     * add and delete for video input
    */
    AddMethodModalComponent.prototype.addInputVideo = function () {
        if (this.VCount > 6)
            return 0;
        var video_input = "\n    <div id=\"video" + this.VCount + "\" class=\"input-group mb-1 video-input-img\">\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input video-input\" id=\"video" + this.VCount + "-input\" onchange=\"onChangeVideo(event, 'video" + this.VCount + "URL', 'xoaV" + this.VCount + "', 'btn-xoaV" + this.VCount + "', 'labelV" + this.VCount + "');\">\n        <label id='labelV" + this.VCount + "' class=\"custom-file-label\" for=\"video" + this.VCount + "-input\">Ch\u1ECDn Video</label>\n      </div>\n    </div>\n    ";
        var video_url = "\n    <div id=\"xoaV" + this.VCount + "\" class=\"col-md-6 mb-2\" style=\"display:none\">\n      <div class=\"container_\" >\n        <video id=\"video" + this.VCount + "URL\" class=\"video img-thumbnail\" controls>\n          <source type=\"video/mp4\">\n          <source type=\"video/ogg\"> Your browser does not support HTML5 video.\n        </video>\n        <div class=\"middle\">\n          <button id=\"btn-xoaV" + this.VCount + "\" class=\"btn btn-danger\" onclick=\"deleteVideoInput('video" + this.VCount + "-input', 'video" + this.VCount + "URL', 'xoaV" + this.VCount + "', 'btn-xoaV" + this.VCount + "', 'labelV" + this.VCount + "')\">X\u00F3a</button>\n        </div>\n      </div>\n    </div> \n    ";
        $("#video-input").append(video_input);
        $("#video-url").append(video_url);
        this.VCount++;
    };
    AddMethodModalComponent.prototype.deleteInputVideo = function () {
        if (this.VCount > 1) {
            this.VCount--;
            $("div").remove("#video" + this.VCount);
            $("div").remove("#xoaV" + this.VCount);
        }
        console.log(this.VCount);
    };
    /**
     * Reset modal function
    */
    AddMethodModalComponent.prototype.resetAddMethodModal = function () {
        for (var i = this.LTCount - 1; i >= 0; i--) {
            $("div").remove("#lythuyet" + i);
            $("div").remove("#xoa" + i);
        }
        for (var i = this.VCount - 1; i >= 0; i--) {
            $("div").remove("#video" + i);
            $("div").remove("#xoaV" + i);
        }
        this.LTCount = 1;
        this.VCount = 1;
        this.displayContentNhapTay = true;
        this.nhaptayHidden = true;
        // $("#method-name").val('');
        this.addInputLyThuyet();
        this.addInputVideo();
        $("#method-name").focus();
    };
    AddMethodModalComponent.prototype.queryMethodTree = function () {
        this.MLCB_AddHandle('mon'); //
        this.MLCB_AddHandle('lop'); //
        this.MLCB_AddHandle('chuong'); //
        this.MLCB_AddHandle('bai'); //
    };
    // if array == true, array will be reset
    AddMethodModalComponent.prototype.resetMonsLopsChuongsBais = function (mons, lops, chuongs, bais) {
        this.mons = mons == false ? this.mons : [];
        this.lops = lops == false ? this.lops : [];
        this.chuongs = chuongs == false ? this.chuongs : [];
        this.bais = bais == false ? this.bais : [];
    };
    // ------ THÊM MON, LOP, CHUONG, BAI ---------
    AddMethodModalComponent.prototype.themMon = function () {
        var _this = this;
        this.resetFeedback();
        var tenmon = $("#monPath").val();
        tenmon = tenmon.trim();
        // check monPath empty or not
        this.checkEmpty('monPath', 'monPathFeedbackError').then(function (res) {
            _this.appService.getListMethodTreeToCheck('mon', tenmon).then(function (res) {
                if (res.data.length == 0) {
                    _this.appService.postMethodTree('mon', { name: tenmon }).then(function (res) {
                        _this.messageMonSuccess = _this.messages.uploadSuccess;
                        $('#monPathFeedbackSuccess').css('display', 'block');
                        _this.MLCB_AddHandle('mon');
                        $("#monPath").val('');
                    });
                }
                else {
                    _this.messageMonError = _this.messages.loiExisted;
                    $('#monPathFeedbackError').css('display', 'block');
                }
                console.log(res.data);
            });
        }, function (res) {
            // If monPath empty
            _this.messageMonError = _this.messages.loiEmpty;
        });
    };
    AddMethodModalComponent.prototype.themLop = function () {
        var _this = this;
        this.resetFeedback();
        var lop = $("#lopPath").val();
        lop = lop.trim();
        // check lopPath empty or not
        this.checkEmpty('lopPath', 'lopPathFeedbackError').then(function (res) {
            _this.appService.getListMethodTreeToCheck('lop', lop).then(function (res) {
                if (res.data.length == 0) {
                    _this.appService.postMethodTree('lop', { name: lop }).then(function (res) {
                        _this.messageLopSuccess = _this.messages.uploadSuccess;
                        $('#lopPathFeedbackSuccess').css('display', 'block');
                        _this.MLCB_AddHandle('lop');
                        $("#lopPath").val('');
                    });
                }
                else {
                    _this.messageLopError = _this.messages.loiExisted;
                    $('#lopPathFeedbackError').css('display', 'block');
                }
            });
        }, function (res) {
            // If lopPath empty
            _this.messageLopError = _this.messages.loiEmpty;
        });
    };
    AddMethodModalComponent.prototype.themChuong = function () {
        var _this = this;
        this.resetFeedback();
        var chuong = $("#chuongPath").val().trim();
        chuong = chuong.trim();
        // check chuongPath empty or not
        this.checkEmpty('chuongPath', 'chuongPathFeedbackError').then(function (res) {
            _this.appService.getListMethodTreeToCheck('chuong', chuong).then(function (res) {
                if (res.data.length == 0) {
                    _this.appService.postMethodTree('chuong', { name: chuong }).then(function (res) {
                        _this.messageChuongSuccess = _this.messages.uploadSuccess;
                        $('#chuongPathFeedbackSuccess').css('display', 'block');
                        _this.MLCB_AddHandle('chuong');
                        $("#chuongPath").val('');
                    });
                }
                else {
                    _this.messageChuongError = _this.messages.loiExisted;
                    $('#chuongPathFeedbackError').css('display', 'block');
                }
                console.log(res.data);
            });
        }, function (res) {
            // If chuongPath empty
            _this.messageChuongError = _this.messages.loiEmpty;
        });
    };
    AddMethodModalComponent.prototype.themBai = function () {
        var _this = this;
        this.resetFeedback();
        var bai = $("#baiPath").val();
        bai = bai.trim();
        // check baiPath empty or not
        this.checkEmpty('baiPath', 'baiPathFeedbackError').then(function (res) {
            _this.appService.getListMethodTreeToCheck('bai', bai).then(function (res) {
                if (res.data.length == 0) {
                    _this.appService.postMethodTree('bai', { name: bai }).then(function (res) {
                        _this.messageBaiSuccess = _this.messages.uploadSuccess;
                        $('#baiPathFeedbackSuccess').css('display', 'block');
                        _this.MLCB_AddHandle('bai');
                        $("#baiPath").val('');
                    });
                }
                else {
                    _this.messageBaiError = _this.messages.loiExisted;
                    $('#baiPathFeedbackError').css('display', 'block');
                }
                console.log(res.data);
            });
        }, function (res) {
            // If baiPath empty
            _this.messageBaiError = _this.messages.loiEmpty;
        });
    };
    AddMethodModalComponent.prototype.checkEmpty = function (idPath, idFeedback) {
        if ($("#" + idPath).val() == '') {
            $("#" + idFeedback).css("display", "block");
            return Promise.reject(false);
        }
        else {
            $("#" + idFeedback).css("display", "none");
        }
        return Promise.resolve(true);
    };
    AddMethodModalComponent.prototype.resetFeedback = function () {
        for (var _i = 0, _a = this.feedbacks; _i < _a.length; _i++) {
            var feedback = _a[_i];
            $("#" + feedback).css("display", "none");
        }
    };
    AddMethodModalComponent.prototype.MLCB_AddHandle = function (loai) {
        var _this = this;
        this.appService.getListMethodTree(loai).then(function (res) {
            if (loai == 'mon') {
                _this.mons = res.data.map(function (res) { return res.name; });
                _this.mons = _this.mons.sort(_this.collator.compare);
            }
            else if (loai == 'lop') {
                _this.lops = res.data.map(function (res) { return res.name; });
                _this.lops = _this.lops.sort(_this.collator.compare);
            }
            else if (loai == 'chuong') {
                _this.chuongs = res.data.map(function (res) { return res.name; });
                _this.chuongs = _this.chuongs.sort(_this.collator.compare);
            }
            else if (loai == 'bai') {
                _this.bais = res.data.map(function (res) { return res.name; });
                _this.bais = _this.bais.sort(_this.collator.compare);
            }
        });
    };
    AddMethodModalComponent.prototype.MLCB_DeleteHandle = function (loai) {
        var _this = this;
        this.resetFeedback();
        var ten = $("#" + loai + "Path").val();
        // check tenPath empty or not
        this.checkEmpty(loai + "Path", loai + "PathFeedbackError").then(function (res) {
            _this.appService.getListMethodTreeToCheck(loai, ten).then(function (res) {
                if (res.data.length > 0) {
                    _this.appService.deleteMethodTree(loai, ten).then(function (res) {
                        if (loai == 'mon') {
                            _this.messageMonSuccess = _this.messages.deleteSuccess;
                        }
                        else if (loai == 'lop') {
                            _this.messageLopSuccess = _this.messages.deleteSuccess;
                        }
                        else if (loai == 'chuong') {
                            _this.messageChuongSuccess = _this.messages.deleteSuccess;
                        }
                        else if (loai == 'bai') {
                            _this.messageBaiSuccess = _this.messages.deleteSuccess;
                        }
                        $("#" + loai + "PathFeedbackSuccess").css('display', 'block');
                        _this.MLCB_AddHandle(loai);
                        $("#" + loai + "Path").val('');
                    });
                }
                else {
                    if (loai == 'mon') {
                        _this.messageMonError = _this.messages.loiNotExisted;
                    }
                    else if (loai == 'lop') {
                        _this.messageLopError = _this.messages.loiNotExisted;
                    }
                    else if (loai == 'chuong') {
                        _this.messageChuongError = _this.messages.loiNotExisted;
                    }
                    else if (loai == 'bai') {
                        _this.messageBaiError = _this.messages.loiNotExisted;
                    }
                    $("#" + loai + "PathFeedbackError").css('display', 'block');
                }
            });
        }, function (res) {
            // If monPath empty
            if (loai == 'mon') {
                _this.messageMonError = _this.messages.loiEmpty;
            }
            else if (loai == 'lop') {
                _this.messageLopError = _this.messages.loiEmpty;
            }
            else if (loai == 'chuong') {
                _this.messageChuongError = _this.messages.loiEmpty;
            }
            else if (loai == 'bai') {
                _this.messageBaiError = _this.messages.loiEmpty;
            }
        });
    };
    // --------------- Lien quan den NHAP TAY -------------------
    AddMethodModalComponent.prototype.toggleNhapTay = function () {
        this.nhaptayHidden = !this.nhaptayHidden;
        this.displayContentNhapTay = !this.displayContentNhapTay;
        if (this.displayContentNhapTay == false) {
            this.xemContentNhapTay();
        }
    };
    AddMethodModalComponent.prototype.xemContentNhapTay = function () {
        console.log("get nhap tay --- 11111");
        var content = CKEDITOR.instances.ckeditor.getData();
        $("#lythuyet-nhaptay").html(content);
    };
    AddMethodModalComponent.prototype.getContentNhapTay = function () {
        var content = CKEDITOR.instances.ckeditor.getData();
        return content;
    };
    // transform lythuyet-nhaptay to image file
    AddMethodModalComponent.prototype.change2Canvas = function (url, name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var canvas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, html2canvas(document.getElementById("lythuyet-nhaptay"))];
                    case 1:
                        canvas = _a.sent();
                        canvas.toBlob(function (blob) {
                            blob.lastModifiedDate = new Date();
                            blob.name = name;
                            var formData = new FormData();
                            formData.append("hinh/" + url, blob, name);
                            _this.http.post('/upload/photos', formData)
                                .map(function (files) { return files.json(); })
                                .subscribe(function (files) { return console.log("files", files); });
                        }, "image/png");
                        return [2 /*return*/];
                }
            });
        });
    };
    AddMethodModalComponent.prototype.xulikhoangtrang = function (name) {
        var result = "";
        for (var i = 0; i < name.length; i++) {
            if (name[i] !== " ") {
                result += name[i];
            }
        }
        return result;
    };
    AddMethodModalComponent.prototype.initMethod = function () {
        this.method = new _models_method__WEBPACK_IMPORTED_MODULE_6__["Method"]("", // method
        "", // mon
        "", // mota
        "", // loai
        "", // lop
        "", // chuong
        "", // bai
        "", // title
        new Date(), // createdDate
        [], // images
        [], // videos
        [], // comments
        [], // comments_delete
        "", // noi dung nhap tay
        "");
        this.createdDate = new Date().getTime();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("queryMethodToUpdate"),
        __metadata("design:type", Object)
    ], AddMethodModalComponent.prototype, "queryMethodToUpdate", void 0);
    AddMethodModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-method-modal',
            template: __webpack_require__(/*! ./add-method-modal.component.html */ "./src/app/modals/add-method-modal/add-method-modal.component.html"),
            styles: [__webpack_require__(/*! ./add-method-modal.component.css */ "./src/app/modals/add-method-modal/add-method-modal.component.css")],
            animations: [_animation_animation__WEBPACK_IMPORTED_MODULE_5__["flyInOut"]]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _services_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]])
    ], AddMethodModalComponent);
    return AddMethodModalComponent;
}());



/***/ }),

/***/ "./src/app/modals/add-subject-modal/add-subject-modal.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modals/add-subject-modal/add-subject-modal.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modals/add-subject-modal/add-subject-modal.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modals/add-subject-modal/add-subject-modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Button trigger modal -->\n<!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n  Launch demo modal\n</button> -->\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addSubjectModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addSubjectModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"addSubjectModalLabel\">Thêm môn học vào phương pháp</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form\">\n          <div class=\"form-group\">\n            <label for=\"subject-name\">Tên môn học: </label>\n            <input class=\"form-control form-control-sm\" id=\"subject-name\" type=\"text\">\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <label for=\"\">Loại:</label>\n                <select class=\"form-control form-control-sm\" name=\"\" id=\"\">\n                  <option value=\"lop\">Lớp</option>\n                  <option value=\"chuyende\">Chuyên đề</option>\n                </select>\n              </div>\n              <div class=\"col-md-8\">\n                <label for=\"\">Tên lớp:</label>\n                <input type=\"text\" class=\"form-control form-control-sm\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"\">Tên chương:</label>\n            <input type=\"text\" class=\"form-control form-control-sm\">\n          </div>\n\n          <div class=\"form-group\">\n              <label for=\"\">Tên bài:</label>\n              <input type=\"text\" class=\"form-control form-control-sm\">\n            </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/add-subject-modal/add-subject-modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modals/add-subject-modal/add-subject-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddSubjectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubjectModalComponent", function() { return AddSubjectModalComponent; });
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

var AddSubjectModalComponent = /** @class */ (function () {
    function AddSubjectModalComponent() {
    }
    AddSubjectModalComponent.prototype.ngOnInit = function () {
    };
    AddSubjectModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-subject-modal',
            template: __webpack_require__(/*! ./add-subject-modal.component.html */ "./src/app/modals/add-subject-modal/add-subject-modal.component.html"),
            styles: [__webpack_require__(/*! ./add-subject-modal.component.css */ "./src/app/modals/add-subject-modal/add-subject-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddSubjectModalComponent);
    return AddSubjectModalComponent;
}());



/***/ }),

/***/ "./src/app/modals/modals.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modals/modals.module.ts ***!
  \*****************************************/
/*! exports provided: ModalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsModule", function() { return ModalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_subject_modal_add_subject_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-subject-modal/add-subject-modal.component */ "./src/app/modals/add-subject-modal/add-subject-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalsModule = /** @class */ (function () {
    function ModalsModule() {
    }
    ModalsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_add_subject_modal_add_subject_modal_component__WEBPACK_IMPORTED_MODULE_2__["AddSubjectModalComponent"]],
            exports: [
                _add_subject_modal_add_subject_modal_component__WEBPACK_IMPORTED_MODULE_2__["AddSubjectModalComponent"]
            ]
        })
    ], ModalsModule);
    return ModalsModule;
}());



/***/ }),

/***/ "./src/app/modals/update-method-modal/update-method-modal.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modals/update-method-modal/update-method-modal.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modals/update-method-modal/update-method-modal.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modals/update-method-modal/update-method-modal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"updateMethodModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateMethodModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"updateMethodModalLabel\">Update {{method.method}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" style=\"display:none\">\n          <div id=\"alert-method-content\"></div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n\n        <form class=\"form needs-validation\" novalidate>\n          <!-- Hiển thị đường dẫn -->\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <div class=\"input-group input-group-sm\">\n                  <div class=\"input-group-prepend\">\n                    <span [ngStyle]=\"{\n                      'background-color': method.method==='phương pháp' ? color1_bg : color2_bg,\n                      'color': method.method==='phương pháp' ? color1_color : color2_color,\n                      'border-color': method.method==='phương pháp' ? color1_border : color2_border\n                    }\" class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Tại môn:</span>\n                  </div>\n                  <input class=\"form-control\" type=\"text\" value=\"{{method.mon}}\" disabled>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"input-group input-group-sm\">\n                  <div class=\"input-group-prepend\">\n                    <span [ngStyle]=\"{\n                      'background-color': method.method==='phương pháp' ? color1_bg : color2_bg,\n                      'color': method.method==='phương pháp' ? color1_color : color2_color,\n                      'border-color': method.method==='phương pháp' ? color1_border : color2_border\n                    }\" class=\"input-group-text\" id=\"inputGroup-sizing-sm\">{{ method.loai }}</span>\n                  </div>\n                  <input *ngIf=\"method.loai === 'Lớp'\" class=\"form-control form-control-sm\" type=\"text\" value=\"{{method.lop}}\" disabled>\n                </div>\n              </div>\n              <div *ngIf=\"method.loai == 'Lớp'\" class=\"col-md-3\">\n                <div class=\"input-group input-group-sm\">\n                  <div class=\"input-group-prepend\">\n                    <span [ngStyle]=\"{\n                      'background-color': method.method==='phương pháp' ? color1_bg : color2_bg,\n                      'color': method.method==='phương pháp' ? color1_color : color2_color,\n                      'border-color': method.method==='phương pháp' ? color1_border : color2_border\n                    }\" class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Chương:</span>\n                  </div>\n\n                  <input class=\"form-control\" type=\"text\" value=\"{{method.chuong}}\" disabled>\n                </div>\n              </div>\n\n              <div *ngIf=\"method.loai == 'Lớp'\" class=\"col-md-3\">\n                <div class=\"input-group input-group-sm\">\n                  <div class=\"input-group-prepend\">\n                    <span [ngStyle]=\"{\n                      'background-color': method.method==='phương pháp' ? color1_bg : color2_bg,\n                      'color': method.method==='phương pháp' ? color1_color : color2_color,\n                      'border-color': method.method==='phương pháp' ? color1_border : color2_border\n                    }\" class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Bài:</span>\n                  </div>\n\n                  <input class=\"form-control\" type=\"text\" value=\"{{method.bai}}\" disabled>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Title -->\n          <div class=\"form-group\">\n            <label for=\"method-name\">Tên: </label>\n            <input class=\"form-control\" id=\"method-name-update\" type=\"text\" placeholder=\"Tên\" value=\"{{method.title}}\" required>\n            <div id=\"method-name-feedback-update\" class=\"invalid-feedback\">Tên không được để trống</div>\n          </div>\n\n          <!-- Input mô tả method -->\n          <div class=\"form-group\">\n            <label for=\"method-descriptions\">Mô tả phương pháp:</label>\n            <textarea [(ngModel)]=\"method.mota\" name=\"mota\" id=\"mota\" rows=\"3\" class=\"form-control\" placeholder=\"Miêu tả ngắn gọn về phương pháp, công thức\"></textarea>\n          </div>\n\n          <!-- Ô nhập hình lý thuyết -->\n          <div class=\"form-group\">\n            <label>Lý thuyết:</label>\n\n            <!-- Button add, minus input template here -->\n            <div class=\"mb-2\">\n              <button class=\"btn btn-outline-danger btn-sm\" (click)=\"addInputLyThuyet()\">\n                <i class=\"fa fa-plus\"></i>\n              </button>\n              <button class=\"btn btn-outline-danger btn-sm\" (click)=\"deleteInputLyThuyet()\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n              <button class=\"btn btn-sm btn-outline-info\" type=\"button\" (click)=\"toggleNhapTay()\" data-toggle=\"tooltip\" data-placement=\"top\"\n                title=\"công cụ nhập tay\">Chuyển\n                <i class=\"fa fa-refresh\"></i>\n              </button>\n              <button [hidden]=\"displayContentNhapTay\" class=\"btn btn-sm btn-outline-warning\" type=\"button\" (click)=\"xemContentNhapTay()\">xem nội dung nhập</button>\n            </div>\n            <!-- <app-ckeditor id=\"nhaptay\" [@fadeIn]=\"nhaptayHidden\"></app-ckeditor> -->\n            <div [hidden]=\"nhaptayHidden\" id=\"nhaptay-update\" class=\"mb-2\">\n              <app-ckeditor-update></app-ckeditor-update>\n            </div>\n\n            <!-- Input lythuyet image here -->\n            <div id=\"lythuyet-input-update\">\n\n            </div>\n            <div id=\"hinh-feedback-update\" class=\"invalid-feedback\">Hình không được để trống</div>\n          </div>\n\n\n\n          <div class=\"form-group\">\n            <div id=\"lythuyet-img-update\" class=\"row\">\n              <!-- display img and delete button here -->\n\n            </div>\n          </div>\n\n          <!-- Display content from Nhap Tay -->\n          <div [hidden]=\"displayContentNhapTay\" class=\"form-group\" id=\"lythuyet-nhaptay-update\">\n\n          </div>\n\n          <!-- Video Input - Ô nhập video -->\n          <div class=\"form-group\">\n            <label for=\"\">Video:</label>\n\n            <!-- Button add, minus input template here -->\n            <div class=\"mb-2\">\n              <button class=\"btn btn-outline-danger btn-sm\" (click)=\"addInputVideo()\">\n                <i class=\"fa fa-plus\"></i>\n              </button>\n              <button class=\"btn btn-outline-danger btn-sm\" (click)=\"deleteInputVideo()\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n            </div>\n            <!-- Video template will be add here -->\n            <div id=\"video-input-update\">\n\n            </div>\n            <div id=\"video-feedback-update\" class=\"invalid-feedback\">Video không được để trống</div>\n          </div>\n          <div class=\"form-group\">\n            <div id=\"video-url-update\" class=\"row\">\n              <!-- display img and delete button here -->\n\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"xoaMethod()\">Xóa</button>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateMethod()\">Lưu</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modals/update-method-modal/update-method-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modals/update-method-modal/update-method-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UpdateMethodModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMethodModalComponent", function() { return UpdateMethodModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app-service.service */ "./src/app/services/app-service.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UpdateMethodModalComponent = /** @class */ (function () {
    function UpdateMethodModalComponent(http, appService) {
        this.http = http;
        this.appService = appService;
        this.queryMethodToUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.truyenXoaBaoLoiToHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.method = {};
        this.CHON_HINH = "Chọn hình";
        this.CHON_VIDEO = "Chọn Video";
        this.LTCount = 1;
        this.VCount = 1;
        this.checkLopChuyende = true;
        this.nhaptayHidden = true;
        this.displayContentNhapTay = true;
        this.videoURL = 'Chọn video';
        // color primary - phương pháp
        this.color1_bg = '#0069d9';
        this.color1_color = '#fff';
        this.color1_border = '#0062cc';
        // color warning - công thức
        this.color2_bg = '#ffc107';
        this.color2_color = '#212529';
        this.color2_border = '#ffc107';
        // --------------- Lien quan den NHAP TAY -------------------
        this.countNhapTay = 1;
        this.LopChuyende = 'Lớp';
        // this.checkLocalStorageLoai();
    }
    UpdateMethodModalComponent.prototype.ngOnInit = function () {
        this.initMethod();
    };
    // Lưu phương pháp/chuyên đề
    // Và nếu lưu thành công sẽ reset lại modal
    UpdateMethodModalComponent.prototype.updateMethod = function () {
        var _this = this;
        // id #...Modal ý chỉ id trong modal để tránh nhầm lẫn với id có trong phương pháp
        this.checkValidation().then(function (res) {
            // console.log("success" + res);
            _this.method.title = $("#method-name-update").val();
            var url_upload = "";
            var nhaptay_name = "";
            // kiem tra nhaptay da nhap hay chua.
            // neu 
            if (_this.method.loai == 'Chuyên đề') {
                url_upload = _this.xulikhoangtrang(_this.method.method) + "/" + _this.xulikhoangtrang(_this.method.mon) + "/" + _this.xulikhoangtrang(_this.method.loai);
                nhaptay_name = _this.createdDate + "_" + _this.xulikhoangtrang(_this.method.title) + "nhaptay.png";
            }
            else {
                url_upload = _this.xulikhoangtrang(_this.method.method) + "/" + _this.xulikhoangtrang(_this.method.mon) + "/" + _this.xulikhoangtrang(_this.method.loai) + "/" + _this.xulikhoangtrang(_this.method.lop) + "/" + _this.xulikhoangtrang(_this.method.chuong);
                nhaptay_name = _this.createdDate + "_" + _this.xulikhoangtrang(_this.method.bai) + "-" + _this.xulikhoangtrang(_this.method.title) + "nhaptay.png";
            }
            // 1. query tất cả input Lý Thuyết
            // 4. Cập nhật lại danh sách hình
            var LTfiles = $('.lythuyetUpdate-input');
            for (var _i = 0, LTfiles_1 = LTfiles; _i < LTfiles_1.length; _i++) {
                var file = LTfiles_1[_i];
                if (file.files[0]) {
                    // let indexHinh = this.appService.arrayObjectIndexOf(LTfiles, file);
                    // this.method.images[indexHinh] = file.files[0].name;
                    _this.uploadFile(file, 'hinh/' + url_upload);
                }
            }
            // 1. query tất cả input Video
            var Vfiles = $('.video-input');
            for (var _a = 0, Vfiles_1 = Vfiles; _a < Vfiles_1.length; _a++) {
                var file = Vfiles_1[_a];
                if (file.files[0]) {
                    // let indexVideo = this.appService.arrayObjectIndexOf(Vfiles, file);
                    // this.method.videos[indexVideo] = file.files[0].name;
                    _this.uploadFile(file, 'video' + url_upload);
                }
            }
            // delete old image/video name to update;
            _this.method.images = [];
            _this.method.videos = [];
            var labelLTUpdate = $(".labelLTUpdate");
            for (var i = 0; i < labelLTUpdate.length; i++) {
                _this.method.images[i] = $("#" + labelLTUpdate[i].id).html();
                console.log(_this.method.images[i]);
            }
            _this.xemContentNhapTay();
            if (_this.displayContentNhapTay === false) {
                var indexOfNhapTay = -1;
                _this.method.contentNhapTay = _this.getContentNhapTay();
                console.log(_this.method.contentNhapTay);
                for (var i = 0; i < _this.method.images.length; i++) {
                    if (_this.method.images[i].indexOf("nhaptay") !== -1) {
                        indexOfNhapTay = i;
                        break;
                    }
                }
                if (_this.method.contentNhapTay != "") {
                    if (indexOfNhapTay == -1) {
                        _this.method.images.push("" + nhaptay_name);
                    }
                    else {
                        _this.method.images[indexOfNhapTay] = "" + nhaptay_name;
                    }
                    _this.change2Canvas(url_upload, nhaptay_name);
                }
            }
            var labelVUpdate = $(".labelVUpdate");
            for (var i = 0; i < labelVUpdate.length; i++) {
                _this.method.videos[i] = $("#" + labelVUpdate[i].id).html();
            }
            console.log(_this.method);
            // lưu thông qua service app-service.service.ts
            // 1. Nếu lưu thành công thì alert "Lưu thành công" và reset lại modal
            // 2. Nếu lưu thất bại in ra console
            _this.appService.updateMethod(_this.method).then(function (res) {
                console.log(_this.appService.messages.updateSuccess);
                alert(_this.appService.messages.updateSuccess);
                $("#updateMethodModal").modal("hide");
                // location.reload();
            }, function (res) { return console.log(res); });
        }, function (res) {
            console.log("fail" + res);
        });
    };
    UpdateMethodModalComponent.prototype.xoaMethod = function () {
        var _this = this;
        var checkConfirm = confirm("Khi chọn OK dữ liệu sẽ bị xóa mất trên hệ thống và không thể phục hồi!");
        if (checkConfirm) {
            for (var _i = 0, _a = this.method.comments; _i < _a.length; _i++) {
                var comment = _a[_i];
                this.appService.deleteBaoLoiById(comment._id).then(function (res) {
                }, function (res) { return console.log(res); });
            }
            this.appService.addMethodToMethodDeleted(this.method).then(function (res) {
            }, function (res) { return console.log(res); });
            this.appService.deleteMethod(this.method).then(function (res) {
                $("#updateMethodModal").modal('hide');
                _this.queryMethodToUpdate.emit("12345");
                // this.navFilterComponent.queryMethod();
            }, function (res) { return console.log(res); });
        }
        this.truyenXoaBaoLoiToHeader.emit(this.method.comments.length);
    };
    // Kiểm tra hợp lệ trước khi update hoặc upload video
    UpdateMethodModalComponent.prototype.checkValidation = function () {
        $('#hinh-feedback-update').css('display', 'none');
        $('#video-feedback-update').css('display', 'none');
        $('#method-name-feedback-update').css('display', 'none');
        // Kiểm tra trường nhập yêu cầu nhập tên không đc để trống    
        var methodName = $("#method-name-update").val();
        if (methodName === '') {
            $('#method-name-feedback-update').css('display', 'block');
            return Promise.reject(false);
        }
        // labelUpdate
        // Kiểm tra input image không được để trống vì nó ảnh hưởng tới index khi update
        var labelLTUpdate = $(".labelLTUpdate");
        for (var _i = 0, labelLTUpdate_1 = labelLTUpdate; _i < labelLTUpdate_1.length; _i++) {
            var item = labelLTUpdate_1[_i];
            if ($("#" + item.id).html() == this.CHON_HINH) {
                $('#hinh-feedback-update').css('display', 'block');
                return Promise.reject(false);
            }
        }
        var labelVUpdate = $(".labelVUpdate");
        for (var _a = 0, labelVUpdate_1 = labelVUpdate; _a < labelVUpdate_1.length; _a++) {
            var item = labelVUpdate_1[_a];
            if ($("#" + item.id).html() == this.CHON_VIDEO) {
                $('#video-feedback-update').css('display', 'block');
                return Promise.reject(false);
            }
        }
        return Promise.resolve(true);
    };
    UpdateMethodModalComponent.prototype.uploadFile = function (file, location) {
        console.log(location);
        var url = '/upload/photos';
        var formData = new FormData();
        var files = file.files;
        formData.append(location, files[0], files[0].name);
        this.http.post(url, formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) { return console.log("files", files); });
    };
    UpdateMethodModalComponent.prototype.onChangeImage = function (lythuyetURL, nameFile, labelId, url) {
        $("#" + lythuyetURL).attr('src', "../upload/hinh/" + url + "/" + nameFile);
        $("#" + labelId).html(nameFile);
        // console.log(lythuyetURL)
    };
    UpdateMethodModalComponent.prototype.onChangeVideo = function (videoURL, nameFile, labelId, xoaVUpdate, url) {
        $("#" + videoURL).html("<source src=\"../upload/video/" + url + "/" + nameFile + "\" type=\"video/mp4\"></source>");
        $("#" + xoaVUpdate).css("display", "block");
        $("#" + labelId).html(nameFile);
        // console.log(videoURL)
    };
    UpdateMethodModalComponent.prototype.nhanMethodFromPhuongPhap = function (method) {
        this.method = method;
        console.log(this.method);
        $("#lythuyet-input-update").html('');
        $("#lythuyet-img-update").html('');
        $("#video-input-update").html('');
        $("#video-url-update").html('');
        this.LTCount = 1;
        this.VCount = 1;
        for (var i = 0; i < this.method.images.length; i++) {
            // <img id="lythuyet${this.LTCount}UpdateURL" class="img-fluid image ">
            this.addInputLyThuyet();
            // this.LTCount++;
            this.onChangeImage("lythuyet" + (i + 1) + "UpdateURL", this.method.images[i], "label" + (i + 1) + "Update", this.method.url);
        }
        for (var i = 0; i < this.method.videos.length; i++) {
            this.addInputVideo();
            // this.VCount++;
            // this.onChangeVideo(`video${i + 1}UpdateURL`, this.method.videos[i], `labelV${i+1}Update`);
            this.onChangeVideo("video" + (i + 1) + "UpdateURL", this.method.videos[i], "labelV" + (i + 1) + "Update", "xoaV" + (i + 1) + "Update", this.method.url);
        }
        this.demHinhvaVideo();
    };
    /**
     * add and delete for lythuyet input
     */
    UpdateMethodModalComponent.prototype.addInputLyThuyet = function () {
        var lythuyet_input = "\n    <div id=\"lythuyet" + this.LTCount + "Update\" class=\"input-group mb-1 lythuyet-input-img\">\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input lythuyetUpdate-input\" id=\"lythuyet" + this.LTCount + "Update-input\" onchange=\"onChangeImage(event, 'lythuyet" + this.LTCount + "UpdateURL', 'btn-xoa" + this.LTCount + "Update', 'label" + this.LTCount + "Update');\">\n        <label id='label" + this.LTCount + "Update' class=\"custom-file-label labelLTUpdate\" for=\"lythuyet" + this.LTCount + "Update\">Ch\u1ECDn h\u00ECnh</label>\n      </div>\n    </div>\n    ";
        var lythuyet_img = "\n    <div id=\"xoa" + this.LTCount + "Update\" class=\"col-md-4\">\n      <div class=\"container_\">\n        <img id=\"lythuyet" + this.LTCount + "UpdateURL\" class=\"img-fluid image \">\n        <div class=\"middle\">\n          <button id=\"btn-xoa" + this.LTCount + "Update\" class=\"btn btn-danger\" onclick=\"deleteImageInput('lythuyet" + this.LTCount + "Update-input', 'lythuyet" + this.LTCount + "UpdateURL', 'btn-xoa" + this.LTCount + "Update', 'label" + this.LTCount + "Update')\">X\u00F3a</button>\n        </div>\n      </div>\n    </div>\n    ";
        $("#lythuyet-input-update").append(lythuyet_input);
        $("#lythuyet-img-update").append(lythuyet_img);
        this.LTCount++;
        this.demHinhvaVideo();
    };
    UpdateMethodModalComponent.prototype.deleteInputLyThuyet = function () {
        if (this.LTCount > 1) {
            this.LTCount--;
            $("div").remove("#lythuyet" + this.LTCount + "Update");
            $("div").remove("#xoa" + this.LTCount + "Update");
            this.demHinhvaVideo();
        }
    };
    /**
     * add and delete for video input
    */
    UpdateMethodModalComponent.prototype.addInputVideo = function () {
        if (this.VCount > 6)
            return 0;
        var video_input = "\n    <div id=\"video" + this.VCount + "Update\" class=\"input-group mb-1 video-input-img\">\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input video-input\" id=\"video" + this.VCount + "Update-input\" onchange=\"onChangeVideo(event, 'video" + this.VCount + "UpdateURL', 'xoaV" + this.VCount + "Update', 'btn-xoaV" + this.VCount + "Update', 'labelV" + this.VCount + "Update');\">\n        <label id='labelV" + this.VCount + "Update' class=\"custom-file-label labelVUpdate\" for=\"video" + this.VCount + "Update-input\">Ch\u1ECDn Video</label>\n      </div>\n    </div>\n    ";
        var video_url = "\n    <div id=\"xoaV" + this.VCount + "Update\" class=\"col-md-6 mb-2\" style=\"display:none\">\n      <div class=\"container_\" >\n        <video id=\"video" + this.VCount + "UpdateURL\" class=\"video img-thumbnail\" controls>\n          \n        </video>\n        <div class=\"middle\">\n          <button id=\"btn-xoaV" + this.VCount + "Update\" class=\"btn btn-danger\" onclick=\"deleteVideoInput('video" + this.VCount + "Update-input', 'video" + this.VCount + "UpdateURL', 'xoaV" + this.VCount + "Update', 'btn-xoaV" + this.VCount + "Update', 'labelV" + this.VCount + "Update')\">X\u00F3a</button>\n        </div>\n      </div>\n    </div>\n    ";
        $("#video-input-update").append(video_input);
        $("#video-url-update").append(video_url);
        this.VCount++;
        this.demHinhvaVideo();
    };
    UpdateMethodModalComponent.prototype.deleteInputVideo = function () {
        if (this.VCount > 1) {
            this.VCount--;
            $("div").remove("#video" + this.VCount + "Update");
            $("div").remove("#xoaV" + this.VCount + "Update");
            this.demHinhvaVideo();
        }
    };
    /**
     * Reset modal function
    */
    UpdateMethodModalComponent.prototype.resetAddMethodModal = function () {
        for (var i = this.LTCount - 1; i >= 0; i--) {
            $("div").remove("#lythuyet" + i + "Update");
            $("div").remove("#xoa" + i + "Update");
        }
        for (var i = this.VCount - 1; i >= 0; i--) {
            $("div").remove("#video" + i + "Update");
            $("div").remove("#xoaV" + i + "Update");
        }
        this.LTCount = 1;
        this.VCount = 1;
        $("#method-name-update").val('');
        this.addInputLyThuyet();
        this.addInputVideo();
        $("#method-name-update").focus();
    };
    UpdateMethodModalComponent.prototype.demHinhvaVideo = function () {
        // console.log(`Hinh: ${this.LTCount} - Video: ${this.VCount}`);
    };
    UpdateMethodModalComponent.prototype.toggleNhapTay = function () {
        this.nhaptayHidden = !this.nhaptayHidden;
        this.displayContentNhapTay = !this.displayContentNhapTay;
        if (this.displayContentNhapTay == false) {
            if (this.countNhapTay == 1) {
                this.countNhapTay++;
                CKEDITOR.instances.ckeditorUpdate.setData(this.method.contentNhapTay);
            }
            this.xemContentNhapTay();
        }
        // console.log(this.countNhapTay, this.nhaptayHidden, this.displayContentNhapTay)
    };
    UpdateMethodModalComponent.prototype.xemContentNhapTay = function () {
        var content = CKEDITOR.instances.ckeditorUpdate.getData();
        $("#lythuyet-nhaptay-update").html(content);
    };
    UpdateMethodModalComponent.prototype.getContentNhapTay = function () {
        var content = CKEDITOR.instances.ckeditorUpdate.getData();
        return content;
    };
    // transform lythuyet-nhaptay to image file
    UpdateMethodModalComponent.prototype.change2Canvas = function (url, name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var canvas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, html2canvas(document.getElementById("lythuyet-nhaptay-update"))];
                    case 1:
                        canvas = _a.sent();
                        canvas.toBlob(function (blob) {
                            blob.lastModifiedDate = new Date();
                            blob.name = name;
                            var file = { files: [blob] };
                            _this.uploadFile(file, "hinh/" + url);
                        }, "image/png");
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateMethodModalComponent.prototype.xulikhoangtrang = function (name) {
        var result = "";
        for (var i = 0; i < name.length; i++) {
            if (name[i] !== " ") {
                result += name[i];
            }
        }
        return result;
    };
    UpdateMethodModalComponent.prototype.initMethod = function () {
        this.createdDate = new Date().getTime();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("queryMethodToUpdate"),
        __metadata("design:type", Object)
    ], UpdateMethodModalComponent.prototype, "queryMethodToUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UpdateMethodModalComponent.prototype, "truyenXoaBaoLoiToHeader", void 0);
    UpdateMethodModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-method-modal',
            template: __webpack_require__(/*! ./update-method-modal.component.html */ "./src/app/modals/update-method-modal/update-method-modal.component.html"),
            styles: [__webpack_require__(/*! ./update-method-modal.component.css */ "./src/app/modals/update-method-modal/update-method-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _services_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]])
    ], UpdateMethodModalComponent);
    return UpdateMethodModalComponent;
}());



/***/ }),

/***/ "./src/app/models/method.ts":
/*!**********************************!*\
  !*** ./src/app/models/method.ts ***!
  \**********************************/
/*! exports provided: Method */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Method", function() { return Method; });
var Method = /** @class */ (function () {
    function Method(method, mon, mota, loai, lop, chuong, bai, title, createdDate, images, videos, comments, comments_delete, contentNhapTay, url) {
        this.method = method;
        this.mon = mon;
        this.mota = mota;
        this.loai = loai;
        this.lop = lop;
        this.chuong = chuong;
        this.bai = bai;
        this.title = title;
        this.createdDate = createdDate;
        this.images = images;
        this.videos = videos;
        this.comments = comments;
        this.comments_delete = comments_delete;
        this.contentNhapTay = contentNhapTay;
        this.url = url;
    }
    return Method;
}());

// if (loai === "Chuyên đề") {
//     phuongphap = {
//         method: this.loai, 
//         mon: mon, 
//         loai: loai, 
//         title: methodName,
//         images: arrayLT,
//         videos: arrayV,
//         createdDate: new Date(),
//         comments: [],
//         comments_delete: []
//     };
// } else {
//     phuongphap = {
//         method: this.loai, 
//         mon: mon, 
//         loai: loai, 
//         lop: lop, 
//         chuong: chuong,
//         bai: bai, title: methodName,
//         images: arrayLT,
//         videos: arrayV,
//         createdDate: new Date(),
//         comments: [],
//         comments_delete: []
//     };
// }


/***/ }),

/***/ "./src/app/services/animate-jquery.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/animate-jquery.service.ts ***!
  \****************************************************/
/*! exports provided: AnimateJqueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateJqueryService", function() { return AnimateJqueryService; });
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

var AnimateJqueryService = /** @class */ (function () {
    function AnimateJqueryService() {
    }
    AnimateJqueryService.prototype.fadeIn = function (id) {
        $("#" + id).toggleClass("fadeIn");
        setTimeout(function () {
            $("#" + id).toggleClass("fadeIn");
        }, 400);
    };
    AnimateJqueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AnimateJqueryService);
    return AnimateJqueryService;
}());



/***/ }),

/***/ "./src/app/services/app-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/app-service.service.ts ***!
  \*************************************************/
/*! exports provided: AppServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServiceService", function() { return AppServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppServiceService = /** @class */ (function () {
    function AppServiceService(_http) {
        this._http = _http;
        this.messages = {
            updateSuccess: "Update thành công!",
            updateError: "Update thất bại!",
            addSuccess: "Thêm mới thành công!",
            addError: "Thêm mới thất bại!"
        };
        this.loai = 'phương pháp';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
    }
    AppServiceService.prototype.getUserLogin = function () {
        var user = {};
        if (localStorage.user) {
            return true;
        }
        return false;
    };
    AppServiceService.prototype.checkAdmin = function () {
        var user;
        if (localStorage.user) {
            user = JSON.parse(localStorage.user);
            return user.role === 'ADMIN_ROLE' ? true : false;
        }
        return false;
    };
    AppServiceService.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    // dynamicSortBaoLoiByTime(property) {
    //   var sortOrder = 1;
    //   if(property[0] === "-") {
    //       sortOrder = -1;
    //       property = property.substr(1);
    //   }
    //   return function (a,b) {
    //       var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    //       return result * sortOrder;
    //   }
    // }
    AppServiceService.prototype.getListMethod = function () {
        var _this = this;
        var url = "/api/method";
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    AppServiceService.prototype.getMethodById = function (id) {
        var _this = this;
        var url = "/api/method/id/" + id;
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    AppServiceService.prototype.getListMethodByMethod = function (loai) {
        var _this = this;
        var url = "/api/method/" + loai;
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    AppServiceService.prototype.findById = function (loai, mon, lopChuyenDe, lop, chuong, bai) {
        var _this = this;
        var url = "/api/" + loai + "/" + mon + "/" + lopChuyenDe + "/" + lop + "/" + chuong + "/" + bai;
        console.log(url);
        // console.log(url);
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    // Upload image method
    AppServiceService.prototype.pushFileToServer = function (phuongphap) {
        var _this = this;
        // let _loai = loai === 'phương pháp' ? 'phuongphap' : 'congthuc';
        var url = "/api/method";
        return this._http.post(url, JSON.stringify(phuongphap), { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    AppServiceService.prototype.addMethodToMethodDeleted = function (method) {
        var _this = this;
        var url = "/api/method_deleted";
        return this._http.post(url, JSON.stringify(method), { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    // Update method
    AppServiceService.prototype.updateMethod = function (method) {
        var _this = this;
        var url = "/api/method/" + method._id;
        return this._http.put(url, JSON.stringify(method), { headers: this.headers })
            .toPromise()
            .then(function (method) { return _this.result = method; })
            .catch(this.handleError);
    };
    AppServiceService.prototype.deleteMethod = function (method) {
        var url = "/api/method/" + method._id;
        console.log(url);
        return this._http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    // Find index in array object
    AppServiceService.prototype.arrayObjectIndexOf = function (myArray, searchItem) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] == searchItem) {
                return i;
            }
        }
        return -1;
    };
    // ------------- TREE -------------------
    // Lấy cây phân cấp công thức/ phương pháp
    AppServiceService.prototype.postMethodTree = function (loai, name) {
        var _this = this;
        var url = "/api/methodtree/" + loai;
        console.log(loai, name);
        return this._http.post(url, JSON.stringify(name), { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    AppServiceService.prototype.getListMethodTree = function (loai) {
        var _this = this;
        var url = "/api/methodtree/" + loai;
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    AppServiceService.prototype.getListMethodTreeToCheck = function (loai, name) {
        var _this = this;
        var url = "/api/methodtree/" + loai + "/" + name;
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    AppServiceService.prototype.deleteMethodTree = function (loai, name) {
        var _this = this;
        var url = "/api/methodtree/" + loai + "/" + name;
        return this._http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    // ---------------- QUERY GHICHU TEST --------
    AppServiceService.prototype.getMethodTest = function (id) {
        var _this = this;
        var url = "/api/ghichu/" + id;
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    AppServiceService.prototype.getBaoLois = function () {
        var _this = this;
        var url = "/ghichu/baoloi";
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    AppServiceService.prototype.deleteBaoLoiById = function (id) {
        var _this = this;
        var url = "/ghichu/baoloi/" + id;
        return this._http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    // ----------------- SEARCH METHOD -------------------
    AppServiceService.prototype.searchMethod = function (text) {
        var _this = this;
        var url = "/ghichu/search/" + text;
        return this._http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return _this.result = res.json(); })
            .catch(this.handleError);
    };
    AppServiceService.prototype.handleError = function (error) {
        console.error('An error occurred', error); //for demo purposes only
        return Promise.reject(error.massage || error);
    };
    AppServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AppServiceService);
    return AppServiceService;
}());



/***/ }),

/***/ "./src/app/services/math.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/math.service.ts ***!
  \******************************************/
/*! exports provided: MathService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathService", function() { return MathService; });
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

var MathService = /** @class */ (function () {
    function MathService() {
    }
    MathService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MathService);
    return MathService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! /Users/hungcao/Public/quanlyphuongphap/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map