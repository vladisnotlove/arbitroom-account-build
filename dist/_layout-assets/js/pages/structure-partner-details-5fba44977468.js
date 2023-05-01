/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8272:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var routes_1 = __importDefault(__webpack_require__(7901));
window.addEventListener("load", function () {
    (function () {
        var details = document.querySelector(".partner-details");
        var chatBtn = details === null || details === void 0 ? void 0 : details.querySelector(".partner-details__chat-btn");
        var structureBtn = details === null || details === void 0 ? void 0 : details.querySelector(".partner-details__structure");
        var closeBtn = details === null || details === void 0 ? void 0 : details.querySelector(".partner-details__close");
        chatBtn === null || chatBtn === void 0 ? void 0 : chatBtn.addEventListener("click", function () {
            var chatUrl = chatBtn.getAttribute("data-chat-url");
            if (!chatUrl)
                return;
            var message = JSON.stringify({
                source: routes_1.default.structurePartnerDetails.path(),
                type: "open-chat",
                payload: {
                    chatUrl: chatUrl
                }
            });
            window.parent.postMessage(message, '*');
        });
        structureBtn === null || structureBtn === void 0 ? void 0 : structureBtn.addEventListener("click", function () {
            var partnersUrl = structureBtn.getAttribute("data-partners-url");
            if (!partnersUrl)
                return;
            var message = JSON.stringify({
                source: routes_1.default.structurePartnerDetails.path(),
                type: "open-partners",
                payload: {
                    partnersUrl: partnersUrl
                }
            });
            window.parent.postMessage(message, '*');
        });
        closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", function () {
            var message = JSON.stringify({
                source: routes_1.default.structurePartnerDetails.path(),
                type: "close"
            });
            window.parent.postMessage(message, '*');
        });
    })();
});


/***/ }),

/***/ 7901:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var routes = {
    index: {
        path: function () { return "/"; }
    },
    stableFund: {
        path: function () { return "/stable-fund"; }
    },
    moneyBox: {
        path: function () { return "/money-box"; }
    },
    arbitration: {
        path: function () { return "/arbitration"; }
    },
    arbitrationInnerExchange: {
        path: function () { return "/arbitration-inner-exchange"; }
    },
    balance: {
        path: function () { return "/balance"; }
    },
    pool: {
        path: function () { return "/pool"; }
    },
    learn: {
        path: function () { return "/learn"; }
    },
    leader: {
        path: function () { return "/leader"; }
    },
    personalPartners: {
        path: function () { return "/personal-partners"; }
    },
    status: {
        path: function () { return "/status"; }
    },
    structure: {
        path: function () { return "/structure"; }
    },
    structurePartners: {
        path: function () { return "/structure-partners"; }
    },
    structurePartnerChat: {
        path: function () { return "/structure-partner-chat"; }
    },
    structurePartnerDetails: {
        path: function () { return "/structure-partner-details"; }
    },
    materials: {
        path: function () { return "/materials"; }
    },
    cashout: {
        path: function () { return "/cashout"; }
    },
    promo: {
        path: function () { return "/promo"; }
    },
    events: {
        path: function () { return "/events"; }
    },
    event: {
        path: function (name) { return "/events/" + name; }
    },
    presentations: {
        path: function () { return "/presentations"; }
    },
    operations: {
        path: function () { return "/operations"; }
    },
    profile: {
        path: function () { return "/profile"; }
    },
    contacts: {
        path: function () { return "/contacts"; }
    },
    notifications: {
        path: function () { return "/notifications"; }
    }
};
exports["default"] = routes;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(8272);
/******/ 	
/******/ })()
;