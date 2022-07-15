module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0b42":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "0f68":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e780");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("879359e6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "1626":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "3511":
/***/ (function(module, exports) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4b7f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("afd1");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a8fef368", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var uncurryThis = __webpack_require__("e330");
var call = __webpack_require__("c65b");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

// eslint-disable-next-line es-x/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es-x/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("0b42");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "68ee":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("f5df");
var getBuiltIn = __webpack_require__("d066");
var inspectSource = __webpack_require__("8925");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__("a04b");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "91e5":
/***/ (function(module, exports) {

/*
 * JQuery zTree core
 * v3.5.48
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2020-11-21
 */

(function ($) {
  var settings = {}, roots = {}, caches = {},
    //default consts of core
    _consts = {
      className: {
        BUTTON: "button",
        LEVEL: "level",
        ICO_LOADING: "ico_loading",
        SWITCH: "switch",
        NAME: 'node_name'
      },
      event: {
        NODECREATED: "ztree_nodeCreated",
        CLICK: "ztree_click",
        EXPAND: "ztree_expand",
        COLLAPSE: "ztree_collapse",
        ASYNC_SUCCESS: "ztree_async_success",
        ASYNC_ERROR: "ztree_async_error",
        REMOVE: "ztree_remove",
        SELECTED: "ztree_selected",
        UNSELECTED: "ztree_unselected"
      },
      id: {
        A: "_a",
        ICON: "_ico",
        SPAN: "_span",
        SWITCH: "_switch",
        UL: "_ul"
      },
      line: {
        ROOT: "root",
        ROOTS: "roots",
        CENTER: "center",
        BOTTOM: "bottom",
        NOLINE: "noline",
        LINE: "line"
      },
      folder: {
        OPEN: "open",
        CLOSE: "close",
        DOCU: "docu"
      },
      node: {
        CURSELECTED: "curSelectedNode"
      }
    },
    //default setting of core
    _setting = {
      treeId: "",
      treeObj: null,
      view: {
        addDiyDom: null,
        autoCancelSelected: true,
        dblClickExpand: true,
        expandSpeed: "fast",
        fontCss: {},
        nodeClasses: {},
        nameIsHTML: false,
        selectedMulti: true,
        showIcon: true,
        showLine: true,
        showTitle: true,
        txtSelectedEnable: false
      },
      data: {
        key: {
          isParent: "isParent",
          children: "children",
          name: "name",
          title: "",
          url: "url",
          icon: "icon"
        },
        render: {
          name: null,
          title: null,
        },
        simpleData: {
          enable: false,
          idKey: "id",
          pIdKey: "pId",
          rootPId: null
        },
        keep: {
          parent: false,
          leaf: false
        }
      },
      async: {
        enable: false,
        contentType: "application/x-www-form-urlencoded",
        type: "post",
        dataType: "text",
        headers: {},
        xhrFields: {},
        url: "",
        autoParam: [],
        otherParam: [],
        dataFilter: null
      },
      callback: {
        beforeAsync: null,
        beforeClick: null,
        beforeDblClick: null,
        beforeRightClick: null,
        beforeMouseDown: null,
        beforeMouseUp: null,
        beforeExpand: null,
        beforeCollapse: null,
        beforeRemove: null,

        onAsyncError: null,
        onAsyncSuccess: null,
        onNodeCreated: null,
        onClick: null,
        onDblClick: null,
        onRightClick: null,
        onMouseDown: null,
        onMouseUp: null,
        onExpand: null,
        onCollapse: null,
        onRemove: null
      }
    },
    //default root of core
    //zTree use root to save full data
    _initRoot = function (setting) {
      var r = data.getRoot(setting);
      if (!r) {
        r = {};
        data.setRoot(setting, r);
      }
      data.nodeChildren(setting, r, []);
      r.expandTriggerFlag = false;
      r.curSelectedList = [];
      r.noSelection = true;
      r.createdNodes = [];
      r.zId = 0;
      r._ver = (new Date()).getTime();
    },
    //default cache of core
    _initCache = function (setting) {
      var c = data.getCache(setting);
      if (!c) {
        c = {};
        data.setCache(setting, c);
      }
      c.nodes = [];
      c.doms = [];
    },
    //default bindEvent of core
    _bindEvent = function (setting) {
      var o = setting.treeObj,
        c = consts.event;
      o.bind(c.NODECREATED, function (event, treeId, node) {
        tools.apply(setting.callback.onNodeCreated, [event, treeId, node]);
      });

      o.bind(c.CLICK, function (event, srcEvent, treeId, node, clickFlag) {
        tools.apply(setting.callback.onClick, [srcEvent, treeId, node, clickFlag]);
      });

      o.bind(c.EXPAND, function (event, treeId, node) {
        tools.apply(setting.callback.onExpand, [event, treeId, node]);
      });

      o.bind(c.COLLAPSE, function (event, treeId, node) {
        tools.apply(setting.callback.onCollapse, [event, treeId, node]);
      });

      o.bind(c.ASYNC_SUCCESS, function (event, treeId, node, msg) {
        tools.apply(setting.callback.onAsyncSuccess, [event, treeId, node, msg]);
      });

      o.bind(c.ASYNC_ERROR, function (event, treeId, node, XMLHttpRequest, textStatus, errorThrown) {
        tools.apply(setting.callback.onAsyncError, [event, treeId, node, XMLHttpRequest, textStatus, errorThrown]);
      });

      o.bind(c.REMOVE, function (event, treeId, treeNode) {
        tools.apply(setting.callback.onRemove, [event, treeId, treeNode]);
      });

      o.bind(c.SELECTED, function (event, treeId, node) {
        tools.apply(setting.callback.onSelected, [treeId, node]);
      });
      o.bind(c.UNSELECTED, function (event, treeId, node) {
        tools.apply(setting.callback.onUnSelected, [treeId, node]);
      });
    },
    _unbindEvent = function (setting) {
      var o = setting.treeObj,
        c = consts.event;
      o.unbind(c.NODECREATED)
        .unbind(c.CLICK)
        .unbind(c.EXPAND)
        .unbind(c.COLLAPSE)
        .unbind(c.ASYNC_SUCCESS)
        .unbind(c.ASYNC_ERROR)
        .unbind(c.REMOVE)
        .unbind(c.SELECTED)
        .unbind(c.UNSELECTED);
    },
    //default event proxy of core
    _eventProxy = function (event) {
      var target = event.target,
        setting = data.getSetting(event.data.treeId),
        tId = "", node = null,
        nodeEventType = "", treeEventType = "",
        nodeEventCallback = null, treeEventCallback = null,
        tmp = null;

      if (tools.eqs(event.type, "mousedown")) {
        treeEventType = "mousedown";
      } else if (tools.eqs(event.type, "mouseup")) {
        treeEventType = "mouseup";
      } else if (tools.eqs(event.type, "contextmenu")) {
        treeEventType = "contextmenu";
      } else if (tools.eqs(event.type, "click")) {
        if (tools.eqs(target.tagName, "span") && target.getAttribute("treeNode" + consts.id.SWITCH) !== null) {
          tId = tools.getNodeMainDom(target).id;
          nodeEventType = "switchNode";
        } else {
          tmp = tools.getMDom(setting, target, [{tagName: "a", attrName: "treeNode" + consts.id.A}]);
          if (tmp) {
            tId = tools.getNodeMainDom(tmp).id;
            nodeEventType = "clickNode";
          }
        }
      } else if (tools.eqs(event.type, "dblclick")) {
        treeEventType = "dblclick";
        tmp = tools.getMDom(setting, target, [{tagName: "a", attrName: "treeNode" + consts.id.A}]);
        if (tmp) {
          tId = tools.getNodeMainDom(tmp).id;
          nodeEventType = "switchNode";
        }
      }
      if (treeEventType.length > 0 && tId.length == 0) {
        tmp = tools.getMDom(setting, target, [{tagName: "a", attrName: "treeNode" + consts.id.A}]);
        if (tmp) {
          tId = tools.getNodeMainDom(tmp).id;
        }
      }
      // event to node
      if (tId.length > 0) {
        node = data.getNodeCache(setting, tId);
        switch (nodeEventType) {
          case "switchNode" :
            var isParent = data.nodeIsParent(setting, node);
            if (!isParent) {
              nodeEventType = "";
            } else if (tools.eqs(event.type, "click")
              || (tools.eqs(event.type, "dblclick") && tools.apply(setting.view.dblClickExpand, [setting.treeId, node], setting.view.dblClickExpand))) {
              nodeEventCallback = handler.onSwitchNode;
            } else {
              nodeEventType = "";
            }
            break;
          case "clickNode" :
            nodeEventCallback = handler.onClickNode;
            break;
        }
      }
      // event to zTree
      switch (treeEventType) {
        case "mousedown" :
          treeEventCallback = handler.onZTreeMousedown;
          break;
        case "mouseup" :
          treeEventCallback = handler.onZTreeMouseup;
          break;
        case "dblclick" :
          treeEventCallback = handler.onZTreeDblclick;
          break;
        case "contextmenu" :
          treeEventCallback = handler.onZTreeContextmenu;
          break;
      }
      var proxyResult = {
        stop: false,
        node: node,
        nodeEventType: nodeEventType,
        nodeEventCallback: nodeEventCallback,
        treeEventType: treeEventType,
        treeEventCallback: treeEventCallback
      };
      return proxyResult
    },
    //default init node of core
    _initNode = function (setting, level, n, parentNode, isFirstNode, isLastNode, openFlag) {
      if (!n) return;
      var r = data.getRoot(setting),
        children = data.nodeChildren(setting, n);
      n.level = level;
      n.tId = setting.treeId + "_" + (++r.zId);
      n.parentTId = parentNode ? parentNode.tId : null;
      n.open = (typeof n.open == "string") ? tools.eqs(n.open, "true") : !!n.open;
      var isParent = data.nodeIsParent(setting, n);
      if (tools.isArray(children)) {
        data.nodeIsParent(setting, n, true);
        n.zAsync = true;
      } else {
        isParent = data.nodeIsParent(setting, n, isParent);
        n.open = (isParent && !setting.async.enable) ? n.open : false;
        n.zAsync = !isParent;
      }
      n.isFirstNode = isFirstNode;
      n.isLastNode = isLastNode;
      n.getParentNode = function () {
        return data.getNodeCache(setting, n.parentTId);
      };
      n.getPreNode = function () {
        return data.getPreNode(setting, n);
      };
      n.getNextNode = function () {
        return data.getNextNode(setting, n);
      };
      n.getIndex = function () {
        return data.getNodeIndex(setting, n);
      };
      n.getPath = function () {
        return data.getNodePath(setting, n);
      };
      n.isAjaxing = false;
      data.fixPIdKeyValue(setting, n);
    },
    _init = {
      bind: [_bindEvent],
      unbind: [_unbindEvent],
      caches: [_initCache],
      nodes: [_initNode],
      proxys: [_eventProxy],
      roots: [_initRoot],
      beforeA: [],
      afterA: [],
      innerBeforeA: [],
      innerAfterA: [],
      zTreeTools: []
    },
    //method of operate data
    data = {
      addNodeCache: function (setting, node) {
        data.getCache(setting).nodes[data.getNodeCacheId(node.tId)] = node;
      },
      getNodeCacheId: function (tId) {
        return tId.substring(tId.lastIndexOf("_") + 1);
      },
      addAfterA: function (afterA) {
        _init.afterA.push(afterA);
      },
      addBeforeA: function (beforeA) {
        _init.beforeA.push(beforeA);
      },
      addInnerAfterA: function (innerAfterA) {
        _init.innerAfterA.push(innerAfterA);
      },
      addInnerBeforeA: function (innerBeforeA) {
        _init.innerBeforeA.push(innerBeforeA);
      },
      addInitBind: function (bindEvent) {
        _init.bind.push(bindEvent);
      },
      addInitUnBind: function (unbindEvent) {
        _init.unbind.push(unbindEvent);
      },
      addInitCache: function (initCache) {
        _init.caches.push(initCache);
      },
      addInitNode: function (initNode) {
        _init.nodes.push(initNode);
      },
      addInitProxy: function (initProxy, isFirst) {
        if (!!isFirst) {
          _init.proxys.splice(0, 0, initProxy);
        } else {
          _init.proxys.push(initProxy);
        }
      },
      addInitRoot: function (initRoot) {
        _init.roots.push(initRoot);
      },
      addNodesData: function (setting, parentNode, index, nodes) {
        var children = data.nodeChildren(setting, parentNode), params;
        if (!children) {
          children = data.nodeChildren(setting, parentNode, []);
          index = -1;
        } else if (index >= children.length) {
          index = -1;
        }

        if (children.length > 0 && index === 0) {
          children[0].isFirstNode = false;
          view.setNodeLineIcos(setting, children[0]);
        } else if (children.length > 0 && index < 0) {
          children[children.length - 1].isLastNode = false;
          view.setNodeLineIcos(setting, children[children.length - 1]);
        }
        data.nodeIsParent(setting, parentNode, true);

        if (index < 0) {
          data.nodeChildren(setting, parentNode, children.concat(nodes));
        } else {
          params = [index, 0].concat(nodes);
          children.splice.apply(children, params);
        }
      },
      addSelectedNode: function (setting, node) {
        var root = data.getRoot(setting);
        if (!data.isSelectedNode(setting, node)) {
          root.curSelectedList.push(node);
        }
      },
      addCreatedNode: function (setting, node) {
        if (!!setting.callback.onNodeCreated || !!setting.view.addDiyDom) {
          var root = data.getRoot(setting);
          root.createdNodes.push(node);
        }
      },
      addZTreeTools: function (zTreeTools) {
        _init.zTreeTools.push(zTreeTools);
      },
      exSetting: function (s) {
        $.extend(true, _setting, s);
      },
      fixPIdKeyValue: function (setting, node) {
        if (setting.data.simpleData.enable) {
          node[setting.data.simpleData.pIdKey] = node.parentTId ? node.getParentNode()[setting.data.simpleData.idKey] : setting.data.simpleData.rootPId;
        }
      },
      getAfterA: function (setting, node, array) {
        for (var i = 0, j = _init.afterA.length; i < j; i++) {
          _init.afterA[i].apply(this, arguments);
        }
      },
      getBeforeA: function (setting, node, array) {
        for (var i = 0, j = _init.beforeA.length; i < j; i++) {
          _init.beforeA[i].apply(this, arguments);
        }
      },
      getInnerAfterA: function (setting, node, array) {
        for (var i = 0, j = _init.innerAfterA.length; i < j; i++) {
          _init.innerAfterA[i].apply(this, arguments);
        }
      },
      getInnerBeforeA: function (setting, node, array) {
        for (var i = 0, j = _init.innerBeforeA.length; i < j; i++) {
          _init.innerBeforeA[i].apply(this, arguments);
        }
      },
      getCache: function (setting) {
        return caches[setting.treeId];
      },
      getNodeIndex: function (setting, node) {
        if (!node) return null;
        var p = node.parentTId ? node.getParentNode() : data.getRoot(setting),
          children = data.nodeChildren(setting, p);
        for (var i = 0, l = children.length - 1; i <= l; i++) {
          if (children[i] === node) {
            return i;
          }
        }
        return -1;
      },
      getNextNode: function (setting, node) {
        if (!node) return null;
        var p = node.parentTId ? node.getParentNode() : data.getRoot(setting),
          children = data.nodeChildren(setting, p);
        for (var i = 0, l = children.length - 1; i <= l; i++) {
          if (children[i] === node) {
            return (i == l ? null : children[i + 1]);
          }
        }
        return null;
      },
      getNodeByParam: function (setting, nodes, key, value) {
        if (!nodes || !key) return null;
        for (var i = 0, l = nodes.length; i < l; i++) {
          var node = nodes[i];
          if (node[key] == value) {
            return nodes[i];
          }
          var children = data.nodeChildren(setting, node);
          var tmp = data.getNodeByParam(setting, children, key, value);
          if (tmp) return tmp;
        }
        return null;
      },
      getNodeCache: function (setting, tId) {
        if (!tId) return null;
        var n = caches[setting.treeId].nodes[data.getNodeCacheId(tId)];
        return n ? n : null;
      },
      getNodePath: function (setting, node) {
        if (!node) return null;

        var path;
        if (node.parentTId) {
          path = node.getParentNode().getPath();
        } else {
          path = [];
        }

        if (path) {
          path.push(node);
        }

        return path;
      },
      getNodes: function (setting) {
        return data.nodeChildren(setting, data.getRoot(setting));
      },
      getNodesByParam: function (setting, nodes, key, value) {
        if (!nodes || !key) return [];
        var result = [];
        for (var i = 0, l = nodes.length; i < l; i++) {
          var node = nodes[i];
          if (node[key] == value) {
            result.push(node);
          }
          var children = data.nodeChildren(setting, node);
          result = result.concat(data.getNodesByParam(setting, children, key, value));
        }
        return result;
      },
      getNodesByParamFuzzy: function (setting, nodes, key, value) {
        if (!nodes || !key) return [];
        var result = [];
        value = value.toLowerCase();
        for (var i = 0, l = nodes.length; i < l; i++) {
          var node = nodes[i];
          if (typeof node[key] == "string" && nodes[i][key].toLowerCase().indexOf(value) > -1) {
            result.push(node);
          }
          var children = data.nodeChildren(setting, node);
          result = result.concat(data.getNodesByParamFuzzy(setting, children, key, value));
        }
        return result;
      },
      getNodesByFilter: function (setting, nodes, filter, isSingle, invokeParam) {
        if (!nodes) return (isSingle ? null : []);
        var result = isSingle ? null : [];
        for (var i = 0, l = nodes.length; i < l; i++) {
          var node = nodes[i];
          if (tools.apply(filter, [node, invokeParam], false)) {
            if (isSingle) {
              return node;
            }
            result.push(node);
          }
          var children = data.nodeChildren(setting, node);
          var tmpResult = data.getNodesByFilter(setting, children, filter, isSingle, invokeParam);
          if (isSingle && !!tmpResult) {
            return tmpResult;
          }
          result = isSingle ? tmpResult : result.concat(tmpResult);
        }
        return result;
      },
      getPreNode: function (setting, node) {
        if (!node) return null;
        var p = node.parentTId ? node.getParentNode() : data.getRoot(setting),
          children = data.nodeChildren(setting, p);
        for (var i = 0, l = children.length; i < l; i++) {
          if (children[i] === node) {
            return (i == 0 ? null : children[i - 1]);
          }
        }
        return null;
      },
      getRoot: function (setting) {
        return setting ? roots[setting.treeId] : null;
      },
      getRoots: function () {
        return roots;
      },
      getSetting: function (treeId) {
        return settings[treeId];
      },
      getSettings: function () {
        return settings;
      },
      getZTreeTools: function (treeId) {
        var r = this.getRoot(this.getSetting(treeId));
        return r ? r.treeTools : null;
      },
      initCache: function (setting) {
        for (var i = 0, j = _init.caches.length; i < j; i++) {
          _init.caches[i].apply(this, arguments);
        }
      },
      initNode: function (setting, level, node, parentNode, preNode, nextNode) {
        for (var i = 0, j = _init.nodes.length; i < j; i++) {
          _init.nodes[i].apply(this, arguments);
        }
      },
      initRoot: function (setting) {
        for (var i = 0, j = _init.roots.length; i < j; i++) {
          _init.roots[i].apply(this, arguments);
        }
      },
      isSelectedNode: function (setting, node) {
        var root = data.getRoot(setting);
        for (var i = 0, j = root.curSelectedList.length; i < j; i++) {
          if (node === root.curSelectedList[i]) return true;
        }
        return false;
      },
      nodeChildren: function (setting, node, newChildren) {
        if (!node) {
          return null;
        }
        var key = setting.data.key.children;
        if (typeof newChildren !== 'undefined') {
          node[key] = newChildren;
        }
        return node[key];
      },
      nodeIsParent: function (setting, node, newIsParent) {
        if (!node) {
          return false;
        }
        var key = setting.data.key.isParent;
        if (typeof newIsParent !== 'undefined') {
          if (typeof newIsParent === "string") {
            newIsParent = tools.eqs(newIsParent, "true");
          }
          newIsParent = !!newIsParent;
          node[key] = newIsParent;
        } else if (typeof node[key] == "string"){
          node[key] = tools.eqs(node[key], "true");
        } else {
          node[key] = !!node[key];
        }
        return node[key];
      },
      nodeName: function (setting, node, newName) {
        var key = setting.data.key.name;
        if (typeof newName !== 'undefined') {
          node[key] = newName;
        }
        var rawName = "" + node[key];
        if(typeof setting.data.render.name === 'function') {
          return setting.data.render.name.call(this,rawName,node);
        }
        return rawName;
      },
      nodeTitle: function (setting, node) {
        var t = setting.data.key.title === "" ? setting.data.key.name : setting.data.key.title;
        var rawTitle = "" + node[t];
        if(typeof setting.data.render.title === 'function') {
          return setting.data.render.title.call(this,rawTitle,node);
        }
        return rawTitle;
      },
      removeNodeCache: function (setting, node) {
        var children = data.nodeChildren(setting, node);
        if (children) {
          for (var i = 0, l = children.length; i < l; i++) {
            data.removeNodeCache(setting, children[i]);
          }
        }
        data.getCache(setting).nodes[data.getNodeCacheId(node.tId)] = null;
      },
      removeSelectedNode: function (setting, node) {
        var root = data.getRoot(setting);
        for (var i = 0, j = root.curSelectedList.length; i < j; i++) {
          if (node === root.curSelectedList[i] || !data.getNodeCache(setting, root.curSelectedList[i].tId)) {
            root.curSelectedList.splice(i, 1);
            setting.treeObj.trigger(consts.event.UNSELECTED, [setting.treeId, node]);
            i--;
            j--;
          }
        }
      },
      setCache: function (setting, cache) {
        caches[setting.treeId] = cache;
      },
      setRoot: function (setting, root) {
        roots[setting.treeId] = root;
      },
      setZTreeTools: function (setting, zTreeTools) {
        for (var i = 0, j = _init.zTreeTools.length; i < j; i++) {
          _init.zTreeTools[i].apply(this, arguments);
        }
      },
      transformToArrayFormat: function (setting, nodes) {
        if (!nodes) return [];
        var r = [];
        if (tools.isArray(nodes)) {
          for (var i = 0, l = nodes.length; i < l; i++) {
            var node = nodes[i];
            _do(node);
          }
        } else {
          _do(nodes);
        }
        return r;

        function _do(_node) {
          r.push(_node);
          var children = data.nodeChildren(setting, _node);
          if (children) {
            r = r.concat(data.transformToArrayFormat(setting, children));
          }
        }
      },
      transformTozTreeFormat: function (setting, sNodes) {
        var i, l,
          key = setting.data.simpleData.idKey,
          parentKey = setting.data.simpleData.pIdKey;
        if (!key || key == "" || !sNodes) return [];

        if (tools.isArray(sNodes)) {
          var r = [];
          var tmpMap = {};
          for (i = 0, l = sNodes.length; i < l; i++) {
            tmpMap[sNodes[i][key]] = sNodes[i];
          }
          for (i = 0, l = sNodes.length; i < l; i++) {
            var p = tmpMap[sNodes[i][parentKey]];
            if (p && sNodes[i][key] != sNodes[i][parentKey]) {
              var children = data.nodeChildren(setting, p);
              if (!children) {
                children = data.nodeChildren(setting, p, []);
              }
              children.push(sNodes[i]);
            } else {
              r.push(sNodes[i]);
            }
          }
          return r;
        } else {
          return [sNodes];
        }
      }
    },
    //method of event proxy
    event = {
      bindEvent: function (setting) {
        for (var i = 0, j = _init.bind.length; i < j; i++) {
          _init.bind[i].apply(this, arguments);
        }
      },
      unbindEvent: function (setting) {
        for (var i = 0, j = _init.unbind.length; i < j; i++) {
          _init.unbind[i].apply(this, arguments);
        }
      },
      bindTree: function (setting) {
        var eventParam = {
            treeId: setting.treeId
          },
          o = setting.treeObj;
        if (!setting.view.txtSelectedEnable) {
          // for can't select text
          o.bind('selectstart', handler.onSelectStart).css({
            "-moz-user-select": "-moz-none"
          });
        }
        o.bind('click', eventParam, event.proxy);
        o.bind('dblclick', eventParam, event.proxy);
        o.bind('mouseover', eventParam, event.proxy);
        o.bind('mouseout', eventParam, event.proxy);
        o.bind('mousedown', eventParam, event.proxy);
        o.bind('mouseup', eventParam, event.proxy);
        o.bind('contextmenu', eventParam, event.proxy);
      },
      unbindTree: function (setting) {
        var o = setting.treeObj;
        o.unbind('selectstart', handler.onSelectStart)
          .unbind('click', event.proxy)
          .unbind('dblclick', event.proxy)
          .unbind('mouseover', event.proxy)
          .unbind('mouseout', event.proxy)
          .unbind('mousedown', event.proxy)
          .unbind('mouseup', event.proxy)
          .unbind('contextmenu', event.proxy);
      },
      doProxy: function (e) {
        var results = [];
        for (var i = 0, j = _init.proxys.length; i < j; i++) {
          var proxyResult = _init.proxys[i].apply(this, arguments);
          results.push(proxyResult);
          if (proxyResult.stop) {
            break;
          }
        }
        return results;
      },
      proxy: function (e) {
        var setting = data.getSetting(e.data.treeId);
        if (!tools.uCanDo(setting, e)) return true;
        var results = event.doProxy(e),
          r = true, x = false;
        for (var i = 0, l = results.length; i < l; i++) {
          var proxyResult = results[i];
          if (proxyResult.nodeEventCallback) {
            x = true;
            r = proxyResult.nodeEventCallback.apply(proxyResult, [e, proxyResult.node]) && r;
          }
          if (proxyResult.treeEventCallback) {
            x = true;
            r = proxyResult.treeEventCallback.apply(proxyResult, [e, proxyResult.node]) && r;
          }
        }
        return r;
      }
    },
    //method of event handler
    handler = {
      onSwitchNode: function (event, node) {
        var setting = data.getSetting(event.data.treeId);
        if (node.open) {
          if (tools.apply(setting.callback.beforeCollapse, [setting.treeId, node], true) == false) return true;
          data.getRoot(setting).expandTriggerFlag = true;
          view.switchNode(setting, node);
        } else {
          if (tools.apply(setting.callback.beforeExpand, [setting.treeId, node], true) == false) return true;
          data.getRoot(setting).expandTriggerFlag = true;
          view.switchNode(setting, node);
        }
        return true;
      },
      onClickNode: function (event, node) {
        var setting = data.getSetting(event.data.treeId),
          clickFlag = ((setting.view.autoCancelSelected && (event.ctrlKey || event.metaKey)) && data.isSelectedNode(setting, node)) ? 0 : (setting.view.autoCancelSelected && (event.ctrlKey || event.metaKey) && setting.view.selectedMulti) ? 2 : 1;
        if (tools.apply(setting.callback.beforeClick, [setting.treeId, node, clickFlag], true) == false) return true;
        if (clickFlag === 0) {
          view.cancelPreSelectedNode(setting, node);
        } else {
          view.selectNode(setting, node, clickFlag === 2);
        }
        setting.treeObj.trigger(consts.event.CLICK, [event, setting.treeId, node, clickFlag]);
        return true;
      },
      onZTreeMousedown: function (event, node) {
        var setting = data.getSetting(event.data.treeId);
        if (tools.apply(setting.callback.beforeMouseDown, [setting.treeId, node], true)) {
          tools.apply(setting.callback.onMouseDown, [event, setting.treeId, node]);
        }
        return true;
      },
      onZTreeMouseup: function (event, node) {
        var setting = data.getSetting(event.data.treeId);
        if (tools.apply(setting.callback.beforeMouseUp, [setting.treeId, node], true)) {
          tools.apply(setting.callback.onMouseUp, [event, setting.treeId, node]);
        }
        return true;
      },
      onZTreeDblclick: function (event, node) {
        var setting = data.getSetting(event.data.treeId);
        if (tools.apply(setting.callback.beforeDblClick, [setting.treeId, node], true)) {
          tools.apply(setting.callback.onDblClick, [event, setting.treeId, node]);
        }
        return true;
      },
      onZTreeContextmenu: function (event, node) {
        var setting = data.getSetting(event.data.treeId);
        if (tools.apply(setting.callback.beforeRightClick, [setting.treeId, node], true)) {
          tools.apply(setting.callback.onRightClick, [event, setting.treeId, node]);
        }
        return (typeof setting.callback.onRightClick) != "function";
      },
      onSelectStart: function (e) {
        var n = e.originalEvent.srcElement.nodeName.toLowerCase();
        return (n === "input" || n === "textarea");
      }
    },
    //method of tools for zTree
    tools = {
      apply: function (fun, param, defaultValue) {
        if ((typeof fun) == "function") {
          return fun.apply(zt, param ? param : []);
        }
        return defaultValue;
      },
      canAsync: function (setting, node) {
        var children = data.nodeChildren(setting, node);
        var isParent = data.nodeIsParent(setting, node);
        return (setting.async.enable && node && isParent && !(node.zAsync || (children && children.length > 0)));
      },
      clone: function (obj) {
        if (obj === null) return null;
        var o = tools.isArray(obj) ? [] : {};
        for (var i in obj) {
          o[i] = (obj[i] instanceof Date) ? new Date(obj[i].getTime()) : (typeof obj[i] === "object" ? tools.clone(obj[i]) : obj[i]);
        }
        return o;
      },
      eqs: function (str1, str2) {
        return str1.toLowerCase() === str2.toLowerCase();
      },
      isArray: function (arr) {
        return Object.prototype.toString.apply(arr) === "[object Array]";
      },
      isElement: function (o) {
        return (
          typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
      },
      $: function (node, exp, setting) {
        if (!!exp && typeof exp != "string") {
          setting = exp;
          exp = "";
        }
        if (typeof node == "string") {
          return $(node, setting ? setting.treeObj.get(0).ownerDocument : null);
        } else {
          return $("#" + node.tId + exp, setting ? setting.treeObj : null);
        }
      },
      getMDom: function (setting, curDom, targetExpr) {
        if (!curDom) return null;
        while (curDom && curDom.id !== setting.treeId) {
          for (var i = 0, l = targetExpr.length; curDom.tagName && i < l; i++) {
            if (tools.eqs(curDom.tagName, targetExpr[i].tagName) && curDom.getAttribute(targetExpr[i].attrName) !== null) {
              return curDom;
            }
          }
          curDom = curDom.parentNode;
        }
        return null;
      },
      getNodeMainDom: function (target) {
        return ($(target).parent("li").get(0) || $(target).parentsUntil("li").parent().get(0));
      },
      isChildOrSelf: function (dom, parentId) {
        return ($(dom).closest("#" + parentId).length > 0);
      },
      uCanDo: function (setting, e) {
        return true;
      }
    },
    //method of operate ztree dom
    view = {
      addNodes: function (setting, parentNode, index, newNodes, isSilent) {
        var isParent = data.nodeIsParent(setting, parentNode);
        if (setting.data.keep.leaf && parentNode && !isParent) {
          return;
        }
        if (!tools.isArray(newNodes)) {
          newNodes = [newNodes];
        }
        if (setting.data.simpleData.enable) {
          newNodes = data.transformTozTreeFormat(setting, newNodes);
        }
        if (parentNode) {
          var target_switchObj = $$(parentNode, consts.id.SWITCH, setting),
            target_icoObj = $$(parentNode, consts.id.ICON, setting),
            target_ulObj = $$(parentNode, consts.id.UL, setting);

          if (!parentNode.open) {
            view.replaceSwitchClass(parentNode, target_switchObj, consts.folder.CLOSE);
            view.replaceIcoClass(parentNode, target_icoObj, consts.folder.CLOSE);
            parentNode.open = false;
            target_ulObj.css({
              "display": "none"
            });
          }

          data.addNodesData(setting, parentNode, index, newNodes);
          view.createNodes(setting, parentNode.level + 1, newNodes, parentNode, index);
          if (!isSilent) {
            view.expandCollapseParentNode(setting, parentNode, true);
          }
        } else {
          data.addNodesData(setting, data.getRoot(setting), index, newNodes);
          view.createNodes(setting, 0, newNodes, null, index);
        }
      },
      appendNodes: function (setting, level, nodes, parentNode, index, initFlag, openFlag) {
        if (!nodes) return [];
        var html = [];

        var tmpPNode = (parentNode) ? parentNode : data.getRoot(setting),
          tmpPChild = data.nodeChildren(setting, tmpPNode),
          isFirstNode, isLastNode;

        if (!tmpPChild || index >= tmpPChild.length - nodes.length) {
          index = -1;
        }

        for (var i = 0, l = nodes.length; i < l; i++) {
          var node = nodes[i];
          if (initFlag) {
            isFirstNode = ((index === 0 || tmpPChild.length == nodes.length) && (i == 0));
            isLastNode = (index < 0 && i == (nodes.length - 1));
            data.initNode(setting, level, node, parentNode, isFirstNode, isLastNode, openFlag);
            data.addNodeCache(setting, node);
          }
          var isParent = data.nodeIsParent(setting, node);

          var childHtml = [];
          var children = data.nodeChildren(setting, node);
          if (children && children.length > 0) {
            //make child html first, because checkType
            childHtml = view.appendNodes(setting, level + 1, children, node, -1, initFlag, openFlag && node.open);
          }
          if (openFlag) {
            view.makeDOMNodeMainBefore(html, setting, node);
            view.makeDOMNodeLine(html, setting, node);
            data.getBeforeA(setting, node, html);
            view.makeDOMNodeNameBefore(html, setting, node);
            data.getInnerBeforeA(setting, node, html);
            view.makeDOMNodeIcon(html, setting, node);
            data.getInnerAfterA(setting, node, html);
            view.makeDOMNodeNameAfter(html, setting, node);
            data.getAfterA(setting, node, html);
            if (isParent && node.open) {
              view.makeUlHtml(setting, node, html, childHtml.join(''));
            }
            view.makeDOMNodeMainAfter(html, setting, node);
            data.addCreatedNode(setting, node);
          }
        }
        return html;
      },
      appendParentULDom: function (setting, node) {
        var html = [],
          nObj = $$(node, setting);
        if (!nObj.get(0) && !!node.parentTId) {
          view.appendParentULDom(setting, node.getParentNode());
          nObj = $$(node, setting);
        }
        var ulObj = $$(node, consts.id.UL, setting);
        if (ulObj.get(0)) {
          ulObj.remove();
        }
        var children = data.nodeChildren(setting, node),
          childHtml = view.appendNodes(setting, node.level + 1, children, node, -1, false, true);
        view.makeUlHtml(setting, node, html, childHtml.join(''));
        nObj.append(html.join(''));
      },
      asyncNode: function (setting, node, isSilent, callback) {
        var i, l;
        var isParent = data.nodeIsParent(setting, node);
        if (node && !isParent) {
          tools.apply(callback);
          return false;
        } else if (node && node.isAjaxing) {
          return false;
        } else if (tools.apply(setting.callback.beforeAsync, [setting.treeId, node], true) == false) {
          tools.apply(callback);
          return false;
        }
        if (node) {
          node.isAjaxing = true;
          var icoObj = $$(node, consts.id.ICON, setting);
          icoObj.attr({"style": "", "class": consts.className.BUTTON + " " + consts.className.ICO_LOADING});
        }

        var tmpParam = {};
        var autoParam = tools.apply(setting.async.autoParam, [setting.treeId, node], setting.async.autoParam);
        for (i = 0, l = autoParam.length; node && i < l; i++) {
          var pKey = autoParam[i].split("="), spKey = pKey;
          if (pKey.length > 1) {
            spKey = pKey[1];
            pKey = pKey[0];
          }
          tmpParam[spKey] = node[pKey];
        }
        var otherParam = tools.apply(setting.async.otherParam, [setting.treeId, node], setting.async.otherParam);
        if (tools.isArray(otherParam)) {
          for (i = 0, l = otherParam.length; i < l; i += 2) {
            tmpParam[otherParam[i]] = otherParam[i + 1];
          }
        } else {
          for (var p in otherParam) {
            tmpParam[p] = otherParam[p];
          }
        }

        var _tmpV = data.getRoot(setting)._ver;
        $.ajax({
          contentType: setting.async.contentType,
          cache: false,
          type: setting.async.type,
          url: tools.apply(setting.async.url, [setting.treeId, node], setting.async.url),
          data: setting.async.contentType.indexOf('application/json') > -1 ? JSON.stringify(tmpParam) : tmpParam,
          dataType: setting.async.dataType,
          headers: setting.async.headers,
          xhrFields: setting.async.xhrFields,
          success: function (msg) {
            if (_tmpV != data.getRoot(setting)._ver) {
              return;
            }
            var newNodes = [];
            try {
              if (!msg || msg.length == 0) {
                newNodes = [];
              } else if (typeof msg == "string") {
                newNodes = eval("(" + msg + ")");
              } else {
                newNodes = msg;
              }
            } catch (err) {
              newNodes = msg;
            }

            if (node) {
              node.isAjaxing = null;
              node.zAsync = true;
            }
            view.setNodeLineIcos(setting, node);
            if (newNodes && newNodes !== "") {
              newNodes = tools.apply(setting.async.dataFilter, [setting.treeId, node, newNodes], newNodes);
              view.addNodes(setting, node, -1, !!newNodes ? tools.clone(newNodes) : [], !!isSilent);
            } else {
              view.addNodes(setting, node, -1, [], !!isSilent);
            }
            setting.treeObj.trigger(consts.event.ASYNC_SUCCESS, [setting.treeId, node, msg]);
            tools.apply(callback);
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (_tmpV != data.getRoot(setting)._ver) {
              return;
            }
            if (node) node.isAjaxing = null;
            view.setNodeLineIcos(setting, node);
            setting.treeObj.trigger(consts.event.ASYNC_ERROR, [setting.treeId, node, XMLHttpRequest, textStatus, errorThrown]);
          }
        });
        return true;
      },
      cancelPreSelectedNode: function (setting, node, excludeNode) {
        var list = data.getRoot(setting).curSelectedList,
          i, n;
        for (i = list.length - 1; i >= 0; i--) {
          n = list[i];
          if (node === n || (!node && (!excludeNode || excludeNode !== n))) {
            $$(n, consts.id.A, setting).removeClass(consts.node.CURSELECTED);
            if (node) {
              data.removeSelectedNode(setting, node);
              break;
            } else {
              list.splice(i, 1);
              setting.treeObj.trigger(consts.event.UNSELECTED, [setting.treeId, n]);
            }
          }
        }
      },
      createNodeCallback: function (setting) {
        if (!!setting.callback.onNodeCreated || !!setting.view.addDiyDom) {
          var root = data.getRoot(setting);
          while (root.createdNodes.length > 0) {
            var node = root.createdNodes.shift();
            tools.apply(setting.view.addDiyDom, [setting.treeId, node]);
            if (!!setting.callback.onNodeCreated) {
              setting.treeObj.trigger(consts.event.NODECREATED, [setting.treeId, node]);
            }
          }
        }
      },
      createNodes: function (setting, level, nodes, parentNode, index) {
        if (!nodes || nodes.length == 0) return;
        var root = data.getRoot(setting),
          openFlag = !parentNode || parentNode.open || !!$$(data.nodeChildren(setting, parentNode)[0], setting).get(0);
        root.createdNodes = [];
        var zTreeHtml = view.appendNodes(setting, level, nodes, parentNode, index, true, openFlag),
          parentObj, nextObj;

        if (!parentNode) {
          parentObj = setting.treeObj;
          //setting.treeObj.append(zTreeHtml.join(''));
        } else {
          var ulObj = $$(parentNode, consts.id.UL, setting);
          if (ulObj.get(0)) {
            parentObj = ulObj;
            //ulObj.append(zTreeHtml.join(''));
          }
        }
        if (parentObj) {
          if (index >= 0) {
            nextObj = parentObj.children()[index];
          }
          if (index >= 0 && nextObj) {
            $(nextObj).before(zTreeHtml.join(''));
          } else {
            parentObj.append(zTreeHtml.join(''));
          }
        }

        view.createNodeCallback(setting);
      },
      destroy: function (setting) {
        if (!setting) return;
        data.initCache(setting);
        data.initRoot(setting);
        event.unbindTree(setting);
        event.unbindEvent(setting);
        setting.treeObj.empty();
        delete settings[setting.treeId];
      },
      expandCollapseNode: function (setting, node, expandFlag, animateFlag, callback) {
        var root = data.getRoot(setting);
        var tmpCb, _callback;
        if (!node) {
          tools.apply(callback, []);
          return;
        }
        var children = data.nodeChildren(setting, node);
        var isParent = data.nodeIsParent(setting, node);
        if (root.expandTriggerFlag) {
          _callback = callback;
          tmpCb = function () {
            if (_callback) _callback();
            if (node.open) {
              setting.treeObj.trigger(consts.event.EXPAND, [setting.treeId, node]);
            } else {
              setting.treeObj.trigger(consts.event.COLLAPSE, [setting.treeId, node]);
            }
          };
          callback = tmpCb;
          root.expandTriggerFlag = false;
        }
        if (!node.open && isParent && ((!$$(node, consts.id.UL, setting).get(0)) || (children && children.length > 0 && !$$(children[0], setting).get(0)))) {
          view.appendParentULDom(setting, node);
          view.createNodeCallback(setting);
        }
        if (node.open == expandFlag) {
          tools.apply(callback, []);
          return;
        }
        var ulObj = $$(node, consts.id.UL, setting),
          switchObj = $$(node, consts.id.SWITCH, setting),
          icoObj = $$(node, consts.id.ICON, setting);

        if (isParent) {
          node.open = !node.open;
          if (node.iconOpen && node.iconClose) {
            icoObj.attr("style", view.makeNodeIcoStyle(setting, node));
          }

          if (node.open) {
            view.replaceSwitchClass(node, switchObj, consts.folder.OPEN);
            view.replaceIcoClass(node, icoObj, consts.folder.OPEN);
            if (animateFlag == false || setting.view.expandSpeed == "") {
              ulObj.show();
              tools.apply(callback, []);
            } else {
              if (children && children.length > 0) {
                ulObj.slideDown(setting.view.expandSpeed, callback);
              } else {
                ulObj.show();
                tools.apply(callback, []);
              }
            }
          } else {
            view.replaceSwitchClass(node, switchObj, consts.folder.CLOSE);
            view.replaceIcoClass(node, icoObj, consts.folder.CLOSE);
            if (animateFlag == false || setting.view.expandSpeed == "" || !(children && children.length > 0)) {
              ulObj.hide();
              tools.apply(callback, []);
            } else {
              ulObj.slideUp(setting.view.expandSpeed, callback);
            }
          }
        } else {
          tools.apply(callback, []);
        }
      },
      expandCollapseParentNode: function (setting, node, expandFlag, animateFlag, callback) {
        if (!node) return;
        if (!node.parentTId) {
          view.expandCollapseNode(setting, node, expandFlag, animateFlag, callback);
          return;
        } else {
          view.expandCollapseNode(setting, node, expandFlag, animateFlag);
        }
        if (node.parentTId) {
          view.expandCollapseParentNode(setting, node.getParentNode(), expandFlag, animateFlag, callback);
        }
      },
      expandCollapseSonNode: function (setting, node, expandFlag, animateFlag, callback) {
        var root = data.getRoot(setting),
          treeNodes = (node) ? data.nodeChildren(setting, node) : data.nodeChildren(setting, root),
          selfAnimateSign = (node) ? false : animateFlag,
          expandTriggerFlag = data.getRoot(setting).expandTriggerFlag;
        data.getRoot(setting).expandTriggerFlag = false;
        if (treeNodes) {
          for (var i = 0, l = treeNodes.length; i < l; i++) {
            if (treeNodes[i]) view.expandCollapseSonNode(setting, treeNodes[i], expandFlag, selfAnimateSign);
          }
        }
        data.getRoot(setting).expandTriggerFlag = expandTriggerFlag;
        view.expandCollapseNode(setting, node, expandFlag, animateFlag, callback);
      },
      isSelectedNode: function (setting, node) {
        if (!node) {
          return false;
        }
        var list = data.getRoot(setting).curSelectedList,
          i;
        for (i = list.length - 1; i >= 0; i--) {
          if (node === list[i]) {
            return true;
          }
        }
        return false;
      },
      makeDOMNodeIcon: function (html, setting, node) {
        var nameStr = data.nodeName(setting, node),
          name = setting.view.nameIsHTML ? nameStr : nameStr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        html.push("<span id='", node.tId, consts.id.ICON,
          "' title='' treeNode", consts.id.ICON, " class='", view.makeNodeIcoClass(setting, node),
          "' style='", view.makeNodeIcoStyle(setting, node), "'></span><span id='", node.tId, consts.id.SPAN,
          "' class='", consts.className.NAME,
          "'>", name, "</span>");
      },
      makeDOMNodeLine: function (html, setting, node) {
        html.push("<span id='", node.tId, consts.id.SWITCH, "' title='' class='", view.makeNodeLineClass(setting, node), "' treeNode", consts.id.SWITCH, "></span>");
      },
      makeDOMNodeMainAfter: function (html, setting, node) {
        html.push("</li>");
      },
      makeDOMNodeMainBefore: function (html, setting, node) {
        html.push("<li id='", node.tId, "' class='", consts.className.LEVEL, node.level, "' tabindex='0' hidefocus='true' treenode>");
      },
      makeDOMNodeNameAfter: function (html, setting, node) {
        html.push("</a>");
      },
      makeDOMNodeNameBefore: function (html, setting, node) {
        var title = data.nodeTitle(setting, node),
          url = view.makeNodeUrl(setting, node),
          fontcss = view.makeNodeFontCss(setting, node),
          nodeClasses = view.makeNodeClasses(setting, node),
          fontStyle = [];
        for (var f in fontcss) {
          fontStyle.push(f, ":", fontcss[f], ";");
        }
        html.push("<a id='", node.tId, consts.id.A, "' class='", consts.className.LEVEL, node.level,
          nodeClasses.add ? ' ' + nodeClasses.add.join(' ') : '', 
          "' treeNode", consts.id.A,
          node.click ? " onclick=\"" + node.click + "\"" : "",
          ((url != null && url.length > 0) ? " href='" + url + "'" : ""), " target='", view.makeNodeTarget(node), "' style='", fontStyle.join(''),
          "'");
        if (tools.apply(setting.view.showTitle, [setting.treeId, node], setting.view.showTitle) && title) {
          html.push("title='", title.replace(/'/g, "&#39;").replace(/</g, '&lt;').replace(/>/g, '&gt;'), "'");
        }
        html.push(">");
      },
      makeNodeFontCss: function (setting, node) {
        var fontCss = tools.apply(setting.view.fontCss, [setting.treeId, node], setting.view.fontCss);
        return (fontCss && ((typeof fontCss) != "function")) ? fontCss : {};
      },
      makeNodeClasses: function (setting, node) {
        var classes = tools.apply(setting.view.nodeClasses, [setting.treeId, node], setting.view.nodeClasses);
        return (classes && (typeof classes !== "function")) ? classes : {add:[], remove:[]};
      },
      makeNodeIcoClass: function (setting, node) {
        var icoCss = ["ico"];
        if (!node.isAjaxing) {
          var isParent = data.nodeIsParent(setting, node);
          icoCss[0] = (node.iconSkin ? node.iconSkin + "_" : "") + icoCss[0];
          if (isParent) {
            icoCss.push(node.open ? consts.folder.OPEN : consts.folder.CLOSE);
          } else {
            icoCss.push(consts.folder.DOCU);
          }
        }
        return consts.className.BUTTON + " " + icoCss.join('_');
      },
      makeNodeIcoStyle: function (setting, node) {
        var icoStyle = [];
        if (!node.isAjaxing) {
          var isParent = data.nodeIsParent(setting, node);
          var icon = (isParent && node.iconOpen && node.iconClose) ? (node.open ? node.iconOpen : node.iconClose) : node[setting.data.key.icon];
          if (icon) icoStyle.push("background:url(", icon, ") 0 0 no-repeat;");
          if (setting.view.showIcon == false || !tools.apply(setting.view.showIcon, [setting.treeId, node], true)) {
            icoStyle.push("display:none;");
          }
        }
        return icoStyle.join('');
      },
      makeNodeLineClass: function (setting, node) {
        var lineClass = [];
        if (setting.view.showLine) {
          if (node.level == 0 && node.isFirstNode && node.isLastNode) {
            lineClass.push(consts.line.ROOT);
          } else if (node.level == 0 && node.isFirstNode) {
            lineClass.push(consts.line.ROOTS);
          } else if (node.isLastNode) {
            lineClass.push(consts.line.BOTTOM);
          } else {
            lineClass.push(consts.line.CENTER);
          }
        } else {
          lineClass.push(consts.line.NOLINE);
        }
        if (data.nodeIsParent(setting, node)) {
          lineClass.push(node.open ? consts.folder.OPEN : consts.folder.CLOSE);
        } else {
          lineClass.push(consts.folder.DOCU);
        }
        return view.makeNodeLineClassEx(node) + lineClass.join('_');
      },
      makeNodeLineClassEx: function (node) {
        return consts.className.BUTTON + " " + consts.className.LEVEL + node.level + " " + consts.className.SWITCH + " ";
      },
      makeNodeTarget: function (node) {
        return (node.target || "_blank");
      },
      makeNodeUrl: function (setting, node) {
        var urlKey = setting.data.key.url;
        return node[urlKey] ? node[urlKey] : null;
      },
      makeUlHtml: function (setting, node, html, content) {
        html.push("<ul id='", node.tId, consts.id.UL, "' class='", consts.className.LEVEL, node.level, " ", view.makeUlLineClass(setting, node), "' style='display:", (node.open ? "block" : "none"), "'>");
        html.push(content);
        html.push("</ul>");
      },
      makeUlLineClass: function (setting, node) {
        return ((setting.view.showLine && !node.isLastNode) ? consts.line.LINE : "");
      },
      removeChildNodes: function (setting, node) {
        if (!node) return;
        var nodes = data.nodeChildren(setting, node);
        if (!nodes) return;

        for (var i = 0, l = nodes.length; i < l; i++) {
          data.removeNodeCache(setting, nodes[i]);
        }
        data.removeSelectedNode(setting);
        delete node[setting.data.key.children];

        if (!setting.data.keep.parent) {
          data.nodeIsParent(setting, node, false);
          node.open = false;
          var tmp_switchObj = $$(node, consts.id.SWITCH, setting),
            tmp_icoObj = $$(node, consts.id.ICON, setting);
          view.replaceSwitchClass(node, tmp_switchObj, consts.folder.DOCU);
          view.replaceIcoClass(node, tmp_icoObj, consts.folder.DOCU);
          $$(node, consts.id.UL, setting).remove();
        } else {
          $$(node, consts.id.UL, setting).empty();
        }
      },
      scrollIntoView: function (setting, dom) {
        if (!dom) {
          return;
        }
        // support IE 7 / 8
        if (typeof Element === 'undefined' || typeof HTMLElement === 'undefined') {
          var contRect = setting.treeObj.get(0).getBoundingClientRect(),
            findMeRect = dom.getBoundingClientRect();
          if (findMeRect.top < contRect.top || findMeRect.bottom > contRect.bottom
            || findMeRect.right > contRect.right || findMeRect.left < contRect.left) {
            dom.scrollIntoView();
          }
          return;
        }
        // CC-BY jocki84@googlemail.com, https://gist.github.com/jocki84/6ffafd003387179a988e
        if (!Element.prototype.scrollIntoViewIfNeeded) {
          Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
            "use strict";

            function makeRange(start, length) {
              return {"start": start, "length": length, "end": start + length};
            }

            function coverRange(inner, outer) {
              if (
                false === centerIfNeeded ||
                (outer.start < inner.end && inner.start < outer.end)
              ) {
                return Math.max(
                  inner.end - outer.length,
                  Math.min(outer.start, inner.start)
                );
              }
              return (inner.start + inner.end - outer.length) / 2;
            }

            function makePoint(x, y) {
              return {
                "x": x,
                "y": y,
                "translate": function translate(dX, dY) {
                  return makePoint(x + dX, y + dY);
                }
              };
            }

            function absolute(elem, pt) {
              while (elem) {
                pt = pt.translate(elem.offsetLeft, elem.offsetTop);
                elem = elem.offsetParent;
              }
              return pt;
            }

            var target = absolute(this, makePoint(0, 0)),
              extent = makePoint(this.offsetWidth, this.offsetHeight),
              elem = this.parentNode,
              origin;

            while (elem instanceof HTMLElement) {
              // Apply desired scroll amount.
              origin = absolute(elem, makePoint(elem.clientLeft, elem.clientTop));
              elem.scrollLeft = coverRange(
                makeRange(target.x - origin.x, extent.x),
                makeRange(elem.scrollLeft, elem.clientWidth)
              );
              elem.scrollTop = coverRange(
                makeRange(target.y - origin.y, extent.y),
                makeRange(elem.scrollTop, elem.clientHeight)
              );

              // Determine actual scroll amount by reading back scroll properties.
              target = target.translate(-elem.scrollLeft, -elem.scrollTop);
              elem = elem.parentNode;
            }
          };
        }
        dom.scrollIntoViewIfNeeded();
      },
      setFirstNode: function (setting, parentNode) {
        var children = data.nodeChildren(setting, parentNode);
        if (children.length > 0) {
          children[0].isFirstNode = true;
        }
      },
      setLastNode: function (setting, parentNode) {
        var children = data.nodeChildren(setting, parentNode);
        if (children.length > 0) {
          children[children.length - 1].isLastNode = true;
        }
      },
      removeNode: function (setting, node) {
        var root = data.getRoot(setting),
          parentNode = (node.parentTId) ? node.getParentNode() : root;

        node.isFirstNode = false;
        node.isLastNode = false;
        node.getPreNode = function () {
          return null;
        };
        node.getNextNode = function () {
          return null;
        };

        if (!data.getNodeCache(setting, node.tId)) {
          return;
        }

        $$(node, setting).remove();
        data.removeNodeCache(setting, node);
        data.removeSelectedNode(setting, node);

        var children = data.nodeChildren(setting, parentNode);
        for (var i = 0, l = children.length; i < l; i++) {
          if (children[i].tId == node.tId) {
            children.splice(i, 1);
            break;
          }
        }
        view.setFirstNode(setting, parentNode);
        view.setLastNode(setting, parentNode);

        var tmp_ulObj, tmp_switchObj, tmp_icoObj,
          childLength = children.length;

        //repair nodes old parent
        if (!setting.data.keep.parent && childLength == 0) {
          //old parentNode has no child nodes
          data.nodeIsParent(setting, parentNode, false);
          parentNode.open = false;
          delete parentNode[setting.data.key.children];
          tmp_ulObj = $$(parentNode, consts.id.UL, setting);
          tmp_switchObj = $$(parentNode, consts.id.SWITCH, setting);
          tmp_icoObj = $$(parentNode, consts.id.ICON, setting);
          view.replaceSwitchClass(parentNode, tmp_switchObj, consts.folder.DOCU);
          view.replaceIcoClass(parentNode, tmp_icoObj, consts.folder.DOCU);
          tmp_ulObj.css("display", "none");

        } else if (setting.view.showLine && childLength > 0) {
          //old parentNode has child nodes
          var newLast = children[childLength - 1];
          tmp_ulObj = $$(newLast, consts.id.UL, setting);
          tmp_switchObj = $$(newLast, consts.id.SWITCH, setting);
          tmp_icoObj = $$(newLast, consts.id.ICON, setting);
          if (parentNode == root) {
            if (children.length == 1) {
              //node was root, and ztree has only one root after move node
              view.replaceSwitchClass(newLast, tmp_switchObj, consts.line.ROOT);
            } else {
              var tmp_first_switchObj = $$(children[0], consts.id.SWITCH, setting);
              view.replaceSwitchClass(children[0], tmp_first_switchObj, consts.line.ROOTS);
              view.replaceSwitchClass(newLast, tmp_switchObj, consts.line.BOTTOM);
            }
          } else {
            view.replaceSwitchClass(newLast, tmp_switchObj, consts.line.BOTTOM);
          }
          tmp_ulObj.removeClass(consts.line.LINE);
        }
      },
      replaceIcoClass: function (node, obj, newName) {
        if (!obj || node.isAjaxing) return;
        var tmpName = obj.attr("class");
        if (tmpName == undefined) return;
        var tmpList = tmpName.split("_");
        switch (newName) {
          case consts.folder.OPEN:
          case consts.folder.CLOSE:
          case consts.folder.DOCU:
            tmpList[tmpList.length - 1] = newName;
            break;
        }
        obj.attr("class", tmpList.join("_"));
      },
      replaceSwitchClass: function (node, obj, newName) {
        if (!obj) return;
        var tmpName = obj.attr("class");
        if (tmpName == undefined) return;
        var tmpList = tmpName.split("_");
        switch (newName) {
          case consts.line.ROOT:
          case consts.line.ROOTS:
          case consts.line.CENTER:
          case consts.line.BOTTOM:
          case consts.line.NOLINE:
            tmpList[0] = view.makeNodeLineClassEx(node) + newName;
            break;
          case consts.folder.OPEN:
          case consts.folder.CLOSE:
          case consts.folder.DOCU:
            tmpList[1] = newName;
            break;
        }
        obj.attr("class", tmpList.join("_"));
        if (newName !== consts.folder.DOCU) {
          obj.removeAttr("disabled");
        } else {
          obj.attr("disabled", "disabled");
        }
      },
      selectNode: function (setting, node, addFlag) {
        if (!addFlag) {
          view.cancelPreSelectedNode(setting, null, node);
        }
        $$(node, consts.id.A, setting).addClass(consts.node.CURSELECTED);
        data.addSelectedNode(setting, node);
        setting.treeObj.trigger(consts.event.SELECTED, [setting.treeId, node]);
      },
      setNodeFontCss: function (setting, treeNode) {
        var aObj = $$(treeNode, consts.id.A, setting),
          fontCss = view.makeNodeFontCss(setting, treeNode);
        if (fontCss) {
          aObj.css(fontCss);
        }
      },
      setNodeClasses: function (setting, treeNode) {
        var aObj = $$(treeNode, consts.id.A, setting),
          classes = view.makeNodeClasses(setting, treeNode);
        if ('add' in classes && classes.add.length) {
          aObj.addClass(classes.add.join(' '));
        }
        if ('remove' in classes && classes.remove.length) {
          aObj.removeClass(classes.remove.join(' '));
        }
      },
      setNodeLineIcos: function (setting, node) {
        if (!node) return;
        var switchObj = $$(node, consts.id.SWITCH, setting),
          ulObj = $$(node, consts.id.UL, setting),
          icoObj = $$(node, consts.id.ICON, setting),
          ulLine = view.makeUlLineClass(setting, node);
        if (ulLine.length == 0) {
          ulObj.removeClass(consts.line.LINE);
        } else {
          ulObj.addClass(ulLine);
        }
        switchObj.attr("class", view.makeNodeLineClass(setting, node));
        if (data.nodeIsParent(setting, node)) {
          switchObj.removeAttr("disabled");
        } else {
          switchObj.attr("disabled", "disabled");
        }
        icoObj.removeAttr("style");
        icoObj.attr("style", view.makeNodeIcoStyle(setting, node));
        icoObj.attr("class", view.makeNodeIcoClass(setting, node));
      },
      setNodeName: function (setting, node) {
        var title = data.nodeTitle(setting, node),
          nObj = $$(node, consts.id.SPAN, setting);
        nObj.empty();
        if (setting.view.nameIsHTML) {
          nObj.html(data.nodeName(setting, node));
        } else {
          nObj.text(data.nodeName(setting, node));
        }
        if (tools.apply(setting.view.showTitle, [setting.treeId, node], setting.view.showTitle)) {
          var aObj = $$(node, consts.id.A, setting);
          aObj.attr("title", !title ? "" : title);
        }
      },
      setNodeTarget: function (setting, node) {
        var aObj = $$(node, consts.id.A, setting);
        aObj.attr("target", view.makeNodeTarget(node));
      },
      setNodeUrl: function (setting, node) {
        var aObj = $$(node, consts.id.A, setting),
          url = view.makeNodeUrl(setting, node);
        if (url == null || url.length == 0) {
          aObj.removeAttr("href");
        } else {
          aObj.attr("href", url);
        }
      },
      switchNode: function (setting, node) {
        if (node.open || !tools.canAsync(setting, node)) {
          view.expandCollapseNode(setting, node, !node.open);
        } else if (setting.async.enable) {
          if (!view.asyncNode(setting, node)) {
            view.expandCollapseNode(setting, node, !node.open);
            return;
          }
        } else if (node) {
          view.expandCollapseNode(setting, node, !node.open);
        }
      }
    };
  // zTree defind
  $.fn.zTree = {
    consts: _consts,
    _z: {
      tools: tools,
      view: view,
      event: event,
      data: data
    },
    getZTreeObj: function (treeId) {
      var o = data.getZTreeTools(treeId);
      return o ? o : null;
    },
    destroy: function (treeId) {
      if (!!treeId && treeId.length > 0) {
        view.destroy(data.getSetting(treeId));
      } else {
        for (var s in settings) {
          view.destroy(settings[s]);
        }
      }
    },
    init: function (obj, zSetting, zNodes) {
      var setting = tools.clone(_setting);
      $.extend(true, setting, zSetting);
      setting.treeId = obj.attr("id");
      setting.treeObj = obj;
      setting.treeObj.empty();
      settings[setting.treeId] = setting;
      //For some older browser,(e.g., ie6)
      if (typeof document.body.style.maxHeight === "undefined") {
        setting.view.expandSpeed = "";
      }
      data.initRoot(setting);
      var root = data.getRoot(setting);
      zNodes = zNodes ? tools.clone(tools.isArray(zNodes) ? zNodes : [zNodes]) : [];
      if (setting.data.simpleData.enable) {
        data.nodeChildren(setting, root, data.transformTozTreeFormat(setting, zNodes));
      } else {
        data.nodeChildren(setting, root, zNodes);
      }

      data.initCache(setting);
      event.unbindTree(setting);
      event.bindTree(setting);
      event.unbindEvent(setting);
      event.bindEvent(setting);

      var zTreeTools = {
        setting: setting,
        addNodes: function (parentNode, index, newNodes, isSilent) {
          if (!parentNode) parentNode = null;
          var isParent = data.nodeIsParent(setting, parentNode);
          if (parentNode && !isParent && setting.data.keep.leaf) return null;

          var i = parseInt(index, 10);
          if (isNaN(i)) {
            isSilent = !!newNodes;
            newNodes = index;
            index = -1;
          } else {
            index = i;
          }
          if (!newNodes) return null;


          var xNewNodes = tools.clone(tools.isArray(newNodes) ? newNodes : [newNodes]);

          function addCallback() {
            view.addNodes(setting, parentNode, index, xNewNodes, (isSilent == true));
          }

          if (tools.canAsync(setting, parentNode)) {
            view.asyncNode(setting, parentNode, isSilent, addCallback);
          } else {
            addCallback();
          }
          return xNewNodes;
        },
        cancelSelectedNode: function (node) {
          view.cancelPreSelectedNode(setting, node);
        },
        destroy: function () {
          view.destroy(setting);
        },
        expandAll: function (expandFlag) {
          expandFlag = !!expandFlag;
          view.expandCollapseSonNode(setting, null, expandFlag, true);
          return expandFlag;
        },
        expandNode: function (node, expandFlag, sonSign, focus, callbackFlag) {
          if (!node || !data.nodeIsParent(setting, node)) return null;
          if (expandFlag !== true && expandFlag !== false) {
            expandFlag = !node.open;
          }
          callbackFlag = !!callbackFlag;

          if (callbackFlag && expandFlag && (tools.apply(setting.callback.beforeExpand, [setting.treeId, node], true) == false)) {
            return null;
          } else if (callbackFlag && !expandFlag && (tools.apply(setting.callback.beforeCollapse, [setting.treeId, node], true) == false)) {
            return null;
          }
          if (expandFlag && node.parentTId) {
            view.expandCollapseParentNode(setting, node.getParentNode(), expandFlag, false);
          }
          if (expandFlag === node.open && !sonSign) {
            return null;
          }

          data.getRoot(setting).expandTriggerFlag = callbackFlag;
          if (!tools.canAsync(setting, node) && sonSign) {
            view.expandCollapseSonNode(setting, node, expandFlag, true, showNodeFocus);
          } else {
            node.open = !expandFlag;
            view.switchNode(this.setting, node);
            showNodeFocus();
          }
          return expandFlag;

          function showNodeFocus() {
            var a = $$(node, consts.id.A, setting).get(0);
            if (a && focus !== false) {
              view.scrollIntoView(setting, a);
            }
          }
        },
        getNodes: function () {
          return data.getNodes(setting);
        },
        getNodeByParam: function (key, value, parentNode) {
          if (!key) return null;
          return data.getNodeByParam(setting, parentNode ? data.nodeChildren(setting, parentNode) : data.getNodes(setting), key, value);
        },
        getNodeByTId: function (tId) {
          return data.getNodeCache(setting, tId);
        },
        getNodesByParam: function (key, value, parentNode) {
          if (!key) return null;
          return data.getNodesByParam(setting, parentNode ? data.nodeChildren(setting, parentNode) : data.getNodes(setting), key, value);
        },
        getNodesByParamFuzzy: function (key, value, parentNode) {
          if (!key) return null;
          return data.getNodesByParamFuzzy(setting, parentNode ? data.nodeChildren(setting, parentNode) : data.getNodes(setting), key, value);
        },
        getNodesByFilter: function (filter, isSingle, parentNode, invokeParam) {
          isSingle = !!isSingle;
          if (!filter || (typeof filter != "function")) return (isSingle ? null : []);
          return data.getNodesByFilter(setting, parentNode ? data.nodeChildren(setting, parentNode) : data.getNodes(setting), filter, isSingle, invokeParam);
        },
        getNodeIndex: function (node) {
          if (!node) return null;
          var parentNode = (node.parentTId) ? node.getParentNode() : data.getRoot(setting);
          var children = data.nodeChildren(setting, parentNode);
          for (var i = 0, l = children.length; i < l; i++) {
            if (children[i] == node) return i;
          }
          return -1;
        },
        getSelectedNodes: function () {
          var r = [], list = data.getRoot(setting).curSelectedList;
          for (var i = 0, l = list.length; i < l; i++) {
            r.push(list[i]);
          }
          return r;
        },
        isSelectedNode: function (node) {
          return data.isSelectedNode(setting, node);
        },
        reAsyncChildNodesPromise: function (parentNode, reloadType, isSilent) {
          var promise = new Promise(function (resolve, reject) {
            try {
              zTreeTools.reAsyncChildNodes(parentNode, reloadType, isSilent, function () {
                resolve(parentNode);
              });
            } catch (e) {
              reject(e);
            }
          });
          return promise;
        },
        reAsyncChildNodes: function (parentNode, reloadType, isSilent, callback) {
          if (!this.setting.async.enable) return;
          var isRoot = !parentNode;
          if (isRoot) {
            parentNode = data.getRoot(setting);
          }
          if (reloadType == "refresh") {
            var children = data.nodeChildren(setting, parentNode);
            for (var i = 0, l = children ? children.length : 0; i < l; i++) {
              data.removeNodeCache(setting, children[i]);
            }
            data.removeSelectedNode(setting);
            data.nodeChildren(setting, parentNode, []);
            if (isRoot) {
              this.setting.treeObj.empty();
            } else {
              var ulObj = $$(parentNode, consts.id.UL, setting);
              ulObj.empty();
            }
          }
          view.asyncNode(this.setting, isRoot ? null : parentNode, !!isSilent, callback);
        },
        refresh: function () {
          this.setting.treeObj.empty();
          var root = data.getRoot(setting),
            nodes = data.nodeChildren(setting, root);
          data.initRoot(setting);
          data.nodeChildren(setting, root, nodes);
          data.initCache(setting);
          view.createNodes(setting, 0, data.nodeChildren(setting, root), null, -1);
        },
        removeChildNodes: function (node) {
          if (!node) return null;
          var nodes = data.nodeChildren(setting, node);
          view.removeChildNodes(setting, node);
          return nodes ? nodes : null;
        },
        removeNode: function (node, callbackFlag) {
          if (!node) return;
          callbackFlag = !!callbackFlag;
          if (callbackFlag && tools.apply(setting.callback.beforeRemove, [setting.treeId, node], true) == false) return;
          view.removeNode(setting, node);
          if (callbackFlag) {
            this.setting.treeObj.trigger(consts.event.REMOVE, [setting.treeId, node]);
          }
        },
        selectNode: function (node, addFlag, isSilent) {
          if (!node) return;
          if (tools.uCanDo(setting)) {
            addFlag = setting.view.selectedMulti && addFlag;
            if (node.parentTId) {
              view.expandCollapseParentNode(setting, node.getParentNode(), true, false, showNodeFocus);
            } else if (!isSilent) {
              try {
                $$(node, setting).focus().blur();
              } catch (e) {
              }
            }
            view.selectNode(setting, node, addFlag);
          }

          function showNodeFocus() {
            if (isSilent) {
              return;
            }
            var a = $$(node, setting).get(0);
            view.scrollIntoView(setting, a);
          }
        },
        transformTozTreeNodes: function (simpleNodes) {
          return data.transformTozTreeFormat(setting, simpleNodes);
        },
        transformToArray: function (nodes) {
          return data.transformToArrayFormat(setting, nodes);
        },
        updateNode: function (node, checkTypeFlag) {
          if (!node) return;
          var nObj = $$(node, setting);
          if (nObj.get(0) && tools.uCanDo(setting)) {
            view.setNodeName(setting, node);
            view.setNodeTarget(setting, node);
            view.setNodeUrl(setting, node);
            view.setNodeLineIcos(setting, node);
            view.setNodeFontCss(setting, node);
            view.setNodeClasses(setting, node);
          }
        }
      };
      root.treeTools = zTreeTools;
      data.setZTreeTools(setting, zTreeTools);
      var children = data.nodeChildren(setting, root);
      if (children && children.length > 0) {
        view.createNodes(setting, 0, children, null, -1);
      } else if (setting.async.enable && setting.async.url && setting.async.url !== '') {
        view.asyncNode(setting);
      }
      return zTreeTools;
    }
  };

  var zt = $.fn.zTree,
    $$ = tools.$,
    consts = zt.consts;
})(jQuery);
/*
 * JQuery zTree excheck
 * v3.5.48
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2020-11-21
 */

(function ($) {
  //default consts of excheck
  var _consts = {
      event: {
        CHECK: "ztree_check"
      },
      id: {
        CHECK: "_check"
      },
      checkbox: {
        STYLE: "checkbox",
        DEFAULT: "chk",
        DISABLED: "disable",
        FALSE: "false",
        TRUE: "true",
        FULL: "full",
        PART: "part",
        FOCUS: "focus"
      },
      radio: {
        STYLE: "radio",
        TYPE_ALL: "all",
        TYPE_LEVEL: "level"
      }
    },
    //default setting of excheck
    _setting = {
      check: {
        enable: false,
        autoCheckTrigger: false,
        chkStyle: _consts.checkbox.STYLE,
        nocheckInherit: false,
        chkDisabledInherit: false,
        radioType: _consts.radio.TYPE_LEVEL,
        chkboxType: {
          "Y": "ps",
          "N": "ps"
        }
      },
      data: {
        key: {
          checked: "checked"
        }
      },
      callback: {
        beforeCheck: null,
        onCheck: null
      }
    },
    //default root of excheck
    _initRoot = function (setting) {
      var r = data.getRoot(setting);
      r.radioCheckedList = [];
    },
    //default cache of excheck
    _initCache = function (treeId) {
    },
    //default bind event of excheck
    _bindEvent = function (setting) {
      var o = setting.treeObj,
        c = consts.event;
      o.bind(c.CHECK, function (event, srcEvent, treeId, node) {
        event.srcEvent = srcEvent;
        tools.apply(setting.callback.onCheck, [event, treeId, node]);
      });
    },
    _unbindEvent = function (setting) {
      var o = setting.treeObj,
        c = consts.event;
      o.unbind(c.CHECK);
    },
    //default event proxy of excheck
    _eventProxy = function (e) {
      var target = e.target,
        setting = data.getSetting(e.data.treeId),
        tId = "", node = null,
        nodeEventType = "", treeEventType = "",
        nodeEventCallback = null, treeEventCallback = null;

      if (tools.eqs(e.type, "mouseover")) {
        if (setting.check.enable && tools.eqs(target.tagName, "span") && target.getAttribute("treeNode" + consts.id.CHECK) !== null) {
          tId = tools.getNodeMainDom(target).id;
          nodeEventType = "mouseoverCheck";
        }
      } else if (tools.eqs(e.type, "mouseout")) {
        if (setting.check.enable && tools.eqs(target.tagName, "span") && target.getAttribute("treeNode" + consts.id.CHECK) !== null) {
          tId = tools.getNodeMainDom(target).id;
          nodeEventType = "mouseoutCheck";
        }
      } else if (tools.eqs(e.type, "click")) {
        if (setting.check.enable && tools.eqs(target.tagName, "span") && target.getAttribute("treeNode" + consts.id.CHECK) !== null) {
          tId = tools.getNodeMainDom(target).id;
          nodeEventType = "checkNode";
        }
      }
      if (tId.length > 0) {
        node = data.getNodeCache(setting, tId);
        switch (nodeEventType) {
          case "checkNode" :
            nodeEventCallback = _handler.onCheckNode;
            break;
          case "mouseoverCheck" :
            nodeEventCallback = _handler.onMouseoverCheck;
            break;
          case "mouseoutCheck" :
            nodeEventCallback = _handler.onMouseoutCheck;
            break;
        }
      }
      var proxyResult = {
        stop: nodeEventType === "checkNode",
        node: node,
        nodeEventType: nodeEventType,
        nodeEventCallback: nodeEventCallback,
        treeEventType: treeEventType,
        treeEventCallback: treeEventCallback
      };
      return proxyResult
    },
    //default init node of excheck
    _initNode = function (setting, level, n, parentNode, isFirstNode, isLastNode, openFlag) {
      if (!n) return;
      var checked = data.nodeChecked(setting, n);
      n.checkedOld = checked;
      if (typeof n.nocheck == "string") n.nocheck = tools.eqs(n.nocheck, "true");
      n.nocheck = !!n.nocheck || (setting.check.nocheckInherit && parentNode && !!parentNode.nocheck);
      if (typeof n.chkDisabled == "string") n.chkDisabled = tools.eqs(n.chkDisabled, "true");
      n.chkDisabled = !!n.chkDisabled || (setting.check.chkDisabledInherit && parentNode && !!parentNode.chkDisabled);
      if (typeof n.halfCheck == "string") n.halfCheck = tools.eqs(n.halfCheck, "true");
      n.halfCheck = !!n.halfCheck;
      n.check_Child_State = -1;
      n.check_Focus = false;
      n.getCheckStatus = function () {
        return data.getCheckStatus(setting, n);
      };

      if (setting.check.chkStyle == consts.radio.STYLE && setting.check.radioType == consts.radio.TYPE_ALL && checked) {
        var r = data.getRoot(setting);
        r.radioCheckedList.push(n);
      }
    },
    //add dom for check
    _beforeA = function (setting, node, html) {
      if (setting.check.enable) {
        data.makeChkFlag(setting, node);
        html.push("<span ID='", node.tId, consts.id.CHECK, "' class='", view.makeChkClass(setting, node), "' treeNode", consts.id.CHECK, (node.nocheck === true ? " style='display:none;'" : ""), "></span>");
      }
    },
    //update zTreeObj, add method of check
    _zTreeTools = function (setting, zTreeTools) {
      zTreeTools.checkNode = function (node, checked, checkTypeFlag, callbackFlag) {
        var nodeChecked = data.nodeChecked(setting, node);
        if (node.chkDisabled === true) return;
        if (checked !== true && checked !== false) {
          checked = !nodeChecked;
        }
        callbackFlag = !!callbackFlag;

        if (nodeChecked === checked && !checkTypeFlag) {
          return;
        } else if (callbackFlag && tools.apply(this.setting.callback.beforeCheck, [this.setting.treeId, node], true) == false) {
          return;
        }
        if (tools.uCanDo(this.setting) && this.setting.check.enable && node.nocheck !== true) {
          data.nodeChecked(setting, node, checked);
          var checkObj = $$(node, consts.id.CHECK, this.setting);
          if (checkTypeFlag || this.setting.check.chkStyle === consts.radio.STYLE) view.checkNodeRelation(this.setting, node);
          view.setChkClass(this.setting, checkObj, node);
          view.repairParentChkClassWithSelf(this.setting, node);
          if (callbackFlag) {
            this.setting.treeObj.trigger(consts.event.CHECK, [null, this.setting.treeId, node]);
          }
        }
      }

      zTreeTools.checkAllNodes = function (checked) {
        view.repairAllChk(this.setting, !!checked);
      }

      zTreeTools.getCheckedNodes = function (checked) {
        checked = (checked !== false);
        var children = data.nodeChildren(setting, data.getRoot(this.setting));
        return data.getTreeCheckedNodes(this.setting, children, checked);
      }

      zTreeTools.getChangeCheckedNodes = function () {
        var children = data.nodeChildren(setting, data.getRoot(this.setting));
        return data.getTreeChangeCheckedNodes(this.setting, children);
      }

      zTreeTools.setChkDisabled = function (node, disabled, inheritParent, inheritChildren) {
        disabled = !!disabled;
        inheritParent = !!inheritParent;
        inheritChildren = !!inheritChildren;
        view.repairSonChkDisabled(this.setting, node, disabled, inheritChildren);
        view.repairParentChkDisabled(this.setting, node.getParentNode(), disabled, inheritParent);
      }

      var _updateNode = zTreeTools.updateNode;
      zTreeTools.updateNode = function (node, checkTypeFlag) {
        if (_updateNode) _updateNode.apply(zTreeTools, arguments);
        if (!node || !this.setting.check.enable) return;
        var nObj = $$(node, this.setting);
        if (nObj.get(0) && tools.uCanDo(this.setting)) {
          var checkObj = $$(node, consts.id.CHECK, this.setting);
          if (checkTypeFlag == true || this.setting.check.chkStyle === consts.radio.STYLE) view.checkNodeRelation(this.setting, node);
          view.setChkClass(this.setting, checkObj, node);
          view.repairParentChkClassWithSelf(this.setting, node);
        }
      }
    },
    //method of operate data
    _data = {
      getRadioCheckedList: function (setting) {
        var checkedList = data.getRoot(setting).radioCheckedList;
        for (var i = 0, j = checkedList.length; i < j; i++) {
          if (!data.getNodeCache(setting, checkedList[i].tId)) {
            checkedList.splice(i, 1);
            i--;
            j--;
          }
        }
        return checkedList;
      },
      getCheckStatus: function (setting, node) {
        if (!setting.check.enable || node.nocheck || node.chkDisabled) return null;
        var checked = data.nodeChecked(setting, node),
          r = {
            checked: checked,
            half: node.halfCheck ? node.halfCheck : (setting.check.chkStyle == consts.radio.STYLE ? (node.check_Child_State === 2) : (checked ? (node.check_Child_State > -1 && node.check_Child_State < 2) : (node.check_Child_State > 0)))
          };
        return r;
      },
      getTreeCheckedNodes: function (setting, nodes, checked, results) {
        if (!nodes) return [];
        var onlyOne = (checked && setting.check.chkStyle == consts.radio.STYLE && setting.check.radioType == consts.radio.TYPE_ALL);
        results = !results ? [] : results;
        for (var i = 0, l = nodes.length; i < l; i++) {
          var node = nodes[i];
          var children = data.nodeChildren(setting, node);
          var nodeChecked = data.nodeChecked(setting, node);
          if (node.nocheck !== true && node.chkDisabled !== true && nodeChecked == checked) {
            results.push(node);
            if (onlyOne) {
              break;
            }
          }
          data.getTreeCheckedNodes(setting, children, checked, results);
          if (onlyOne && results.length > 0) {
            break;
          }
        }
        return results;
      },
      getTreeChangeCheckedNodes: function (setting, nodes, results) {
        if (!nodes) return [];
        results = !results ? [] : results;
        for (var i = 0, l = nodes.length; i < l; i++) {
          var node = nodes[i];
          var children = data.nodeChildren(setting, node);
          var nodeChecked = data.nodeChecked(setting, node);
          if (node.nocheck !== true && node.chkDisabled !== true && nodeChecked != node.checkedOld) {
            results.push(node);
          }
          data.getTreeChangeCheckedNodes(setting, children, results);
        }
        return results;
      },
      makeChkFlag: function (setting, node) {
        if (!node) return;
        var chkFlag = -1;
        var children = data.nodeChildren(setting, node);
        if (children) {
          for (var i = 0, l = children.length; i < l; i++) {
            var cNode = children[i];
            var nodeChecked = data.nodeChecked(setting, cNode);
            var tmp = -1;
            if (setting.check.chkStyle == consts.radio.STYLE) {
              if (cNode.nocheck === true || cNode.chkDisabled === true) {
                tmp = cNode.check_Child_State;
              } else if (cNode.halfCheck === true) {
                tmp = 2;
              } else if (nodeChecked) {
                tmp = 2;
              } else {
                tmp = cNode.check_Child_State > 0 ? 2 : 0;
              }
              if (tmp == 2) {
                chkFlag = 2;
                break;
              } else if (tmp == 0) {
                chkFlag = 0;
              }
            } else if (setting.check.chkStyle == consts.checkbox.STYLE) {
              if (cNode.nocheck === true || cNode.chkDisabled === true) {
                tmp = cNode.check_Child_State;
              } else if (cNode.halfCheck === true) {
                tmp = 1;
              } else if (nodeChecked) {
                tmp = (cNode.check_Child_State === -1 || cNode.check_Child_State === 2) ? 2 : 1;
              } else {
                tmp = (cNode.check_Child_State > 0) ? 1 : 0;
              }
              if (tmp === 1) {
                chkFlag = 1;
                break;
              } else if (tmp === 2 && chkFlag > -1 && i > 0 && tmp !== chkFlag) {
                chkFlag = 1;
                break;
              } else if (chkFlag === 2 && tmp > -1 && tmp < 2) {
                chkFlag = 1;
                break;
              } else if (tmp > -1) {
                chkFlag = tmp;
              }
            }
          }
        }
        node.check_Child_State = chkFlag;
      }
    },
    //method of event proxy
    _event = {},
    //method of event handler
    _handler = {
      onCheckNode: function (event, node) {
        if (node.chkDisabled === true) return false;
        var setting = data.getSetting(event.data.treeId);
        if (tools.apply(setting.callback.beforeCheck, [setting.treeId, node], true) == false) return true;
        var nodeChecked = data.nodeChecked(setting, node);
        data.nodeChecked(setting, node, !nodeChecked);
        view.checkNodeRelation(setting, node);
        var checkObj = $$(node, consts.id.CHECK, setting);
        view.setChkClass(setting, checkObj, node);
        view.repairParentChkClassWithSelf(setting, node);
        setting.treeObj.trigger(consts.event.CHECK, [event, setting.treeId, node]);
        return true;
      },
      onMouseoverCheck: function (event, node) {
        if (node.chkDisabled === true) return false;
        var setting = data.getSetting(event.data.treeId),
          checkObj = $$(node, consts.id.CHECK, setting);
        node.check_Focus = true;
        view.setChkClass(setting, checkObj, node);
        return true;
      },
      onMouseoutCheck: function (event, node) {
        if (node.chkDisabled === true) return false;
        var setting = data.getSetting(event.data.treeId),
          checkObj = $$(node, consts.id.CHECK, setting);
        node.check_Focus = false;
        view.setChkClass(setting, checkObj, node);
        return true;
      }
    },
    //method of tools for zTree
    _tools = {},
    //method of operate ztree dom
    _view = {
      checkNodeRelation: function (setting, node) {
        var pNode, i, l,
          r = consts.radio;
        var nodeChecked = data.nodeChecked(setting, node);
        if (setting.check.chkStyle == r.STYLE) {
          var checkedList = data.getRadioCheckedList(setting);
          if (nodeChecked) {
            if (setting.check.radioType == r.TYPE_ALL) {
              for (i = checkedList.length - 1; i >= 0; i--) {
                pNode = checkedList[i];
                var pNodeChecked = data.nodeChecked(setting, pNode);
                if (pNodeChecked && pNode != node) {
                  data.nodeChecked(setting, pNode, false);
                  checkedList.splice(i, 1);

                  view.setChkClass(setting, $$(pNode, consts.id.CHECK, setting), pNode);
                  if (pNode.parentTId != node.parentTId) {
                    view.repairParentChkClassWithSelf(setting, pNode);
                  }
                }
              }
              checkedList.push(node);
            } else {
              var parentNode = (node.parentTId) ? node.getParentNode() : data.getRoot(setting);
              var children = data.nodeChildren(setting, parentNode);
              for (i = 0, l = children.length; i < l; i++) {
                pNode = children[i];
                var pNodeChecked = data.nodeChecked(setting, pNode);
                if (pNodeChecked && pNode != node) {
                  data.nodeChecked(setting, pNode, false);
                  view.setChkClass(setting, $$(pNode, consts.id.CHECK, setting), pNode);
                }
              }
            }
          } else if (setting.check.radioType == r.TYPE_ALL) {
            for (i = 0, l = checkedList.length; i < l; i++) {
              if (node == checkedList[i]) {
                checkedList.splice(i, 1);
                break;
              }
            }
          }

        } else {
          var children = data.nodeChildren(setting, node);
          if (nodeChecked && (!children || children.length == 0 || setting.check.chkboxType.Y.indexOf("s") > -1)) {
            view.setSonNodeCheckBox(setting, node, true);
          }
          if (!nodeChecked && (!children || children.length == 0 || setting.check.chkboxType.N.indexOf("s") > -1)) {
            view.setSonNodeCheckBox(setting, node, false);
          }
          if (nodeChecked && setting.check.chkboxType.Y.indexOf("p") > -1) {
            view.setParentNodeCheckBox(setting, node, true);
          }
          if (!nodeChecked && setting.check.chkboxType.N.indexOf("p") > -1) {
            view.setParentNodeCheckBox(setting, node, false);
          }
        }
      },
      makeChkClass: function (setting, node) {
        var c = consts.checkbox, r = consts.radio,
          fullStyle = "";
        var nodeChecked = data.nodeChecked(setting, node);
        if (node.chkDisabled === true) {
          fullStyle = c.DISABLED;
        } else if (node.halfCheck) {
          fullStyle = c.PART;
        } else if (setting.check.chkStyle == r.STYLE) {
          fullStyle = (node.check_Child_State < 1) ? c.FULL : c.PART;
        } else {
          fullStyle = nodeChecked ? ((node.check_Child_State === 2 || node.check_Child_State === -1) ? c.FULL : c.PART) : ((node.check_Child_State < 1) ? c.FULL : c.PART);
        }
        var chkName = setting.check.chkStyle + "_" + (nodeChecked ? c.TRUE : c.FALSE) + "_" + fullStyle;
        chkName = (node.check_Focus && node.chkDisabled !== true) ? chkName + "_" + c.FOCUS : chkName;
        return consts.className.BUTTON + " " + c.DEFAULT + " " + chkName;
      },
      repairAllChk: function (setting, checked) {
        if (setting.check.enable && setting.check.chkStyle === consts.checkbox.STYLE) {
          var root = data.getRoot(setting);
          var children = data.nodeChildren(setting, root);
          for (var i = 0, l = children.length; i < l; i++) {
            var node = children[i];
            if (node.nocheck !== true && node.chkDisabled !== true) {
              data.nodeChecked(setting, node, checked);
            }
            view.setSonNodeCheckBox(setting, node, checked);
          }
        }
      },
      repairChkClass: function (setting, node) {
        if (!node) return;
        data.makeChkFlag(setting, node);
        if (node.nocheck !== true) {
          var checkObj = $$(node, consts.id.CHECK, setting);
          view.setChkClass(setting, checkObj, node);
        }
      },
      repairParentChkClass: function (setting, node) {
        if (!node || !node.parentTId) return;
        var pNode = node.getParentNode();
        view.repairChkClass(setting, pNode);
        view.repairParentChkClass(setting, pNode);
      },
      repairParentChkClassWithSelf: function (setting, node) {
        if (!node) return;
        var children = data.nodeChildren(setting, node);
        if (children && children.length > 0) {
          view.repairParentChkClass(setting, children[0]);
        } else {
          view.repairParentChkClass(setting, node);
        }
      },
      repairSonChkDisabled: function (setting, node, chkDisabled, inherit) {
        if (!node) return;
        if (node.chkDisabled != chkDisabled) {
          node.chkDisabled = chkDisabled;
        }
        view.repairChkClass(setting, node);
        var children = data.nodeChildren(setting, node);
        if (children && inherit) {
          for (var i = 0, l = children.length; i < l; i++) {
            var sNode = children[i];
            view.repairSonChkDisabled(setting, sNode, chkDisabled, inherit);
          }
        }
      },
      repairParentChkDisabled: function (setting, node, chkDisabled, inherit) {
        if (!node) return;
        if (node.chkDisabled != chkDisabled && inherit) {
          node.chkDisabled = chkDisabled;
        }
        view.repairChkClass(setting, node);
        view.repairParentChkDisabled(setting, node.getParentNode(), chkDisabled, inherit);
      },
      setChkClass: function (setting, obj, node) {
        if (!obj) return;
        if (node.nocheck === true) {
          obj.hide();
        } else {
          obj.show();
        }
        obj.attr('class', view.makeChkClass(setting, node));
      },
      setParentNodeCheckBox: function (setting, node, value, srcNode) {
        var checkObj = $$(node, consts.id.CHECK, setting);
        if (!srcNode) srcNode = node;
        data.makeChkFlag(setting, node);
        if (node.nocheck !== true && node.chkDisabled !== true) {
          data.nodeChecked(setting, node, value);
          view.setChkClass(setting, checkObj, node);
          if (setting.check.autoCheckTrigger && node != srcNode) {
            setting.treeObj.trigger(consts.event.CHECK, [null, setting.treeId, node]);
          }
        }
        if (node.parentTId) {
          var pSign = true;
          if (!value) {
            var pNodes = data.nodeChildren(setting, node.getParentNode());
            for (var i = 0, l = pNodes.length; i < l; i++) {
              var pNode = pNodes[i];
              var nodeChecked = data.nodeChecked(setting, pNode);
              if ((pNode.nocheck !== true && pNode.chkDisabled !== true && nodeChecked)
                || ((pNode.nocheck === true || pNode.chkDisabled === true) && pNode.check_Child_State > 0)) {
                pSign = false;
                break;
              }
            }
          }
          if (pSign) {
            view.setParentNodeCheckBox(setting, node.getParentNode(), value, srcNode);
          }
        }
      },
      setSonNodeCheckBox: function (setting, node, value, srcNode) {
        if (!node) return;
        var checkObj = $$(node, consts.id.CHECK, setting);
        if (!srcNode) srcNode = node;

        var hasDisable = false;
        var children = data.nodeChildren(setting, node);
        if (children) {
          for (var i = 0, l = children.length; i < l; i++) {
            var sNode = children[i];
            view.setSonNodeCheckBox(setting, sNode, value, srcNode);
            if (sNode.chkDisabled === true) hasDisable = true;
          }
        }

        if (node != data.getRoot(setting) && node.chkDisabled !== true) {
          if (hasDisable && node.nocheck !== true) {
            data.makeChkFlag(setting, node);
          }
          if (node.nocheck !== true && node.chkDisabled !== true) {
            data.nodeChecked(setting, node, value);
            if (!hasDisable) node.check_Child_State = (children && children.length > 0) ? (value ? 2 : 0) : -1;
          } else {
            node.check_Child_State = -1;
          }
          view.setChkClass(setting, checkObj, node);
          if (setting.check.autoCheckTrigger && node != srcNode && node.nocheck !== true && node.chkDisabled !== true) {
            setting.treeObj.trigger(consts.event.CHECK, [null, setting.treeId, node]);
          }
        }

      }
    },

    _z = {
      tools: _tools,
      view: _view,
      event: _event,
      data: _data
    };
  $.extend(true, $.fn.zTree.consts, _consts);
  $.extend(true, $.fn.zTree._z, _z);

  var zt = $.fn.zTree,
    tools = zt._z.tools,
    consts = zt.consts,
    view = zt._z.view,
    data = zt._z.data,
    event = zt._z.event,
    $$ = tools.$;

  data.nodeChecked = function (setting, node, newChecked) {
    if (!node) {
      return false;
    }
    var key = setting.data.key.checked;
    if (typeof newChecked !== 'undefined') {
      if (typeof newChecked === "string") {
        newChecked = tools.eqs(newChecked, "true");
      }
      newChecked = !!newChecked;
      node[key] = newChecked;
    } else if (typeof node[key] == "string"){
      node[key] = tools.eqs(node[key], "true");
    } else {
      node[key] = !!node[key];
    }
    return node[key];
  };

  data.exSetting(_setting);
  data.addInitBind(_bindEvent);
  data.addInitUnBind(_unbindEvent);
  data.addInitCache(_initCache);
  data.addInitNode(_initNode);
  data.addInitProxy(_eventProxy, true);
  data.addInitRoot(_initRoot);
  data.addBeforeA(_beforeA);
  data.addZTreeTools(_zTreeTools);

  var _createNodes = view.createNodes;
  view.createNodes = function (setting, level, nodes, parentNode, index) {
    if (_createNodes) _createNodes.apply(view, arguments);
    if (!nodes) return;
    view.repairParentChkClassWithSelf(setting, parentNode);
  }
  var _removeNode = view.removeNode;
  view.removeNode = function (setting, node) {
    var parentNode = node.getParentNode();
    if (_removeNode) _removeNode.apply(view, arguments);
    if (!node || !parentNode) return;
    view.repairChkClass(setting, parentNode);
    view.repairParentChkClass(setting, parentNode);
  }

  var _appendNodes = view.appendNodes;
  view.appendNodes = function (setting, level, nodes, parentNode, index, initFlag, openFlag) {
    var html = "";
    if (_appendNodes) {
      html = _appendNodes.apply(view, arguments);
    }
    if (parentNode) {
      data.makeChkFlag(setting, parentNode);
    }
    return html;
  }
})(jQuery);
/*
 * JQuery zTree exedit
 * v3.5.48
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2020-11-21
 */

(function ($) {
  //default consts of exedit
  var _consts = {
      event: {
        DRAG: "ztree_drag",
        DROP: "ztree_drop",
        RENAME: "ztree_rename",
        DRAGMOVE: "ztree_dragmove"
      },
      id: {
        EDIT: "_edit",
        INPUT: "_input",
        REMOVE: "_remove"
      },
      move: {
        TYPE_INNER: "inner",
        TYPE_PREV: "prev",
        TYPE_NEXT: "next"
      },
      node: {
        CURSELECTED_EDIT: "curSelectedNode_Edit",
        TMPTARGET_TREE: "tmpTargetzTree",
        TMPTARGET_NODE: "tmpTargetNode"
      }
    },
    //default setting of exedit
    _setting = {
      edit: {
        enable: false,
        editNameSelectAll: false,
        showRemoveBtn: true,
        showRenameBtn: true,
        removeTitle: "remove",
        renameTitle: "rename",
        drag: {
          autoExpandTrigger: false,
          isCopy: true,
          isMove: true,
          prev: true,
          next: true,
          inner: true,
          minMoveSize: 5,
          borderMax: 10,
          borderMin: -5,
          maxShowNodeNum: 5,
          autoOpenTime: 500
        }
      },
      view: {
        addHoverDom: null,
        removeHoverDom: null
      },
      callback: {
        beforeDrag: null,
        beforeDragOpen: null,
        beforeDrop: null,
        beforeEditName: null,
        beforeRename: null,
        onDrag: null,
        onDragMove: null,
        onDrop: null,
        onRename: null
      }
    },
    //default root of exedit
    _initRoot = function (setting) {
      var r = data.getRoot(setting), rs = data.getRoots();
      r.curEditNode = null;
      r.curEditInput = null;
      r.curHoverNode = null;
      r.dragFlag = 0;
      r.dragNodeShowBefore = [];
      r.dragMaskList = new Array();
      rs.showHoverDom = true;
    },
    //default cache of exedit
    _initCache = function (treeId) {
    },
    //default bind event of exedit
    _bindEvent = function (setting) {
      var o = setting.treeObj;
      var c = consts.event;
      o.bind(c.RENAME, function (event, treeId, treeNode, isCancel) {
        tools.apply(setting.callback.onRename, [event, treeId, treeNode, isCancel]);
      });

      o.bind(c.DRAG, function (event, srcEvent, treeId, treeNodes) {
        tools.apply(setting.callback.onDrag, [srcEvent, treeId, treeNodes]);
      });

      o.bind(c.DRAGMOVE, function (event, srcEvent, treeId, treeNodes) {
        tools.apply(setting.callback.onDragMove, [srcEvent, treeId, treeNodes]);
      });

      o.bind(c.DROP, function (event, srcEvent, treeId, treeNodes, targetNode, moveType, isCopy) {
        tools.apply(setting.callback.onDrop, [srcEvent, treeId, treeNodes, targetNode, moveType, isCopy]);
      });
    },
    _unbindEvent = function (setting) {
      var o = setting.treeObj;
      var c = consts.event;
      o.unbind(c.RENAME);
      o.unbind(c.DRAG);
      o.unbind(c.DRAGMOVE);
      o.unbind(c.DROP);
    },
    //default event proxy of exedit
    _eventProxy = function (e) {
      var target = e.target,
        setting = data.getSetting(e.data.treeId),
        relatedTarget = e.relatedTarget,
        tId = "", node = null,
        nodeEventType = "", treeEventType = "",
        nodeEventCallback = null, treeEventCallback = null,
        tmp = null;

      if (tools.eqs(e.type, "mouseover")) {
        tmp = tools.getMDom(setting, target, [{tagName: "a", attrName: "treeNode" + consts.id.A}]);
        if (tmp) {
          tId = tools.getNodeMainDom(tmp).id;
          nodeEventType = "hoverOverNode";
        }
      } else if (tools.eqs(e.type, "mouseout")) {
        tmp = tools.getMDom(setting, relatedTarget, [{tagName: "a", attrName: "treeNode" + consts.id.A}]);
        if (!tmp) {
          tId = "remove";
          nodeEventType = "hoverOutNode";
        }
      } else if (tools.eqs(e.type, "mousedown")) {
        tmp = tools.getMDom(setting, target, [{tagName: "a", attrName: "treeNode" + consts.id.A}]);
        if (tmp) {
          tId = tools.getNodeMainDom(tmp).id;
          nodeEventType = "mousedownNode";
        }
      }
      if (tId.length > 0) {
        node = data.getNodeCache(setting, tId);
        switch (nodeEventType) {
          case "mousedownNode" :
            nodeEventCallback = _handler.onMousedownNode;
            break;
          case "hoverOverNode" :
            nodeEventCallback = _handler.onHoverOverNode;
            break;
          case "hoverOutNode" :
            nodeEventCallback = _handler.onHoverOutNode;
            break;
        }
      }
      var proxyResult = {
        stop: false,
        node: node,
        nodeEventType: nodeEventType,
        nodeEventCallback: nodeEventCallback,
        treeEventType: treeEventType,
        treeEventCallback: treeEventCallback
      };
      return proxyResult
    },
    //default init node of exedit
    _initNode = function (setting, level, n, parentNode, isFirstNode, isLastNode, openFlag) {
      if (!n) return;
      n.isHover = false;
      n.editNameFlag = false;
    },
    //update zTreeObj, add method of edit
    _zTreeTools = function (setting, zTreeTools) {
      zTreeTools.cancelEditName = function (newName) {
        var root = data.getRoot(this.setting);
        if (!root.curEditNode) return;
        view.cancelCurEditNode(this.setting, newName ? newName : null, true);
      }
      zTreeTools.copyNode = function (targetNode, node, moveType, isSilent) {
        if (!node) return null;
        var isParent = data.nodeIsParent(setting, targetNode);
        if (targetNode && !isParent && this.setting.data.keep.leaf && moveType === consts.move.TYPE_INNER) return null;
        var _this = this,
          newNode = tools.clone(node);
        if (!targetNode) {
          targetNode = null;
          moveType = consts.move.TYPE_INNER;
        }
        if (moveType == consts.move.TYPE_INNER) {
          function copyCallback() {
            view.addNodes(_this.setting, targetNode, -1, [newNode], isSilent);
          }

          if (tools.canAsync(this.setting, targetNode)) {
            view.asyncNode(this.setting, targetNode, isSilent, copyCallback);
          } else {
            copyCallback();
          }
        } else {
          view.addNodes(this.setting, targetNode.parentNode, -1, [newNode], isSilent);
          view.moveNode(this.setting, targetNode, newNode, moveType, false, isSilent);
        }
        return newNode;
      }
      zTreeTools.editName = function (node) {
        if (!node || !node.tId || node !== data.getNodeCache(this.setting, node.tId)) return;
        if (node.parentTId) view.expandCollapseParentNode(this.setting, node.getParentNode(), true);
        view.editNode(this.setting, node)
      }
      zTreeTools.moveNode = function (targetNode, node, moveType, isSilent) {
        if (!node) return node;
        var isParent = data.nodeIsParent(setting, targetNode);
        if (targetNode && !isParent && this.setting.data.keep.leaf && moveType === consts.move.TYPE_INNER) {
          return null;
        } else if (targetNode && ((node.parentTId == targetNode.tId && moveType == consts.move.TYPE_INNER) || $$(node, this.setting).find("#" + targetNode.tId).length > 0)) {
          return null;
        } else if (!targetNode) {
          targetNode = null;
        }
        var _this = this;

        function moveCallback() {
          view.moveNode(_this.setting, targetNode, node, moveType, false, isSilent);
        }

        if (tools.canAsync(this.setting, targetNode) && moveType === consts.move.TYPE_INNER) {
          view.asyncNode(this.setting, targetNode, isSilent, moveCallback);
        } else {
          moveCallback();
        }
        return node;
      }
      zTreeTools.setEditable = function (editable) {
        this.setting.edit.enable = editable;
        return this.refresh();
      }
    },
    //method of operate data
    _data = {
      setSonNodeLevel: function (setting, parentNode, node) {
        if (!node) return;
        var children = data.nodeChildren(setting, node);
        var oldLevel = node.level;
        node.level = (parentNode) ? parentNode.level + 1 : 0;
        view.repairNodeLevelClass(setting, node, oldLevel);
        
        if (!children) return;
        for (var i = 0, l = children.length; i < l; i++) {
          if (children[i]) data.setSonNodeLevel(setting, node, children[i]);
        }
      }
    },
    //method of event proxy
    _event = {},
    //method of event handler
    _handler = {
      onHoverOverNode: function (event, node) {
        var setting = data.getSetting(event.data.treeId),
          root = data.getRoot(setting);
        if (root.curHoverNode != node) {
          _handler.onHoverOutNode(event);
        }
        root.curHoverNode = node;
        view.addHoverDom(setting, node);
      },
      onHoverOutNode: function (event, node) {
        var setting = data.getSetting(event.data.treeId),
          root = data.getRoot(setting);
        if (root.curHoverNode && !data.isSelectedNode(setting, root.curHoverNode)) {
          view.removeTreeDom(setting, root.curHoverNode);
          root.curHoverNode = null;
        }
      },
      onMousedownNode: function (eventMouseDown, _node) {
        var i, l,
          setting = data.getSetting(eventMouseDown.data.treeId),
          root = data.getRoot(setting), roots = data.getRoots();
        //right click can't drag & drop
        if (eventMouseDown.button == 2 || !setting.edit.enable || (!setting.edit.drag.isCopy && !setting.edit.drag.isMove)) return true;

        //input of edit node name can't drag & drop
        var target = eventMouseDown.target,
          _nodes = data.getRoot(setting).curSelectedList,
          nodes = [];
        if (!data.isSelectedNode(setting, _node)) {
          nodes = [_node];
        } else {
          for (i = 0, l = _nodes.length; i < l; i++) {
            if (_nodes[i].editNameFlag && tools.eqs(target.tagName, "input") && target.getAttribute("treeNode" + consts.id.INPUT) !== null) {
              return true;
            }
            nodes.push(_nodes[i]);
            if (nodes[0].parentTId !== _nodes[i].parentTId) {
              nodes = [_node];
              break;
            }
          }
        }

        view.editNodeBlur = true;
        view.cancelCurEditNode(setting);

        var doc = $(setting.treeObj.get(0).ownerDocument),
          body = $(setting.treeObj.get(0).ownerDocument.body), curNode, tmpArrow, tmpTarget,
          isOtherTree = false,
          targetSetting = setting,
          sourceSetting = setting,
          preNode, nextNode,
          preTmpTargetNodeId = null,
          preTmpMoveType = null,
          tmpTargetNodeId = null,
          moveType = consts.move.TYPE_INNER,
          mouseDownX = eventMouseDown.clientX,
          mouseDownY = eventMouseDown.clientY,
          startTime = (new Date()).getTime();

        if (tools.uCanDo(setting)) {
          doc.bind("mousemove", _docMouseMove);
        }

        function _docMouseMove(event) {
          //avoid start drag after click node
          if (root.dragFlag == 0 && Math.abs(mouseDownX - event.clientX) < setting.edit.drag.minMoveSize
            && Math.abs(mouseDownY - event.clientY) < setting.edit.drag.minMoveSize) {
            return true;
          }
          var i, l, tmpNode, tmpDom, tmpNodes;
          body.css("cursor", "pointer");

          if (root.dragFlag == 0) {
            if (tools.apply(setting.callback.beforeDrag, [setting.treeId, nodes], true) == false) {
              _docMouseUp(event);
              return true;
            }

            for (i = 0, l = nodes.length; i < l; i++) {
              if (i == 0) {
                root.dragNodeShowBefore = [];
              }
              tmpNode = nodes[i];
              if (data.nodeIsParent(setting, tmpNode) && tmpNode.open) {
                view.expandCollapseNode(setting, tmpNode, !tmpNode.open);
                root.dragNodeShowBefore[tmpNode.tId] = true;
              } else {
                root.dragNodeShowBefore[tmpNode.tId] = false;
              }
            }

            root.dragFlag = 1;
            roots.showHoverDom = false;
            tools.showIfameMask(setting, true);

            //sort
            var isOrder = true, lastIndex = -1;
            if (nodes.length > 1) {
              var pNodes = nodes[0].parentTId ? data.nodeChildren(setting, nodes[0].getParentNode()) : data.getNodes(setting);
              tmpNodes = [];
              for (i = 0, l = pNodes.length; i < l; i++) {
                if (root.dragNodeShowBefore[pNodes[i].tId] !== undefined) {
                  if (isOrder && lastIndex > -1 && (lastIndex + 1) !== i) {
                    isOrder = false;
                  }
                  tmpNodes.push(pNodes[i]);
                  lastIndex = i;
                }
                if (nodes.length === tmpNodes.length) {
                  nodes = tmpNodes;
                  break;
                }
              }
            }
            if (isOrder) {
              preNode = nodes[0].getPreNode();
              nextNode = nodes[nodes.length - 1].getNextNode();
            }

            //set node in selected
            curNode = $$("<ul class='zTreeDragUL'></ul>", setting);
            for (i = 0, l = nodes.length; i < l; i++) {
              tmpNode = nodes[i];
              tmpNode.editNameFlag = false;
              view.selectNode(setting, tmpNode, i > 0);
              view.removeTreeDom(setting, tmpNode);

              if (i > setting.edit.drag.maxShowNodeNum - 1) {
                continue;
              }

              tmpDom = $$("<li id='" + tmpNode.tId + "_tmp'></li>", setting);
              tmpDom.append($$(tmpNode, consts.id.A, setting).clone());
              tmpDom.css("padding", "0");
              tmpDom.children("#" + tmpNode.tId + consts.id.A).removeClass(consts.node.CURSELECTED);
              curNode.append(tmpDom);
              if (i == setting.edit.drag.maxShowNodeNum - 1) {
                tmpDom = $$("<li id='" + tmpNode.tId + "_moretmp'><a>  ...  </a></li>", setting);
                curNode.append(tmpDom);
              }
            }
            curNode.attr("id", nodes[0].tId + consts.id.UL + "_tmp");
            curNode.addClass(setting.treeObj.attr("class"));
            curNode.appendTo(body);

            tmpArrow = $$("<span class='tmpzTreeMove_arrow'></span>", setting);
            tmpArrow.attr("id", "zTreeMove_arrow_tmp");
            tmpArrow.appendTo(body);

            setting.treeObj.trigger(consts.event.DRAG, [event, setting.treeId, nodes]);
          }

          if (root.dragFlag == 1) {
            if (tmpTarget && tmpArrow.attr("id") == event.target.id && tmpTargetNodeId && (event.clientX + doc.scrollLeft() + 2) > ($("#" + tmpTargetNodeId + consts.id.A, tmpTarget).offset().left)) {
              var xT = $("#" + tmpTargetNodeId + consts.id.A, tmpTarget);
              event.target = (xT.length > 0) ? xT.get(0) : event.target;
            } else if (tmpTarget) {
              tmpTarget.removeClass(consts.node.TMPTARGET_TREE);
              if (tmpTargetNodeId) $("#" + tmpTargetNodeId + consts.id.A, tmpTarget).removeClass(consts.node.TMPTARGET_NODE + "_" + consts.move.TYPE_PREV)
                .removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_NEXT).removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_INNER);
            }
            tmpTarget = null;
            tmpTargetNodeId = null;

            //judge drag & drop in multi ztree
            isOtherTree = false;
            targetSetting = setting;
            var settings = data.getSettings();
            for (var s in settings) {
              if (settings[s].treeId && settings[s].edit.enable && settings[s].treeId != setting.treeId
                && (event.target.id == settings[s].treeId || $(event.target).parents("#" + settings[s].treeId).length > 0)) {
                isOtherTree = true;
                targetSetting = settings[s];
              }
            }

            var docScrollTop = doc.scrollTop(),
              docScrollLeft = doc.scrollLeft(),
              treeOffset = targetSetting.treeObj.offset(),
              scrollHeight = targetSetting.treeObj.get(0).scrollHeight,
              scrollWidth = targetSetting.treeObj.get(0).scrollWidth,
              dTop = (event.clientY + docScrollTop - treeOffset.top),
              dBottom = (targetSetting.treeObj.height() + treeOffset.top - event.clientY - docScrollTop),
              dLeft = (event.clientX + docScrollLeft - treeOffset.left),
              dRight = (targetSetting.treeObj.width() + treeOffset.left - event.clientX - docScrollLeft),
              isTop = (dTop < setting.edit.drag.borderMax && dTop > setting.edit.drag.borderMin),
              isBottom = (dBottom < setting.edit.drag.borderMax && dBottom > setting.edit.drag.borderMin),
              isLeft = (dLeft < setting.edit.drag.borderMax && dLeft > setting.edit.drag.borderMin),
              isRight = (dRight < setting.edit.drag.borderMax && dRight > setting.edit.drag.borderMin),
              isTreeInner = dTop > setting.edit.drag.borderMin && dBottom > setting.edit.drag.borderMin && dLeft > setting.edit.drag.borderMin && dRight > setting.edit.drag.borderMin,
              isTreeTop = (isTop && targetSetting.treeObj.scrollTop() <= 0),
              isTreeBottom = (isBottom && (targetSetting.treeObj.scrollTop() + targetSetting.treeObj.height() + 10) >= scrollHeight),
              isTreeLeft = (isLeft && targetSetting.treeObj.scrollLeft() <= 0),
              isTreeRight = (isRight && (targetSetting.treeObj.scrollLeft() + targetSetting.treeObj.width() + 10) >= scrollWidth);

            if (event.target && tools.isChildOrSelf(event.target, targetSetting.treeId)) {
              //get node <li> dom
              var targetObj = event.target;
              while (targetObj && targetObj.tagName && !tools.eqs(targetObj.tagName, "li") && targetObj.id != targetSetting.treeId) {
                targetObj = targetObj.parentNode;
              }

              var canMove = true;
              //don't move to self or children of self
              for (i = 0, l = nodes.length; i < l; i++) {
                tmpNode = nodes[i];
                if (targetObj.id === tmpNode.tId) {
                  canMove = false;
                  break;
                } else if ($$(tmpNode, setting).find("#" + targetObj.id).length > 0) {
                  canMove = false;
                  break;
                }
              }
              if (canMove && event.target && tools.isChildOrSelf(event.target, targetObj.id + consts.id.A)) {
                tmpTarget = $(targetObj);
                tmpTargetNodeId = targetObj.id;
              }
            }

            //the mouse must be in zTree
            tmpNode = nodes[0];
            if (isTreeInner && tools.isChildOrSelf(event.target, targetSetting.treeId)) {
              //judge mouse move in root of ztree
              if (!tmpTarget && (event.target.id == targetSetting.treeId || isTreeTop || isTreeBottom || isTreeLeft || isTreeRight) && (isOtherTree || (!isOtherTree && tmpNode.parentTId))) {
                tmpTarget = targetSetting.treeObj;
              }
              //auto scroll top
              if (isTop) {
                targetSetting.treeObj.scrollTop(targetSetting.treeObj.scrollTop() - 10);
              } else if (isBottom) {
                targetSetting.treeObj.scrollTop(targetSetting.treeObj.scrollTop() + 10);
              }
              if (isLeft) {
                targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft() - 10);
              } else if (isRight) {
                targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft() + 10);
              }
              //auto scroll left
              if (tmpTarget && tmpTarget != targetSetting.treeObj && tmpTarget.offset().left < targetSetting.treeObj.offset().left) {
                targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft() + tmpTarget.offset().left - targetSetting.treeObj.offset().left);
              }
            }

            curNode.css({
              "top": (event.clientY + docScrollTop + 3) + "px",
              "left": (event.clientX + docScrollLeft + 3) + "px"
            });

            var dX = 0;
            var dY = 0;
            if (tmpTarget && tmpTarget.attr("id") != targetSetting.treeId) {
              var tmpTargetNode = tmpTargetNodeId == null ? null : data.getNodeCache(targetSetting, tmpTargetNodeId),
                isCopy = ((event.ctrlKey || event.metaKey) && setting.edit.drag.isMove && setting.edit.drag.isCopy) || (!setting.edit.drag.isMove && setting.edit.drag.isCopy),
                isPrev = !!(preNode && tmpTargetNodeId === preNode.tId),
                isNext = !!(nextNode && tmpTargetNodeId === nextNode.tId),
                isInner = (tmpNode.parentTId && tmpNode.parentTId == tmpTargetNodeId),
                canPrev = (isCopy || !isNext) && tools.apply(targetSetting.edit.drag.prev, [targetSetting.treeId, nodes, tmpTargetNode], !!targetSetting.edit.drag.prev),
                canNext = (isCopy || !isPrev) && tools.apply(targetSetting.edit.drag.next, [targetSetting.treeId, nodes, tmpTargetNode], !!targetSetting.edit.drag.next),
                canInner = (isCopy || !isInner) && !(targetSetting.data.keep.leaf && !data.nodeIsParent(setting, tmpTargetNode)) && tools.apply(targetSetting.edit.drag.inner, [targetSetting.treeId, nodes, tmpTargetNode], !!targetSetting.edit.drag.inner);

              function clearMove() {
                tmpTarget = null;
                tmpTargetNodeId = "";
                moveType = consts.move.TYPE_INNER;
                tmpArrow.css({
                  "display": "none"
                });
                if (window.zTreeMoveTimer) {
                  clearTimeout(window.zTreeMoveTimer);
                  window.zTreeMoveTargetNodeTId = null
                }
              }

              if (!canPrev && !canNext && !canInner) {
                clearMove();
              } else {
                var tmpTargetA = $("#" + tmpTargetNodeId + consts.id.A, tmpTarget),
                  tmpNextA = tmpTargetNode.isLastNode ? null : $("#" + tmpTargetNode.getNextNode().tId + consts.id.A, tmpTarget.next()),
                  tmpTop = tmpTargetA.offset().top,
                  tmpLeft = tmpTargetA.offset().left,
                  prevPercent = canPrev ? (canInner ? 0.25 : (canNext ? 0.5 : 1)) : -1,
                  nextPercent = canNext ? (canInner ? 0.75 : (canPrev ? 0.5 : 0)) : -1,
                  dY_percent = (event.clientY + docScrollTop - tmpTop) / tmpTargetA.height();

                if ((prevPercent == 1 || dY_percent <= prevPercent && dY_percent >= -.2) && canPrev) {
                  dX = 1 - tmpArrow.width();
                  dY = tmpTop - tmpArrow.height() / 2;
                  moveType = consts.move.TYPE_PREV;
                } else if ((nextPercent == 0 || dY_percent >= nextPercent && dY_percent <= 1.2) && canNext) {
                  dX = 1 - tmpArrow.width();
                  dY = (tmpNextA == null || (data.nodeIsParent(setting, tmpTargetNode) && tmpTargetNode.open)) ? (tmpTop + tmpTargetA.height() - tmpArrow.height() / 2) : (tmpNextA.offset().top - tmpArrow.height() / 2);
                  moveType = consts.move.TYPE_NEXT;
                } else if (canInner) {
                  dX = 5 - tmpArrow.width();
                  dY = tmpTop;
                  moveType = consts.move.TYPE_INNER;
                } else {
                  clearMove();
                }

                if (tmpTarget) {
                  tmpArrow.css({
                    "display": "block",
                    "top": dY + "px",
                    "left": (tmpLeft + dX) + "px"
                  });
                  tmpTargetA.addClass(consts.node.TMPTARGET_NODE + "_" + moveType);

                  if (preTmpTargetNodeId != tmpTargetNodeId || preTmpMoveType != moveType) {
                    startTime = (new Date()).getTime();
                  }
                  if (tmpTargetNode && data.nodeIsParent(setting, tmpTargetNode) && moveType == consts.move.TYPE_INNER) {
                    var startTimer = true;
                    if (window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId !== tmpTargetNode.tId) {
                      clearTimeout(window.zTreeMoveTimer);
                      window.zTreeMoveTargetNodeTId = null;
                    } else if (window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId === tmpTargetNode.tId) {
                      startTimer = false;
                    }
                    if (startTimer) {
                      window.zTreeMoveTimer = setTimeout(function () {
                        if (moveType != consts.move.TYPE_INNER) return;
                        if (tmpTargetNode && data.nodeIsParent(setting, tmpTargetNode) && !tmpTargetNode.open && (new Date()).getTime() - startTime > targetSetting.edit.drag.autoOpenTime
                          && tools.apply(targetSetting.callback.beforeDragOpen, [targetSetting.treeId, tmpTargetNode], true)) {
                          view.switchNode(targetSetting, tmpTargetNode);
                          if (targetSetting.edit.drag.autoExpandTrigger) {
                            targetSetting.treeObj.trigger(consts.event.EXPAND, [targetSetting.treeId, tmpTargetNode]);
                          }
                        }
                      }, targetSetting.edit.drag.autoOpenTime + 50);
                      window.zTreeMoveTargetNodeTId = tmpTargetNode.tId;
                    }
                  }
                }
              }
            } else {
              moveType = consts.move.TYPE_INNER;
              if (tmpTarget && tools.apply(targetSetting.edit.drag.inner, [targetSetting.treeId, nodes, null], !!targetSetting.edit.drag.inner)) {
                tmpTarget.addClass(consts.node.TMPTARGET_TREE);
              } else {
                tmpTarget = null;
              }
              tmpArrow.css({
                "display": "none"
              });
              if (window.zTreeMoveTimer) {
                clearTimeout(window.zTreeMoveTimer);
                window.zTreeMoveTargetNodeTId = null;
              }
            }
            preTmpTargetNodeId = tmpTargetNodeId;
            preTmpMoveType = moveType;

            setting.treeObj.trigger(consts.event.DRAGMOVE, [event, setting.treeId, nodes]);
          }
          return false;
        }

        doc.bind("mouseup", _docMouseUp);

        function _docMouseUp(event) {
          if (window.zTreeMoveTimer) {
            clearTimeout(window.zTreeMoveTimer);
            window.zTreeMoveTargetNodeTId = null;
          }
          preTmpTargetNodeId = null;
          preTmpMoveType = null;
          doc.unbind("mousemove", _docMouseMove);
          doc.unbind("mouseup", _docMouseUp);
          doc.unbind("selectstart", _docSelect);
          body.css("cursor", "");
          if (tmpTarget) {
            tmpTarget.removeClass(consts.node.TMPTARGET_TREE);
            if (tmpTargetNodeId) $("#" + tmpTargetNodeId + consts.id.A, tmpTarget).removeClass(consts.node.TMPTARGET_NODE + "_" + consts.move.TYPE_PREV)
              .removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_NEXT).removeClass(consts.node.TMPTARGET_NODE + "_" + _consts.move.TYPE_INNER);
          }
          tools.showIfameMask(setting, false);

          roots.showHoverDom = true;
          if (root.dragFlag == 0) return;
          root.dragFlag = 0;

          var i, l, tmpNode;
          for (i = 0, l = nodes.length; i < l; i++) {
            tmpNode = nodes[i];
            if (data.nodeIsParent(setting, tmpNode) && root.dragNodeShowBefore[tmpNode.tId] && !tmpNode.open) {
              view.expandCollapseNode(setting, tmpNode, !tmpNode.open);
              delete root.dragNodeShowBefore[tmpNode.tId];
            }
          }

          if (curNode) curNode.remove();
          if (tmpArrow) tmpArrow.remove();

          var isCopy = ((event.ctrlKey || event.metaKey) && setting.edit.drag.isMove && setting.edit.drag.isCopy) || (!setting.edit.drag.isMove && setting.edit.drag.isCopy);
          if (!isCopy && tmpTarget && tmpTargetNodeId && nodes[0].parentTId && tmpTargetNodeId == nodes[0].parentTId && moveType == consts.move.TYPE_INNER) {
            tmpTarget = null;
          }
          if (tmpTarget) {
            var dragTargetNode = tmpTargetNodeId == null ? null : data.getNodeCache(targetSetting, tmpTargetNodeId);
            if (tools.apply(setting.callback.beforeDrop, [targetSetting.treeId, nodes, dragTargetNode, moveType, isCopy], true) == false) {
              view.selectNodes(sourceSetting, nodes);
              return;
            }
            var newNodes = isCopy ? tools.clone(nodes) : nodes;

            function dropCallback() {
              if (isOtherTree) {
                if (!isCopy) {
                  for (var i = 0, l = nodes.length; i < l; i++) {
                    view.removeNode(setting, nodes[i]);
                  }
                }
                if (moveType == consts.move.TYPE_INNER) {
                  view.addNodes(targetSetting, dragTargetNode, -1, newNodes);
                } else {
                  view.addNodes(targetSetting, dragTargetNode.getParentNode(), moveType == consts.move.TYPE_PREV ? dragTargetNode.getIndex() : dragTargetNode.getIndex() + 1, newNodes);
                }
              } else {
                if (isCopy && moveType == consts.move.TYPE_INNER) {
                  view.addNodes(targetSetting, dragTargetNode, -1, newNodes);
                } else if (isCopy) {
                  view.addNodes(targetSetting, dragTargetNode.getParentNode(), moveType == consts.move.TYPE_PREV ? dragTargetNode.getIndex() : dragTargetNode.getIndex() + 1, newNodes);
                } else {
                  if (moveType != consts.move.TYPE_NEXT) {
                    for (i = 0, l = newNodes.length; i < l; i++) {
                      view.moveNode(targetSetting, dragTargetNode, newNodes[i], moveType, false);
                    }
                  } else {
                    for (i = -1, l = newNodes.length - 1; i < l; l--) {
                      view.moveNode(targetSetting, dragTargetNode, newNodes[l], moveType, false);
                    }
                  }
                }
              }
              view.selectNodes(targetSetting, newNodes);

              var a = $$(newNodes[0], setting).get(0);
              view.scrollIntoView(setting, a);

              setting.treeObj.trigger(consts.event.DROP, [event, targetSetting.treeId, newNodes, dragTargetNode, moveType, isCopy]);
            }

            if (moveType == consts.move.TYPE_INNER && tools.canAsync(targetSetting, dragTargetNode)) {
              view.asyncNode(targetSetting, dragTargetNode, false, dropCallback);
            } else {
              dropCallback();
            }

          } else {
            view.selectNodes(sourceSetting, nodes);
            setting.treeObj.trigger(consts.event.DROP, [event, setting.treeId, nodes, null, null, null]);
          }
        }

        doc.bind("selectstart", _docSelect);

        function _docSelect() {
          return false;
        }

        // 2018-03-30 FireFox has fixed this issue.
        //Avoid FireFox's Bug
        //If zTree Div CSS set 'overflow', so drag node outside of zTree, and event.target is error.
        // if(eventMouseDown.preventDefault) {
        // 	eventMouseDown.preventDefault();
        // }
        return true;
      }
    },
    //method of tools for zTree
    _tools = {
      getAbs: function (obj) {
        var oRect = obj.getBoundingClientRect(),
          scrollTop = document.body.scrollTop + document.documentElement.scrollTop,
          scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
        return [oRect.left + scrollLeft, oRect.top + scrollTop];
      },
      inputFocus: function (inputObj) {
        if (inputObj.get(0)) {
          inputObj.focus();
          tools.setCursorPosition(inputObj.get(0), inputObj.val().length);
        }
      },
      inputSelect: function (inputObj) {
        if (inputObj.get(0)) {
          inputObj.focus();
          inputObj.select();
        }
      },
      setCursorPosition: function (obj, pos) {
        if (obj.setSelectionRange) {
          obj.focus();
          obj.setSelectionRange(pos, pos);
        } else if (obj.createTextRange) {
          var range = obj.createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      },
      showIfameMask: function (setting, showSign) {
        var root = data.getRoot(setting);
        //clear full mask
        while (root.dragMaskList.length > 0) {
          root.dragMaskList[0].remove();
          root.dragMaskList.shift();
        }
        if (showSign) {
          //show mask
          var iframeList = $$("iframe", setting);
          for (var i = 0, l = iframeList.length; i < l; i++) {
            var obj = iframeList.get(i),
              r = tools.getAbs(obj),
              dragMask = $$("<div id='zTreeMask_" + i + "' class='zTreeMask' style='top:" + r[1] + "px; left:" + r[0] + "px; width:" + obj.offsetWidth + "px; height:" + obj.offsetHeight + "px;'></div>", setting);
            dragMask.appendTo($$("body", setting));
            root.dragMaskList.push(dragMask);
          }
        }
      }
    },
    //method of operate ztree dom
    _view = {
      addEditBtn: function (setting, node) {
        if (node.editNameFlag || $$(node, consts.id.EDIT, setting).length > 0) {
          return;
        }
        if (!tools.apply(setting.edit.showRenameBtn, [setting.treeId, node], setting.edit.showRenameBtn)) {
          return;
        }
        var aObj = $$(node, consts.id.A, setting),
          editStr = "<span class='" + consts.className.BUTTON + " edit' id='" + node.tId + consts.id.EDIT + "' title='" + tools.apply(setting.edit.renameTitle, [setting.treeId, node], setting.edit.renameTitle) + "' treeNode" + consts.id.EDIT + " style='display:none;'></span>";
        aObj.append(editStr);

        $$(node, consts.id.EDIT, setting).bind('click',
          function () {
            if (!tools.uCanDo(setting) || tools.apply(setting.callback.beforeEditName, [setting.treeId, node], true) == false) return false;
            view.editNode(setting, node);
            return false;
          }
        ).show();
      },
      addRemoveBtn: function (setting, node) {
        if (node.editNameFlag || $$(node, consts.id.REMOVE, setting).length > 0) {
          return;
        }
        if (!tools.apply(setting.edit.showRemoveBtn, [setting.treeId, node], setting.edit.showRemoveBtn)) {
          return;
        }
        var aObj = $$(node, consts.id.A, setting),
          removeStr = "<span class='" + consts.className.BUTTON + " remove' id='" + node.tId + consts.id.REMOVE + "' title='" + tools.apply(setting.edit.removeTitle, [setting.treeId, node], setting.edit.removeTitle) + "' treeNode" + consts.id.REMOVE + " style='display:none;'></span>";
        aObj.append(removeStr);

        $$(node, consts.id.REMOVE, setting).bind('click',
          function () {
            if (!tools.uCanDo(setting) || tools.apply(setting.callback.beforeRemove, [setting.treeId, node], true) == false) return false;
            view.removeNode(setting, node);
            setting.treeObj.trigger(consts.event.REMOVE, [setting.treeId, node]);
            return false;
          }
        ).bind('mousedown',
          function (eventMouseDown) {
            return true;
          }
        ).show();
      },
      addHoverDom: function (setting, node) {
        if (data.getRoots().showHoverDom) {
          node.isHover = true;
          if (setting.edit.enable) {
            view.addEditBtn(setting, node);
            view.addRemoveBtn(setting, node);
          }
          tools.apply(setting.view.addHoverDom, [setting.treeId, node]);
        }
      },
      cancelCurEditNode: function (setting, forceName, isCancel) {
        var root = data.getRoot(setting),
          node = root.curEditNode;

        if (node) {
          var inputObj = root.curEditInput,
            newName = forceName ? forceName : (isCancel ? data.nodeName(setting, node) : inputObj.val());
          if (tools.apply(setting.callback.beforeRename, [setting.treeId, node, newName, isCancel], true) === false) {
            return false;
          }
          data.nodeName(setting, node, newName);
          var aObj = $$(node, consts.id.A, setting);
          aObj.removeClass(consts.node.CURSELECTED_EDIT);
          inputObj.unbind();
          view.setNodeName(setting, node);
          node.editNameFlag = false;
          root.curEditNode = null;
          root.curEditInput = null;
          view.selectNode(setting, node, false);
          setting.treeObj.trigger(consts.event.RENAME, [setting.treeId, node, isCancel]);
        }
        root.noSelection = true;
        return true;
      },
      editNode: function (setting, node) {
        var root = data.getRoot(setting);
        view.editNodeBlur = false;
        if (data.isSelectedNode(setting, node) && root.curEditNode == node && node.editNameFlag) {
          setTimeout(function () {
            tools.inputFocus(root.curEditInput);
          }, 0);
          return;
        }
        node.editNameFlag = true;
        view.removeTreeDom(setting, node);
        view.cancelCurEditNode(setting);
        view.selectNode(setting, node, false);
        $$(node, consts.id.SPAN, setting).html("<input type=text class='rename' id='" + node.tId + consts.id.INPUT + "' treeNode" + consts.id.INPUT + " >");
        var inputObj = $$(node, consts.id.INPUT, setting);
        inputObj.attr("value", data.nodeName(setting, node));
        if (setting.edit.editNameSelectAll) {
          tools.inputSelect(inputObj);
        } else {
          tools.inputFocus(inputObj);
        }

        inputObj.bind('blur', function (event) {
          if (!view.editNodeBlur) {
            view.cancelCurEditNode(setting);
          }
        }).bind('keydown', function (event) {
          if (event.keyCode == "13") {
            view.editNodeBlur = true;
            view.cancelCurEditNode(setting);
          } else if (event.keyCode == "27") {
            view.cancelCurEditNode(setting, null, true);
          }
        }).bind('click', function (event) {
          return false;
        }).bind('dblclick', function (event) {
          return false;
        });

        $$(node, consts.id.A, setting).addClass(consts.node.CURSELECTED_EDIT);
        root.curEditInput = inputObj;
        root.noSelection = false;
        root.curEditNode = node;
      },
      moveNode: function (setting, targetNode, node, moveType, animateFlag, isSilent) {
        var root = data.getRoot(setting);
        if (targetNode == node) return;
        if (setting.data.keep.leaf && targetNode && !data.nodeIsParent(setting, targetNode) && moveType == consts.move.TYPE_INNER) return;
        var oldParentNode = (node.parentTId ? node.getParentNode() : root),
          targetNodeIsRoot = (targetNode === null || targetNode == root);
        if (targetNodeIsRoot && targetNode === null) targetNode = root;
        if (targetNodeIsRoot) moveType = consts.move.TYPE_INNER;
        var targetParentNode = (targetNode.parentTId ? targetNode.getParentNode() : root);

        if (moveType != consts.move.TYPE_PREV && moveType != consts.move.TYPE_NEXT) {
          moveType = consts.move.TYPE_INNER;
        }

        if (moveType == consts.move.TYPE_INNER) {
          if (targetNodeIsRoot) {
            //parentTId of root node is null
            node.parentTId = null;
          } else {
            if (!data.nodeIsParent(setting, targetNode)) {
              data.nodeIsParent(setting, targetNode, true);
              targetNode.open = !!targetNode.open;
              view.setNodeLineIcos(setting, targetNode);
            }
            node.parentTId = targetNode.tId;
          }
        }

        //move node Dom
        var targetObj, target_ulObj;
        if (targetNodeIsRoot) {
          targetObj = setting.treeObj;
          target_ulObj = targetObj;
        } else {
          if (!isSilent && moveType == consts.move.TYPE_INNER) {
            view.expandCollapseNode(setting, targetNode, true, false);
          } else if (!isSilent) {
            view.expandCollapseNode(setting, targetNode.getParentNode(), true, false);
          }
          targetObj = $$(targetNode, setting);
          target_ulObj = $$(targetNode, consts.id.UL, setting);
          if (!!targetObj.get(0) && !target_ulObj.get(0)) {
            var ulstr = [];
            view.makeUlHtml(setting, targetNode, ulstr, '');
            targetObj.append(ulstr.join(''));
          }
          target_ulObj = $$(targetNode, consts.id.UL, setting);
        }
        var nodeDom = $$(node, setting);
        if (!nodeDom.get(0)) {
          nodeDom = view.appendNodes(setting, node.level, [node], null, -1, false, true).join('');
        } else if (!targetObj.get(0)) {
          nodeDom.remove();
        }
        if (target_ulObj.get(0) && moveType == consts.move.TYPE_INNER) {
          target_ulObj.append(nodeDom);
        } else if (targetObj.get(0) && moveType == consts.move.TYPE_PREV) {
          targetObj.before(nodeDom);
        } else if (targetObj.get(0) && moveType == consts.move.TYPE_NEXT) {
          targetObj.after(nodeDom);
        }

        //repair the data after move
        var i, l,
          tmpSrcIndex = -1,
          tmpTargetIndex = 0,
          oldNeighbor = null,
          newNeighbor = null,
          oldLevel = node.level;
        var oldChildren = data.nodeChildren(setting, oldParentNode);
        var targetParentChildren = data.nodeChildren(setting, targetParentNode);
        var targetChildren = data.nodeChildren(setting, targetNode);
        if (node.isFirstNode) {
          tmpSrcIndex = 0;
          if (oldChildren.length > 1) {
            oldNeighbor = oldChildren[1];
            oldNeighbor.isFirstNode = true;
          }
        } else if (node.isLastNode) {
          tmpSrcIndex = oldChildren.length - 1;
          oldNeighbor = oldChildren[tmpSrcIndex - 1];
          oldNeighbor.isLastNode = true;
        } else {
          for (i = 0, l = oldChildren.length; i < l; i++) {
            if (oldChildren[i].tId == node.tId) {
              tmpSrcIndex = i;
              break;
            }
          }
        }
        if (tmpSrcIndex >= 0) {
          oldChildren.splice(tmpSrcIndex, 1);
        }
        if (moveType != consts.move.TYPE_INNER) {
          for (i = 0, l = targetParentChildren.length; i < l; i++) {
            if (targetParentChildren[i].tId == targetNode.tId) tmpTargetIndex = i;
          }
        }
        if (moveType == consts.move.TYPE_INNER) {
          if (!targetChildren) {
            targetChildren = data.nodeChildren(setting, targetNode, []);
          }
          if (targetChildren.length > 0) {
            newNeighbor = targetChildren[targetChildren.length - 1];
            newNeighbor.isLastNode = false;
          }
          targetChildren.splice(targetChildren.length, 0, node);
          node.isLastNode = true;
          node.isFirstNode = (targetChildren.length == 1);
        } else if (targetNode.isFirstNode && moveType == consts.move.TYPE_PREV) {
          targetParentChildren.splice(tmpTargetIndex, 0, node);
          newNeighbor = targetNode;
          newNeighbor.isFirstNode = false;
          node.parentTId = targetNode.parentTId;
          node.isFirstNode = true;
          node.isLastNode = false;

        } else if (targetNode.isLastNode && moveType == consts.move.TYPE_NEXT) {
          targetParentChildren.splice(tmpTargetIndex + 1, 0, node);
          newNeighbor = targetNode;
          newNeighbor.isLastNode = false;
          node.parentTId = targetNode.parentTId;
          node.isFirstNode = false;
          node.isLastNode = true;

        } else {
          if (moveType == consts.move.TYPE_PREV) {
            targetParentChildren.splice(tmpTargetIndex, 0, node);
          } else {
            targetParentChildren.splice(tmpTargetIndex + 1, 0, node);
          }
          node.parentTId = targetNode.parentTId;
          node.isFirstNode = false;
          node.isLastNode = false;
        }
        data.fixPIdKeyValue(setting, node);
        data.setSonNodeLevel(setting, node.getParentNode(), node);

        //repair node what been moved
        view.setNodeLineIcos(setting, node);
        view.repairNodeLevelClass(setting, node, oldLevel);

        //repair node's old parentNode dom
        if (!setting.data.keep.parent && oldChildren.length < 1) {
          //old parentNode has no child nodes
          data.nodeIsParent(setting, oldParentNode, false);
          oldParentNode.open = false;
          var tmp_ulObj = $$(oldParentNode, consts.id.UL, setting),
            tmp_switchObj = $$(oldParentNode, consts.id.SWITCH, setting),
            tmp_icoObj = $$(oldParentNode, consts.id.ICON, setting);
          view.replaceSwitchClass(oldParentNode, tmp_switchObj, consts.folder.DOCU);
          view.replaceIcoClass(oldParentNode, tmp_icoObj, consts.folder.DOCU);
          tmp_ulObj.css("display", "none");

        } else if (oldNeighbor) {
          //old neighbor node
          view.setNodeLineIcos(setting, oldNeighbor);
        }

        //new neighbor node
        if (newNeighbor) {
          view.setNodeLineIcos(setting, newNeighbor);
        }

        //repair checkbox / radio
        if (!!setting.check && setting.check.enable && view.repairChkClass) {
          view.repairChkClass(setting, oldParentNode);
          view.repairParentChkClassWithSelf(setting, oldParentNode);
          if (oldParentNode != node.parent)
            view.repairParentChkClassWithSelf(setting, node);
        }

        //expand parents after move
        if (!isSilent) {
          view.expandCollapseParentNode(setting, node.getParentNode(), true, animateFlag);
        }
      },
      removeEditBtn: function (setting, node) {
        $$(node, consts.id.EDIT, setting).unbind().remove();
      },
      removeRemoveBtn: function (setting, node) {
        $$(node, consts.id.REMOVE, setting).unbind().remove();
      },
      removeTreeDom: function (setting, node) {
        node.isHover = false;
        view.removeEditBtn(setting, node);
        view.removeRemoveBtn(setting, node);
        tools.apply(setting.view.removeHoverDom, [setting.treeId, node]);
      },
      repairNodeLevelClass: function (setting, node, oldLevel) {
        if (oldLevel === node.level) return;
        var liObj = $$(node, setting),
          aObj = $$(node, consts.id.A, setting),
          ulObj = $$(node, consts.id.UL, setting),
          oldClass = consts.className.LEVEL + oldLevel,
          newClass = consts.className.LEVEL + node.level;
        liObj.removeClass(oldClass);
        liObj.addClass(newClass);
        aObj.removeClass(oldClass);
        aObj.addClass(newClass);
        ulObj.removeClass(oldClass);
        ulObj.addClass(newClass);
      },
      selectNodes: function (setting, nodes) {
        for (var i = 0, l = nodes.length; i < l; i++) {
          view.selectNode(setting, nodes[i], i > 0);
        }
      }
    },

    _z = {
      tools: _tools,
      view: _view,
      event: _event,
      data: _data
    };
  $.extend(true, $.fn.zTree.consts, _consts);
  $.extend(true, $.fn.zTree._z, _z);

  var zt = $.fn.zTree,
    tools = zt._z.tools,
    consts = zt.consts,
    view = zt._z.view,
    data = zt._z.data,
    event = zt._z.event,
    $$ = tools.$;

  data.exSetting(_setting);
  data.addInitBind(_bindEvent);
  data.addInitUnBind(_unbindEvent);
  data.addInitCache(_initCache);
  data.addInitNode(_initNode);
  data.addInitProxy(_eventProxy);
  data.addInitRoot(_initRoot);
  data.addZTreeTools(_zTreeTools);

  var _cancelPreSelectedNode = view.cancelPreSelectedNode;
  view.cancelPreSelectedNode = function (setting, node) {
    var list = data.getRoot(setting).curSelectedList;
    for (var i = 0, j = list.length; i < j; i++) {
      if (!node || node === list[i]) {
        view.removeTreeDom(setting, list[i]);
        if (node) break;
      }
    }
    if (_cancelPreSelectedNode) _cancelPreSelectedNode.apply(view, arguments);
  }

  var _createNodes = view.createNodes;
  view.createNodes = function (setting, level, nodes, parentNode, index) {
    if (_createNodes) {
      _createNodes.apply(view, arguments);
    }
    if (!nodes) return;
    if (view.repairParentChkClassWithSelf) {
      view.repairParentChkClassWithSelf(setting, parentNode);
    }
  }

  var _makeNodeUrl = view.makeNodeUrl;
  view.makeNodeUrl = function (setting, node) {
    return setting.edit.enable ? null : (_makeNodeUrl.apply(view, arguments));
  }

  var _removeNode = view.removeNode;
  view.removeNode = function (setting, node) {
    var root = data.getRoot(setting);
    if (root.curEditNode === node) root.curEditNode = null;
    if (_removeNode) {
      _removeNode.apply(view, arguments);
    }
  }

  var _selectNode = view.selectNode;
  view.selectNode = function (setting, node, addFlag) {
    var root = data.getRoot(setting);
    if (data.isSelectedNode(setting, node) && root.curEditNode == node && node.editNameFlag) {
      return false;
    }
    if (_selectNode) _selectNode.apply(view, arguments);
    view.addHoverDom(setting, node);
    return true;
  }

  var _uCanDo = tools.uCanDo;
  tools.uCanDo = function (setting, e) {
    var root = data.getRoot(setting);
    if (e && (tools.eqs(e.type, "mouseover") || tools.eqs(e.type, "mouseout") || tools.eqs(e.type, "mousedown") || tools.eqs(e.type, "mouseup"))) {
      return true;
    }
    if (root.curEditNode) {
      view.editNodeBlur = false;
      root.curEditInput.focus();
    }
    return (!root.curEditNode) && (_uCanDo ? _uCanDo.apply(view, arguments) : true);
  }
})(jQuery);

/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "afd1":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ztree{text-align:left;font-size:14px}.vue-giant-tree li{list-style-type:none;white-space:nowrap;outline:none}.vue-giant-tree li ul{position:relative;padding:0 0 0 20px;margin:0}.vue-giant-tree .line:before{position:absolute;top:0;left:10px;height:100%;content:\"\";border-right:1px dotted #dbdbdb}.vue-giant-tree .bottom_docu:after,.vue-giant-tree .bottom_docu:before,.vue-giant-tree .center_docu:after,.vue-giant-tree .center_docu:before,.vue-giant-tree .roots_docu:after,.vue-giant-tree .roots_docu:before{position:absolute;content:\"\";border:0 dotted #dbdbdb}.vue-giant-tree .roots_docu:before{left:10px;height:50%;top:50%;border-left-width:1px}.vue-giant-tree .roots_docu:after{top:50%;left:11px;width:50%;border-top-width:1px}.vue-giant-tree .center_docu:before{left:10px;height:100%;border-left-width:1px}.vue-giant-tree .center_docu:after{top:50%;left:11px;width:50%;border-top-width:1px}.vue-giant-tree .bottom_docu:before{left:10px;height:50%;border-left-width:1px}.vue-giant-tree .bottom_docu:after{top:50%;left:11px;width:50%;border-top-width:1px}.vue-giant-tree li a{display:inline-block;line-height:22px;height:22px;margin:0;cursor:pointer;-webkit-transition:none;transition:none;vertical-align:middle;color:#555}.vue-giant-tree .node_name{display:inline-block;padding:0 3px;border-radius:4px}.vue-giant-tree .curSelectedNode .node_name{color:#000;background-color:#c9e9f7}.vue-giant-tree .curSelectedNode_Edit{height:20px;opacity:.8;color:#000;border:1px solid #6cc2e8;background-color:#9dd6f0}.vue-giant-tree .tmpTargetNode_inner{opacity:.8;color:#fff;background-color:#4fcbf0;filter:alpha(opacity=80)}.vue-giant-tree .rename{font-size:12px;line-height:22px;width:80px;height:22px;margin:0;padding:0;vertical-align:top;border:0;background:none}.vue-giant-tree .button{position:relative;display:inline-block;line-height:22px;height:22px;width:22px;cursor:pointer;text-align:center;vertical-align:middle}.vue-giant-tree .button.edit{color:#25ae88}.vue-giant-tree .button.remove{color:#cb4042}.vue-giant-tree .button.chk{position:relative;width:14px;height:14px;margin:0 4px 0 0;border:1px solid #d7dde4;border-radius:2px;background:#fff}.vue-giant-tree .chk.radio_false_disable,.vue-giant-tree .chk.radio_false_full,.vue-giant-tree .chk.radio_false_full_focus,.vue-giant-tree .chk.radio_false_part,.vue-giant-tree .chk.radio_false_part_focus,.vue-giant-tree .chk.radio_true_disable,.vue-giant-tree .chk.radio_true_full,.vue-giant-tree .chk.radio_true_full_focus,.vue-giant-tree .chk.radio_true_part,.vue-giant-tree .chk.radio_true_part_focus{border-radius:8px}.vue-giant-tree .button.chk:after{position:absolute;top:1px;left:4px;width:4px;height:8px;content:\"\";transition:-webkit-transform .2s ease-in-out;-webkit-transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out;-webkit-transform:rotate(0deg) scale(0);transform:rotate(0deg) scale(0);border-right:2px solid #fff;border-bottom:2px solid #fff}.vue-giant-tree .button.checkbox_false_full_focus{border-color:#ccc}.vue-giant-tree .button.checkbox_true_disable,.vue-giant-tree .button.checkbox_true_full,.vue-giant-tree .button.checkbox_true_full_focus,.vue-giant-tree .button.checkbox_true_part,.vue-giant-tree .button.checkbox_true_part_focus{border-color:#39f;background-color:#39f}.vue-giant-tree .button.checkbox_true_disable:after,.vue-giant-tree .button.checkbox_true_full:after,.vue-giant-tree .button.checkbox_true_full_focus:after{-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}.vue-giant-tree .button.checkbox_true_part:after,.vue-giant-tree .button.checkbox_true_part_focus:after{top:5px;left:2px;width:10px;height:1px;-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);border-right:0}.vue-giant-tree .button.radio_true_full,.vue-giant-tree .chk.radio_true_full_focus,.vue-giant-tree .chk.radio_true_part,.vue-giant-tree .chk.radio_true_part_focus{border-color:#39f}.vue-giant-tree .button.radio_true_full:after,.vue-giant-tree .chk.radio_true_full_focus:after,.vue-giant-tree .chk.radio_true_part:after,.vue-giant-tree .chk.radio_true_part_focus:after{top:3px;left:3px;width:8px;-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);border:0;border-radius:4px;background:#39f}.vue-giant-tree .button.checkbox_false_disable,.vue-giant-tree .button.checkbox_true_disable,.vue-giant-tree .chk.radio_false_disable,.vue-giant-tree .chk.radio_true_disable{cursor:not-allowed}.vue-giant-tree .button.checkbox_false_disable{background-color:#f3f3f3}.vue-giant-tree .button.bottom_close:before,.vue-giant-tree .button.bottom_open:before,.vue-giant-tree .button.center_close:before,.vue-giant-tree .button.center_open:before,.vue-giant-tree .button.noline_close:before,.vue-giant-tree .button.noline_open:before,.vue-giant-tree .button.root_close:before,.vue-giant-tree .button.root_open:before,.vue-giant-tree .button.roots_close:before,.vue-giant-tree .button.roots_open:before{position:absolute;top:5px;left:5px;content:\"\";transition:-webkit-transform .3s ease;-webkit-transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:25% 50%;transform-origin:25% 50%;border:6px solid;border-color:transparent transparent transparent #666}.vue-giant-tree .button.bottom_open:before,.vue-giant-tree .button.center_open:before,.vue-giant-tree .button.noline_open:before,.vue-giant-tree .button.root_open:before,.vue-giant-tree .button.roots_open:before{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.vue-giant-tree .button.ico_loading{margin-right:2px;background:url(\"data:image/gif;base64,R0lGODlhEAAQAKIGAMLY8YSx5HOm4Mjc88/g9Ofw+v///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAGACwAAAAAEAAQAAADMGi6RbUwGjKIXCAA016PgRBElAVlG/RdLOO0X9nK61W39qvqiwz5Ls/rRqrggsdkAgAh+QQFCgAGACwCAAAABwAFAAADD2hqELAmiFBIYY4MAutdCQAh+QQFCgAGACwGAAAABwAFAAADD1hU1kaDOKMYCGAGEeYFCQAh+QQFCgAGACwKAAIABQAHAAADEFhUZjSkKdZqBQG0IELDQAIAIfkEBQoABgAsCgAGAAUABwAAAxBoVlRKgyjmlAIBqCDCzUoCACH5BAUKAAYALAYACgAHAAUAAAMPaGpFtYYMAgJgLogA610JACH5BAUKAAYALAIACgAHAAUAAAMPCAHWFiI4o1ghZZJB5i0JACH5BAUKAAYALAAABgAFAAcAAAMQCAFmIaEp1motpDQySMNFAgA7\") 0 no-repeat}.vue-giant-tree .tmpTargetzTree{opacity:.8;background-color:#2ea9df;filter:alpha(opacity=80)}.vue-giant-tree .tmpzTreeMove_arrow{position:absolute;width:18px;height:18px;color:#4fcbf0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b42e":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c5e1":
/***/ (function(module, exports) {

module.exports = require("jQuery");

/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es-x/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e780":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "ul.ztree.zTreeDragUL{margin:0;padding:0;position:absolute;overflow:hidden;background-color:#dedede;border:1px dotted #4fcbf0;border-radius:4px;opacity:.7}.zTreeMask{position:absolute;z-index:10000;opacity:0;background-color:#cfcfcf}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c11e42ae-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ztree.vue?vue&type=template&id=7740d957&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "ztree vue-giant-tree",
    attrs: {
      "id": _vm.ztreeId
    }
  });
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/ztree.vue?vue&type=template&id=7740d957&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__("c5e1");
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ztree.vue?vue&type=script&lang=js&




__webpack_require__("91e5");

/* harmony default export */ var ztreevue_type_script_lang_js_ = ({
  props: {
    setting: {
      type: Object,
      require: false,
      default: function _default() {
        return {};
      }
    },
    nodes: {
      type: Array,
      require: true,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    var _this = this;

    return {
      ztreeId: "ztree_" + parseInt(Math.random() * 1e10),
      ztreeObj: null,
      list: [],
      ztreeSetting: {
        view: {
          showIcon: false // default to hide icon

        },
        callback: {
          onAsyncError: function onAsyncError() {
            for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
              arg[_key] = arguments[_key];
            }

            _this.$emit.apply(_this, ["onAsyncError"].concat(arg));
          },
          onAsyncSuccess: function onAsyncSuccess() {
            for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              arg[_key2] = arguments[_key2];
            }

            _this.$emit.apply(_this, ["onAsyncSuccess"].concat(arg));
          },
          onCheck: function onCheck() {
            for (var _len3 = arguments.length, arg = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              arg[_key3] = arguments[_key3];
            }

            _this.$emit.apply(_this, ["onCheck"].concat(arg));
          },
          onClick: function onClick() {
            for (var _len4 = arguments.length, arg = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              arg[_key4] = arguments[_key4];
            }

            _this.$emit.apply(_this, ["onClick"].concat(arg));
          },
          onCollapse: function onCollapse() {
            for (var _len5 = arguments.length, arg = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              arg[_key5] = arguments[_key5];
            }

            _this.$emit.apply(_this, ["onCollapse"].concat(arg));
          },
          onDblClick: function onDblClick() {
            for (var _len6 = arguments.length, arg = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              arg[_key6] = arguments[_key6];
            }

            _this.$emit.apply(_this, ["onDblClick"].concat(arg));
          },
          onDrag: function onDrag() {
            for (var _len7 = arguments.length, arg = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              arg[_key7] = arguments[_key7];
            }

            _this.$emit.apply(_this, ["onDrag"].concat(arg));
          },
          onDragMove: function onDragMove() {
            for (var _len8 = arguments.length, arg = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              arg[_key8] = arguments[_key8];
            }

            _this.$emit.apply(_this, ["onDragMove"].concat(arg));
          },
          onDrop: function onDrop() {
            for (var _len9 = arguments.length, arg = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              arg[_key9] = arguments[_key9];
            }

            _this.$emit.apply(_this, ["onDrop"].concat(arg));
          },
          onExpand: function onExpand() {
            for (var _len10 = arguments.length, arg = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              arg[_key10] = arguments[_key10];
            }

            _this.$emit.apply(_this, ["onExpand"].concat(arg));
          },
          onMouseDown: function onMouseDown() {
            for (var _len11 = arguments.length, arg = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
              arg[_key11] = arguments[_key11];
            }

            _this.$emit.apply(_this, ["onMouseDown"].concat(arg));
          },
          onMouseUp: function onMouseUp() {
            for (var _len12 = arguments.length, arg = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
              arg[_key12] = arguments[_key12];
            }

            _this.$emit.apply(_this, ["onMouseUp"].concat(arg));
          },
          onRemove: function onRemove() {
            for (var _len13 = arguments.length, arg = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
              arg[_key13] = arguments[_key13];
            }

            _this.$emit.apply(_this, ["onRemove"].concat(arg));
          },
          onRename: function onRename() {
            for (var _len14 = arguments.length, arg = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
              arg[_key14] = arguments[_key14];
            }

            _this.$emit.apply(_this, ["onRename"].concat(arg));
          },
          onRightClick: function onRightClick() {
            for (var _len15 = arguments.length, arg = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
              arg[_key15] = arguments[_key15];
            }

            _this.$emit.apply(_this, ["onRightClick"].concat(arg));
          }
        }
      }
    };
  },
  watch: {
    nodes: {
      handler: function handler(nodes) {
        var _this2 = this;

        this.list = nodes; // update tree

        if (this.ztreeObj) {
          this.ztreeObj.destroy();
        }

        this.$nextTick(function () {
          _this2.ztreeObj = external_jQuery_default.a.fn.zTree.init(external_jQuery_default()("#" + _this2.ztreeId), Object.assign({}, _this2.ztreeSetting, _this2.setting), _this2.list);

          _this2.$emit("onCreated", _this2.ztreeObj);
        });
      },
      deep: true,
      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/ztree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ztreevue_type_script_lang_js_ = (ztreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ztree.vue?vue&type=style&index=0&id=7740d957&prod&lang=css&
var ztreevue_type_style_index_0_id_7740d957_prod_lang_css_ = __webpack_require__("febd");

// EXTERNAL MODULE: ./src/components/ztree.vue?vue&type=style&index=1&id=7740d957&prod&lang=css&
var ztreevue_type_style_index_1_id_7740d957_prod_lang_css_ = __webpack_require__("fb62");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/ztree.vue







/* normalize component */

var component = normalizeComponent(
  components_ztreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ztree = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (ztree);



/***/ }),

/***/ "fb62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ztree_vue_vue_type_style_index_1_id_7740d957_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0f68");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ztree_vue_vue_type_style_index_1_id_7740d957_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ztree_vue_vue_type_style_index_1_id_7740d957_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "febd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ztree_vue_vue_type_style_index_0_id_7740d957_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4b7f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ztree_vue_vue_type_style_index_0_id_7740d957_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ztree_vue_vue_type_style_index_0_id_7740d957_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-giant-tree.common.js.map