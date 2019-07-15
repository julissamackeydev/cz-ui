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

/***/ "./src/app/acclaim/acclaim.component.css":
/*!***********************************************!*\
  !*** ./src/app/acclaim/acclaim.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2xhaW0vYWNjbGFpbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/acclaim/acclaim.component.html":
/*!************************************************!*\
  !*** ./src/app/acclaim/acclaim.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-nav-bar class=\" col s12 sticky\"></app-nav-bar>\n</div>\n\n<div class='cz-red-text med-top-margin container'>\n  <div class=\"row\">\n\n    <div class=\"col s6 landing-page-background full-height\">\n      <div class=\"row\">\n        <h5 style=\"text-align:right; padding-right:10%;\">RECENT REVIEWS</h5>\n      </div>\n      <div class=\"row\">\n        <div *ngFor=\"let review of featuredReviews\" style=\"font-size: large; text-align:right; padding-right:10%; padding-top: 7%;\">\n            <p>\"{{review.review}}.\"</p>\n            <p style=\"font-style:italic; text-align: right\">- {{review.source}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col s6\" style=\"text-align:left;\">\n      <div class=\"row\">\n        <h5 style=\"padding-left:12%\">OTHER CRITICAL ACCLAIM</h5>\n      </div>\n      <div class=\"row\">\n        <div *ngFor=\"let review of otherReviews\" style=\"font-size:large; padding-left:12%; padding-top: 7%; text-align: left;\">\n            <p>\"{{review.review}}\"</p>\n            <p style=\"font-style:italic;\">- {{review.source}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer style=\"\nbottom: 0;\nwidth: 100%;\"></app-footer>"

/***/ }),

/***/ "./src/app/acclaim/acclaim.component.ts":
/*!**********************************************!*\
  !*** ./src/app/acclaim/acclaim.component.ts ***!
  \**********************************************/
