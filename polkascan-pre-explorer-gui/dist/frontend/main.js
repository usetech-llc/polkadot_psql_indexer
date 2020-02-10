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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_block_list_block_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/block-list/block-list.component */ "./src/app/pages/block-list/block-list.component.ts");
/* harmony import */ var _pages_block_detail_block_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/block-detail/block-detail.component */ "./src/app/pages/block-detail/block-detail.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_extrinsic_detail_extrinsic_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/extrinsic-detail/extrinsic-detail.component */ "./src/app/pages/extrinsic-detail/extrinsic-detail.component.ts");
/* harmony import */ var _pages_harvester_admin_harvester_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/harvester-admin/harvester-admin.component */ "./src/app/pages/harvester-admin/harvester-admin.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _pages_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/event-detail/event-detail.component */ "./src/app/pages/event-detail/event-detail.component.ts");
/* harmony import */ var _pages_extrinsic_list_extrinsic_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/extrinsic-list/extrinsic-list.component */ "./src/app/pages/extrinsic-list/extrinsic-list.component.ts");
/* harmony import */ var _pages_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/event-list/event-list.component */ "./src/app/pages/event-list/event-list.component.ts");
/* harmony import */ var _pages_runtime_list_runtime_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/runtime-list/runtime-list.component */ "./src/app/pages/runtime-list/runtime-list.component.ts");
/* harmony import */ var _pages_runtime_detail_runtime_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/runtime-detail/runtime-detail.component */ "./src/app/pages/runtime-detail/runtime-detail.component.ts");
/* harmony import */ var _pages_runtime_module_detail_runtime_module_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/runtime-module-detail/runtime-module-detail.component */ "./src/app/pages/runtime-module-detail/runtime-module-detail.component.ts");
/* harmony import */ var _pages_runtime_call_detail_runtime_call_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/runtime-call-detail/runtime-call-detail.component */ "./src/app/pages/runtime-call-detail/runtime-call-detail.component.ts");
/* harmony import */ var _pages_runtime_event_detail_runtime_event_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/runtime-event-detail/runtime-event-detail.component */ "./src/app/pages/runtime-event-detail/runtime-event-detail.component.ts");
/* harmony import */ var _pages_runtime_storage_detail_runtime_storage_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/runtime-storage-detail/runtime-storage-detail.component */ "./src/app/pages/runtime-storage-detail/runtime-storage-detail.component.ts");
/* harmony import */ var _pages_account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/account-detail/account-detail.component */ "./src/app/pages/account-detail/account-detail.component.ts");
/* harmony import */ var _pages_contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/contract-detail/contract-detail.component */ "./src/app/pages/contract-detail/contract-detail.component.ts");
/* harmony import */ var _pages_contract_list_contract_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/contract-list/contract-list.component */ "./src/app/pages/contract-list/contract-list.component.ts");
/* harmony import */ var _pages_account_list_account_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/account-list/account-list.component */ "./src/app/pages/account-list/account-list.component.ts");
/* harmony import */ var _pages_session_list_session_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/session-list/session-list.component */ "./src/app/pages/session-list/session-list.component.ts");
/* harmony import */ var _pages_session_detail_session_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/session-detail/session-detail.component */ "./src/app/pages/session-detail/session-detail.component.ts");
/* harmony import */ var _pages_democracy_proposal_list_democracy_proposal_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/democracy-proposal-list/democracy-proposal-list.component */ "./src/app/pages/democracy-proposal-list/democracy-proposal-list.component.ts");
/* harmony import */ var _pages_democracy_proposal_detail_democracy_proposal_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/democracy-proposal-detail/democracy-proposal-detail.component */ "./src/app/pages/democracy-proposal-detail/democracy-proposal-detail.component.ts");
/* harmony import */ var _pages_balances_transfer_list_balances_transfer_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/balances-transfer-list/balances-transfer-list.component */ "./src/app/pages/balances-transfer-list/balances-transfer-list.component.ts");
/* harmony import */ var _pages_balances_transfer_detail_balances_transfer_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/balances-transfer-detail/balances-transfer-detail.component */ "./src/app/pages/balances-transfer-detail/balances-transfer-detail.component.ts");
/* harmony import */ var _pages_log_list_log_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/log-list/log-list.component */ "./src/app/pages/log-list/log-list.component.ts");
/* harmony import */ var _pages_log_detail_log_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/log-detail/log-detail.component */ "./src/app/pages/log-detail/log-detail.component.ts");
/* harmony import */ var _pages_democracy_referendum_list_democracy_referendum_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/democracy-referendum-list/democracy-referendum-list.component */ "./src/app/pages/democracy-referendum-list/democracy-referendum-list.component.ts");
/* harmony import */ var _pages_democracy_referendum_detail_democracy_referendum_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/democracy-referendum-detail/democracy-referendum-detail.component */ "./src/app/pages/democracy-referendum-detail/democracy-referendum-detail.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_account_index_list_account_index_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/account-index-list/account-index-list.component */ "./src/app/pages/account-index-list/account-index-list.component.ts");
/* harmony import */ var _pages_account_index_detail_account_index_detail_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/account-index-detail/account-index-detail.component */ "./src/app/pages/account-index-detail/account-index-detail.component.ts");
/* harmony import */ var _pages_runtime_constant_detail_runtime_constant_detail_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/runtime-constant-detail/runtime-constant-detail.component */ "./src/app/pages/runtime-constant-detail/runtime-constant-detail.component.ts");
/* harmony import */ var _pages_session_validator_detail_session_validator_detail_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/session-validator-detail/session-validator-detail.component */ "./src/app/pages/session-validator-detail/session-validator-detail.component.ts");
/* harmony import */ var _pages_session_validator_list_session_validator_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/session-validator-list/session-validator-list.component */ "./src/app/pages/session-validator-list/session-validator-list.component.ts");
/* harmony import */ var _pages_session_nominator_list_session_nominator_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/session-nominator-list/session-nominator-list.component */ "./src/app/pages/session-nominator-list/session-nominator-list.component.ts");
/* harmony import */ var _pages_runtime_module_list_runtime_module_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/runtime-module-list/runtime-module-list.component */ "./src/app/pages/runtime-module-list/runtime-module-list.component.ts");
/* harmony import */ var _pages_runtime_type_list_runtime_type_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/runtime-type-list/runtime-type-list.component */ "./src/app/pages/runtime-type-list/runtime-type-list.component.ts");
/* harmony import */ var _pages_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/transaction-list/transaction-list.component */ "./src/app/pages/transaction-list/transaction-list.component.ts");
/* harmony import */ var _pages_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/transaction-detail/transaction-detail.component */ "./src/app/pages/transaction-detail/transaction-detail.component.ts");
/* harmony import */ var _pages_inherent_list_inherent_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/inherent-list/inherent-list.component */ "./src/app/pages/inherent-list/inherent-list.component.ts");
/* harmony import */ var _pages_inherent_detail_inherent_detail_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/inherent-detail/inherent-detail.component */ "./src/app/pages/inherent-detail/inherent-detail.component.ts");
/* harmony import */ var _pages_analytics_search_analytics_search_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/analytics-search/analytics-search.component */ "./src/app/pages/analytics-search/analytics-search.component.ts");
/* harmony import */ var _pages_council_motion_list_council_motion_list_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/council-motion-list/council-motion-list.component */ "./src/app/pages/council-motion-list/council-motion-list.component.ts");
/* harmony import */ var _pages_council_motion_detail_council_motion_detail_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/council-motion-detail/council-motion-detail.component */ "./src/app/pages/council-motion-detail/council-motion-detail.component.ts");
/* harmony import */ var _pages_tech_comm_proposal_list_tech_comm_proposal_list_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/tech-comm-proposal-list/tech-comm-proposal-list.component */ "./src/app/pages/tech-comm-proposal-list/tech-comm-proposal-list.component.ts");
/* harmony import */ var _pages_tech_comm_proposal_detail_tech_comm_proposal_detail_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component */ "./src/app/pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component.ts");
/* harmony import */ var _pages_treasury_proposal_list_treasury_proposal_list_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/treasury-proposal-list/treasury-proposal-list.component */ "./src/app/pages/treasury-proposal-list/treasury-proposal-list.component.ts");
/* harmony import */ var _pages_treasury_proposal_detail_treasury_proposal_detail_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/treasury-proposal-detail/treasury-proposal-detail.component */ "./src/app/pages/treasury-proposal-detail/treasury-proposal-detail.component.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * app-routing.module.ts
 */




















































var routes = [
    { path: '', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'block', component: _pages_block_list_block_list_component__WEBPACK_IMPORTED_MODULE_3__["BlockListComponent"] },
    { path: 'block/:id', component: _pages_block_detail_block_detail_component__WEBPACK_IMPORTED_MODULE_4__["BlockDetailComponent"] },
    { path: 'transaction', component: _pages_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_41__["TransactionListComponent"] },
    { path: 'transaction/:id', component: _pages_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_42__["TransactionDetailComponent"] },
    { path: 'inherent', component: _pages_inherent_list_inherent_list_component__WEBPACK_IMPORTED_MODULE_43__["InherentListComponent"] },
    { path: 'inherent/:id', component: _pages_inherent_detail_inherent_detail_component__WEBPACK_IMPORTED_MODULE_44__["InherentDetailComponent"] },
    { path: 'extrinsic', component: _pages_extrinsic_list_extrinsic_list_component__WEBPACK_IMPORTED_MODULE_10__["ExtrinsicListComponent"] },
    { path: 'extrinsic/:id', component: _pages_extrinsic_detail_extrinsic_detail_component__WEBPACK_IMPORTED_MODULE_6__["ExtrinsicDetailComponent"] },
    { path: 'event', component: _pages_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_11__["EventListComponent"] },
    { path: 'event/:id', component: _pages_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_9__["EventDetailComponent"] },
    { path: 'log', component: _pages_log_list_log_list_component__WEBPACK_IMPORTED_MODULE_28__["LogListComponent"] },
    { path: 'log/:id', component: _pages_log_detail_log_detail_component__WEBPACK_IMPORTED_MODULE_29__["LogDetailComponent"] },
    { path: 'runtime', component: _pages_runtime_list_runtime_list_component__WEBPACK_IMPORTED_MODULE_12__["RuntimeListComponent"] },
    { path: 'runtime/:id', component: _pages_runtime_detail_runtime_detail_component__WEBPACK_IMPORTED_MODULE_13__["RuntimeDetailComponent"] },
    { path: 'runtime-module', component: _pages_runtime_module_list_runtime_module_list_component__WEBPACK_IMPORTED_MODULE_39__["RuntimeModuleListComponent"] },
    { path: 'runtime-module/:id', component: _pages_runtime_module_detail_runtime_module_detail_component__WEBPACK_IMPORTED_MODULE_14__["RuntimeModuleDetailComponent"] },
    { path: 'runtime-call/:id', component: _pages_runtime_call_detail_runtime_call_detail_component__WEBPACK_IMPORTED_MODULE_15__["RuntimeCallDetailComponent"] },
    { path: 'runtime-event/:id', component: _pages_runtime_event_detail_runtime_event_detail_component__WEBPACK_IMPORTED_MODULE_16__["RuntimeEventDetailComponent"] },
    { path: 'runtime-storage/:id', component: _pages_runtime_storage_detail_runtime_storage_detail_component__WEBPACK_IMPORTED_MODULE_17__["RuntimeStorageDetailComponent"] },
    { path: 'runtime-constant/:id', component: _pages_runtime_constant_detail_runtime_constant_detail_component__WEBPACK_IMPORTED_MODULE_35__["RuntimeConstantDetailComponent"] },
    { path: 'runtime-type', component: _pages_runtime_type_list_runtime_type_list_component__WEBPACK_IMPORTED_MODULE_40__["RuntimeTypeListComponent"] },
    { path: 'account', component: _pages_account_list_account_list_component__WEBPACK_IMPORTED_MODULE_21__["AccountListComponent"] },
    { path: 'account/:id', component: _pages_account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_18__["AccountDetailComponent"] },
    { path: 'indices/account', component: _pages_account_index_list_account_index_list_component__WEBPACK_IMPORTED_MODULE_33__["AccountIndexListComponent"] },
    { path: 'indices/account/:id', component: _pages_account_index_detail_account_index_detail_component__WEBPACK_IMPORTED_MODULE_34__["AccountIndexDetailComponent"] },
    { path: 'contracts/contract', component: _pages_contract_list_contract_list_component__WEBPACK_IMPORTED_MODULE_20__["ContractListComponent"] },
    { path: 'contracts/contract/:id', component: _pages_contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_19__["ContractDetailComponent"] },
    { path: 'session/session', component: _pages_session_list_session_list_component__WEBPACK_IMPORTED_MODULE_22__["SessionListComponent"] },
    { path: 'session/session/:id', component: _pages_session_detail_session_detail_component__WEBPACK_IMPORTED_MODULE_23__["SessionDetailComponent"] },
    { path: 'session/validator/:id', component: _pages_session_validator_detail_session_validator_detail_component__WEBPACK_IMPORTED_MODULE_36__["SessionValidatorDetailComponent"] },
    { path: 'session/validator', component: _pages_session_validator_list_session_validator_list_component__WEBPACK_IMPORTED_MODULE_37__["SessionValidatorListComponent"] },
    { path: 'session/nominator', component: _pages_session_nominator_list_session_nominator_list_component__WEBPACK_IMPORTED_MODULE_38__["SessionNominatorListComponent"] },
    { path: 'democracy/proposal', component: _pages_democracy_proposal_list_democracy_proposal_list_component__WEBPACK_IMPORTED_MODULE_24__["DemocracyProposalListComponent"] },
    { path: 'democracy/proposal/:id', component: _pages_democracy_proposal_detail_democracy_proposal_detail_component__WEBPACK_IMPORTED_MODULE_25__["DemocracyProposalDetailComponent"] },
    { path: 'democracy/referendum', component: _pages_democracy_referendum_list_democracy_referendum_list_component__WEBPACK_IMPORTED_MODULE_30__["DemocracyReferendumListComponent"] },
    { path: 'democracy/referendum/:id', component: _pages_democracy_referendum_detail_democracy_referendum_detail_component__WEBPACK_IMPORTED_MODULE_31__["DemocracyReferendumDetailComponent"] },
    { path: 'council/motion', component: _pages_council_motion_list_council_motion_list_component__WEBPACK_IMPORTED_MODULE_46__["CouncilMotionListComponent"] },
    { path: 'council/motion/:id', component: _pages_council_motion_detail_council_motion_detail_component__WEBPACK_IMPORTED_MODULE_47__["CouncilMotionDetailComponent"] },
    { path: 'techcomm/proposal', component: _pages_tech_comm_proposal_list_tech_comm_proposal_list_component__WEBPACK_IMPORTED_MODULE_48__["TechCommProposalListComponent"] },
    { path: 'techcomm/proposal/:id', component: _pages_tech_comm_proposal_detail_tech_comm_proposal_detail_component__WEBPACK_IMPORTED_MODULE_49__["TechCommProposalDetailComponent"] },
    { path: 'treasury/proposal', component: _pages_treasury_proposal_list_treasury_proposal_list_component__WEBPACK_IMPORTED_MODULE_50__["TreasuryProposalListComponent"] },
    { path: 'treasury/proposal/:id', component: _pages_treasury_proposal_detail_treasury_proposal_detail_component__WEBPACK_IMPORTED_MODULE_51__["TreasuryProposalDetailComponent"] },
    { path: 'balances/transfer', component: _pages_balances_transfer_list_balances_transfer_list_component__WEBPACK_IMPORTED_MODULE_26__["BalancesTransferListComponent"] },
    { path: 'balances/transfer/:id', component: _pages_balances_transfer_detail_balances_transfer_detail_component__WEBPACK_IMPORTED_MODULE_27__["BalancesTransferDetailComponent"] },
    { path: 'analytics/search', component: _pages_analytics_search_analytics_search_component__WEBPACK_IMPORTED_MODULE_45__["AnalyticsSearchComponent"] },
    { path: 'analytics/search/:query', component: _pages_analytics_search_analytics_search_component__WEBPACK_IMPORTED_MODULE_45__["AnalyticsSearchComponent"] },
    { path: 'settings', component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"] },
    { path: 'harvester/admin', component: _pages_harvester_admin_harvester_admin_component__WEBPACK_IMPORTED_MODULE_7__["HarvesterAdminComponent"] },
    // Redirect old URLs
    { path: 'system/block/:id', redirectTo: '/block/:id' },
    { path: 'system/block', redirectTo: '/block' },
    { path: 'system/extrinsic/:id', redirectTo: '/extrinsic/:id' },
    { path: 'system/extrinsic', redirectTo: '/extrinsic' },
    { path: 'system/event/:id', redirectTo: '/event/:id' },
    { path: 'system/event', redirectTo: '/event' },
    { path: 'system/runtime/:id', redirectTo: '/runtime/:id' },
    { path: 'system/runtime', redirectTo: '/runtime' },
    { path: 'system/runtime-module/:id', redirectTo: '/runtime-module/:id' },
    { path: 'system/runtime-call/:id', redirectTo: '/runtime-call/:id' },
    { path: 'system/runtime-event/:id', redirectTo: '/runtime-event/:id' },
    { path: 'system/runtime-storage/:id', redirectTo: '/runtime-storage/:id' },
    { path: 'system/account/:id', redirectTo: '/account/:id' },
    { path: 'module/account/:id', redirectTo: '/account/:id', },
    { path: 'system/account', redirectTo: '/account' },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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

module.exports = "<div [ngClass]=\"{\r\n    'network-alexander': environment.networkName == 'Alexander',\r\n    'network-edgeware': environment.networkName == 'Edgeware',\r\n    'network-robonomics': environment.networkName == 'Robonomics',\r\n    'network-joystream': environment.networkName == 'Joystream',\r\n    'network-kusama': environment.networkName == 'Kusama'\r\n\r\n  }\">\r\n  <!-- START NAV -->\r\n  <nav class=\"navbar is-black network-alexander\" role=\"navigation\" aria-label=\"main navigation\" >\r\n      <div class=\"container\">\r\n          <div class=\"navbar-brand\">\r\n              <a class=\"navbar-item brand-text\" routerLink=\"/\">\r\n                <img src=\"assets/logo.png\" width=\"120\">\r\n              </a>\r\n              <a role=\"button\" class=\"navbar-burger burger\" data-target=\"navMenu\" [ngClass]=\"{'is-active': showNavigation}\" (click)=\"toggleNavigation()\">\r\n                  <span></span>\r\n                  <span></span>\r\n                  <span></span>\r\n              </a>\r\n          </div>\r\n          <div id=\"navMenu\" class=\"navbar-menu\" [ngClass]=\"{'is-active': showNavigation}\">\r\n              <div class=\"navbar-start\">\r\n                  <div class=\"navbar-item has-dropdown\" [ngClass]=\"{'is-hoverable': showSubmenus}\">\r\n                    <a class=\"navbar-link\">\r\n                      {{ 'NavBar.Chain' | translate }}\r\n                    </a>\r\n                    <div class=\"navbar-dropdown\" (click)=\"toggleSubmenus()\">\r\n                      <a class=\"navbar-item\" routerLink=\"/block\">\r\n                        {{ 'NavBar.item_Blocks' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/transaction\">\r\n                        {{ 'NavBar.item_Transactions' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/inherent\">\r\n                        {{ 'NavBar.item_Inherents' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/event\">\r\n                        {{ 'NavBar.item_Events' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/log\">\r\n                        {{ 'NavBar.item_Logs' | translate }}\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"navbar-item has-dropdown\" [ngClass]=\"{'is-hoverable': showSubmenus}\">\r\n                    <a class=\"navbar-link\">\r\n                      {{ 'NavBar.Accounts' | translate }}\r\n                    </a>\r\n                    <div class=\"navbar-dropdown\" (click)=\"toggleSubmenus()\">\r\n                      <a class=\"navbar-item\" routerLink=\"/account\">\r\n                        {{ 'NavBar.item_Accounts' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/indices/account\">\r\n                        {{ 'NavBar.item_Indices' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/balances/transfer\">\r\n                        {{ 'NavBar.item_Transfers' | translate }}\r\n                      </a>\r\n                      <hr class=\"navbar-divider\">\r\n                      <a class=\"navbar-item\" routerLink=\"/contracts/contract\">\r\n                        {{ 'NavBar.item_Contracts' | translate }}\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"navbar-item has-dropdown\" [ngClass]=\"{'is-hoverable': showSubmenus}\">\r\n                    <a class=\"navbar-link\">\r\n                      {{ 'NavBar.Staking' | translate }}\r\n                    </a>\r\n                    <div class=\"navbar-dropdown\" (click)=\"toggleSubmenus()\">\r\n                       <a class=\"navbar-item\" routerLink=\"/session/session\">\r\n                        {{ 'NavBar.item_Sessions' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/session/validator\">\r\n                        {{ 'NavBar.item_Validators' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/session/nominator\">\r\n                        {{ 'NavBar.item_Nominators' | translate }}\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"navbar-item has-dropdown\" [ngClass]=\"{'is-hoverable': showSubmenus}\">\r\n                    <a class=\"navbar-link\">\r\n                      {{ 'NavBar.Governance' | translate }}\r\n                    </a>\r\n                    <div class=\"navbar-dropdown\" (click)=\"toggleSubmenus()\">\r\n                       <a class=\"navbar-item\" routerLink=\"/democracy/proposal\">\r\n                        {{ 'NavBar.item_Proposals' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/democracy/referendum\">\r\n                        {{ 'NavBar.item_Referenda' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/council/motion\">\r\n                        {{ 'NavBar.item_CouncilMotions' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/techcomm/proposal\">\r\n                        {{ 'NavBar.item_TechCommProposals' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/treasury/proposal\">\r\n                        {{ 'NavBar.item_TreasuryProposals' | translate }}\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"navbar-item has-dropdown\" [ngClass]=\"{'is-hoverable': showSubmenus}\">\r\n                    <a class=\"navbar-link\">\r\n                        {{ 'NavBar.Analytics' | translate }}\r\n                    </a>\r\n                    <div class=\"navbar-dropdown\" (click)=\"toggleSubmenus()\">\r\n                       <a class=\"navbar-item\" routerLink=\"/analytics/search\">\r\n                           {{ 'NavBar.item_Search' | translate }}\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"navbar-item has-dropdown\" [ngClass]=\"{'is-hoverable': showSubmenus}\">\r\n                    <a class=\"navbar-link\">\r\n                        {{ 'NavBar.Runtime' | translate }}\r\n                    </a>\r\n                    <div class=\"navbar-dropdown\" (click)=\"toggleSubmenus()\">\r\n                      <a class=\"navbar-item\" routerLink=\"/runtime-module\">\r\n                        {{ 'NavBar.item_Modules' | translate }}\r\n                      </a>\r\n                      <a class=\"navbar-item\" routerLink=\"/runtime-type\">\r\n                        {{ 'NavBar.item_Types' | translate }}\r\n                      </a>\r\n                      <hr class=\"navbar-divider\">\r\n                      <a class=\"navbar-item\" routerLink=\"/runtime\">\r\n                        {{ 'NavBar.item_Upgrade_history' | translate }}\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"navbar-end\">\r\n                <div class=\"navbar-item has-dropdown\" [ngClass]=\"{'is-hoverable': showSubmenus}\">\r\n                    <a class=\"navbar-link\">\r\n                      <i class=\"fa fa-language language-icon\" aria-hidden=\"true\"></i> {{ langsTitle(selectedLanguage) }}\r\n                    </a>\r\n                    <div class=\"navbar-dropdown\" (click)=\"toggleSubmenus()\">\r\n                      <ul *ngFor=\"let lang of langs\">\r\n                        <li>\r\n                          <a class=\"navbar-item\" (click)=\"selectedLanguage = lang; translate.use(lang)\">\r\n                            {{ langsTitle(lang) }}\r\n                          </a>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n\r\n          </div>\r\n        </div>\r\n  </nav>\r\n  <!-- END NAV -->\r\n  <div class=\"container\" >\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".language-icon {\n  padding-right: 10px;\n  padding-top: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSjpcXHByb2plY3RzXFxwb2xrYXNjYW4tcHJlLWV4cGxvcmVyLWd1aS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmd1YWdlLWljb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * app.component.ts
 */





var AppComponent = /** @class */ (function () {
    function AppComponent(router, translate) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.title = 'Polkascan';
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.showNavigation = false;
        this.showSubmenus = true;
        this.langs = ['en', 'de', 'fr', 'it', 'es', 'zh', 'ja', 'ko', 'ru', 'uk'];
        this.selectedLanguage = 'en';
        router.events.subscribe(function (val) {
            _this.showNavigation = false;
        });
        translate.addLangs(this.langs);
        translate.setDefaultLang('en');
        this.selectedLanguage = translate.getBrowserLang().match(/en|de|fr|it|es|zh|ja|ko|ru|uk/) ? translate.getBrowserLang() : 'en';
        translate.use(this.selectedLanguage);
    }
    AppComponent.prototype.toggleNavigation = function () {
        this.showNavigation = !this.showNavigation;
    };
    AppComponent.prototype.toggleSubmenus = function () {
        var _this = this;
        this.showSubmenus = false;
        setTimeout(function () { _this.showSubmenus = true; }, 300);
    };
    AppComponent.prototype.langsTitle = function (selectedLang) {
        switch (selectedLang) {
            case 'de':
                return 'Deutsche';
            case 'fr':
                return 'Française';
            case 'it':
                return 'Italiano';
            case 'es':
                return 'Español';
            case 'zh':
                return '中國';
            case 'ja':
                return '日本語';
            case 'ko':
                return '한국어';
            case 'ru':
                return 'Русский';
            case 'uk':
                return 'Українська';
            default:
                return 'English';
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyClock, AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyClock", function() { return MyClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_translate_messageformat_compiler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-translate-messageformat-compiler */ "./node_modules/ngx-translate-messageformat-compiler/fesm5/ngx-translate-messageformat-compiler.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _pages_block_list_block_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/block-list/block-list.component */ "./src/app/pages/block-list/block-list.component.ts");
/* harmony import */ var _pages_block_detail_block_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/block-detail/block-detail.component */ "./src/app/pages/block-detail/block-detail.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _pages_extrinsic_detail_extrinsic_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/extrinsic-detail/extrinsic-detail.component */ "./src/app/pages/extrinsic-detail/extrinsic-detail.component.ts");
/* harmony import */ var _components_extrinsic_table_extrinsic_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/extrinsic-table/extrinsic-table.component */ "./src/app/components/extrinsic-table/extrinsic-table.component.ts");
/* harmony import */ var _pages_harvester_admin_harvester_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/harvester-admin/harvester-admin.component */ "./src/app/pages/harvester-admin/harvester-admin.component.ts");
/* harmony import */ var _components_loading_box_loading_box_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/loading-box/loading-box.component */ "./src/app/components/loading-box/loading-box.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_polkascan_header_polkascan_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/polkascan-header/polkascan-header.component */ "./src/app/components/polkascan-header/polkascan-header.component.ts");
/* harmony import */ var _pages_address_detail_address_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/address-detail/address-detail.component */ "./src/app/pages/address-detail/address-detail.component.ts");
/* harmony import */ var _components_event_table_event_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/event-table/event-table.component */ "./src/app/components/event-table/event-table.component.ts");
/* harmony import */ var _pages_extrinsic_list_extrinsic_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/extrinsic-list/extrinsic-list.component */ "./src/app/pages/extrinsic-list/extrinsic-list.component.ts");
/* harmony import */ var _pages_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/event-list/event-list.component */ "./src/app/pages/event-list/event-list.component.ts");
/* harmony import */ var _pages_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/event-detail/event-detail.component */ "./src/app/pages/event-detail/event-detail.component.ts");
/* harmony import */ var _pages_runtime_list_runtime_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/runtime-list/runtime-list.component */ "./src/app/pages/runtime-list/runtime-list.component.ts");
/* harmony import */ var _pages_runtime_detail_runtime_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/runtime-detail/runtime-detail.component */ "./src/app/pages/runtime-detail/runtime-detail.component.ts");
/* harmony import */ var _pages_runtime_module_detail_runtime_module_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/runtime-module-detail/runtime-module-detail.component */ "./src/app/pages/runtime-module-detail/runtime-module-detail.component.ts");
/* harmony import */ var _pages_runtime_call_detail_runtime_call_detail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/runtime-call-detail/runtime-call-detail.component */ "./src/app/pages/runtime-call-detail/runtime-call-detail.component.ts");
/* harmony import */ var _pages_runtime_event_detail_runtime_event_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/runtime-event-detail/runtime-event-detail.component */ "./src/app/pages/runtime-event-detail/runtime-event-detail.component.ts");
/* harmony import */ var _pages_runtime_storage_detail_runtime_storage_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/runtime-storage-detail/runtime-storage-detail.component */ "./src/app/pages/runtime-storage-detail/runtime-storage-detail.component.ts");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-timeago */ "./node_modules/ngx-timeago/fesm5/ngx-timeago.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _pages_account_list_account_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/account-list/account-list.component */ "./src/app/pages/account-list/account-list.component.ts");
/* harmony import */ var _pages_account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/account-detail/account-detail.component */ "./src/app/pages/account-detail/account-detail.component.ts");
/* harmony import */ var _pages_session_list_session_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/session-list/session-list.component */ "./src/app/pages/session-list/session-list.component.ts");
/* harmony import */ var _pages_session_detail_session_detail_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/session-detail/session-detail.component */ "./src/app/pages/session-detail/session-detail.component.ts");
/* harmony import */ var _pages_democracy_proposal_list_democracy_proposal_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/democracy-proposal-list/democracy-proposal-list.component */ "./src/app/pages/democracy-proposal-list/democracy-proposal-list.component.ts");
/* harmony import */ var _pages_democracy_proposal_detail_democracy_proposal_detail_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/democracy-proposal-detail/democracy-proposal-detail.component */ "./src/app/pages/democracy-proposal-detail/democracy-proposal-detail.component.ts");
/* harmony import */ var _pages_contract_list_contract_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/contract-list/contract-list.component */ "./src/app/pages/contract-list/contract-list.component.ts");
/* harmony import */ var _pages_contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/contract-detail/contract-detail.component */ "./src/app/pages/contract-detail/contract-detail.component.ts");
/* harmony import */ var _pages_balances_transfer_list_balances_transfer_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/balances-transfer-list/balances-transfer-list.component */ "./src/app/pages/balances-transfer-list/balances-transfer-list.component.ts");
/* harmony import */ var _pages_balances_transfer_detail_balances_transfer_detail_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/balances-transfer-detail/balances-transfer-detail.component */ "./src/app/pages/balances-transfer-detail/balances-transfer-detail.component.ts");
/* harmony import */ var _pages_log_list_log_list_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/log-list/log-list.component */ "./src/app/pages/log-list/log-list.component.ts");
/* harmony import */ var _pages_log_detail_log_detail_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/log-detail/log-detail.component */ "./src/app/pages/log-detail/log-detail.component.ts");
/* harmony import */ var _components_log_table_log_table_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/log-table/log-table.component */ "./src/app/components/log-table/log-table.component.ts");
/* harmony import */ var _pages_democracy_referendum_detail_democracy_referendum_detail_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/democracy-referendum-detail/democracy-referendum-detail.component */ "./src/app/pages/democracy-referendum-detail/democracy-referendum-detail.component.ts");
/* harmony import */ var _pages_democracy_referendum_list_democracy_referendum_list_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/democracy-referendum-list/democracy-referendum-list.component */ "./src/app/pages/democracy-referendum-list/democracy-referendum-list.component.ts");
/* harmony import */ var _components_identicon_identicon_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/identicon/identicon.component */ "./src/app/components/identicon/identicon.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_account_index_list_account_index_list_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/account-index-list/account-index-list.component */ "./src/app/pages/account-index-list/account-index-list.component.ts");
/* harmony import */ var _pages_account_index_detail_account_index_detail_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/account-index-detail/account-index-detail.component */ "./src/app/pages/account-index-detail/account-index-detail.component.ts");
/* harmony import */ var _pages_runtime_constant_detail_runtime_constant_detail_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/runtime-constant-detail/runtime-constant-detail.component */ "./src/app/pages/runtime-constant-detail/runtime-constant-detail.component.ts");
/* harmony import */ var _pages_session_validator_detail_session_validator_detail_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/session-validator-detail/session-validator-detail.component */ "./src/app/pages/session-validator-detail/session-validator-detail.component.ts");
/* harmony import */ var _pages_session_validator_list_session_validator_list_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./pages/session-validator-list/session-validator-list.component */ "./src/app/pages/session-validator-list/session-validator-list.component.ts");
/* harmony import */ var _pages_session_nominator_list_session_nominator_list_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./pages/session-nominator-list/session-nominator-list.component */ "./src/app/pages/session-nominator-list/session-nominator-list.component.ts");
/* harmony import */ var _pages_runtime_module_list_runtime_module_list_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pages/runtime-module-list/runtime-module-list.component */ "./src/app/pages/runtime-module-list/runtime-module-list.component.ts");
/* harmony import */ var _pages_runtime_type_list_runtime_type_list_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pages/runtime-type-list/runtime-type-list.component */ "./src/app/pages/runtime-type-list/runtime-type-list.component.ts");
/* harmony import */ var _pages_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/transaction-list/transaction-list.component */ "./src/app/pages/transaction-list/transaction-list.component.ts");
/* harmony import */ var _pages_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pages/transaction-detail/transaction-detail.component */ "./src/app/pages/transaction-detail/transaction-detail.component.ts");
/* harmony import */ var _pages_inherent_list_inherent_list_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pages/inherent-list/inherent-list.component */ "./src/app/pages/inherent-list/inherent-list.component.ts");
/* harmony import */ var _pages_inherent_detail_inherent_detail_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pages/inherent-detail/inherent-detail.component */ "./src/app/pages/inherent-detail/inherent-detail.component.ts");
/* harmony import */ var _types_proposal_proposal_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./types/proposal/proposal.component */ "./src/app/types/proposal/proposal.component.ts");
/* harmony import */ var _types_struct_struct_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./types/struct/struct.component */ "./src/app/types/struct/struct.component.ts");
/* harmony import */ var _components_render_type_render_type_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/render-type/render-type.component */ "./src/app/components/render-type/render-type.component.ts");
/* harmony import */ var _types_referendum_info_referendum_info_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./types/referendum-info/referendum-info.component */ "./src/app/types/referendum-info/referendum-info.component.ts");
/* harmony import */ var _pages_analytics_search_analytics_search_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pages/analytics-search/analytics-search.component */ "./src/app/pages/analytics-search/analytics-search.component.ts");
/* harmony import */ var _pages_council_motion_list_council_motion_list_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./pages/council-motion-list/council-motion-list.component */ "./src/app/pages/council-motion-list/council-motion-list.component.ts");
/* harmony import */ var _pages_council_motion_detail_council_motion_detail_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./pages/council-motion-detail/council-motion-detail.component */ "./src/app/pages/council-motion-detail/council-motion-detail.component.ts");
/* harmony import */ var _pages_tech_comm_proposal_list_tech_comm_proposal_list_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./pages/tech-comm-proposal-list/tech-comm-proposal-list.component */ "./src/app/pages/tech-comm-proposal-list/tech-comm-proposal-list.component.ts");
/* harmony import */ var _pages_tech_comm_proposal_detail_tech_comm_proposal_detail_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component */ "./src/app/pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component.ts");
/* harmony import */ var _pages_treasury_proposal_list_treasury_proposal_list_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./pages/treasury-proposal-list/treasury-proposal-list.component */ "./src/app/pages/treasury-proposal-list/treasury-proposal-list.component.ts");
/* harmony import */ var _pages_treasury_proposal_detail_treasury_proposal_detail_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./pages/treasury-proposal-detail/treasury-proposal-detail.component */ "./src/app/pages/treasury-proposal-detail/treasury-proposal-detail.component.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * app.module.ts
 */











































































