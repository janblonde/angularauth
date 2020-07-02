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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- SideNav slide-out button -->\n<a (click)=\"sidenav.toggle()\" mdbBtn color=\"black\" class=\"p-3 button-collapse\"><mdb-icon fas icon=\"bars\"></mdb-icon></a>\n<!--/. SideNav slide-out button -->\n\n<!-- Sidebar navigation -->\n<mdb-side-nav #sidenav class=\"fixed\" [fixed]=\"true\" [sidenavBreakpoint]=\"992\">\n  <li>\n    <div>\n      <h2 style=\"font-family: 'Nunito', sans-serif;padding-left:10px;padding-top:10px\">SNDX</h2>\n    </div>\n  </li>\n  <!-- Side navigation links -->\n  <li>\n    <ul class=\"collapsible collapsible-accordion\">\n      <mdb-accordion [multiple]=\"false\" aria-multiselectable=\"false\">\n\n        <mdb-accordion-item *ngIf=\"setupService.setup=='true'\" class=\"no-collase\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\n          <mdb-accordion-item-head mdbWavesEffect><i class=\"fas fa-tachometer-alt\"></i> Dashboard\n          </mdb-accordion-item-head>\n          <mdb-accordion-item-body></mdb-accordion-item-body>\n        </mdb-accordion-item>\n\n        <mdb-accordion-item *ngIf=\"setupService.setup=='true'\" class=\"no-collase\" routerLink=\"/unitlist\" routerLinkActive=\"active\">\n          <mdb-accordion-item-head mdbWavesEffect><i class=\"fas fa-warehouse\"></i> Eigendommen\n          </mdb-accordion-item-head>\n          <mdb-accordion-item-body></mdb-accordion-item-body>\n        </mdb-accordion-item>\n\n        <mdb-accordion-item *ngIf=\"setupService.setup=='true'\" class=\"no-collase\" routerLink=\"/rekeninglist\" routerLinkActive=\"active\">\n          <mdb-accordion-item-head mdbWavesEffect><i class=\"fas fa-piggy-bank\"></i> Rekeningoverzicht\n          </mdb-accordion-item-head>\n          <mdb-accordion-item-body></mdb-accordion-item-body>\n        </mdb-accordion-item>\n\n        <mdb-accordion-item *ngIf=\"setupService.setup=='true'\" class=\"no-collase\" routerLink=\"/factuurlist\" routerLinkActive=\"active\">\n          <mdb-accordion-item-head mdbWavesEffect><i class=\"fas fa-file-invoice\"></i> Facturen\n          </mdb-accordion-item-head>\n          <mdb-accordion-item-body></mdb-accordion-item-body>\n        </mdb-accordion-item>\n\n        <mdb-accordion-item *ngIf=\"setupService.setup=='true'\" class=\"no-collase\" routerLink=\"/voorschotlist\" routerLinkActive=\"active\">\n          <mdb-accordion-item-head mdbWavesEffect><i class=\"far fa-file-alt\"></i> Voorschotten\n          </mdb-accordion-item-head>\n          <mdb-accordion-item-body></mdb-accordion-item-body>\n        </mdb-accordion-item>\n\n        <mdb-accordion-item *ngIf=\"setupService.setup=='true'\" class=\"no-collase\">\n          <mdb-accordion-item-head mdbWavesEffect><mdb-icon fas icon=\"chevron-right\"></mdb-icon> Rapporten\n          </mdb-accordion-item-head>\n          <mdb-accordion-item-body>\n            <ul>\n              <li><a href=\"#\" mdbWavesEffect routerLink=\"/rapportinkomstenuitgaven\" routerLinkActive=\"active\">Inkomsten en uitgaven</a></li>\n              <li><a href=\"#\" mdbWavesEffect routerLink=\"/rapportindividuelerekeningen\" routerLinkActive=\"active\">Individuele rekeningen</a></li>\n              <li><a href=\"#\" mdbWavesEffect routerLink=\"/rapportbalans\" routerLinkActive=\"active\">Balans</a></li>\n            </ul>\n          </mdb-accordion-item-body>\n        </mdb-accordion-item>\n\n        <mdb-accordion-item class=\"no-collase\">\n          <mdb-accordion-item-head mdbWavesEffect><i class=\"fas fa-calculator\"></i> Afrekeningen\n          </mdb-accordion-item-head>\n          <mdb-accordion-item-body></mdb-accordion-item-body>\n        </mdb-accordion-item>\n\n        <mdb-accordion-item class=\"no-collase\">\n          <mdb-accordion-item-head mdbWavesEffect><i class=\"fas fa-gavel\"></i> Verkoop\n          </mdb-accordion-item-head>\n          <mdb-accordion-item-body></mdb-accordion-item-body>\n        </mdb-accordion-item>\n\n        <mdb-accordion-item class=\"no-collase\" routerLink=\"/instellingen\" routerLinkActive=\"active\">\n          <mdb-accordion-item-head mdbWavesEffect><i class=\"fas fa-tools\"></i> Instellingen\n          </mdb-accordion-item-head>\n          <mdb-accordion-item-body></mdb-accordion-item-body>\n        </mdb-accordion-item>\n\n      </mdb-accordion>\n    </ul>\n  </li>\n  <!--/. Side navigation links -->\n  <div class=\"sidenav-bg mask-strong\"></div>\n</mdb-side-nav>\n<!--/. Sidebar navigation -->\n\n\n\n<!-- <mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark primary-color ie-nav\" [containerInside]=\"false\">\n    <mdb-navbar-brand class=\"mr-3\">\n        <a class=\"logo navbar-brand\" href=\"#\"><strong>SNDX</strong></a>\n    </mdb-navbar-brand >\n    <links>\n        <ul class=\"navbar-nav mr-auto\" id=\"myContainer\">\n            <li class=\"nav-item active waves-light\" mdbWavesEffect>\n                <a class=\"nav-link\" routerLink=\"/unitlist\" routerLinkActive=\"active\">Eigendommen</a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbWavesEffect>\n                <a class=\"nav-link\" routerLink=\"/fileupload\" routerLinkActive=\"active\">Rekeninguittreksels opladen</a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbWavesEffect>\n                <a class=\"nav-link\" routerLink=\"/rekeninglist\" routerLinkActive=\"active\">Rekeningoverzicht</a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbWavesEffect>\n                <a class=\"nav-link\" routerLink=\"/ongekoppeld\" routerLinkActive=\"active\">Ongekoppelde rekeningen</a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbWavesEffect>\n                <a class=\"nav-link\" routerLink=\"/factuurlist\" routerLinkActive=\"active\">Facturen</a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbWavesEffect>\n                <a class=\"nav-link\" routerLink=\"/voorschotlist\" routerLinkActive=\"active\">Voorschotten</a>\n            </li>\n            <li class=\"nav-item waves-light\" mdbWavesEffect>\n                <a class=\"nav-link\" routerLink=\"/rapporten\" routerLinkActive=\"active\">Rapporten</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item waves-light\" mdbWavesEffect>\n            <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n          </li>\n          <li>\n            <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n          </li>\n        </ul>\n    </links>\n</mdb-navbar> -->\n\n<!-- <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">SNDX</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/unitlist\" routerLinkActive=\"active\">Eigendommen</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/fileupload\" routerLinkActive=\"active\">Uittreksels opladen</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/rekeninglist\" routerLinkActive=\"active\">Rekening overzicht</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/ongekoppeld\" routerLinkActive=\"active\">Ongekoppelde rekeningen</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/factuurlist\" routerLinkActive=\"active\">Facturen</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/voorschotlist\" routerLinkActive=\"active\">Voorschotten</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/rapporten\" routerLinkActive=\"active\">Rapporten</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n        <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n    </ul>\n  </div>\n</nav> -->\n<main>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-8 mb-3\">\n    <div class=\"card  mb-3\">\n      <div class=\"card-header text-white bg-primary\"><h4><strong>Inkomsten en uitgaven</strong></h4></div>\n      <div class=\"card-body\">\n        <div style=\"display: block\">\n          <canvas mdbChart\n              [chartType]=\"chartType\"\n              [datasets]=\"chartDatasets\"\n              [labels]=\"chartLabels\"\n              [colors]=\"chartColors\"\n              [options]=\"chartOptions\"\n              [legend]=\"true\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 mb-3\">\n    <div class=\"card  mb-3\">\n      <div class=\"card-header text-white bg-primary\"><h4><strong>Rekeningsaldi</strong></h4></div>\n      <div class=\"card-body\">\n        <p style=\"margin-bottom:0px\">Werkrekening</p>\n        <h4>{{werkrekeningsaldo | number: '1.2-2'}} €</h4>\n        <br>\n        <p style=\"margin-bottom:0px\">Reserverekening</p>\n        <h4>{{reserverekeningsaldo | number: '1.2-2'}} €</h4>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row mb-3\">\n  <div [ngClass]=\"{'col-md-6': ongekoppeld>0, 'col-md-12': ongekoppeld==0}\">\n    <mdb-card>\n      <mdb-card-header class=\"card-header text-white bg-primary\"><h4><strong>Agenda</strong></h4></mdb-card-header>\n        <mdb-card-body>\n          <table mdbTable small=\"true\" borderless=\"true\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Datum</th>\n                <th scope=\"col\">Titel</th>\n                <th scope=\"col\">Actie</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let agenda of agendas\">\n                <td>{{ agenda.datum | date: 'dd/MM/yyyy' }}</td>\n                <td>{{ agenda.actie }}</td>\n                <td *ngIf=\"agenda.visible\" style=\"padding:0px\">\n                  <button mdbBtn routerLink={{agenda.link}} type=\"button\" size=\"sm\" color=\"primary\"><i class=\"fas fa-sign-in-alt\"> </i></button>\n                </td>\n                <td *ngIf=\"!agenda.visible\" style=\"padding:0px\">\n                  <button mdbBtn routerLink={{agenda.link}} type=\"button\" size=\"sm\" color=\"light\" disabled><i class=\"fas fa-magic\"> </i> </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </mdb-card-body>\n      </mdb-card>\n  </div>\n  <div *ngIf=\"ongekoppeld>0\" class=\"col-md-6 mb-3\">\n    <div class=\"card  mb-3\">\n      <div class=\"card-header text-white bg-primary\"><h4><strong>Acties</strong></h4></div>\n        <div class=\"card-body\">\n          <table mdbTable small=\"true\" borderless=\"true\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Actie</th>\n                <th scope=\"col\">Link</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Rekeningnummers koppelen</td>\n                <td style=\"padding:0px\">\n                  <button routerLink=\"/ongekoppeld\" mdbBtn type=\"button\" size=\"sm\" color=\"primary\"><i class=\"fas fa-sign-in-alt\"></i> </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6 mb-3\">\n    <div class=\"card  mb-3\">\n      <div class=\"card-header text-white bg-primary\"><h4><strong>Te ontvangen voorschotten</strong></h4></div>\n        <div class=\"card-body\">\n          <table mdbTable small=\"true\" borderless=\"true\" hover=\"true\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Factuurdatum</th>\n                <th scope=\"col\">Vervaldatum</th>\n                <th scope=\"col\">Eigenaar</th>\n                <th scope=\"col\">Bedrag</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let voorschot of voorschotten\">\n                <td [ngClass]=\"{'grey-text':!voorschot.vervallen}\">{{voorschot.datum | date:'dd/MM/yyyy'}}</td>\n                <td [ngClass]=\"{'grey-text':!voorschot.vervallen}\">{{voorschot.vervaldatum | date:'dd/MM/yyyy'}}</td>\n                <td [ngClass]=\"{'grey-text':!voorschot.vervallen}\">{{voorschot.partner}}</td>\n                <td [ngClass]=\"{'grey-text':!voorschot.vervallen}\">{{voorschot.bedrag | number: '1.2-2'}} €</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n  </div>\n  <div class=\"col-md-6 mb-3\">\n    <div class=\"card  mb-3\">\n      <div class=\"card-header text-white bg-primary\"><h4><strong>Te betalen facturen</strong></h4></div>\n        <div class=\"card-body\">\n          <table mdbTable small=\"true\" borderless=\"true\" hover=\"true\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Factuurdatum</th>\n                <th scope=\"col\">Vervaldatum</th>\n                <th scope=\"col\">Levarancier</th>\n                <th scope=\"col\">Bedrag</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let factuur of facturen\">\n                <td [ngClass]=\"{'grey-text':!factuur.vervallen}\">{{factuur.datum | date:'dd/MM/yyyy'}}</td>\n                <td [ngClass]=\"{'grey-text':!factuur.vervallen}\">{{factuur.vervaldatum | date:'dd/MM/yyyy'}}</td>\n                <td [ngClass]=\"{'grey-text':!factuur.vervallen}\">{{factuur.partner}}</td>\n                <td [ngClass]=\"{'grey-text':!factuur.vervallen}\">{{factuur.bedrag | number: '1.2-2'}} €</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/eigenaar-create/eigenaar-create.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eigenaar-create/eigenaar-create.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3>Eigenaar aanmaken</h3>\n        <form>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"eigenaar.naam\" type=\"text\" name=\"naam\" class=\"form-control\" id=\"naam\">\n            <label for=\"naam\" class=\"\">Naam</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"eigenaar.email\" type=\"text\" name=\"email\" class=\"form-control\" id=\"email\">\n            <label for=\"email\" class=\"\">Email</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"eigenaar.bankrnr\" type=\"text\" name=\"bankrnr\" class=\"form-control\" id=\"bankrnr\">\n            <label for=\"bankrnr\" class=\"\">Bankrekeningnummer</label>\n          </div>\n          <div *ngIf=\"instellingen && !instellingen.nieuw\" class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"eigenaar.overgenomen_werkrekening\" type=\"text\" name=\"werkrekening\" class=\"form-control\" id=\"werkrekening\">\n            <label for=\"werkrekening\" class=\"\">Overgenomen saldo werkrekening</label>\n          </div>\n          <div *ngIf=\"instellingen && !instellingen.nieuw\" class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"eigenaar.overgenomen_reserverekening\" type=\"text\" name=\"reserverekening\" class=\"form-control\" id=\"reserverekening\">\n            <label for=\"reserverekening\" class=\"\">Overgenomen saldo reserverekening</label>\n          </div>\n        </form>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" outline=\"true\" (click)=\"back()\">Annuleren</button>\n        <button *ngIf=\"check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"createEigenaar()\">Eigenaar aanmaken</button>\n        <button *ngIf=\"!check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" disabled (click)=\"createEigenaar()\">Eigenaar aanmaken</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/eigenaar-edit/eigenaar-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eigenaar-edit/eigenaar-edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"eigenaar\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3>Eigenaar wijzigen</h3>\n        <form>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"eigenaar.naam\" type=\"text\" name=\"naam\" class=\"form-control\" id=\"naam\">\n            <label for=\"naam\" class=\"\">Naam</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"eigenaar.email\" type=\"text\" name=\"email\" class=\"form-control\" id=\"email\">\n            <label for=\"email\" class=\"\">Email</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"eigenaar.bankrnr\" type=\"text\" name=\"bankrnr\" class=\"form-control\" id=\"bankrnr\">\n            <label for=\"bankrnr\" class=\"\">Bankrekeningnummer</label>\n          </div>\n          <div *ngIf=\"instellingen && !instellingen.nieuw\" class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"eigenaar.overgenomen_werkrekening\" type=\"text\" name=\"werkrekening\" class=\"form-control\" id=\"werkrekening\">\n            <label for=\"werkrekening\" class=\"\">Overgenomen saldo werkrekening</label>\n          </div>\n          <div *ngIf=\"instellingen && !instellingen.nieuw\" class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"eigenaar.overgenomen_reserverekening\" type=\"text\" name=\"reserverekening\" class=\"form-control\" id=\"reserverekening\">\n            <label for=\"reserverekening\" class=\"\">Overgenomen saldo reserverekening</label>\n          </div>\n        </form>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" outline=\"true\" (click)=\"back()\">Annuleren</button>\n        <button *ngIf=\"check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"saveEigenaar(eigenaar)\">Wijziging opslaan</button>\n        <button *ngIf=\"!check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" disabled (click)=\"saveEigenaar(eigenaar)\">Wijziging opslaan</button>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-create/factuur-create.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-create/factuur-create.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3>Factuur toevoegen</h3>\n        <form>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"factuur.omschrijving\" type=\"text\" name=\"omschrijving\" class=\"form-control\" id=\"omschrijving\">\n            <label for=\"omschrijving\" class=\"\">Omschrijving</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"factuur.bedrag\" type=\"number\" name=\"bedrag\" class=\"form-control\" id=\"bedrag\">\n            <label for=\"bedrag\" class=\"\">Bedrag</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <mdb-date-picker id=\"factuurdatum\" name=\"factuurdatum\" [options]=\"myDatePickerOptions\" [label]=\"'Factuurdatum'\" [(ngModel)]=\"factuur.datum\"></mdb-date-picker>\n          </div>\n          <div class=\"md-form form-group\">\n            <mdb-date-picker id=\"vervaldatum\" name=\"vervaldatum\" [options]=\"myDatePickerOptions\" [label]=\"'Vervaldatum'\" [(ngModel)]=\"factuur.vervaldatum\"></mdb-date-picker>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 md-form form-group mt-0\">\n              <mdb-select *ngIf=\"partnersSelect\" (ngModelChange)=\"getSelectedValue($event)\"\n                          [(ngModel)]=\"selectedPartner\" [options]=\"partnersSelect\" name=\"partners\" placeholder=\"Leverancier selecteren\"></mdb-select>\n\n            </div>\n            <div class=\"col-md-1 pt-2\">\n              <label>of</label>\n            </div>\n            <div class=\"col-md-5\">\n              <button type=\"button\" size=\"sm\" mdbBtn color=\"primary\" (click)=\"basicModal.show()\">Aanmaken</button>\n            </div>\n          </div>\n        </form>\n        <button class=\"btn btn-primary\" (click)=\"createFactuur()\">Toevoegen</button>\n      </div>\n    </div>\n  </div>\n\n<div mdbModal #basicModal=\"mdbModal\" class=\"modal fade\" id=\"leverancierModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header text-white bg-primary\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"basicModal.hide()\">\n          <span aria-hidden=\"true\" style=\"color:white;\">×</span>\n        </button>\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nieuwe leverancier toevoegen</h5>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"md-form form-group\">\n            <input [(ngModel)]=\"partner.naam\" type=\"text\" name=\"naam\" class=\"form-control\" id=\"naam\" mdbInput>\n            <label for=\"naam\">Naam</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input [(ngModel)]=\"partner.rekeningnummer\" name=\"bankrekeningnummer\" type=\"text\" class=\"form-control\" id=\"bankrekeningnummer\" mdbInput>\n            <label for=\"bankrekeningnummer\">Bankrekeningnummer</label>\n          </div>\n          <div>\n            <mdb-select *ngIf=\"kostenTypes\" (ngModelChange)=\"getSelectedType($event)\"\n                        [(ngModel)]=\"selectedType\" [options]=\"kostenTypes\" name=\"kostentypes\" label=\"Kostentype\"></mdb-select>\n          <!-- <label for=\"kostenype\">Type</label>\n          <select *ngIf=\"kostenTypes\" class=\"form-control\" [(ngModel)]=\"selectedType\" name=\"kostentype\" placeholder=\"Geef het kostenype in\">\n               <option *ngFor=\"let type of kostenTypes\" value={{type.id}}>{{type.naam}}</option>\n          </select> -->\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button mdbBtn type=\"button\" mdbWavesEffect color=\"primary\" outline=\"true\" (click)=\"basicModal.hide()\">Annuleren</button>\n        <button mdbBtn type=\"button\" color=\"primary\" class=\"relative waves-light\" mdbWavesEffect (click)=\"createPartner(partner);basicModal.hide\">Opslaan</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-detail/factuur-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-detail/factuur-detail.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"factuur\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3 *ngIf=\"factuur.type==='leverancier'\">Factuur</h3>\n      <h3 *ngIf=\"factuur.type==='voorschot'\">Voorschot</h3>\n        <form>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"factuur.bedrag\" type=\"text\" name=\"bedrag\" class=\"form-control\" id=\"bedrag\" readonly>\n            <label for=\"bedrag\" class=\"\">Bedrag</label>\n          </div>\n          <div *ngIf=\"factuur.type==='leverancier'\" class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"factuur.partner\" type=\"text\" name=\"partner\" class=\"form-control\" id=\"partner\" readonly>\n            <label for=\"partner\" class=\"\">Leverancier</label>\n          </div>\n          <div *ngIf=\"factuur.type==='voorschot'\" class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"factuur.partner\" type=\"text\" name=\"partner\" class=\"form-control\" id=\"partner\" readonly>\n            <label for=\"partner\" class=\"\">Eigenaar</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"factuur.omschrijving\" type=\"text\" name=\"omschrijving\" class=\"form-control\" id=\"omschrijving\" readonly>\n            <label for=\"omschrijving\" class=\"\">Omschrijving</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"factuur.datum\" type=\"text\" name=\"datum\" class=\"form-control\" id=\"datum\" readonly>\n            <label for=\"datum\" class=\"\">Datum</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"factuur.vervaldatum\" type=\"text\" name=\"vervaldatum\" class=\"form-control\" id=\"vervaldatum\" readonly>\n            <label for=\"vervaldatum\" class=\"\">Vervaldatum</label>\n          </div>\n        </form>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"back()\">Terug naar overzicht</button>\n        <!-- <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"saveEigenaar(eigenaar)\">Eigenaar wijzigen</button> -->\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-edit/factuur-edit.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-edit/factuur-edit.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"factuur\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3 *ngIf=\"factuur.type==='leverancier'\">Factuur Wijzigen</h3>\n      <h3 *ngIf=\"factuur.type==='voorschot'\">Voorschot</h3>\n        <form>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"factuur.bedrag\" type=\"text\" name=\"bedrag\" class=\"form-control\" id=\"bedrag\">\n            <label for=\"bedrag\" class=\"\">Bedrag</label>\n          </div>\n          <div *ngIf=\"factuur.type==='leverancier'\" class=\"md-form form-group\">\n            <mdb-select *ngIf=\"partnersSelect\" (ngModelChange)=\"getSelectedValue($event)\"\n                        [(ngModel)]=\"selectedPartner\" [options]=\"partnersSelect\" name=\"partners\" placeholder=\"Leverancier selecteren\"></mdb-select>\n            <label for=\"partners\" class=\"\">Leverancier</label>\n          </div>\n          <div *ngIf=\"factuur.type==='voorschot'\" class=\"md-form form-group\">\n            <mdb-select *ngIf=\"partnersSelect\" (ngModelChange)=\"getSelectedValue($event)\"\n                        [(ngModel)]=\"selectedPartner\" [options]=\"partnersSelect\" name=\"partners\" placeholder=\"Eigenaar selecteren\"></mdb-select>\n            <label for=\"partner\" class=\"\">Eigenaar</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"factuur.omschrijving\" type=\"text\" name=\"omschrijving\" class=\"form-control\" id=\"omschrijving\">\n            <label for=\"omschrijving\" class=\"\">Omschrijving</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <mdb-date-picker id=\"factuurdatum\" name=\"factuurdatum\" [options]=\"myDatePickerOptions\" [label]=\"'Factuurdatum'\" [(ngModel)]=\"factuur.datum\"></mdb-date-picker>\n          </div>\n          <div class=\"md-form form-group\">\n            <mdb-date-picker id=\"vervaldatum\" name=\"vervaldatum\" [options]=\"myDatePickerOptions\" [label]=\"'Vervaldatum'\" [(ngModel)]=\"factuur.vervaldatum\"></mdb-date-picker>\n          </div>\n        </form>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" outline=\"true\" (click)=\"back()\">Annuleren</button>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"saveFactuur(factuur)\">Wijziging opslaan</button>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-list/factuur-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-list/factuur-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Overzicht facturen</h3>\n<div style='display:inline-block;width:50%'>\n  <button type=\"button\" mdbBtn color=\"primary\" mdbWavesEffect routerLink=\"/factuurcreate\">\n    <i class=\"fa fa-plus-square\"></i>  Factuur toevoegen</button>\n</div>\n<div style='display:inline-block;width:50%'>\n  <form class=\"form-inline waves-light\" mdbWavesEffect>\n    <div class=\"md-form mt-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Filter...\">\n    </div>\n    <div style=\"padding-left:80px;padding-bottom:10px\" class=\"md-form mt-0\">\n      <mdb-checkbox [(ngModel)]=\"open\" name=\"open\" (click)=\"switch()\">Enkel openstaande facturen</mdb-checkbox>\n    </div>\n  </form>\n</div>\n\n<table mdbTable small=\"true\" striped=\"true\">\n  <thead class=\"special-color white-text\">\n    <tr>\n      <th scope=\"col\" (click)=\"sort('id')\" style=\"border-radius:2px 0px 0px 0px\">#</th>\n      <th scope=\"col\" (click)=\"sort('datum')\">Datum</th>\n      <th scope=\"col\" (click)=\"sort('bedrag')\" style=\"text-align:right;padding-right:40px\">Bedrag</th>\n      <th scope=\"col\" (click)=\"sort('omschrijving')\">Omschrijving</th>\n      <th scope=\"col\" (click)=\"sort('partner')\">Leverancier</th>\n      <th scope=\"col\" (click)=\"sort('vervaldatum')\">Vervaldatum</th>\n      <th scope=\"col\" (click)=\"sort('fk_uittreksel')\" style=\"border-radius:0px 2px 0px 0px\">Betaald</th>\n      <th scope=\"col\" style=\"border-radius:0px 2px 0px 0px\">Actie</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let factuur of facturen | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 10, currentPage: p }; index as i\">\n      <th scope=\"row\">{{ factuur.id }}</th>\n      <td>\n        {{ factuur.datum | date:'dd/MM/yyyy' }}\n      </td>\n      <td style=\"text-align:right;padding-right:20px\">{{ factuur.bedrag | number: '1.2-2' }} €</td>\n      <td>{{ factuur.omschrijving }}</td>\n      <td>{{ factuur.partner }}</td>\n      <td>{{ factuur.vervaldatum | date: 'dd/MM/yyyy' }}</td>\n      <td style=\"text-align:center\"><a *ngIf=\"factuur.fk_uittreksel\" href=\"#\" routerLink=\"/rekeningdetail/{{factuur.fk_uittreksel}}\"><i class=\"fas fa-check-circle\"></i></a></td>\n      <td><a href=\"#\" routerLink=\"/factuuredit/{{factuur.id}}\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a></td>\n    </tr>\n  </tbody>\n</table>\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fileupload/fileupload.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fileupload/fileupload.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div *ngIf=\"loading\">\n    loading ...\n</div>\n\n<div  *ngIf=\"!loading\" class=\"container\">\n  <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n  <button type=\"button\" class=\"btn btn-success btn-s\"\n    (click)=\"uploader.uploadAll()\"\n    [disabled]=\"!uploader.getNotUploadedItems().length\" >\n        Upload an Image\n  </button>\n</div>\n\n<form>\n  <div class=\"file-field md-form\">\n    <div mdbBtn color=\"primary\" size=\"sm\" class=\"waves-light\" mdbWavesEffect>\n      <span>Choose file</span>\n      <input type=\"file\" name=\"photo\" mdbFileSelect (uploadOutput)=\"onUploadOutput($event)\" [uploadInput]=\"uploadInput\">\n    </div>\n    <div class=\"file-path-wrapper\">\n      <input class=\"file-path\" type=\"text\" placeholder=\"Upload your file\" [value]=\"showFiles()\">\n    </div>\n  </div>\n  <button mdbBtn color=\"primary\" (click)=\"startUpload()\">Start uploading</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/instellingen/instellingen.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instellingen/instellingen.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3>Instellingen</h3>\n        <form>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"instellingen.adres\" type=\"text\" name=\"adres\" class=\"form-control\" id=\"adres\" required>\n            <label for=\"naam\" class=\"\">Adres van het gebouw*</label>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"md-form form-group\">\n                <mdb-select (ngModelChange)=\"getSelectedPeriodiciteit($event)\" [(ngModel)]=\"selectedPeriodiciteit\"\n                             [options]=\"periodiciteitOptions\" name=\"periodiciteit\" label=\"Periodiciteit van de voorschotten*\"></mdb-select>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"md-form form-group\">\n                <mdb-select (ngModelChange)=\"getSelectedDag($event)\" [(ngModel)] = \"selectedDag\"\n                             [options]=\"dagOptions\" name=\"voorschotdag\" label=\"Dag van de maand voorschotfacturen versturen*\"></mdb-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"instellingen.kosten\" type=\"text\" name=\"kosten\" class=\"form-control\" id=\"kosten\">\n            <label for=\"kosten\" class=\"\">Verwachte gemeenschappelijke kosten per maand (totaal voor het gehele gebouw)</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <mdb-checkbox [(ngModel)]=\"instellingen.nieuw\" name=\"nieuw\">Het gaat om een nieuwe VME (dus met saldo 0 op de rekeningen)</mdb-checkbox>\n          </div>\n          <div class=\"md-form form-group\" *ngIf='!instellingen.nieuw'>\n            <br/>\n            <mdb-date-picker id=\"overnamedatum\" name=\"overnamedatum\" [options]=\"myDatePickerOptions\" [label]=\"'Datum overname*'\" [(ngModel)]=\"instellingen.overnamedatum\"></mdb-date-picker>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"md-form form-group\">\n                <input mdbInput [(ngModel)]=\"instellingen.werkrekeningnummer\" type=\"text\" name=\"werkrekeningnummer\" class=\"form-control\" id=\"werkrekeningnummer\">\n                <label for=\"werkrekeningnummer\" class=\"\">Rekeningnummer werkrekening*</label>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"md-form form-group\" *ngIf='!instellingen.nieuw'>\n                <input mdbInput [(ngModel)]=\"instellingen.overgenomen_werkrekening\" type=\"text\" name=\"overgenomen_werkrekening\" class=\"form-control\" id=\"overgenomen_werkrekening\">\n                <label for=\"overgenomen_werkrekening\" class=\"\">Saldo werkrekening op datum overname*</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"md-form form-group\">\n                <input mdbInput [(ngModel)]=\"instellingen.reserverekeningnummer\" type=\"text\" name=\"reserverekeningnummer\" class=\"form-control\" id=\"reserverekeningnummer\">\n                <label for=\"reserverekeningnummer\" class=\"\">Rekeningnummer reserverekening*</label>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"md-form form-group\" *ngIf='!instellingen.nieuw'>\n                <input mdbInput [(ngModel)]=\"instellingen.overgenomen_reserverekening\" type=\"text\" name=\"overgenomen_reserverekening\" class=\"form-control\" id=\"overgenomen_reserverekening\">\n                <label for=\"overgenomen_reserverekening\" class=\"\">Saldo reserverekening op datum overname*</label>\n              </div>\n            </div>\n          </div>\n        </form>\n        <button *ngIf=\"setupService.setup=='true'\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" outline=\"true\" (click)=\"back()\">Annuleren</button>\n        <button *ngIf=\"setupService.setup=='true'&&check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"saveInstellingen(instellingen)\">Wijziging oplaan</button>\n        <button *ngIf=\"setupService.setup=='true'&&!check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" disabled (click)=\"saveInstellingen(instellingen)\">Wijziging oplaan</button>\n        <button *ngIf=\"setupService.setup!='true'&&check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"next(instellingen)\">Volgende  <i class=\"fas fa-chevron-right\"></i></button>\n        <button *ngIf=\"setupService.setup!='true'&&!check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" disabled (click)=\"next(instellingen)\">Volgende  <i class=\"fas fa-chevron-right\"></i></button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto my-5\"><!-- Material form login -->\n      <div class=\"card\">\n\n        <h5 class=\"card-header text-white bg-primary text-center py-4\">\n          <strong>Aanmelden</strong>\n        </h5>\n\n        <!--Card content-->\n        <div class=\"card-body px-lg-5 pt-0\">\n\n          <!-- Form -->\n          <form class=\"text-center\" style=\"color: #757575;\">\n\n            <div *ngIf=\"error\" style=\"margin-top:15px;margin-bottom:50px\" class=\"alert alert-danger\" role=\"alert\">\n              Ongeldige email/paswoord combinatie.\n            </div>\n\n            <!-- Email -->\n            <div class=\"md-form\">\n              <input [(ngModel)]=\"loginUserData.email\" type=\"email\" name=\"email\" id=\"materialLoginFormEmail\" class=\"form-control\" mdbInput>\n              <label for=\"materialLoginFormEmail\">E-mail</label>\n            </div>\n\n            <!-- Password -->\n            <div class=\"md-form\">\n              <input [(ngModel)]=\"loginUserData.password\" type=\"password\" name=\"password\" id=\"materialLoginFormPassword\" class=\"form-control\" mdbInput>\n              <label for=\"materialLoginFormPassword\">Paswoord</label>\n            </div>\n\n            <div class=\"d-flex justify-content-around\">\n              <div>\n                <!-- Remember me -->\n                <!-- <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"materialLoginFormRemember\">\n                  <label class=\"form-check-label\" for=\"materialLoginFormRemember\">Remember me</label>\n                </div> -->\n              </div>\n              <div>\n                <!-- Forgot password -->\n                <!-- <a href=\"\">Paswoord vergeten?</a> -->\n              </div>\n            </div>\n\n            <!-- Sign in button -->\n            <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"loginUser()\">Aanmelden</button>\n            <!-- <button  (click)= \"loginUser()\" class=\"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0\" mdbWavesEffect>Aanmelden</button> -->\n\n            <!-- Register -->\n            <p class=\"pt-3\">Nog geen account:\n              <a routerLink=\"/register\"> Een account aanmaken</a>\n            </p>\n            <p>\n              <a routerLink=\"/passwordrequest\">Paswoord vergeten?</a>\n            </p>\n\n            <!-- Social login -->\n            <!-- <p>or sign in with:</p>\n            <a type=\"button\" class=\"btn-floating btn-fb btn-sm\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-tw btn-sm\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-li btn-sm\">\n              <i class=\"fab fa-linkedin-in\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-git btn-sm\">\n              <i class=\"fab fa-github\"></i>\n            </a> -->\n\n          </form>\n          <!-- Form -->\n\n        </div>\n\n      </div>\n      <!-- Material form login --></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partner-create/partner-create.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partner-create/partner-create.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3>Welke leverancier hoort bij rekeningnummer {{partner.rekeningnummer}}</h3>\n        <form>\n          <div class=\"md-form form-group\">\n            <label for=\"naam\">Naam leverancier</label>\n            <input mdbInput [(ngModel)]=\"partner.naam\" type=\"text\" name=\"naam\" class=\"form-control\" id=\"naam\">\n          </div>\n          <div class=\"md-form form-group\">\n            <mdb-select *ngIf=\"kostenTypes\" (ngModelChange)=\"getSelectedType($event)\"\n                        [(ngModel)]=\"selectedType\" [options]=\"kostenTypes\" name=\"kostentypes\" label=\"Kostentype\"></mdb-select>\n          </div>\n        </form>\n        <br/>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" outline=\"true\" (click)=\"back()\">Annuleren</button>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"createPartner()\">Leverancier aanmaken</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/password-request/password-request.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password-request/password-request.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto my-5\"><!-- Material form login -->\n      <div class=\"card\">\n\n        <h5 class=\"card-header text-white bg-primary text-center py-4\">\n          <strong>Een paswoord-link versturen naar</strong>\n        </h5>\n\n        <!--Card content-->\n        <div class=\"card-body px-lg-5 pt-0\">\n\n          <!-- Form -->\n          <form class=\"text-center\" style=\"color: #757575;\">\n\n            <div *ngIf=\"error\" style=\"margin-top:15px;margin-bottom:50px\" class=\"alert alert-danger\" role=\"alert\">\n              Geen account gevonden voor dit e-mail adres.\n            </div>\n\n            <div *ngIf=\"success\" style=\"margin-top:15px;margin-bottom:50px\" class=\"alert alert-success\" role=\"alert\">\n              E-mail met een link om jouw paswoord te resetten is verstuurd. Dit kan enkele minuten duren, controleer ook zeker je spam-box.\n            </div>\n\n            <!-- Email -->\n            <div class=\"md-form\">\n              <input [(ngModel)]=\"requestData.email\" type=\"email\" name=\"email\" id=\"materialLoginFormEmail\" class=\"form-control\" mdbInput>\n              <label for=\"materialLoginFormEmail\">E-mail</label>\n            </div>\n\n            <!-- Password -->\n            <!-- <div class=\"md-form\">\n              <input [(ngModel)]=\"loginUserData.password\" type=\"password\" name=\"password\" id=\"materialLoginFormPassword\" class=\"form-control\" mdbInput>\n              <label for=\"materialLoginFormPassword\">Paswoord</label>\n            </div> -->\n\n            <div class=\"d-flex justify-content-around\">\n              <div>\n                <!-- Remember me -->\n                <!-- <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"materialLoginFormRemember\">\n                  <label class=\"form-check-label\" for=\"materialLoginFormRemember\">Remember me</label>\n                </div> -->\n              </div>\n              <div>\n                <!-- Forgot password -->\n                <!-- <a href=\"\">Paswoord vergeten?</a> -->\n              </div>\n            </div>\n\n            <!-- Sign in button -->\n            <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"request()\">Versturen</button>\n            <!-- <button  (click)= \"loginUser()\" class=\"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0\" mdbWavesEffect>Aanmelden</button> -->\n\n            <!-- Register -->\n            <p class=\"pt-3\">Nog geen account:\n              <a routerLink=\"/register\"> Een account aanmaken</a>\n            </p>\n            <p>Al een account:\n              <a routerLink=\"/login\"> Inloggen</a>\n            </p>\n            <!-- <p>\n              <a routerLink=\"/passwordrequest\">Paswoord vergeten?</a>\n            </p> -->\n\n            <!-- Social login -->\n            <!-- <p>or sign in with:</p>\n            <a type=\"button\" class=\"btn-floating btn-fb btn-sm\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-tw btn-sm\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-li btn-sm\">\n              <i class=\"fab fa-linkedin-in\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-git btn-sm\">\n              <i class=\"fab fa-github\"></i>\n            </a> -->\n\n          </form>\n          <!-- Form -->\n\n        </div>\n\n      </div>\n      <!-- Material form login --></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/password-reset/password-reset.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password-reset/password-reset.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto my-5\"><!-- Material form login -->\n      <div class=\"card\">\n\n        <h5 class=\"card-header text-white bg-primary text-center py-4\">\n          <strong>Een nieuw paswoord instellen</strong>\n        </h5>\n\n        <!--Card content-->\n        <div class=\"card-body px-lg-5 pt-0\">\n\n          <!-- Form -->\n          <form class=\"text-center\" style=\"color: #757575;\">\n\n            <div *ngIf=\"success\" style=\"margin-top:15px;margin-bottom:50px\" class=\"alert alert-success\" role=\"alert\">\n              Je paswoord werd aangepast. <a routerLink=\"/login\">Ga naar de login-pagina</a>.\n            </div>\n\n            <!-- Email -->\n            <!-- <div class=\"md-form\">\n              <input [(ngModel)]=\"email\" type=\"email\" name=\"email\" id=\"materialLoginFormEmail\" class=\"form-control\" mdbInput>\n              <label for=\"materialLoginFormEmail\">E-mail</label>\n            </div> -->\n\n            <!-- Password -->\n            <div class=\"md-form\">\n              <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" id=\"materialLoginFormPassword\" class=\"form-control\" mdbInput>\n              <label for=\"materialLoginFormPassword\">Paswoord</label>\n            </div>\n\n            <div class=\"d-flex justify-content-around\">\n              <div>\n                <!-- Remember me -->\n                <!-- <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"materialLoginFormRemember\">\n                  <label class=\"form-check-label\" for=\"materialLoginFormRemember\">Remember me</label>\n                </div> -->\n              </div>\n              <div>\n                <!-- Forgot password -->\n                <!-- <a href=\"\">Paswoord vergeten?</a> -->\n              </div>\n            </div>\n\n            <!-- Sign in button -->\n            <button *ngIf=\"check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"reset()\">Instellen</button>\n            <button *ngIf=\"!check()\" type=\"button\" disabled mdbBtn mdbWavesEffect color=\"primary\" (click)=\"reset()\">Instellen</button>\n            <!-- <button  (click)= \"loginUser()\" class=\"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0\" mdbWavesEffect>Aanmelden</button> -->\n\n            <!-- Register -->\n            <p class=\"pt-3\">Nog geen account:\n              <a routerLink=\"/register\"> Een account aanmaken</a>\n            </p>\n            <!-- <p>\n              <a routerLink=\"/passwordrequest\">Paswoord vergeten?</a>\n            </p> -->\n\n            <!-- Social login -->\n            <!-- <p>or sign in with:</p>\n            <a type=\"button\" class=\"btn-floating btn-fb btn-sm\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-tw btn-sm\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-li btn-sm\">\n              <i class=\"fab fa-linkedin-in\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-git btn-sm\">\n              <i class=\"fab fa-github\"></i>\n            </a> -->\n\n          </form>\n          <!-- Form -->\n\n        </div>\n\n      </div>\n      <!-- Material form login --></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rapport-balans/rapport-balans.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapport-balans/rapport-balans.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Balans 2020</h2>\n\n<div class=\"row mt-5\">\n    <div class=\"col-md-6 mb-3\">\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Activa</h4>\n        </div>\n        <div *ngIf=\"balans\" style=\"text-align:right\" class=\"card-body\">\n          <h5 class=\"card-text\">Bank: {{balans.bank | number: '1.2-2'}} €</h5>\n          <h5 class=\"card-text mb-0\">Vorderingen: {{balans.vorderingen | number: '1.2-2'}} €</h5>\n          <div style=\"margin-left:20px\" *ngFor=\"let lijn of balans.vorderingen_detail\">\n              <p class=\"card-text\">{{ lijn.naam }}: {{ lijn.bedrag | number: '1.2-2'}} €</p>\n          </div>\n        </div>\n        <div class=\"card-footer\" style=\"text-align:right\">\n          <h5 class=\"card-text\"><b>\n            Totaal: {{balans.totaal_activa | number: '1.2-2'}} €</b>\n          </h5>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 mb-3\">\n        <div class=\"card text-center\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\">Passiva</h4>\n          </div>\n          <div style=\"text-align:right\" class=\"card-body\">\n            <h5 class=\"card-text mb-0\">Leveranciers: {{balans.leveranciers | number: '1.2-2'}} €</h5>\n            <div style=\"margin-left:20px\" *ngFor=\"let lijn of balans.leveranciers_detail\">\n                <p class=\"card-text\">{{ lijn.naam }}: {{ lijn.bedrag | number: '1.2-2'}} €</p>\n            </div>\n            <h5 class=\"card-text mt-2\">Teveel ontvangen voorschotten: {{balans.teveelvoorschotten | number: '1.2-2'}} €</h5>\n          </div>\n          <div class=\"card-footer\" style=\"text-align:right\">\n            <h5 class=\"card-text\"><b>\n               Totaal: {{balans.totaal_passiva | number: '1.2-2'}} €</b>\n            </h5>\n          </div>\n        </div>\n      </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rapport-individuelerekeningen/rapport-individuelerekeningen.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapport-individuelerekeningen/rapport-individuelerekeningen.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-6\">\n  <h2>Werkrekening 2020</h2>\n  </div>\n  <div class=\"col-md-6\">\n  <i class=\"fas fa-file-pdf\" style=\"color:indianred;float:right;padding-top:16px\"></i>\n  </div>\n</div>\n\n<table mdbTable small=\"true\" striped=\"true\">\n  <thead class=\"primary-color white-text\">\n    <th style=\"text-align: left;border-radius:2px 0px 0px 0px\">Eigenaar</th>\n    <th style=\"text-align: right;\">Voorschotten</th>\n    <th style=\"text-align: right;\">Uitgaven</th>\n    <th style=\"text-align: right;\">Saldo</th>\n    <th style=\"text-align: right;\">Overgenomen saldo</th>\n    <th style=\"text-align: right;border-radius:0px 2px 0px 0px\">Totaal</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let lijn of rapportWerkrekening\">\n      <td style=\"text-align: left;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\"> {{ lijn[0] }} </td>\n      <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\"> {{ lijn[1].voorschotten | number: '1.2-2' }}</td>\n      <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\"> {{ lijn[1].uitgaven | number: '1.2-2' }}</td>\n      <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\"> {{ lijn[1].saldo | number: '1.2-2' }}</td>\n      <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\"> {{ lijn[1].vorig_saldo | number: '1.2-2' }}</td>\n      <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':1==1}\"> {{ lijn[1].totaal | number: '1.2-2'}}</td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-6\">\n  <h2>Inkomsten 2020</h2>\n  </div>\n  <div class=\"col-md-6\">\n  <i class=\"fas fa-file-pdf\" style=\"color:indianred;float:right;padding-top:16px\"></i>\n  </div>\n</div>\n\n<table mdbTable small=\"true\" striped=\"true\">\n  <thead class=\"primary-color white-text\">\n  <tr>\n    <th style=\"text-align: left;border-radius:2px 0px 0px 0px\">Eigenaar</th>\n    <th style=\"text-align: right;\">Jan</th>\n    <th style=\"text-align: right;\">Feb</th>\n    <th style=\"text-align: right;\">Maart</th>\n    <th style=\"text-align: right;\">April</th>\n    <th style=\"text-align: right;\">Mei</th>\n    <th style=\"text-align: right;\">Juni</th>\n    <th style=\"text-align: right;\">Juli</th>\n    <th style=\"text-align: right;\">Aug</th>\n    <th style=\"text-align: right;\">Sep</th>\n    <th style=\"text-align: right;\">Okt</th>\n    <th style=\"text-align: right;\">Nov</th>\n    <th style=\"text-align: right;\">Dec</th>\n    <th style=\"text-align: right;border-radius:0px 2px 0px 0px\">Totaal</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let lijn of rapportInkomsten\">\n    <td style=\"text-align: left;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">\n      {{ lijn[0] }}\n    </td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][0] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][1] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][2] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][3] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][4] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][5] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][6] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][7] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][8] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][9] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][10] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][11] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':1==1}\">{{ lijn[1][12] | number: '1.2-2' }}</td>\n  </tr>\n  </tbody>\n  <br>\n</table>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n  <h2>Uitgaven 2020</h2>\n  </div>\n  <div class=\"col-md-6\">\n  <i class=\"fas fa-file-pdf\" style=\"color:indianred;float:right;padding-top:16px\"></i>\n  </div>\n</div>\n\n<table mdbTable small=\"true\" striped=\"true\">\n  <thead class=\"primary-color white-text\">\n  <tr>\n    <th style=\"text-align: left;border-radius:2px 0px 0px 0px\">Uitgavensoort</th>\n    <th style=\"text-align: right;\">Jan</th>\n    <th style=\"text-align: right;\">Feb</th>\n    <th style=\"text-align: right;\">Maart</th>\n    <th style=\"text-align: right;\">April</th>\n    <th style=\"text-align: right;\">Mei</th>\n    <th style=\"text-align: right;\">Juni</th>\n    <th style=\"text-align: right;\">Juli</th>\n    <th style=\"text-align: right;\">Aug</th>\n    <th style=\"text-align: right;\">Sep</th>\n    <th style=\"text-align: right;\">Okt</th>\n    <th style=\"text-align: right;\">Nov</th>\n    <th style=\"text-align: right;\">Dec</th>\n    <th style=\"text-align: right;border-radius:0px 2px 0px 0px\">Totaal</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let lijn of rapportUitgaven\">\n    <td style=\"text-align: left;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">\n      {{ lijn[0] }}\n    </td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][0] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][1] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][2] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][3] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][4] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][5] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][6] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][7] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][8] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][9] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][10] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':lijn[0]=='Totaal'}\">{{ lijn[1][11] | number: '1.2-2' }}</td>\n    <td style=\"text-align: right;\" [ngClass]=\"{'font-weight-bold':1==1}\">{{ lijn[1][12] | number: '1.2-2' }}</td>\n  </tr>\n  </tbody>\n  <br>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto my-5\"><!-- Material form login -->\n      <div class=\"card\">\n\n        <h5 class=\"card-header text-white bg-primary text-center py-4\">\n          <strong>Een account aanmaken</strong>\n        </h5>\n\n        <!--Card content-->\n        <div class=\"card-body px-lg-5 pt-0\">\n\n          <!-- Form -->\n          <form class=\"text-center\" style=\"color: #757575;\">\n\n            <div *ngIf=\"error\" style=\"margin-top:15px;margin-bottom:50px\" class=\"alert alert-danger\" role=\"alert\">\n              Een account met dit e-mail adres bestaat al.\n            </div>\n\n            <!-- Email -->\n            <div class=\"md-form\">\n              <input [(ngModel)]=\"registerUserData.email\" type=\"email\" name=\"email\" id=\"materialLoginFormEmail\" class=\"form-control\" mdbInput>\n              <label for=\"materialLoginFormEmail\">E-mail*</label>\n            </div>\n\n            <!-- Password -->\n            <div class=\"md-form\">\n              <input [(ngModel)]=\"registerUserData.password\" type=\"password\" name=\"password\" id=\"materialLoginFormPassword\" class=\"form-control\" mdbInput>\n              <label for=\"materialLoginFormPassword\">Pasword*</label>\n            </div>\n\n            <div class=\"d-flex justify-content-around\">\n              <div>\n                <!-- Remember me -->\n                <!-- <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"materialLoginFormRemember\">\n                  <label class=\"form-check-label\" for=\"materialLoginFormRemember\">Remember me</label>\n                </div> -->\n              </div>\n              <div>\n                <!-- Forgot password -->\n                <!-- <a href=\"\">Paswoord vergeten?</a> -->\n              </div>\n            </div>\n\n            <!-- Sign in button -->\n            <button *ngIf=\"check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"registerUser()\">Aanmaken</button>\n            <button *ngIf=\"!check()\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" disabled (click)=\"registerUser()\">Aanmaken</button>\n            <!-- <button  (click)= \"loginUser()\" class=\"btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0\" mdbWavesEffect>Aanmelden</button> -->\n\n            <!-- Register -->\n            <p class=\"pt-3\">Al een account:\n              <a routerLink=\"/login\"> Inloggen</a>\n            </p>\n            <p>\n              <a routerLink=\"/passwordrequest\">Paswoord vergeten?</a>\n            </p>\n\n            <!-- Social login -->\n            <!-- <p>or sign in with:</p>\n            <a type=\"button\" class=\"btn-floating btn-fb btn-sm\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-tw btn-sm\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-li btn-sm\">\n              <i class=\"fab fa-linkedin-in\"></i>\n            </a>\n            <a type=\"button\" class=\"btn-floating btn-git btn-sm\">\n              <i class=\"fab fa-github\"></i>\n            </a> -->\n\n          </form>\n          <!-- Form -->\n\n        </div>\n\n      </div>\n      <!-- Material form login --></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-detail/rekening-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-detail/rekening-detail.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"uittreksel\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3>Bankafschrift</h3>\n        <form>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"uittreksel.datum\" type=\"text\" name=\"datum\" class=\"form-control\" id=\"datum\" readonly>\n            <label for=\"datum\" class=\"\">Datum</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"uittreksel.bedrag\" type=\"text\" name=\"bedrag\" class=\"form-control\" id=\"bedrag\">\n            <label for=\"bedrag\" class=\"\">Bedrag</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"uittreksel.tegenrekening\" type=\"text\" name=\"tegenrekening\" class=\"form-control\" id=\"tegenrekening\">\n            <label for=\"tegenrekening\" class=\"\">Tegenrekening</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"uittreksel.tegenpartij\" type=\"text\" name=\"tegenpartij\" class=\"form-control\" id=\"tegenpartij\">\n            <label for=\"tegenpartij\" class=\"\">Tegenpartij</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"uittreksel.omschrijving\" type=\"text\" name=\"omschrijving\" class=\"form-control\" id=\"omschrijving\">\n            <label for=\"omschrijving\" class=\"\">Omschrijving</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"uittreksel.type\" type=\"text\" name=\"type\" class=\"form-control\" id=\"type\">\n            <label for=\"type\" class=\"\">Kostentype</label>\n          </div>\n        </form>\n        <!-- <div class=\"md-form form-group\">\n          <input mdbInput [(ngModel)]=\"uittreksel.factuur\" type=\"text\" name=\"factuur\" class=\"form-control\" id=\"factuur\">\n          <label for=\"factuur\" class=\"\">Factuur</label>\n        </div>\n        <br/> -->\n        <!-- <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"saveUittreksel(uittreksel)\">Wijziging oplaan</button> -->\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"back()\">Terug naar overzicht</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-edit/rekening-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-edit/rekening-edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"uittreksel\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3>Bankafschrift aanpassen</h3>\n        <form>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"uittreksel.bedrag\" type=\"number\" name=\"bedrag\" class=\"form-control\" id=\"bedrag\">\n            <label for=\"bedrag\" class=\"\">Bedrag</label>\n          </div>\n          <div>\n          <mdb-select *ngIf=\"kostenTypes\" (ngModelChange)=\"getSelectedType($event)\"\n                      [(ngModel)]=\"selectedType\" [options]=\"kostenTypes\" name=\"kostentypes\" label=\"Kostentype\"></mdb-select>\n          </div>\n        </form>\n        <br/>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" outline=\"true\" (click)=\"back()\">Annuleren</button>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"saveUittreksel(uittreksel)\">Wijziging oplaan</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-list/rekening-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-list/rekening-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-4\"><h3>Rekeningoverzicht</h3></div>\n  <div class=\"col-md-4\">\n    <mdb-select (ngModelChange)=\"getSelectedValue($event)\" [(ngModel)]=\"selectedType\" [options]=\"optionsSelect\"></mdb-select>\n  </div>\n  <div class=\"col-md-4\">\n    <form class=\"form-inline waves-light\" mdbWavesEffect>\n      <div class=\"md-form mt-0\">\n        <input class=\"form-control mr-sm-2\" name=\"search\" [(ngModel)]=\"filter\" type=\"text\" placeholder=\"Filter...\">\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"container\">\n      <input id=\"inputfile\" name=\"inputfile\" class=\"inputfile\" type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\"\n        (change)=\"fileSelected($event)\"/>\n      <label for=\"inputfile\" [class.custom-file-upload]='uploadToggle'><i class=\"fas fa-file-import\"></i><span> {{uploadLabel}}</span></label>\n      <button id=\"uploadbutton\" mdbBtn type=\"button\" color=\"primary\" size=\"sm\"\n        (click)=\"uploader.uploadAll()\"\n        [disabled]=\"!uploader.getNotUploadedItems().length\" >\n            Bestand opladen\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-3\" style=\"padding-top:0px\">\n    <div style=\"text-align:right\">\n      Saldo per {{datum | date:'dd/MM/yyyy'}}\n    </div>\n    <h3 style=\"text-align:right\">\n      {{totaal | number: '1.2-2'}} €\n    </h3>\n  </div>\n</div>\n\n<br>\n\n<table mdbTable small=\"true\" striped=\"true\">\n  <thead class=\"special-color white-text\">\n  <tr>\n    <th scope=\"col\" (click)=\"sort('id')\" style=\"border-radius:2px 0px 0px 0px\">#</th>\n    <th scope=\"col\" (click)=\"sort('datum')\">Datum</th>\n    <th scope=\"col\" (click)=\"sort('type')\">Omschrijving</th>\n    <th scope=\"col\" (click)=\"sort('bedrag')\" style=\"text-align:right\">Bedrag</th>\n    <th scope=\"col\" (click)=\"sort('tegenrekening')\">Tegenrekening</th>\n    <th scope=\"col\" (click)=\"sort('tegenpartij')\">Tegenpartij</th>\n    <th scope=\"col\" (click)=\"sort('type')\">Type</th>\n    <th scope=\"col\" (click)=\"sort('type')\" style=\"border-radius:0px 2px 0px 0px\">Factuur/Voorschot</th>\n    <th scope=\"col\" style=\"border-radius:0px 2px 0px 0px\">Actie</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let uittreksel of uittreksels | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 10, currentPage: p }; index as i\">\n    <th scope=\"row\">{{ uittreksel.id }}</th>\n    <td>\n      {{ uittreksel.datum | date:'dd/MM/yyyy' }}\n    </td>\n    <td>{{ uittreksel.omschrijving }}</td>\n    <td style=\"text-align:right\">{{ uittreksel.bedrag | number: '1.2-2' }} €</td>\n    <td>{{ uittreksel.tegenrekening }}</td>\n    <td>{{ uittreksel.tegenpartij }}</td>\n    <td>{{ uittreksel.type }}</td>\n    <td style=\"text-align:center\"><a *ngIf=\"uittreksel.factuur\" href=\"#\" routerLink=\"/factuurdetail/{{uittreksel.factuur}}\"><i class=\"fas fa-arrow-circle-right\"></i></a></td>\n    <td><a href=\"#\" routerLink=\"/rekeningedit/{{uittreksel.id}}\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></a></td>\n  </tr>\n  </tbody>\n  <br>\n</table>\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-ongekoppeld/rekening-ongekoppeld.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-ongekoppeld/rekening-ongekoppeld.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <br>\n<div>\n  <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Filter...\">\n</div> -->\n\n<div class=\"row\">\n  <div class=\"col-md-8\"><h3>Ongekoppelde rekeningen</h3></div>\n  <div class=\"col-md-4\">\n    <form class=\"form-inline waves-light\" mdbWavesEffect>\n      <div class=\"md-form mt-0\">\n        <input class=\"form-control mr-sm-2\" name=\"search\" [(ngModel)]=\"filter\" type=\"text\" placeholder=\"Filter...\">\n      </div>\n    </form>\n  </div>\n</div>\n\n<table mdbTable small=\"true\" striped=\"true\">\n  <thead class=\"special-color white-text\">\n  <tr>\n    <th scope=\"col\" (click)=\"sort('datum')\">Datum</th>\n    <th scope=\"col\" (click)=\"sort('bedrag')\">Bedrag</th>\n    <th scope=\"col\" (click)=\"sort('tegenrekening')\">Tegenrekening</th>\n    <th scope=\"col\" (click)=\"sort('omschrijving')\">Omschrijving</th>\n    <th scope=\"col\">Actie</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let uittreksel of uittreksels | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 10, currentPage: p }; index as i\">\n    <td style=\"vertical-align:middle\">\n      {{ uittreksel.datum | date:'dd/MM/yyyy' }}\n    </td>\n    <td style=\"vertical-align:middle\">{{ uittreksel.bedrag | number: '1.2-2' }} €</td>\n    <td style=\"vertical-align:middle\">{{ uittreksel.tegenrekening }}</td>\n    <td style=\"vertical-align:middle\">{{ uittreksel.omschrijving }}</td>\n    <td><button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" size=\"sm\" routerLink=\"/partnercreate/{{uittreksel.id}}\"><i class=\"fas fa-link\"> </i> Koppelen</button></td>\n  </tr>\n  </tbody>\n  <br>\n</table>\n\n<div>\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/unit-create/unit-create.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unit-create/unit-create.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3>Eigendom aanmaken</h3>\n        <form>\n            <div class=\"md-form form-group\">\n              <input mdbInput [(ngModel)]=\"unit.naam\" type=\"text\" name=\"naam\" class=\"form-control\" id=\"naam\">\n              <label for=\"naam\" class=\"\">Naam eigendom</label>\n            </div>\n            <div class=\"md-form form-group\">\n              <input mdbInput [(ngModel)]=\"unit.duizendste\" type=\"text\" name=\"duizendste\" class=\"form-control\" id=\"duizendste\">\n              <label for=\"duizendste\" class=\"\">Duizendste</label>\n            </div>\n        </form>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" outline=\"true\" (click)=\"back()\">Annuleren</button>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"createUnit()\">Aanmaken</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/unit-edit/unit-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unit-edit/unit-edit.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"unit\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <h3>Eigendom aanpassen</h3>\n        <form>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"unit.naam\" type=\"text\" name=\"naam\" class=\"form-control\" id=\"naam\">\n            <label for=\"naam\" class=\"\">Naam eigendom</label>\n          </div>\n          <div class=\"md-form form-group\">\n            <input mdbInput [(ngModel)]=\"unit.duizendste\" type=\"text\" name=\"duizendste\" class=\"form-control\" id=\"duizendste\">\n            <label for=\"duizendste\" class=\"\">Duizendste</label>\n          </div>\n        </form>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" outline=\"true\" (click)=\"back()\">Annuleren</button>\n        <button type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" (click)=\"saveUnit(unit)\">Wijziging oplaan</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/unit-list/unit-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unit-list/unit-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Overzicht eigendommen</h3>\n\n<div style='display:inline-block;width:50%;vertical-align:top'>\n  <button *ngIf=\"complete==1000\" type=\"button\" mdbBtn color=\"primary\" mdbWavesEffect routerLink=\"/unitcreate\">\n    <i class=\"fa fa-plus-square\"></i>  Eigendom toevoegen</button>\n  <button *ngIf=\"complete!=1000\" type=\"button\" mdbBtn color=\"light\" mdbWavesEffect routerLink=\"/unitcreate\">\n    <i class=\"fa fa-plus-square\"></i>  Eigendom toevoegen</button>\n</div>\n<div style='display:inline-block;width:50%;text-align:right'>\n  <p style=\"margin:0px\" [ngStyle]=\"{'color':complete==1000 ? 'black' : 'red' }\">Totaal duizendsten: {{complete | number: '1.2-2'}}/1000</p>\n  <p *ngIf=\"instellingen&&!instellingen.nieuw\" [ngStyle]=\"{'color':checkWerkrekening() ? 'black' : 'red' }\" style=\"margin:0px\">Totaal overgenomen saldo werkrekeningen: {{werkrekeningsaldo | number: '1.2-2'}} €</p>\n  <p *ngIf=\"instellingen&&!instellingen.nieuw\" [ngStyle]=\"{'color':checkReserverekening() ? 'black' : 'red' }\" style=\"margin:0px\">Totaal overgenomen saldo reserverekeningen: {{reserverekeningsaldo | number: '1.2-2'}} €</p>\n\n</div>\n\n<div class=\"row mt-5\">\n  <div class=\"col-md-4 mb-3\" *ngFor=\"let unit of units\">\n    <div class=\"card text-center\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Appartement {{unit.naam}}</h5>\n      </div>\n      <div class=\"card-body\">\n        <div *ngIf = \"!unit.eigenaar\" >\n        <button type=\"button\" mdbBtn color=\"primary\" mdbWavesEffect routerLink=\"/eigenaarcreate/{{unit.id}}\">\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i> Eigenaar toevoegen</button><br>\n        </div>\n        <div *ngIf = \"unit.eigenaar\" >\n        <button type=\"button\" mdbBtn color=\"light\" mdbWavesEffect routerLink=\"/eigenaaredit/{{unit.eigenaarid}}\">\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{unit.eigenaar}}</button><br>\n        </div>\n        <p class=\"card-text\">{{unit.duizendste | number: '1.2-2'}}/1000</p>\n      </div>\n      <div class=\"card-footer\">\n        <a href=\"#\" class=\"card-link\" routerLink=\"/unitedit/{{unit.id}}\">\n          <i class=\"fa fa-edit\" aria-hidden=\"true\"></i> Aanpassen\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<button *ngIf=\"setupService.setup!='true'\" type=\"button\" mdbBtn mdbWavesEffect color=\"primary\" routerLink=\"/instellingen\"><i class=\"fas fa-chevron-left\"></i> Vorige</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voorschot-list/voorschot-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voorschot-list/voorschot-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Overzicht Voorschotten</h3>\n<div style='display:inline-block;width:50%'>\n</div>\n<div style='display:inline-block;width:50%'>\n  <form class=\"form-inline waves-light\" mdbWavesEffect>\n    <div class=\"md-form mt-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\" placeholder=\"Filter...\">\n    </div>\n    <div style=\"padding-left:40px;padding-bottom:10px\" class=\"md-form mt-0\">\n      <mdb-checkbox [(ngModel)]=\"open\" name=\"open\" (click)=\"switch()\">Enkel openstaande voorschotten</mdb-checkbox>\n    </div>\n  </form>\n</div>\n\n<table mdbTable small=\"true\" striped=\"true\">\n  <thead class=\"special-color white-text\">\n  <tr>\n    <th scope=\"col\" (click)=\"sort('id')\" style=\"border-radius:2px 0px 0px 0px\">#</th>\n    <th scope=\"col\" (click)=\"sort('datum')\">Datum</th>\n    <th scope=\"col\" (click)=\"sort('bedrag')\">Bedrag</th>\n    <th scope=\"col\" (click)=\"sort('omschrijving')\">Omschrijving</th>\n    <th scope=\"col\" (click)=\"sort('partner')\">Eigenaar</th>\n    <th scope=\"col\" (click)=\"sort('vervaldatum')\">Vervaldatum</th>\n    <th scope=\"col\" (click)=\"sort('fk_uittreksel')\" style=\"border-radius:0px 2px 0px 0px\">Betaald</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let factuur of facturen | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 10, currentPage: p }; index as i\">\n    <th scope=\"row\">{{ factuur.id }}</th>\n    <td>\n      {{ factuur.datum | date:'dd/MM/yyyy' }}\n    </td>\n    <td>{{ factuur.bedrag | number: '1.2-2'}} €</td>\n    <td>{{ factuur.omschrijving }}</td>\n    <td>{{ factuur.partner }}</td>\n    <td>{{ factuur.vervaldatum | date: 'dd/MM/yyyy' }}</td>\n    <td style=\"text-align:center\"><a *ngIf=\"factuur.fk_uittreksel\" href=\"#\" routerLink=\"/rekeningdetail/{{factuur.fk_uittreksel}}\"><i class=\"fas fa-check-circle\"></i></a></td>\n  </tr>\n  </tbody>\n</table>\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _password_request_password_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-request/password-request.component */ "./src/app/password-request/password-request.component.ts");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/password-reset/password-reset.component.ts");
/* harmony import */ var _unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unit-list/unit-list.component */ "./src/app/unit-list/unit-list.component.ts");
/* harmony import */ var _unit_create_unit_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unit-create/unit-create.component */ "./src/app/unit-create/unit-create.component.ts");
/* harmony import */ var _unit_edit_unit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unit-edit/unit-edit.component */ "./src/app/unit-edit/unit-edit.component.ts");
/* harmony import */ var _eigenaar_create_eigenaar_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eigenaar-create/eigenaar-create.component */ "./src/app/eigenaar-create/eigenaar-create.component.ts");
/* harmony import */ var _eigenaar_edit_eigenaar_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eigenaar-edit/eigenaar-edit.component */ "./src/app/eigenaar-edit/eigenaar-edit.component.ts");
/* harmony import */ var _rekening_list_rekening_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rekening-list/rekening-list.component */ "./src/app/rekening-list/rekening-list.component.ts");
/* harmony import */ var _rekening_edit_rekening_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rekening-edit/rekening-edit.component */ "./src/app/rekening-edit/rekening-edit.component.ts");
/* harmony import */ var _rekening_detail_rekening_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rekening-detail/rekening-detail.component */ "./src/app/rekening-detail/rekening-detail.component.ts");
/* harmony import */ var _fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fileupload/fileupload.component */ "./src/app/fileupload/fileupload.component.ts");
/* harmony import */ var _rekening_ongekoppeld_rekening_ongekoppeld_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rekening-ongekoppeld/rekening-ongekoppeld.component */ "./src/app/rekening-ongekoppeld/rekening-ongekoppeld.component.ts");
/* harmony import */ var _partner_create_partner_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./partner-create/partner-create.component */ "./src/app/partner-create/partner-create.component.ts");
/* harmony import */ var _factuur_list_factuur_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./factuur-list/factuur-list.component */ "./src/app/factuur-list/factuur-list.component.ts");
/* harmony import */ var _factuur_create_factuur_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./factuur-create/factuur-create.component */ "./src/app/factuur-create/factuur-create.component.ts");
/* harmony import */ var _factuur_detail_factuur_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./factuur-detail/factuur-detail.component */ "./src/app/factuur-detail/factuur-detail.component.ts");
/* harmony import */ var _factuur_edit_factuur_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./factuur-edit/factuur-edit.component */ "./src/app/factuur-edit/factuur-edit.component.ts");
/* harmony import */ var _voorschot_list_voorschot_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./voorschot-list/voorschot-list.component */ "./src/app/voorschot-list/voorschot-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _instellingen_instellingen_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./instellingen/instellingen.component */ "./src/app/instellingen/instellingen.component.ts");
/* harmony import */ var _rapport_balans_rapport_balans_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rapport-balans/rapport-balans.component */ "./src/app/rapport-balans/rapport-balans.component.ts");
/* harmony import */ var _rapport_individuelerekeningen_rapport_individuelerekeningen_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rapport-individuelerekeningen/rapport-individuelerekeningen.component */ "./src/app/rapport-individuelerekeningen/rapport-individuelerekeningen.component.ts");
/* harmony import */ var _rapport_inkomstenuitgaven_rapport_inkomstenuitgaven_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component */ "./src/app/rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");





























