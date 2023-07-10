/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8133:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var setValue = function (linearSelect, value) {
    var input = linearSelect.querySelector("input");
    var items = linearSelect.querySelectorAll(".linear-select__item");
    if (input) {
        input.setAttribute("value", value);
    }
    if (items) {
        items.forEach(function (item) {
            var itemValue = item.getAttribute("data-value");
            if (itemValue === value) {
                item.classList.add("selected");
            }
            else {
                item.classList.remove("selected");
            }
        });
    }
};
var addLinearSelect = function () {
    document.querySelectorAll(".linear-select").forEach(function (linearSelect) {
        if (!(linearSelect instanceof HTMLElement)) {
            console.error("'.linear-select' is not HTMLElement", linearSelect);
            return;
        }
        var input = linearSelect.querySelector("input");
        if (!input) {
            console.error("No input in '.linear-select'", linearSelect);
            return;
        }
        var value = input.value;
        setValue(linearSelect, value);
        linearSelect.addEventListener("click", function (e) {
            if (!(e.target instanceof HTMLElement))
                return;
            var item = e.target.closest(".linear-select__item");
            if (!(item instanceof HTMLElement))
                return;
            var itemValue = item.getAttribute("data-value");
            if (itemValue !== null) {
                setValue(linearSelect, itemValue);
            }
        });
    });
};
exports["default"] = addLinearSelect;


/***/ }),

/***/ 294:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var addLinearSelect_1 = __importDefault(__webpack_require__(8133));
var addDragToScroll_1 = __importDefault(__webpack_require__(2341));
window.addEventListener("load", function () {
    // linear select
    (0, addLinearSelect_1.default)();
    // drag to scroll
    (0, addDragToScroll_1.default)();
});


/***/ }),

/***/ 2341:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isTouchEnabled_1 = __importDefault(__webpack_require__(6129));
var addDragToScroll = function () {
    var stopCoef = 0.95;
    if ((0, isTouchEnabled_1.default)())
        return;
    document.querySelectorAll("[data-drag-to-scroll]").forEach(function (element) {
        if (!(element instanceof HTMLElement))
            return;
        var isCursorDisabled = element.dataset.cursorDisabled !== undefined;
        // for grab
        var startPos = {
            top: 0,
            left: 0,
            x: 0,
            y: 0,
        };
        var pos = {
            top: 0,
            left: 0,
            x: 0,
            y: 0,
        };
        var prevPos = __assign({}, pos);
        var isGrabbed = false;
        // for intertia
        var transform = { x: 0, y: 0 };
        var onMouseDown = function (e) {
            startPos = {
                left: element.scrollLeft,
                top: element.scrollTop,
                x: e.clientX,
                y: e.clientY,
            };
            pos = __assign({}, startPos);
            prevPos = __assign({}, pos);
            prevPos;
            isGrabbed = true;
            transform = {
                x: 0,
                y: 0,
            };
            if (!isCursorDisabled)
                element.style.cursor = "grabbing";
            element.style.userSelect = "none";
            element
                .querySelectorAll("img")
                .forEach(function (img) { return (img.draggable = false); });
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
            requestAnimationFrame(move);
        };
        var onMouseMove = function (e) {
            var dx = e.clientX - startPos.x;
            var dy = e.clientY - startPos.y;
            pos.left = startPos.left - dx;
            pos.top = startPos.top - dy;
            pos.x = e.clientX;
            pos.y = e.clientY;
        };
        var onMouseUp = function (e) {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
            isGrabbed = false;
            if (!isCursorDisabled)
                element.style.cursor = "grab";
            element.style.removeProperty("user-select");
            requestAnimationFrame(moveByInertia);
        };
        var move = function () {
            if (!isGrabbed)
                return;
            transform = {
                x: prevPos.left - pos.left,
                y: prevPos.top - pos.top,
            };
            element.scrollTop = pos.top;
            element.scrollLeft = pos.left;
            prevPos = __assign({}, pos);
            requestAnimationFrame(move);
        };
        var moveByInertia = function () {
            if (isGrabbed)
                return;
            if (Math.pow(transform.x, 2) + Math.pow(transform.y, 2) <
                0.3)
                return;
            transform.x *= stopCoef;
            transform.y *= stopCoef;
            element.scrollLeft -= transform.x;
            element.scrollTop -= transform.y;
            requestAnimationFrame(moveByInertia);
        };
        var preventClickIfMove = function (e) {
            var diff = {
                x: startPos.x - e.clientX,
                y: startPos.y - e.clientY,
            };
            var diffLength = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
            if (diffLength > 4) {
                e.stopPropagation();
            }
        };
        if (!isCursorDisabled)
            element.style.cursor = "grab";
        element.addEventListener("mousedown", onMouseDown);
        element.addEventListener("click", preventClickIfMove, {
            capture: true,
        });
    });
};
exports["default"] = addDragToScroll;


/***/ }),

/***/ 6129:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var isTouchEnabled = function () {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        // @ts-expect-error
        (navigator.msMaxTouchPoints > 0);
};
exports["default"] = isTouchEnabled;


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
/******/ 	var __webpack_exports__ = __webpack_require__(294);
/******/ 	
/******/ })()
;