var MyClock = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyClock, _super);
    function MyClock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyClock.prototype.tick = function (then) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_34__["interval"])(1000);
    };
    return MyClock;
}(ngx_timeago__WEBPACK_IMPORTED_MODULE_33__["TimeagoClock"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _pages_block_list_block_list_component__WEBPACK_IMPORTED_MODULE_10__["BlockListComponent"],
                _pages_block_detail_block_detail_component__WEBPACK_IMPORTED_MODULE_11__["BlockDetailComponent"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"],
                _pages_extrinsic_detail_extrinsic_detail_component__WEBPACK_IMPORTED_MODULE_16__["ExtrinsicDetailComponent"],
                _components_extrinsic_table_extrinsic_table_component__WEBPACK_IMPORTED_MODULE_17__["ExtrinsicTableComponent"],
                _pages_harvester_admin_harvester_admin_component__WEBPACK_IMPORTED_MODULE_18__["HarvesterAdminComponent"],
                _components_loading_box_loading_box_component__WEBPACK_IMPORTED_MODULE_19__["LoadingBoxComponent"],
                _components_polkascan_header_polkascan_header_component__WEBPACK_IMPORTED_MODULE_21__["PolkascanHeaderComponent"],
                _pages_address_detail_address_detail_component__WEBPACK_IMPORTED_MODULE_22__["AddressDetailComponent"],
                _components_event_table_event_table_component__WEBPACK_IMPORTED_MODULE_23__["EventTableComponent"],
                _pages_extrinsic_list_extrinsic_list_component__WEBPACK_IMPORTED_MODULE_24__["ExtrinsicListComponent"],
                _pages_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_25__["EventListComponent"],
                _pages_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_26__["EventDetailComponent"],
                _pages_runtime_list_runtime_list_component__WEBPACK_IMPORTED_MODULE_27__["RuntimeListComponent"],
                _pages_runtime_detail_runtime_detail_component__WEBPACK_IMPORTED_MODULE_28__["RuntimeDetailComponent"],
                _pages_runtime_module_detail_runtime_module_detail_component__WEBPACK_IMPORTED_MODULE_29__["RuntimeModuleDetailComponent"],
                _pages_runtime_call_detail_runtime_call_detail_component__WEBPACK_IMPORTED_MODULE_30__["RuntimeCallDetailComponent"],
                _pages_runtime_event_detail_runtime_event_detail_component__WEBPACK_IMPORTED_MODULE_31__["RuntimeEventDetailComponent"],
                _pages_runtime_storage_detail_runtime_storage_detail_component__WEBPACK_IMPORTED_MODULE_32__["RuntimeStorageDetailComponent"],
                _pages_account_list_account_list_component__WEBPACK_IMPORTED_MODULE_35__["AccountListComponent"],
                _pages_account_detail_account_detail_component__WEBPACK_IMPORTED_MODULE_36__["AccountDetailComponent"],
                _pages_session_list_session_list_component__WEBPACK_IMPORTED_MODULE_37__["SessionListComponent"],
                _pages_session_detail_session_detail_component__WEBPACK_IMPORTED_MODULE_38__["SessionDetailComponent"],
                _pages_democracy_proposal_list_democracy_proposal_list_component__WEBPACK_IMPORTED_MODULE_39__["DemocracyProposalListComponent"],
                _pages_democracy_proposal_detail_democracy_proposal_detail_component__WEBPACK_IMPORTED_MODULE_40__["DemocracyProposalDetailComponent"],
                _pages_contract_list_contract_list_component__WEBPACK_IMPORTED_MODULE_41__["ContractListComponent"],
                _pages_contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_42__["ContractDetailComponent"],
                _pages_balances_transfer_list_balances_transfer_list_component__WEBPACK_IMPORTED_MODULE_43__["BalancesTransferListComponent"],
                _pages_balances_transfer_detail_balances_transfer_detail_component__WEBPACK_IMPORTED_MODULE_44__["BalancesTransferDetailComponent"],
                _pages_log_list_log_list_component__WEBPACK_IMPORTED_MODULE_45__["LogListComponent"],
                _pages_log_detail_log_detail_component__WEBPACK_IMPORTED_MODULE_46__["LogDetailComponent"],
                _components_log_table_log_table_component__WEBPACK_IMPORTED_MODULE_47__["LogTableComponent"],
                _pages_democracy_referendum_detail_democracy_referendum_detail_component__WEBPACK_IMPORTED_MODULE_48__["DemocracyReferendumDetailComponent"],
                _pages_democracy_referendum_list_democracy_referendum_list_component__WEBPACK_IMPORTED_MODULE_49__["DemocracyReferendumListComponent"],
                _components_identicon_identicon_component__WEBPACK_IMPORTED_MODULE_50__["IdenticonComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_51__["NotFoundComponent"],
                _pages_account_index_list_account_index_list_component__WEBPACK_IMPORTED_MODULE_52__["AccountIndexListComponent"],
                _pages_account_index_detail_account_index_detail_component__WEBPACK_IMPORTED_MODULE_53__["AccountIndexDetailComponent"],
                _pages_runtime_constant_detail_runtime_constant_detail_component__WEBPACK_IMPORTED_MODULE_54__["RuntimeConstantDetailComponent"],
                _pages_session_validator_detail_session_validator_detail_component__WEBPACK_IMPORTED_MODULE_55__["SessionValidatorDetailComponent"],
                _pages_session_validator_list_session_validator_list_component__WEBPACK_IMPORTED_MODULE_56__["SessionValidatorListComponent"],
                _pages_session_nominator_list_session_nominator_list_component__WEBPACK_IMPORTED_MODULE_57__["SessionNominatorListComponent"],
                _pages_runtime_module_list_runtime_module_list_component__WEBPACK_IMPORTED_MODULE_58__["RuntimeModuleListComponent"],
                _pages_runtime_type_list_runtime_type_list_component__WEBPACK_IMPORTED_MODULE_59__["RuntimeTypeListComponent"],
                _pages_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_60__["TransactionListComponent"],
                _pages_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_61__["TransactionDetailComponent"],
                _pages_inherent_list_inherent_list_component__WEBPACK_IMPORTED_MODULE_62__["InherentListComponent"],
                _pages_inherent_detail_inherent_detail_component__WEBPACK_IMPORTED_MODULE_63__["InherentDetailComponent"],
                _types_proposal_proposal_component__WEBPACK_IMPORTED_MODULE_64__["ProposalComponent"],
                _types_struct_struct_component__WEBPACK_IMPORTED_MODULE_65__["StructComponent"],
                _components_render_type_render_type_component__WEBPACK_IMPORTED_MODULE_66__["RenderTypeComponent"],
                _types_referendum_info_referendum_info_component__WEBPACK_IMPORTED_MODULE_67__["ReferendumInfoComponent"],
                _pages_analytics_search_analytics_search_component__WEBPACK_IMPORTED_MODULE_68__["AnalyticsSearchComponent"],
                _pages_council_motion_list_council_motion_list_component__WEBPACK_IMPORTED_MODULE_69__["CouncilMotionListComponent"],
                _pages_council_motion_detail_council_motion_detail_component__WEBPACK_IMPORTED_MODULE_70__["CouncilMotionDetailComponent"],
                _pages_tech_comm_proposal_list_tech_comm_proposal_list_component__WEBPACK_IMPORTED_MODULE_71__["TechCommProposalListComponent"],
                _pages_tech_comm_proposal_detail_tech_comm_proposal_detail_component__WEBPACK_IMPORTED_MODULE_72__["TechCommProposalDetailComponent"],
                _pages_treasury_proposal_list_treasury_proposal_list_component__WEBPACK_IMPORTED_MODULE_73__["TreasuryProposalListComponent"],
                _pages_treasury_proposal_detail_treasury_proposal_detail_component__WEBPACK_IMPORTED_MODULE_74__["TreasuryProposalDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    },
                    compiler: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateCompiler"],
                        useClass: ngx_translate_messageformat_compiler__WEBPACK_IMPORTED_MODULE_6__["TranslateMessageFormatCompiler"]
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_jsonapi__WEBPACK_IMPORTED_MODULE_9__["NgxJsonapiModule"].forRoot({
                    url: _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].jsonApiRootUrl
                }),
                ngx_timeago__WEBPACK_IMPORTED_MODULE_33__["TimeagoModule"].forRoot({
                    clock: { provide: ngx_timeago__WEBPACK_IMPORTED_MODULE_33__["TimeagoClock"], useClass: MyClock },
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](httpClient);
}


/***/ }),

/***/ "./src/app/classes/account-index.class.ts":
/*!************************************************!*\
  !*** ./src/app/classes/account-index.class.ts ***!
  \************************************************/
/*! exports provided: AccountIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountIndex", function() { return AccountIndex; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * account-index.class.ts
 *
 */


var AccountIndex = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccountIndex, _super);
    function AccountIndex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {
            id: 'id'
        };
        return _this;
    }
    return AccountIndex;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/account.class.ts":
/*!******************************************!*\
  !*** ./src/app/classes/account.class.ts ***!
  \******************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * account.class.ts
 *
 */


var Account = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Account, _super);
    function Account() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {
            id: 'id'
        };
        _this.relationships = {
            indices: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
        };
        return _this;
    }
    return Account;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/balancetransfer.class.ts":
/*!**************************************************!*\
  !*** ./src/app/classes/balancetransfer.class.ts ***!
  \**************************************************/
/*! exports provided: BalanceTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceTransfer", function() { return BalanceTransfer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * balancetransfer.class.ts
 */


var BalanceTransfer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BalanceTransfer, _super);
    function BalanceTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        return _this;
    }
    return BalanceTransfer;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/block-total.class.ts":
/*!**********************************************!*\
  !*** ./src/app/classes/block-total.class.ts ***!
  \**********************************************/
/*! exports provided: BlockTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTotal", function() { return BlockTotal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * block-total.class.ts
 *
 */


var BlockTotal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BlockTotal, _super);
    function BlockTotal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        return _this;
    }
    return BlockTotal;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/block.class.ts":
/*!****************************************!*\
  !*** ./src/app/classes/block.class.ts ***!
  \****************************************/
/*! exports provided: Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * block.class.ts
 */


var Block = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Block, _super);
    function Block() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {
            id: 'id',
            hash: 'hash',
            parent_hash: 'parent_hash',
            state_root: 'state_root',
            extrinsics_root: 'extrinsics_root',
            count_extrinsics: 'count_extrinsics',
            count_events: 'count_events',
            runtime_id: 'runtime_id'
        };
        _this.relationships = {
            extrinsics: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            transactions: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            inherents: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            events: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            logs: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
        };
        return _this;
    }
    return Block;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/contract.class.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/contract.class.ts ***!
  \*******************************************/
/*! exports provided: Contract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contract", function() { return Contract; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * contract.class.ts
 *
 */


var Contract = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Contract, _super);
    function Contract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        return _this;
    }
    return Contract;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/council-motion.class.ts":
/*!*************************************************!*\
  !*** ./src/app/classes/council-motion.class.ts ***!
  \*************************************************/
/*! exports provided: CouncilMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouncilMotion", function() { return CouncilMotion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-referendum.class.ts
 *
 */


var CouncilMotion = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CouncilMotion, _super);
    function CouncilMotion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        _this.relationships = {
            votes: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"]()
        };
        return _this;
    }
    return CouncilMotion;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/council-vote.class.ts":
/*!***********************************************!*\
  !*** ./src/app/classes/council-vote.class.ts ***!
  \***********************************************/
/*! exports provided: CouncilVote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouncilVote", function() { return CouncilVote; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-proposal.class.ts
 *
 */


var CouncilVote = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CouncilVote, _super);
    function CouncilVote() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        return _this;
    }
    return CouncilVote;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/democracy-proposal.class.ts":
/*!*****************************************************!*\
  !*** ./src/app/classes/democracy-proposal.class.ts ***!
  \*****************************************************/
/*! exports provided: DemocracyProposal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemocracyProposal", function() { return DemocracyProposal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-proposal.class.ts
 *
 */


var DemocracyProposal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DemocracyProposal, _super);
    function DemocracyProposal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        return _this;
    }
    return DemocracyProposal;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/democracy-referendum.class.ts":
/*!*******************************************************!*\
  !*** ./src/app/classes/democracy-referendum.class.ts ***!
  \*******************************************************/
/*! exports provided: DemocracyReferendum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemocracyReferendum", function() { return DemocracyReferendum; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-referendum.class.ts
 *
 */


var DemocracyReferendum = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DemocracyReferendum, _super);
    function DemocracyReferendum() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        _this.relationships = {
            votes: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"]()
        };
        return _this;
    }
    return DemocracyReferendum;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/democracy-vote.class.ts":
/*!*************************************************!*\
  !*** ./src/app/classes/democracy-vote.class.ts ***!
  \*************************************************/
/*! exports provided: DemocracyVote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemocracyVote", function() { return DemocracyVote; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-proposal.class.ts
 *
 */


var DemocracyVote = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DemocracyVote, _super);
    function DemocracyVote() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        return _this;
    }
    return DemocracyVote;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/event.class.ts":
/*!****************************************!*\
  !*** ./src/app/classes/event.class.ts ***!
  \****************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.class.ts
 */


var Event = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Event, _super);
    function Event() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {
            module_id: 'module_id',
            event_id: 'event_id',
        };
        return _this;
    }
    return Event;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/extrinsic.class.ts":
/*!********************************************!*\
  !*** ./src/app/classes/extrinsic.class.ts ***!
  \********************************************/
/*! exports provided: Extrinsic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Extrinsic", function() { return Extrinsic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.class.ts
 */


var Extrinsic = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Extrinsic, _super);
    function Extrinsic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {
            module_id: 'module_id',
            call_id: 'call_id',
            extrinsic_hash: 'extrinsic_hash'
        };
        return _this;
    }
    return Extrinsic;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/log.class.ts":
/*!**************************************!*\
  !*** ./src/app/classes/log.class.ts ***!
  \**************************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * log.class.ts
 *
 */


var Log = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Log, _super);
    function Log() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        return _this;
    }
    return Log;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/networkstats.class.ts":
/*!***********************************************!*\
  !*** ./src/app/classes/networkstats.class.ts ***!
  \***********************************************/
/*! exports provided: Networkstats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Networkstats", function() { return Networkstats; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * networkstats.class.ts
 */


var Networkstats = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Networkstats, _super);
    function Networkstats() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {
            id: 'id',
            total_signed_extrinsics: 'total_signed_extrinsics',
            total_events: 'total_events'
        };
        return _this;
    }
    return Networkstats;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/runtime-call-param.class.ts":
/*!*****************************************************!*\
  !*** ./src/app/classes/runtime-call-param.class.ts ***!
  \*****************************************************/
/*! exports provided: RuntimeCallParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeCallParam", function() { return RuntimeCallParam; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-call-param.class.ts
 *
 */


var RuntimeCallParam = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeCallParam, _super);
    function RuntimeCallParam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {
            type: 'type',
            name: 'name',
        };
        return _this;
    }
    return RuntimeCallParam;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/runtime-call.class.ts":
/*!***********************************************!*\
  !*** ./src/app/classes/runtime-call.class.ts ***!
  \***********************************************/
/*! exports provided: RuntimeCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeCall", function() { return RuntimeCall; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-call.class.ts
 *
 */


var RuntimeCall = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeCall, _super);
    function RuntimeCall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {
            module_id: 'module_id',
            name: 'name',
        };
        _this.relationships = {
            params: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            recent_extrinsics: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"]()
        };
        return _this;
    }
    return RuntimeCall;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/runtime-constant.class.ts":
/*!***************************************************!*\
  !*** ./src/app/classes/runtime-constant.class.ts ***!
  \***************************************************/
/*! exports provided: RuntimeConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeConstant", function() { return RuntimeConstant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-constant.class.ts
 *
 */


var RuntimeConstant = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeConstant, _super);
    function RuntimeConstant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {
            module_id: 'module_id',
            name: 'name',
        };
        return _this;
    }
    return RuntimeConstant;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/runtime-event-attribute.class.ts":
/*!**********************************************************!*\
  !*** ./src/app/classes/runtime-event-attribute.class.ts ***!
  \**********************************************************/
/*! exports provided: RuntimeEventAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeEventAttribute", function() { return RuntimeEventAttribute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-event-attribute.class.ts
 *
 */


var RuntimeEventAttribute = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeEventAttribute, _super);
    function RuntimeEventAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RuntimeEventAttribute;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/runtime-event.class.ts":
/*!************************************************!*\
  !*** ./src/app/classes/runtime-event.class.ts ***!
  \************************************************/
/*! exports provided: RuntimeEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeEvent", function() { return RuntimeEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-event.class.ts
 *
 */


var RuntimeEvent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeEvent, _super);
    function RuntimeEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.relationships = {
            attributes: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            recent_events: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"]()
        };
        return _this;
    }
    return RuntimeEvent;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/runtime-module.class.ts":
/*!*************************************************!*\
  !*** ./src/app/classes/runtime-module.class.ts ***!
  \*************************************************/
/*! exports provided: RuntimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeModule", function() { return RuntimeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-module.class.ts
 *
 */


var RuntimeModule = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeModule, _super);
    function RuntimeModule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.relationships = {
            events: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            calls: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            storage: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            constants: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"]()
        };
        return _this;
    }
    return RuntimeModule;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/runtime-storage.class.ts":
/*!**************************************************!*\
  !*** ./src/app/classes/runtime-storage.class.ts ***!
  \**************************************************/
/*! exports provided: RuntimeStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeStorage", function() { return RuntimeStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-storage.class.ts
 *
 */


var RuntimeStorage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeStorage, _super);
    function RuntimeStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {
            module_id: 'module_id',
            name: 'name',
        };
        return _this;
    }
    return RuntimeStorage;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/runtime.class.ts":
/*!******************************************!*\
  !*** ./src/app/classes/runtime.class.ts ***!
  \******************************************/
/*! exports provided: Runtime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Runtime", function() { return Runtime; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime.class.ts
 *
 */


var Runtime = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Runtime, _super);
    function Runtime() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.relationships = {
            modules: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            types: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"]()
        };
        return _this;
    }
    return Runtime;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/session-nominator.class.ts":
/*!****************************************************!*\
  !*** ./src/app/classes/session-nominator.class.ts ***!
  \****************************************************/
/*! exports provided: SessionNominator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionNominator", function() { return SessionNominator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * session-validator.class.ts
 *
 */


var SessionNominator = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SessionNominator, _super);
    function SessionNominator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        return _this;
    }
    return SessionNominator;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/session-validator.class.ts":
/*!****************************************************!*\
  !*** ./src/app/classes/session-validator.class.ts ***!
  \****************************************************/
/*! exports provided: SessionValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionValidator", function() { return SessionValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * session-validator.class.ts
 *
 */


var SessionValidator = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SessionValidator, _super);
    function SessionValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        _this.relationships = {
            nominators: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
        };
        return _this;
    }
    return SessionValidator;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/session.class.ts":
/*!******************************************!*\
  !*** ./src/app/classes/session.class.ts ***!
  \******************************************/
/*! exports provided: Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * session.class.ts
 *
 */


var Session = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Session, _super);
    function Session() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        _this.relationships = {
            validators: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"](),
            blocks: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"]()
        };
        return _this;
    }
    return Session;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/tech-comm-proposal-vote.class.ts":
/*!**********************************************************!*\
  !*** ./src/app/classes/tech-comm-proposal-vote.class.ts ***!
  \**********************************************************/
/*! exports provided: TechCommProposalVote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechCommProposalVote", function() { return TechCommProposalVote; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-referendum.class.ts
 *
 */


var TechCommProposalVote = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TechCommProposalVote, _super);
    function TechCommProposalVote() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        _this.relationships = {};
        return _this;
    }
    return TechCommProposalVote;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/tech-comm-proposal.class.ts":
/*!*****************************************************!*\
  !*** ./src/app/classes/tech-comm-proposal.class.ts ***!
  \*****************************************************/
/*! exports provided: TechCommProposal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechCommProposal", function() { return TechCommProposal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-referendum.class.ts
 *
 */


var TechCommProposal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TechCommProposal, _super);
    function TechCommProposal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        _this.relationships = {
            votes: new ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["DocumentCollection"]()
        };
        return _this;
    }
    return TechCommProposal;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/classes/treasury-proposal.class.ts":
/*!****************************************************!*\
  !*** ./src/app/classes/treasury-proposal.class.ts ***!
  \****************************************************/
/*! exports provided: TreasuryProposal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasuryProposal", function() { return TreasuryProposal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-referendum.class.ts
 *
 */


var TreasuryProposal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TreasuryProposal, _super);
    function TreasuryProposal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = {};
        _this.relationships = {};
        return _this;
    }
    return TreasuryProposal;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_1__["Resource"]));



/***/ }),

/***/ "./src/app/components/event-table/event-table.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/event-table/event-table.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div *ngIf=\"event\" class=\"card events-card\">\r\n        <header class=\"card-header\">\r\n            <div class=\"card-header-title\">\r\n               {{ 'event-table.Event' | translate }} #{{ event.id }}\r\n            </div>\r\n            <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n            <span class=\"icon\">\r\n              <i class=\"fa fa-calendar-check fa-2x\"></i>\r\n            </span>\r\n          </a>\r\n        </header>\r\n        <div class=\"card-table\">\r\n            <div class=\"content\">\r\n                <table class=\"table is-fullwidth is-striped\">\r\n                    <tbody>\r\n                        <tr *ngIf=\"context != 'block'\">\r\n                          <td width=\"15%\">{{ 'event-table.Block' | translate }}</td>\r\n                          <td><a routerLink=\"/block/{{ event.attributes.block_id }}\">{{ event.attributes.block_id }}</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ 'event-table.Event Index' | translate }}</td>\r\n                          <td>{{ event.attributes.event_idx }}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ 'event-table.Module' | translate }}</td>\r\n                          <td>{{ event.attributes.module_id }}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ 'event-table.Event name' | translate }}</td>\r\n                          <td>{{ event.attributes.event_id }}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ 'event-table.Description' | translate }}</td>\r\n                          <td>{{ event.attributes.documentation }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-table\" *ngIf=\"event.attributes.attributes\">\r\n            <div class=\"content\">\r\n                <table class=\"table is-fullwidth is-striped\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th colspan=\"2\" style=\"color: #8F99A3; font-weight: 400; font-size: 16px\">{{ 'event-table.Attributes' | translate }}</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let attribute of event.attributes.attributes\">\r\n                          <td>\r\n                            <app-render-type\r\n                              [item]=\"attribute\"\r\n                              [networkTokenDecimals]=\"networkTokenDecimals\"\r\n                              [networkTokenSymbol]=\"networkTokenSymbol\"\r\n                            ></app-render-type>\r\n                          </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/components/event-table/event-table.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/event-table/event-table.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQtdGFibGUvZXZlbnQtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/event-table/event-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/event-table/event-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTableComponent", function() { return EventTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _classes_event_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/event.class */ "./src/app/classes/event.class.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic-table.component.ts
 */





var EventTableComponent = /** @class */ (function () {
    function EventTableComponent(location, eventService) {
        this.location = location;
        this.eventService = eventService;
        this.event = null;
        this.eventId = null;
        this.context = null;
        this.networkTokenDecimals = 0;
        this.networkTokenSymbol = '';
    }
    EventTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.eventId) {
            this.eventService.get(this.eventId).subscribe(function (event) { return _this.event = event; });
        }
    };
    EventTableComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    EventTableComponent.prototype.paramName = function (name) {
        if (name === 'dest') {
            name = 'Destination';
        }
        return name;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _classes_event_class__WEBPACK_IMPORTED_MODULE_3__["Event"])
    ], EventTableComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EventTableComponent.prototype, "eventId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EventTableComponent.prototype, "context", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EventTableComponent.prototype, "networkTokenDecimals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EventTableComponent.prototype, "networkTokenSymbol", void 0);
    EventTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-table',
            template: __webpack_require__(/*! ./event-table.component.html */ "./src/app/components/event-table/event-table.component.html"),
            styles: [__webpack_require__(/*! ./event-table.component.scss */ "./src/app/components/event-table/event-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]])
    ], EventTableComponent);
    return EventTableComponent;
}());



/***/ }),

/***/ "./src/app/components/extrinsic-table/extrinsic-table.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/extrinsic-table/extrinsic-table.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div *ngIf=\"extrinsic\" class=\"card events-card\">\r\n        <header class=\"card-header\">\r\n            <div class=\"card-header-title\" *ngIf=\"extrinsic.attributes.extrinsic_hash\">\r\n              <div>{{ title || 'Extrinsic'}} <span class=\"mobile-hash-format\">0x{{ extrinsic.attributes.extrinsic_hash }}</span></div>\r\n            </div>\r\n          <div class=\"card-header-title\" *ngIf=\"!extrinsic.attributes.extrinsic_hash\">\r\n                {{ title || 'Extrinsic'}} #{{ extrinsic.id }}\r\n            </div>\r\n            <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n            <span class=\"icon\">\r\n              <i *ngIf=\"extrinsic.attributes.signed\" class=\"fa fa-file-signature fa-2x\"></i>\r\n              <i *ngIf=\"extrinsic.attributes.unsigned\" class=\"fa fa-file-alt fa-2x\"></i>\r\n            </span>\r\n          </a>\r\n        </header>\r\n        <div class=\"card-table\">\r\n            <div class=\"content\">\r\n                <table class=\"table is-fullwidth is-striped\">\r\n                    <tbody>\r\n                        <tr *ngIf=\"context != 'block'\">\r\n                          <td width=\"15%\">{{ 'extrinsic-table.Block' | translate }}</td>\r\n                          <td><a routerLink=\"{{ networkURLPrefix }}/block/{{ extrinsic.attributes.block_id }}\">{{ extrinsic.attributes.block_id }}</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ title || 'Extrinsic'}} {{ 'extrinsic-table.Index' | translate }}</td>\r\n                          <td>{{ extrinsic.attributes.extrinsic_idx }}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"extrinsic.attributes.extrinsic_hash\">\r\n                          <td width=\"15%\">{{ title || 'Extrinsic'}} {{ 'extrinsic-table.Hash' | translate }}</td>\r\n                          <td><a routerLink=\"{{ networkURLPrefix }}/transaction/0x{{ extrinsic.attributes.extrinsic_hash}}\" class=\"mobile-hash-format\">0x{{ extrinsic.attributes.extrinsic_hash}}</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ 'extrinsic-table.Module' | translate }}</td>\r\n                          <td>{{ extrinsic.attributes.module_id }}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ 'extrinsic-table.Call' | translate }}</td>\r\n                          <td>{{ extrinsic.attributes.call_id }}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ 'extrinsic-table.Description' | translate }}</td>\r\n                          <td><span title=\"{{ extrinsic.attributes.documentation }}\" class=\"truncate\">{{ extrinsic.attributes.documentation }}</span></td>\r\n                        </tr>\r\n                        <tr *ngIf=\"extrinsic.attributes.signed && extrinsic.attributes.address\">\r\n                          <td width=\"15%\">{{ 'extrinsic-table.Address' | translate }}</td>\r\n                          <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ extrinsic.attributes.address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"extrinsic.attributes.address_id\"></app-identicon> {{ extrinsic.attributes.address }}</a></td>\r\n                        </tr>\r\n                        <tr *ngIf=\"extrinsic.attributes.signed && extrinsic.attributes.account_index\">\r\n                          <td width=\"15%\">{{ 'extrinsic-table.Account Index' | translate }}</td>\r\n                          <td>{{ extrinsic.attributes.account_index }}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"extrinsic.attributes.signed\">\r\n                          <td width=\"15%\">{{ 'extrinsic-table.Nonce' | translate }}</td>\r\n                          <td>{{ extrinsic.attributes.nonce }}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"extrinsic.attributes.signed\">\r\n                          <td width=\"15%\">{{ 'extrinsic-table.Signature' | translate }}</td>\r\n                          <td><div class=\"address-mobile-format\">0x{{ extrinsic.attributes.signature }}</div></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ 'extrinsic-table.Result' | translate }}</td>\r\n                          <td>\r\n                            <i *ngIf=\"extrinsic.attributes.success\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                            <i *ngIf=\"extrinsic.attributes.error\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                          </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-table\" *ngIf=\"extrinsic.attributes.params\">\r\n            <div class=\"content\">\r\n                <table class=\"table is-fullwidth is-striped\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th colspan=\"2\" style=\"color: #8F99A3; font-weight: 400; font-size: 16px\">{{ 'extrinsic-table.Parameters' | translate }}</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let param of extrinsic.attributes.params\">\r\n                          <td width=\"15%\">{{ paramName(param.name) | titlecase}}</td>\r\n                          <td>\r\n                            <app-render-type\r\n                              [item]=\"param\"\r\n                              [networkTokenDecimals]=\"networkTokenDecimals\"\r\n                              [networkTokenSymbol]=\"networkTokenSymbol\"\r\n                            ></app-render-type>\r\n                          </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/components/extrinsic-table/extrinsic-table.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/extrinsic-table/extrinsic-table.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 1024px;\n  display: inline-block;\n  vertical-align: bottom; }\n\n@media screen and (max-width: 1088px) {\n  .truncate {\n    max-width: 512px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHRyaW5zaWMtdGFibGUvSjpcXHByb2plY3RzXFxwb2xrYXNjYW4tcHJlLWV4cGxvcmVyLWd1aS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXh0cmluc2ljLXRhYmxlXFxleHRyaW5zaWMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4dHJpbnNpYy10YWJsZS9leHRyaW5zaWMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJ1bmNhdGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4OHB4KSB7XHJcbiAgLnRydW5jYXRlIHtcclxuICAgIG1heC13aWR0aDogNTEycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/extrinsic-table/extrinsic-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/extrinsic-table/extrinsic-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExtrinsicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrinsicTableComponent", function() { return ExtrinsicTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_extrinsic_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/extrinsic.class */ "./src/app/classes/extrinsic.class.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic-table.component.ts
 */





var ExtrinsicTableComponent = /** @class */ (function () {
    function ExtrinsicTableComponent(location, extrinsicService) {
        this.location = location;
        this.extrinsicService = extrinsicService;
        this.extrinsic = null;
        this.extrinsicId = null;
        this.context = null;
        this.networkTokenDecimals = 0;
    }
    ExtrinsicTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.extrinsicId) {
            this.extrinsicService.get(this.extrinsicId).subscribe(function (extrinsic) { return _this.extrinsic = extrinsic; });
        }
    };
    ExtrinsicTableComponent.prototype.goBack = function () {
        this.location.back();
    };
    ExtrinsicTableComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    ExtrinsicTableComponent.prototype.paramName = function (name) {
        if (name === 'dest') {
            name = 'Destination';
        }
        return name;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _classes_extrinsic_class__WEBPACK_IMPORTED_MODULE_2__["Extrinsic"])
    ], ExtrinsicTableComponent.prototype, "extrinsic", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExtrinsicTableComponent.prototype, "extrinsicId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExtrinsicTableComponent.prototype, "context", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExtrinsicTableComponent.prototype, "networkTokenDecimals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExtrinsicTableComponent.prototype, "networkTokenSymbol", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExtrinsicTableComponent.prototype, "networkURLPrefix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExtrinsicTableComponent.prototype, "title", void 0);
    ExtrinsicTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extrinsic-table',
            template: __webpack_require__(/*! ./extrinsic-table.component.html */ "./src/app/components/extrinsic-table/extrinsic-table.component.html"),
            styles: [__webpack_require__(/*! ./extrinsic-table.component.scss */ "./src/app/components/extrinsic-table/extrinsic-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_4__["ExtrinsicService"]])
    ], ExtrinsicTableComponent);
    return ExtrinsicTableComponent;
}());



/***/ }),

/***/ "./src/app/components/identicon/identicon.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/identicon/identicon.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"identicon\">\r\n  <svg\r\n      id=\"test\"\r\n      name=\"Test\"\r\n      className=\"identicon\"\r\n      style=\"\"\r\n      [attr.width]=\"size\"\r\n      [attr.height]=\"size\"\r\n      *ngIf=\"colors\"\r\n    >\r\n      <circle [attr.cx]=\"s / 2\" [attr.cy]=\"s / 2\" [attr.r]=\"s / 2\" fill=\"#eee\"/>\r\n      <circle [attr.cx]=\"c\" [attr.cy]=\"c - r\" [attr.r]=\"z\" [attr.fill]=\"colors[0]\"/>\r\n      <circle [attr.cx]=\"c\" [attr.cy]=\"c - ro2\" [attr.r]=\"z\" [attr.fill]=\"colors[1]\"/>\r\n      <circle [attr.cx]=\"c - rroot3o4\" [attr.cy]=\"c - r3o4\" [attr.r]=\"z\" [attr.fill]=\"colors[2]\"/>\r\n      <circle [attr.cx]=\"c - rroot3o2\" [attr.cy]=\"c - ro2\" [attr.r]=\"z\" [attr.fill]=\"colors[3]\"/>\r\n      <circle [attr.cx]=\"c - rroot3o4\" [attr.cy]=\"c - ro4\" [attr.r]=\"z\" [attr.fill]=\"colors[4]\"/>\r\n      <circle [attr.cx]=\"c - rroot3o2\" [attr.cy]=\"c\" [attr.r]=\"z\" [attr.fill]=\"colors[5]\"/>\r\n      <circle [attr.cx]=\"c - rroot3o2\" [attr.cy]=\"c + ro2\" [attr.r]=\"z\" [attr.fill]=\"colors[6]\"/>\r\n      <circle [attr.cx]=\"c - rroot3o4\" [attr.cy]=\"c + ro4\" [attr.r]=\"z\" [attr.fill]=\"colors[7]\"/>\r\n      <circle [attr.cx]=\"c - rroot3o4\" [attr.cy]=\"c + r3o4\" [attr.r]=\"z\" [attr.fill]=\"colors[8]\"/>\r\n      <circle [attr.cx]=\"c\" [attr.cy]=\"c + r\" [attr.r]=\"z\" [attr.fill]=\"colors[9]\"/>\r\n      <circle [attr.cx]=\"c\" [attr.cy]=\"c + ro2\" [attr.r]=\"z\" [attr.fill]=\"colors[10]\"/>\r\n      <circle [attr.cx]=\"c + rroot3o4\" [attr.cy]=\"c + r3o4\" [attr.r]=\"z\" [attr.fill]=\"colors[11]\"/>\r\n      <circle [attr.cx]=\"c + rroot3o2\" [attr.cy]=\"c + ro2\" [attr.r]=\"z\" [attr.fill]=\"colors[12]\"/>\r\n      <circle [attr.cx]=\"c + rroot3o4\" [attr.cy]=\"c + ro4\" [attr.r]=\"z\" [attr.fill]=\"colors[13]\"/>\r\n      <circle [attr.cx]=\"c + rroot3o2\" [attr.cy]=\"c\" [attr.r]=\"z\" [attr.fill]=\"colors[14]\"/>\r\n      <circle [attr.cx]=\"c + rroot3o2\" [attr.cy]=\"c - ro2\" [attr.r]=\"z\" [attr.fill]=\"colors[15]\"/>\r\n      <circle [attr.cx]=\"c + rroot3o4\" [attr.cy]=\"c - ro4\" [attr.r]=\"z\" [attr.fill]=\"colors[16]\"/>\r\n      <circle [attr.cx]=\"c + rroot3o4\" [attr.cy]=\"c - r3o4\" [attr.r]=\"z\" [attr.fill]=\"colors[17]\"/>\r\n      <circle [attr.cx]=\"c\" [attr.cy]=\"c\" [attr.r]=\"z\" [attr.fill]=\"colors[18]\"/>\r\n  </svg>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/identicon/identicon.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/identicon/identicon.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".identicon {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pZGVudGljb24vSjpcXHByb2plY3RzXFxwb2xrYXNjYW4tcHJlLWV4cGxvcmVyLWd1aS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaWRlbnRpY29uXFxpZGVudGljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlkZW50aWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/identicon/identicon.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/identicon/identicon.component.ts ***!
  \*************************************************************/
/*! exports provided: IdenticonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdenticonComponent", function() { return IdenticonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var blakejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blakejs */ "./node_modules/blakejs/index.js");
/* harmony import */ var blakejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blakejs__WEBPACK_IMPORTED_MODULE_2__);


// import {blake2AsU8a} from "@polkadot/util-crypto";

var IdenticonComponent = /** @class */ (function () {
    function IdenticonComponent() {
        this.sixPoint = false;
        this.size = 32;
        this.schema = {
            target: { freq: 1, colors: [0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 1] },
            cube: { freq: 20, colors: [0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 5] },
            quazar: { freq: 16, colors: [1, 2, 3, 1, 2, 4, 5, 5, 4, 1, 2, 3, 1, 2, 4, 5, 5, 4, 0] },
            flower: { freq: 32, colors: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 3] },
            cyclic: { freq: 32, colors: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6] },
            vmirror: { freq: 128, colors: [0, 1, 2, 3, 4, 5, 3, 4, 2, 0, 1, 6, 7, 8, 9, 7, 8, 6, 10] },
            hmirror: { freq: 128, colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 6, 7, 5, 3, 4, 2, 11] }
        };
    }
    IdenticonComponent.prototype.ngOnInit = function () {
        this.s = this.size;
        this.c = this.s / 2;
        this.r = this.sixPoint ? this.s / 2 / 8 * 5 : (this.s / 2 / 4 * 3);
        var s = this.s;
        var c = this.c;
        var r = this.r;
        this.rroot3o2 = r * Math.sqrt(3) / 2;
        this.ro2 = r / 2;
        this.rroot3o4 = r * Math.sqrt(3) / 4;
        this.ro4 = r / 4;
        this.r3o4 = r * 3 / 4;
        this.z = s / 64 * 5;
    };
    IdenticonComponent.prototype.updateIcon = function (accountId) {
        var schema = {
            target: { freq: 1, colors: [0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 1] },
            cube: { freq: 20, colors: [0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 5] },
            quazar: { freq: 16, colors: [1, 2, 3, 1, 2, 4, 5, 5, 4, 1, 2, 3, 1, 2, 4, 5, 5, 4, 0] },
            flower: { freq: 32, colors: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 3] },
            cyclic: { freq: 32, colors: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6] },
            vmirror: { freq: 128, colors: [0, 1, 2, 3, 4, 5, 3, 4, 2, 0, 1, 6, 7, 8, 9, 7, 8, 6, 10] },
            hmirror: { freq: 128, colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 6, 7, 5, 3, 4, 2, 11] }
        };
        var zero = Object(blakejs__WEBPACK_IMPORTED_MODULE_2__["blake2b"])(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
        var total = Object.keys(schema).map(function (k) { return schema[k].freq; }).reduce(function (a, b) { return a + b; });
        var address = new Uint8Array(accountId.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); }));
        var hashArray = Object(blakejs__WEBPACK_IMPORTED_MODULE_2__["blake2b"])(address);
        var id = Array.from(hashArray).map(function (x, i) { return ((x + 256 - zero[i]) % 256); });
        var sat = (Math.floor(id[29] * 70 / 256 + 26) % 80) + 30;
        var d = Math.floor((id[30] + id[31] * 256) % total);
        var scheme = this.findScheme(d);
        var palette = Array.from(id).map(function (x, i) {
            var b = (x + i % 28 * 58) % 256;
            if (b === 0) {
                return '#444';
            }
            if (b === 255) {
                return 'transparent';
            }
            var h = Math.floor(b % 64 * 360 / 64);
            var l = [53, 15, 35, 75][Math.floor(b / 64)];
            return "hsl(" + h + ", " + sat + "%, " + l + "%)";
        });
        var rot = (id[28] % 6) * 3;
        this.colors = scheme.colors.map(function (_, i) { return palette[scheme.colors[i < 18 ? (i + rot) % 18 : 18]]; });
    };
    IdenticonComponent.prototype.findScheme = function (d) {
        var cum = 0;
        var ks = Object.keys(this.schema);
        // tslint:disable-next-line:forin
        for (var i in ks) {
            var n = this.schema[ks[i]].freq;
            cum += n;
            if (d < cum) {
                return this.schema[ks[i]];
            }
        }
        throw new Error('Impossible');
    };
    IdenticonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.accountId.currentValue) {
            this.updateIcon(changes.accountId.currentValue);
        }
        else {
            this.colors = null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IdenticonComponent.prototype, "accountId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IdenticonComponent.prototype, "sixPoint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IdenticonComponent.prototype, "size", void 0);
    IdenticonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-identicon',
            template: __webpack_require__(/*! ./identicon.component.html */ "./src/app/components/identicon/identicon.component.html"),
            styles: [__webpack_require__(/*! ./identicon.component.scss */ "./src/app/components/identicon/identicon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IdenticonComponent);
    return IdenticonComponent;
}());