const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'passwordrequest',
        component: _password_request_password_request_component__WEBPACK_IMPORTED_MODULE_5__["PasswordRequestComponent"]
    },
    {
        path: 'passwordreset',
        component: _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_6__["PasswordResetComponent"],
    },
    {
        path: 'unitlist',
        component: _unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_7__["UnitListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'unitcreate',
        component: _unit_create_unit_create_component__WEBPACK_IMPORTED_MODULE_8__["UnitCreateComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'unitedit/:id',
        component: _unit_edit_unit_edit_component__WEBPACK_IMPORTED_MODULE_9__["UnitEditComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'eigenaarcreate/:id',
        component: _eigenaar_create_eigenaar_create_component__WEBPACK_IMPORTED_MODULE_10__["EigenaarCreateComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'eigenaaredit/:id',
        component: _eigenaar_edit_eigenaar_edit_component__WEBPACK_IMPORTED_MODULE_11__["EigenaarEditComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'rekeninglist',
        component: _rekening_list_rekening_list_component__WEBPACK_IMPORTED_MODULE_12__["RekeningListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'rekeningedit/:id',
        component: _rekening_edit_rekening_edit_component__WEBPACK_IMPORTED_MODULE_13__["RekeningEditComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'rekeningdetail/:id',
        component: _rekening_detail_rekening_detail_component__WEBPACK_IMPORTED_MODULE_14__["RekeningDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'ongekoppeld',
        component: _rekening_ongekoppeld_rekening_ongekoppeld_component__WEBPACK_IMPORTED_MODULE_16__["RekeningOngekoppeldComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'partnercreate/:id',
        component: _partner_create_partner_create_component__WEBPACK_IMPORTED_MODULE_17__["PartnerCreateComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'factuurlist',
        component: _factuur_list_factuur_list_component__WEBPACK_IMPORTED_MODULE_18__["FactuurListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'factuurcreate',
        component: _factuur_create_factuur_create_component__WEBPACK_IMPORTED_MODULE_19__["FactuurCreateComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'factuurdetail/:id',
        component: _factuur_detail_factuur_detail_component__WEBPACK_IMPORTED_MODULE_20__["FactuurDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'factuuredit/:id',
        component: _factuur_edit_factuur_edit_component__WEBPACK_IMPORTED_MODULE_21__["FactuurEditComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'voorschotlist',
        component: _voorschot_list_voorschot_list_component__WEBPACK_IMPORTED_MODULE_22__["VoorschotListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'rapportbalans',
        component: _rapport_balans_rapport_balans_component__WEBPACK_IMPORTED_MODULE_25__["RapportBalansComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'rapportindividuelerekeningen',
        component: _rapport_individuelerekeningen_rapport_individuelerekeningen_component__WEBPACK_IMPORTED_MODULE_26__["RapportIndividuelerekeningenComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'rapportinkomstenuitgaven',
        component: _rapport_inkomstenuitgaven_rapport_inkomstenuitgaven_component__WEBPACK_IMPORTED_MODULE_27__["RapportInkomstenuitgavenComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'fileupload',
        component: _fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_15__["FileuploadComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    },
    {
        path: 'instellingen',
        component: _instellingen_instellingen_component__WEBPACK_IMPORTED_MODULE_24__["InstellingenComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]]
    }
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header, main, footer {\n  padding-left: 240px;\n}\n\nmain {\n  padding-top: 0px;\n}\n\n@media only screen and (max-width : 992px) {\n  header, main, footer {\n    padding-left: 0;\n  }\n}\n\n.side-nav {\n  font-size: .9rem;\n  font-weight:200;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIsIG1haW4sIGZvb3RlciB7XG4gIHBhZGRpbmctbGVmdDogMjQwcHg7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA5OTJweCkge1xuICBoZWFkZXIsIG1haW4sIGZvb3RlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG5cbi5zaWRlLW5hdiB7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG4gIGZvbnQtd2VpZ2h0OjIwMDtcbn1cbiJdfQ== */");

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
/* harmony import */ var _setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup.service */ "./src/app/setup.service.ts");



let AppComponent = class AppComponent {
    constructor(setupService) {
        this.setupService = setupService;
        this.title = 'SNDX';
    }
    ngOnInit() {
        this.setupService.update();
        // .subscribe(
        //   res => console.log(res),
        //   err => console.log(err)
        // )
    }
};
AppComponent.ctorParameters = () => [
    { type: _setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unit-list/unit-list.component */ "./src/app/unit-list/unit-list.component.ts");
/* harmony import */ var _unit_create_unit_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./unit-create/unit-create.component */ "./src/app/unit-create/unit-create.component.ts");
/* harmony import */ var _unit_edit_unit_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./unit-edit/unit-edit.component */ "./src/app/unit-edit/unit-edit.component.ts");
/* harmony import */ var _eigenaar_create_eigenaar_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./eigenaar-create/eigenaar-create.component */ "./src/app/eigenaar-create/eigenaar-create.component.ts");
/* harmony import */ var _eigenaar_edit_eigenaar_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./eigenaar-edit/eigenaar-edit.component */ "./src/app/eigenaar-edit/eigenaar-edit.component.ts");
/* harmony import */ var _fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fileupload/fileupload.component */ "./src/app/fileupload/fileupload.component.ts");
/* harmony import */ var _rekening_list_rekening_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rekening-list/rekening-list.component */ "./src/app/rekening-list/rekening-list.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-order-pipe */ "./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _rekening_ongekoppeld_rekening_ongekoppeld_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rekening-ongekoppeld/rekening-ongekoppeld.component */ "./src/app/rekening-ongekoppeld/rekening-ongekoppeld.component.ts");
/* harmony import */ var _partner_create_partner_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./partner-create/partner-create.component */ "./src/app/partner-create/partner-create.component.ts");
/* harmony import */ var _factuur_list_factuur_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./factuur-list/factuur-list.component */ "./src/app/factuur-list/factuur-list.component.ts");
/* harmony import */ var _factuur_create_factuur_create_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./factuur-create/factuur-create.component */ "./src/app/factuur-create/factuur-create.component.ts");
/* harmony import */ var _voorschot_list_voorschot_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./voorschot-list/voorschot-list.component */ "./src/app/voorschot-list/voorschot-list.component.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm2015/ng-uikit-pro-standard.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _instellingen_instellingen_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./instellingen/instellingen.component */ "./src/app/instellingen/instellingen.component.ts");
/* harmony import */ var _rapport_balans_rapport_balans_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rapport-balans/rapport-balans.component */ "./src/app/rapport-balans/rapport-balans.component.ts");
/* harmony import */ var _rapport_inkomstenuitgaven_rapport_inkomstenuitgaven_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component */ "./src/app/rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component.ts");
/* harmony import */ var _rapport_individuelerekeningen_rapport_individuelerekeningen_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./rapport-individuelerekeningen/rapport-individuelerekeningen.component */ "./src/app/rapport-individuelerekeningen/rapport-individuelerekeningen.component.ts");
/* harmony import */ var _rekening_edit_rekening_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./rekening-edit/rekening-edit.component */ "./src/app/rekening-edit/rekening-edit.component.ts");
/* harmony import */ var _factuur_detail_factuur_detail_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./factuur-detail/factuur-detail.component */ "./src/app/factuur-detail/factuur-detail.component.ts");
/* harmony import */ var _rekening_detail_rekening_detail_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./rekening-detail/rekening-detail.component */ "./src/app/rekening-detail/rekening-detail.component.ts");
/* harmony import */ var _factuur_edit_factuur_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./factuur-edit/factuur-edit.component */ "./src/app/factuur-edit/factuur-edit.component.ts");
/* harmony import */ var _password_request_password_request_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./password-request/password-request.component */ "./src/app/password-request/password-request.component.ts");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/password-reset/password-reset.component.ts");












//import { EventService } from './event.service';






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileSelectDirective"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_14__["UnitListComponent"],
            _unit_create_unit_create_component__WEBPACK_IMPORTED_MODULE_15__["UnitCreateComponent"],
            _unit_edit_unit_edit_component__WEBPACK_IMPORTED_MODULE_16__["UnitEditComponent"],
            _eigenaar_create_eigenaar_create_component__WEBPACK_IMPORTED_MODULE_17__["EigenaarCreateComponent"],
            _eigenaar_edit_eigenaar_edit_component__WEBPACK_IMPORTED_MODULE_18__["EigenaarEditComponent"],
            _fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_19__["FileuploadComponent"],
            _rekening_list_rekening_list_component__WEBPACK_IMPORTED_MODULE_20__["RekeningListComponent"],
            _rekening_ongekoppeld_rekening_ongekoppeld_component__WEBPACK_IMPORTED_MODULE_24__["RekeningOngekoppeldComponent"],
            _partner_create_partner_create_component__WEBPACK_IMPORTED_MODULE_25__["PartnerCreateComponent"],
            _factuur_list_factuur_list_component__WEBPACK_IMPORTED_MODULE_26__["FactuurListComponent"],
            _factuur_create_factuur_create_component__WEBPACK_IMPORTED_MODULE_27__["FactuurCreateComponent"],
            _voorschot_list_voorschot_list_component__WEBPACK_IMPORTED_MODULE_28__["VoorschotListComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
            _instellingen_instellingen_component__WEBPACK_IMPORTED_MODULE_31__["InstellingenComponent"],
            _rapport_balans_rapport_balans_component__WEBPACK_IMPORTED_MODULE_32__["RapportBalansComponent"],
            _rapport_inkomstenuitgaven_rapport_inkomstenuitgaven_component__WEBPACK_IMPORTED_MODULE_33__["RapportInkomstenuitgavenComponent"],
            _rapport_individuelerekeningen_rapport_individuelerekeningen_component__WEBPACK_IMPORTED_MODULE_34__["RapportIndividuelerekeningenComponent"],
            _rekening_edit_rekening_edit_component__WEBPACK_IMPORTED_MODULE_35__["RekeningEditComponent"],
            _factuur_detail_factuur_detail_component__WEBPACK_IMPORTED_MODULE_36__["FactuurDetailComponent"],
            _rekening_detail_rekening_detail_component__WEBPACK_IMPORTED_MODULE_37__["RekeningDetailComponent"],
            _factuur_edit_factuur_edit_component__WEBPACK_IMPORTED_MODULE_38__["FactuurEditComponent"],
            _password_request_password_request_component__WEBPACK_IMPORTED_MODULE_39__["PasswordRequestComponent"],
            _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_40__["PasswordResetComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_21__["Ng2SearchPipeModule"],
            ng2_order_pipe__WEBPACK_IMPORTED_MODULE_22__["Ng2OrderModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_23__["NgxPaginationModule"],
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_29__["MDBBootstrapModulesPro"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
        ],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_29__["MDBSpinningPreloader"], _auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptorService"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this._registerUrl = _config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "register";
        this._loginUrl = _config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "login";
    }
    registerUser(user) {
        return this.http.post(this._registerUrl, user);
    }
    loginUser(user) {
        return this.http.post(this._loginUrl, user);
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
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

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const config = {
    //api: "http://localhost:3000/api/"
    api: "http://sndx.be:3000/api/"
};


/***/ }),

/***/ "./src/app/dashboard.service.ts":
/*!**************************************!*\
  !*** ./src/app/dashboard.service.ts ***!
  \**************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
    }
    getAgenda() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "agenda");
    }
    getInkomsten() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "inkomsten");
    }
    getUitgaven() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "uitgaven");
    }
    getWerkrekeningSaldo() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "werkrekeningsaldo");
    }
    getReserverekeningSaldo() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "reserverekeningsaldo");
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/dashboard.service.ts");
/* harmony import */ var _uittreksel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uittreksel.service */ "./src/app/uittreksel.service.ts");
/* harmony import */ var _factuur_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factuur.service */ "./src/app/factuur.service.ts");





//import { BaseChartDirective } from 'ng-uikit-pro-standard'
let DashboardComponent = class DashboardComponent {
    constructor(dashboardService, uittrekselService, factuurService) {
        this.dashboardService = dashboardService;
        this.uittrekselService = uittrekselService;
        this.factuurService = factuurService;
        //@ViewChild(BaseChartDirective) chart: BaseChartDirective;
        this.chartType = 'line';
        this.chartDatasets = [
            { data: [], label: 'Gecumuleerde inkomsten' },
            { data: [], label: 'Gecumuleerde uitgaven' }
        ];
        this.chartLabels = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli',
            'Augustus', 'September', 'Oktober', 'November'];
        this.chartColors = [
            {
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 4,
            },
            {
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 4,
            }
        ];
        this.chartOptions = {
            responsive: true
        };
        this.voorschotten = [];
        this.facturen = [];
        this.ongekoppeld = 0;
        this.todayDate = new Date();
        this.werkrekeningsaldo = 0;
        this.reserverekeningsaldo = 0;
    }
    chartClicked(e) { }
    chartHovered(e) { }
    ngOnInit() {
        this.dashboardService.getAgenda()
            .subscribe(res => this.agendas = res, err => console.log(err));
        this.uittrekselService.getOngekoppeldeUittreksels()
            .subscribe(res => this.ongekoppeld = res.length, err => console.log(err));
        this.factuurService.getVoorschotten(false)
            .subscribe(res => {
            res.forEach((element) => {
                if (!element.fk_uittreksel) {
                    let vervaldatum = new Date(element.vervaldatum);
                    if (vervaldatum < this.todayDate) {
                        element.vervallen = true;
                    }
                    else {
                        element.vervallen = false;
                    }
                    this.voorschotten.push(element);
                }
            });
        }, err => console.log(err));
        this.factuurService.getFacturen(true)
            .subscribe(res => {
            res.forEach((element) => {
                let vervaldatum = new Date(element.vervaldatum);
                if (vervaldatum < this.todayDate) {
                    element.vervallen = true;
                }
                else {
                    element.vervallen = false;
                }
                this.facturen.push(element);
            });
        }, err => console.log(err));
        this.dashboardService.getInkomsten()
            .subscribe(res => {
            let inkomsten = 0;
            for (let element of res.rows) {
                inkomsten = inkomsten + parseInt(element.sum);
                this.chartDatasets[0].data.push(inkomsten);
            }
            let clone = JSON.parse(JSON.stringify(this.chartDatasets));
            this.chartDatasets = clone;
        }, err => console.log(err));
        this.dashboardService.getUitgaven()
            .subscribe(res => {
            let uitgaven = 0;
            res.rows.forEach((element) => {
                uitgaven = uitgaven + parseInt(element.sum);
                this.chartDatasets[1].data.push(-uitgaven);
            });
            let clone = JSON.parse(JSON.stringify(this.chartDatasets));
            this.chartDatasets = clone;
        }, err => console.log(err));
        this.dashboardService.getWerkrekeningSaldo()
            .subscribe(res => {
            this.werkrekeningsaldo = res.sum || 0;
        }, err => console.log(err));
        this.dashboardService.getReserverekeningSaldo()
            .subscribe(res => {
            this.reserverekeningsaldo = res.sum || 0;
        }, err => console.log(err));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
    { type: _uittreksel_service__WEBPACK_IMPORTED_MODULE_3__["UittrekselService"] },
    { type: _factuur_service__WEBPACK_IMPORTED_MODULE_4__["FactuurService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/eigenaar-create/eigenaar-create.component.css":
/*!***************************************************************!*\
  !*** ./src/app/eigenaar-create/eigenaar-create.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VpZ2VuYWFyLWNyZWF0ZS9laWdlbmFhci1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/eigenaar-create/eigenaar-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/eigenaar-create/eigenaar-create.component.ts ***!
  \**************************************************************/
/*! exports provided: EigenaarCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EigenaarCreateComponent", function() { return EigenaarCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _eigenaar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eigenaar.service */ "./src/app/eigenaar.service.ts");
/* harmony import */ var _instellingen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../instellingen.service */ "./src/app/instellingen.service.ts");
/* harmony import */ var _setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../setup.service */ "./src/app/setup.service.ts");







let EigenaarCreateComponent = class EigenaarCreateComponent {
    constructor(eigenaarService, instellingenService, setupService, _router, route) {
        this.eigenaarService = eigenaarService;
        this.instellingenService = instellingenService;
        this.setupService = setupService;
        this._router = _router;
        this.route = route;
        this.eigenaar = { id: 0, naam: "", voornaam: "", email: "", bankrnr: "",
            overgenomen_werkrekening: 0, overgenomen_reserverekening: 0, unitFK: 0 };
    }
    ngOnInit() {
        this.instellingenService.getInstellingen()
            .subscribe(res => this.instellingen = res[0]);
    }
    check() {
        if (this.eigenaar.naam && this.eigenaar.bankrnr)
            return true;
        else
            return false;
    }
    createEigenaar() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.eigenaar.unitFK = id;
        if (this.eigenaar.overgenomen_werkrekening)
            this.eigenaar.overgenomen_werkrekening = parseFloat(this.eigenaar.overgenomen_werkrekening.toString().replace(',', '.'));
        else
            this.eigenaar.overgenomen_werkrekening = 0;
        if (this.eigenaar.overgenomen_reserverekening)
            this.eigenaar.overgenomen_reserverekening = parseFloat(this.eigenaar.overgenomen_reserverekening.toString().replace(',', '.'));
        else
            this.eigenaar.overgenomen_reserverekening = 0;
        this.eigenaarService.createEigenaar(this.eigenaar)
            .subscribe(res => {
            this.setupService.update();
            // .subscribe(
            //   res => console.log(res),
            //   err => console.log(err)
            // )
            this._router.navigate(['/unitlist']);
        }, err => console.log(err));
    }
};
EigenaarCreateComponent.ctorParameters = () => [
    { type: _eigenaar_service__WEBPACK_IMPORTED_MODULE_3__["EigenaarService"] },
    { type: _instellingen_service__WEBPACK_IMPORTED_MODULE_4__["InstellingenService"] },
    { type: _setup_service__WEBPACK_IMPORTED_MODULE_5__["SetupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
EigenaarCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eigenaar-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eigenaar-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/eigenaar-create/eigenaar-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eigenaar-create.component.css */ "./src/app/eigenaar-create/eigenaar-create.component.css")).default]
    })
], EigenaarCreateComponent);



