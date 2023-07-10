/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 7417:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var getFinishDate = function (el) {
    var str = el.getAttribute("data-timer-finish-date");
    var finishDate = str ? new Date(str) : undefined;
    return finishDate;
};
var getFormat = function (el) {
    var str = el.getAttribute("data-timer-format");
    return str || "hhhh:mm:ss";
};
var updateTimer = function (_a) {
    var timer = _a.timer, daysContainer = _a.daysContainer, hoursContainer = _a.hoursContainer, minutesContainer = _a.minutesContainer, secondsContainer = _a.secondsContainer;
    var finishDate = getFinishDate(timer);
    var format = getFormat(timer);
    if (!finishDate) {
        return {
            isFinished: true
        };
    }
    var finish = finishDate.getTime();
    var now = Date.now();
    var diff = finish - now;
    diff = diff > 0 ? diff : 0;
    var seconds = String(Math.floor(diff / 1000) % 60).padStart(2, "0");
    var minutes = String(Math.floor(diff / (60 * 1000)) % 60).padStart(2, "0");
    var allhours = Math.floor(diff / (60 * 60 * 1000));
    var hours = String(Math.floor(allhours % 24)).padStart(2, "0");
    var days = Math.floor(diff / (60 * 60 * 1000 * 24));
    if (daysContainer) {
        daysContainer.textContent = "" + days;
    }
    if (hoursContainer) {
        hoursContainer.textContent = "" + hours;
    }
    if (minutesContainer) {
        minutesContainer.textContent = "" + minutes;
    }
    if (secondsContainer) {
        secondsContainer.textContent = "" + seconds;
    }
    if (!daysContainer && !hoursContainer && !minutesContainer && !secondsContainer) {
        timer.textContent = format.replace("dd", "" + days)
            .replace("hhhh", "" + allhours)
            .replace("hh", "" + hours)
            .replace("mm", "" + minutes)
            .replace("ss", "" + seconds);
    }
    return {
        isFinished: diff === 0,
    };
};
var addTimer = function () {
    var timers = document.querySelectorAll(".timer");
    timers.forEach(function (timer) {
        var finishDate = getFinishDate(timer);
        if (!finishDate) {
            console.error("timer has no finish date", timer);
            return;
        }
        var daysContainer = timer.querySelector("[data-timer-days]");
        var hoursContainer = timer.querySelector("[data-timer-hours]");
        var minutesContainer = timer.querySelector("[data-timer-minutes]");
        var secondsContainer = timer.querySelector("[data-timer-seconds]");
        window.setInterval(function () {
            updateTimer({ timer: timer, daysContainer: daysContainer, hoursContainer: hoursContainer, minutesContainer: minutesContainer, secondsContainer: secondsContainer });
        }, 1000);
        updateTimer({ timer: timer, daysContainer: daysContainer, hoursContainer: hoursContainer, minutesContainer: minutesContainer, secondsContainer: secondsContainer });
    });
};
exports["default"] = addTimer;


/***/ }),

/***/ 5811:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ 8579:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var addTimer_1 = __importDefault(__webpack_require__(7417));
var addToggleButtonGroup_1 = __importDefault(__webpack_require__(5811));
var addConnector_1 = __importDefault(__webpack_require__(5560));
window.addEventListener("load", function () {
    // timer 
    (0, addTimer_1.default)();
    // connector
    (0, addConnector_1.default)();
    // toggle btn
    (0, addToggleButtonGroup_1.default)();
});


/***/ }),

