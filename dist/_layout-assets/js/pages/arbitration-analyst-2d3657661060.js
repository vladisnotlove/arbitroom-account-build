/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 577:
/***/ ((__unused_webpack_module, exports) => {


// HELPERS
Object.defineProperty(exports, "__esModule", ({ value: true }));
var setValue = function (elements, value) {
    var _a, _b;
    (_a = elements.input) === null || _a === void 0 ? void 0 : _a.setAttribute("value", value);
    (_b = elements.input) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new Event("change"));
};
var updateActive = function (elements) {
    var _a;
    var value = elements.input.value;
    var activeIndex = 0;
    elements.toggleButtonGroup.querySelectorAll(".toggle-button").forEach(function (button, index) {
        if (button.getAttribute("data-value") === value) {
            button.classList.add("active");
            activeIndex = index;
        }
        else {
            button.classList.remove("active");
        }
    });
    (_a = elements.target) === null || _a === void 0 ? void 0 : _a.forEach(function (elem) {
        Array.from(elem.children).forEach(function (child, index) {
            if (index === activeIndex) {
                child.classList.add("active");
            }
            else {
                child.classList.remove("active");
            }
        });
    });
};
// MAIN
var addToggleButtonGroup = function () {
    document.querySelectorAll(".toggle-button-group").forEach(function (toggleButtonGroup) {
        if (!(toggleButtonGroup instanceof HTMLElement)) {
            console.error(".toggleButtonGroup is not a HTMLElement", toggleButtonGroup);
            return;
        }
        var input = toggleButtonGroup.querySelector("input");
        var buttons = Array.from(toggleButtonGroup.querySelectorAll(".toggle-button"));
        var str = toggleButtonGroup.getAttribute("data-toggle-button-group-target");
        var target = str ? Array.from(document.querySelectorAll(str)) : undefined;
        toggleButtonGroup.addEventListener("click", function (e) {
            if (!(e.target instanceof HTMLElement) || !e.target.closest(".toggle-button"))
                return;
            var activeButton = e.target;
            var value = activeButton.getAttribute("data-value");
            // set value in input
            if (input && value !== null) {
                setValue({ input: input }, value);
            }
            // change active button
            buttons.forEach(function (button) {
                if (button === activeButton) {
                    button.classList.add("active");
                }
                else {
                    button.classList.remove("active");
                }
            });
            // change active target
            if (target) {
                var activeIndex_1 = buttons.findIndex(function (button) { return button === activeButton; });
                target.forEach(function (elem) {
                    Array.from(elem.children).forEach(function (child, index) {
                        if (index === activeIndex_1) {
                            child.classList.add("active");
                        }
                        else {
                            child.classList.remove("active");
                        }
                    });
                });
            }
        });
        if (input) {
            updateActive({ input: input, target: target, toggleButtonGroup: toggleButtonGroup });
            input.addEventListener("change", function () {
                updateActive({ input: input, target: target, toggleButtonGroup: toggleButtonGroup });
            });
        }
    });
};
exports["default"] = addToggleButtonGroup;


/***/ }),

/***/ 5469:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var addToggleButtonGroup_1 = __importDefault(__webpack_require__(577));
window.addEventListener("load", function () {
    // toggle button group
    (0, addToggleButtonGroup_1.default)();
});


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
/******/ 	var __webpack_exports__ = __webpack_require__(5469);
/******/ 	
/******/ })()
;