/***/ }),

/***/ "./src/app/eigenaar-edit/eigenaar-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/eigenaar-edit/eigenaar-edit.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VpZ2VuYWFyLWVkaXQvZWlnZW5hYXItZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/eigenaar-edit/eigenaar-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/eigenaar-edit/eigenaar-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: EigenaarEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EigenaarEditComponent", function() { return EigenaarEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _eigenaar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eigenaar.service */ "./src/app/eigenaar.service.ts");
/* harmony import */ var _instellingen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../instellingen.service */ "./src/app/instellingen.service.ts");






let EigenaarEditComponent = class EigenaarEditComponent {
    constructor(eigenaarService, instellingenService, _router, route, _location) {
        this.eigenaarService = eigenaarService;
        this.instellingenService = instellingenService;
        this._router = _router;
        this.route = route;
        this._location = _location;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.eigenaarService.getEigenaar(id)
            .subscribe(res => this.eigenaar = res, err => console.log(err));
        this.instellingenService.getInstellingen()
            .subscribe(res => this.instellingen = res[0]);
    }
    check() {
        if (this.eigenaar.naam && this.eigenaar.bankrnr)
            return true;
        else
            return false;
    }
    saveEigenaar(eigenaar) {
        if (eigenaar.overgenomen_werkrekening)
            eigenaar.overgenomen_werkrekening = parseFloat(eigenaar.overgenomen_werkrekening.toString().replace(',', '.'));
        else
            eigenaar.overgenomen_werkrekening = 0;
        if (eigenaar.overgenomen_reserverekening)
            eigenaar.overgenomen_reserverekening = parseFloat(eigenaar.overgenomen_reserverekening.toString().replace(',', '.'));
        else
            eigenaar.overgenomen_reserverekening = 0;
        this.eigenaarService.saveEigenaar(eigenaar)
            .subscribe(res => {
            console.log(res);
            this._router.navigate(['/unitlist']);
        }, err => console.log(err));
        this.eigenaar = { id: 0, naam: "", voornaam: "", email: "",
            overgenomen_werkrekening: 0, overgenomen_reserverekening: 0, bankrnr: "", unitFK: 0 };
    }
    back() {
        this._location.back();
    }
};
EigenaarEditComponent.ctorParameters = () => [
    { type: _eigenaar_service__WEBPACK_IMPORTED_MODULE_4__["EigenaarService"] },
    { type: _instellingen_service__WEBPACK_IMPORTED_MODULE_5__["InstellingenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
EigenaarEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eigenaar-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eigenaar-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/eigenaar-edit/eigenaar-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eigenaar-edit.component.css */ "./src/app/eigenaar-edit/eigenaar-edit.component.css")).default]
    })
], EigenaarEditComponent);