/***/ }),

/***/ "./src/app/components/loading-box/loading-box.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/loading-box/loading-box.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"is-fullwidth box has-text-centered\">\r\n  <i class=\"fas fa-spinner fa-spin fa-3x\"></i>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/loading-box/loading-box.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/loading-box/loading-box.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLWJveC9KOlxccHJvamVjdHNcXHBvbGthc2Nhbi1wcmUtZXhwbG9yZXItZ3VpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2FkaW5nLWJveFxcbG9hZGluZy1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGluZy1ib3gvbG9hZGluZy1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/loading-box/loading-box.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/loading-box/loading-box.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoadingBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBoxComponent", function() { return LoadingBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * loading-box.component.ts
 */


var LoadingBoxComponent = /** @class */ (function () {
    function LoadingBoxComponent() {
    }
    LoadingBoxComponent.prototype.ngOnInit = function () {
    };
    LoadingBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-box',
            template: __webpack_require__(/*! ./loading-box.component.html */ "./src/app/components/loading-box/loading-box.component.html"),
            styles: [__webpack_require__(/*! ./loading-box.component.scss */ "./src/app/components/loading-box/loading-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingBoxComponent);
    return LoadingBoxComponent;
}());



/***/ }),

/***/ "./src/app/components/log-table/log-table.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/log-table/log-table.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div *ngIf=\"log\" class=\"card events-card\">\r\n        <header class=\"card-header\">\r\n            <div class=\"card-header-title\">\r\n               {{ 'log-table.Log' | translate }} #{{ log.id }}\r\n            </div>\r\n            <a class=\"card-header-icon\" aria-label=\"more options\">\r\n            <span class=\"icon\">\r\n              <i class=\"fa fa-book fa-2x\"></i>\r\n            </span>\r\n          </a>\r\n        </header>\r\n        <div class=\"card-table\">\r\n            <div class=\"content\">\r\n                <table class=\"table is-fullwidth is-striped\">\r\n                    <tbody>\r\n                        <tr *ngIf=\"context != 'block'\">\r\n                          <td width=\"15%\">{{ 'log-table.Block' | translate }}</td>\r\n                          <td><a routerLink=\"/block/{{ log.attributes.block_id }}\">{{ log.attributes.block_id }}</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ 'log-table.Log Index' | translate }}</td>\r\n                          <td>{{ log.attributes.log_idx }}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"15%\">{{ 'log-table.Type' | translate }}</td>\r\n                          <td>{{ log.attributes.type }}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"log.attributes.data\">\r\n                          <td width=\"15%\">{{ 'log-table.Data' | translate }}</td>\r\n                          <td>\r\n                            <app-struct\r\n                              [struct]=\"log.attributes.data.value\"\r\n                            ></app-struct>\r\n                          </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/components/log-table/log-table.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/log-table/log-table.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nLXRhYmxlL2xvZy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/log-table/log-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/log-table/log-table.component.ts ***!
  \*************************************************************/
/*! exports provided: LogTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogTableComponent", function() { return LogTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_log_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/log.class */ "./src/app/classes/log.class.ts");



var LogTableComponent = /** @class */ (function () {
    function LogTableComponent() {
        this.log = null;
        this.context = null;
    }
    LogTableComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _classes_log_class__WEBPACK_IMPORTED_MODULE_2__["Log"])
    ], LogTableComponent.prototype, "log", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LogTableComponent.prototype, "context", void 0);
    LogTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-table',
            template: __webpack_require__(/*! ./log-table.component.html */ "./src/app/components/log-table/log-table.component.html"),
            styles: [__webpack_require__(/*! ./log-table.component.scss */ "./src/app/components/log-table/log-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogTableComponent);
    return LogTableComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/messages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\r\n\r\n  <h2>{{ 'messages.Messages' | translate }} #{{ log.id }}</h2>\r\n  <button class=\"clear\"\r\n          (click)=\"messageService.clear()\">{{ 'messages.clear' | translate }}</button>\r\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/messages/messages.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * messages.component.ts
 */



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/components/messages/messages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/polkascan-header/polkascan-header.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/polkascan-header/polkascan-header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <section class=\"hero is-info welcome is-small is-hidden-mobile\">\r\n            <div class=\"hero-body\">\r\n                <div class=\"container\">\r\n                    <h2 class=\"subtitle\">\r\n                        {{ environment.networkName }}\r\n                    </h2>\r\n                </div>\r\n            </div>\r\n        </section>\r\n"

/***/ }),

/***/ "./src/app/components/polkascan-header/polkascan-header.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/polkascan-header/polkascan-header.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9sa2FzY2FuLWhlYWRlci9wb2xrYXNjYW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/polkascan-header/polkascan-header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/polkascan-header/polkascan-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: PolkascanHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolkascanHeaderComponent", function() { return PolkascanHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * polkascan-header.component.ts
 */



var PolkascanHeaderComponent = /** @class */ (function () {
    function PolkascanHeaderComponent() {
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    PolkascanHeaderComponent.prototype.ngOnInit = function () {
    };
    PolkascanHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-polkascan-header',
            template: __webpack_require__(/*! ./polkascan-header.component.html */ "./src/app/components/polkascan-header/polkascan-header.component.html"),
            styles: [__webpack_require__(/*! ./polkascan-header.component.scss */ "./src/app/components/polkascan-header/polkascan-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PolkascanHeaderComponent);
    return PolkascanHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/render-type/render-type.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/render-type/render-type.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container [ngSwitch]=\"item.type\">\r\n  <div *ngSwitchCase=\"'Address'\"><a routerLink=\"{{ networkURLPrefix }}/account/{{ item.value }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"item.orig_value\"></app-identicon> {{ item.value }}</a></div>\r\n  <div *ngSwitchCase=\"'AuthorityId'\"><a routerLink=\"{{ networkURLPrefix }}/account/{{ item.value }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"item.orig_value\"></app-identicon> {{ item.value }}</a></div>\r\n  <div *ngSwitchCase=\"'<Lookup as StaticLookup>::Source'\"><a routerLink=\"{{ networkURLPrefix }}/account/{{ item.value }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"item.orig_value\"></app-identicon> {{ item.value }}</a></div>\r\n  <div *ngSwitchCase=\"'AccountId'\"><a routerLink=\"{{ networkURLPrefix }}/account/{{ item.value }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"item.orig_value\"></app-identicon> {{ item.value }}</a></div>\r\n  <div *ngSwitchCase=\"'PropIndex'\"><a routerLink=\"{{ networkURLPrefix }}/democracy/proposal/{{ item.value }}\">Proposal #{{ item.value }}</a></div>\r\n  <div *ngSwitchCase=\"'ReferendumIndex'\"><a routerLink=\"{{ networkURLPrefix }}/democracy/referendum/{{ item.value }}\">Referendum #{{ item.value }}</a></div>\r\n  <div *ngSwitchCase=\"'SessionIndex'\"><a routerLink=\"{{ networkURLPrefix }}/session/session/{{ item.value }}\">Session #{{ item.value }}</a></div>\r\n  <div *ngSwitchCase=\"'BlockNumber'\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ item.value }}\">Block #{{ item.value }}</a></div>\r\n  <div *ngSwitchCase=\"'AccountIndex'\"><a routerLink=\"{{ networkURLPrefix }}/indices/account/{{ item.value }}\">Account index {{ item.value }}</a></div>\r\n  <div *ngSwitchCase=\"'EthereumAddress'\"><a href=\"https://etherscan.io/address/0x{{ item.value }}\" target=\"_blank\">Ethereum Address: 0x{{ item.value }}</a></div>\r\n  <div *ngSwitchCase=\"'Balance'\">{{ formatBalance(item.value) | number}} {{ networkTokenSymbol }}</div>\r\n  <div *ngSwitchCase=\"'Compact<Balance>'\">{{ formatBalance(item.value) | number}} {{ networkTokenSymbol }}</div>\r\n  <div *ngSwitchCase=\"'Compact<BalanceOf>'\">{{ formatBalance(item.value) | number}} {{ networkTokenSymbol }}</div>\r\n  <div *ngSwitchCase=\"'Compact<Moment>'\">{{ item.value | date:'medium' }}</div>\r\n  <div *ngSwitchCase=\"'bool'\">\r\n    <i *ngIf=\"item.value\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n    <i *ngIf=\"!item.value\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n  </div>\r\n  <div *ngSwitchDefault><app-struct\r\n    [struct]=\"item.value\"\r\n    [networkTokenDecimals]=\"networkTokenDecimals\"\r\n    [networkTokenSymbol]=\"networkTokenSymbol\"\r\n    [networkURLPrefix]=\"networkURLPrefix\"\r\n  ></app-struct></div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/components/render-type/render-type.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/render-type/render-type.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVuZGVyLXR5cGUvcmVuZGVyLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/render-type/render-type.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/render-type/render-type.component.ts ***!
  \*****************************************************************/
/*! exports provided: RenderTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTypeComponent", function() { return RenderTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-proposal.class.ts
 *
 */


var RenderTypeComponent = /** @class */ (function () {
    function RenderTypeComponent() {
        this.item = null;
        this.networkURLPrefix = null;
        this.networkTokenDecimals = 0;
    }
    RenderTypeComponent.prototype.ngOnInit = function () {
    };
    RenderTypeComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RenderTypeComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RenderTypeComponent.prototype, "networkURLPrefix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RenderTypeComponent.prototype, "networkTokenDecimals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RenderTypeComponent.prototype, "networkTokenSymbol", void 0);
    RenderTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-render-type',
            template: __webpack_require__(/*! ./render-type.component.html */ "./src/app/components/render-type/render-type.component.html"),
            styles: [__webpack_require__(/*! ./render-type.component.scss */ "./src/app/components/render-type/render-type.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RenderTypeComponent);
    return RenderTypeComponent;
}());



/***/ }),

/***/ "./src/app/pages/account-detail/account-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/account-detail/account-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"account$ | async as account\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\" *ngIf=\"account && account.attributes && account.attributes.id\">\r\n                  <div class=\"card-header-title\">\r\n                    <app-identicon [accountId]=\"account.attributes.id\" size=\"64\"></app-identicon><div class=\"address-mobile-format\">{{ account.attributes.address }}</div>\r\n                  </div>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-id-card fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"account\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                <td>{{ 'AccountDetail.Free Balance' | translate }}</td>\r\n                                <td>{{ formatBalance(account.attributes.free_balance) | number:'1.0-15' }} {{ networkTokenSymbol }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>{{ 'AccountDetail.Reserved Balance' | translate }}</td>\r\n                                <td>{{ formatBalance(account.attributes.reserved_balance) | number:'1.0-15' }} {{ networkTokenSymbol }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>{{ 'AccountDetail.Nonce' | translate }}</td>\r\n                                <td>{{ account.attributes.nonce || 0}}</td>\r\n                              </tr>\r\n                              <tr *ngFor=\"let accountIndex of account.relationships.indices.data; trackBy: account.relationships.indices.trackBy\">\r\n                                <td>{{ 'AccountDetail.Account index' | translate }}</td>\r\n                                <td><a routerLink=\"/indices/account/{{ accountIndex.id }}\">{{ accountIndex.id}}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'AccountDetail.Created at block' | translate }}</td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/block/{{ account.attributes.created_at_block }}\">{{account.attributes.created_at_block}}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'AccountDetail.Updated at block' | translate }}</td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/block/{{ account.attributes.updated_at_block }}\">{{account.attributes.updated_at_block}}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>{{ 'AccountDetail.Active' | translate }}</td>\r\n                                <td>\r\n                                  <i *ngIf=\"!account.attributes.is_reaped\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"account.attributes.is_reaped\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section id=\"extrinsics\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'AccountDetail.Last 25 transactions' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"extrinsics\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-file-signature fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!extrinsics || extrinsics.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"extrinsics && extrinsics.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'AccountDetail.ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'AccountDetail.Block' | translate }}</th>\r\n                                <th>{{ 'AccountDetail.Module' | translate }}</th>\r\n                                <th>{{ 'AccountDetail.Call' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'AccountDetail.Success' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let extrinsic of extrinsics.data; trackBy: extrinsics.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i *ngIf=\"extrinsic.attributes.signed\" class=\"fa fa-file-signature\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.unsigned\" class=\"fa fa-file-alt\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/transaction/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ extrinsic.id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ extrinsic.attributes.block_id }}\">{{ extrinsic.attributes.block_id }}</a></td>\r\n                                    <td>{{ extrinsic.attributes.module_id }}</td>\r\n                                    <td>{{ extrinsic.attributes.call_id }}</td>\r\n                                    <td class=\"is-hidden-mobile\">\r\n                                      <i *ngIf=\"extrinsic.attributes.success\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.error\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/transaction/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">Details</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                      <div class=\"no-items\" *ngIf=\"extrinsics && !extrinsics.is_loading && extrinsics.data.length == 0\">{{ 'AccountDetail.No extrinsics found for this account' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/account-detail/account-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/account-detail/account-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".identicon {\n  position: absolute;\n  right: 26px;\n  top: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC1kZXRhaWwvSjpcXHByb2plY3RzXFxwb2xrYXNjYW4tcHJlLWV4cGxvcmVyLWd1aS9zcmNcXGFwcFxccGFnZXNcXGFjY291bnQtZGV0YWlsXFxhY2NvdW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC1kZXRhaWwvYWNjb3VudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWRlbnRpY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNnB4O1xyXG4gICAgdG9wOiA2cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/account-detail/account-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/account-detail/account-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: AccountDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailComponent", function() { return AccountDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_balance_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/balance-transfer.service */ "./src/app/services/balance-transfer.service.ts");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_account_index_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account-index.service */ "./src/app/services/account-index.service.ts");









var AccountDetailComponent = /** @class */ (function () {
    function AccountDetailComponent(balanceTransferService, extrinsicService, accountService, accountIndexService, activatedRoute) {
        this.balanceTransferService = balanceTransferService;
        this.extrinsicService = extrinsicService;
        this.accountService = accountService;
        this.accountIndexService = accountIndexService;
        this.activatedRoute = activatedRoute;
    }
    AccountDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenSymbol;
        this.account$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (params) {
            return _this.accountService.get(params.get('id'), { include: ['indices'] });
        }));
        this.activatedRoute.params.subscribe(function (val) {
            var params = {
                page: { number: 0, size: 25 },
                remotefilter: { address: val.id },
            };
            _this.extrinsicService.all(params).subscribe(function (extrinsics) {
                _this.extrinsics = extrinsics;
            });
        });
    };
    AccountDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    AccountDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-detail',
            template: __webpack_require__(/*! ./account-detail.component.html */ "./src/app/pages/account-detail/account-detail.component.html"),
            styles: [__webpack_require__(/*! ./account-detail.component.scss */ "./src/app/pages/account-detail/account-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_balance_transfer_service__WEBPACK_IMPORTED_MODULE_2__["BalanceTransferService"],
            _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_3__["ExtrinsicService"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _services_account_index_service__WEBPACK_IMPORTED_MODULE_8__["AccountIndexService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AccountDetailComponent);
    return AccountDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/account-index-detail/account-index-detail.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/account-index-detail/account-index-detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"accountIndex$ | async as accountIndex\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\" *ngIf=\"accountIndex\">\r\n                  <p class=\"card-header-title\">\r\n                    {{ 'AccountIndexDetail.Account Index' | translate }} {{ accountIndex.attributes.short_address }}\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-id-card-alt fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"accountIndex\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                <td>{{ 'AccountIndexDetail.Account' | translate }}</td>\r\n                                <td *ngIf=\"!accountIndex.attributes.address\">{{ 'AccountIndexDetail.N/A' | translate }}</td>\r\n                                <td *ngIf=\"accountIndex.attributes.address\"><a routerLink=\"/account/{{ accountIndex.attributes.address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"accountIndex.attributes.account_id\"></app-identicon> {{ accountIndex.attributes.address }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>{{ 'AccountIndexDetail.Is reclaimable' | translate }}</td>\r\n                                <td>\r\n                                  <i *ngIf=\"accountIndex.attributes.is_reclaimable\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"!accountIndex.attributes.is_reclaimable\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>{{ 'AccountIndexDetail.Is reclaimed' | translate }}</td>\r\n                                <td>\r\n                                  <i *ngIf=\"accountIndex.attributes.is_reclaimed\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"!accountIndex.attributes.is_reclaimed\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'AccountIndexDetail.Created at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ accountIndex.attributes.created_at_block }}\">{{ accountIndex.attributes.created_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'AccountIndexDetail.Updated at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ accountIndex.attributes.updated_at_block }}\">{{ accountIndex.attributes.updated_at_block }}</a></td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/account-index-detail/account-index-detail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/account-index-detail/account-index-detail.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQtaW5kZXgtZGV0YWlsL2FjY291bnQtaW5kZXgtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/account-index-detail/account-index-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/account-index-detail/account-index-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccountIndexDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountIndexDetailComponent", function() { return AccountIndexDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_account_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/account-index.service */ "./src/app/services/account-index.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AccountIndexDetailComponent = /** @class */ (function () {
    function AccountIndexDetailComponent(accountIndexService, activatedRoute) {
        this.accountIndexService = accountIndexService;
        this.activatedRoute = activatedRoute;
    }
    AccountIndexDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountIndex$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.accountIndexService.get(params.get('id'));
        }));
    };
    AccountIndexDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-index-detail',
            template: __webpack_require__(/*! ./account-index-detail.component.html */ "./src/app/pages/account-index-detail/account-index-detail.component.html"),
            styles: [__webpack_require__(/*! ./account-index-detail.component.scss */ "./src/app/pages/account-index-detail/account-index-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_index_service__WEBPACK_IMPORTED_MODULE_3__["AccountIndexService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AccountIndexDetailComponent);
    return AccountIndexDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/account-index-list/account-index-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/account-index-list/account-index-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'AccountIndexList.Account Indices' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-id-card-alt fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"accountIndices.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"accountIndices.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'AccountIndexList.Short Address' | translate }}</th>\r\n                                <th>{{ 'AccountIndexList.Address' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'AccountIndexList.Created at block' | translate }}</th>\r\n                                <th>{{ 'AccountIndexList.Reclaimable' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let accountIndex of accountIndices.data; trackBy: accountIndices.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-id-card-alt\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/indices/account/{{ accountIndex.id }}\">{{ accountIndex.attributes.short_address }}</a></td>\r\n                                    <td *ngIf=\"!accountIndex.attributes.address\">-</td>\r\n                                    <td *ngIf=\"accountIndex.attributes.address\"><a routerLink=\"{{ networkURLPrefix }}/account/{{ accountIndex.attributes.address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"accountIndex.attributes.account_id\"></app-identicon> {{ accountIndex.attributes.address }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"/block/{{ accountIndex.attributes.created_at_block }}\">{{ accountIndex.attributes.created_at_block }}</a></td>\r\n                                    <td>\r\n                                      <i *ngIf=\"accountIndex.attributes.is_reclaimable\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"!accountIndex.attributes.is_reclaimable\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"/indices/account/{{ accountIndex.id }}\">{{ 'AccountIndexList.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"accountIndices.data.length == 0 && !accountIndices.is_loading\">{{ 'AccountIndexList.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"accountIndices && accountIndices.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'AccountIndexList.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/account-index-list/account-index-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/account-index-list/account-index-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQtaW5kZXgtbGlzdC9hY2NvdW50LWluZGV4LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/account-index-list/account-index-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/account-index-list/account-index-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: AccountIndexListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountIndexListComponent", function() { return AccountIndexListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_account_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account-index.service */ "./src/app/services/account-index.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AccountIndexListComponent = /** @class */ (function () {
    function AccountIndexListComponent(accountIndexService, activatedRoute) {
        this.accountIndexService = accountIndexService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    AccountIndexListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    AccountIndexListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.accountIndexService.all(params).subscribe(function (accountIndices) {
            _this.accountIndices = accountIndices;
        });
    };
    AccountIndexListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    AccountIndexListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-index-list',
            template: __webpack_require__(/*! ./account-index-list.component.html */ "./src/app/pages/account-index-list/account-index-list.component.html"),
            styles: [__webpack_require__(/*! ./account-index-list.component.scss */ "./src/app/pages/account-index-list/account-index-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_index_service__WEBPACK_IMPORTED_MODULE_2__["AccountIndexService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AccountIndexListComponent);
    return AccountIndexListComponent;
}());



/***/ }),

/***/ "./src/app/pages/account-list/account-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/account-list/account-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'AccountList.Accounts' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-id-card fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"accounts.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"accounts.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'AccountList.Address' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'AccountList.Updated at block' | translate }}</th>\r\n                                <th>{{ 'AccountList.Active' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let account of accounts.data; trackBy: accounts.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-id-card\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"/account/{{ account.id }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"account.attributes.id\"></app-identicon> {{ account.attributes.address }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"/block/{{ account.attributes.updated_at_block }}\">{{ account.attributes.updated_at_block }}</a></td>\r\n                                    <td>\r\n                                      <i *ngIf=\"!account.attributes.is_reaped\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"account.attributes.is_reaped\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"/account/{{ account.id }}\">{{ 'AccountList.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"accounts.data.length == 0 && !accounts.is_loading\">{{ 'AccountList.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"accounts && accounts.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'AccountList.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/account-list/account-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/account-list/account-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQtbGlzdC9hY2NvdW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/account-list/account-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/account-list/account-list.component.ts ***!
  \**************************************************************/
/*! exports provided: AccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountListComponent", function() { return AccountListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(accountService, activatedRoute) {
        this.accountService = accountService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    AccountListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    AccountListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.accountService.all(params).subscribe(function (accounts) {
            _this.accounts = accounts;
        });
    };
    AccountListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    AccountListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-list',
            template: __webpack_require__(/*! ./account-list.component.html */ "./src/app/pages/account-list/account-list.component.html"),
            styles: [__webpack_require__(/*! ./account-list.component.scss */ "./src/app/pages/account-list/account-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AccountListComponent);
    return AccountListComponent;
}());



/***/ }),

/***/ "./src/app/pages/address-detail/address-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/address-detail/address-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n     <section class=\"info-tiles\" *ngIf=\"!balanceTransfers || balanceTransfers.data.length > 0\">\r\n       <div class=\"card\" *ngIf=\"account\">\r\n            <header class=\"card-header\">\r\n                <p class=\"card-header-title\">\r\n                    {{ 'AddressDetail.Last 25 balance transfers sent by' | translate }} {{ account }}\r\n                </p>\r\n\r\n            </header>\r\n            <div class=\"card-table\">\r\n                <div class=\"content\">\r\n                    <table class=\"table is-fullwidth is-striped\">\r\n                        <thead>\r\n                          <th></th>\r\n                          <th class=\"is-hidden-mobile\">{{ 'AddressDetail.Block' | translate }} #</th>\r\n                          <th>{{ 'AddressDetail.Destination' | translate }}</th>\r\n                          <th>{{ 'AddressDetail.Amount' | translate }}</th>\r\n                          <th></th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let balanceTransfer of balanceTransfers.data; trackBy: balanceTransfers.trackBy\">\r\n                              <td width=\"5%\"><i class=\"fa fa-exchange-alt\"></i></td>\r\n                              <td class=\"is-hidden-mobile\"><a [routerLink]=\"['/block/', balanceTransfer.attributes.block_id]\">{{ balanceTransfer.attributes.block_id }}</a></td>\r\n                              <td class=\"is-hidden-tablet\"><a [routerLink]=\"['/account/', balanceTransfer.attributes.destination]\">{{ balanceTransfer.attributes.destination| slice:0:16 }}...</a></td>\r\n                              <td class=\"is-hidden-mobile\"><a [routerLink]=\"['/account/', balanceTransfer.attributes.destination]\">{{ balanceTransfer.attributes.destination }}</a></td>\r\n                              <td>{{ formatBalance(balanceTransfer.attributes.value) | number:'1.0-15'}} {{ networkTokenSymbol }}</td>\r\n                              <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"/extrinsic/{{ balanceTransfer.attributes.extrinsic_hash ? '0x' + balanceTransfer.attributes.extrinsic_hash : balanceTransfer.id }}\">{{ 'AddressDetail.Details' | translate }}</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n     </section>\r\n    <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'AddressDetail.Last 25 transactions by' | translate }} {{ account }}\r\n                    </p>\r\n\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!extrinsics || extrinsics.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"extrinsics && extrinsics.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'AddressDetail.ID' | translate }}</th>\r\n                                <th>{{ 'AddressDetail.Block' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'AddressDetail.Module' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'AddressDetail.Call' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'AddressDetail.Signed' | translate }}</th>\r\n                                <th>{{ 'AddressDetail.Success' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let extrinsic of extrinsics.data; trackBy: extrinsics.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i *ngIf=\"extrinsic.attributes.signed\" class=\"fa fa-file-signature\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.unsigned\" class=\"fa fa-file-alt\"></i>\r\n                                    </td>\r\n                                    <td>{{ extrinsic.id }}</td>\r\n                                    <td><a routerLink=\"/block/{{ extrinsic.attributes.block_id }}\">{{ extrinsic.attributes.block_id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\">{{ extrinsic.attributes.module_id }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ extrinsic.attributes.call_id }}</td>\r\n                                    <td class=\"is-hidden-mobile\"><span *ngIf=\"extrinsic.attributes.signed\">{{ 'AddressDetail.Yes' | translate }}</span><span *ngIf=\"!extrinsic.attributes.signed\">{{ 'AddressDetail.No' | translate }}</span></td>\r\n                                    <td>\r\n                                      <i *ngIf=\"extrinsic.attributes.success\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.error\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"/extrinsic/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ 'AddressDetail.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                      <div class=\"no-items\" *ngIf=\"extrinsics && !extrinsics.is_loading && extrinsics.data.length == 0\">{{ 'AddressDetail.No transactions found for this account' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/address-detail/address-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/address-detail/address-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHJlc3MtZGV0YWlsL2FkZHJlc3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/address-detail/address-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/address-detail/address-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: AddressDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDetailComponent", function() { return AddressDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_balance_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/balance-transfer.service */ "./src/app/services/balance-transfer.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");






var AddressDetailComponent = /** @class */ (function () {
    function AddressDetailComponent(balanceTransferService, extrinsicService, activatedRoute) {
        this.balanceTransferService = balanceTransferService;
        this.extrinsicService = extrinsicService;
        this.activatedRoute = activatedRoute;
    }
    AddressDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].networkTokenSymbol;
        this.activatedRoute.params.subscribe(function (val) {
            _this.account = val.id;
            _this.balanceTransferService.all({
                remotefilter: { address: _this.account },
                page: { number: 0 }
            }).subscribe(function (balanceTransfers) { return (_this.balanceTransfers = balanceTransfers); });
            var params = {
                page: { number: 0, size: 25 },
                remotefilter: { address: val.id },
            };
            _this.extrinsicService.all(params).subscribe(function (extrinsics) {
                _this.extrinsics = extrinsics;
            });
        });
    };
    AddressDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    AddressDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-detail',
            template: __webpack_require__(/*! ./address-detail.component.html */ "./src/app/pages/address-detail/address-detail.component.html"),
            styles: [__webpack_require__(/*! ./address-detail.component.scss */ "./src/app/pages/address-detail/address-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_balance_transfer_service__WEBPACK_IMPORTED_MODULE_3__["BalanceTransferService"],
            _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_5__["ExtrinsicService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddressDetailComponent);
    return AddressDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/analytics-search/analytics-search.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/analytics-search/analytics-search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section class=\"is-12\" id=\"search\">\r\n            <div class=\"card\">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">{{ 'Analytics-Search.Search' | translate }}</p>\r\n                    <a [routerLink]=\"\" fragment=\"search\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-content\">\r\n                    <div class=\"content\">\r\n                        <form (ngSubmit)=\"search()\">\r\n                        <div class=\"control has-icons-left has-icons-right\">\r\n                            <input class=\"input is-large is-loading\" type=\"text\" [(ngModel)]=\"searchQuery\" [ngModelOptions]=\"{standalone: true}\" [placeholder]=\"'PlaceHolderSearch' | translate\">\r\n                            <span class=\"icon is-medium is-left\">\r\n                              <i *ngIf=\"loadingCount === 0\" class=\"fa fa-search\"></i>\r\n                              <i *ngIf=\"loadingCount > 0\" class=\"fas fa-spinner fa-spin\"></i>\r\n                            </span>\r\n                            <span class=\"icon is-medium is-right\">\r\n\r\n                            </span>\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <section class=\"is-12\" id=\"no-result\" *ngIf=\"currentSearchQuery && loadingCount == 0\">\r\n            <div class=\"card\">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                      {{ 'Analytics-Search.No results' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"search\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-search fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-content\">\r\n                    <div class=\"content\">\r\n                        <div class=\"no-items\">\"{{ 'Analytics-Search.No results found for ' | translate }}{{ currentSearchQuery }}\"</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/analytics-search/analytics-search.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/analytics-search/analytics-search.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-items {\n  font-size: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5hbHl0aWNzLXNlYXJjaC9KOlxccHJvamVjdHNcXHBvbGthc2Nhbi1wcmUtZXhwbG9yZXItZ3VpL3NyY1xcYXBwXFxwYWdlc1xcYW5hbHl0aWNzLXNlYXJjaFxcYW5hbHl0aWNzLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYW5hbHl0aWNzLXNlYXJjaC9hbmFseXRpY3Mtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWl0ZW1zIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/analytics-search/analytics-search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/analytics-search/analytics-search.component.ts ***!
  \**********************************************************************/
/*! exports provided: AnalyticsSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsSearchComponent", function() { return AnalyticsSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _services_account_index_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/account-index.service */ "./src/app/services/account-index.service.ts");
/* harmony import */ var _services_block_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/block.service */ "./src/app/services/block.service.ts");







var AnalyticsSearchComponent = /** @class */ (function () {
    function AnalyticsSearchComponent(router, route, extrinsicService, accountService, accountIndexService, blockService) {
        this.router = router;
        this.route = route;
        this.extrinsicService = extrinsicService;
        this.accountService = accountService;
        this.accountIndexService = accountIndexService;
        this.blockService = blockService;
    }
    AnalyticsSearchComponent.prototype.ngOnInit = function () {
        this.searchQuery = '';
        this.loadingCount = 0;
        this.networkURLPrefix = '';
        this.replaceUrl = false;
        if (this.route.snapshot.paramMap.get('query') !== null) {
            this.searchQuery = this.route.snapshot.paramMap.get('query');
            this.replaceUrl = true;
            this.search();
        }
        else {
            this.replaceUrl = false;
        }
    };
    AnalyticsSearchComponent.prototype.search = function () {
        var _this = this;
        // Strip whitespace from search text
        this.currentSearchQuery = this.searchQuery.trim();
        if (this.currentSearchQuery !== '') {
            // Reset results
            this.account = null;
            this.block = null;
            this.extrinsic = null;
            // Search extrinsic
            if (this.currentSearchQuery.startsWith('0x') || this.currentSearchQuery.includes('-')) {
                this.loadingCount++;
                this.extrinsicService.get(this.currentSearchQuery).subscribe(function (extrinsic) {
                    _this.extrinsic = extrinsic;
                }, function (error) {
                    _this.loadingCount--;
                }, function () {
                    if (_this.extrinsic.attributes.extrinsic_hash) {
                        _this.router.navigate([_this.networkURLPrefix, 'transaction', '0x' + _this.extrinsic.attributes.extrinsic_hash], { replaceUrl: _this.replaceUrl });
                    }
                    else {
                        _this.router.navigate([_this.networkURLPrefix, 'inherent', _this.extrinsic.id]);
                    }
                    _this.loadingCount--;
                });
            }
            // Search accounts
            this.loadingCount++;
            this.accountService.get(this.currentSearchQuery).subscribe(function (account) {
                _this.account = account;
            }, function (error) {
                _this.loadingCount--;
            }, function () {
                _this.router.navigate([_this.networkURLPrefix, 'account', _this.account.id], { replaceUrl: _this.replaceUrl });
                _this.loadingCount--;
            });
            // Search block
            if (this.currentSearchQuery.startsWith('0x') || +this.currentSearchQuery) {
                this.loadingCount++;
                this.blockService.get(this.currentSearchQuery).subscribe(function (block) {
                    _this.block = block;
                }, function (error) {
                    _this.loadingCount--;
                }, function () {
                    _this.router.navigate([_this.networkURLPrefix, 'block', _this.block.attributes.id], { replaceUrl: _this.replaceUrl });
                    _this.loadingCount--;
                });
            }
            // Search account indices
            this.loadingCount++;
            this.accountIndexService.get(this.currentSearchQuery).subscribe(function (accountIndex) {
                _this.accountIndex = accountIndex;
            }, function (error) {
                _this.loadingCount--;
            }, function () {
                _this.router.navigate([_this.networkURLPrefix, 'indices', 'account', _this.accountIndex.id], { replaceUrl: _this.replaceUrl });
                _this.loadingCount--;
            });
        }
    };
    AnalyticsSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analytics-search',
            template: __webpack_require__(/*! ./analytics-search.component.html */ "./src/app/pages/analytics-search/analytics-search.component.html"),
            styles: [__webpack_require__(/*! ./analytics-search.component.scss */ "./src/app/pages/analytics-search/analytics-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_3__["ExtrinsicService"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"],
            _services_account_index_service__WEBPACK_IMPORTED_MODULE_5__["AccountIndexService"],
            _services_block_service__WEBPACK_IMPORTED_MODULE_6__["BlockService"]])
    ], AnalyticsSearchComponent);
    return AnalyticsSearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/balances-transfer-detail/balances-transfer-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/balances-transfer-detail/balances-transfer-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"balanceTransfer$ | async as balanceTransfer\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'BalanceTransfer.Balance transfer' | translate }} \"0x{{ balanceTransfer.id }}\"\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-exchange-alt fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"balanceTransfer\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td width=\"20%\">{{ 'BalanceTransfer.Block' | translate }}</td>\r\n                              <td><a routerLink=\"{{ networkURLPrefix }}/block/{{ balanceTransfer.attributes.block_id }}\">{{ balanceTransfer.attributes.block_id }}</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td>{{ 'BalanceTransfer.Sender' | translate }}</td>\r\n                              <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ balanceTransfer.attributes.sender }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"balanceTransfer.attributes.sender_id\"></app-identicon> {{ balanceTransfer.attributes.sender }}</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td>{{ 'BalanceTransfer.Destination' | translate }}</td>\r\n                              <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ balanceTransfer.attributes.destination }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"balanceTransfer.attributes.destination_id\"></app-identicon> {{ balanceTransfer.attributes.destination }}</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td>{{ 'BalanceTransfer.Value' | translate }}</td>\r\n                              <td>{{ formatBalance(balanceTransfer.attributes.value) | number:'1.0-15' }} {{ networkTokenSymbol }}</td>\r\n                            </tr>\r\n                             <tr>\r\n                              <td>{{ 'BalanceTransfer.Fee' | translate }}</td>\r\n                              <td>{{ formatBalance(balanceTransfer.attributes.fee) | number:'1.0-15' }} {{ networkTokenSymbol }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td width=\"20%\">{{ 'BalanceTransfer.Event ID' | translate }}</td>\r\n                              <td><a routerLink=\"{{ networkURLPrefix }}/event/{{ balanceTransfer.attributes.event_id }}\">{{ balanceTransfer.attributes.event_id }}</a></td>\r\n                            </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/balances-transfer-detail/balances-transfer-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/balances-transfer-detail/balances-transfer-detail.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbGFuY2VzLXRyYW5zZmVyLWRldGFpbC9iYWxhbmNlcy10cmFuc2Zlci1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/balances-transfer-detail/balances-transfer-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/balances-transfer-detail/balances-transfer-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BalancesTransferDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancesTransferDetailComponent", function() { return BalancesTransferDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_balance_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/balance-transfer.service */ "./src/app/services/balance-transfer.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var BalancesTransferDetailComponent = /** @class */ (function () {
    function BalancesTransferDetailComponent(activatedRoute, balanceTransferService) {
        this.activatedRoute = activatedRoute;
        this.balanceTransferService = balanceTransferService;
    }
    BalancesTransferDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenSymbol;
        this.balanceTransfer$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.balanceTransferService.get(params.get('id'));
        }));
    };
    BalancesTransferDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    BalancesTransferDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-balances-transfer-detail',
            template: __webpack_require__(/*! ./balances-transfer-detail.component.html */ "./src/app/pages/balances-transfer-detail/balances-transfer-detail.component.html"),
            styles: [__webpack_require__(/*! ./balances-transfer-detail.component.scss */ "./src/app/pages/balances-transfer-detail/balances-transfer-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_balance_transfer_service__WEBPACK_IMPORTED_MODULE_4__["BalanceTransferService"]])
    ], BalancesTransferDetailComponent);
    return BalancesTransferDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/balances-transfer-list/balances-transfer-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/balances-transfer-list/balances-transfer-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'BalanceTransferList.Balance transfers' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-exchange-alt fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!balanceTransfers || balanceTransfers.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"balanceTransfers && balanceTransfers.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'BalanceTransferList.Block' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'BalanceTransferList.Sender' | translate }}</th>\r\n                                <th>{{ 'BalanceTransferList.Destination' | translate }}</th>\r\n                                <th>{{ 'BalanceTransferList.Value' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let balanceTransfer of balanceTransfers.data; trackBy: balanceTransfers.trackBy\">\r\n                                  <td width=\"5%\"><i class=\"fa fa-exchange-alt\"></i></td>\r\n                                  <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ balanceTransfer.attributes.block_id }}\">{{ balanceTransfer.attributes.block_id }}</a></td>\r\n                                  <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/account/{{ balanceTransfer.attributes.sender }}\" class=\"address-format\"><app-identicon [accountId]=\"balanceTransfer.attributes.sender_id\"></app-identicon> {{ balanceTransfer.attributes.sender }}</a></td>\r\n                                  <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ balanceTransfer.attributes.destination }}\" class=\"address-format\"><app-identicon [accountId]=\"balanceTransfer.attributes.destination_id\"></app-identicon> {{ balanceTransfer.attributes.destination }}</a></td>\r\n                                  <td>{{ formatBalance(balanceTransfer.attributes.value) | number:'1.0-15'}} {{ networkTokenSymbol }}</td>\r\n                                  <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/balances/transfer/{{ balanceTransfer.id }}\">{{ 'BalanceTransferList.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"balanceTransfers && balanceTransfers.data.length == 0 && !balanceTransfers.is_loading\">{{ 'BalanceTransferList.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"balanceTransfers && balanceTransfers.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'BalanceTransferList.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/balances-transfer-list/balances-transfer-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/balances-transfer-list/balances-transfer-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbGFuY2VzLXRyYW5zZmVyLWxpc3QvYmFsYW5jZXMtdHJhbnNmZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/balances-transfer-list/balances-transfer-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/balances-transfer-list/balances-transfer-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BalancesTransferListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancesTransferListComponent", function() { return BalancesTransferListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_balance_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/balance-transfer.service */ "./src/app/services/balance-transfer.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BalancesTransferListComponent = /** @class */ (function () {
    function BalancesTransferListComponent(balanceTransferService, activatedRoute) {
        this.balanceTransferService = balanceTransferService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    BalancesTransferListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].networkTokenSymbol;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    BalancesTransferListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.balanceTransferService.all(params).subscribe(function (balanceTransfers) {
            _this.balanceTransfers = balanceTransfers;
        });
    };
    BalancesTransferListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    BalancesTransferListComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    BalancesTransferListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-balances-transfer-list',
            template: __webpack_require__(/*! ./balances-transfer-list.component.html */ "./src/app/pages/balances-transfer-list/balances-transfer-list.component.html"),
            styles: [__webpack_require__(/*! ./balances-transfer-list.component.scss */ "./src/app/pages/balances-transfer-list/balances-transfer-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_balance_transfer_service__WEBPACK_IMPORTED_MODULE_2__["BalanceTransferService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], BalancesTransferListComponent);
    return BalancesTransferListComponent;
}());