/*! exports provided: AcclaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcclaimComponent", function() { return AcclaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcclaimComponent = /** @class */ (function () {
    function AcclaimComponent() {
        this.featuredReviews = [
            {
                "source": "Opera News",
                "review": "Commissioner Kenesaw “Mountain” Landis who’s portrayed by bass Christian Zaremba as a thundering Old testament figure in flowing judicial robes.",
                "date": "",
                "performance": "THE FIX"
            },
            {
                "source": "Broadway World",
                "review": "Christian Zaremba is gracefully menacing as Sparafucile, the hired assassin. On his exit at the end of one scene he holds an almost sub-sonic bass note practically forever.",
                "date": "",
                "performance": "RIGOLETTO"
            }
        ];
        this.otherReviews = [
            {
                "source": "Anne Midgette, The Washington Post",
                "review": "Stealing the evening, though, was Christian Zaremba as the dancing master, Passagallo.  Zaremba already stood out this summer, vocally and dramatically, as Collatinus, the husband in the stark, tragic “The Rape of Lucretia.” For “L’Opera Seria,” he donned bandana, sweats, leg warmers and a dancer’s floating gait, and, dragging nervously on a cigarette, fussed over every detail of the performance and came up with artistic “inspirations,”... Zaremba has the comedian’s gift of playing his role absolutely seriously, and he sings well to boot. I found myself wishing Wolf Trap would make Passagallo a recurring character, like Borat, appearing on the sidelines of every future opera performance with earnest suggestions and an occasional pirouette.",
                "date": "",
                "performance": "L’OPERA SERIA"
            },
            {
                "source": "Glen Roven, The Huffington Post",
                "review": "He sang magnificently and his youthful energy never strained the credibility of the scene.",
                "date": "",
                "performance": "DON GIOVANNI"
            },
            {
                "source": " Anthony Tommasini, The New York Times",
                "review": "Also winning was Christian Zaremba, a stage animal with a big bass voice, as Pistola.",
                "date": "",
                "performance": "FALSTAFF"
            },
        ];
    }
    AcclaimComponent.prototype.ngOnInit = function () {
    };
    AcclaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-acclaim',
            template: __webpack_require__(/*! ./acclaim.component.html */ "./src/app/acclaim/acclaim.component.html"),
            styles: [__webpack_require__(/*! ./acclaim.component.css */ "./src/app/acclaim/acclaim.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AcclaimComponent);
    return AcclaimComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _latest_latest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./latest/latest.component */ "./src/app/latest/latest.component.ts");
/* harmony import */ var _acclaim_acclaim_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acclaim/acclaim.component */ "./src/app/acclaim/acclaim.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _app_latest_detail_latest_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/latest-detail/latest-detail.component */ "./src/app/latest-detail/latest-detail.component.ts");










var routes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponent"] },
    { path: 'calendar', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"] },
    { path: 'latest', component: _latest_latest_component__WEBPACK_IMPORTED_MODULE_6__["LatestComponent"] },
    { path: 'acclaim', component: _acclaim_acclaim_component__WEBPACK_IMPORTED_MODULE_7__["AcclaimComponent"] },
    { path: 'bio', component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_4__["BioComponent"] },
    { path: 'details/:title', component: _app_latest_detail_latest_detail_component__WEBPACK_IMPORTED_MODULE_9__["LatestDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled'
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cz-ui';
    }
    AppComponent.prototype.ngOnInit = function () {
        materialize_css__WEBPACK_IMPORTED_MODULE_2__["AutoInit"]();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _latest_latest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./latest/latest.component */ "./src/app/latest/latest.component.ts");
/* harmony import */ var _acclaim_acclaim_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./acclaim/acclaim.component */ "./src/app/acclaim/acclaim.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _latest_detail_latest_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./latest-detail/latest-detail.component */ "./src/app/latest-detail/latest-detail.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_6__["BioComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],
                _latest_latest_component__WEBPACK_IMPORTED_MODULE_8__["LatestComponent"],
                _acclaim_acclaim_component__WEBPACK_IMPORTED_MODULE_9__["AcclaimComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["LandingPageComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                _latest_detail_latest_detail_component__WEBPACK_IMPORTED_MODULE_14__["LatestDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio/bio.component.css":
/*!***************************************!*\
  !*** ./src/app/bio/bio.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jpby9iaW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bio/bio.component.html":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-nav-bar class=\" col s12 sticky\"></app-nav-bar>\n</div>\n<div class=\"landing-page-background light-text med-top-margin full-height\">\n    <div class=\"container\">\n      <h1>Christian Zaremba | BASSO CANTANTE </h1>\n        <div class=\"bio-text\">\n          <div *ngFor=\"let paragraph of content\">\n            <p>{{paragraph}}</p>\n          </div>\n      \n        </div>\n      </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BioComponent = /** @class */ (function () {
    function BioComponent() {
        this.content = ["Whether \u201Cstealing the evening. . . as the dancing master\u201D (The Washington Post) or \u201Cchilling in espousing the theories of Negro management\u201D (Opera News), French-American bass, Christian Zaremba, is intent on leaving a strong impression each time he performs.\n  Last season, Mr. Zaremba was seen as Angelotti in Tosca at the Metropolitan Opera, Sparafucile in Rigoletto with Michigan Opera Theater, Zuniga in Carmen with Austin Opera, and the bass soloist in Verdi\u2019s Requiem with The Greenwich Symphony.\u00A0\u00A0Recent highlights include Il Re in A\u00EFda with the National Symphony, Collatinus in The Rape of Lucretia, Passagallo in L\u2019Opera Seria, and Dr. Bartolo in Le nozze di Figaro with Wolf Trap Opera, Colline in La boh\u00E8me with Portland Opera and Opera Omaha, Sarastro in Die Zauberfl\u00F6te and Ashby in La fanciulla del West with Minnesota Opera, and the Bass Soloist in The Little Match Girl Passion with the Glimmerglass Festival and Portland Opera.",
            "In the 2018-2019 season, Mr. Zaremba returns to The Metropolitan for productions of Gianni Schicchi and Tosca before greeting the New Year with a return to Austin Opera as the French General in Silent Night and to Minnesota Opera as Mountain Landis in the world premier of The Fix by Joel Puckett.\u00A0\u00A0He then makes debuts with The Lyric Opera of Kansas City as Nouribad in Les p\u00EAcheurs des perles and reprises his Sparafucile in Rigoletto with Opera Theatre of St. Louis.",
            "Future seasons will see him join the cast of Agrippina at the Royal Opera House in London, as Colline in La boh\u00E8me with Lyric Opera of Kansas City, Lesbo in Agrippina with the Metropolitan Opera, Sparafucile in Rigoletto with Nashville Opera, Sarastro in Die Zauberfl\u00F6te with Op\u00E9ra de Montreal, and in a much-anticipated titular role debut with Austin Opera."];
    }
    BioComponent.prototype.ngOnInit = function () {
    };
    BioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/bio/bio.component.html"),
            styles: [__webpack_require__(/*! ./bio.component.css */ "./src/app/bio/bio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"light-background full-height\">\n\n  <div class=\"row\">\n    <app-nav-bar class=\" col s12 sticky\"></app-nav-bar>\n  </div>\n\n  <div class=\"container med-top-margin\">\n\n    <div class=\"row valign-wrapper\" style=\"text-align: center;\">\n      <div class=\"col s4\">\n        <p>DATE</p>\n      </div>\n      <div class=\"col s4\">\n        <p>LOCATION</p>\n      </div>\n      <div class=\"col s4\">\n        <p>EVENT</p>\n      </div>\n    </div>\n\n    <div class=\"divider red\"></div>\n\n    <div *ngFor=\"let event of upcoming\">\n      <div class=\"row valign-wrapper hoverable\" style=\"text-align: center;\">\n        <div class=\"col s4\">\n          <p><a class='black-text' href={{event.tickets}} target=\"_blank\">{{event.date}}</a></p>\n        </div>\n        <div class=\"col s4\">\n          <p><a class='black-text' href={{event.tickets}} target=\"_blank\">{{event.location}}, {{event.city}}</a></p>\n        </div>\n        <div class=\"col s4\">\n          <p><a class='black-text' href={{event.tickets}} target=\"_blank\">{{event.event}}</a></p>\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n  </div>\n</div>\n\n<app-footer style=\"position: fixed;\nbottom: 0;\nwidth: 100%;\"></app-footer>"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        this.upcoming = [
            {
                "_id": {
                    "$oid": "5cd8a219d38f5a51aeb17aa3"
                },
                "date": "AUG 19 - OCT 12 2019",
                "location": "ROYAL OPERA HOUSE",
                "city": "LONDON",
                "event": "AGRIPPINA",
                "tickets": "https://www.roh.org.uk/"
            },
            {
                "_id": {
                    "$oid": "5cd8a219d38f5a51aeb17aa3"
                },
                "date": "OCT 19 - NOV 17 2019",
                "location": "LYRIC OPERA",
                "city": "KANSAS CITY",
                "event": "LA BOHEME",
                "tickets": "https://kcopera.org/"
            },
            {
                "_id": {
                    "$oid": "5cd8a219d38f5a51aeb17aa3"
                },
                "date": "DEC 23 2019 - MAR 7 2020",
                "location": "METROPOLITAN OPERA",
                "city": "NEW YORK CITY",
                "event": "AGRIPPINA",
                "tickets": "https://www.metopera.org/"
            },
            {
                "_id": {
                    "$oid": "5cd8a219d38f5a51aeb17aa3"
                },
                "date": "MAR 28 - APR 11 2020",
                "location": "NASHVILLE OPERA",
                "city": "NASHVILLE",
                "event": "RIGOLETTO",
                "tickets": "http://www.nashvilleopera.org/"
            },
            {
                "_id": {
                    "$oid": "5cd8a219d38f5a51aeb17aa3"
                },
                "date": "APR 19 - MAY 30 2020",
                "location": "L'OPERA DE MONTREAL",
                "city": "MONTREAL",
                "event": "DIE ZAUBERFLÖTE",
                "tickets": "https://www.operademontreal.com/en"
            }
        ];
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer red-background white-text\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <a class=\"col s2 btn-flat white-text\" href=\"mailto:christian.zaremba@yahoo.com?Subject=Website%20Correspondence\" target=\"_top\">EMAIL</a>\n      <a class=\"col s2 btn-flat white-text\" href=\"https://www.instagram.com/zarembabass/\" target=\"_blank\">INSTAGRAM </a> \n      <a class=\"col s2 btn-flat white-text\" href=\"mailto:ana@ada-artists.com?Subject=Christian%20%Zaremba%20Inquiry\" target=\"_top\">MANAGEMENT</a>\n      <h5 style=\"float:right;\">CHRISTIAN ZAREMBA | BASSO CANTANTE</h5>\n    </div>\n\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-nav-bar class=\" col s12\"></app-nav-bar>\n</div>\n\n<div class=\"landing-page-background med-top-margin white-text\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- images -->\n      <div class=\"gallery-images\">\n        <div class=\"row\">\n          <h5 class=\"col s12\" style=\"text-align:center;\">ALBUMS & VIDEOS</h5>\n        </div>\n        <div class=\"video-container\">\n            <iframe width=\"560\" height=\"315\"  src=\"https://www.youtube.com/embed/Mq9XRspIXJ0\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div *ngFor=\"let album of albums\" >\n          <div class=\"col s4\">\n            <div class=\"gallery-thumbnail lesser-top-margin\" style=\"float: right; text-align:center; margin-bottom:12%;\" id={{album._id.$oid}}>\n                <h5 class=\"btn-flat album-name white-text\" >{{album.description}}</h5>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<app-footer style=\"\nbottom: 0;\nwidth: 100%;\"></app-footer>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.albums = [
            {
                "_id": { "$oid": "j-d-l-rigoletto" },
                "links": ["src/assets/j-david-levy-rigoletto-st-louis/20190526_3324.jpg",
                    "src/assets/j-david-levy-rigoletto-st-louis/20190530_1458.jpg"],
                "description": "RIGOLETTO | OPERA THEATER ST LOUIS [ PHOTOS BY J DAVID LEVY ]"
            },
            {
                "_id": { "$oid": "pavan" },
                "links": [
                    'src/assets/pavan/Christian_Z-2.jpg',
                    'src/assets/pavan/Christian_Z-3.jpg',
                    'src/assets/pavan/Christian_Z-5.jpg',
                    'src/assets/pavan/Christian_Z-31.jpg',
                ],
                "description": "PHOTOS BY BRANDON PAVAN"
            },
            {
                "_id": { "$oid": "portland-difficulty" },
                "links": ["src/assets/portland-cory-weaver-difficulty-of-crossing-a-field/andrew.jpg"],
                "description": "DIFFICULTY OF CROSSING A FIELD | PORTLAND OPERA"
            },
            {
                "_id": { "$oid": "hoebermann" },
                "links": [
                    'src/assets/hoebermann/0195 Christian Zaremba LO RES.jpg',
                    'src/assets/hoebermann/0206 Christian Zaremba drama.jpg',
                    'src/assets/hoebermann/0220 Christian Zaremba lighter.jpg',
                    'src/assets/hoebermann/1943 Christian Zaremba LO RES.jpg'
                ],
                "description": "PHOTOS BY KRISTEN HOEBERMANN"
            },
            {
                "_id": { "$oid": "elise-bakketun-pearl-fishers" },
                "links": ["src/assets/elise-bakketun-pearl-fishers/thumbnail-3.jpg",
                    "src/assets/elise-bakketun-pearl-fishers/thumbnail-4.jpg",
                    "src/assets/elise-bakketun-pearl-fishers/thumbnail-5.jpg"
                ],
                "description": "PEARL FISHERS | LYRIC OPERA OF KANSAS CITY [ PHOTOS BY ELISE BAKKETUN ]"
            },
            {
                "_id": { "$oid": "dario-acosta-opera-news" },
                "links": ["src/assets/dario-acosta-opera-news/SoundBitesChristianZarembahdl1217.jpg",
                    "src/assets/dario-acosta-opera-news/SoundBitesZarembalg1217.jpg"
                ],
                "description": "OPERA NEWS DEC 2018 | PHOTOS BY DARIO ACOSTA"
            },
            {
                "_id": { "$oid": "tosca-metropolitan-opera" },
                "links": ["src/assets/tosca-metropolitan-opera/32104763_10156738114363690_3854604604083798016_n.jpg",
                    "src/assets/tosca-metropolitan-opera/Screen Shot 2018-09-25 at 9.43.25 AM.jpg",
                    'src/assets/tosca-metropolitan-opera/Tosca Bow.jpg'
                ],
                "description": "TOSCA | METROPOLITAN OPERA"
            },
            {
                "_id": { "$oid": "don-giovanni-venture" },
                "links": ["src/assets/don-giovanni-venture/don-giovanni-venture.JPG"],
                "description": "DON GIOVANNI | VENTURE OPERA"
            },
            {
                "_id": { "$oid": "pistola-prelude" },
                "links": ["src/assets/falstaff-prelude/pistola-prelude.jpg"],
                "description": "FALSTAFF | PRELUDE TO PERFORMANCE"
            }
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height\">\n  <div class=\"parallax-container\">\n    <div class=\"row landing-page-background\"></div>\n    <div class=\"row landing-page-height\">\n      <div class=\"col s6 white-text landing-page-background\" style=\"height:100%\">\n        <h1>CHRISTIAN ZAREMBA</h1>\n        <h2>BASSO CANTANTE</h2>\n        <br>\n        <br>\n        <h3>{{location}}</h3>\n        <h3>{{opera}}</h3>\n        <h6>{{startDate}} - {{endDate}}</h6>\n        <h5><a class=\"btn-flat red-text\" href={{tickets}} target=\"_blank\">PURCHASE TICKETS</a></h5>\n      </div>\n      <div class=\"col s6 landing-page-background-image\" style=\"height:100%\"></div>\n    </div>\n    <div class=\"row\">\n      <app-nav-bar class=\"col s12\"></app-nav-bar>\n    </div>\n  </div>\n</div>\n\n<div class=\"container med-top-margin\" style='padding-bottom:7%;'>\n  <h1 style=\"text-align: center;\">UPCOMING PERFORMANCES</h1>\n  <div class=\"row valign-wrapper\" style=\"text-align: center;\">\n    <div class=\"col s4\">\n      <p>DATE</p>\n    </div>\n    <div class=\"col s4\">\n      <p>LOCATION</p>\n    </div>\n    <div class=\"col s4\">\n      <p>EVENT</p>\n    </div>\n  </div>\n\n  <div class=\"divider red\"></div>\n\n  <div *ngFor=\"let event of upcoming\">\n      <div class=\"row valign-wrapper hoverable\" style=\"text-align: center;\">\n        <div class=\"col s4\">\n          <p><a class='black-text' href={{event.tickets}} target=\"_blank\">{{event.date}}</a></p>\n        </div>\n        <div class=\"col s4\">\n          <p><a class='black-text' href={{event.tickets}} target=\"_blank\">{{event.location}}, {{event.city}}</a></p>\n        </div>\n        <div class=\"col s4\">\n          <p><a class='black-text' href={{event.tickets}} target=\"_blank\">{{event.event}}</a></p>\n        </div>\n      </div>\n    </div>\n\n</div>\n\n<div class=\"landing-page-background light-text\" style='padding-bottom:7%;'>\n  <div class=\"container\">\n    <h1>Christian Zaremba | BASSO CANTANTE</h1>\n    <div class=\"bio-text\" *ngFor=\"let paragraph of bioContent\">\n      <p>{{paragraph}}</p>\n    </div>\n  </div>\n</div>\n\n<div class='full-height'>\n  <h1 class=\"cz-red-text\">IN THE NEWS</h1>\n  <div class=\"row lesser-top-margin left-margin\">\n\n\n    <div class=\"col s3 latest-block\" id={{newsClips[0].image}}>\n      <p class='latest-text'>{{newsClips[0].description}}</p>\n      <p class='latest-text'>{{newsClips[0].date}}</p>\n      <div class=\"overlay\">\n        <p class=' btn-flat latest-text' [routerLink]=\"['/details/', newsClips[0]._id.$oid]\">READ MORE</p>\n      </div>\n    </div>\n\n    <div class=\"col s3 latest-block\" id={{newsClips[1].image}}>\n      <p class='latest-text'>{{newsClips[1].description}}</p>\n      <p class='latest-text'>{{newsClips[1].date}}</p>\n      <div class=\"overlay\">\n        <p class=' btn-flat latest-text' [routerLink]=\"['/details/', newsClips[1]._id.$oid]\">READ MORE</p>\n      </div>\n    </div>\n\n    <div class=\"col s3 latest-block\" id={{newsClips[2].image}}>\n      <p class='latest-text'>{{newsClips[2].description}}</p>\n      <p class='latest-text'>{{newsClips[2].date}}</p>\n      <div class=\"overlay\">\n        <p class=' btn-flat latest-text' [routerLink]=\"['/details/', newsClips[2]._id.$oid]\">READ MORE</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"divider red\"></div>\n  <div class=\"row\">\n    <div class=\"col s7\">\n      <div class=\"row cz-red-text\" style=\"font-style:italic\">\n        <div class=\"col s4 med-top-margin\">\n          <p></p>\n        </div>\n        <div class=\"col s4 med-top-margin\">\n          <p>{{featuredReviews[0].review}}</p>\n          <p> - {{featuredReviews[0].source}}</p>\n        </div>\n        <div class=\"col s4 med-top-margin\">\n          <p>{{featuredReviews[1].review}}</p>\n          <p> - {{featuredReviews[1].source}}</p>\n        </div>\n      </div>\n    </div>\n    <h1 class='cz-red-text col s4' style=\"text-align:right;\">RECENT REVIEWS</h1>\n  </div>\n\n</div>\n\n\n<div class=\"landing-page-background med-top-margin white-text\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <!-- images -->\n        <div class=\"gallery-images\">\n          <div class=\"row\">\n            <h5 class=\"col s12\" style=\"text-align:center;\">ALBUMS & VIDEOS</h5>\n          </div>\n          <div class=\"video-container\">\n              <iframe width=\"560\" height=\"315\"  src=\"https://www.youtube.com/embed/Mq9XRspIXJ0\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n          </div>\n          <div *ngFor=\"let album of albums\" >\n            <div class=\"col s4\">\n              <div class=\"gallery-thumbnail lesser-top-margin\" style=\"float: right; text-align:center; margin-bottom:12%;\" id={{album._id.$oid}}>\n                  <h5 class=\"btn-flat album-name white-text\" >{{album.description}}</h5>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.location = "ROYAL OPERA HOUSE, UK";
        this.opera = "AGRIPPINA";
        this.startDate = "AUGUST 19";
        this.endDate = " OCTOBER 12";
        this.tickets = "https://www.roh.org.uk/";
        this.upcoming = [
            {
                "_id": {
                    "$oid": "5cd8a219d38f5a51aeb17aa3"
                },
                "date": "AUG 19 - OCT 12 2019",
                "location": "ROYAL OPERA HOUSE",
                "city": "LONDON",
                "event": "AGRIPPINA",
                "tickets": "https://www.roh.org.uk/"
            },
            {
                "_id": {
                    "$oid": "5cd8a219d38f5a51aeb17aa3"
                },
                "date": "OCT 19 - NOV 17 2019",
                "location": "LYRIC OPERA",
                "city": "KANSAS CITY",
                "event": "LA BOHEME",
                "tickets": "https://kcopera.org/"
            },
            {
                "_id": {
                    "$oid": "5cd8a219d38f5a51aeb17aa3"
                },
                "date": "DEC 23 2019 - MAR 7 2020",
                "location": "METROPOLITAN OPERA",
                "city": "NEW YORK CITY",
                "event": "AGRIPPINA",
                "tickets": "https://www.metopera.org/"
            },
            {
                "_id": {
                    "$oid": "5cd8a219d38f5a51aeb17aa3"
                },
                "date": "MAR 28 - APR 11 2020",
                "location": "NASHVILLE OPERA",
                "city": "NASHVILLE",
                "event": "RIGOLETTO",
                "tickets": "http://www.nashvilleopera.org/"
            },
            {
                "_id": {
                    "$oid": "5cd8a219d38f5a51aeb17aa3"
                },
                "date": "APR 19 - MAY 30 2020",
                "location": "L'OPERA DE MONTREAL",
                "city": "MONTREAL",
                "event": "DIE ZAUBERFLÖTE",
                "tickets": "https://www.operademontreal.com/en"
            }
        ];
        this.bioContent = ["Whether \u201Cstealing the evening. . . as the dancing master\u201D (The Washington Post) or \u201Cchilling in espousing the theories of Negro management\u201D (Opera News), French-American bass, Christian Zaremba, is intent on leaving a strong impression each time he performs.\n  Last season, Mr. Zaremba was seen as Angelotti in Tosca at the Metropolitan Opera, Sparafucile in Rigoletto with Michigan Opera Theater, Zuniga in Carmen with Austin Opera, and the bass soloist in Verdi\u2019s Requiem with The Greenwich Symphony.\u00A0\u00A0Recent highlights include Il Re in A\u00EFda with the National Symphony, Collatinus in The Rape of Lucretia, Passagallo in L\u2019Opera Seria, and Dr. Bartolo in Le nozze di Figaro with Wolf Trap Opera, Colline in La boh\u00E8me with Portland Opera and Opera Omaha, Sarastro in Die Zauberfl\u00F6te and Ashby in La fanciulla del West with Minnesota Opera, and the Bass Soloist in The Little Match Girl Passion with the Glimmerglass Festival and Portland Opera.",
            "In the 2018-2019 season, Mr. Zaremba returns to The Metropolitan for productions of Gianni Schicchi and Tosca before greeting the New Year with a return to Austin Opera as the French General in Silent Night and to Minnesota Opera as Mountain Landis in the world premier of The Fix by Joel Puckett.\u00A0\u00A0He then makes debuts with The Lyric Opera of Kansas City as Nouribad in Les p\u00EAcheurs des perles and reprises his Sparafucile in Rigoletto with Opera Theatre of St. Louis.",
            "Future seasons will see him join the cast of Agrippina at the Royal Opera House in London, as Colline in La boh\u00E8me with Lyric Opera of Kansas City, Lesbo in Agrippina with the Metropolitan Opera, Sparafucile in Rigoletto with Nashville Opera, Sarastro in Die Zauberfl\u00F6te with Op\u00E9ra de Montreal, and in a much-anticipated titular role debut with Austin Opera."];
        this.newsClips = [
            {
                "_id": { "$oid": "st-louis" },
                "description": "AS A HIRED ASSASSIN...",
                "date": "JUL 11 2019",
                "content": "In review of Opera Theater of St. Louis’ Rigoletto, Broadway World notes, “Christian Zaremba is gracefully menacing as Sparafucile, the hired assassin. On his exit at the end of one scene he holds an almost sub-sonic bass note practically forever.  Read the full review here: ",
                "link": "https://www.broadwayworld.com/bwwopera/article/BWW-Review-A-Glorious-RIGOLETTO-Opens-at-Opera-Theatre-St-Louis-20190604",
                "image": "sparafucille-rigoletto"
            },
            {
                "_id": { "$oid": "roya-opera" },
                "description": "AGRIPPINA AT ROYAL OPERA",
                "date": "JUL 11 2019",
                "content": "Christian has recently been invited to the Royal Opera House in London to join the cast of Agrippina, which includes Joyce DiDonato, Franco Fagioli, and Ierstyn Davies.   Maxim Emelyanychev conducts.",
                "image": "convent-garden",
            },
            {
                "_id": { "$oid": "mussorgsky" },
                "description": "SONGS & DANCES OF DEATH",
                "date": "JUL 11 2019",
                "content": "Christian will sing Modest Mussorgski’s famous song cycle for bass, Songs and Dances of Death, with the Greenwich Symphony in late November 2019.  Please check later for scheduling updates.",
                "image": "mussorgsky"
            }
        ];
        this.featuredReviews = [
            {
                "source": "Opera News",
                "review": "Commissioner Kenesaw “Mountain” Landis who’s portrayed by bass Christian Zaremba as a thundering Old testament figure in flowing judicial robes.",
                "date": "",
                "performance": "THE FIX"
            },
            {
                "source": "Broadway World",
                "review": "Christian Zaremba is gracefully menacing as Sparafucile, the hired assassin. On his exit at the end of one scene he holds an almost sub-sonic bass note practically forever.",
                "date": "",
                "performance": "RIGOLETTO"
            }
        ];
        this.albums = [
            {
                "_id": { "$oid": "j-d-l-rigoletto" },
                "links": ["src/assets/j-david-levy-rigoletto-st-louis/20190526_3324.jpg",
                    "src/assets/j-david-levy-rigoletto-st-louis/20190530_1458.jpg"],
                "description": "RIGOLETTO | OPERA THEATER ST LOUIS [ PHOTOS BY J DAVID LEVY ]"
            },
            {
                "_id": { "$oid": "pavan" },
                "links": [
                    'src/assets/pavan/Christian_Z-2.jpg',
                    'src/assets/pavan/Christian_Z-3.jpg',
                    'src/assets/pavan/Christian_Z-5.jpg',
                    'src/assets/pavan/Christian_Z-31.jpg',
                ],
                "description": "PHOTOS BY BRANDON PAVAN"
            },
            {
                "_id": { "$oid": "portland-difficulty" },
                "links": ["src/assets/portland-cory-weaver-difficulty-of-crossing-a-field/andrew.jpg"],
                "description": "DIFFICULTY OF CROSSING A FIELD | PORTLAND OPERA"
            },
            {
                "_id": { "$oid": "hoebermann" },
                "links": [
                    'src/assets/hoebermann/0195 Christian Zaremba LO RES.jpg',
                    'src/assets/hoebermann/0206 Christian Zaremba drama.jpg',
                    'src/assets/hoebermann/0220 Christian Zaremba lighter.jpg',
                    'src/assets/hoebermann/1943 Christian Zaremba LO RES.jpg'
                ],
                "description": "PHOTOS BY KRISTEN HOEBERMANN"
            },
            {
                "_id": { "$oid": "elise-bakketun-pearl-fishers" },
                "links": ["src/assets/elise-bakketun-pearl-fishers/thumbnail-3.jpg",
                    "src/assets/elise-bakketun-pearl-fishers/thumbnail-4.jpg",
                    "src/assets/elise-bakketun-pearl-fishers/thumbnail-5.jpg"
                ],
                "description": "PEARL FISHERS | LYRIC OPERA OF KANSAS CITY [ PHOTOS BY ELISE BAKKETUN ]"
            },
            {
                "_id": { "$oid": "dario-acosta-opera-news" },
                "links": ["src/assets/dario-acosta-opera-news/SoundBitesChristianZarembahdl1217.jpg",
                    "src/assets/dario-acosta-opera-news/SoundBitesZarembalg1217.jpg"
                ],
                "description": "OPERA NEWS DEC 2018 | PHOTOS BY DARIO ACOSTA"
            },
            {
                "_id": { "$oid": "tosca-metropolitan-opera" },
                "links": ["src/assets/tosca-metropolitan-opera/32104763_10156738114363690_3854604604083798016_n.jpg",
                    "src/assets/tosca-metropolitan-opera/Screen Shot 2018-09-25 at 9.43.25 AM.jpg",
                    'src/assets/tosca-metropolitan-opera/Tosca Bow.jpg'
                ],
                "description": "TOSCA | METROPOLITAN OPERA"
            },
            {
                "_id": { "$oid": "don-giovanni-venture" },
                "links": ["src/assets/don-giovanni-venture/don-giovanni-venture.JPG"],
                "description": "DON GIOVANNI | VENTURE OPERA"
            },
            {
                "_id": { "$oid": "pistola-prelude" },
                "links": ["src/assets/falstaff-prelude/pistola-prelude.jpg"],
                "description": "FALSTAFF | PRELUDE TO PERFORMANCE"
            }
        ];
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/latest-detail/latest-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/latest-detail/latest-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhdGVzdC1kZXRhaWwvbGF0ZXN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/latest-detail/latest-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/latest-detail/latest-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-nav-bar class=\" col s12 sticky\"></app-nav-bar>\n</div>\n\n<div class=\"landing-page-background med-top-margin detail-text \">\n  <h1>{{currentPiece.description}}</h1>\n  <div class=\"row\">\n    <div class=\"col s3\"></div>\n    <div class=\"col s6\" style=\"font-size: larger\">\n      <p>{{currentPiece.content}}</p>\n      <h6>{{currentPiece.date}}</h6>\n    </div>\n    <div class=\"col s3\" id='sparafucille-rigoletto'>\n    </div>\n  </div>\n</div>\n\n<app-footer style=\"position: fixed;\nbottom: 0;\nwidth: 100%;\"></app-footer>"

/***/ }),

/***/ "./src/app/latest-detail/latest-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/latest-detail/latest-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: LatestDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestDetailComponent", function() { return LatestDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LatestDetailComponent = /** @class */ (function () {
    function LatestDetailComponent() {
        this.clips = [
            {
                "_id": { "$oid": "roya-opera" },
                "description": "AGRIPPINA AT ROYAL OPERA",
                "date": "JUL 11 2019",
                "content": "Christian has recently been invited to the Royal Opera House in London to join the cast of Agrippina, which includes Joyce DiDonato, Franco Fagioli, and Ierstyn Davies.   Maxim Emelyanychev conducts.",
                "image": "convent-garden",
            },
            {
                "_id": { "$oid": "st-louis" },
                "description": "AS A HIRED ASSASSIN...",
                "date": "JUL 11 2019",
                "content": "In review of Opera Theater of St. Louis’ Rigoletto, Broadway World notes, “Christian Zaremba is gracefully menacing as Sparafucile, the hired assassin. On his exit at the end of one scene he holds an almost sub-sonic bass note practically forever.  Read the full review here: ",
                "link": "https://www.broadwayworld.com/bwwopera/article/BWW-Review-A-Glorious-RIGOLETTO-Opens-at-Opera-Theatre-St-Louis-20190604",
                "image": "sparafucille-rigoletto"
            },
            {
                "_id": { "$oid": "mussorgsky" },
                "description": "SONGS & DANCES OF DEATH",
                "date": "JUL 11 2019",
                "content": "Christian will sing Modest Mussorgski’s famous song cycle for bass, Songs and Dances of Death, with the Greenwich Symphony in late November 2019.  Please check later for scheduling updates.",
                "image": "mussorgsky"
            }
        ];
    }
    LatestDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var requestedNews = window.location.href;
        this.clips.forEach(function (clip) {
            var clipExists = requestedNews.includes(clip._id.$oid) ? clip : false;
            clipExists === false ? '' : _this.currentPiece = clipExists;
        });
        console.log(this.currentPiece);
    };
    LatestDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-latest-detail',
            template: __webpack_require__(/*! ./latest-detail.component.html */ "./src/app/latest-detail/latest-detail.component.html"),
            styles: [__webpack_require__(/*! ./latest-detail.component.css */ "./src/app/latest-detail/latest-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LatestDetailComponent);
    return LatestDetailComponent;
}());



/***/ }),

/***/ "./src/app/latest/latest.component.css":
/*!*********************************************!*\
  !*** ./src/app/latest/latest.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhdGVzdC9sYXRlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/latest/latest.component.html":
/*!**********************************************!*\
  !*** ./src/app/latest/latest.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-nav-bar class=\" col s12 sticky\"></app-nav-bar>\n</div>\n\n<div class='landing-page-background full-height'>\n\n\n\n  <div class=\"row med-top-margin left-margin size\">\n\n    <div *ngFor=\"let clip of clips\">\n      <div class=\"col s3 latest-block\" id={{clip.image}}>\n        <p class=\"latest-text\">{{clip.description}}</p>\n        <p class=\"latest-text\">{{clip.date}}</p>\n        <div class=\"overlay\">\n          <p class=' btn-flat latest-text' [routerLink]=\"['/details/', clip._id.$oid]\">READ MORE</p>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<app-footer style=\"position: fixed;\nbottom: 0;\nwidth: 100%;\"></app-footer>"

/***/ }),

/***/ "./src/app/latest/latest.component.ts":
/*!********************************************!*\
  !*** ./src/app/latest/latest.component.ts ***!
  \********************************************/
/*! exports provided: LatestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestComponent", function() { return LatestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LatestComponent = /** @class */ (function () {
    function LatestComponent() {
        this.clips = [
            {
                "_id": { "$oid": "st-louis" },
                "description": "AS A HIRED ASSASSIN...",
                "date": "JUL 11 2019",
                "content": "In review of Opera Theater of St. Louis’ Rigoletto, Broadway World notes, “Christian Zaremba is gracefully menacing as Sparafucile, the hired assassin. On his exit at the end of one scene he holds an almost sub-sonic bass note practically forever.  Read the full review here: https://www.broadwayworld.com/bwwopera/article/BWW-Review-A-Glorious-RIGOLETTO-Opens-at-Opera-Theatre-St-Louis-20190604",
                "image": "sparafucille-rigoletto"
            },
            {
                "_id": { "$oid": "roya-opera" },
                "description": "AGRIPPINA AT ROYAL OPERA",
                "date": "JUL 11 2019",
                "content": "Christian has recently been invited to the Royal Opera House in London to join the cast of Agrippina, which includes Joyce DiDonato, Franco Fagioli, and Ierstyn Davies.   Maxim Emelyanychev conducts.",
                "image": "convent-garden",
            },
            {
                "_id": { "$oid": "mussorgsky" },
                "description": "SONGS & DANCES OF DEATH",
                "date": "JUL 11 2019",
                "content": "Christian will sing Modest Mussorgski’s famous song cycle for bass, Songs and Dances of Death, with the Greenwich Symphony in late November 2019.  Please check later for scheduling updates.",
                "image": "mussorgsky"
            }
        ];
    }
    LatestComponent.prototype.ngOnInit = function () {
    };
    LatestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-latest',
            template: __webpack_require__(/*! ./latest.component.html */ "./src/app/latest/latest.component.html"),
            styles: [__webpack_require__(/*! ./latest.component.css */ "./src/app/latest/latest.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LatestComponent);
    return LatestComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"nav-text white\">\n      <p class=\"col s1 red-text\" routerLink=\"/\">CZ</p>\n      <p class=\"col s2 dark-text btn-flat\" routerLink=\"/calendar\">CALENDAR</p>\n      <p class=\"col s2 dark-text btn-flat\" routerLink=\"/gallery\">GALLERY</p>\n      <p class=\"col s2 dark-text btn-flat\" routerLink=\"/bio\">BIOGRAPHY</p>\n      <p class=\"col s2 dark-text btn-flat\" routerLink=\"/latest\">LATEST</p>\n      <p class=\"col s1 dark-text btn-flat\" routerLink=\"/acclaim\">ACCLAIM</p>\n  </div>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
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

module.exports = __webpack_require__(/*! /Users/julissamackey/Code/cz-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map