/***/ }),

/***/ "./src/app/eigenaar.service.ts":
/*!*************************************!*\
  !*** ./src/app/eigenaar.service.ts ***!
  \*************************************/
/*! exports provided: EigenaarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EigenaarService", function() { return EigenaarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");





let EigenaarService = class EigenaarService {
    constructor(http) {
        this.http = http;
    }
    getEigenaar(id) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "eigenaar", { params: httpParams });
    }
    getEigenaars() {
        console.log('geteigenaars');
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "eigenaars");
    }
    createEigenaar(eigenaar) {
        console.log(eigenaar);
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "eigenaars", eigenaar);
    }
    saveEigenaar(eigenaar) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "eigenaars", eigenaar);
    }
};
EigenaarService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EigenaarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EigenaarService);



/***/ }),

/***/ "./src/app/factuur-create/factuur-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/factuur-create/factuur-create.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3R1dXItY3JlYXRlL2ZhY3R1dXItY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/factuur-create/factuur-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/factuur-create/factuur-create.component.ts ***!
  \************************************************************/
/*! exports provided: FactuurCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurCreateComponent", function() { return FactuurCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _factuur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factuur.service */ "./src/app/factuur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _partner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partner.service */ "./src/app/partner.service.ts");
/* harmony import */ var _kostentypes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kostentypes.service */ "./src/app/kostentypes.service.ts");
/* harmony import */ var _uittreksel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../uittreksel.service */ "./src/app/uittreksel.service.ts");