/***/ }),

/***/ "./src/app/pages/block-detail/block-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/block-detail/block-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n\r\n      <div *ngIf=\"block$ | async as block\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'Block-Detail.Block' | translate }} #{{ block.id }}\r\n                  </p>\r\n                <a [routerLink]=\"\" fragment=\"details\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-cube fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" id=\"details\" *ngIf=\"block\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                  <td width=\"15%\">{{ 'Block-Detail.Timestamp' | translate }}</td>\r\n                                  <td>{{ block.attributes.datetime | date:'medium'}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td width=\"15%\">{{ 'Block-Detail.Hash' | translate }}</td>\r\n                                  <td><div class=\"mobile-hash-format\">{{block.attributes.hash}}</div></td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.Parent hash' | translate }}</td>\r\n                                  <td><a *ngIf=\"block.id > 0\" routerLink=\"{{ networkURLPrefix }}/block/{{ block.id - 1 }}\" class=\"mobile-hash-format\">{{block.attributes.parent_hash}}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.State Root' | translate }}</td>\r\n                                  <td><div class=\"mobile-hash-format\">{{block.attributes.state_root}}</div></td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.Extrinsics Root' | translate }}</td>\r\n                                  <td><div class=\"mobile-hash-format\">{{block.attributes.extrinsics_root}}</div></td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.Total extrinsics' | translate }}</td>\r\n                                  <td >{{block.attributes.count_extrinsics}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.Total signed extrinsics' | translate }}</td>\r\n                                  <td >{{ block.attributes.count_extrinsics_signed }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.Total failed extrinsics' | translate }}</td>\r\n                                  <td >{{ block.attributes.count_extrinsics_error }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.Total events' | translate }}</td>\r\n                                  <td >{{block.attributes.count_events}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.Total system events' | translate }}</td>\r\n                                  <td >{{block.attributes.count_events_system}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.Total module events' | translate }}</td>\r\n                                  <td >{{block.attributes.count_events_module}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.New accounts' | translate }}</td>\r\n                                  <td >{{block.attributes.count_contracts_new}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.Reaped accounts' | translate }}</td>\r\n                                  <td >{{block.attributes.count_accounts_reaped}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.New contracts' | translate }}</td>\r\n                                  <td >{{block.attributes.count_contracts_new}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.New sessions' | translate }}</td>\r\n                                  <td >{{block.attributes.count_sessions_new}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'Block-Detail.Runtime version' | translate }}</td>\r\n                                  <td><a routerLink=\"{{ networkURLPrefix }}/runtime/{{ block.attributes.spec_version_id }}\">{{block.attributes.spec_version_id}}</a></td>\r\n                              </tr>\r\n                              <tr *ngIf=\"blockTotal$ | async as blockTotal\">\r\n                                  <td>{{ 'Block-Detail.Block time' | translate }}</td>\r\n                                  <td >{{blockTotal.attributes.blocktime }} {{ 'Block-Detail.seconds' | translate }}</td>\r\n                              </tr>\r\n                              <tr *ngIf=\"blockTotal$ | async as blockTotal\">\r\n                                  <td>{{ 'Block-Detail.Session ID' | translate }}</td>\r\n                                  <td><a routerLink=\"{{ networkURLPrefix }}/session/session/{{ blockTotal.attributes.session_id }}\">{{ blockTotal.attributes.session_id }}</a></td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card \">\r\n            <div class=\"tabs\">\r\n              <ul>\r\n                <li [ngClass]=\"{'is-active': currentTab == 'transactions'}\" *ngIf=\"block.relationships.transactions.data.length > 0\">\r\n                  <a routerLink=\".\" fragment=\"transactions\">\r\n                    <span class=\"icon is-small\"><i class=\"fas fa-file-signature\" aria-hidden=\"true\"></i></span>\r\n                    <span>{{ 'Block-Detail.Transactions' | translate }}</span>\r\n                  </a>\r\n                </li>\r\n                <li [ngClass]=\"{'is-active': currentTab == 'inherents'}\" *ngIf=\"block.relationships.inherents.data.length > 0\">\r\n                  <a routerLink=\".\" fragment=\"inherents\">\r\n                    <span class=\"icon is-small\"><i class=\"fas fa-file-alt\" aria-hidden=\"true\"></i></span>\r\n                    <span>{{ 'Block-Detail.Inherents' | translate }}</span>\r\n                  </a>\r\n                </li>\r\n                <li [ngClass]=\"{'is-active': currentTab == 'events'}\" *ngIf=\"block.relationships.events.data.length > 0\">\r\n                  <a routerLink=\".\" fragment=\"events\">\r\n                    <span class=\"icon is-small\"><i class=\"fas fa-calendar-check\" aria-hidden=\"true\"></i></span>\r\n                    <span>{{ 'Block-Detail.Events' | translate }}</span>\r\n                  </a>\r\n                </li>\r\n                <li [ngClass]=\"{'is-active': currentTab == 'logs'}\" *ngIf=\"block.relationships.logs.data.length > 0\">\r\n                  <a routerLink=\".\" fragment=\"logs\">\r\n                    <span class=\"icon is-small\"><i class=\"fas fa-book\" aria-hidden=\"true\"></i></span>\r\n                    <span>{{ 'Block-Detail.Logs' | translate }}</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n\r\n            <div class=\"card-table\" id=\"transactions\" *ngIf=\"currentTab == 'transactions'\">\r\n                <div class=\"content\">\r\n                    <table class=\"table is-fullwidth is-striped\">\r\n                         <thead>\r\n                          <tr>\r\n                            <th></th>\r\n                            <th>{{ 'Block-Detail.Transaction ID' | translate }}</th>\r\n                            <th class=\"is-hidden-mobile\">{{ 'Block-Detail.From' | translate }}</th>\r\n                            <th>{{ 'Block-Detail.Module' | translate }}</th>\r\n                            <th>{{ 'Block-Detail.Call' | translate }}</th>\r\n                            <th>{{ 'Block-Detail.Success' | translate }}</th>\r\n                            <th></th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let extrinsic of block.relationships.transactions.data; trackBy: block.relationships.transactions.trackBy\">\r\n                                <td width=\"5%\">\r\n                                  <i *ngIf=\"extrinsic.attributes.signed\" class=\"fa fa-file-signature\"></i>\r\n                                  <i *ngIf=\"extrinsic.attributes.unsigned\" class=\"fa fa-file-alt\"></i>\r\n                                </td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/transaction/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\"><div class=\"hash-format\">0x{{ extrinsic.attributes.extrinsic_hash }}</div></a></td>\r\n                                <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/account/{{ extrinsic.attributes.address }}\" class=\"address-format\"><app-identicon [accountId]=\"extrinsic.attributes.address_id\"></app-identicon> {{ extrinsic.attributes.address }}</a></td>\r\n                                <td>{{ extrinsic.attributes.module_id }}</td>\r\n                                <td>{{ extrinsic.attributes.call_id }}</td>\r\n                                <td>\r\n                                  <i *ngIf=\"extrinsic.attributes.success\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"extrinsic.attributes.error\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                                <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/transaction/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ 'Block-Detail.Details' | translate }}</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-table\" id=\"inherents\" *ngIf=\"currentTab == 'inherents'\">\r\n                <div class=\"content\">\r\n                    <table class=\"table is-fullwidth is-striped\">\r\n                         <thead>\r\n                          <tr>\r\n                            <th></th>\r\n                            <th>{{ 'Block-Detail.Inherent ID' | translate }}</th>\r\n                            <th>{{ 'Block-Detail.Module' | translate }}</th>\r\n                            <th>{{ 'Block-Detail.Call' | translate }}</th>\r\n                            <th>{{ 'Block-Detail.Success' | translate }}</th>\r\n                            <th></th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let extrinsic of block.relationships.inherents.data; trackBy: block.relationships.inherents.trackBy\">\r\n                                <td width=\"5%\">\r\n                                  <i *ngIf=\"extrinsic.attributes.signed\" class=\"fa fa-file-signature\"></i>\r\n                                  <i *ngIf=\"extrinsic.attributes.unsigned\" class=\"fa fa-file-alt\"></i>\r\n                                </td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/inherent/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ extrinsic.id }}</a></td>\r\n                                <td>{{ extrinsic.attributes.module_id }}</td>\r\n                                <td>{{ extrinsic.attributes.call_id }}</td>\r\n                                <td>\r\n                                  <i *ngIf=\"extrinsic.attributes.success\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"extrinsic.attributes.error\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                                <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/inherent/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ 'Block-Detail.Details' | translate }}</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-table\" id=\"events\" *ngIf=\"currentTab == 'events'\">\r\n                <div class=\"content\">\r\n                    <table class=\"table is-fullwidth is-striped\">\r\n                         <thead>\r\n                          <tr>\r\n                            <th></th>\r\n                            <th>{{ 'Block-Detail.Event ID' | translate }}</th>\r\n                            <th>{{ 'Block-Detail.Module' | translate }}</th>\r\n                            <th>{{ 'Block-Detail.Event' | translate }}</th>\r\n                            <th></th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let event of block.relationships.events.data; trackBy: block.relationships.events.trackBy\">\r\n                                <td width=\"5%\">\r\n                                  <i class=\"fa fa-calendar-check\"></i>\r\n                                </td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/event/{{ event.id }}\">{{ event.id }}</a></td>\r\n                                <td>{{ event.attributes.module_id }}</td>\r\n                                <td>{{ event.attributes.event_id }}</td>\r\n                                <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/event/{{ event.id }}\">{{ 'Block-Detail.Details' | translate }}</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-table\" id=\"logs\" *ngIf=\"currentTab == 'logs'\">\r\n                <div class=\"content\">\r\n                    <table class=\"table is-fullwidth is-striped\">\r\n                       <thead>\r\n                        <tr>\r\n                          <th></th>\r\n                          <th>{{ 'Block-Detail.Log ID' | translate }}</th>\r\n                          <th>{{ 'Block-Detail.Type' | translate }}</th>\r\n                          <th></th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                          <tr *ngFor=\"let log of block.relationships.logs.data; trackBy: block.relationships.logs.trackBy\">\r\n                              <td width=\"5%\">\r\n                                <i class=\"fa fa-book\"></i>\r\n                              </td>\r\n                              <td><a routerLink=\"{{ networkURLPrefix }}/log/{{ log.id }}\">{{ log.id }}</a></td>\r\n                              <td>{{ log.attributes.type }}</td>\r\n                              <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/log/{{ log.id }}\">{{ 'Block-Detail.Details' | translate }}</a></td>\r\n                          </tr>\r\n                      </tbody>\r\n                  </table>\r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/block-detail/block-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/block-detail/block-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2NrLWRldGFpbC9ibG9jay1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/block-detail/block-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/block-detail/block-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: BlockDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailComponent", function() { return BlockDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_block_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/block.service */ "./src/app/services/block.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_block_total_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/block-total.service */ "./src/app/services/block-total.service.ts");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/log.service */ "./src/app/services/log.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * block-detail.component.ts
 */











var BlockDetailComponent = /** @class */ (function () {
    function BlockDetailComponent(route, blockService, blockTotalService, extrinsicService, eventService, logService, location) {
        this.route = route;
        this.blockService = blockService;
        this.blockTotalService = blockTotalService;
        this.extrinsicService = extrinsicService;
        this.eventService = eventService;
        this.logService = logService;
        this.location = location;
    }
    BlockDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentTab = 'transactions';
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].networkTokenSymbol;
        this.block$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            if (params.get('id')) {
                return _this.blockService.get(params.get('id'), { include: ['transactions', 'inherents', 'events', 'logs'] });
            }
        }));
        this.fragmentSubsription = this.route.fragment.subscribe(function (value) {
            if (value === 'transactions' || value === 'inherents' || value === 'events' || value === 'logs') {
                _this.currentTab = value;
            }
        });
        this.block$.subscribe(function (value) {
            if (_this.currentTab === 'transactions' && value.relationships.transactions.data.length === 0 &&
                value.relationships.inherents.data.length > 0) {
                _this.currentTab = 'inherents';
            }
        });
        this.blockTotal$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            if (params.get('id')) {
                return _this.blockTotalService.get(params.get('id'), {});
            }
        }));
    };
    BlockDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BlockDetailComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    BlockDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-detail',
            template: __webpack_require__(/*! ./block-detail.component.html */ "./src/app/pages/block-detail/block-detail.component.html"),
            styles: [__webpack_require__(/*! ./block-detail.component.scss */ "./src/app/pages/block-detail/block-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"],
            _services_block_total_service__WEBPACK_IMPORTED_MODULE_9__["BlockTotalService"],
            _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_6__["ExtrinsicService"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"],
            _services_log_service__WEBPACK_IMPORTED_MODULE_10__["LogService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], BlockDetailComponent);
    return BlockDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/block-list/block-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/block-list/block-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'Block-List.Blocks' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-cube fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!blocks || blocks.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"blocks && blocks.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Block-List.Number' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Block-List.Age' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Block-List.Block hash' | translate }}</th>\r\n                                <th>{{ 'Block-List.Signed Extrinsics' | translate }}</th>\r\n                                <th>{{ 'Block-List.Module Events' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let block of blocks.data; trackBy: blocks.trackBy\">\r\n                                    <td width=\"5%\"><i class=\"fa fa-cube\"></i></td>\r\n                                    <td width=\"10%\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ block.id }}\">{{ block.id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><span rel=\"tooltip\" title=\"{{ block.attributes.datetime | date:'medium'}}\">{{ block.attributes.datetime | timeago }}</span></td>\r\n                                    <td class=\"is-hidden-mobile\"><div class=\"hash-format\">{{ block.attributes.hash }}</div></td>\r\n                                    <td>{{ block.attributes.count_extrinsics_signed }}</td>\r\n                                    <td>{{ block.attributes.count_events_module }}</td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/block/{{ block.id }}\">{{ 'Block-List.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                      <div class=\"no-items\" *ngIf=\"blocks && blocks.data.length == 0 && !blocks.is_loading\">{{ 'Block-List.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Block-List.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/block-list/block-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/block-list/block-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2NrLWxpc3QvYmxvY2stbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/block-list/block-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/block-list/block-list.component.ts ***!
  \**********************************************************/
/*! exports provided: BlockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockListComponent", function() { return BlockListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_block_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/block.service */ "./src/app/services/block.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * block-list.component.ts
 */





var BlockListComponent = /** @class */ (function () {
    function BlockListComponent(blockService, activatedRoute) {
        this.blockService = blockService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    BlockListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initialLoading = true;
        var blockUpdateCounter = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(6000);
        this.blockUpdateSubsription = blockUpdateCounter.subscribe(function (n) {
            _this.initialLoading = false;
            _this.getBlocks(_this.currentPage);
        });
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getBlocks(_this.currentPage);
        });
    };
    BlockListComponent.prototype.getBlocks = function (page) {
        var _this = this;
        this.blockService.all({
            page: { number: page, size: 25 }
        }).subscribe(function (blocks) { return (_this.blocks = blocks); });
    };
    BlockListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.blockUpdateSubsription.unsubscribe();
        this.fragmentSubsription.unsubscribe();
    };
    BlockListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-list',
            template: __webpack_require__(/*! ./block-list.component.html */ "./src/app/pages/block-list/block-list.component.html"),
            styles: [__webpack_require__(/*! ./block-list.component.scss */ "./src/app/pages/block-list/block-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], BlockListComponent);
    return BlockListComponent;
}());



/***/ }),

/***/ "./src/app/pages/contract-detail/contract-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/contract-detail/contract-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"contract$ | async as contract\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'Contract-Detail.Contract' | translate }} \"{{ contract.id }}\"\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-file-contract fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"contract\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Contract-Detail.Created at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ contract.attributes.created_at_block }}\">{{ contract.attributes.created_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Contract-Detail.Verified source' | translate }}</td>\r\n                                <td>\r\n                                  <pre *ngIf=\"contract.attributes.source\">{{ contract.attributes.source }}</pre>\r\n                                  <i *ngIf=\"!contract.attributes.source\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">WASM binary</td>\r\n                                <td>\r\n                                  <pre>{{ contract.attributes.bytecode }}</pre>\r\n                                </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/contract-detail/contract-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/contract-detail/contract-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRyYWN0LWRldGFpbC9jb250cmFjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/contract-detail/contract-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/contract-detail/contract-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ContractDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDetailComponent", function() { return ContractDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ContractDetailComponent = /** @class */ (function () {
    function ContractDetailComponent(activatedRoute, contractService) {
        this.activatedRoute = activatedRoute;
        this.contractService = contractService;
    }
    ContractDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contract$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.contractService.get(params.get('id'));
        }));
    };
    ContractDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contract-detail',
            template: __webpack_require__(/*! ./contract-detail.component.html */ "./src/app/pages/contract-detail/contract-detail.component.html"),
            styles: [__webpack_require__(/*! ./contract-detail.component.scss */ "./src/app/pages/contract-detail/contract-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"]])
    ], ContractDetailComponent);
    return ContractDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/contract-list/contract-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/contract-list/contract-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'Contract-List.Contracts' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-file-contract fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"contracts.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"contracts.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Contract-List.Code Hash' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Contract-List.Block' | translate }}</th>\r\n                                <th>{{ 'Contract-List.Verified' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let contract of contracts.data; trackBy: contracts.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-file-contract\"></i>\r\n                                    </td>\r\n                                    <td>{{ contract.id }}</td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"/block/{{ contract.attributes.created_at_block }}\">{{ contract.attributes.created_at_block }}</a></td>\r\n                                    <td>\r\n                                      <i *ngIf=\"contract.attributes.source\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"!contract.attributes.source\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"/contracts/contract/{{ contract.id }}\">{{ 'Contract-List.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"contracts.data.length == 0 && !contracts.is_loading\">{{ 'Contract-List.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"contracts && contracts.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Contract-List.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/contract-list/contract-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/contract-list/contract-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRyYWN0LWxpc3QvY29udHJhY3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/contract-list/contract-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/contract-list/contract-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ContractListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractListComponent", function() { return ContractListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ContractListComponent = /** @class */ (function () {
    function ContractListComponent(contractService, activatedRoute) {
        this.contractService = contractService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    ContractListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    ContractListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.contractService.all(params).subscribe(function (contracts) {
            _this.contracts = contracts;
        });
    };
    ContractListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    ContractListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contract-list',
            template: __webpack_require__(/*! ./contract-list.component.html */ "./src/app/pages/contract-list/contract-list.component.html"),
            styles: [__webpack_require__(/*! ./contract-list.component.scss */ "./src/app/pages/contract-list/contract-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ContractListComponent);
    return ContractListComponent;
}());



/***/ }),

/***/ "./src/app/pages/council-motion-detail/council-motion-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/council-motion-detail/council-motion-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"councilMotion$ | async as councilMotion\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'Council-motion-detail.Council Motion' | translate }} #{{ councilMotion.attributes.proposal_id }}\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-university fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"councilMotion\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Council-motion-detail.Created at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ councilMotion.attributes.created_at_block }}\">{{ councilMotion.attributes.created_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Council-motion-detail.Updated at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ councilMotion.attributes.updated_at_block }}\">{{ councilMotion.attributes.updated_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Council-motion-detail.Motion Hash' | translate }}</td>\r\n                                <td>\r\n                                  0x{{ councilMotion.attributes.motion_hash }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>{{ 'Council-motion-detail.Proposer' | translate }}</td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ councilMotion.attributes.address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"councilMotion.attributes.account_id\"></app-identicon> {{ councilMotion.attributes.address }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Council-motion-detail.Member Threshold' | translate }}</td>\r\n                                <td>\r\n                                  {{ councilMotion.attributes.member_threshold }}\r\n                                </td>\r\n                              </tr>\r\n                               <tr>\r\n                                <td width=\"20%\">{{ 'Council-motion-detail.Aye votes' | translate }}</td>\r\n                                <td>\r\n                                  {{ councilMotion.attributes.yes_votes_count }}\r\n                                </td>\r\n                              </tr>\r\n                               <tr>\r\n                                <td width=\"20%\">{{ 'Council-motion-detail.Nay votes' | translate }}</td>\r\n                                <td>\r\n                                  {{ councilMotion.attributes.no_votes_count }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Council-motion-detail.Status' | translate }}</td>\r\n                                <td>\r\n                                  {{ councilMotion.attributes.status }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr *ngIf=\"councilMotion.attributes.status == 'Executed'\">\r\n                                <td width=\"15%\">{{ 'Council-motion-detail.Execution result' | translate }}</td>\r\n                                <td>\r\n                                  <i *ngIf=\"councilMotion.attributes.executed === true\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"councilMotion.attributes.executed === false\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section class=\"info-tiles\" *ngIf=\"councilMotion\">\r\n          <div class=\"card \">\r\n            <div class=\"tabs\">\r\n              <ul>\r\n                <li [ngClass]=\"{'is-active': currentTab == 'proposal'}\">\r\n                  <a routerLink=\".\" fragment=\"proposal\">\r\n                    <span class=\"icon is-small\"><i class=\"fas fa-poll\" aria-hidden=\"true\"></i></span>\r\n                    <span>{{ 'Council-motion-detail.Proposal' | translate }}</span>\r\n                  </a>\r\n                </li>\r\n                <li [ngClass]=\"{'is-active': currentTab == 'votes'}\">\r\n                  <a routerLink=\".\" fragment=\"votes\">\r\n                    <span class=\"icon is-small\"><i class=\"fas fa-vote-yea\" aria-hidden=\"true\"></i></span>\r\n                    <span>{{ 'Council-motion-detail.Votes' | translate }}</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n\r\n            <div class=\"card-table\" id=\"proposal\" *ngIf=\"currentTab == 'proposal'\">\r\n                <div class=\"content\">\r\n                  <table class=\"table is-striped\" *ngIf=\"councilMotion.attributes.proposal\">\r\n                  <tbody>\r\n                    <tr *ngIf=\"councilMotion.attributes.proposal.call_documentation\">\r\n                      <td>{{ 'Proposal.Description' | translate}}</td>\r\n                      <td>{{ councilMotion.attributes.proposal.call_documentation }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>{{ 'Proposal.Module' | translate }}</td>\r\n                      <td>{{ councilMotion.attributes.proposal.call_module }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>{{ 'Proposal.Call' | translate }}</td>\r\n                      <td>{{ councilMotion.attributes.proposal.call_name }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>{{ 'Proposal.Parameters' | translate }}</td>\r\n                      <td>\r\n                        <app-struct\r\n                          [struct]=\"councilMotion.attributes.proposal.params\"\r\n                          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n                          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n                          [networkURLPrefix]=\"networkURLPrefix\"\r\n                        ></app-struct>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n                  <table class=\"table is-striped\" *ngIf=\"councilMotion.attributes.proposal?.proposalHash\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>{{ 'Council-motion-detail.Proposal Hash' | translate }}</td>\r\n                      <td>{{ councilMotion.attributes.proposal?.proposalHash }}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-table\" id=\"votes\" *ngIf=\"currentTab == 'votes'\">\r\n                <div class=\"content\">\r\n                    <table class=\"table is-fullwidth is-striped\">\r\n                         <thead>\r\n                          <tr>\r\n                            <th></th>\r\n                            <th>{{ 'Council-motion-detail.Account' | translate }}</th>\r\n                            <th>{{ 'Council-motion-detail.Vote' | translate }}</th>\r\n                            <th class=\"is-hidden-mobile\">{{ 'Council-motion-detail.Block' | translate }}</th>\r\n                            <th></th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let vote of councilMotion.relationships.votes.data; trackBy: councilMotion.relationships.votes.trackBy\">\r\n                                <td width=\"5%\">\r\n                                  <i class=\"fa fa-vote-yea\"></i>\r\n                                </td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ vote.attributes.address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"vote.attributes.account_id\"></app-identicon> {{ vote.attributes.address }}</a></td>\r\n                                <td>\r\n                                  <i *ngIf=\"vote.attributes.vote\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"!vote.attributes.vote\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                                <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ vote.attributes.updated_at_block }}\">{{ vote.attributes.updated_at_block }}</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/council-motion-detail/council-motion-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/council-motion-detail/council-motion-detail.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdW5jaWwtbW90aW9uLWRldGFpbC9jb3VuY2lsLW1vdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/council-motion-detail/council-motion-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/council-motion-detail/council-motion-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: CouncilMotionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouncilMotionDetailComponent", function() { return CouncilMotionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_council_vote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/council-vote.service */ "./src/app/services/council-vote.service.ts");
/* harmony import */ var _services_council_motion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/council-motion.service */ "./src/app/services/council-motion.service.ts");







var CouncilMotionDetailComponent = /** @class */ (function () {
    function CouncilMotionDetailComponent(activatedRoute, router, councilMotionService, councilVoteService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.councilMotionService = councilMotionService;
        this.councilVoteService = councilVoteService;
    }
    CouncilMotionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentTab = 'proposal';
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].networkTokenSymbol;
        this.councilMotion$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.councilMotionService.get(params.get('id'), { include: ['votes'] });
        }));
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (value === 'proposal' || value === 'votes') {
                _this.currentTab = value;
            }
        });
    };
    CouncilMotionDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    CouncilMotionDetailComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    CouncilMotionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-council-motion-detail',
            template: __webpack_require__(/*! ./council-motion-detail.component.html */ "./src/app/pages/council-motion-detail/council-motion-detail.component.html"),
            styles: [__webpack_require__(/*! ./council-motion-detail.component.scss */ "./src/app/pages/council-motion-detail/council-motion-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_council_motion_service__WEBPACK_IMPORTED_MODULE_6__["CouncilMotionService"],
            _services_council_vote_service__WEBPACK_IMPORTED_MODULE_5__["CouncilVoteService"]])
    ], CouncilMotionDetailComponent);
    return CouncilMotionDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/council-motion-list/council-motion-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/council-motion-list/council-motion-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'Council-motion-list.Council Motions' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-university fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"motions?.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"motions?.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Council-motion-list.Proposal ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Council-motion-list.Created at Block' | translate }}</th>\r\n                                <th>{{ 'Council-motion-list.Member Threshold' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Council-motion-list.Aye votes' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Council-motion-list.Nay votes' | translate }}</th>\r\n                                <th>{{ 'Council-motion-list.Status' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let motion of motions.data; trackBy: motions.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-university\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/council/motion/{{ motion.attributes.proposal_id }}\">{{ motion.attributes.proposal_id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ motion.attributes.created_at_block }}\">{{ motion.attributes.created_at_block }}</a></td>\r\n                                    <td>\r\n                                      {{ motion.attributes.member_threshold }}\r\n                                    </td>\r\n                                    <td class=\"is-hidden-mobile\">{{ motion.attributes.yes_votes_count }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ motion.attributes.no_votes_count }}</td>\r\n                                    <td>\r\n                                      {{ motion.attributes.status }}\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/council/motion/{{ motion.attributes.proposal_id }}\">{{ 'Council-motion-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"motions?.data.length == 0 && !motions.is_loading\">{{ 'Council-motion-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"motions?.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Council-motion-list.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/council-motion-list/council-motion-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/council-motion-list/council-motion-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdW5jaWwtbW90aW9uLWxpc3QvY291bmNpbC1tb3Rpb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/council-motion-list/council-motion-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/council-motion-list/council-motion-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: CouncilMotionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouncilMotionListComponent", function() { return CouncilMotionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_council_motion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/council-motion.service */ "./src/app/services/council-motion.service.ts");