/***/ 5560:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var classnames_1 = __importDefault(__webpack_require__(4184));
var Vector_1 = __importDefault(__webpack_require__(9289));
var addOnResize_1 = __importDefault(__webpack_require__(9985));
// helpers
var getAnchors = function (rect, padding) {
    if (padding === void 0) { padding = 0; }
    var fixedRect = {
        x: rect.x - padding,
        y: rect.y - padding,
        width: rect.width + padding * 2,
        height: rect.height + padding * 2,
    };
    var scroll = new Vector_1.default(document.documentElement.scrollLeft, document.documentElement.scrollTop);
    return [
        new Vector_1.default(fixedRect.x + fixedRect.width * 0.5, fixedRect.y).add(scroll),
        new Vector_1.default(fixedRect.x + fixedRect.width, fixedRect.y + fixedRect.height * 0.5).add(scroll),
        new Vector_1.default(fixedRect.x + fixedRect.width * 0.5, fixedRect.y + fixedRect.height).add(scroll),
        new Vector_1.default(fixedRect.x, fixedRect.y + fixedRect.height * 0.5).add(scroll),
    ];
};
var getArea = function (start, end) {
    var top = Math.min(start.y, end.y);
    var left = Math.min(start.x, end.x);
    var bottom = Math.max(start.y, end.y);
    var right = Math.max(start.x, end.x);
    return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: Math.max(right - left, 0),
        height: Math.max(bottom - top, 0),
    };
};
var drawBetween = function (a, b, options) {
    if (options === void 0) { options = {}; }
    var startActive = options.startActive;
    var endActive = options.endActive;
    var classPrefix = options.classPrefix;
    if (a.clientWidth === 0 || a.clientHeight === 0)
        return;
    if (b.clientWidth === 0 || b.clientHeight === 0)
        return;
    var rectA = a.getBoundingClientRect();
    var rectB = b.getBoundingClientRect();
    var anchorsA = getAnchors(rectA, 5);
    var anchorsB = getAnchors(rectB, 5);
    var minLength = Infinity;
    var startAnchor = null;
    var endAnchor = null;
    for (var i = 0; i < anchorsA.length; i++) {
        for (var j = 0; j < anchorsB.length; j++) {
            var length_1 = anchorsA[i].subtract(anchorsB[j]).length;
            if (length_1 < minLength) {
                minLength = length_1;
                startAnchor = anchorsA[i];
                endAnchor = anchorsB[j];
            }
        }
    }
    if (!startAnchor || !endAnchor)
        return;
    var lineArea = getArea(startAnchor, endAnchor);
    var d1 = "M 0,0  L ".concat(lineArea.width * 0.5, ", ").concat(lineArea.height * 0.5);
    var d2 = "M ".concat(lineArea.width * 0.5, ", ").concat(lineArea.height * 0.5, "  L ").concat(lineArea.width, ", ").concat(lineArea.height);
    var d12 = "M 0,0  L ".concat(lineArea.width, ", ").concat(lineArea.height);
    var lineHTML = "<svg class=\"".concat((0, classnames_1.default)(classPrefix, { "start-active": startActive, "end-active": endActive }), "\" style=\"\n            position: absolute; \n            top: ").concat(lineArea.top, "px; \n            left: ").concat(lineArea.left, "px; \n            width: ").concat(lineArea.width ? lineArea.width + "px" : "fit-content", "; \n            height: ").concat(lineArea.height ? lineArea.height + "px" : "fit-content", "; \n            overflow: visible\"\n        >\n            <path class=\"").concat(classPrefix, "__full\" d=\"").concat(d12, "\" fill=\"none\"></path>\n            <path class=\"").concat(classPrefix, "__start\" d=\"").concat(d1, "\" fill=\"none\"></path>\n            <path class=\"").concat(classPrefix, "__end\" d=\"").concat(d2, "\" fill=\"none\"></path>\n        </svg>");
    document.body.insertAdjacentHTML("beforeend", lineHTML);
    return document.body.lastElementChild;
};
// main
var addConnector = function () {
    document.querySelectorAll("[data-connector]").forEach(function (connector) {
        var classPrefix = connector.getAttribute("data-class-prefix") || "connection-line";
        var lines = [];
        var update = function () {
            lines.forEach(function (line) { return line.remove(); });
            lines = [];
            var items = Array.from(connector.querySelectorAll("[data-order]"));
            items.sort(function (a, b) {
                var orderA = parseFloat(a.getAttribute("data-order") || "0");
                var orderB = parseFloat(b.getAttribute("data-order") || "0");
                return orderA - orderB;
            });
            for (var i = 1; i < items.length; i++) {
                var prev = items[i - 1];
                var cur = items[i];
                var line = drawBetween(prev, cur, {
                    startActive: prev.classList.contains("active"),
                    endActive: cur.classList.contains("active"),
                    classPrefix: classPrefix,
                });
                if (line) {
                    lines.push(line);
                }
            }
        };
        (0, addOnResize_1.default)(connector, update);
    });
};
exports["default"] = addConnector;


/***/ }),

/***/ 9289:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Vector.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        enumerable: false,
        configurable: true
    });
    Vector.prototype.add = function (value) {
        if (typeof value === "number") {
            return new Vector(this.x + value, this.y + value);
        }
        else {
            return new Vector(this.x + value.x, this.y + value.y);
        }
    };
    Vector.prototype.subtract = function (value) {
        if (typeof value === "number") {
            return new Vector(this.x - value, this.y - value);
        }
        else {
            return new Vector(this.x - value.x, this.y - value.y);
        }
    };
    Vector.prototype.round = function () {
        return new Vector(Math.round(this.x), Math.round(this.y));
    };
    Vector.prototype.floor = function () {
        return new Vector(Math.floor(this.x), Math.floor(this.y));
    };
    Vector.prototype.ceil = function () {
        return new Vector(Math.ceil(this.x), Math.ceil(this.y));
    };
    Vector.prototype.multiply = function (value) {
        if (typeof value === "number") {
            return new Vector(this.x * value, this.y * value);
        }
        else {
            return new Vector(this.x * value.x, this.y * value.y);
        }
    };
    Vector.prototype.divide = function (value) {
        if (typeof value === "number") {
            return new Vector(this.x / value, this.y / value);
        }
        else {
            return new Vector(this.x / value.x, this.y / value.y);
        }
    };
    Vector.prototype.normalize = function () {
        if (this.length === 0)
            return Vector.from(this);
        return this.divide(this.length);
    };
    Vector.prototype.fitToMaxLength = function (length) {
        if (this.length > length)
            return this.normalize().multiply(length);
        return Vector.from(this);
    };
    Vector.prototype.isEqual = function (other) {
        return this.x === other.x && this.y === other.y;
    };
    // static
    Vector.from = function (value) {
        return new Vector(value.x, value.y);
    };
    Vector.split = function (from, to, step) {
        var delta = to.subtract(from);
        var deltaLength = delta.length;
        var deltaNormilized = delta.normalize();
        var vectors = [];
        for (var value = 0; value < deltaLength; value += step) {
            vectors.push(from.add(deltaNormilized.multiply(value)));
        }
        vectors.push(to);
        return vectors;
    };
    return Vector;
}());
exports["default"] = Vector;


/***/ }),

/***/ 9985:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var throttle_debounce_1 = __webpack_require__(2189);
var addOnResize = function (element, onResize, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var resizeObserver = new ResizeObserver((0, throttle_debounce_1.throttle)((_a = options.throttle) !== null && _a !== void 0 ? _a : 100, onResize));
    resizeObserver.observe(element);
    return function () {
        resizeObserver.unobserve(element);
    };
};
exports["default"] = addOnResize;


/***/ }),

/***/ 2189:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}

exports.debounce = debounce;
exports.throttle = throttle;
//# sourceMappingURL=index.js.map


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
/******/ 	var __webpack_exports__ = __webpack_require__(8579);
/******/ 	
/******/ })()
;