let FactuurCreateComponent = class FactuurCreateComponent {
    constructor(factuurService, partnerService, kostentypeService, uittrekselService, router) {
        this.factuurService = factuurService;
        this.partnerService = partnerService;
        this.kostentypeService = kostentypeService;
        this.uittrekselService = uittrekselService;
        this.router = router;
        this.factuur = { id: 0, omschrijving: "", bedrag: null, datum: "", vervaldatum: "", fk_partner: 0 };
        this.partnersSelect = [];
        this.selectedPartner = null;
        this.partner = { id: 0, naam: "", fk_type: 1, rekeningnummer: "" };
        this.kostenTypes = [];
        this.selectedType = null;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy'
        };
    }
    ngOnInit() {
        this.partnerService.getLeveranciers()
            .subscribe(res => {
            console.log(res);
            for (let element of res) {
                this.partnersSelect = [...this.partnersSelect, { value: element.id, label: element.naam }];
            }
            ;
        }, err => console.log(err));
        this.kostentypeService.getTypes()
            .subscribe(res => {
            res.rows.forEach((element) => {
                console.log(element);
                this.kostenTypes = [...this.kostenTypes, { value: element.id, label: element.naam }];
            });
        });
    }
    getSelectedValue(event) {
        this.selectedPartner = event;
    }
    getSelectedType(event) {
        this.selectedType = event;
    }
    createFactuur() {
        let factuurdatum = "";
        if (this.factuur.datum) {
            let dag = this.factuur.datum.substr(0, 2);
            let maand = this.factuur.datum.substr(3, 2);
            let jaar = this.factuur.datum.substr(6, 4);
            factuurdatum = jaar + '-' + maand + '-' + dag;
        }
        this.factuur.datum = factuurdatum;
        let vervaldatum = "";
        if (this.factuur.vervaldatum) {
            let dag = this.factuur.vervaldatum.substr(0, 2);
            let maand = this.factuur.vervaldatum.substr(3, 2);
            let jaar = this.factuur.vervaldatum.substr(6, 4);
            vervaldatum = jaar + '-' + maand + '-' + dag;
        }
        this.factuur.vervaldatum = vervaldatum;
        if (this.selectedPartner) {
            this.factuur.fk_partner = this.selectedPartner;
        }
        if (this.factuur.bedrag)
            this.factuur.bedrag = parseFloat(this.factuur.bedrag.toString().replace(',', '.'));
        else
            this.factuur.bedrag = 0;
        this.factuurService.createFactuur(this.factuur)
            .subscribe(res => this.router.navigate(['/factuurlist']), err => console.log(err));
        this.factuur = { id: 0, omschrijving: "", bedrag: null, datum: "", vervaldatum: "", fk_partner: 0 };
        //TODO: kijken of we kunnen koppelen aan rekeninguittreksel (=betaald)
    }
    createPartner(partner) {
        this.basicModal.hide();
        this.partner.fk_type = this.selectedType;
        this.partnerService.createPartner(partner)
            .subscribe(res => {
            this.partnersSelect = [...this.partnersSelect, { value: res.rows[0].id, label: partner.naam }];
            this.selectedPartner = res.rows[0].id;
            partner.id = res.rows[0].id;
            this.uittrekselService.koppelUittreksels(partner)
                .subscribe(res => console.log(res), err => console.log(err));
        }, err => console.log(err));
        //TODO: kijken of hiermee rekeninguittreksels kunnen gekoppeld worden met partner
    }
};
FactuurCreateComponent.ctorParameters = () => [
    { type: _factuur_service__WEBPACK_IMPORTED_MODULE_2__["FactuurService"] },
    { type: _partner_service__WEBPACK_IMPORTED_MODULE_4__["PartnerService"] },
    { type: _kostentypes_service__WEBPACK_IMPORTED_MODULE_5__["KostentypesService"] },
    { type: _uittreksel_service__WEBPACK_IMPORTED_MODULE_6__["UittrekselService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicModal', { static: true })
], FactuurCreateComponent.prototype, "basicModal", void 0);
FactuurCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-factuur-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./factuur-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-create/factuur-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./factuur-create.component.css */ "./src/app/factuur-create/factuur-create.component.css")).default]
    })
], FactuurCreateComponent);