var CouncilMotionListComponent = /** @class */ (function () {
    function CouncilMotionListComponent(councilMotionService, activatedRoute) {
        this.councilMotionService = councilMotionService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    CouncilMotionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    CouncilMotionListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.councilMotionService.all(params).subscribe(function (motions) {
            _this.motions = motions;
        });
    };
    CouncilMotionListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    CouncilMotionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-council-motion-list',
            template: __webpack_require__(/*! ./council-motion-list.component.html */ "./src/app/pages/council-motion-list/council-motion-list.component.html"),
            styles: [__webpack_require__(/*! ./council-motion-list.component.scss */ "./src/app/pages/council-motion-list/council-motion-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_council_motion_service__WEBPACK_IMPORTED_MODULE_3__["CouncilMotionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CouncilMotionListComponent);
    return CouncilMotionListComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section class=\"is-12\" id=\"search\">\r\n            <div class=\"card\">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                      {{ 'DashBoard.Search' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"search\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-content\">\r\n                    <div class=\"content\">\r\n                        <form (ngSubmit)=\"search()\">\r\n                        <div class=\"control has-icons-left has-icons-right\">\r\n                            <input class=\"input is-large\" type=\"text\" [(ngModel)]=\"blockSearchText\" [ngModelOptions]=\"{standalone: true}\" [placeholder]=\"'PlaceHolderSearch' | translate\">\r\n                            <span class=\"icon is-medium is-left\">\r\n                              <i class=\"fa fa-search\"></i>\r\n                            </span>\r\n                            <span class=\"icon is-medium is-right\">\r\n                              <i *ngIf=\"blockSearchText\" class=\"fa fa-check\"></i>\r\n                            </span>\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"info-tiles is-hidden-mobile\">\r\n            <div class=\"tile is-ancestor has-text-centered\">\r\n                <div class=\"tile is-parent is-2-mobile\">\r\n                    <article class=\"tile is-child box\">\r\n                      <a routerLink=\"{{ networkURLPrefix }}/block/\">\r\n                        <div>\r\n                        <span class=\"icon\">\r\n                            <i class=\"fa fa-cube fa-2x\"></i>\r\n                        </span>\r\n                        <p class=\"title\" *ngIf=\"networkstats$ | async as networkstats\">{{ networkstats.attributes.best_block| number: '1.'}}</p>\r\n                        <p class=\"subtitle\">{{ 'DashBoard.Finalized Block' | translate }}</p>\r\n                          </div>\r\n                      </a>\r\n                    </article>\r\n                </div>\r\n                <div class=\"tile is-parent is-2-mobile\">\r\n                    <article class=\"tile is-child box\">\r\n                      <a routerLink=\"{{ networkURLPrefix }}/extrinsic\">\r\n                        <div>\r\n                          <span class=\"icon\">\r\n                              <i class=\"fa fa-file-signature fa-2x\"></i>\r\n                          </span>\r\n                          <p *ngIf=\"networkstats$ | async as networkstats\" class=\"title\">{{ networkstats.attributes.total_signed_extrinsics | number: '1.'}}</p>\r\n                          <p class=\"subtitle\">{{ 'DashBoard.Transactions' | translate }}</p>\r\n                        </div>\r\n                      </a>\r\n                    </article>\r\n                </div>\r\n                <div class=\"tile is-parent is-2-mobile\">\r\n                    <article class=\"tile is-child box\">\r\n                      <a routerLink=\"{{ networkURLPrefix }}/event\">\r\n                        <div>\r\n                          <span class=\"icon\">\r\n                              <i class=\"fa fa-calendar-check fa-2x\"></i>\r\n                          </span>\r\n                          <p class=\"title\" *ngIf=\"networkstats$ | async as networkstats\">{{ networkstats.attributes.total_events_module | number: '1.'}}</p>\r\n                          <p class=\"subtitle\">{{ 'DashBoard.Module Events' | translate }}</p>\r\n                        </div>\r\n                      </a>\r\n                    </article>\r\n                </div>\r\n                <div class=\"tile is-parent is-2-mobile\">\r\n                    <article class=\"tile is-child box\">\r\n                      <a routerLink=\"{{ networkURLPrefix }}/account\">\r\n                        <div>\r\n                          <span class=\"icon\">\r\n                              <i class=\"fa fa-id-card fa-2x\"></i>\r\n                          </span>\r\n                          <p *ngIf=\"networkstats$ | async as networkstats\" class=\"title\">{{ networkstats.attributes.total_accounts }}</p>\r\n                          <p class=\"subtitle\">{{ 'DashBoard.Active Accounts' | translate }}</p>\r\n                        </div>\r\n                      </a>\r\n                    </article>\r\n                </div>\r\n                <div class=\"tile is-parent is-2-mobile\">\r\n                    <article class=\"tile is-child box\">\r\n                      <a routerLink=\"{{ networkURLPrefix }}/runtime\">\r\n                        <div>\r\n                          <span class=\"icon\">\r\n                              <i class=\"fa fa-cogs fa-2x\"></i>\r\n                          </span>\r\n                          <p *ngIf=\"networkstats$ | async as networkstats\" class=\"title\">{{ networkstats.attributes.total_runtimes }}</p>\r\n                          <p class=\"subtitle\">{{ 'DashBoard.Runtime Versions' | translate }}</p>\r\n                        </div>\r\n                      </a>\r\n                    </article>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"columns\">\r\n            <div class=\"column is-6 last-blocks\" id=\"last-blocks\">\r\n                <div class=\"card dashboard-card\">\r\n                  <a routerLink=\"{{ networkURLPrefix }}/block\">\r\n                    <header class=\"card-header\">\r\n                        <p class=\"card-header-title\">\r\n                            {{ 'DashBoard.Last blocks' | translate }}\r\n                        </p>\r\n                        <a [routerLink]=\"\" fragment=\"last-blocks\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                          <span class=\"icon\">\r\n                            <i class=\"fa fa-cube\" aria-hidden=\"true\"></i>\r\n                          </span>\r\n                        </a>\r\n                    </header>\r\n                  </a>\r\n                    <div class=\"card-table\">\r\n                        <div class=\"content\">\r\n                            <table class=\"table is-fullwidth is-striped\">\r\n                                <thead>\r\n                                  <tr>\r\n                                    <th></th>\r\n                                    <th>{{ 'DashBoard.Number' | translate }}</th>\r\n                                    <th class=\"is-hidden-mobile\">{{ 'DashBoard.Age' | translate }}</th>\r\n                                    <th>{{ 'DashBoard.Transactions' | translate }}</th>\r\n                                    <th>{{ 'DashBoard.Module Events' | translate }}</th>\r\n                                    <th></th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"blocks\">\r\n                                    <tr *ngFor=\"let block of blocks.data; trackBy: blocks.trackBy\">\r\n                                        <td width=\"5%\"><i class=\"fa fa-cube\"></i></td>\r\n                                        <td width=\"10%\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ block.id }}\">{{ block.id }}</a></td>\r\n                                        <td class=\"is-hidden-mobile\"><span rel=\"tooltip\" title=\"{{ block.attributes.datetime | date:'medium'}}\">{{ block.attributes.datetime | timeago }}</span></td>\r\n                                        <td>{{ block.attributes.count_extrinsics_signed }}</td>\r\n                                        <td>{{ block.attributes.count_events_module }}</td>\r\n                                        <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/block/{{ block.id }}\">{{ 'DashBoard.Details' | translate }}</a></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"column is-6 last-transfers\" id=\"last-transfers\">\r\n              <div class=\"card dashboard-card\">\r\n                  <a routerLink=\"{{ networkURLPrefix }}/balances/transfer\">\r\n                    <header class=\"card-header\">\r\n                        <p class=\"card-header-title\">\r\n                            {{ 'DashBoard.Last balance transfers' | translate }}\r\n                        </p>\r\n                        <a [routerLink]=\"\" fragment=\"last-transfers\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                          <span class=\"icon\">\r\n                            <i class=\"fa fa-exchange-alt\" aria-hidden=\"true\"></i>\r\n                          </span>\r\n                        </a>\r\n                    </header>\r\n                  </a>\r\n                    <div class=\"card-table\">\r\n                        <div class=\"content\">\r\n                            <table class=\"table is-fullwidth is-striped\">\r\n                                <thead>\r\n                                  <tr>\r\n                                    <th></th>\r\n                                    <th>{{ 'DashBoard.Destination' | translate }}</th>\r\n                                    <th>{{ 'DashBoard.Amount' | translate }}</th>\r\n                                    <th></th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody *ngIf=\"balanceTransfers\">\r\n                                    <tr *ngFor=\"let balanceTransfer of balanceTransfers.data; trackBy: balanceTransfers.trackBy\">\r\n                                        <td width=\"5%\"><i class=\"fa fa-exchange-alt\"></i></td>\r\n                                        <td><a routerLink=\"{{ networkURLPrefix }}/account/{{balanceTransfer.attributes.destination}}\" class=\"address-format\"><app-identicon [accountId]=\"balanceTransfer.attributes.destination_id\"></app-identicon>{{ balanceTransfer.attributes.destination }}</a></td>\r\n                                        <td>{{ formatBalance(balanceTransfer.attributes.value) | number:'1.0-15' }} {{ networkTokenSymbol }}</td>\r\n                                        <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/balances/transfer/{{ balanceTransfer.id }}\">{{ 'DashBoard.Details' | translate }}</a></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".last-blocks {\n  padding-left: 0; }\n\n.last-transfers {\n  padding-right: 0; }\n\n@media screen and (max-width: 1088px) {\n  .last-blocks {\n    padding-right: 0; }\n  .last-transfers {\n    padding-left: 0; } }\n\n.dashboard-card .card-table {\n  max-height: 250px;\n  overflow-y: scroll; }\n\n.info-tiles a {\n  color: #4a4a4a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0o6XFxwcm9qZWN0c1xccG9sa2FzY2FuLXByZS1leHBsb3Jlci1ndWkvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFRTtJQUNFLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCOztBQUlIO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFzdC1ibG9ja3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmxhc3QtdHJhbnNmZXJzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4OHB4KSB7XHJcblxyXG4gIC5sYXN0LWJsb2NrcyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmxhc3QtdHJhbnNmZXJzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQgLmNhcmQtdGFibGUge1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmluZm8tdGlsZXMgYSB7XHJcbiAgY29sb3I6ICM0YTRhNGE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_block_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/block.service */ "./src/app/services/block.service.ts");
/* harmony import */ var _services_networkstats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/networkstats.service */ "./src/app/services/networkstats.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_balance_transfer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/balance-transfer.service */ "./src/app/services/balance-transfer.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * dashboard.component.ts
 */









var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(blockService, balanceTransferService, networkstatsService, router, http) {
        this.blockService = blockService;
        this.balanceTransferService = balanceTransferService;
        this.networkstatsService = networkstatsService;
        this.router = router;
        this.http = http;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkURLPrefix = '';
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].networkTokenSymbol;
        this.getBlocks();
        this.networkstats$ = this.networkstatsService.get('latest');
        var blockUpdateCounter = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(6000);
        this.blockUpdateSubsription = blockUpdateCounter.subscribe(function (n) {
            _this.networkstats$ = _this.networkstatsService.get('latest');
            _this.getBlocks();
        });
    };
    DashboardComponent.prototype.getBlocks = function () {
        var _this = this;
        this.blockService.all({
            page: { number: 0 }
        }).subscribe(function (blocks) { return (_this.blocks = blocks); });
        this.balanceTransferService.all({
            page: { number: 0 }
        }).subscribe(function (balanceTransfers) { return (_this.balanceTransfers = balanceTransfers); });
    };
    DashboardComponent.prototype.search = function () {
        // Strip whitespace from search text
        this.blockSearchText = this.blockSearchText.trim();
        if (this.blockSearchText !== '') {
            this.router.navigate([this.networkURLPrefix, 'analytics', 'search', this.blockSearchText]);
        }
    };
    DashboardComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.blockUpdateSubsription.unsubscribe();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_block_service__WEBPACK_IMPORTED_MODULE_3__["BlockService"],
            _services_balance_transfer_service__WEBPACK_IMPORTED_MODULE_7__["BalanceTransferService"],
            _services_networkstats_service__WEBPACK_IMPORTED_MODULE_4__["NetworkstatsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/democracy-proposal-detail/democracy-proposal-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/democracy-proposal-detail/democracy-proposal-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"proposal$ | async as proposal\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'Democracy-proposal-detail.Democracy Proposal' | translate }} #{{ proposal.attributes.id }}\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-poll fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"proposal\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-proposal-detail.Created at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ proposal.attributes.created_at_block }}\">{{ proposal.attributes.created_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-proposal-detail.Updated at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ proposal.attributes.updated_at_block }}\">{{ proposal.attributes.updated_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-proposal-detail.Module' | translate }}</td>\r\n                                <td>\r\n                                  {{ proposal.attributes.proposal?.call_module }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-proposal-detail.Call' | translate }}</td>\r\n                                <td>\r\n                                  {{ proposal.attributes.proposal?.call_name }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-proposal-detail.Parameters' | translate }}</td>\r\n                                <td>\r\n                                  <app-struct\r\n                                    [struct]=\"proposal.attributes.proposal?.params\"\r\n                                    [networkTokenDecimals]=\"networkTokenDecimals\"\r\n                                    [networkTokenSymbol]=\"networkTokenSymbol\"\r\n                                    [networkURLPrefix]=\"networkURLPrefix\"\r\n                                  ></app-struct>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-proposal-detail.Bond' | translate }}</td>\r\n                                <td>\r\n                                  {{ formatBalance(proposal.attributes.bond) | number}} {{ networkTokenSymbol }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-proposal-detail.Status' | translate }}</td>\r\n                                <td>\r\n                                  {{ proposal.attributes.status }}\r\n                                </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/democracy-proposal-detail/democracy-proposal-detail.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/democracy-proposal-detail/democracy-proposal-detail.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbW9jcmFjeS1wcm9wb3NhbC1kZXRhaWwvZGVtb2NyYWN5LXByb3Bvc2FsLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/democracy-proposal-detail/democracy-proposal-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/democracy-proposal-detail/democracy-proposal-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DemocracyProposalDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemocracyProposalDetailComponent", function() { return DemocracyProposalDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_democracy_proposal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/democracy-proposal.service */ "./src/app/services/democracy-proposal.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var DemocracyProposalDetailComponent = /** @class */ (function () {
    function DemocracyProposalDetailComponent(activatedRoute, democracyProposalService) {
        this.activatedRoute = activatedRoute;
        this.democracyProposalService = democracyProposalService;
    }
    DemocracyProposalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenSymbol;
        this.proposal$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.democracyProposalService.get(params.get('id'));
        }));
    };
    DemocracyProposalDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    DemocracyProposalDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-democracy-proposal-detail',
            template: __webpack_require__(/*! ./democracy-proposal-detail.component.html */ "./src/app/pages/democracy-proposal-detail/democracy-proposal-detail.component.html"),
            styles: [__webpack_require__(/*! ./democracy-proposal-detail.component.scss */ "./src/app/pages/democracy-proposal-detail/democracy-proposal-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_democracy_proposal_service__WEBPACK_IMPORTED_MODULE_4__["DemocracyProposalService"]])
    ], DemocracyProposalDetailComponent);
    return DemocracyProposalDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/democracy-proposal-list/democracy-proposal-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/democracy-proposal-list/democracy-proposal-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'Democracy-proposal-list.Democracy Proposals' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-poll fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!proposals || proposals.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"proposals && proposals.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Democracy-proposal-list.Proposal ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Democracy-proposal-list.Created at Block' | translate }}</th>\r\n                                <th>{{ 'Democracy-proposal-list.Status' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let proposal of proposals.data; trackBy: proposals.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-poll\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/democracy/proposal/{{ proposal.attributes.id }}\">{{ proposal.attributes.id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ proposal.attributes.created_at_block }}\">{{ proposal.attributes.created_at_block }}</a></td>\r\n                                    <td>\r\n                                      {{ proposal.attributes.status }}\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/democracy/proposal/{{ proposal.attributes.id }}\">{{ 'Democracy-proposal-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"proposals && proposals.data.length == 0 && !proposals.is_loading\">{{ 'Democracy-proposal-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"proposals && proposals.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Democracy-proposal-list.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/democracy-proposal-list/democracy-proposal-list.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/democracy-proposal-list/democracy-proposal-list.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbW9jcmFjeS1wcm9wb3NhbC1saXN0L2RlbW9jcmFjeS1wcm9wb3NhbC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/democracy-proposal-list/democracy-proposal-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/democracy-proposal-list/democracy-proposal-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: DemocracyProposalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemocracyProposalListComponent", function() { return DemocracyProposalListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_democracy_proposal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/democracy-proposal.service */ "./src/app/services/democracy-proposal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DemocracyProposalListComponent = /** @class */ (function () {
    function DemocracyProposalListComponent(democracyProposalService, activatedRoute) {
        this.democracyProposalService = democracyProposalService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    DemocracyProposalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    DemocracyProposalListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.democracyProposalService.all(params).subscribe(function (proposals) {
            _this.proposals = proposals;
        });
    };
    DemocracyProposalListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    DemocracyProposalListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-democracy-proposal-list',
            template: __webpack_require__(/*! ./democracy-proposal-list.component.html */ "./src/app/pages/democracy-proposal-list/democracy-proposal-list.component.html"),
            styles: [__webpack_require__(/*! ./democracy-proposal-list.component.scss */ "./src/app/pages/democracy-proposal-list/democracy-proposal-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_democracy_proposal_service__WEBPACK_IMPORTED_MODULE_2__["DemocracyProposalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DemocracyProposalListComponent);
    return DemocracyProposalListComponent;
}());



/***/ }),

/***/ "./src/app/pages/democracy-referendum-detail/democracy-referendum-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/democracy-referendum-detail/democracy-referendum-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"referendum$ | async as referendum\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'Democracy-referendum-detail.Democracy referendum' | translate }} #{{ referendum.attributes.id }}\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-person-booth fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"referendum\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-referendum-detail.Created at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ referendum.attributes.created_at_block }}\">{{ referendum.attributes.created_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-referendum-detail.Updated at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ referendum.attributes.updated_at_block }}\">{{ referendum.attributes.updated_at_block }}</a></td>\r\n                              </tr>\r\n                              <ng-container *ngIf=\"referendum.attributes.proposal\">\r\n                                <tr>\r\n                                  <td>{{ 'Democracy-referendum-detail.Delay' | translate }}</td>\r\n                                  <td>{{ referendum.attributes.proposal.delay }}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td>{{ 'Democracy-referendum-detail.End' | translate }}</td>\r\n                                  <td><a routerLink=\"{{ networkURLPrefix }}/block/{{ referendum.attributes.proposal.end }}\">{{ referendum.attributes.proposal.end }}</a></td>\r\n                                </tr>\r\n                              </ng-container>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-referendum-detail.Vote Threshold' | translate }}</td>\r\n                                <td>\r\n                                  {{ referendum.attributes.vote_threshold }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Democracy-referendum-detail.Status' | translate }}</td>\r\n                                <td>\r\n                                  {{ referendum.attributes.status }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"15%\">{{ 'Democracy-referendum-detail.Result' | translate }}</td>\r\n                                <td>\r\n                                  <i *ngIf=\"referendum.attributes.success === true\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"referendum.attributes.success === false\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section class=\"info-tiles\" *ngIf=\"referendum\">\r\n          <div class=\"card \">\r\n            <div class=\"tabs\">\r\n              <ul>\r\n                <li [ngClass]=\"{'is-active': currentTab == 'proposal'}\">\r\n                  <a routerLink=\".\" fragment=\"proposal\">\r\n                    <span class=\"icon is-small\"><i class=\"fas fa-poll\" aria-hidden=\"true\"></i></span>\r\n                    <span>{{ 'Democracy-referendum-detail.Proposal' | translate }}</span>\r\n                  </a>\r\n                </li>\r\n                <li [ngClass]=\"{'is-active': currentTab == 'votes'}\">\r\n                  <a routerLink=\".\" fragment=\"votes\">\r\n                    <span class=\"icon is-small\"><i class=\"fas fa-vote-yea\" aria-hidden=\"true\"></i></span>\r\n                    <span>{{ 'Democracy-referendum-detail.Votes' | translate }}</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n\r\n            <div class=\"card-table\" id=\"proposal\" *ngIf=\"currentTab == 'proposal'\">\r\n                <div class=\"content\">\r\n                  <table class=\"table is-striped\" *ngIf=\"referendum.attributes.proposal?.proposal\">\r\n                  <tbody>\r\n                    <tr *ngIf=\"referendum.attributes.proposal.proposal.call_documentation\">\r\n                      <td>{{ 'Proposal.Description' | translate}}</td>\r\n                      <td>{{ referendum.attributes.proposal.proposal.call_documentation }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>{{ 'Proposal.Module' | translate }}</td>\r\n                      <td>{{ referendum.attributes.proposal.proposal.call_module }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>{{ 'Proposal.Call' | translate }}</td>\r\n                      <td>{{ referendum.attributes.proposal.proposal.call_name }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>{{ 'Proposal.Parameters' | translate }}</td>\r\n                      <td>\r\n                        <app-struct\r\n                          [struct]=\"referendum.attributes.proposal.proposal.params\"\r\n                          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n                          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n                          [networkURLPrefix]=\"networkURLPrefix\"\r\n                        ></app-struct>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n                  <table class=\"table is-striped\" *ngIf=\"referendum.attributes.proposal?.proposalHash\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>{{ 'Democracy-referendum-detail.Proposal Hash' | translate }}</td>\r\n                      <td>{{ referendum.attributes.proposal?.proposalHash }}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-table\" id=\"votes\" *ngIf=\"currentTab == 'votes'\">\r\n                <div class=\"content\">\r\n                    <table class=\"table is-fullwidth is-striped\">\r\n                         <thead>\r\n                          <tr>\r\n                            <th></th>\r\n                            <th>{{ 'Democracy-referendum-detail.Account' | translate }}</th>\r\n                            <th class=\"is-hidden-mobile\">{{ 'Democracy-referendum-detail.Stash' | translate }}</th>\r\n                            <th>{{ 'Democracy-referendum-detail.Vote' | translate }}</th>\r\n                            <th class=\"is-hidden-mobile\">{{ 'Democracy-referendum-detail.Block' | translate }}</th>\r\n                            <th></th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let vote of referendum.relationships.votes.data; trackBy: referendum.relationships.votes.trackBy\">\r\n                                <td width=\"5%\">\r\n                                  <i class=\"fa fa-vote-yea\"></i>\r\n                                </td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ vote.attributes.stash_address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"vote.attributes.stash_account_id\"></app-identicon> {{ vote.attributes.stash_address }}</a></td>\r\n                                <td class=\"is-hidden-mobile\">{{ formatBalance(vote.attributes.stash) | number}} {{ networkTokenSymbol }}</td>\r\n                                <td>\r\n                                  <i *ngIf=\"vote.attributes.vote_yes\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"vote.attributes.vote_no\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                                <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ vote.attributes.updated_at_block }}\">{{ vote.attributes.updated_at_block }}</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/democracy-referendum-detail/democracy-referendum-detail.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/democracy-referendum-detail/democracy-referendum-detail.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbW9jcmFjeS1yZWZlcmVuZHVtLWRldGFpbC9kZW1vY3JhY3ktcmVmZXJlbmR1bS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/democracy-referendum-detail/democracy-referendum-detail.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/democracy-referendum-detail/democracy-referendum-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DemocracyReferendumDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemocracyReferendumDetailComponent", function() { return DemocracyReferendumDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_democracy_referendum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/democracy-referendum.service */ "./src/app/services/democracy-referendum.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_democracy_vote_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/democracy-vote.service */ "./src/app/services/democracy-vote.service.ts");







var DemocracyReferendumDetailComponent = /** @class */ (function () {
    function DemocracyReferendumDetailComponent(activatedRoute, router, democracyReferendumService, democracyVoteService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.democracyReferendumService = democracyReferendumService;
        this.democracyVoteService = democracyVoteService;
    }
    DemocracyReferendumDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentTab = 'proposal';
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenSymbol;
        this.referendum$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.democracyReferendumService.get(params.get('id'), { include: ['votes'] });
        }));
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (value === 'proposal' || value === 'votes') {
                _this.currentTab = value;
            }
        });
    };
    DemocracyReferendumDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    DemocracyReferendumDetailComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    DemocracyReferendumDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-democracy-referendum-detail',
            template: __webpack_require__(/*! ./democracy-referendum-detail.component.html */ "./src/app/pages/democracy-referendum-detail/democracy-referendum-detail.component.html"),
            styles: [__webpack_require__(/*! ./democracy-referendum-detail.component.scss */ "./src/app/pages/democracy-referendum-detail/democracy-referendum-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_democracy_referendum_service__WEBPACK_IMPORTED_MODULE_4__["DemocracyReferendumService"],
            _services_democracy_vote_service__WEBPACK_IMPORTED_MODULE_6__["DemocracyVoteService"]])
    ], DemocracyReferendumDetailComponent);
    return DemocracyReferendumDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/democracy-referendum-list/democracy-referendum-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/democracy-referendum-list/democracy-referendum-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'Democracy-referendum-list.Democracy Referenda' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-person-booth fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"referenda?.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"referenda?.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Democracy-referendum-list.Referendum ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Democracy-referendum-list.Created at Block' | translate }}</th>\r\n                                <th>{{ 'Democracy-referendum-list.Vote Threshold' | translate }}</th>\r\n                                <th>{{ 'Democracy-referendum-list.Status' | translate }}</th>\r\n                                <th>{{ 'Democracy-referendum-list.Success' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let referendum of referenda.data; trackBy: referenda.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-person-booth\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/democracy/referendum/{{ referendum.attributes.id }}\">{{ referendum.attributes.id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ referendum.attributes.created_at_block }}\">{{ referendum.attributes.created_at_block }}</a></td>\r\n                                    <td>\r\n                                      {{ referendum.attributes.vote_threshold }}\r\n                                    </td>\r\n                                    <td>\r\n                                      {{ referendum.attributes.status }}\r\n                                    </td>\r\n                                    <td>\r\n                                      <i *ngIf=\"referendum.attributes.success === true\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"referendum.attributes.success === false\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/democracy/referendum/{{ referendum.attributes.id }}\">{{ 'Democracy-referendum-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"referenda?.data.length == 0 && !referenda.is_loading\">{{ 'Democracy-referendum-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"referenda?.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Democracy-referendum-list.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/democracy-referendum-list/democracy-referendum-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/democracy-referendum-list/democracy-referendum-list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbW9jcmFjeS1yZWZlcmVuZHVtLWxpc3QvZGVtb2NyYWN5LXJlZmVyZW5kdW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/democracy-referendum-list/democracy-referendum-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/democracy-referendum-list/democracy-referendum-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DemocracyReferendumListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemocracyReferendumListComponent", function() { return DemocracyReferendumListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_democracy_referendum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/democracy-referendum.service */ "./src/app/services/democracy-referendum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DemocracyReferendumListComponent = /** @class */ (function () {
    function DemocracyReferendumListComponent(democracyReferendumService, activatedRoute) {
        this.democracyReferendumService = democracyReferendumService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    DemocracyReferendumListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    DemocracyReferendumListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.democracyReferendumService.all(params).subscribe(function (referenda) {
            _this.referenda = referenda;
        });
    };
    DemocracyReferendumListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    DemocracyReferendumListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-democracy-referendum-list',
            template: __webpack_require__(/*! ./democracy-referendum-list.component.html */ "./src/app/pages/democracy-referendum-list/democracy-referendum-list.component.html"),
            styles: [__webpack_require__(/*! ./democracy-referendum-list.component.scss */ "./src/app/pages/democracy-referendum-list/democracy-referendum-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_democracy_referendum_service__WEBPACK_IMPORTED_MODULE_2__["DemocracyReferendumService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DemocracyReferendumListComponent);
    return DemocracyReferendumListComponent;
}());



/***/ }),

/***/ "./src/app/pages/event-detail/event-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n       <section class=\"info-tiles\">\r\n        <app-event-table\r\n          [event]=\"event$ | async\"\r\n          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n        ></app-event-table>\r\n       </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/event-detail/event-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/event-detail/event-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/event-detail/event-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(route, eventService) {
        this.route = route;
        this.eventService = eventService;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenSymbol;
        this.event$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.eventService.get(params.get('id'));
        }));
    };
    EventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/pages/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.scss */ "./src/app/pages/event-detail/event-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/event-list/event-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/event-list/event-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <div class=\"card-header-title\">\r\n                        <p>{{ 'Event-list.Events' | translate }}</p>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"card-header-icon\">\r\n                      <div class=\"filters\">\r\n                        <div class=\"field has-addons\">\r\n                          <div class=\"control is-expanded has-icons-left\">\r\n                            <div class=\"select is-fullwidth\">\r\n                              <select name=\"country\" [(ngModel)]=\"filterModule\" (ngModelChange)=\"selectModule($event)\">\r\n                                <option [ngValue]=\"null\">{{ 'Event-list.All modules' | translate }}</option>\r\n                                <option *ngFor=\"let module of runtimeModules.data\" [ngValue]=\"module\">{{module.attributes.name}}</option>\r\n                              </select>\r\n                            </div>\r\n                            <span class=\"icon is-small is-left\">\r\n                              <i class=\"fas fa-cog\"></i>\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"control is-expanded has-icons-left\">\r\n                            <div class=\"select is-fullwidth\">\r\n                              <select name=\"country\" [(ngModel)]=\"filterEvent\" [disabled]=\"!runtimeEvents\">\r\n                                <option [ngValue]=\"null\">{{ 'Event-list.All events' | translate }}</option>\r\n                                <ng-container *ngIf=\"runtimeEvents\">\r\n                                <option *ngFor=\"let event of runtimeEvents.data\" [ngValue]=\"event\">{{ event.attributes.name }}</option>\r\n                                </ng-container>\r\n                              </select>\r\n                            </div>\r\n                            <span class=\"icon is-small is-left\">\r\n                              <i class=\"fas fa-file-alt\"></i>\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"control\">\r\n                            <button type=\"submit\" class=\"button\" (click)=\"applyFilters()\">{{ 'Event-list.Filter' | translate }}</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <a [routerLink]=\"\" fragment=\"list\"  aria-label=\"more options\">\r\n                        <span class=\"icon\">\r\n                          <i class=\"fa fa-calendar-check fa-2x\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!events || events.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"events && events.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Event-list.Event ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Event-list.Block' | translate }}</th>\r\n                                <th>{{ 'Event-list.Module' | translate }}</th>\r\n                                <th>{{ 'Event-list.Event' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let event of events.data; trackBy: events.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-calendar-check\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/event/{{ event.id }}\">{{ event.id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ event.attributes.block_id }}\">{{ event.attributes.block_id }}</a></td>\r\n                                    <td>{{ event.attributes.module_id }}</td>\r\n                                    <td>{{ event.attributes.event_id }}</td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/event/{{ event.id }}\">{{ 'Event-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"events && events.data.length == 0 && !events.is_loading\">{{ 'Event-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                 <footer class=\"card-footer\" *ngIf=\"events && events.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Event-list.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/event-list/event-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/event-list/event-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filters {\n  margin-right: 30px;\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnQtbGlzdC9KOlxccHJvamVjdHNcXHBvbGthc2Nhbi1wcmUtZXhwbG9yZXItZ3VpL3NyY1xcYXBwXFxwYWdlc1xcZXZlbnQtbGlzdFxcZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/event-list/event-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/event-list/event-list.component.ts ***!
  \**********************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/runtime-module.service */ "./src/app/services/runtime-module.service.ts");
/* harmony import */ var _services_runtime_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/runtime-event.service */ "./src/app/services/runtime-event.service.ts");






var EventListComponent = /** @class */ (function () {
    function EventListComponent(eventService, runtimeModuleService, runtimeEventService, activatedRoute) {
        this.eventService = eventService;
        this.runtimeModuleService = runtimeModuleService;
        this.runtimeEventService = runtimeEventService;
        this.activatedRoute = activatedRoute;
        this.filterModule = null;
        this.filterEvent = null;
        this.currentPage = 1;
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Fetch runtime modules for filtering
        var params = {
            remotefilter: { latestRuntime: true },
        };
        this.runtimeModuleService.all(params).subscribe(function (runtimeModules) {
            _this.runtimeModules = runtimeModules;
        });
        // store paging as location fragment
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getEvents(_this.currentPage);
        });
    };
    EventListComponent.prototype.selectModule = function (module) {
        var _this = this;
        this.filterModule = module;
        this.filterEvent = null;
        if (module !== null) {
            var params = {
                page: { number: 0, size: 100 },
                remotefilter: { latestRuntime: true, module_id: this.filterModule.attributes.module_id },
            };
            this.runtimeEventService.all(params).subscribe(function (runtimeEvents) {
                _this.runtimeEvents = runtimeEvents;
            });
        }
        else {
            this.runtimeEvents = null;
        }
    };
    EventListComponent.prototype.applyFilters = function () {
        this.currentPage = 1;
        this.getEvents(this.currentPage);
    };
    EventListComponent.prototype.getEvents = function (page) {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {}
        };
        if (this.filterModule !== null) {
            // @ts-ignore
            params.remotefilter.module_id = this.filterModule.attributes.module_id;
        }
        if (this.filterEvent !== null) {
            // @ts-ignore
            params.remotefilter.event_id = this.filterEvent.attributes.event_id;
        }
        this.eventService.all(params).subscribe(function (events) { return (_this.events = events); });
    };
    EventListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    EventListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/pages/event-list/event-list.component.html"),
            styles: [__webpack_require__(/*! ./event-list.component.scss */ "./src/app/pages/event-list/event-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_4__["RuntimeModuleService"],
            _services_runtime_event_service__WEBPACK_IMPORTED_MODULE_5__["RuntimeEventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "./src/app/pages/extrinsic-detail/extrinsic-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/extrinsic-detail/extrinsic-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n       <section class=\"info-tiles\">\r\n        <app-extrinsic-table\r\n          [extrinsic]=\"extrinsic$ | async\"\r\n          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n        ></app-extrinsic-table>\r\n       </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/extrinsic-detail/extrinsic-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/extrinsic-detail/extrinsic-detail.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4dHJpbnNpYy1kZXRhaWwvZXh0cmluc2ljLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/extrinsic-detail/extrinsic-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/extrinsic-detail/extrinsic-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExtrinsicDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrinsicDetailComponent", function() { return ExtrinsicDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic-detail.component.ts
 */






var ExtrinsicDetailComponent = /** @class */ (function () {
    function ExtrinsicDetailComponent(route, extrinsicService) {
        this.route = route;
        this.extrinsicService = extrinsicService;
    }
    ExtrinsicDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenSymbol;
        this.extrinsic$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.extrinsicService.get(params.get('id'));
        }));
    };
    ExtrinsicDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extrinsic-detail',
            template: __webpack_require__(/*! ./extrinsic-detail.component.html */ "./src/app/pages/extrinsic-detail/extrinsic-detail.component.html"),
            styles: [__webpack_require__(/*! ./extrinsic-detail.component.scss */ "./src/app/pages/extrinsic-detail/extrinsic-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_4__["ExtrinsicService"]])
    ], ExtrinsicDetailComponent);
    return ExtrinsicDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/extrinsic-list/extrinsic-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/extrinsic-list/extrinsic-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'Extrinsic-list.Extrinsics' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-file-alt fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                  <table class=\"table is-fullwidth is-striped\">\r\n                    <tbody>\r\n                    <tr>\r\n                      <td><div class=\"field\">\r\n                        <div class=\"control\">\r\n                          <label class=\"checkbox\">\r\n                            <input type=\"checkbox\" [value]=\"true\" [(ngModel)]=\"signedOnly\" (ngModelChange)=\"refreshExtrinsics()\"> {{ 'Extrinsic-list.Signed only' | translate }}\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!extrinsics || extrinsics.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"extrinsics && extrinsics.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Extrinsic-list.Extrinsic ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Extrinsic-list.Block' | translate }}</th>\r\n                                <th>{{ 'Extrinsic-list.Module' | translate }}</th>\r\n                                <th>{{ 'Extrinsic-list.Call' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Extrinsic-list.Signed' | translate }}</th>\r\n                                <th>{{ 'Extrinsic-list.Success' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let extrinsic of extrinsics.data; trackBy: extrinsics.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i *ngIf=\"extrinsic.attributes.signed\" class=\"fa fa-file-signature\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.unsigned\" class=\"fa fa-file-alt\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/extrinsic/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ extrinsic.id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ extrinsic.attributes.block_id }}\">{{ extrinsic.attributes.block_id }}</a></td>\r\n                                    <td>{{ extrinsic.attributes.module_id }}</td>\r\n                                    <td>{{ extrinsic.attributes.call_id }}</td>\r\n                                    <td class=\"is-hidden-mobile\"><span *ngIf=\"extrinsic.attributes.signed\">{{ 'Extrinsic-list.Yes' | translate }}</span><span *ngIf=\"!extrinsic.attributes.signed\">{{ 'Extrinsic-list.No' | translate }}</span></td>\r\n                                    <td>\r\n                                      <i *ngIf=\"extrinsic.attributes.success\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.error\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/extrinsic/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ 'Extrinsic-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"extrinsics && extrinsics.data.length == 0 && !extrinsics.is_loading\">{{ 'Extrinsic-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\">\r\n                    <a (click)=\"getNextExtrinsics()\" class=\"card-footer-item\">{{ 'Extrinsic-list.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/extrinsic-list/extrinsic-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/extrinsic-list/extrinsic-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Polkascan PRE Explorer GUI\r\n *\r\n * Copyright 2018-2019 openAware BV (NL).\r\n * This file is part of Polkascan.\r\n *\r\n * Polkascan is free software: you can redistribute it and/or modify\r\n * it under the terms of the GNU General Public License as published by\r\n * the Free Software Foundation, either version 3 of the License, or\r\n * (at your option) any later version.\r\n *\r\n * Polkascan is distributed in the hope that it will be useful,\r\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\r\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r\n * GNU General Public License for more details.\r\n *\r\n * You should have received a copy of the GNU General Public License\r\n * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.\r\n *\r\n * extrinsic-list.component.scss\r\n *\r\n */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXh0cmluc2ljLWxpc3QvSjpcXHByb2plY3RzXFxwb2xrYXNjYW4tcHJlLWV4cGxvcmVyLWd1aS9zcmNcXGFwcFxccGFnZXNcXGV4dHJpbnNpYy1saXN0XFxleHRyaW5zaWMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXh0cmluc2ljLWxpc3QvZXh0cmluc2ljLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ3FCRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4dHJpbnNpYy1saXN0L2V4dHJpbnNpYy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIFBvbGthc2NhbiBQUkUgRXhwbG9yZXIgR1VJXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgb3BlbkF3YXJlIEJWIChOTCkuXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIFBvbGthc2Nhbi5cclxuICpcclxuICogUG9sa2FzY2FuIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcclxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICpcclxuICogUG9sa2FzY2FuIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCBQb2xrYXNjYW4uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuICpcclxuICogZXh0cmluc2ljLWxpc3QuY29tcG9uZW50LnNjc3NcclxuICpcclxuICovXHJcblxyXG4iLCIvKiFcclxuICogUG9sa2FzY2FuIFBSRSBFeHBsb3JlciBHVUlcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBvcGVuQXdhcmUgQlYgKE5MKS5cclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgUG9sa2FzY2FuLlxyXG4gKlxyXG4gKiBQb2xrYXNjYW4gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBQb2xrYXNjYW4gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIFBvbGthc2Nhbi4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4gKlxyXG4gKiBleHRyaW5zaWMtbGlzdC5jb21wb25lbnQuc2Nzc1xyXG4gKlxyXG4gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/extrinsic-list/extrinsic-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/extrinsic-list/extrinsic-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ExtrinsicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrinsicListComponent", function() { return ExtrinsicListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic-list.component.ts
 *
 */



var ExtrinsicListComponent = /** @class */ (function () {
    function ExtrinsicListComponent(extrinsicService) {
        this.extrinsicService = extrinsicService;
        this.currentPage = 1;
        this.signedOnly = true;
    }
    ExtrinsicListComponent.prototype.ngOnInit = function () {
        this.getExtrinsics(this.currentPage, this.signedOnly);
    };
    ExtrinsicListComponent.prototype.getExtrinsics = function (page, signedOnly) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        if (this.signedOnly) {
            // tslint:disable-next-line:no-string-literal
            params['remotefilter']['signed'] = 1;
        }
        this.extrinsicService.all(params).subscribe(function (extrinsics) {
            _this.extrinsics = extrinsics;
        });
    };
    ExtrinsicListComponent.prototype.refreshExtrinsics = function () {
        this.getExtrinsics(this.currentPage, this.signedOnly);
    };
    ExtrinsicListComponent.prototype.getNextExtrinsics = function () {
        this.currentPage += 1;
        this.refreshExtrinsics();
    };
    ExtrinsicListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extrinsic-list',
            template: __webpack_require__(/*! ./extrinsic-list.component.html */ "./src/app/pages/extrinsic-list/extrinsic-list.component.html"),
            styles: [__webpack_require__(/*! ./extrinsic-list.component.scss */ "./src/app/pages/extrinsic-list/extrinsic-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_extrinsic_service__WEBPACK_IMPORTED_MODULE_2__["ExtrinsicService"]])
    ], ExtrinsicListComponent);
    return ExtrinsicListComponent;
}());



/***/ }),

/***/ "./src/app/pages/harvester-admin/harvester-admin.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/harvester-admin/harvester-admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n       <app-polkascan-header></app-polkascan-header>\r\n        <section class=\"info-tiles\">\r\n            <div class=\"tile is-ancestor has-text-centered\">\r\n                <div class=\"tile is-parent\">\r\n                    <article class=\"tile is-child box\">\r\n                        <span class=\"icon\">\r\n                            <i class=\"fa fa-cube fa-2x\"></i>\r\n                        </span>\r\n                        <p class=\"title\" *ngIf=\"networkstats$ | async as networkstats\">{{ networkstats.attributes.best_block| number: '1.'}}</p>\r\n                        <p class=\"subtitle\">{{ 'Harvester-admin.Harvester Head' | translate }}</p>\r\n                    </article>\r\n                </div>\r\n                <div class=\"tile is-parent is-2-tablet\">\r\n                    <article class=\"tile is-child box\">\r\n                        <span class=\"icon\">\r\n                            <i class=\"fa fa-cubes fa-2x\"></i>\r\n                        </span>\r\n                        <p *ngIf=\"networkstats$ | async as networkstats\" class=\"title\">{{ networkstats.attributes.total_blocks | number: '1.'}}</p>\r\n                        <p class=\"subtitle\">{{ 'Harvester-admin.Blocks harvested' | translate }}</p>\r\n                    </article>\r\n                </div>\r\n                <div class=\"tile is-parent is-2-tablet\">\r\n                    <article class=\"tile is-child box\">\r\n                        <span class=\"icon\">\r\n                            <i class=\"fa fa-percentage fa-2x\"></i>\r\n                        </span>\r\n                        <p class=\"title\" *ngIf=\"networkstats$ | async as networkstats\">{{ ((networkstats.attributes.total_blocks / (networkstats.attributes.best_block + 1)) * 100) | number: '1.2'}}</p>\r\n                        <p class=\"subtitle\">{{ 'Harvester-admin.Progress' | translate }}</p>\r\n                    </article>\r\n                </div>\r\n                <div class=\"tile is-parent is-2-tablet\">\r\n                    <article class=\"tile is-child box\">\r\n                        <span class=\"icon\">\r\n                            <i class=\"fa fa-cogs fa-2x\"></i>\r\n                        </span>\r\n                        <p class=\"title\">{{ 'Harvester-admin.Running' | translate }}</p>\r\n                        <p class=\"subtitle\"><button (click)=\"startHarvester()\" class=\"button is-primary\">{{ 'Harvester-admin.Start' | translate }}</button></p>\r\n                    </article>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n\r\n        <section>\r\n            <app-loading-box *ngIf=\"!harvesterQueue\"></app-loading-box>\r\n\r\n            <div class=\"is-12\" *ngIf=\"harvesterQueue\">\r\n                <div class=\"card events-card\">\r\n                    <header class=\"card-header\">\r\n                        <p class=\"card-header-title\">\r\n                            {{ 'Harvester-admin.Harvester queue' | translate }}\r\n                        </p>\r\n\r\n                    </header>\r\n                    <div class=\"card-table\">\r\n                        <div class=\"content\">\r\n                            <table class=\"table is-fullwidth is-striped\">\r\n                                <thead>\r\n                                  <th></th>\r\n                                  <th>{{ 'Harvester-admin.From' | translate }}</th>\r\n                                  <th>{{ 'Harvester-admin.To' | translate }}</th>\r\n                                <th></th>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of harvesterQueue.data.block_process_queue\">\r\n                                        <td width=\"5%\"><i class=\"fa fa-cube\"></i></td>\r\n                                        <td >#{{ item.from }}</td>\r\n                                        <td >#{{ item.to }}</td>\r\n                                        <td width=\"5%\"></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/harvester-admin/harvester-admin.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/harvester-admin/harvester-admin.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hhcnZlc3Rlci1hZG1pbi9oYXJ2ZXN0ZXItYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/harvester-admin/harvester-admin.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/harvester-admin/harvester-admin.component.ts ***!
  \********************************************************************/
/*! exports provided: HarvesterAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HarvesterAdminComponent", function() { return HarvesterAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_networkstats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/networkstats.service */ "./src/app/services/networkstats.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * harvester-admin.component.ts
 */






var HarvesterAdminComponent = /** @class */ (function () {
    function HarvesterAdminComponent(networkstatsService, httpClient) {
        this.networkstatsService = networkstatsService;
        this.httpClient = httpClient;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
    }
    HarvesterAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkstats$ = this.networkstatsService.get('latest');
        this.harvesterQueue$ = this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].jsonApiRootUrl + 'harvester/status');
        this.harvesterQueue$.subscribe(function (res) {
            _this.harvesterQueue = res;
        });
        var updateCounter = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(20000);
        this.statsUpdateSubsription = updateCounter.subscribe(function (n) { return _this.networkstats$ = _this.networkstatsService.get('latest'); });
    };
    HarvesterAdminComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.statsUpdateSubsription.unsubscribe();
    };
    HarvesterAdminComponent.prototype.startHarvester = function () {
        this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].jsonApiRootUrl + 'harvester/start', {}).subscribe(function (res) {
        });
    };
    HarvesterAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-harvester-admin',
            template: __webpack_require__(/*! ./harvester-admin.component.html */ "./src/app/pages/harvester-admin/harvester-admin.component.html"),
            styles: [__webpack_require__(/*! ./harvester-admin.component.scss */ "./src/app/pages/harvester-admin/harvester-admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_networkstats_service__WEBPACK_IMPORTED_MODULE_3__["NetworkstatsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], HarvesterAdminComponent);
    return HarvesterAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/inherent-detail/inherent-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/inherent-detail/inherent-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n       <section class=\"info-tiles\">\r\n        <app-extrinsic-table\r\n          [extrinsic]=\"extrinsic$ | async\"\r\n          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n          title=\"Inherent\"\r\n        ></app-extrinsic-table>\r\n       </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/inherent-detail/inherent-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/inherent-detail/inherent-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaGVyZW50LWRldGFpbC9pbmhlcmVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/inherent-detail/inherent-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/inherent-detail/inherent-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: InherentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InherentDetailComponent", function() { return InherentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic-detail.component.ts
 */






var InherentDetailComponent = /** @class */ (function () {
    function InherentDetailComponent(route, extrinsicService) {
        this.route = route;
        this.extrinsicService = extrinsicService;
    }
    InherentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenSymbol;
        this.extrinsic$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.extrinsicService.get(params.get('id'));
        }));
    };
    InherentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inherent-detail',
            template: __webpack_require__(/*! ./inherent-detail.component.html */ "./src/app/pages/inherent-detail/inherent-detail.component.html"),
            styles: [__webpack_require__(/*! ./inherent-detail.component.scss */ "./src/app/pages/inherent-detail/inherent-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_4__["ExtrinsicService"]])
    ], InherentDetailComponent);
    return InherentDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/inherent-list/inherent-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/inherent-list/inherent-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <div class=\"card-header-title\">\r\n                        <p>{{ 'Inherent-list.Inherents' | translate }}</p>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"card-header-icon\">\r\n                      <div class=\"filters\">\r\n                        <div class=\"field has-addons\">\r\n                          <div class=\"control is-expanded has-icons-left\">\r\n                            <div class=\"select is-fullwidth\">\r\n                              <select name=\"country\" [(ngModel)]=\"filterModule\" (ngModelChange)=\"selectModule($event)\">\r\n                                <option [ngValue]=\"null\">{{ 'Inherent-list.All modules' | translate }}</option>\r\n                                <option *ngFor=\"let module of runtimeModules.data\" [ngValue]=\"module\">{{module.attributes.name}}</option>\r\n                              </select>\r\n                            </div>\r\n                            <span class=\"icon is-small is-left\">\r\n                              <i class=\"fas fa-cog\"></i>\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"control is-expanded has-icons-left\">\r\n                            <div class=\"select is-fullwidth\">\r\n                              <select name=\"country\" [(ngModel)]=\"filterCall\" [disabled]=\"!runtimeCalls\">\r\n                                <option [ngValue]=\"null\">{{ 'Inherent-list.All calls' | translate }}</option>\r\n                                <ng-container *ngIf=\"runtimeCalls\">\r\n                                <option *ngFor=\"let call of runtimeCalls.data\" [ngValue]=\"call\">{{call.attributes.name}}</option>\r\n                                </ng-container>\r\n                              </select>\r\n                            </div>\r\n                            <span class=\"icon is-small is-left\">\r\n                              <i class=\"fas fa-file-alt\"></i>\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"control\">\r\n                            <button type=\"submit\" class=\"button\" (click)=\"applyFilters()\">{{ 'Inherent-list.Filter' | translate }}</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <a [routerLink]=\"\" fragment=\"list\"  aria-label=\"more options\">\r\n                        <span class=\"icon\">\r\n                          <i class=\"fa fa-file-alt fa-2x\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!extrinsics || extrinsics.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"extrinsics && extrinsics.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Inherent-list.Inherent ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Inherent-list.Block' | translate }}</th>\r\n                                <th>{{ 'Inherent-list.Module' | translate }}</th>\r\n                                <th>{{ 'Inherent-list.Call' | translate }}</th>\r\n                                <th>{{ 'Inherent-list.Success' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let extrinsic of extrinsics.data; trackBy: extrinsics.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i *ngIf=\"extrinsic.attributes.signed\" class=\"fa fa-file-signature\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.unsigned\" class=\"fa fa-file-alt\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/inherent/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ extrinsic.id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ extrinsic.attributes.block_id }}\">{{ extrinsic.attributes.block_id }}</a></td>\r\n                                    <td>{{ extrinsic.attributes.module_id }}</td>\r\n                                    <td>{{ extrinsic.attributes.call_id }}</td>\r\n                                    <td>\r\n                                      <i *ngIf=\"extrinsic.attributes.success\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.error\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/inherent/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ 'Inherent-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"extrinsics && extrinsics.data.length == 0 && !extrinsics.is_loading\">{{ 'Inherent-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"extrinsics && extrinsics.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Global.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/inherent-list/inherent-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/inherent-list/inherent-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filters {\n  margin-right: 30px;\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5oZXJlbnQtbGlzdC9KOlxccHJvamVjdHNcXHBvbGthc2Nhbi1wcmUtZXhwbG9yZXItZ3VpL3NyY1xcYXBwXFxwYWdlc1xcaW5oZXJlbnQtbGlzdFxcaW5oZXJlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaGVyZW50LWxpc3QvaW5oZXJlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/inherent-list/inherent-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/inherent-list/inherent-list.component.ts ***!
  \****************************************************************/
/*! exports provided: InherentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InherentListComponent", function() { return InherentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/runtime-module.service */ "./src/app/services/runtime-module.service.ts");
/* harmony import */ var _services_runtime_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/runtime-call.service */ "./src/app/services/runtime-call.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic-list.component.ts
 *
 */






var InherentListComponent = /** @class */ (function () {
    function InherentListComponent(extrinsicService, runtimeModuleService, runtimeCallService, activatedRoute) {
        this.extrinsicService = extrinsicService;
        this.runtimeModuleService = runtimeModuleService;
        this.runtimeCallService = runtimeCallService;
        this.activatedRoute = activatedRoute;
        this.filterModule = null;
        this.filterCall = null;
        this.currentPage = 1;
    }
    InherentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = {
            remotefilter: { latestRuntime: true },
        };
        this.runtimeModuleService.all(params).subscribe(function (runtimeModules) {
            _this.runtimeModules = runtimeModules;
        });
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getExtrinsics(_this.currentPage);
        });
    };
    InherentListComponent.prototype.selectModule = function (module) {
        var _this = this;
        this.filterModule = module;
        this.filterCall = null;
        if (module !== null) {
            var params = {
                page: { number: 0, size: 100 },
                remotefilter: { latestRuntime: true, module_id: this.filterModule.attributes.module_id },
            };
            this.runtimeCallService.all(params).subscribe(function (runtimeCalls) {
                _this.runtimeCalls = runtimeCalls;
            });
        }
        else {
            this.runtimeCalls = null;
        }
    };
    InherentListComponent.prototype.applyFilters = function () {
        this.currentPage = 1;
        this.getExtrinsics(this.currentPage);
    };
    InherentListComponent.prototype.getExtrinsics = function (page) {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {
                signed: 0
            },
        };
        if (this.filterModule !== null) {
            // @ts-ignore
            params.remotefilter.module_id = this.filterModule.attributes.module_id;
        }
        if (this.filterCall !== null) {
            // @ts-ignore
            params.remotefilter.call_id = this.filterCall.attributes.call_id;
        }
        this.extrinsicService.all(params).subscribe(function (extrinsics) {
            _this.extrinsics = extrinsics;
        });
    };
    InherentListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    InherentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inherent-list',
            template: __webpack_require__(/*! ./inherent-list.component.html */ "./src/app/pages/inherent-list/inherent-list.component.html"),
            styles: [__webpack_require__(/*! ./inherent-list.component.scss */ "./src/app/pages/inherent-list/inherent-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_extrinsic_service__WEBPACK_IMPORTED_MODULE_2__["ExtrinsicService"],
            _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_4__["RuntimeModuleService"],
            _services_runtime_call_service__WEBPACK_IMPORTED_MODULE_5__["RuntimeCallService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], InherentListComponent);
    return InherentListComponent;
}());



/***/ }),

/***/ "./src/app/pages/log-detail/log-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/log-detail/log-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n       <section class=\"info-tiles\">\r\n        <app-log-table\r\n          [log]=\"log$ | async\"\r\n        ></app-log-table>\r\n       </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/log-detail/log-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/log-detail/log-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZy1kZXRhaWwvbG9nLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/log-detail/log-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/log-detail/log-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: LogDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogDetailComponent", function() { return LogDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/log.service */ "./src/app/services/log.service.ts");





var LogDetailComponent = /** @class */ (function () {
    function LogDetailComponent(activatedRoute, logService) {
        this.activatedRoute = activatedRoute;
        this.logService = logService;
    }
    LogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.log$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.logService.get(params.get('id'));
        }));
    };
    LogDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-detail',
            template: __webpack_require__(/*! ./log-detail.component.html */ "./src/app/pages/log-detail/log-detail.component.html"),
            styles: [__webpack_require__(/*! ./log-detail.component.scss */ "./src/app/pages/log-detail/log-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]])
    ], LogDetailComponent);
    return LogDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/log-list/log-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/log-list/log-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'Log-list.Logs' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-book fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!logs || logs.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"logs && logs.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Log-list.Log ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Log-list.Block' | translate }}</th>\r\n                                <th>{{ 'Log-list.Type' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let log of logs.data; trackBy: logs.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-book\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/log/{{ log.id }}\">{{ log.id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ log.attributes.block_id }}\">{{ log.attributes.block_id }}</a></td>\r\n                                    <td>{{ log.attributes.type }}</td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/log/{{ log.id }}\">{{ 'Log-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"logs && logs.data.length == 0 && !logs.is_loading\">{{ 'Log-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"logs && logs.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Log-list.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/log-list/log-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/log-list/log-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZy1saXN0L2xvZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/log-list/log-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/log-list/log-list.component.ts ***!
  \******************************************************/
/*! exports provided: LogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogListComponent", function() { return LogListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LogListComponent = /** @class */ (function () {
    function LogListComponent(logService, activatedRoute) {
        this.logService = logService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    LogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    LogListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.logService.all(params).subscribe(function (logs) {
            _this.logs = logs;
        });
    };
    LogListComponent.prototype.refreshItems = function () {
        this.getItems(this.currentPage);
    };
    LogListComponent.prototype.getNextItems = function () {
        this.currentPage += 1;
        this.refreshItems();
    };
    LogListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    LogListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-list',
            template: __webpack_require__(/*! ./log-list.component.html */ "./src/app/pages/log-list/log-list.component.html"),
            styles: [__webpack_require__(/*! ./log-list.component.scss */ "./src/app/pages/log-list/log-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LogListComponent);
    return LogListComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <div>\r\n            <section class=\"info-tiles\">\r\n              <div class=\"card events-card\">\r\n                  <header class=\"card-header\">\r\n                      <p class=\"card-header-title\">\r\n                          {{ 'Not-found.Page not found' | translate }}\r\n                      </p>\r\n                      <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                     <span class=\"icon\"><i class=\"fa fa-map-signs fa-2x\"></i></span>\r\n                    </a>\r\n                  </header>\r\n                  <div class=\"card-table\">\r\n                      <div class=\"content\">\r\n                          {{ 'Not-found.No page could be found for current URL' | translate }}\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n            </section>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-table .content {\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL0o6XFxwcm9qZWN0c1xccG9sa2FzY2FuLXByZS1leHBsb3Jlci1ndWkvc3JjXFxhcHBcXHBhZ2VzXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10YWJsZSAuY29udGVudCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/runtime-call-detail/runtime-call-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/runtime-call-detail/runtime-call-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n\r\n      <div *ngIf=\"runtimeCall$ | async as runtimeCall\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'runtime-call-detail.Call' | translate }} \"{{ runtimeCall.attributes.name }}\"\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-file-alt fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"runtimeCall\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                  <td width=\"20%\">{{ 'runtime-call-detail.Name' | translate }}</td>\r\n                                  <td >{{runtimeCall.attributes.name}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-call-detail.Module' | translate }}</td>\r\n                                  <td >{{runtimeCall.attributes.module_id}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-call-detail.Spec version' | translate }}</td>\r\n                                  <td >{{runtimeCall.attributes.spec_version}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-call-detail.Lookup' | translate }}</td>\r\n                                  <td >{{runtimeCall.attributes.lookup}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-call-detail.Documentation' | translate }}</td>\r\n                                  <td>{{runtimeCall.attributes.documentation }}</td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section id=\"call-parameters\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-call-detail.Parameters' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"call-parameters\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-stream fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"runtimeCall.relationships.params.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th><{{ 'runtime-call-detail.Name' | translate }}</th>\r\n                                <th>{{ 'runtime-call-detail.Type' | translate }}</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let param of runtimeCall.relationships.params.data; trackBy: runtimeCall.relationships.params.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-stream\"></i>\r\n                                    </td>\r\n                                    <td>{{ param.attributes.name }}</td>\r\n                                    <td>{{ param.attributes.type}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <section *ngIf=\"runtimeCall.relationships.recent_extrinsics.data.length > 0\" id=\"recent-extrinsics\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-call-detail.Recent extrinsics using call' | translate }} \"{{ runtimeCall.attributes.name }}\"\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"recent-extrinsics\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-file-alt fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <table class=\"table is-fullwidth is-striped\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-call-detail.ID' | translate }}</th>\r\n                                <th>{{ 'runtime-call-detail.Result' | translate }}</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let extrinsic of runtimeCall.relationships.recent_extrinsics.data; trackBy: runtimeCall.relationships.recent_extrinsics.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i *ngIf=\"extrinsic.attributes.signed\" class=\"fa fa-file-signature\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.unsigned\" class=\"fa fa-file-alt\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"/extrinsic/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ extrinsic.id }}</a></td>\r\n                                    <td>\r\n                                      <i *ngIf=\"extrinsic.attributes.success\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.error\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/runtime-call-detail/runtime-call-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/runtime-call-detail/runtime-call-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1bnRpbWUtY2FsbC1kZXRhaWwvcnVudGltZS1jYWxsLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/runtime-call-detail/runtime-call-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/runtime-call-detail/runtime-call-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: RuntimeCallDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeCallDetailComponent", function() { return RuntimeCallDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_runtime_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/runtime-call.service */ "./src/app/services/runtime-call.service.ts");
/* harmony import */ var _services_runtime_call_param_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/runtime-call-param.service */ "./src/app/services/runtime-call-param.service.ts");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-call-detail.component.ts
 *
 */







var RuntimeCallDetailComponent = /** @class */ (function () {
    function RuntimeCallDetailComponent(route, runtimeCallService, runtimeCallParamService, extrinsicService) {
        this.route = route;
        this.runtimeCallService = runtimeCallService;
        this.runtimeCallParamService = runtimeCallParamService;
        this.extrinsicService = extrinsicService;
    }
    RuntimeCallDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.runtimeCall$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            if (params.get('id')) {
                return _this.runtimeCallService.get(params.get('id'), { include: ['params', 'recent_extrinsics'] });
            }
        }));
    };
    RuntimeCallDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-runtime-call-detail',
            template: __webpack_require__(/*! ./runtime-call-detail.component.html */ "./src/app/pages/runtime-call-detail/runtime-call-detail.component.html"),
            styles: [__webpack_require__(/*! ./runtime-call-detail.component.scss */ "./src/app/pages/runtime-call-detail/runtime-call-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_runtime_call_service__WEBPACK_IMPORTED_MODULE_4__["RuntimeCallService"],
            _services_runtime_call_param_service__WEBPACK_IMPORTED_MODULE_5__["RuntimeCallParamService"],
            _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_6__["ExtrinsicService"]])
    ], RuntimeCallDetailComponent);
    return RuntimeCallDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/runtime-constant-detail/runtime-constant-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/runtime-constant-detail/runtime-constant-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n\r\n      <div *ngIf=\"runtimeConstant$ | async as runtimeConstant\">\r\n        <section>\r\n          <div class=\"card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'runtime-constant-detail.Constant' | translate }} \"{{ runtimeConstant.attributes.name }}\"\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-memory fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"runtimeConstant\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                  <td width=\"20%\">{{ 'runtime-constant-detail.Name' | translate }}</td>\r\n                                  <td >{{runtimeConstant.attributes.name}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-constant-detail.Module' | translate }}</td>\r\n                                  <td >{{runtimeConstant.attributes.module_id}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-constant-detail.Spec version' | translate }}</td>\r\n                                  <td >{{runtimeConstant.attributes.spec_version}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-constant-detail.Type' | translate }}</td>\r\n                                  <td >{{runtimeConstant.attributes.type}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-constant-detail.Value' | translate }}</td>\r\n                                  <td [ngSwitch]=\"runtimeConstant.attributes.type\">\r\n                                  <div *ngSwitchCase=\"'Address'\"><a routerLink=\"/account/{{ runtimeConstant.attributes.value }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"runtimeConstant.attributes.value\"></app-identicon>{{ runtimeConstant.attributes.value }}</a></div>\r\n                                  <div *ngSwitchCase=\"'Balance'\">{{ formatBalance(runtimeConstant.attributes.value) | number}} {{ networkTokenSymbol }}</div>\r\n                                  <div *ngSwitchCase=\"'Moment'\">{{ runtimeConstant.attributes.value | date:'medium' }}</div>\r\n                                  <div *ngSwitchDefault><pre>{{ runtimeConstant.attributes.value | json }}</pre></div>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-constant-detail.Documentation' | translate }}</td>\r\n                                  <td>{{runtimeConstant.attributes.documentation }}</td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/runtime-constant-detail/runtime-constant-detail.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/runtime-constant-detail/runtime-constant-detail.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1bnRpbWUtY29uc3RhbnQtZGV0YWlsL3J1bnRpbWUtY29uc3RhbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/runtime-constant-detail/runtime-constant-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/runtime-constant-detail/runtime-constant-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: RuntimeConstantDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeConstantDetailComponent", function() { return RuntimeConstantDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_runtime_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/runtime-constant.service */ "./src/app/services/runtime-constant.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var RuntimeConstantDetailComponent = /** @class */ (function () {
    function RuntimeConstantDetailComponent(route, runtimeConstantService) {
        this.route = route;
        this.runtimeConstantService = runtimeConstantService;
    }
    RuntimeConstantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenSymbol;
        this.runtimeConstant$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            if (params.get('id')) {
                return _this.runtimeConstantService.get(params.get('id'));
            }
        }));
    };
    RuntimeConstantDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    RuntimeConstantDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-runtime-constant-detail',
            template: __webpack_require__(/*! ./runtime-constant-detail.component.html */ "./src/app/pages/runtime-constant-detail/runtime-constant-detail.component.html"),
            styles: [__webpack_require__(/*! ./runtime-constant-detail.component.scss */ "./src/app/pages/runtime-constant-detail/runtime-constant-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_runtime_constant_service__WEBPACK_IMPORTED_MODULE_4__["RuntimeConstantService"]])
    ], RuntimeConstantDetailComponent);
    return RuntimeConstantDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/runtime-detail/runtime-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/runtime-detail/runtime-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n\r\n      <div *ngIf=\"runtime$ | async as runtime\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'runtime-detail.Runtime' | translate }} #{{ runtime.id }}\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-cogs fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"runtime\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                  <td width=\"20%\">{{ 'runtime-detail.Name' | translate }}</td>\r\n                                  <td >{{runtime.attributes.impl_name}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-detail.Spec version' | translate }}</td>\r\n                                  <td >{{runtime.attributes.spec_version}}</td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section id=\"modules\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-detail.Modules' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"modules\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-cog fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"runtime.relationships.modules.data.length === 0\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"runtime.relationships.modules.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-detail.Name' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-detail.Call Functions' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-detail.Events' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-detail.Storage Functions' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let module of runtime.relationships.modules.data; trackBy: runtime.relationships.modules.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-cog\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/runtime-module/{{ module.id }}\">{{ module.attributes.name }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\">{{ module.attributes.count_call_functions }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ module.attributes.count_events }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ module.attributes.count_storage_functions }}</td>\r\n\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/runtime-module/{{ module.id }}\">Details</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <section id=\"types\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-detail.Types' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"types\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-stream fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"runtime.relationships.types.data.length === 0\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"runtime.relationships.types.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-detail.Type string' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-detail.Compatible with Polkascan' | translate }}</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let type of runtime.relationships.types.data; trackBy: runtime.relationships.types.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-stream\"></i>\r\n                                    </td>\r\n                                    <td>{{ type.attributes.type_string }}</td>\r\n                                    <td class=\"is-hidden-mobile\">\r\n                                      <i *ngIf=\"type.attributes.decoder_class != '[not implemented]'\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"type.attributes.decoder_class == '[not implemented]'\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/runtime-detail/runtime-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/runtime-detail/runtime-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1bnRpbWUtZGV0YWlsL3J1bnRpbWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/runtime-detail/runtime-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/runtime-detail/runtime-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RuntimeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeDetailComponent", function() { return RuntimeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_runtime_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/runtime.service */ "./src/app/services/runtime.service.ts");
/* harmony import */ var _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/runtime-module.service */ "./src/app/services/runtime-module.service.ts");
/* harmony import */ var _services_runtime_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/runtime-type.service */ "./src/app/services/runtime-type.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-detail.component.ts
 *
 */








var RuntimeDetailComponent = /** @class */ (function () {
    function RuntimeDetailComponent(route, runtimeService, runtimeModuleService, runtimeTypeService, location) {
        this.route = route;
        this.runtimeService = runtimeService;
        this.runtimeModuleService = runtimeModuleService;
        this.runtimeTypeService = runtimeTypeService;
        this.location = location;
    }
    RuntimeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.runtime$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            if (params.get('id')) {
                return _this.runtimeService.get(params.get('id'), { include: ['modules', 'types'] });
            }
        }));
    };
    RuntimeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    RuntimeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-runtime-detail',
            template: __webpack_require__(/*! ./runtime-detail.component.html */ "./src/app/pages/runtime-detail/runtime-detail.component.html"),
            styles: [__webpack_require__(/*! ./runtime-detail.component.scss */ "./src/app/pages/runtime-detail/runtime-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_runtime_service__WEBPACK_IMPORTED_MODULE_5__["RuntimeService"],
            _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_6__["RuntimeModuleService"],
            _services_runtime_type_service__WEBPACK_IMPORTED_MODULE_7__["RuntimeTypeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], RuntimeDetailComponent);
    return RuntimeDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/runtime-event-detail/runtime-event-detail.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/runtime-event-detail/runtime-event-detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n\r\n      <div *ngIf=\"runtimeEvent$ | async as runtimeEvent\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'runtime-event-detail.Event' | translate }} \"{{ runtimeEvent.attributes.name }}\"\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-calendar-check fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"runtimeEvent\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                  <td width=\"20%\">{{ 'runtime-event-detail.Name' | translate }}</td>\r\n                                  <td >{{ runtimeEvent.attributes.name }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-event-detail.Module' | translate }}</td>\r\n                                  <td >{{ runtimeEvent.attributes.module_id }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-event-detail.Spec version' | translate }}</td>\r\n                                  <td >{{ runtimeEvent.attributes.spec_version }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-event-detail.Lookup' | translate }}</td>\r\n                                  <td >{{ runtimeEvent.attributes.lookup }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-event-detail.Documentation' | translate }}</td>\r\n                                  <td>{{ runtimeEvent.attributes.documentation }}</td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section *ngIf=\"runtimeEvent.relationships.attributes.data.length > 0\" id=\"event-attributes\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-event-detail.Attributes' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"event-attributes\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-stream fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <table class=\"table is-fullwidth is-striped\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-event-detail.Type' | translate }}</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let attribute of runtimeEvent.relationships.attributes.data; trackBy: runtimeEvent.relationships.attributes.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-stream\"></i>\r\n                                    </td>\r\n                                    <td>{{ attribute.attributes.type }}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <section *ngIf=\"runtimeEvent.relationships.recent_events.data.length > 0\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-event-detail.Recent' | translate }} \"{{ runtimeEvent.attributes.name }}\" {{ 'runtime-event-detail.events' | translate }}\r\n                    </p>\r\n\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <table class=\"table is-fullwidth is-striped\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-event-detail.ID' | translate }}</th>\r\n                                <th>{{ 'runtime-event-detail.Block' | translate }}</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let event of runtimeEvent.relationships.recent_events.data; trackBy: runtimeEvent.relationships.recent_events.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-calendar-check\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"/event/{{ event.id}}\">{{ event.id }}</a></td>\r\n                                    <td><a routerLink=\"/block/{{ event.attributes.block_id }}\">{{ event.attributes.block_id }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/runtime-event-detail/runtime-event-detail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/runtime-event-detail/runtime-event-detail.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1bnRpbWUtZXZlbnQtZGV0YWlsL3J1bnRpbWUtZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/runtime-event-detail/runtime-event-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/runtime-event-detail/runtime-event-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: RuntimeEventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeEventDetailComponent", function() { return RuntimeEventDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_runtime_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/runtime-event.service */ "./src/app/services/runtime-event.service.ts");
/* harmony import */ var _services_runtime_event_attribute_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/runtime-event-attribute.service */ "./src/app/services/runtime-event-attribute.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-event-detail.component.ts
 *
 */







var RuntimeEventDetailComponent = /** @class */ (function () {
    function RuntimeEventDetailComponent(route, runtimeEventService, runtimeEventAttributeService, eventService) {
        this.route = route;
        this.runtimeEventService = runtimeEventService;
        this.runtimeEventAttributeService = runtimeEventAttributeService;
        this.eventService = eventService;
    }
    RuntimeEventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.runtimeEvent$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            if (params.get('id')) {
                return _this.runtimeEventService.get(params.get('id'), { include: ['attributes', 'recent_events'] });
            }
        }));
    };
    RuntimeEventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-runtime-event-detail',
            template: __webpack_require__(/*! ./runtime-event-detail.component.html */ "./src/app/pages/runtime-event-detail/runtime-event-detail.component.html"),
            styles: [__webpack_require__(/*! ./runtime-event-detail.component.scss */ "./src/app/pages/runtime-event-detail/runtime-event-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_runtime_event_service__WEBPACK_IMPORTED_MODULE_4__["RuntimeEventService"],
            _services_runtime_event_attribute_service__WEBPACK_IMPORTED_MODULE_5__["RuntimeEventAttributeService"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]])
    ], RuntimeEventDetailComponent);
    return RuntimeEventDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/runtime-list/runtime-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/runtime-list/runtime-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-list.Runtimes' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-cogs fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!runtimes || runtimes.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"runtimes && runtimes.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-list.Spec ID' | translate }}</th>\r\n                                <th>{{ 'runtime-list.Name' | translate }}</th>\r\n                                <th>{{ 'runtime-list.Spec version' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let runtime of runtimes.data; trackBy: runtimes.trackBy\">\r\n                                    <td width=\"5%\"><i class=\"fa fa-cogs\"></i></td>\r\n                                    <td width=\"10%\"><a routerLink=\"{{ networkURLPrefix }}/runtime/{{ runtime.id }}\">{{ runtime.id }}</a></td>\r\n                                    <td>{{ runtime.attributes.impl_name }}</td>\r\n                                    <td>{{ runtime.attributes.spec_version }}</td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/runtime/{{ runtime.id }}\">{{ 'runtime-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/runtime-list/runtime-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/runtime-list/runtime-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1bnRpbWUtbGlzdC9ydW50aW1lLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/runtime-list/runtime-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/runtime-list/runtime-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RuntimeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeListComponent", function() { return RuntimeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_runtime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/runtime.service */ "./src/app/services/runtime.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-list.component.ts
 *
 */



var RuntimeListComponent = /** @class */ (function () {
    function RuntimeListComponent(runtimeService) {
        this.runtimeService = runtimeService;
    }
    RuntimeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.runtimeService.all({}).subscribe(function (runtimes) { return (_this.runtimes = runtimes); });
    };
    RuntimeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-runtime-list',
            template: __webpack_require__(/*! ./runtime-list.component.html */ "./src/app/pages/runtime-list/runtime-list.component.html"),
            styles: [__webpack_require__(/*! ./runtime-list.component.scss */ "./src/app/pages/runtime-list/runtime-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_runtime_service__WEBPACK_IMPORTED_MODULE_2__["RuntimeService"]])
    ], RuntimeListComponent);
    return RuntimeListComponent;
}());



/***/ }),

/***/ "./src/app/pages/runtime-module-detail/runtime-module-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/runtime-module-detail/runtime-module-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n\r\n      <div *ngIf=\"runtimeModule$ | async as runtimeModule\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'runtime-module-detail.Runtime module' | translate }} \"{{ runtimeModule.attributes.name }}\" {{ 'runtime-module-detail.for runtime' | translate }} # {{ runtimeModule.attributes.spec_version }}\r\n                  </p>\r\n                  <a [routerLink]=\"\" fragment=\"details\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-cog fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"runtimeModule\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                  <td width=\"20%\">{{ 'runtime-module-detail.Name' | translate }}</td>\r\n                                  <td >{{runtimeModule.attributes.name}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-module-detail.Spec version' | translate }}</td>\r\n                                  <td>{{runtimeModule.attributes.spec_version}}</td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section *ngIf=\"runtimeModule.relationships.calls.data.length > 0\" id=\"call-functions\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-module-detail.Call functions' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"call-functions\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-file-alt fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <table class=\"table is-fullwidth is-striped\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-module-detail.Name' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-detail.Lookup' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-detail.Parameters' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let call of runtimeModule.relationships.calls.data; trackBy: runtimeModule.relationships.calls.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-file-alt\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/runtime-call/{{ call.id }}\">{{ call.attributes.name }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\">{{ call.attributes.lookup }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ call.attributes.count_params }}</td>\r\n\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/runtime-call/{{ call.id }}\">{{ 'runtime-module-detail.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <section *ngIf=\"runtimeModule.relationships.events.data.length > 0\" id=\"events\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        Events{{ 'runtime-module-detail.Runtimes' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"events\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-calendar-check fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <table class=\"table is-fullwidth is-striped\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-module-detail.Name' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-detail.Lookup' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-detail.Attributes' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let event of runtimeModule.relationships.events.data; trackBy: runtimeModule.relationships.events.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-calendar-check\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/runtime-event/{{ event.id }}\">{{ event.attributes.name }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\">{{ event.attributes.lookup }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ event.attributes.count_attributes }}</td>\r\n\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/runtime-event/{{ event.id }}\">{{ 'runtime-module-detail.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <section *ngIf=\"runtimeModule.relationships.storage.data.length > 0\" id=\"storage-functions\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-module-detail.Storage functions' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"storage-functions\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-database fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <table class=\"table is-fullwidth is-striped\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-module-detail.Name' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-detail.Type' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let storage of runtimeModule.relationships.storage.data; trackBy: runtimeModule.relationships.storage.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-database\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/runtime-storage/{{ storage.id }}\">{{ storage.attributes.name }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\">{{ storage.attributes.type_value }}</td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/runtime-storage/{{ storage.id }}\">{{ 'runtime-module-detail.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <section *ngIf=\"runtimeModule.relationships.constants.data.length > 0\" id=\"constants\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-module-detail.Constants' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"constants\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-memory fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <table class=\"table is-fullwidth is-striped\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-module-detail.Name' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-detail.Type' | translate }}</th>\r\n                                <th>{{ 'runtime-module-detail.Value' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let constant of runtimeModule.relationships.constants.data; trackBy: runtimeModule.relationships.constants.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-memory\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/runtime-constant/{{ constant.id }}\">{{ constant.attributes.name }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\">{{ constant.attributes.type }}</td>\r\n                                    <td>{{ constant.attributes.value }}</td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/runtime-constant/{{ constant.id }}\">{{ 'runtime-module-detail.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/runtime-module-detail/runtime-module-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/runtime-module-detail/runtime-module-detail.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1bnRpbWUtbW9kdWxlLWRldGFpbC9ydW50aW1lLW1vZHVsZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/runtime-module-detail/runtime-module-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/runtime-module-detail/runtime-module-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: RuntimeModuleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeModuleDetailComponent", function() { return RuntimeModuleDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/runtime-module.service */ "./src/app/services/runtime-module.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_runtime_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/runtime-call.service */ "./src/app/services/runtime-call.service.ts");
/* harmony import */ var _services_runtime_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/runtime-event.service */ "./src/app/services/runtime-event.service.ts");
/* harmony import */ var _services_runtime_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/runtime-storage.service */ "./src/app/services/runtime-storage.service.ts");
/* harmony import */ var _services_runtime_constant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/runtime-constant.service */ "./src/app/services/runtime-constant.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-module-detail.component.ts
 *
 */









var RuntimeModuleDetailComponent = /** @class */ (function () {
    function RuntimeModuleDetailComponent(route, runtimeModuleService, runtimeCallService, runtimeStorageService, runtimeConstantService, runtimeEventService) {
        this.route = route;
        this.runtimeModuleService = runtimeModuleService;
        this.runtimeCallService = runtimeCallService;
        this.runtimeStorageService = runtimeStorageService;
        this.runtimeConstantService = runtimeConstantService;
        this.runtimeEventService = runtimeEventService;
    }
    RuntimeModuleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.runtimeModule$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            if (params.get('id')) {
                return _this.runtimeModuleService.get(params.get('id'), { include: ['calls', 'events', 'storage', 'constants'] });
            }
        }));
    };
    RuntimeModuleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-runtime-module-detail',
            template: __webpack_require__(/*! ./runtime-module-detail.component.html */ "./src/app/pages/runtime-module-detail/runtime-module-detail.component.html"),
            styles: [__webpack_require__(/*! ./runtime-module-detail.component.scss */ "./src/app/pages/runtime-module-detail/runtime-module-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_3__["RuntimeModuleService"],
            _services_runtime_call_service__WEBPACK_IMPORTED_MODULE_5__["RuntimeCallService"],
            _services_runtime_storage_service__WEBPACK_IMPORTED_MODULE_7__["RuntimeStorageService"],
            _services_runtime_constant_service__WEBPACK_IMPORTED_MODULE_8__["RuntimeConstantService"],
            _services_runtime_event_service__WEBPACK_IMPORTED_MODULE_6__["RuntimeEventService"]])
    ], RuntimeModuleDetailComponent);
    return RuntimeModuleDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/runtime-module-list/runtime-module-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/runtime-module-list/runtime-module-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n\r\n      <div>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-module-list.Runtime Modules' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-cog fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!modules || modules.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"modules && modules.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-module-list.Name' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-list.Call Functions' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-list.Events' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-list.Storage Functions' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-list.Constants' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-module-list.Error Types' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let module of modules.data; trackBy: modules.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-cog\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/runtime-module/{{ module.id }}\">{{ module.attributes.name }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\">{{ module.attributes.count_call_functions }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ module.attributes.count_events }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ module.attributes.count_storage_functions }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ module.attributes.count_constants }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ module.attributes.count_errors }}</td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/runtime-module/{{ module.id }}\">{{ 'runtime-module-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"modules?.data.length == 25\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'runtime-module-list.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/runtime-module-list/runtime-module-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/runtime-module-list/runtime-module-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1bnRpbWUtbW9kdWxlLWxpc3QvcnVudGltZS1tb2R1bGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/runtime-module-list/runtime-module-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/runtime-module-list/runtime-module-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: RuntimeModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeModuleListComponent", function() { return RuntimeModuleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/runtime-module.service */ "./src/app/services/runtime-module.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RuntimeModuleListComponent = /** @class */ (function () {
    function RuntimeModuleListComponent(runtimeModuleService, activatedRoute) {
        this.runtimeModuleService = runtimeModuleService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    RuntimeModuleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].networkTokenSymbol;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    RuntimeModuleListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: { latestRuntime: true },
        };
        this.runtimeModuleService.all(params).subscribe(function (modules) {
            _this.modules = modules;
        });
    };
    RuntimeModuleListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    RuntimeModuleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-runtime-module-list',
            template: __webpack_require__(/*! ./runtime-module-list.component.html */ "./src/app/pages/runtime-module-list/runtime-module-list.component.html"),
            styles: [__webpack_require__(/*! ./runtime-module-list.component.scss */ "./src/app/pages/runtime-module-list/runtime-module-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_runtime_module_service__WEBPACK_IMPORTED_MODULE_3__["RuntimeModuleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RuntimeModuleListComponent);
    return RuntimeModuleListComponent;
}());