/***/ }),

/***/ "./src/app/factuur-detail/factuur-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/factuur-detail/factuur-detail.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3R1dXItZGV0YWlsL2ZhY3R1dXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/factuur-detail/factuur-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/factuur-detail/factuur-detail.component.ts ***!
  \************************************************************/
/*! exports provided: FactuurDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurDetailComponent", function() { return FactuurDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _factuur_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factuur.service */ "./src/app/factuur.service.ts");





let FactuurDetailComponent = class FactuurDetailComponent {
    constructor(factuurService, _router, route, _location) {
        this.factuurService = factuurService;
        this._router = _router;
        this.route = route;
        this._location = _location;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.factuurService.getFactuur(id)
            .subscribe(res => {
            this.factuur = res[0];
            var dt = new Date(this.factuur.vervaldatum);
            let dag = dt.getDate();
            let dagStr = dag.toString();
            if (dag < 10)
                dagStr = '0' + dag.toString();
            let maand = dt.getMonth() + 1;
            let maandStr = maand.toString();
            if (maand < 10)
                maandStr = '0' + maand.toString();
            //this.factuur.vervaldatum = dagStr + '/' + maandStr + '/' + dt.getFullYear().toString()
            dt = new Date(this.factuur.datum);
            dag = dt.getDate();
            if (dag < 10)
                dagStr = '0' + dag.toString();
            maand = dt.getMonth() + 1;
            if (maand < 10)
                maandStr = '0' + maand.toString();
            //this.factuur.datum = dagStr + '/' + maandStr + '/' + dt.getFullYear()
        }, err => console.log(err));
    }
    back() {
        this._location.back();
    }
};
FactuurDetailComponent.ctorParameters = () => [
    { type: _factuur_service__WEBPACK_IMPORTED_MODULE_4__["FactuurService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
FactuurDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-factuur-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./factuur-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-detail/factuur-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./factuur-detail.component.scss */ "./src/app/factuur-detail/factuur-detail.component.scss")).default]
    })
], FactuurDetailComponent);



/***/ }),

/***/ "./src/app/factuur-edit/factuur-edit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/factuur-edit/factuur-edit.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3R1dXItZWRpdC9mYWN0dXVyLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/factuur-edit/factuur-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/factuur-edit/factuur-edit.component.ts ***!
  \********************************************************/
/*! exports provided: FactuurEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurEditComponent", function() { return FactuurEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _factuur_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factuur.service */ "./src/app/factuur.service.ts");
/* harmony import */ var _partner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partner.service */ "./src/app/partner.service.ts");






let FactuurEditComponent = class FactuurEditComponent {
    constructor(factuurService, partnerService, _router, route, _location) {
        this.factuurService = factuurService;
        this.partnerService = partnerService;
        this._router = _router;
        this.route = route;
        this._location = _location;
        this.partnersSelect = [];
        this.selectedPartner = null;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy'
        };
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.factuurService.getFactuur(id)
            .subscribe(res => {
            this.factuur = res[0];
            let vervaldatum = "";
            if (this.factuur.vervaldatum) {
                let dag = this.factuur.vervaldatum.substr(8, 2);
                let maand = this.factuur.vervaldatum.substr(5, 2);
                let jaar = this.factuur.vervaldatum.substr(0, 4);
                vervaldatum = dag + "/" + maand + "/" + jaar;
            }
            this.factuur.vervaldatum = vervaldatum;
            let factuurdatum = "";
            if (this.factuur.datum) {
                let dag = this.factuur.datum.substr(8, 2);
                let maand = this.factuur.datum.substr(5, 2);
                let jaar = this.factuur.datum.substr(0, 4);
                factuurdatum = dag + "/" + maand + "/" + jaar;
            }
            this.factuur.datum = factuurdatum;
            this.selectedPartner = this.factuur.fk_partner;
        }, err => console.log(err));
        this.partnerService.getLeveranciers()
            .subscribe(res => {
            for (let element of res) {
                this.partnersSelect = [...this.partnersSelect, { value: element.id, label: element.naam }];
            }
            ;
        }, err => console.log(err));
    }
    getSelectedValue(event) {
        this.selectedPartner = event;
    }
    saveFactuur(factuur) {
        if (this.selectedPartner) {
            factuur.fk_partner = this.selectedPartner;
        }
        let factuurdatum = "";
        if (factuur.datum) {
            let dag = factuur.datum.substr(0, 2);
            let maand = factuur.datum.substr(3, 2);
            let jaar = factuur.datum.substr(6, 4);
            factuurdatum = jaar + '-' + maand + '-' + dag;
        }
        factuur.datum = factuurdatum;
        let vervaldatum = "";
        if (factuur.vervaldatum) {
            let dag = factuur.vervaldatum.substr(0, 2);
            let maand = factuur.vervaldatum.substr(3, 2);
            let jaar = factuur.vervaldatum.substr(6, 4);
            vervaldatum = jaar + '-' + maand + '-' + dag;
        }
        factuur.vervaldatum = vervaldatum;
        if (factuur.bedrag)
            factuur.bedrag = parseFloat(factuur.bedrag.toString().replace(',', '.'));
        else
            factuur.bedrag = 0;
        this.factuurService.saveFactuur(factuur)
            .subscribe(res => this._router.navigate(['/factuurlist']), err => console.log(err));
    }
    back() {
        this._location.back();
    }
};
FactuurEditComponent.ctorParameters = () => [
    { type: _factuur_service__WEBPACK_IMPORTED_MODULE_4__["FactuurService"] },
    { type: _partner_service__WEBPACK_IMPORTED_MODULE_5__["PartnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
FactuurEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-factuur-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./factuur-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-edit/factuur-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./factuur-edit.component.scss */ "./src/app/factuur-edit/factuur-edit.component.scss")).default]
    })
], FactuurEditComponent);



/***/ }),

/***/ "./src/app/factuur-list/factuur-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/factuur-list/factuur-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3R1dXItbGlzdC9mYWN0dXVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/factuur-list/factuur-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/factuur-list/factuur-list.component.ts ***!
  \********************************************************/
/*! exports provided: FactuurListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurListComponent", function() { return FactuurListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _factuur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factuur.service */ "./src/app/factuur.service.ts");



let FactuurListComponent = class FactuurListComponent {
    constructor(factuurService) {
        this.factuurService = factuurService;
        this.open = false;
        //sorting
        this.key = 'id'; //set default
        this.reverse = false;
        //initializing p to one
        this.p = 1;
    }
    ngOnInit() {
        this.factuurService.getFacturen(false)
            .subscribe(res => this.facturen = res, err => console.log(err));
    }
    switch() {
        this.factuurService.getFacturen(!this.open)
            .subscribe(res => this.facturen = res, err => console.log(err));
    }
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
};
FactuurListComponent.ctorParameters = () => [
    { type: _factuur_service__WEBPACK_IMPORTED_MODULE_2__["FactuurService"] }
];
FactuurListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-factuur-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./factuur-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/factuur-list/factuur-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./factuur-list.component.css */ "./src/app/factuur-list/factuur-list.component.css")).default]
    })
], FactuurListComponent);



/***/ }),

/***/ "./src/app/factuur.service.ts":
/*!************************************!*\
  !*** ./src/app/factuur.service.ts ***!
  \************************************/
/*! exports provided: FactuurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurService", function() { return FactuurService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");





let FactuurService = class FactuurService {
    constructor(http) {
        this.http = http;
    }
    getFacturen(open) {
        if (!open)
            return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "facturen");
        else
            return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "openfacturen");
    }
    getVoorschotten(open) {
        if (!open)
            return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "voorschotten");
        else
            return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "openvoorschotten");
    }
    createFactuur(factuur) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "facturen", factuur);
    }
    saveFactuur(factuur) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "facturen", factuur);
    }
    getFactuur(id) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "factuur", { params: httpParams });
    }
};
FactuurService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FactuurService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FactuurService);



/***/ }),

/***/ "./src/app/fileupload/fileupload.component.css":
/*!*****************************************************!*\
  !*** ./src/app/fileupload/fileupload.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGV1cGxvYWQvZmlsZXVwbG9hZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/fileupload/fileupload.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fileupload/fileupload.component.ts ***!
  \****************************************************/
/*! exports provided: FileuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileuploadComponent", function() { return FileuploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm2015/ng-uikit-pro-standard.js");






const URL = 'http://localhost:3000/api/upload';
let FileuploadComponent = class FileuploadComponent {
    constructor(authService) {
        this.authService = authService;
        this.loading = false;
        this.files = [];
        this.uploadInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.humanizeBytes = ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["humanizeBytes"];
    }
    showFiles() {
        let files = '';
        for (let i = 0; i < this.files.length; i++) {
            files += this.files[i].name;
            if (!(this.files.length - 1 === i)) {
                files += ',';
            }
        }
        return files;
    }
    startUpload() {
        const event = {
            type: 'uploadAll',
            url: 'http://localhost:3000/api/upload2',
            method: 'POST',
            data: { foo: 'bar' },
            headers: { 'Authorization': `Bearer ${this.authService.getToken()}` }
        };
        this.files = [];
        this.uploadInput.emit(event);
    }
    cancelUpload(id) {
        this.uploadInput.emit({ type: 'cancel', id: id });
    }
    onUploadOutput(output) {
        if (output.type === 'allAddedToQueue') {
        }
        else if (output.type === 'addedToQueue') {
            this.files.push(output.file); // add file to array when added
        }
        else if (output.type === 'uploading') {
            // update current data in files array for uploading file
            const index = this.files.findIndex(file => file.id === output.file.id);
            this.files[index] = output.file;
        }
        else if (output.type === 'removed') {
            // remove file from array when removed
            this.files = this.files.filter((file) => file !== output.file);
        }
        else if (output.type === 'dragOver') {
            this.dragOver = true;
        }
        else if (output.type === 'dragOut') {
        }
        else if (output.type === 'drop') {
            this.dragOver = false;
        }
        this.showFiles();
    }
    ngOnInit() {
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: URL,
            itemAlias: 'photo',
            authToken: `Bearer ${this.authService.getToken()}` });
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onProgressItem = (progress) => {
            console.log('progress');
            console.log(progress['progress']);
            this.loading = true;
        };
        this.uploader.onCompleteItem = (item, response, status, headers) => {
            console.log('ImageUpload:uploaded:', item, status, response);
            //alert('File uploaded successfully');
            this.loading = false;
        };
    }
};
FileuploadComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
FileuploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fileupload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fileupload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fileupload/fileupload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fileupload.component.css */ "./src/app/fileupload/fileupload.component.css")).default]
    })
], FileuploadComponent);



/***/ }),

/***/ "./src/app/instellingen.service.ts":
/*!*****************************************!*\
  !*** ./src/app/instellingen.service.ts ***!
  \*****************************************/
/*! exports provided: InstellingenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstellingenService", function() { return InstellingenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




let InstellingenService = class InstellingenService {
    constructor(http) {
        this.http = http;
    }
    // public createInstellingen(instellingen):Observable<any>{
    //   return this.http.post<any>(config.api + "instellingen", instellingen);
    // }
    editInstellingen(instellingen) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "instellingen", instellingen);
    }
    getInstellingen() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "instellingen");
    }
};
InstellingenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InstellingenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InstellingenService);



/***/ }),

/***/ "./src/app/instellingen/instellingen.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/instellingen/instellingen.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RlbGxpbmdlbi9pbnN0ZWxsaW5nZW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/instellingen/instellingen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/instellingen/instellingen.component.ts ***!
  \********************************************************/
/*! exports provided: InstellingenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstellingenComponent", function() { return InstellingenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _instellingen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../instellingen.service */ "./src/app/instellingen.service.ts");
/* harmony import */ var _setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../setup.service */ "./src/app/setup.service.ts");






let InstellingenComponent = class InstellingenComponent {
    constructor(instellingenService, setupService, router, _location) {
        this.instellingenService = instellingenService;
        this.setupService = setupService;
        this.router = router;
        this._location = _location;
        this.instellingen = { id: 0, adres: "", periodiciteit: "", voorschotdag: "", kosten: null,
            werkrekeningnummer: "", nieuw: false, overnamedatum: "", overgenomen_werkrekening: null, reserverekeningnummer: "", overgenomen_reserverekening: null };
        this.periodiciteitOptions = [
            { value: 1, label: 'Maandelijks', selected: true },
            { value: 3, label: 'Om de 3 maanden' }
        ];
        this.selectedPeriodiciteit = null;
        this.dagOptions = [];
        this.selectedDag = null;
        this.myDatePickerOptions = {
            dateFormat: 'dd/mm/yyyy'
        };
    }
    ngOnInit() {
        for (var i = 1; i < 31; i++) {
            this.dagOptions.push({ value: i, label: i });
        }
        this.instellingenService.getInstellingen()
            .subscribe(res => {
            console.log(res);
            if (res[0]) {
                this.instellingen = res[0];
                this.selectedDag = parseInt(res[0].dag_voorschot);
                this.selectedPeriodiciteit = parseInt(res[0].periodiciteit_voorschot);
                let overnamedatum = "";
                if (this.instellingen.overnamedatum) {
                    let dag = this.instellingen.overnamedatum.substr(8, 2);
                    let maand = this.instellingen.overnamedatum.substr(5, 2);
                    let jaar = this.instellingen.overnamedatum.substr(0, 4);
                    overnamedatum = dag + "/" + maand + "/" + jaar;
                }
                this.instellingen.overnamedatum = overnamedatum;
                //this.modus = 'edit'
            }
        }, err => console.log(err));
    }
    check() {
        if (this.instellingen.adres && this.selectedPeriodiciteit &&
            this.selectedDag && this.instellingen.reserverekeningnummer &&
            this.instellingen.werkrekeningnummer) {
            if (!this.instellingen.nieuw) {
                if (this.instellingen.overnamedatum)
                    return true;
                else
                    return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
    getSelectedPeriodiciteit(event) {
        this.selectedPeriodiciteit = event;
    }
    getSelectedDag(event) {
        this.selectedDag = event;
    }
    saveInstellingen() {
        if (this.selectedPeriodiciteit)
            this.instellingen.periodiciteit = this.selectedPeriodiciteit;
        if (this.selectedDag)
            this.instellingen.voorschotdag = this.selectedDag;
        if (this.instellingen.overgenomen_werkrekening)
            this.instellingen.overgenomen_werkrekening = parseFloat(this.instellingen.overgenomen_werkrekening.toString().replace(',', '.'));
        else
            this.instellingen.overgenomen_werkrekening = 0;
        if (this.instellingen.overgenomen_reserverekening)
            this.instellingen.overgenomen_reserverekening = parseFloat(this.instellingen.overgenomen_reserverekening.toString().replace(',', '.'));
        else
            this.instellingen.overgenomen_reserverekening = 0;
        let overnamedatum = "";
        if (this.instellingen.overnamedatum) {
            let dag = this.instellingen.overnamedatum.substr(0, 2);
            let maand = this.instellingen.overnamedatum.substr(3, 2);
            let jaar = this.instellingen.overnamedatum.substr(6, 4);
            overnamedatum = jaar + '-' + maand + '-' + dag;
        }
        this.instellingen.overnamedatum = overnamedatum;
        this.instellingenService.editInstellingen(this.instellingen)
            .subscribe(res => {
            this.setupService.updateAndReturn()
                .subscribe(res => {
                if (res.setup == 'true')
                    this.router.navigate(['/dashboard']);
                else
                    this.router.navigate(['/unitlist']);
            }, err => console.log(err));
            //this.router.navigate(['/dashboard'])
        }, err => console.log(err));
    }
    next() {
        if (this.selectedPeriodiciteit)
            this.instellingen.periodiciteit = this.selectedPeriodiciteit;
        if (this.selectedDag)
            this.instellingen.voorschotdag = this.selectedDag;
        if (this.instellingen.overgenomen_werkrekening)
            this.instellingen.overgenomen_werkrekening = parseFloat(this.instellingen.overgenomen_werkrekening.toString().replace(',', '.'));
        else
            this.instellingen.overgenomen_werkrekening = 0;
        if (this.instellingen.overgenomen_reserverekening)
            this.instellingen.overgenomen_reserverekening = parseFloat(this.instellingen.overgenomen_reserverekening.toString().replace(',', '.'));
        else
            this.instellingen.overgenomen_reserverekening = 0;
        this.instellingenService.editInstellingen(this.instellingen)
            .subscribe(res => this.router.navigate(['/unitlist']), err => console.log(err));
    }
    back() {
        this._location.back();
    }
};
InstellingenComponent.ctorParameters = () => [
    { type: _instellingen_service__WEBPACK_IMPORTED_MODULE_4__["InstellingenService"] },
    { type: _setup_service__WEBPACK_IMPORTED_MODULE_5__["SetupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
InstellingenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-instellingen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./instellingen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/instellingen/instellingen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./instellingen.component.scss */ "./src/app/instellingen/instellingen.component.scss")).default]
    })
], InstellingenComponent);



/***/ }),

/***/ "./src/app/kostentypes.service.ts":
/*!****************************************!*\
  !*** ./src/app/kostentypes.service.ts ***!
  \****************************************/
/*! exports provided: KostentypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KostentypesService", function() { return KostentypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




let KostentypesService = class KostentypesService {
    constructor(http) {
        this.http = http;
    }
    getTypes() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "kostentypes");
    }
    getAllTypes() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "alltypes");
    }
};
KostentypesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
KostentypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], KostentypesService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setup.service */ "./src/app/setup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(_auth, _router, setupService) {
        this._auth = _auth;
        this._router = _router;
        this.setupService = setupService;
        this.loginUserData = { email: '', password: '' };
        this.error = false;
    }
    ngOnInit() {
    }
    ngDoCheck() {
        if (this.loginUserData.email === '' || this.loginUserData.password == '')
            this.error = false;
    }
    loginUser() {
        this._auth.loginUser(this.loginUserData)
            .subscribe(res => {
            localStorage.setItem('token', res.token);
            this.setupService.updateAndReturn()
                .subscribe(res => {
                if (res.setup == 'true')
                    this._router.navigate(['/dashboard']);
                else
                    this._router.navigate(['/instellingen']);
            }, err => console.log(err));
        }, err => {
            this.error = true;
            console.log(err);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _setup_service__WEBPACK_IMPORTED_MODULE_3__["SetupService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/partner-create/partner-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/partner-create/partner-create.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRuZXItY3JlYXRlL3BhcnRuZXItY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/partner-create/partner-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/partner-create/partner-create.component.ts ***!
  \************************************************************/
/*! exports provided: PartnerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerCreateComponent", function() { return PartnerCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partner.service */ "./src/app/partner.service.ts");
/* harmony import */ var _uittreksel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uittreksel.service */ "./src/app/uittreksel.service.ts");
/* harmony import */ var _kostentypes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kostentypes.service */ "./src/app/kostentypes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let PartnerCreateComponent = class PartnerCreateComponent {
    constructor(partnerService, uittrekselService, kostentypeService, router, route) {
        this.partnerService = partnerService;
        this.uittrekselService = uittrekselService;
        this.kostentypeService = kostentypeService;
        this.router = router;
        this.route = route;
        this.partner = { id: 0, naam: "", fk_type: 0, rekeningnummer: "" };
        this.selectedType = null;
        this.kostenTypes = [];
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.uittrekselService.getUittreksel(id)
            .subscribe(res => {
            if (res[0].tegenrekening)
                this.partner.rekeningnummer = res[0].tegenrekening;
            this.kostentypeService.getTypes()
                .subscribe(res => {
                res.rows.forEach((element) => {
                    this.kostenTypes = [...this.kostenTypes, { value: element.id, label: element.naam }];
                });
            }, err => console.log(err));
        }, err => console.log(err));
    }
    getSelectedType(event) {
        this.selectedType = event;
    }
    createPartner() {
        if (this.selectedType) {
            this.partner.fk_type = this.selectedType;
        }
        this.partnerService.createPartner(this.partner)
            .subscribe(res => {
            this.partner.id = res.rows[0].id;
            this.uittrekselService.koppelUittreksels(this.partner)
                .subscribe(res => this.router.navigate(['/ongekoppeld']), err => console.log(err));
        }, err => console.log(err));
    }
};
PartnerCreateComponent.ctorParameters = () => [
    { type: _partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"] },
    { type: _uittreksel_service__WEBPACK_IMPORTED_MODULE_3__["UittrekselService"] },
    { type: _kostentypes_service__WEBPACK_IMPORTED_MODULE_4__["KostentypesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
PartnerCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partner-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partner-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partner-create/partner-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partner-create.component.css */ "./src/app/partner-create/partner-create.component.css")).default]
    })
], PartnerCreateComponent);



/***/ }),

/***/ "./src/app/partner.service.ts":
/*!************************************!*\
  !*** ./src/app/partner.service.ts ***!
  \************************************/
/*! exports provided: PartnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerService", function() { return PartnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




let PartnerService = class PartnerService {
    constructor(http) {
        this.http = http;
    }
    createPartner(partner) {
        //console.log(partner);
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "partners", partner);
    }
    getLeveranciers() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "leveranciers");
    }
};
PartnerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PartnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PartnerService);



/***/ }),

/***/ "./src/app/password-request/password-request.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/password-request/password-request.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLXJlcXVlc3QvcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/password-request/password-request.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/password-request/password-request.component.ts ***!
  \****************************************************************/
/*! exports provided: PasswordRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRequestComponent", function() { return PasswordRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



let PasswordRequestComponent = class PasswordRequestComponent {
    constructor(userService) {
        this.userService = userService;
        this.requestData = { email: "" };
        this.error = false;
        this.success = false;
    }
    ngOnInit() { }
    request() {
        this.userService.sendToken(this.requestData.email)
            .subscribe(res => {
            console.log(res);
            this.success = true;
        }, err => {
            console.log(err);
            this.error = true;
        });
    }
    ngDoCheck() {
        if (this.requestData.email == '') {
            this.error = false;
            this.success = false;
        }
    }
};
PasswordRequestComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
PasswordRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/password-request/password-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-request.component.scss */ "./src/app/password-request/password-request.component.scss")).default]
    })
], PasswordRequestComponent);



/***/ }),

/***/ "./src/app/password-reset/password-reset.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/password-reset/password-reset.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/password-reset/password-reset.component.ts":
/*!************************************************************!*\
  !*** ./src/app/password-reset/password-reset.component.ts ***!
  \************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




let PasswordResetComponent = class PasswordResetComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.userId = "";
        this.password = "";
        this.token = "";
        this.success = false;
    }
    ngOnInit() {
        console.log(this.router.url);
        if (this.router && this.router.url)
            this.token = this.router.url.substr(20, 12);
        console.log(this.token);
        this.userService.checkToken(this.token)
            .subscribe(res => {
            if (res.rows[0])
                this.userId = res.rows[0].id;
            else
                console.log('geen geldig resettoken');
        }, err => console.log(err));
    }
    check() {
        if (this.password != '')
            return true;
        else
            return false;
    }
    reset() {
        let passPort = {
            userId: this.userId,
            password: this.password,
            token: this.token
        };
        this.userService.resetPassword(passPort)
            .subscribe(res => {
            console.log(res);
            this.success = true;
        }, err => console.log(err));
    }
};
PasswordResetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
PasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/password-reset/password-reset.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-reset.component.scss */ "./src/app/password-reset/password-reset.component.scss")).default]
    })
], PasswordResetComponent);



/***/ }),

/***/ "./src/app/rapport-balans/rapport-balans.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/rapport-balans/rapport-balans.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnQtYmFsYW5zL3JhcHBvcnQtYmFsYW5zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/rapport-balans/rapport-balans.component.ts":
/*!************************************************************!*\
  !*** ./src/app/rapport-balans/rapport-balans.component.ts ***!
  \************************************************************/
/*! exports provided: RapportBalansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportBalansComponent", function() { return RapportBalansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rapporten_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rapporten.service */ "./src/app/rapporten.service.ts");



let RapportBalansComponent = class RapportBalansComponent {
    constructor(rapportenService) {
        this.rapportenService = rapportenService;
    }
    ngOnInit() {
        this.rapportenService.getBalans()
            .subscribe(res => {
            console.log(res);
            this.balans = res;
        }, err => console.log(err));
    }
};
RapportBalansComponent.ctorParameters = () => [
    { type: _rapporten_service__WEBPACK_IMPORTED_MODULE_2__["RapportenService"] }
];
RapportBalansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rapport-balans',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rapport-balans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rapport-balans/rapport-balans.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rapport-balans.component.scss */ "./src/app/rapport-balans/rapport-balans.component.scss")).default]
    })
], RapportBalansComponent);



/***/ }),

/***/ "./src/app/rapport-individuelerekeningen/rapport-individuelerekeningen.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/rapport-individuelerekeningen/rapport-individuelerekeningen.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnQtaW5kaXZpZHVlbGVyZWtlbmluZ2VuL3JhcHBvcnQtaW5kaXZpZHVlbGVyZWtlbmluZ2VuLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/rapport-individuelerekeningen/rapport-individuelerekeningen.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/rapport-individuelerekeningen/rapport-individuelerekeningen.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RapportIndividuelerekeningenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportIndividuelerekeningenComponent", function() { return RapportIndividuelerekeningenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rapporten_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rapporten.service */ "./src/app/rapporten.service.ts");



let RapportIndividuelerekeningenComponent = class RapportIndividuelerekeningenComponent {
    constructor(rapportenService) {
        this.rapportenService = rapportenService;
        this.rapportWerkrekening = [];
    }
    ngOnInit() {
        this.rapportenService.getWerkrekeningRapport()
            .subscribe(res => {
            this.rapportWerkrekening = res;
        }, err => console.log(err));
    }
};
RapportIndividuelerekeningenComponent.ctorParameters = () => [
    { type: _rapporten_service__WEBPACK_IMPORTED_MODULE_2__["RapportenService"] }
];
RapportIndividuelerekeningenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rapport-individuelerekeningen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rapport-individuelerekeningen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rapport-individuelerekeningen/rapport-individuelerekeningen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rapport-individuelerekeningen.component.scss */ "./src/app/rapport-individuelerekeningen/rapport-individuelerekeningen.component.scss")).default]
    })
], RapportIndividuelerekeningenComponent);



/***/ }),

/***/ "./src/app/rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnQtaW5rb21zdGVudWl0Z2F2ZW4vcmFwcG9ydC1pbmtvbXN0ZW51aXRnYXZlbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RapportInkomstenuitgavenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportInkomstenuitgavenComponent", function() { return RapportInkomstenuitgavenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rapporten_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rapporten.service */ "./src/app/rapporten.service.ts");



let RapportInkomstenuitgavenComponent = class RapportInkomstenuitgavenComponent {
    constructor(rapportenService) {
        this.rapportenService = rapportenService;
        this.rapportInkomsten = [];
        this.rapportUitgaven = [];
    }
    ngOnInit() {
        this.rapportenService.getInkomstenRapport()
            .subscribe(res => {
            this.rapportInkomsten = res;
        }, err => console.log(err));
        this.rapportenService.getUitgavenRapport()
            .subscribe(res => {
            this.rapportUitgaven = res;
        }, err => console.log(err));
    }
};
RapportInkomstenuitgavenComponent.ctorParameters = () => [
    { type: _rapporten_service__WEBPACK_IMPORTED_MODULE_2__["RapportenService"] }
];
RapportInkomstenuitgavenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rapport-inkomstenuitgaven',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rapport-inkomstenuitgaven.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rapport-inkomstenuitgaven.component.scss */ "./src/app/rapport-inkomstenuitgaven/rapport-inkomstenuitgaven.component.scss")).default]
    })
], RapportInkomstenuitgavenComponent);



/***/ }),

/***/ "./src/app/rapporten.service.ts":
/*!**************************************!*\
  !*** ./src/app/rapporten.service.ts ***!
  \**************************************/
/*! exports provided: RapportenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportenService", function() { return RapportenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




let RapportenService = class RapportenService {
    constructor(http) {
        this.http = http;
    }
    getWerkrekeningRapport() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "werkrekeningrapport");
    }
    getInkomstenRapport() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "inkomstenrapport");
    }
    getUitgavenRapport() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "uitgavenrapport");
    }
    getBalans() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "balans");
    }
};
RapportenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RapportenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RapportenService);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _setup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setup.service */ "./src/app/setup.service.ts");





let RegisterComponent = class RegisterComponent {
    constructor(_auth, setupService, _router) {
        this._auth = _auth;
        this.setupService = setupService;
        this._router = _router;
        this.registerUserData = { email: '', password: '' };
        this.error = false;
    }
    ngOnInit() {
    }
    check() {
        if (this.registerUserData.email && this.registerUserData.password)
            return true;
        else
            return false;
    }
    ngDoCheck() {
        if (this.registerUserData.email && this.registerUserData.email == '')
            this.error = false;
    }
    registerUser() {
        this._auth.registerUser(this.registerUserData)
            .subscribe(res => {
            //console.log(res)
            localStorage.setItem('token', res.token);
            this.setupService.set('false');
            this._router.navigate(['/instellingen']);
        }, err => {
            if (err.status === 400)
                this.error = true;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _setup_service__WEBPACK_IMPORTED_MODULE_4__["SetupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/rekening-detail/rekening-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/rekening-detail/rekening-detail.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jla2VuaW5nLWRldGFpbC9yZWtlbmluZy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/rekening-detail/rekening-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/rekening-detail/rekening-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: RekeningDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RekeningDetailComponent", function() { return RekeningDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _uittreksel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uittreksel.service */ "./src/app/uittreksel.service.ts");





let RekeningDetailComponent = class RekeningDetailComponent {
    constructor(uittrekselService, route, router, _location) {
        this.uittrekselService = uittrekselService;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.selectedType = null;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.uittrekselService.getUittreksel(id)
            .subscribe(res => {
            console.log(res[0]);
            this.uittreksel = res[0];
            this.selectedType = res[0].type;
        }, err => console.log(err));
    }
    back() {
        this._location.back();
    }
};
RekeningDetailComponent.ctorParameters = () => [
    { type: _uittreksel_service__WEBPACK_IMPORTED_MODULE_4__["UittrekselService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
RekeningDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rekening-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rekening-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-detail/rekening-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rekening-detail.component.scss */ "./src/app/rekening-detail/rekening-detail.component.scss")).default]
    })
], RekeningDetailComponent);



/***/ }),

/***/ "./src/app/rekening-edit/rekening-edit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/rekening-edit/rekening-edit.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jla2VuaW5nLWVkaXQvcmVrZW5pbmctZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/rekening-edit/rekening-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/rekening-edit/rekening-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: RekeningEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RekeningEditComponent", function() { return RekeningEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _uittreksel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uittreksel.service */ "./src/app/uittreksel.service.ts");
/* harmony import */ var _kostentypes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kostentypes.service */ "./src/app/kostentypes.service.ts");