/***/ }),

/***/ "./src/app/pages/runtime-storage-detail/runtime-storage-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/runtime-storage-detail/runtime-storage-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n\r\n      <div *ngIf=\"runtimeStorage$ | async as runtimeStorage\">\r\n        <section>\r\n          <div class=\"card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'runtime-storage-detail.Storage function' | translate }} \"{{ runtimeStorage.attributes.name }}\"\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-database fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"runtimeStorage\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                  <td width=\"20%\">{{ 'runtime-storage-detail.Name' | translate }}</td>\r\n                                  <td >{{runtimeStorage.attributes.name}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-storage-detail.Module' | translate }}</td>\r\n                                  <td >{{runtimeStorage.attributes.module_id}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-storage-detail.Spec version' | translate }}</td>\r\n                                  <td >{{runtimeStorage.attributes.spec_version}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-storage-detail.Value type' | translate }}</td>\r\n                                  <td >{{runtimeStorage.attributes.type_value}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-storage-detail.Default' | translate }}</td>\r\n                                  <td >{{runtimeStorage.attributes.default}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-storage-detail.Modifier' | translate }}</td>\r\n                                  <td >{{runtimeStorage.attributes.modifier}}</td>\r\n                              </tr>\r\n                              <tr *ngIf=\"runtimeStorage.attributes.type_key1\">\r\n                                  <td>{{ 'runtime-storage-detail.Key 1 type' | translate }}</td>\r\n                                  <td >{{runtimeStorage.attributes.type_key1}}</td>\r\n                              </tr>\r\n                              <tr *ngIf=\"runtimeStorage.attributes.type_key1\">\r\n                                  <td>{{ 'runtime-storage-detail.Key 2 type' | translate }}</td>\r\n                                  <td >{{runtimeStorage.attributes.type_key2}}</td>\r\n                              </tr>\r\n                              <tr *ngIf=\"runtimeStorage.attributes.type_key1\">\r\n                                  <td>{{ 'runtime-storage-detail.Linked' | translate }}</td>\r\n                                  <td>\r\n                                    <i *ngIf=\"runtimeStorage.attributes.type_is_linked\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                    <i *ngIf=\"!runtimeStorage.attributes.type_is_linked\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                  </td>\r\n                              </tr>\r\n                              <tr *ngIf=\"runtimeStorage.attributes.type_key2hasher\">\r\n                                  <td>{{ 'runtime-storage-detail.Key 2 hasher' | translate }}</td>\r\n                                  <td >{{runtimeStorage.attributes.type_key2hasher}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                  <td>{{ 'runtime-storage-detail.Documentation' | translate }}</td>\r\n                                  <td>{{runtimeStorage.attributes.documentation }}</td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/runtime-storage-detail/runtime-storage-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/runtime-storage-detail/runtime-storage-detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1bnRpbWUtc3RvcmFnZS1kZXRhaWwvcnVudGltZS1zdG9yYWdlLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/runtime-storage-detail/runtime-storage-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/runtime-storage-detail/runtime-storage-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RuntimeStorageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeStorageDetailComponent", function() { return RuntimeStorageDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_runtime_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/runtime-storage.service */ "./src/app/services/runtime-storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var RuntimeStorageDetailComponent = /** @class */ (function () {
    function RuntimeStorageDetailComponent(route, runtimeStorageService) {
        this.route = route;
        this.runtimeStorageService = runtimeStorageService;
    }
    RuntimeStorageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.runtimeStorage$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            if (params.get('id')) {
                return _this.runtimeStorageService.get(params.get('id'));
            }
        }));
    };
    RuntimeStorageDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-runtime-storage-detail',
            template: __webpack_require__(/*! ./runtime-storage-detail.component.html */ "./src/app/pages/runtime-storage-detail/runtime-storage-detail.component.html"),
            styles: [__webpack_require__(/*! ./runtime-storage-detail.component.scss */ "./src/app/pages/runtime-storage-detail/runtime-storage-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_runtime_storage_service__WEBPACK_IMPORTED_MODULE_3__["RuntimeStorageService"]])
    ], RuntimeStorageDetailComponent);
    return RuntimeStorageDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/runtime-type-list/runtime-type-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/runtime-type-list/runtime-type-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n\r\n      <div>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'runtime-type-list.Runtime Types' | translate }}\r\n                    </p>\r\n                     <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-stream fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!types || types.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"types && types.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'runtime-type-list.Type string' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'runtime-type-list.Compatible with Polkascan' | translate }}</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let type of types.data; trackBy: types.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-stream\"></i>\r\n                                    </td>\r\n                                    <td>{{ type.attributes.type_string }}</td>\r\n                                    <td class=\"is-hidden-mobile\">\r\n                                      <i *ngIf=\"type.attributes.decoder_class != '[not implemented]'\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"type.attributes.decoder_class == '[not implemented]'\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"types && types.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Global.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/runtime-type-list/runtime-type-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/runtime-type-list/runtime-type-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3J1bnRpbWUtdHlwZS1saXN0L3J1bnRpbWUtdHlwZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/runtime-type-list/runtime-type-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/runtime-type-list/runtime-type-list.component.ts ***!
  \************************************************************************/
/*! exports provided: RuntimeTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeTypeListComponent", function() { return RuntimeTypeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_runtime_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/runtime-type.service */ "./src/app/services/runtime-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RuntimeTypeListComponent = /** @class */ (function () {
    function RuntimeTypeListComponent(runtimeTypeService, activatedRoute) {
        this.runtimeTypeService = runtimeTypeService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    RuntimeTypeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].networkTokenSymbol;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    RuntimeTypeListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            remotefilter: { latestRuntime: true },
            page: { number: page, size: 50 },
        };
        this.runtimeTypeService.all(params).subscribe(function (types) {
            _this.types = types;
        });
    };
    RuntimeTypeListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    RuntimeTypeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-runtime-type-list',
            template: __webpack_require__(/*! ./runtime-type-list.component.html */ "./src/app/pages/runtime-type-list/runtime-type-list.component.html"),
            styles: [__webpack_require__(/*! ./runtime-type-list.component.scss */ "./src/app/pages/runtime-type-list/runtime-type-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_runtime_type_service__WEBPACK_IMPORTED_MODULE_3__["RuntimeTypeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RuntimeTypeListComponent);
    return RuntimeTypeListComponent;
}());



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"session$ | async as session\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'session-detail.Session' | translate }} #{{ session.attributes.id }}\r\n                  </p>\r\n                  <a [routerLink]=\"\" fragment=\"details\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-user-clock fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"session\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'session-detail.Start at block' | translate }}</td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/block/{{ session.attributes.start_at_block }}\">{{ session.attributes.start_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'session-detail.End at block' | translate }}</td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/block/{{ session.attributes.end_at_block }}\">{{ session.attributes.end_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'session-detail.Era' | translate }}</td>\r\n                                <td>{{ session.attributes.era || 'N/A'}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\"># {{ 'session-detail.Blocks' | translate }}{{ 'session-detail.View' | translate }}</td>\r\n                                <td>{{ session.attributes.count_blocks }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\"># {{ 'session-detail.Validators' | translate }}</td>\r\n                                <td>{{ session.attributes.count_validators }}</td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section id=\"validators\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'session-detail.Validators' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"validators\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-user-shield fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"session.relationships.validators.loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"session.relationships.validators.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'session-detail.Address' | translate }}</th>\r\n                                <th>{{ 'session-detail.Total bonded' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let validator of session.relationships.validators.data; trackBy: session.relationships.validators.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-user-shield\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ validator.attributes.validator_stash }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"validator.attributes.validator_stash_id\"></app-identicon> {{ validator.attributes.validator_stash }}</a></td>\r\n                                    <td>{{ formatBalance(validator.attributes.bonded_total) | number:'1.0-15'}} {{ networkTokenSymbol }}</td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/session/validator/{{ validator.id }}\">{{ 'session-detail.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: SessionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailComponent", function() { return SessionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_session_validator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/session-validator.service */ "./src/app/services/session-validator.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var SessionDetailComponent = /** @class */ (function () {
    function SessionDetailComponent(activatedRoute, sessionService, sessionValidatorService) {
        this.activatedRoute = activatedRoute;
        this.sessionService = sessionService;
        this.sessionValidatorService = sessionValidatorService;
    }
    SessionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].networkTokenSymbol;
        this.session$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.sessionService.get(params.get('id'), { include: ['validators'] });
        }));
    };
    SessionDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    SessionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-detail',
            template: __webpack_require__(/*! ./session-detail.component.html */ "./src/app/pages/session-detail/session-detail.component.html"),
            styles: [__webpack_require__(/*! ./session-detail.component.scss */ "./src/app/pages/session-detail/session-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _services_session_validator_service__WEBPACK_IMPORTED_MODULE_5__["SessionValidatorService"]])
    ], SessionDetailComponent);
    return SessionDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/session-list/session-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/session-list/session-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'session-list.Sessions' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-user-clock fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!sessions || sessions.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"sessions && sessions.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'session-list.Session ID' | translate }}</th>\r\n                                <th>{{ 'session-list.Start at Block' | translate }}</th>\r\n                                <th># {{ 'session-list.Blocks' | translate }}</th>\r\n                                <th># {{ 'session-list.Validators' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let session of sessions.data; trackBy: sessions.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-user-clock\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/session/session/{{ session.attributes.id }}\">{{ session.attributes.id }}</a></td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/block/{{ session.attributes.start_at_block }}\">{{ session.attributes.start_at_block }}</a></td>\r\n                                    <td>{{ session.attributes.count_blocks || '-'}}</td>\r\n                                    <td>{{ session.attributes.count_validators }}</td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/session/session/{{ session.attributes.id }}\">{{ 'session-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"sessions && sessions.data.length == 0 && !sessions.is_loading\">{{ 'session-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"sessions && sessions.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'session-list.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/session-list/session-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/session-list/session-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tbGlzdC9zZXNzaW9uLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/session-list/session-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/session-list/session-list.component.ts ***!
  \**************************************************************/
/*! exports provided: SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return SessionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SessionListComponent = /** @class */ (function () {
    function SessionListComponent(sessionService, activatedRoute) {
        this.sessionService = sessionService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    SessionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    SessionListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.sessionService.all(params).subscribe(function (sessions) {
            _this.sessions = sessions;
        });
    };
    SessionListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    SessionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-list',
            template: __webpack_require__(/*! ./session-list.component.html */ "./src/app/pages/session-list/session-list.component.html"),
            styles: [__webpack_require__(/*! ./session-list.component.scss */ "./src/app/pages/session-list/session-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SessionListComponent);
    return SessionListComponent;
}());



/***/ }),

/***/ "./src/app/pages/session-nominator-list/session-nominator-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/session-nominator-list/session-nominator-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'session-nominator-list.Nominators for current session' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-user-check fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!nominators || nominators.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"nominators && nominators.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'session-nominator-list.Address' | translate }}</th>\r\n                                <th>{{ 'session-nominator-list.Bonded' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let nominator of nominators.data; trackBy: nominators.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-user-check\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ nominator.attributes.nominator_stash }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"nominator.attributes.nominator_stash_id\"></app-identicon> {{ nominator.attributes.nominator_stash }}</a></td>\r\n                                    <td>{{ formatBalance(nominator.attributes.bonded) | number:'1.0-15'}} {{ networkTokenSymbol }}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"nominators && nominators.data.length == 0 && !nominators.is_loading\">{{ 'session-nominator-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n               <footer class=\"card-footer\" *ngIf=\"nominators && nominators.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Global.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/session-nominator-list/session-nominator-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/session-nominator-list/session-nominator-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tbm9taW5hdG9yLWxpc3Qvc2Vzc2lvbi1ub21pbmF0b3ItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/session-nominator-list/session-nominator-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/session-nominator-list/session-nominator-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SessionNominatorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionNominatorListComponent", function() { return SessionNominatorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_session_nominator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/session-nominator.service */ "./src/app/services/session-nominator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SessionNominatorListComponent = /** @class */ (function () {
    function SessionNominatorListComponent(sessionNominatorService, activatedRoute) {
        this.sessionNominatorService = sessionNominatorService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    SessionNominatorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].networkTokenSymbol;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    SessionNominatorListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: { latestSession: true },
        };
        this.sessionNominatorService.all(params).subscribe(function (nominators) {
            _this.nominators = nominators;
        });
    };
    SessionNominatorListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    SessionNominatorListComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    SessionNominatorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-nominator-list',
            template: __webpack_require__(/*! ./session-nominator-list.component.html */ "./src/app/pages/session-nominator-list/session-nominator-list.component.html"),
            styles: [__webpack_require__(/*! ./session-nominator-list.component.scss */ "./src/app/pages/session-nominator-list/session-nominator-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_session_nominator_service__WEBPACK_IMPORTED_MODULE_3__["SessionNominatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SessionNominatorListComponent);
    return SessionNominatorListComponent;
}());



/***/ }),

/***/ "./src/app/pages/session-validator-detail/session-validator-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/session-validator-detail/session-validator-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"sessionValidator$ | async as validator\">\r\n        <section class=\"info-tiles\" id=\"details\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'session-validator-detail.Validator' | translate }} {{ validator.attributes.validator_stash }} {{ 'session-validator-detail.for session' | translate }} #{{validator.attributes.session_id  }}\r\n                  </p>\r\n                  <a [routerLink]=\"\" fragment=\"details\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-user-shield fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"validator\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td width=\"20%\">{{ 'session-validator-detail.Stash account' | translate }}</td>\r\n                              <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ validator.attributes.validator_stash }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"validator.attributes.validator_stash_id\"></app-identicon> {{ validator.attributes.validator_stash }}</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td width=\"20%\">{{ 'session-validator-detail.Controller account' | translate }}</td>\r\n                              <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ validator.attributes.validator_controller }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"validator.attributes.validator_controller_id\"></app-identicon> {{ validator.attributes.validator_controller }}</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td width=\"20%\">{{ 'session-validator-detail.Session account' | translate }}</td>\r\n                              <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ validator.attributes.validator_session }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"validator.attributes.validator_session_id\"></app-identicon> {{ validator.attributes.validator_session }}</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td width=\"20%\">{{ 'session-validator-detail.Bonded Total' | translate }}</td>\r\n                              <td>{{ formatBalance(validator.attributes.bonded_total) | number:'1.0-15'}} {{ networkTokenSymbol }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td width=\"20%\">{{ 'session-validator-detail.Bonded own stash' | translate }}</td>\r\n                              <td>{{ formatBalance(validator.attributes.bonded_own) | number:'1.0-15'}} {{ networkTokenSymbol }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td width=\"20%\">{{ 'session-validator-detail.Additional bonded by nominators' | translate }}</td>\r\n                              <td>{{ formatBalance(validator.attributes.bonded_nominators) | number:'1.0-15'}} {{ networkTokenSymbol }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td width=\"20%\"># {{ 'session-validator-detail.nominators' | translate }}</td>\r\n                              <td>{{ validator.attributes.count_nominators }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td width=\"20%\">{{ 'session-validator-detail.Commission' | translate }}</td>\r\n                              <td>{{ validator.attributes.commission }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td width=\"20%\">{{ 'session-validator-detail.Unstake threshold' | translate }}</td>\r\n                              <td>{{ validator.attributes.unstake_threshold }}</td>\r\n                            </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section id=\"nominators\">\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'session-validator-detail.Nominators' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"nominators\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-user-check fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"validator.relationships.nominators.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'session-validator-detail.Address' | translate }}</th>\r\n                                <th>{{ 'session-validator-detail.Bonded' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let nominator of validator.relationships.nominators.data; trackBy: validator.relationships.nominators.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-user-check\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ nominator.attributes.nominator_stash }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"nominator.attributes.nominator_stash_id\"></app-identicon> {{ nominator.attributes.nominator_stash }}</a></td>\r\n                                    <td>{{ formatBalance(nominator.attributes.bonded) | number:'1.0-15'}} {{ networkTokenSymbol }}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"validator.relationships.nominators.data.length == 0\">{{ 'session-validator-detail.No nominators for this validator' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/session-validator-detail/session-validator-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/session-validator-detail/session-validator-detail.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tdmFsaWRhdG9yLWRldGFpbC9zZXNzaW9uLXZhbGlkYXRvci1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/session-validator-detail/session-validator-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/session-validator-detail/session-validator-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SessionValidatorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionValidatorDetailComponent", function() { return SessionValidatorDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/session-validator.service */ "./src/app/services/session-validator.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_session_nominator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/session-nominator.service */ "./src/app/services/session-nominator.service.ts");







var SessionValidatorDetailComponent = /** @class */ (function () {
    function SessionValidatorDetailComponent(activatedRoute, sessionValidatorService, sessionNominatorService) {
        this.activatedRoute = activatedRoute;
        this.sessionValidatorService = sessionValidatorService;
        this.sessionNominatorService = sessionNominatorService;
    }
    SessionValidatorDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].networkTokenSymbol;
        this.sessionValidator$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            return _this.sessionValidatorService.get(params.get('id'), { include: ['nominators'] });
        }));
    };
    SessionValidatorDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    SessionValidatorDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-validator-detail',
            template: __webpack_require__(/*! ./session-validator-detail.component.html */ "./src/app/pages/session-validator-detail/session-validator-detail.component.html"),
            styles: [__webpack_require__(/*! ./session-validator-detail.component.scss */ "./src/app/pages/session-validator-detail/session-validator-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_session_validator_service__WEBPACK_IMPORTED_MODULE_3__["SessionValidatorService"],
            _services_session_nominator_service__WEBPACK_IMPORTED_MODULE_6__["SessionNominatorService"]])
    ], SessionValidatorDetailComponent);
    return SessionValidatorDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/session-validator-list/session-validator-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/session-validator-list/session-validator-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'session-validator-list.Validators for current session' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-user-shield fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!validators || validators.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"validators && validators.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'session-validator-list.Address' | translate }}</th>\r\n                                <th>{{ 'session-validator-list.Total bonded' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let validator of validators.data; trackBy: validators.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-user-shield\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ validator.attributes.validator_stash }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"validator.attributes.validator_stash_id\"></app-identicon> {{ validator.attributes.validator_stash }}</a></td>\r\n                                    <td>{{ formatBalance(validator.attributes.bonded_total) | number:'1.0-15'}} {{ networkTokenSymbol }}</td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/session/validator/{{ validator.id }}\">{{ 'session-validator-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"validators && validators.data.length == 0 && !validators.is_loading\">{{ 'session-validator-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"validators && validators.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Global.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/session-validator-list/session-validator-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/session-validator-list/session-validator-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tdmFsaWRhdG9yLWxpc3Qvc2Vzc2lvbi12YWxpZGF0b3ItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/session-validator-list/session-validator-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/session-validator-list/session-validator-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SessionValidatorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionValidatorListComponent", function() { return SessionValidatorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_session_validator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/session-validator.service */ "./src/app/services/session-validator.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SessionValidatorListComponent = /** @class */ (function () {
    function SessionValidatorListComponent(sessionValidatorService, activatedRoute) {
        this.sessionValidatorService = sessionValidatorService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    SessionValidatorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].networkTokenSymbol;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    SessionValidatorListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: { latestSession: true },
        };
        this.sessionValidatorService.all(params).subscribe(function (validators) {
            _this.validators = validators;
        });
    };
    SessionValidatorListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    SessionValidatorListComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    SessionValidatorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-validator-list',
            template: __webpack_require__(/*! ./session-validator-list.component.html */ "./src/app/pages/session-validator-list/session-validator-list.component.html"),
            styles: [__webpack_require__(/*! ./session-validator-list.component.scss */ "./src/app/pages/session-validator-list/session-validator-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_session_validator_service__WEBPACK_IMPORTED_MODULE_2__["SessionValidatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SessionValidatorListComponent);
    return SessionValidatorListComponent;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-polkascan-header></app-polkascan-header>\r\n<section class=\"is-12\">\r\n <div class=\"card\">\r\n        <header class=\"card-header\">\r\n            <p class=\"card-header-title\">\r\n              {{ 'sesttings.Settings' | translate }}\r\n            </p>\r\n        </header>\r\n        <div class=\"card-table\">\r\n          <div class=\"content\">\r\n              <table class=\"table is-fullwidth is-striped\">\r\n                  <tbody>\r\n                      <tr>\r\n                        <td>{{ 'sesttings.API URL' | translate }}</td>\r\n                        <td>{{ environment.jsonApiRootUrl }}</td>\r\n                      </tr>\r\n                  </tbody>\r\n              </table>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * settings.component.ts
 */



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/pages/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/pages/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"proposal$ | async as proposal\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'Tech-comm-proposal-detail.Technical Committee Proposal' | translate }} #{{ proposal.attributes.proposal_id }}\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-microchip fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"proposal\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Tech-comm-proposal-detail.Created at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ proposal.attributes.created_at_block }}\">{{ proposal.attributes.created_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Tech-comm-proposal-detail.Updated at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ proposal.attributes.updated_at_block }}\">{{ proposal.attributes.updated_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Tech-comm-proposal-detail.Motion Hash' | translate }}</td>\r\n                                <td>\r\n                                  0x{{ proposal.attributes.motion_hash }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>{{ 'Tech-comm-proposal-detail.Proposer' | translate }}</td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ proposal.attributes.address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"proposal.attributes.account_id\"></app-identicon> {{ proposal.attributes.address }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Tech-comm-proposal-detail.Member Threshold' | translate }}</td>\r\n                                <td>\r\n                                  {{ proposal.attributes.member_threshold }}\r\n                                </td>\r\n                              </tr>\r\n                               <tr>\r\n                                <td width=\"20%\">{{ 'Tech-comm-proposal-detail.Aye votes' | translate }}</td>\r\n                                <td>\r\n                                  {{ proposal.attributes.yes_votes_count }}\r\n                                </td>\r\n                              </tr>\r\n                               <tr>\r\n                                <td width=\"20%\">{{ 'Tech-comm-proposal-detail.Nay votes' | translate }}</td>\r\n                                <td>\r\n                                  {{ proposal.attributes.no_votes_count }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Tech-comm-proposal-detail.Status' | translate }}</td>\r\n                                <td>\r\n                                  {{ proposal.attributes.status }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr *ngIf=\"proposal.attributes.status == 'Executed'\">\r\n                                <td width=\"15%\">{{ 'Tech-comm-proposal-detail.Execution result' | translate }}</td>\r\n                                <td>\r\n                                  <i *ngIf=\"proposal.attributes.executed === true\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"proposal.attributes.executed === false\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n        <section class=\"info-tiles\" *ngIf=\"proposal\">\r\n          <div class=\"card \">\r\n            <div class=\"tabs\">\r\n              <ul>\r\n                <li [ngClass]=\"{'is-active': currentTab == 'proposal'}\">\r\n                  <a routerLink=\".\" fragment=\"proposal\">\r\n                    <span class=\"icon is-small\"><i class=\"fas fa-poll\" aria-hidden=\"true\"></i></span>\r\n                    <span>{{ 'Tech-comm-proposal-detail.Proposal' | translate }}</span>\r\n                  </a>\r\n                </li>\r\n                <li [ngClass]=\"{'is-active': currentTab == 'votes'}\">\r\n                  <a routerLink=\".\" fragment=\"votes\">\r\n                    <span class=\"icon is-small\"><i class=\"fas fa-vote-yea\" aria-hidden=\"true\"></i></span>\r\n                    <span>{{ 'Tech-comm-proposal-detail.Votes' | translate }}</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n\r\n            <div class=\"card-table\" id=\"proposal\" *ngIf=\"currentTab == 'proposal'\">\r\n                <div class=\"content\">\r\n                  <table class=\"table is-striped\" *ngIf=\"proposal.attributes.proposal\">\r\n                  <tbody>\r\n                    <tr *ngIf=\"proposal.attributes.proposal.call_documentation\">\r\n                      <td>{{ 'Proposal.Description' | translate}}</td>\r\n                      <td>{{ proposal.attributes.proposal.call_documentation }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>{{ 'Proposal.Module' | translate }}</td>\r\n                      <td>{{ proposal.attributes.proposal.call_module }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>{{ 'Proposal.Call' | translate }}</td>\r\n                      <td>{{ proposal.attributes.proposal.call_name }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>{{ 'Proposal.Parameters' | translate }}</td>\r\n                      <td>\r\n                        <app-struct\r\n                          [struct]=\"proposal.attributes.proposal.params\"\r\n                          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n                          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n                          [networkURLPrefix]=\"networkURLPrefix\"\r\n                        ></app-struct>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n                  <table class=\"table is-striped\" *ngIf=\"proposal.attributes.proposal?.proposalHash\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>{{ 'Tech-comm-proposal-detail.Proposal Hash' | translate }}</td>\r\n                      <td>{{ proposal.attributes.proposal?.proposalHash }}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                  </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-table\" id=\"votes\" *ngIf=\"currentTab == 'votes'\">\r\n                <div class=\"content\">\r\n                    <table class=\"table is-fullwidth is-striped\">\r\n                         <thead>\r\n                          <tr>\r\n                            <th></th>\r\n                            <th>{{ 'Tech-comm-proposal-detail.Account' | translate }}</th>\r\n                            <th>{{ 'Tech-comm-proposal-detail.Vote' | translate }}</th>\r\n                            <th class=\"is-hidden-mobile\">{{ 'Tech-comm-proposal-detail.Block' | translate }}</th>\r\n                            <th></th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let vote of proposal.relationships.votes.data; trackBy: proposal.relationships.votes.trackBy\">\r\n                                <td width=\"5%\">\r\n                                  <i class=\"fa fa-vote-yea\"></i>\r\n                                </td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ vote.attributes.address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"vote.attributes.account_id\"></app-identicon> {{ vote.attributes.address }}</a></td>\r\n                                <td>\r\n                                  <i *ngIf=\"vote.attributes.vote\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                  <i *ngIf=\"!vote.attributes.vote\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                </td>\r\n                                <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ vote.attributes.updated_at_block }}\">{{ vote.attributes.updated_at_block }}</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2gtY29tbS1wcm9wb3NhbC1kZXRhaWwvdGVjaC1jb21tLXByb3Bvc2FsLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TechCommProposalDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechCommProposalDetailComponent", function() { return TechCommProposalDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_tech_comm_proposal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tech-comm-proposal.service */ "./src/app/services/tech-comm-proposal.service.ts");
/* harmony import */ var _services_tech_comm_proposal_vote_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tech-comm-proposal-vote.service */ "./src/app/services/tech-comm-proposal-vote.service.ts");







var TechCommProposalDetailComponent = /** @class */ (function () {
    function TechCommProposalDetailComponent(activatedRoute, router, techCommProposalService, techCommProposalVoteService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.techCommProposalService = techCommProposalService;
        this.techCommProposalVoteService = techCommProposalVoteService;
    }
    TechCommProposalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentTab = 'proposal';
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].networkTokenSymbol;
        this.proposal$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.techCommProposalService.get(params.get('id'), { include: ['votes'] });
        }));
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (value === 'proposal' || value === 'votes') {
                _this.currentTab = value;
            }
        });
    };
    TechCommProposalDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    TechCommProposalDetailComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    TechCommProposalDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tech-comm-proposal-detail',
            template: __webpack_require__(/*! ./tech-comm-proposal-detail.component.html */ "./src/app/pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component.html"),
            styles: [__webpack_require__(/*! ./tech-comm-proposal-detail.component.scss */ "./src/app/pages/tech-comm-proposal-detail/tech-comm-proposal-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_tech_comm_proposal_service__WEBPACK_IMPORTED_MODULE_5__["TechCommProposalService"],
            _services_tech_comm_proposal_vote_service__WEBPACK_IMPORTED_MODULE_6__["TechCommProposalVoteService"]])
    ], TechCommProposalDetailComponent);
    return TechCommProposalDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tech-comm-proposal-list/tech-comm-proposal-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tech-comm-proposal-list/tech-comm-proposal-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'Tech-comm-proposal-list.Technical committee proposals' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-microchip fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"proposals?.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"proposals?.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Tech-comm-proposal-list.Proposal ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Tech-comm-proposal-list.Created at Block' | translate }}</th>\r\n                                <th>{{ 'Tech-comm-proposal-list.Member Threshold' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Tech-comm-proposal-list.Aye votes' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Tech-comm-proposal-list.Nay votes' | translate }}</th>\r\n                                <th>{{ 'Tech-comm-proposal-list.Status' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let proposal of proposals.data; trackBy: proposals.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-microchip\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/techcomm/proposal/{{ proposal.attributes.proposal_id }}\">{{ proposal.attributes.proposal_id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ proposal.attributes.created_at_block }}\">{{ proposal.attributes.created_at_block }}</a></td>\r\n                                    <td>\r\n                                      {{ proposal.attributes.member_threshold }}\r\n                                    </td>\r\n                                    <td class=\"is-hidden-mobile\">{{ proposal.attributes.yes_votes_count }}</td>\r\n                                    <td class=\"is-hidden-mobile\">{{ proposal.attributes.no_votes_count }}</td>\r\n                                    <td>\r\n                                      {{ proposal.attributes.status }}\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/techcomm/proposal/{{ proposal.attributes.proposal_id }}\">{{ 'Tech-comm-proposal-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"proposals?.data.length == 0 && !proposals.is_loading\">{{ 'Tech-comm-proposal-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"proposals?.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Tech-comm-proposal-list.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/tech-comm-proposal-list/tech-comm-proposal-list.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tech-comm-proposal-list/tech-comm-proposal-list.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2gtY29tbS1wcm9wb3NhbC1saXN0L3RlY2gtY29tbS1wcm9wb3NhbC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tech-comm-proposal-list/tech-comm-proposal-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tech-comm-proposal-list/tech-comm-proposal-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: TechCommProposalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechCommProposalListComponent", function() { return TechCommProposalListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tech_comm_proposal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tech-comm-proposal.service */ "./src/app/services/tech-comm-proposal.service.ts");




var TechCommProposalListComponent = /** @class */ (function () {
    function TechCommProposalListComponent(techCommProposalService, activatedRoute) {
        this.techCommProposalService = techCommProposalService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    TechCommProposalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    TechCommProposalListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.techCommProposalService.all(params).subscribe(function (proposals) {
            _this.proposals = proposals;
        });
    };
    TechCommProposalListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    TechCommProposalListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tech-comm-proposal-list',
            template: __webpack_require__(/*! ./tech-comm-proposal-list.component.html */ "./src/app/pages/tech-comm-proposal-list/tech-comm-proposal-list.component.html"),
            styles: [__webpack_require__(/*! ./tech-comm-proposal-list.component.scss */ "./src/app/pages/tech-comm-proposal-list/tech-comm-proposal-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tech_comm_proposal_service__WEBPACK_IMPORTED_MODULE_3__["TechCommProposalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TechCommProposalListComponent);
    return TechCommProposalListComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction-detail/transaction-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/transaction-detail/transaction-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-12\">\r\n      <app-polkascan-header></app-polkascan-header>\r\n       <section class=\"info-tiles\">\r\n        <app-extrinsic-table\r\n          [extrinsic]=\"extrinsic$ | async\"\r\n          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n          title=\"Transaction\"\r\n        ></app-extrinsic-table>\r\n       </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/transaction-detail/transaction-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/transaction-detail/transaction-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zYWN0aW9uLWRldGFpbC90cmFuc2FjdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/transaction-detail/transaction-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/transaction-detail/transaction-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: TransactionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailComponent", function() { return TransactionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic-detail.component.ts
 */






var TransactionDetailComponent = /** @class */ (function () {
    function TransactionDetailComponent(route, extrinsicService) {
        this.route = route;
        this.extrinsicService = extrinsicService;
    }
    TransactionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].networkTokenSymbol;
        this.extrinsic$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.extrinsicService.get(params.get('id'));
        }));
    };
    TransactionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transaction-detail',
            template: __webpack_require__(/*! ./transaction-detail.component.html */ "./src/app/pages/transaction-detail/transaction-detail.component.html"),
            styles: [__webpack_require__(/*! ./transaction-detail.component.scss */ "./src/app/pages/transaction-detail/transaction-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_4__["ExtrinsicService"]])
    ], TransactionDetailComponent);
    return TransactionDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/transaction-list/transaction-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/transaction-list/transaction-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n\r\n                <header class=\"card-header\">\r\n                    <div class=\"card-header-title\">\r\n                        <p>{{ 'transaction-list.Transactions' | translate }}</p>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"card-header-icon\">\r\n                      <div class=\"filters\">\r\n                        <div class=\"field has-addons\">\r\n                          <div class=\"control is-expanded has-icons-left\">\r\n                            <div class=\"select is-fullwidth\">\r\n                              <select name=\"country\" [(ngModel)]=\"filterModule\" (ngModelChange)=\"selectModule($event)\">\r\n                                <option [ngValue]=\"null\">{{ 'transaction-list.All modules' | translate }}</option>\r\n                                <option *ngFor=\"let module of runtimeModules.data\" [ngValue]=\"module\">{{module.attributes.name}}</option>\r\n                              </select>\r\n                            </div>\r\n                            <span class=\"icon is-small is-left\">\r\n                              <i class=\"fas fa-cog\"></i>\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"control is-expanded has-icons-left\">\r\n                            <div class=\"select is-fullwidth\">\r\n                              <select name=\"country\" [(ngModel)]=\"filterCall\" [disabled]=\"!runtimeCalls\">\r\n                                <option [ngValue]=\"null\">{{ 'transaction-list.All calls' | translate }}</option>\r\n                                <ng-container *ngIf=\"runtimeCalls\">\r\n                                <option *ngFor=\"let call of runtimeCalls.data\" [ngValue]=\"call\">{{call.attributes.name}}</option>\r\n                                </ng-container>\r\n                              </select>\r\n                            </div>\r\n                            <span class=\"icon is-small is-left\">\r\n                              <i class=\"fas fa-file-alt\"></i>\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"control\">\r\n                            <button type=\"submit\" class=\"button\" (click)=\"applyFilters()\">{{ 'transaction-list.Filter' | translate }}</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <a [routerLink]=\"\" fragment=\"list\"  aria-label=\"more options\">\r\n                        <span class=\"icon\">\r\n                          <i class=\"fa fa-file-signature fa-2x\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n\r\n                </header>\r\n\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"!extrinsics || extrinsics.is_loading\"></app-loading-box>\r\n\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"extrinsics && extrinsics.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'transaction-list.Transaction ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'transaction-list.From' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'transaction-list.Block' | translate }}</th>\r\n                                <th>{{ 'transaction-list.Module' | translate }}</th>\r\n                                <th>{{ 'transaction-list.Call' | translate }}</th>\r\n                                <th>{{ 'transaction-list.Success' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let extrinsic of extrinsics.data; trackBy: extrinsics.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i *ngIf=\"extrinsic.attributes.signed\" class=\"fa fa-file-signature\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.unsigned\" class=\"fa fa-file-alt\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/transaction/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\"><div class=\"hash-format\">0x{{ extrinsic.attributes.extrinsic_hash }}</div></a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/account/{{ extrinsic.attributes.address }}\" class=\"address-format\"><app-identicon [accountId]=\"extrinsic.attributes.address_id\"></app-identicon> {{ extrinsic.attributes.address }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ extrinsic.attributes.block_id }}\">{{ extrinsic.attributes.block_id }}</a></td>\r\n                                    <td>{{ extrinsic.attributes.module_id }}</td>\r\n                                    <td>{{ extrinsic.attributes.call_id }}</td>\r\n                                    <td>\r\n                                      <i *ngIf=\"extrinsic.attributes.success\" class=\"fa fa-check\" style=\"color: forestgreen\"></i>\r\n                                      <i *ngIf=\"extrinsic.attributes.error\" class=\"fa fa-times\" style=\"color: darkred\"></i>\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/transaction/{{ extrinsic.attributes.extrinsic_hash ? '0x' + extrinsic.attributes.extrinsic_hash : extrinsic.id }}\">{{ 'transaction-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"extrinsics && extrinsics.data.length == 0 && !extrinsics.is_loading\">{{ 'transaction-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"extrinsics && extrinsics.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Global.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/transaction-list/transaction-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/transaction-list/transaction-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filters {\n  margin-right: 30px;\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhbnNhY3Rpb24tbGlzdC9KOlxccHJvamVjdHNcXHBvbGthc2Nhbi1wcmUtZXhwbG9yZXItZ3VpL3NyY1xcYXBwXFxwYWdlc1xcdHJhbnNhY3Rpb24tbGlzdFxcdHJhbnNhY3Rpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zYWN0aW9uLWxpc3QvdHJhbnNhY3Rpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/transaction-list/transaction-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/transaction-list/transaction-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionListComponent", function() { return TransactionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_extrinsic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/extrinsic.service */ "./src/app/services/extrinsic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/runtime-module.service */ "./src/app/services/runtime-module.service.ts");
/* harmony import */ var _services_runtime_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/runtime-call.service */ "./src/app/services/runtime-call.service.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic-list.component.ts
 *
 */






var TransactionListComponent = /** @class */ (function () {
    function TransactionListComponent(extrinsicService, runtimeModuleService, runtimeCallService, activatedRoute) {
        this.extrinsicService = extrinsicService;
        this.runtimeModuleService = runtimeModuleService;
        this.runtimeCallService = runtimeCallService;
        this.activatedRoute = activatedRoute;
        this.filterModule = null;
        this.filterCall = null;
        this.currentPage = 1;
    }
    TransactionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = {
            remotefilter: { latestRuntime: true },
        };
        this.runtimeModuleService.all(params).subscribe(function (runtimeModules) {
            _this.runtimeModules = runtimeModules;
        });
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getExtrinsics(_this.currentPage);
        });
    };
    TransactionListComponent.prototype.selectModule = function (module) {
        var _this = this;
        this.filterModule = module;
        this.filterCall = null;
        if (module !== null) {
            var params = {
                page: { number: 0, size: 100 },
                remotefilter: { latestRuntime: true, module_id: this.filterModule.attributes.module_id },
            };
            this.runtimeCallService.all(params).subscribe(function (runtimeCalls) {
                _this.runtimeCalls = runtimeCalls;
            });
        }
        else {
            this.runtimeCalls = null;
        }
    };
    TransactionListComponent.prototype.applyFilters = function () {
        this.currentPage = 1;
        this.getExtrinsics(this.currentPage);
    };
    TransactionListComponent.prototype.getExtrinsics = function (page) {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {
                signed: 1
            },
        };
        if (this.filterModule !== null) {
            // @ts-ignore
            params.remotefilter.module_id = this.filterModule.attributes.module_id;
        }
        if (this.filterCall !== null) {
            // @ts-ignore
            params.remotefilter.call_id = this.filterCall.attributes.call_id;
        }
        this.extrinsicService.all(params).subscribe(function (extrinsics) {
            _this.extrinsics = extrinsics;
        });
    };
    TransactionListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    TransactionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transaction-list',
            template: __webpack_require__(/*! ./transaction-list.component.html */ "./src/app/pages/transaction-list/transaction-list.component.html"),
            styles: [__webpack_require__(/*! ./transaction-list.component.scss */ "./src/app/pages/transaction-list/transaction-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_extrinsic_service__WEBPACK_IMPORTED_MODULE_2__["ExtrinsicService"],
            _services_runtime_module_service__WEBPACK_IMPORTED_MODULE_4__["RuntimeModuleService"],
            _services_runtime_call_service__WEBPACK_IMPORTED_MODULE_5__["RuntimeCallService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TransactionListComponent);
    return TransactionListComponent;
}());



/***/ }),