let RekeningEditComponent = class RekeningEditComponent {
    constructor(uittrekselService, kostentypeService, route, router, _location) {
        this.uittrekselService = uittrekselService;
        this.kostentypeService = kostentypeService;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.kostenTypes = [];
        this.selectedType = null;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.uittrekselService.getUittreksel(id)
            .subscribe(res => {
            this.uittreksel = res[0];
            this.selectedType = res[0].fk_type;
        }, err => console.log(err));
        this.kostentypeService.getAllTypes()
            .subscribe(res => {
            res.rows.forEach((element) => {
                this.kostenTypes = [...this.kostenTypes, { value: element.id, label: element.naam }];
            });
        });
    }
    getSelectedType(event) {
        this.selectedType = event;
    }
    saveUittreksel() {
        if (this.selectedType)
            this.uittreksel.type = this.selectedType;
        this.uittrekselService.editUittreksel(this.uittreksel)
            .subscribe(res => this.router.navigate(['/rekeninglist']), err => console.log(err));
    }
    back() {
        this._location.back();
    }
};
RekeningEditComponent.ctorParameters = () => [
    { type: _uittreksel_service__WEBPACK_IMPORTED_MODULE_4__["UittrekselService"] },
    { type: _kostentypes_service__WEBPACK_IMPORTED_MODULE_5__["KostentypesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
RekeningEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rekening-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rekening-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-edit/rekening-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rekening-edit.component.scss */ "./src/app/rekening-edit/rekening-edit.component.scss")).default]
    })
], RekeningEditComponent);



/***/ }),

/***/ "./src/app/rekening-list/rekening-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/rekening-list/rekening-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputfile {\n\twidth: 0.1px;\n\theight: 0.1px;\n\topacity: 0;\n\toverflow: hidden;\n\tposition: absolute;\n\tz-index: -1;\n}\n\n#uploadbutton[disabled]{\n  width: 0.1px;\n\theight: 0.1px;\n\topacity: 0;\n\toverflow: hidden;\n\tposition: absolute;\n\tz-index: -1;\n}\n\n.custom-file-upload {\n    border: 1px solid #ccc;\n    display: inline-block;\n    padding: 6px 12px;\n    cursor: pointer;\n    background-color: #4285f4 !important;\n    color: #fff;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n    padding: .84rem 2.14rem;\n    font-size: .81rem;\n    transition: .2s ease-in-out;\n    margin: .375rem;\n    border: 0;\n    border-radius: .125rem;\n    cursor: pointer;\n    text-transform: uppercase;\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.custom-file {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n  background-color: #e0e0e0 !important;\n  color: #000;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  padding: .84rem 2.14rem;\n  font-size: .81rem;\n  transition: .2s ease-in-out;\n  margin: .375rem;\n  border: 0;\n  border-radius: .125rem;\n  cursor: pointer;\n  text-transform: uppercase;\n  white-space: normal;\n  word-wrap: break-word;  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVrZW5pbmctbGlzdC9yZWtlbmluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7QUFFQTtFQUNFLFlBQVk7Q0FDYixhQUFhO0NBQ2IsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gscUVBQXFFO0lBQ3JFLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLHFFQUFxRTtFQUNyRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9yZWtlbmluZy1saXN0L3Jla2VuaW5nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dGZpbGUge1xuXHR3aWR0aDogMC4xcHg7XG5cdGhlaWdodDogMC4xcHg7XG5cdG9wYWNpdHk6IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogLTE7XG59XG5cbiN1cGxvYWRidXR0b25bZGlzYWJsZWRde1xuICB3aWR0aDogMC4xcHg7XG5cdGhlaWdodDogMC4xcHg7XG5cdG9wYWNpdHk6IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogLTE7XG59XG5cbi5jdXN0b20tZmlsZS11cGxvYWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICAgIHBhZGRpbmc6IC44NHJlbSAyLjE0cmVtO1xuICAgIGZvbnQtc2l6ZTogLjgxcmVtO1xuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IC4zNzVyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IC4xMjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jdXN0b20tZmlsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICBwYWRkaW5nOiAuODRyZW0gMi4xNHJlbTtcbiAgZm9udC1zaXplOiAuODFyZW07XG4gIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcbiAgbWFyZ2luOiAuMzc1cmVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IC4xMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyAgXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/rekening-list/rekening-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/rekening-list/rekening-list.component.ts ***!
  \**********************************************************/
/*! exports provided: RekeningListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RekeningListComponent", function() { return RekeningListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _uittreksel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uittreksel.service */ "./src/app/uittreksel.service.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







const URL = 'http://localhost:3000/api/upload';
let RekeningListComponent = class RekeningListComponent {
    constructor(uittrekselService, dashboardService, authService, router) {
        this.uittrekselService = uittrekselService;
        this.dashboardService = dashboardService;
        this.authService = authService;
        this.router = router;
        this.totaal = 0;
        this.optionsSelect = [
            { value: 'werk', label: 'Werkrekening', selected: true },
            { value: 'reserve', label: 'Reserverekening' }
        ];
        this.selectedType = 'werk';
        this.uploadLabel = "Bankbestand importeren";
        this.uploadToggle = true;
        //sorting
        this.key = 'datum'; //set default
        this.reverse = true;
        //initializing p to one
        this.p = 1;
    }
    ngOnInit() {
        this.uittrekselService.getUittreksels(this.selectedType)
            .subscribe(res => {
            this.uittreksels = res;
            this.datum = res[0].datum;
        }, err => console.log(err));
        if (this.selectedType == 'werk') {
            this.dashboardService.getWerkrekeningSaldo()
                .subscribe(res => this.totaal = res.sum, err => console.log(err));
        }
        else {
            this.dashboardService.getReserverekeningSaldo()
                .subscribe(res => this.totaal = res.sum, err => console.log(err));
        }
        //fileupload
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL,
            itemAlias: 'photo',
            authToken: `Bearer ${this.authService.getToken()}` });
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item, response, status, headers) => {
            console.log("item uploaded" + response);
            this.uploadLabel = "Bankbestand importeren";
            this.uploadToggle = true;
            this.uittrekselService.getUittreksels(this.selectedType)
                .subscribe(res => this.uittreksels = res, err => console.log(err));
            //this.router.navigate(['/rekeninglist'])
        };
    }
    fileSelected(event) {
        console.log(event);
        if (event.target.value) {
            this.uploadLabel = event.target.value.split("\\").pop();
            this.uploadToggle = false;
        }
    }
    getSelectedValue(event) {
        this.uittrekselService.getUittreksels(event)
            .subscribe(res => {
            this.uittreksels = res;
            this.datum = res[0].datum;
        }, err => console.log(err));
        if (event == 'werk') {
            this.dashboardService.getWerkrekeningSaldo()
                .subscribe(res => this.totaal = res.sum, err => console.log(err));
        }
        else {
            this.dashboardService.getReserverekeningSaldo()
                .subscribe(res => this.totaal = res.sum, err => console.log(err));
        }
    }
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
};
RekeningListComponent.ctorParameters = () => [
    { type: _uittreksel_service__WEBPACK_IMPORTED_MODULE_2__["UittrekselService"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RekeningListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rekening-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rekening-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-list/rekening-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rekening-list.component.css */ "./src/app/rekening-list/rekening-list.component.css")).default]
    })
], RekeningListComponent);



/***/ }),

/***/ "./src/app/rekening-ongekoppeld/rekening-ongekoppeld.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/rekening-ongekoppeld/rekening-ongekoppeld.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jla2VuaW5nLW9uZ2Vrb3BwZWxkL3Jla2VuaW5nLW9uZ2Vrb3BwZWxkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/rekening-ongekoppeld/rekening-ongekoppeld.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/rekening-ongekoppeld/rekening-ongekoppeld.component.ts ***!
  \************************************************************************/
/*! exports provided: RekeningOngekoppeldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RekeningOngekoppeldComponent", function() { return RekeningOngekoppeldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _uittreksel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uittreksel.service */ "./src/app/uittreksel.service.ts");



let RekeningOngekoppeldComponent = class RekeningOngekoppeldComponent {
    constructor(uittrekselService) {
        this.uittrekselService = uittrekselService;
    }
    ngOnInit() {
        this.uittrekselService.getOngekoppeldeUittreksels()
            .subscribe(res => { console.log(res); this.uittreksels = res; }, err => console.log(err));
    }
};
RekeningOngekoppeldComponent.ctorParameters = () => [
    { type: _uittreksel_service__WEBPACK_IMPORTED_MODULE_2__["UittrekselService"] }
];
RekeningOngekoppeldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rekening-ongekoppeld',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rekening-ongekoppeld.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rekening-ongekoppeld/rekening-ongekoppeld.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rekening-ongekoppeld.component.css */ "./src/app/rekening-ongekoppeld/rekening-ongekoppeld.component.css")).default]
    })
], RekeningOngekoppeldComponent);



/***/ }),

/***/ "./src/app/setup.service.ts":
/*!**********************************!*\
  !*** ./src/app/setup.service.ts ***!
  \**********************************/
/*! exports provided: SetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupService", function() { return SetupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




let SetupService = class SetupService {
    constructor(http) {
        this.http = http;
        this.setup = 'false';
    }
    set(setup) {
        this.setup = setup;
        // console.log('set setup')
        // console.log(this.setup)
    }
    update() {
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "setup")
            .subscribe(res => this.setup = res.setup, err => console.log(err));
    }
    updateAndReturn() {
        let ret = this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "setup");
        ret.subscribe(res => this.setup = res.setup, err => console.log(err));
        return ret;
    }
};
SetupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SetupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SetupService);



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptorService);



/***/ }),

/***/ "./src/app/uittreksel.service.ts":
/*!***************************************!*\
  !*** ./src/app/uittreksel.service.ts ***!
  \***************************************/
/*! exports provided: UittrekselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UittrekselService", function() { return UittrekselService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");





let UittrekselService = class UittrekselService {
    constructor(http) {
        this.http = http;
    }
    getUittreksels(type) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('type', type);
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "uittreksels", { params: httpParams });
    }
    getOngekoppeldeUittreksels() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "ongekoppelde_uittreksels");
    }
    getUittreksel(id) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "uittreksel", { params: httpParams });
    }
    koppelUittreksels(partner) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "uittreksels", partner);
    }
    editUittreksel(uittreksel) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "uittreksel", uittreksel);
    }
};
UittrekselService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UittrekselService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UittrekselService);



/***/ }),

/***/ "./src/app/unit-create/unit-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/unit-create/unit-create.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXQtY3JlYXRlL3VuaXQtY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/unit-create/unit-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/unit-create/unit-create.component.ts ***!
  \******************************************************/
/*! exports provided: UnitCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitCreateComponent", function() { return UnitCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit.service */ "./src/app/unit.service.ts");





let UnitCreateComponent = class UnitCreateComponent {
    constructor(unitService, _router, _location) {
        this.unitService = unitService;
        this._router = _router;
        this._location = _location;
        this.unit = { id: 0, naam: "", duizendste: null, eigenaar: "", eigenaarid: 0 };
    }
    ngOnInit() {
    }
    createUnit() {
        this.unit.duizendste = parseFloat(this.unit.duizendste.toString().replace(',', '.'));
        this.unitService.createUnit(this.unit)
            .subscribe(res => {
            console.log(res);
            this._router.navigate(['/unitlist']);
        }, err => console.log(err));
        this.unit = { id: 0, naam: "", duizendste: 0, eigenaar: "", eigenaarid: 0 };
    }
    back() {
        this._location.back();
    }
};
UnitCreateComponent.ctorParameters = () => [
    { type: _unit_service__WEBPACK_IMPORTED_MODULE_4__["UnitService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
UnitCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unit-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/unit-create/unit-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unit-create.component.css */ "./src/app/unit-create/unit-create.component.css")).default]
    })
], UnitCreateComponent);



/***/ }),

/***/ "./src/app/unit-edit/unit-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/unit-edit/unit-edit.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXQtZWRpdC91bml0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/unit-edit/unit-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/unit-edit/unit-edit.component.ts ***!
  \**************************************************/
/*! exports provided: UnitEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitEditComponent", function() { return UnitEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit.service */ "./src/app/unit.service.ts");
/* harmony import */ var _setup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../setup.service */ "./src/app/setup.service.ts");







let UnitEditComponent = class UnitEditComponent {
    constructor(unitService, setupService, _router, route, _location) {
        this.unitService = unitService;
        this.setupService = setupService;
        this._router = _router;
        this.route = route;
        this._location = _location;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.unitService.getUnit(id)
            .subscribe(res => {
            console.log(res);
            this.unit = res;
        }, err => console.log(err));
    }
    saveUnit() {
        this.unit.duizendste = parseFloat(this.unit.duizendste.toString().replace(',', '.'));
        this.unitService.saveUnit(this.unit)
            .subscribe(res => {
            this.setupService.update();
            this._router.navigate(['/unitlist']);
        }, err => console.log(err));
        this.unit = { id: 0, naam: "", duizendste: 0, eigenaar: "", eigenaarid: 0 };
    }
    back() {
        this._location.back();
    }
};
UnitEditComponent.ctorParameters = () => [
    { type: _unit_service__WEBPACK_IMPORTED_MODULE_4__["UnitService"] },
    { type: _setup_service__WEBPACK_IMPORTED_MODULE_5__["SetupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
UnitEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unit-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/unit-edit/unit-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unit-edit.component.css */ "./src/app/unit-edit/unit-edit.component.css")).default]
    })
], UnitEditComponent);



/***/ }),

/***/ "./src/app/unit-list/unit-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/unit-list/unit-list.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXQtbGlzdC91bml0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/unit-list/unit-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/unit-list/unit-list.component.ts ***!
  \**************************************************/
/*! exports provided: UnitListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitListComponent", function() { return UnitListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _unit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unit.service */ "./src/app/unit.service.ts");
/* harmony import */ var _instellingen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../instellingen.service */ "./src/app/instellingen.service.ts");
/* harmony import */ var _eigenaar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eigenaar.service */ "./src/app/eigenaar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _setup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../setup.service */ "./src/app/setup.service.ts");







let UnitListComponent = class UnitListComponent {
    constructor(unitService, instellingenService, eigenaarService, setupService, _router) {
        this.unitService = unitService;
        this.instellingenService = instellingenService;
        this.eigenaarService = eigenaarService;
        this.setupService = setupService;
        this._router = _router;
        this.complete = 0;
        this.werkrekeningsaldo = 0;
        this.reserverekeningsaldo = 0;
    }
    ngOnInit() {
        this.unitService.getUnits()
            .subscribe(res => {
            console.log(res);
            this.units = res;
        }, err => console.log(err));
        this.eigenaarService.getEigenaars()
            .subscribe(res => {
            this.eigenaars = res;
            res.forEach((element) => {
                if (element.overgenomen_werkrekening)
                    this.werkrekeningsaldo = this.werkrekeningsaldo + parseFloat(element.overgenomen_werkrekening.toString());
                if (element.overgenomen_reserverekening)
                    this.reserverekeningsaldo = this.reserverekeningsaldo + parseFloat(element.overgenomen_reserverekening.toString());
            });
        }, err => console.log(err));
        this.instellingenService.getInstellingen()
            .subscribe(res => this.instellingen = res[0]);
    }
    checkWerkrekening() {
        if (this.werkrekeningsaldo == this.instellingen.overgenomen_werkrekening)
            return true;
        else
            return false;
    }
    checkReserverekening() {
        if (this.reserverekeningsaldo == this.instellingen.overgenomen_reserverekening)
            return true;
        else
            return false;
    }
    ngDoCheck() {
        this.complete = 0;
        if (this.units) {
            this.units.forEach((element) => {
                this.complete = this.complete + parseFloat(element.duizendste.toString());
            });
        }
    }
};
UnitListComponent.ctorParameters = () => [
    { type: _unit_service__WEBPACK_IMPORTED_MODULE_2__["UnitService"] },
    { type: _instellingen_service__WEBPACK_IMPORTED_MODULE_3__["InstellingenService"] },
    { type: _eigenaar_service__WEBPACK_IMPORTED_MODULE_4__["EigenaarService"] },
    { type: _setup_service__WEBPACK_IMPORTED_MODULE_6__["SetupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UnitListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unit-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/unit-list/unit-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unit-list.component.css */ "./src/app/unit-list/unit-list.component.css")).default]
    })
], UnitListComponent);



/***/ }),

/***/ "./src/app/unit.service.ts":
/*!*********************************!*\
  !*** ./src/app/unit.service.ts ***!
  \*********************************/
/*! exports provided: UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");





let UnitService = class UnitService {
    constructor(http) {
        this.http = http;
    }
    getUnits() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "units");
    }
    getUnit(id) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "unit", { params: httpParams });
    }
    createUnit(unit) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "units", unit);
    }
    saveUnit(unit) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "units", unit);
    }
};
UnitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UnitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UnitService);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    checkToken(token) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('reset', token);
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "userbytoken", { params: httpParams });
    }
    sendToken(email) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', email);
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "resettoken", { params: httpParams });
    }
    resetPassword(passPort) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].api + "resetpassword", passPort);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/voorschot-list/voorschot-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/voorschot-list/voorschot-list.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zvb3JzY2hvdC1saXN0L3Zvb3JzY2hvdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/voorschot-list/voorschot-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/voorschot-list/voorschot-list.component.ts ***!
  \************************************************************/
/*! exports provided: VoorschotListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoorschotListComponent", function() { return VoorschotListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _factuur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factuur.service */ "./src/app/factuur.service.ts");



let VoorschotListComponent = class VoorschotListComponent {
    constructor(factuurService) {
        this.factuurService = factuurService;
        this.open = false;
        //sorting
        this.key = 'id'; //set default
        this.reverse = false;
        //initializing p to one
        this.p = 1;
    }
    ngOnInit() {
        this.factuurService.getVoorschotten(false)
            .subscribe(res => { console.log(res); this.facturen = res; }, err => console.log(err));
    }
    switch() {
        this.factuurService.getVoorschotten(!this.open)
            .subscribe(res => this.facturen = res, err => console.log(err));
    }
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
};
VoorschotListComponent.ctorParameters = () => [
    { type: _factuur_service__WEBPACK_IMPORTED_MODULE_2__["FactuurService"] }
];
VoorschotListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-voorschot-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voorschot-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voorschot-list/voorschot-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voorschot-list.component.css */ "./src/app/voorschot-list/voorschot-list.component.css")).default]
    })
], VoorschotListComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/janblonde/angularauth/ngApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map