/***/ "./src/app/pages/treasury-proposal-detail/treasury-proposal-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/treasury-proposal-detail/treasury-proposal-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-12\">\r\n    <app-polkascan-header></app-polkascan-header>\r\n    <div *ngIf=\"proposal$ | async as proposal\">\r\n        <section class=\"info-tiles\">\r\n          <div class=\"card events-card\">\r\n              <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                      {{ 'Treasury-proposal-detail.Treasury Proposal' | translate }} #{{ proposal.attributes.proposal_id }}\r\n                  </p>\r\n                  <a  class=\"card-header-icon\" aria-label=\"more options\">\r\n                 <span class=\"icon\"><i class=\"fa fa-piggy-bank fa-2x\"></i></span>\r\n                </a>\r\n              </header>\r\n              <div class=\"card-table\" *ngIf=\"proposal\">\r\n                  <div class=\"content\">\r\n                      <table class=\"table is-fullwidth is-striped\">\r\n                          <tbody>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Treasury-proposal-detail.Created at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ proposal.attributes.created_at_block }}\">{{ proposal.attributes.created_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Treasury-proposal-detail.Updated at block' | translate }}</td>\r\n                                <td><a routerLink=\"/block/{{ proposal.attributes.updated_at_block }}\">{{ proposal.attributes.updated_at_block }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>{{ 'Treasury-proposal-detail.Proposed by' | translate }}</td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ proposal.attributes.proposed_by_address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"proposal.attributes.proposed_by_account_id\"></app-identicon> {{ proposal.attributes.proposed_by_address }}</a></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>{{ 'Treasury-proposal-detail.Beneficiary' | translate }}</td>\r\n                                <td><a routerLink=\"{{ networkURLPrefix }}/account/{{ proposal.attributes.beneficiary_address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"proposal.attributes.beneficiary_account_id\"></app-identicon> {{ proposal.attributes.beneficiary_address }}</a></td>\r\n                              </tr>\r\n                               <tr>\r\n                                <td width=\"20%\">{{ 'Treasury-proposal-detail.Value' | translate }}</td>\r\n                                <td>\r\n                                  {{ formatBalance(proposal.attributes.value) | number}} {{ networkTokenSymbol }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td width=\"20%\">{{ 'Treasury-proposal-detail.Status' | translate }}</td>\r\n                                <td>\r\n                                  {{ proposal.attributes.status }}\r\n                                </td>\r\n                              </tr>\r\n                              <tr *ngIf=\"proposal.attributes.status == 'Rejected'\">\r\n                                <td width=\"15%\">{{ 'Treasury-proposal-detail.Slash value' | translate }}</td>\r\n                                <td>\r\n                                 {{ formatBalance(proposal.attributes.slash_value) | number}} {{ networkTokenSymbol }}\r\n                                </td>\r\n                              </tr>\r\n                          </tbody>\r\n                      </table>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/treasury-proposal-detail/treasury-proposal-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/treasury-proposal-detail/treasury-proposal-detail.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyZWFzdXJ5LXByb3Bvc2FsLWRldGFpbC90cmVhc3VyeS1wcm9wb3NhbC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/treasury-proposal-detail/treasury-proposal-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/treasury-proposal-detail/treasury-proposal-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TreasuryProposalDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasuryProposalDetailComponent", function() { return TreasuryProposalDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_treasury_proposal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/treasury-proposal.service */ "./src/app/services/treasury-proposal.service.ts");






var TreasuryProposalDetailComponent = /** @class */ (function () {
    function TreasuryProposalDetailComponent(activatedRoute, router, treasuryProposalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.treasuryProposalService = treasuryProposalService;
    }
    TreasuryProposalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].networkTokenSymbol;
        this.proposal$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.treasuryProposalService.get(params.get('id'));
        }));
    };
    TreasuryProposalDetailComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    TreasuryProposalDetailComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
    };
    TreasuryProposalDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-treasury-proposal-detail',
            template: __webpack_require__(/*! ./treasury-proposal-detail.component.html */ "./src/app/pages/treasury-proposal-detail/treasury-proposal-detail.component.html"),
            styles: [__webpack_require__(/*! ./treasury-proposal-detail.component.scss */ "./src/app/pages/treasury-proposal-detail/treasury-proposal-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_treasury_proposal_service__WEBPACK_IMPORTED_MODULE_5__["TreasuryProposalService"]])
    ], TreasuryProposalDetailComponent);
    return TreasuryProposalDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/treasury-proposal-list/treasury-proposal-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/treasury-proposal-list/treasury-proposal-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n    <div class=\"column is-12\">\r\n        <app-polkascan-header></app-polkascan-header>\r\n        <section>\r\n            <div class=\"card \">\r\n                <header class=\"card-header\">\r\n                    <p class=\"card-header-title\">\r\n                        {{ 'Treasury-proposal-list.Treasury proposals' | translate }}\r\n                    </p>\r\n                    <a [routerLink]=\"\" fragment=\"list\" class=\"card-header-icon\" aria-label=\"more options\">\r\n                      <span class=\"icon\">\r\n                        <i class=\"fa fa-piggy-bank fa-2x\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                    </a>\r\n                </header>\r\n                <div class=\"card-table\">\r\n                    <div class=\"content\">\r\n                        <app-loading-box *ngIf=\"proposals?.is_loading\"></app-loading-box>\r\n                        <table class=\"table is-fullwidth is-striped\" *ngIf=\"proposals?.data.length > 0\">\r\n                             <thead>\r\n                              <tr>\r\n                                <th></th>\r\n                                <th>{{ 'Treasury-proposal-list.Proposal ID' | translate }}</th>\r\n                                <th class=\"is-hidden-mobile\">{{ 'Treasury-proposal-list.Created at Block' | translate }}</th>\r\n                                <th>{{ 'Treasury-proposal-list.Beneficiary' | translate }}</th>\r\n                                <th>{{ 'Treasury-proposal-list.Value' | translate }}</th>\r\n                                <th>{{ 'Treasury-proposal-list.Status' | translate }}</th>\r\n                                <th></th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let proposal of proposals.data; trackBy: proposals.trackBy\">\r\n                                    <td width=\"5%\">\r\n                                      <i class=\"fa fa-piggy-bank\"></i>\r\n                                    </td>\r\n                                    <td><a routerLink=\"{{ networkURLPrefix }}/treasury/proposal/{{ proposal.attributes.proposal_id }}\">{{ proposal.attributes.proposal_id }}</a></td>\r\n                                    <td class=\"is-hidden-mobile\"><a routerLink=\"{{ networkURLPrefix }}/block/{{ proposal.attributes.created_at_block }}\">{{ proposal.attributes.created_at_block }}</a></td>\r\n                                    <td>\r\n                                      <a routerLink=\"{{ networkURLPrefix }}/account/{{ proposal.attributes.beneficiary_address }}\" class=\"address-mobile-format\"><app-identicon [accountId]=\"proposal.attributes.beneficiary_account_id\"></app-identicon> {{ proposal.attributes.beneficiary_address }}</a>\r\n                                    </td>\r\n                                    <td>\r\n                                      {{ formatBalance(proposal.attributes.value) | number}} {{ networkTokenSymbol }}\r\n                                    </td>\r\n                                    <td>\r\n                                      {{ proposal.attributes.status }}\r\n                                    </td>\r\n                                    <td width=\"5%\"><a class=\"button is-small is-primary\" routerLink=\"{{ networkURLPrefix }}/treasury/proposal/{{ proposal.attributes.proposal_id }}\">{{ 'Treasury-proposal-list.Details' | translate }}</a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"no-items\" *ngIf=\"proposals?.data.length == 0 && !proposals.is_loading\">{{ 'Treasury-proposal-list.No items' | translate }}</div>\r\n                    </div>\r\n                </div>\r\n                <footer class=\"card-footer\" *ngIf=\"proposals?.data.length > 0\">\r\n                    <a routerLink=\".\" fragment=\"{{ currentPage + 1 }}\" class=\"card-footer-item\">{{ 'Treasury-proposal-list.View next' | translate }}</a>\r\n                </footer>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/treasury-proposal-list/treasury-proposal-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/treasury-proposal-list/treasury-proposal-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyZWFzdXJ5LXByb3Bvc2FsLWxpc3QvdHJlYXN1cnktcHJvcG9zYWwtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/treasury-proposal-list/treasury-proposal-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/treasury-proposal-list/treasury-proposal-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TreasuryProposalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasuryProposalListComponent", function() { return TreasuryProposalListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_treasury_proposal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/treasury-proposal.service */ "./src/app/services/treasury-proposal.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var TreasuryProposalListComponent = /** @class */ (function () {
    function TreasuryProposalListComponent(treasuryProposalService, activatedRoute) {
        this.treasuryProposalService = treasuryProposalService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
    }
    TreasuryProposalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.networkTokenDecimals = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].networkTokenDecimals;
        this.networkTokenSymbol = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].networkTokenSymbol;
        this.fragmentSubsription = this.activatedRoute.fragment.subscribe(function (value) {
            if (+value > 0) {
                _this.currentPage = +value;
            }
            else {
                _this.currentPage = 1;
            }
            _this.getItems(_this.currentPage);
        });
    };
    TreasuryProposalListComponent.prototype.getItems = function (page) {
        var _this = this;
        var params = {
            page: { number: page, size: 25 },
            remotefilter: {},
        };
        this.treasuryProposalService.all(params).subscribe(function (proposals) {
            _this.proposals = proposals;
        });
    };
    TreasuryProposalListComponent.prototype.formatBalance = function (balance) {
        return balance / Math.pow(10, this.networkTokenDecimals);
    };
    TreasuryProposalListComponent.prototype.ngOnDestroy = function () {
        // Will clear when component is destroyed e.g. route is navigated away from.
        this.fragmentSubsription.unsubscribe();
    };
    TreasuryProposalListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-treasury-proposal-list',
            template: __webpack_require__(/*! ./treasury-proposal-list.component.html */ "./src/app/pages/treasury-proposal-list/treasury-proposal-list.component.html"),
            styles: [__webpack_require__(/*! ./treasury-proposal-list.component.scss */ "./src/app/pages/treasury-proposal-list/treasury-proposal-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_treasury_proposal_service__WEBPACK_IMPORTED_MODULE_3__["TreasuryProposalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TreasuryProposalListComponent);
    return TreasuryProposalListComponent;
}());



/***/ }),

/***/ "./src/app/services/account-index.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/account-index.service.ts ***!
  \***************************************************/
/*! exports provided: AccountIndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountIndexService", function() { return AccountIndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_account_index_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/account-index.class */ "./src/app/classes/account-index.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.service.ts
 */




var AccountIndexService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccountIndexService, _super);
    function AccountIndexService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_account_index_class__WEBPACK_IMPORTED_MODULE_3__["AccountIndex"];
        _this.type = 'accountindex';
        _this.path = 'accountindex';
        return _this;
    }
    AccountIndexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], AccountIndexService);
    return AccountIndexService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_account_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/account.class */ "./src/app/classes/account.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.service.ts
 */




var AccountService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccountService, _super);
    function AccountService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_account_class__WEBPACK_IMPORTED_MODULE_3__["Account"];
        _this.type = 'account';
        _this.path = 'account';
        return _this;
    }
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], AccountService);
    return AccountService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/balance-transfer.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/balance-transfer.service.ts ***!
  \******************************************************/
/*! exports provided: BalanceTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceTransferService", function() { return BalanceTransferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_balancetransfer_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/balancetransfer.class */ "./src/app/classes/balancetransfer.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.service.ts
 */




var BalanceTransferService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BalanceTransferService, _super);
    function BalanceTransferService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_balancetransfer_class__WEBPACK_IMPORTED_MODULE_3__["BalanceTransfer"];
        _this.type = 'balancetransfer';
        _this.path = 'balances/transfer';
        return _this;
    }
    BalanceTransferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], BalanceTransferService);
    return BalanceTransferService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/block-total.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/block-total.service.ts ***!
  \*************************************************/
/*! exports provided: BlockTotalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTotalService", function() { return BlockTotalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_block_total_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/block-total.class */ "./src/app/classes/block-total.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.service.ts
 */




var BlockTotalService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BlockTotalService, _super);
    function BlockTotalService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_block_total_class__WEBPACK_IMPORTED_MODULE_3__["BlockTotal"];
        _this.type = 'block-total';
        _this.path = 'block-total';
        return _this;
    }
    BlockTotalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], BlockTotalService);
    return BlockTotalService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/block.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/block.service.ts ***!
  \*******************************************/
/*! exports provided: BlockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockService", function() { return BlockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_block_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/block.class */ "./src/app/classes/block.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * block.service.ts
 */




var BlockService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BlockService, _super);
    function BlockService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_block_class__WEBPACK_IMPORTED_MODULE_3__["Block"];
        _this.type = 'block';
        _this.path = 'block';
        return _this;
    }
    BlockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], BlockService);
    return BlockService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/contract.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contract.service.ts ***!
  \**********************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_contract_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/contract.class */ "./src/app/classes/contract.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.service.ts
 */




var ContractService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContractService, _super);
    function ContractService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_contract_class__WEBPACK_IMPORTED_MODULE_3__["Contract"];
        _this.type = 'contract';
        _this.path = 'contract/contract';
        return _this;
    }
    ContractService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], ContractService);
    return ContractService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/council-motion.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/council-motion.service.ts ***!
  \****************************************************/
/*! exports provided: CouncilMotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouncilMotionService", function() { return CouncilMotionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_council_motion_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/council-motion.class */ "./src/app/classes/council-motion.class.ts");




var CouncilMotionService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CouncilMotionService, _super);
    function CouncilMotionService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_council_motion_class__WEBPACK_IMPORTED_MODULE_3__["CouncilMotion"];
        _this.type = 'councilmotion';
        _this.path = 'council/motion';
        return _this;
    }
    CouncilMotionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], CouncilMotionService);
    return CouncilMotionService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/council-vote.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/council-vote.service.ts ***!
  \**************************************************/
/*! exports provided: CouncilVoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouncilVoteService", function() { return CouncilVoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_council_vote_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/council-vote.class */ "./src/app/classes/council-vote.class.ts");




var CouncilVoteService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CouncilVoteService, _super);
    function CouncilVoteService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_council_vote_class__WEBPACK_IMPORTED_MODULE_3__["CouncilVote"];
        _this.type = 'councilvote';
        _this.path = 'council/vote';
        return _this;
    }
    CouncilVoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], CouncilVoteService);
    return CouncilVoteService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/democracy-proposal.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/democracy-proposal.service.ts ***!
  \********************************************************/
/*! exports provided: DemocracyProposalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemocracyProposalService", function() { return DemocracyProposalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_democracy_proposal_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/democracy-proposal.class */ "./src/app/classes/democracy-proposal.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.service.ts
 */




var DemocracyProposalService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DemocracyProposalService, _super);
    function DemocracyProposalService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_democracy_proposal_class__WEBPACK_IMPORTED_MODULE_3__["DemocracyProposal"];
        _this.type = 'democracyproposal';
        _this.path = 'democracy/proposal';
        return _this;
    }
    DemocracyProposalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], DemocracyProposalService);
    return DemocracyProposalService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/democracy-referendum.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/democracy-referendum.service.ts ***!
  \**********************************************************/
/*! exports provided: DemocracyReferendumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemocracyReferendumService", function() { return DemocracyReferendumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_democracy_referendum_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/democracy-referendum.class */ "./src/app/classes/democracy-referendum.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.service.ts
 */




var DemocracyReferendumService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DemocracyReferendumService, _super);
    function DemocracyReferendumService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_democracy_referendum_class__WEBPACK_IMPORTED_MODULE_3__["DemocracyReferendum"];
        _this.type = 'democracyreferendum';
        _this.path = 'democracy/referendum';
        return _this;
    }
    DemocracyReferendumService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], DemocracyReferendumService);
    return DemocracyReferendumService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/democracy-vote.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/democracy-vote.service.ts ***!
  \****************************************************/
/*! exports provided: DemocracyVoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemocracyVoteService", function() { return DemocracyVoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_democracy_vote_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/democracy-vote.class */ "./src/app/classes/democracy-vote.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.service.ts
 */




var DemocracyVoteService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DemocracyVoteService, _super);
    function DemocracyVoteService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_democracy_vote_class__WEBPACK_IMPORTED_MODULE_3__["DemocracyVote"];
        _this.type = 'democracyvote';
        _this.path = 'democracy/vote';
        return _this;
    }
    DemocracyVoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], DemocracyVoteService);
    return DemocracyVoteService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_event_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/event.class */ "./src/app/classes/event.class.ts");




var EventService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EventService, _super);
    function EventService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_event_class__WEBPACK_IMPORTED_MODULE_3__["Event"];
        _this.type = 'event';
        _this.path = 'event';
        return _this;
    }
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], EventService);
    return EventService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/extrinsic.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/extrinsic.service.ts ***!
  \***********************************************/
/*! exports provided: ExtrinsicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrinsicService", function() { return ExtrinsicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_extrinsic_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/extrinsic.class */ "./src/app/classes/extrinsic.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.service.ts
 */




var ExtrinsicService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExtrinsicService, _super);
    function ExtrinsicService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_extrinsic_class__WEBPACK_IMPORTED_MODULE_3__["Extrinsic"];
        _this.type = 'extrinsic';
        _this.path = 'extrinsic';
        return _this;
    }
    ExtrinsicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], ExtrinsicService);
    return ExtrinsicService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/log.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/log.service.ts ***!
  \*****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_log_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/log.class */ "./src/app/classes/log.class.ts");




var LogService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogService, _super);
    function LogService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_log_class__WEBPACK_IMPORTED_MODULE_3__["Log"];
        _this.type = 'log';
        _this.path = 'log';
        return _this;
    }
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], LogService);
    return LogService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * message.service.ts
 */


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/networkstats.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/networkstats.service.ts ***!
  \**************************************************/
/*! exports provided: NetworkstatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkstatsService", function() { return NetworkstatsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_networkstats_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/networkstats.class */ "./src/app/classes/networkstats.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * networkstats.service.ts
 */




var NetworkstatsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NetworkstatsService, _super);
    function NetworkstatsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_networkstats_class__WEBPACK_IMPORTED_MODULE_3__["Networkstats"];
        _this.type = 'networkstats';
        _this.path = 'networkstats';
        return _this;
    }
    NetworkstatsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], NetworkstatsService);
    return NetworkstatsService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/runtime-call-param.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/runtime-call-param.service.ts ***!
  \********************************************************/
/*! exports provided: RuntimeCallParamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeCallParamService", function() { return RuntimeCallParamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_runtime_call_param_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/runtime-call-param.class */ "./src/app/classes/runtime-call-param.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-call-param.service.ts
 *
 */




var RuntimeCallParamService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeCallParamService, _super);
    function RuntimeCallParamService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_runtime_call_param_class__WEBPACK_IMPORTED_MODULE_3__["RuntimeCallParam"];
        _this.type = 'runtimecallparam';
        _this.path = 'runtime-call-param';
        return _this;
    }
    RuntimeCallParamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], RuntimeCallParamService);
    return RuntimeCallParamService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/runtime-call.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/runtime-call.service.ts ***!
  \**************************************************/
/*! exports provided: RuntimeCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeCallService", function() { return RuntimeCallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_runtime_call_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/runtime-call.class */ "./src/app/classes/runtime-call.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-call.service.ts
 *
 */




var RuntimeCallService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeCallService, _super);
    function RuntimeCallService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_runtime_call_class__WEBPACK_IMPORTED_MODULE_3__["RuntimeCall"];
        _this.type = 'runtimecall';
        _this.path = 'runtime-call';
        return _this;
    }
    RuntimeCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], RuntimeCallService);
    return RuntimeCallService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/runtime-constant.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/runtime-constant.service.ts ***!
  \******************************************************/
/*! exports provided: RuntimeConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeConstantService", function() { return RuntimeConstantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_runtime_constant_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/runtime-constant.class */ "./src/app/classes/runtime-constant.class.ts");




var RuntimeConstantService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeConstantService, _super);
    function RuntimeConstantService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_runtime_constant_class__WEBPACK_IMPORTED_MODULE_3__["RuntimeConstant"];
        _this.type = 'runtimeconstant';
        _this.path = 'runtime-constant';
        return _this;
    }
    RuntimeConstantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], RuntimeConstantService);
    return RuntimeConstantService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/runtime-event-attribute.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/runtime-event-attribute.service.ts ***!
  \*************************************************************/
/*! exports provided: RuntimeEventAttributeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeEventAttributeService", function() { return RuntimeEventAttributeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_runtime_event_attribute_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/runtime-event-attribute.class */ "./src/app/classes/runtime-event-attribute.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-event-attribute.service.ts
 *
 */




var RuntimeEventAttributeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeEventAttributeService, _super);
    function RuntimeEventAttributeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_runtime_event_attribute_class__WEBPACK_IMPORTED_MODULE_3__["RuntimeEventAttribute"];
        _this.type = 'runtimeeventattribute';
        _this.path = 'runtime-event-attribute';
        return _this;
    }
    RuntimeEventAttributeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], RuntimeEventAttributeService);
    return RuntimeEventAttributeService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/runtime-event.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/runtime-event.service.ts ***!
  \***************************************************/
/*! exports provided: RuntimeEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeEventService", function() { return RuntimeEventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_runtime_event_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/runtime-event.class */ "./src/app/classes/runtime-event.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-event.service.ts
 *
 */




var RuntimeEventService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeEventService, _super);
    function RuntimeEventService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_runtime_event_class__WEBPACK_IMPORTED_MODULE_3__["RuntimeEvent"];
        _this.type = 'runtimeevent';
        _this.path = 'runtime-event';
        return _this;
    }
    RuntimeEventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], RuntimeEventService);
    return RuntimeEventService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/runtime-module.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/runtime-module.service.ts ***!
  \****************************************************/
/*! exports provided: RuntimeModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeModuleService", function() { return RuntimeModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_runtime_module_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/runtime-module.class */ "./src/app/classes/runtime-module.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-module.service.ts
 *
 */




var RuntimeModuleService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeModuleService, _super);
    function RuntimeModuleService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_runtime_module_class__WEBPACK_IMPORTED_MODULE_3__["RuntimeModule"];
        _this.type = 'runtimemodule';
        _this.path = 'runtime-module';
        return _this;
    }
    RuntimeModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], RuntimeModuleService);
    return RuntimeModuleService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/runtime-storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/runtime-storage.service.ts ***!
  \*****************************************************/
/*! exports provided: RuntimeStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeStorageService", function() { return RuntimeStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_runtime_storage_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/runtime-storage.class */ "./src/app/classes/runtime-storage.class.ts");




var RuntimeStorageService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeStorageService, _super);
    function RuntimeStorageService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_runtime_storage_class__WEBPACK_IMPORTED_MODULE_3__["RuntimeStorage"];
        _this.type = 'runtimestorage';
        _this.path = 'runtime-storage';
        return _this;
    }
    RuntimeStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], RuntimeStorageService);
    return RuntimeStorageService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/runtime-type.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/runtime-type.service.ts ***!
  \**************************************************/
/*! exports provided: RuntimeTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeTypeService", function() { return RuntimeTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_runtime_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/runtime.class */ "./src/app/classes/runtime.class.ts");




var RuntimeTypeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeTypeService, _super);
    function RuntimeTypeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_runtime_class__WEBPACK_IMPORTED_MODULE_3__["Runtime"];
        _this.type = 'runtimetype';
        _this.path = 'runtime-type';
        return _this;
    }
    RuntimeTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], RuntimeTypeService);
    return RuntimeTypeService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/runtime.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/runtime.service.ts ***!
  \*********************************************/
/*! exports provided: RuntimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeService", function() { return RuntimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_runtime_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/runtime.class */ "./src/app/classes/runtime.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime.service.ts
 *
 */




var RuntimeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RuntimeService, _super);
    function RuntimeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_runtime_class__WEBPACK_IMPORTED_MODULE_3__["Runtime"];
        _this.type = 'runtime';
        _this.path = 'runtime';
        return _this;
    }
    RuntimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], RuntimeService);
    return RuntimeService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/session-nominator.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/session-nominator.service.ts ***!
  \*******************************************************/
/*! exports provided: SessionNominatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionNominatorService", function() { return SessionNominatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_session_nominator_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/session-nominator.class */ "./src/app/classes/session-nominator.class.ts");




var SessionNominatorService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SessionNominatorService, _super);
    function SessionNominatorService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_session_nominator_class__WEBPACK_IMPORTED_MODULE_3__["SessionNominator"];
        _this.type = 'sessionnominator';
        _this.path = 'session/nominator';
        return _this;
    }
    SessionNominatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], SessionNominatorService);
    return SessionNominatorService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/session-validator.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/session-validator.service.ts ***!
  \*******************************************************/
/*! exports provided: SessionValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionValidatorService", function() { return SessionValidatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_session_validator_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/session-validator.class */ "./src/app/classes/session-validator.class.ts");




var SessionValidatorService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SessionValidatorService, _super);
    function SessionValidatorService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_session_validator_class__WEBPACK_IMPORTED_MODULE_3__["SessionValidator"];
        _this.type = 'sessionvalidator';
        _this.path = 'session/validator';
        return _this;
    }
    SessionValidatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], SessionValidatorService);
    return SessionValidatorService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_session_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/session.class */ "./src/app/classes/session.class.ts");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.service.ts
 */




var SessionService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SessionService, _super);
    function SessionService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_session_class__WEBPACK_IMPORTED_MODULE_3__["Session"];
        _this.type = 'session';
        _this.path = 'session/session';
        return _this;
    }
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], SessionService);
    return SessionService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/tech-comm-proposal-vote.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/tech-comm-proposal-vote.service.ts ***!
  \*************************************************************/
/*! exports provided: TechCommProposalVoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechCommProposalVoteService", function() { return TechCommProposalVoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_tech_comm_proposal_vote_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/tech-comm-proposal-vote.class */ "./src/app/classes/tech-comm-proposal-vote.class.ts");




var TechCommProposalVoteService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TechCommProposalVoteService, _super);
    function TechCommProposalVoteService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_tech_comm_proposal_vote_class__WEBPACK_IMPORTED_MODULE_3__["TechCommProposalVote"];
        _this.type = 'techcommproposalvote';
        _this.path = 'techcomm/proposalvote';
        return _this;
    }
    TechCommProposalVoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], TechCommProposalVoteService);
    return TechCommProposalVoteService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/tech-comm-proposal.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/tech-comm-proposal.service.ts ***!
  \********************************************************/
/*! exports provided: TechCommProposalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechCommProposalService", function() { return TechCommProposalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_tech_comm_proposal_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/tech-comm-proposal.class */ "./src/app/classes/tech-comm-proposal.class.ts");




var TechCommProposalService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TechCommProposalService, _super);
    function TechCommProposalService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_tech_comm_proposal_class__WEBPACK_IMPORTED_MODULE_3__["TechCommProposal"];
        _this.type = 'techcommproposal';
        _this.path = 'techcomm/proposal';
        return _this;
    }
    TechCommProposalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], TechCommProposalService);
    return TechCommProposalService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/treasury-proposal.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/treasury-proposal.service.ts ***!
  \*******************************************************/
/*! exports provided: TreasuryProposalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasuryProposalService", function() { return TreasuryProposalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-jsonapi */ "./node_modules/ngx-jsonapi/ngx-jsonapi/@ngx-jsonapi/ngx-jsonapi.es5.js");
/* harmony import */ var _classes_treasury_proposal_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/treasury-proposal.class */ "./src/app/classes/treasury-proposal.class.ts");




var TreasuryProposalService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TreasuryProposalService, _super);
    function TreasuryProposalService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = _classes_treasury_proposal_class__WEBPACK_IMPORTED_MODULE_3__["TreasuryProposal"];
        _this.type = 'treasuryproposal';
        _this.path = 'treasury/proposal';
        return _this;
    }
    TreasuryProposalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Autoregister"])()
    ], TreasuryProposalService);
    return TreasuryProposalService;
}(ngx_jsonapi__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/types/proposal/proposal.component.html":
/*!********************************************************!*\
  !*** ./src/app/types/proposal/proposal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table is-striped\" *ngIf=\"proposal\">\r\n  <tbody>\r\n    <tr *ngIf=\"proposal.call_documentation\">\r\n      <td>{{ 'Proposal.Description' | translate }}</td>\r\n      <td>{{ proposal.call_documentation }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{ 'Proposal.Module' | translate }}</td>\r\n      <td>{{ proposal.call_module }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{ 'Proposal.Call' | translate }}</td>\r\n      <td>{{ proposal.call_name }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{ 'Proposal.Parameters' | translate }}</td>\r\n      <td>\r\n        <app-struct\r\n          [struct]=\"proposal.params\"\r\n          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n          [networkURLPrefix]=\"networkURLPrefix\"\r\n        ></app-struct>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/types/proposal/proposal.component.scss":
/*!********************************************************!*\
  !*** ./src/app/types/proposal/proposal.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cGVzL3Byb3Bvc2FsL3Byb3Bvc2FsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/types/proposal/proposal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/types/proposal/proposal.component.ts ***!
  \******************************************************/
/*! exports provided: ProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalComponent", function() { return ProposalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-proposal.class.ts
 *
 */


var ProposalComponent = /** @class */ (function () {
    function ProposalComponent() {
        this.proposal = null;
        this.networkURLPrefix = null;
        this.networkTokenDecimals = 0;
    }
    ProposalComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProposalComponent.prototype, "proposal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProposalComponent.prototype, "networkURLPrefix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProposalComponent.prototype, "networkTokenDecimals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProposalComponent.prototype, "networkTokenSymbol", void 0);
    ProposalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proposal',
            template: __webpack_require__(/*! ./proposal.component.html */ "./src/app/types/proposal/proposal.component.html"),
            styles: [__webpack_require__(/*! ./proposal.component.scss */ "./src/app/types/proposal/proposal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProposalComponent);
    return ProposalComponent;
}());



/***/ }),

/***/ "./src/app/types/referendum-info/referendum-info.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/types/referendum-info/referendum-info.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table is-striped is-bordered\" *ngIf=\"referendum\">\r\n  <tbody>\r\n    <tr>\r\n      <td>{{ 'Referendum-Info.Delay' | translate }}</td>\r\n      <td>{{ referendum.delay }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{ 'Referendum-Info.End' | translate }}</td>\r\n      <td><a routerLink=\"{{ networkURLPrefix }}/block/{{ referendum.end }}\">{{ referendum.end }}</a></td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{ 'Referendum-Info.Proposal' | translate }}</td>\r\n      <td>\r\n        <app-proposal\r\n          [proposal]=\"referendum.proposal\"\r\n          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n        ></app-proposal>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/types/referendum-info/referendum-info.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/types/referendum-info/referendum-info.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cGVzL3JlZmVyZW5kdW0taW5mby9yZWZlcmVuZHVtLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/types/referendum-info/referendum-info.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/types/referendum-info/referendum-info.component.ts ***!
  \********************************************************************/
/*! exports provided: ReferendumInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferendumInfoComponent", function() { return ReferendumInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-proposal.class.ts
 *
 */


var ReferendumInfoComponent = /** @class */ (function () {
    function ReferendumInfoComponent() {
        this.referendum = null;
        this.networkURLPrefix = null;
        this.networkTokenDecimals = 0;
    }
    ReferendumInfoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReferendumInfoComponent.prototype, "referendum", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReferendumInfoComponent.prototype, "networkURLPrefix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReferendumInfoComponent.prototype, "networkTokenDecimals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ReferendumInfoComponent.prototype, "networkTokenSymbol", void 0);
    ReferendumInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-referendum-info',
            template: __webpack_require__(/*! ./referendum-info.component.html */ "./src/app/types/referendum-info/referendum-info.component.html"),
            styles: [__webpack_require__(/*! ./referendum-info.component.scss */ "./src/app/types/referendum-info/referendum-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReferendumInfoComponent);
    return ReferendumInfoComponent;
}());



/***/ }),

/***/ "./src/app/types/struct/struct.component.html":
/*!****************************************************!*\
  !*** ./src/app/types/struct/struct.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table is-striped is-bordered is-narrow\" *ngIf=\"checkType(struct) === 'object'\">\r\n  <tbody>\r\n    <tr *ngFor=\"let item of struct | keyvalue\">\r\n      <td *ngIf=\"!(checkType(item.value) === 'object' && item.value?.type)\" width=\"20%\">{{ item.key }}</td>\r\n      <td *ngIf=\"checkType(item.value) === 'object' && item.value?.type\" width=\"20%\">{{ item.value.name }}</td>\r\n\r\n      <td *ngIf=\"checkType(item.value) !== 'object'\">{{ item.value }}</td>\r\n      <td *ngIf=\"checkType(item.value) === 'object' && item.value?.type\">\r\n        <app-render-type\r\n          [item]=\"item.value\"\r\n          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n        ></app-render-type></td>\r\n      <td *ngIf=\"checkType(item.value) === 'object' && !item.value?.type\">\r\n        <app-struct\r\n          [struct]=\"item.value\"\r\n          [networkTokenDecimals]=\"networkTokenDecimals\"\r\n          [networkTokenSymbol]=\"networkTokenSymbol\"\r\n          [networkURLPrefix]=\"networkURLPrefix\"\r\n        ></app-struct>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<span *ngIf=\"checkType(struct) !== 'object'\">{{ struct }}</span>\r\n"

/***/ }),

/***/ "./src/app/types/struct/struct.component.scss":
/*!****************************************************!*\
  !*** ./src/app/types/struct/struct.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cGVzL3N0cnVjdC9zdHJ1Y3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/types/struct/struct.component.ts":
/*!**************************************************!*\
  !*** ./src/app/types/struct/struct.component.ts ***!
  \**************************************************/
/*! exports provided: StructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructComponent", function() { return StructComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * democracy-proposal.class.ts
 *
 */


var StructComponent = /** @class */ (function () {
    function StructComponent() {
        this.struct = null;
        this.networkURLPrefix = null;
        this.networkTokenDecimals = 0;
    }
    StructComponent.prototype.ngOnInit = function () {
    };
    StructComponent.prototype.checkType = function (obj) {
        return typeof obj;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StructComponent.prototype, "struct", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StructComponent.prototype, "networkURLPrefix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StructComponent.prototype, "networkTokenDecimals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StructComponent.prototype, "networkTokenSymbol", void 0);
    StructComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-struct',
            template: __webpack_require__(/*! ./struct.component.html */ "./src/app/types/struct/struct.component.html"),
            styles: [__webpack_require__(/*! ./struct.component.scss */ "./src/app/types/struct/struct.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StructComponent);
    return StructComponent;
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
    production: false,
    jsonApiRootUrl: 'https://polkascan.io/kusama-cc3/api/v1/',
    networkName: 'Kusama',
    networkTokenSymbol: 'KSM',
    networkTokenDecimals: 12
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
/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * main.ts
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    missingTranslation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["MissingTranslationStrategy"].Error,
    providers: []
})
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! J:\projects\polkascan-pre-explorer-gui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map