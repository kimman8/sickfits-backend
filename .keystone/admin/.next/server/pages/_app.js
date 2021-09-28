module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@babel/runtime/helpers/extends.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

module.exports = _toPrimitive;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var toPrimitive = __webpack_require__(/*! ./toPrimitive */ "../../node_modules/@babel/runtime/helpers/toPrimitive.js");

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var react = __webpack_require__(/*! react */ "react");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var pill = __webpack_require__(/*! @keystone-ui/pill */ "@keystone-ui/pill");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");

function useObjectURL(fileData) {
  let [objectURL, setObjectURL] = react.useState(undefined);
  react.useEffect(() => {
    if (fileData) {
      let url = URL.createObjectURL(fileData);
      setObjectURL(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [fileData]);
  return objectURL;
}

function Field({
  autoFocus,
  field,
  value,
  onChange
}) {
  const inputRef = react.useRef(null);
  const errorMessage = value.kind === 'upload' ? validateImage(value.data) : undefined;
  const imagePathFromUpload = useObjectURL(errorMessage === undefined && value.kind === 'upload' ? value.data.file : undefined);
  const imagePath = value.kind === 'from-server' ? value.data.publicUrlTransformed : imagePathFromUpload; // Generate a random input key when the value changes, to ensure the file input is unmounted and
  // remounted (this is the only way to reset its value and ensure onChange will fire again if
  // the user selects the same file again)

  const inputKey = react.useMemo(() => Math.random(), [value]);
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), value.kind === 'from-server' || value.kind === 'upload' ? core.jsx(core.Stack, {
    gap: "small"
  }, imagePath && errorMessage === undefined && core.jsx(Image, {
    src: imagePath,
    alt: field.path
  }), onChange && core.jsx(core.Stack, {
    across: true,
    gap: "small",
    align: "center"
  }, core.jsx(button.Button, {
    size: "small",
    onClick: () => {
      var _inputRef$current;

      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.click();
    }
  }, "Change image"), value.kind === 'from-server' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange({
        kind: 'remove',
        previous: value
      });
    }
  }, "Remove"), value.kind === 'upload' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange(value.previous);
    }
  }, "Cancel"), errorMessage ? core.jsx(pill.Pill, {
    tone: "negative",
    weight: "light"
  }, errorMessage) : value.kind === 'upload' && core.jsx(pill.Pill, {
    weight: "light",
    tone: "positive"
  }, "Save to upload this image"))) : core.jsx(core.Stack, {
    css: {
      alignItems: 'center'
    },
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    onClick: () => {
      var _inputRef$current2;

      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.click();
    }
  }, "Upload Image"), value.kind === 'remove' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange === null || onChange === void 0 ? void 0 : onChange(value.previous);
    }
  }, "Undo removal"), value.kind === 'remove' && // NOTE -- UX decision is to not display this, I think it would only be relevant
  // for deleting uploaded images (and we don't support that yet)
  // <Pill weight="light" tone="warning">
  //   Save to remove this image
  // </Pill>
  null), core.jsx("input", {
    css: {
      display: 'none'
    },
    autoComplete: "off",
    autoFocus: autoFocus,
    ref: inputRef,
    key: inputKey,
    name: field.path,
    onChange: ({
      target: {
        validity,
        files
      }
    }) => {
      const file = files === null || files === void 0 ? void 0 : files[0];
      if (!file) return; // bail if the user cancels from the file browser

      onChange === null || onChange === void 0 ? void 0 : onChange({
        kind: 'upload',
        data: {
          file,
          validity
        },
        previous: value
      });
    },
    type: "file",
    disabled: onChange === undefined
  }));
}
function validateImage({
  file,
  validity
}) {
  if (!validity.valid) {
    return 'Something went wrong, please reload and try again.';
  } // check if the file is actually an image


  if (!file.type.includes('image')) {
    return 'Only image files are allowed. Please try again.';
  }
} // ==============================
// Styled Components
// ==============================

const Image = props => {
  const theme = core.useTheme();
  return core.jsx("div", {
    css: {
      backgroundColor: 'white',
      borderRadius: theme.radii.medium,
      border: `1px solid ${theme.colors.border}`,
      flexShrink: 0,
      lineHeight: 0,
      padding: 4,
      position: 'relative',
      textAlign: 'center',
      width: 130 // 120px image + chrome

    }
  }, core.jsx("img", _extends({
    css: {
      height: 'auto',
      maxWidth: '100%'
    }
  }, props)));
};

/* @jsx jsx */
const Cell = ({
  item,
  field
}) => {
  const data = item[field.path];
  if (!data) return null;
  return core.jsx("div", {
    css: {
      alignItems: 'center',
      display: 'flex',
      height: 24,
      lineHeight: 0,
      width: 24
    }
  }, core.jsx("img", {
    alt: data.filename,
    css: {
      maxHeight: '100%',
      maxWidth: '100%'
    },
    src: data.publicUrlTransformed
  }));
};
const CardValue = ({
  item,
  field
}) => {
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), data && core.jsx("img", {
    alt: data.filename,
    src: data.publicUrlTransformed
  }));
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path} {
        id
        filename
        publicUrlTransformed(transformation: { width: "120" crop: "limit" })
      }`,
    defaultValue: {
      kind: 'empty'
    },

    deserialize(item) {
      const value = item[config.path];
      if (!value) return {
        kind: 'empty'
      };
      return {
        kind: 'from-server',
        data: value
      };
    },

    validate(value) {
      return value.kind !== 'upload' || validateImage(value.data) === undefined;
    },

    serialize(value) {
      if (value.kind === 'upload') {
        return {
          [config.path]: value.data.file
        };
      }

      if (value.kind === 'remove') {
        return {
          [config.path]: null
        };
      }

      return {};
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cloudinary.cjs.dev.js */ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  type: "number",
  onChange: event => {
    onChange(event.target.value.replace(/\D/g, ''));
  },
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'number' ? value + '' : '';
    },
    serialize: value => ({
      [config.path]: value === '' ? null : parseInt(value, 10)
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          type: "number",
          onChange: event => {
            props.onChange(event.target.value.replace(/[^\d,\s]/g, ''));
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is' ? config.path : `${config.path}_${type}`;
        const valueWithoutWhitespace = value.replace(/\s/g, '');
        return {
          [key]: ['in', 'not_in'].includes(type) ? valueWithoutWhitespace.split(',').map(i => parseInt(i)) : parseInt(valueWithoutWhitespace)
        };
      },

      Label({
        label,
        value,
        type
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not exactly',
          initialValue: ''
        },
        gt: {
          label: 'Is greater than',
          initialValue: ''
        },
        lt: {
          label: 'Is less than',
          initialValue: ''
        },
        gte: {
          label: 'Is greater than or equal to',
          initialValue: ''
        },
        lte: {
          label: 'Is less than or equal to',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var types_text_views_dist_fields = __webpack_require__(/*! ../../../text/views/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
__webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',

    deserialize(item) {
      const value = item[config.path];
      return typeof value === 'string' ? value : '';
    },

    serialize(value) {
      return {
        [config.path]: value
      };
    },

    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql({
        type,
        value
      }) {
        switch (type) {
          case 'is':
            {
              return {
                [config.path]: value
              };
            }

          case 'not':
            {
              return {
                [`${config.path}_not`]: value
              };
            }

          case 'in':
            {
              return {
                [`${config.path}_in`]: value.split(',').map(value => value.trim())
              };
            }

          case 'not_in':
            {
              return {
                [`${config.path}_not_in`]: value.split(',').map(value => value.trim())
              };
            }
        }

        return {};
      },

      Label({
        label,
        type,
        value
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = types_text_views_dist_fields.CardValue;
exports.Cell = types_text_views_dist_fields.Cell;
exports.Field = types_text_views_dist_fields.Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var EyeIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeIcon */ "@keystone-ui/icons/icons/EyeIcon");
var EyeOffIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeOffIcon */ "@keystone-ui/icons/icons/EyeOffIcon");
var XIcon = __webpack_require__(/*! @keystone-ui/icons/icons/XIcon */ "@keystone-ui/icons/icons/XIcon");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

const Field = ({
  field,
  value,
  onChange,
  forceValidation,
  autoFocus
}) => {
  const [showInputValue, setShowInputValue] = React.useState(false);
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const shouldShowValidation = forceValidation || touchedFirstInput && touchedSecondInput;
  const validation = shouldShowValidation && value.kind === 'editing' ? value.value === value.confirm ? value.value.length >= field.minLength ? undefined : `The password must be at least ${field.minLength} characters long` : 'The passwords do not match' : undefined;
  const inputType = showInputValue ? 'text' : 'password';
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange === undefined ? value.isSet ? 'Password is set' : 'Password is not set' : value.kind === 'initial' ? core.jsx(button.Button, {
    autoFocus: autoFocus,
    onClick: () => {
      onChange({
        kind: 'editing',
        confirm: '',
        value: '',
        isSet: value.isSet
      });
    }
  }, value.isSet ? 'Change Password' : 'Set Password') : core.jsx(core.Stack, {
    gap: "small"
  }, core.jsx("div", {
    css: {
      display: 'flex'
    }
  }, core.jsx(fields.TextInput, {
    autoFocus: true,
    invalid: validation !== undefined,
    type: inputType,
    value: value.value,
    placeholder: "New Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedFirstInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(fields.TextInput, {
    invalid: validation !== undefined,
    type: inputType,
    value: value.confirm,
    placeholder: "Confirm Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        confirm: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedSecondInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      setShowInputValue(!showInputValue);
    }
  }, core.jsx(core.VisuallyHidden, null, showInputValue ? 'Hide Text' : 'Show Text'), showInputValue ? core.jsx(EyeOffIcon.EyeOffIcon, null) : core.jsx(EyeIcon.EyeIcon, null)), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      onChange({
        kind: 'initial',
        isSet: value.isSet
      });
    }
  }, core.jsx(core.VisuallyHidden, null, "Cancel"), core.jsx(XIcon.XIcon, null))), validation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validation)));
};
const Cell = ({
  item,
  field
}) => {
  return core.jsx(components.CellContainer, null, item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}_is_set`,
    minLength: config.fieldMeta.minLength,
    defaultValue: {
      kind: 'initial',
      isSet: null
    },

    validate(state) {
      return state.kind === 'initial' || state.value === state.confirm && state.value.length >= config.fieldMeta.minLength;
    },

    deserialize: data => ({
      kind: 'initial',
      isSet: data[`${config.path}_is_set`]
    }),
    serialize: value => {
      if (value.kind === 'initial') return {};
      return {
        [config.path]: value.value
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(segmentedControl.SegmentedControl, {
          selectedIndex: Number(props.value),
          onChange: value => {
            props.onChange(!!value);
          },
          segments: ['Is Not Set', 'Is Set']
        });
      },

      graphql: ({
        type,
        value
      }) => {
        return {
          [`${config.path}_${type}`]: value
        };
      },

      Label({
        value
      }) {
        return value ? 'is set' : 'is not set';
      },

      types: {
        is_set: {
          label: 'Is Set',
          initialValue: true
        }
      }
    }
  };
};

const Spacer = () => {
  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", {
    css: {
      width: spacing.small,
      flexShrink: 0
    }
  });
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _toPropertyKey = __webpack_require__(/*! @babel/runtime/helpers/toPropertyKey */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
__webpack_require__(/*! intersection-observer */ "intersection-observer");
var React = __webpack_require__(/*! react */ "react");
var apollo = __webpack_require__(/*! @keystone-next/admin-ui/apollo */ "@keystone-next/admin-ui/apollo");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

function useIntersectionObserver(cb, ref) {
  React.useEffect(() => {
    let observer = new IntersectionObserver(cb, {});
    let node = ref.current;

    if (node !== null) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  });
}

const initialItemsToLoad = 10;
const subsequentItemsToLoad = 50;
const idField = '____id____';
const labelField = '____label____';
const RelationshipSelect = ({
  autoFocus,
  controlShouldRenderValue,
  isDisabled,
  isLoading,
  list,
  placeholder,
  state,
  extraSelection = ''
}) => {
  var _data$items;

  const [search, setSearch] = React.useState('');
  const QUERY = apollo.gql`
    query RelationshipSelect($search: String!, $first: Int!, $skip: Int!) {
      items: ${list.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
        ${idField}: id
        ${labelField}: ${list.labelField}
        ${extraSelection}
      }

      meta: ${list.gqlNames.listQueryMetaName}(search: $search) {
        count
      }
    }
  `;
  const {
    data,
    error,
    loading,
    fetchMore
  } = apollo.useQuery(QUERY, {
    fetchPolicy: 'network-only',
    variables: {
      search,
      first: initialItemsToLoad,
      skip: 0
    }
  });
  const count = (data === null || data === void 0 ? void 0 : data.meta.count) || 0;
  const relationshipSelectComponents = React.useMemo(() => ({
    MenuList: (_ref) => {
      let {
        children
      } = _ref,
          props = _objectWithoutProperties(_ref, ["children"]);

      const loadingRef = React.useRef(null);
      const QUERY = apollo.gql`
            query RelationshipSelectMore($search: String!, $first: Int!, $skip: Int!) {
              items: ${list.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
                ${labelField}: ${list.labelField}
                ${idField}: id
                ${extraSelection}
              }
            }
          `;
      useIntersectionObserver(([{
        isIntersecting
      }]) => {
        if (!props.selectProps.isLoading && isIntersecting && props.options.length < count) {
          fetchMore({
            query: QUERY,
            variables: {
              search,
              first: subsequentItemsToLoad,
              skip: props.options.length
            },
            updateQuery: (prev, {
              fetchMoreResult
            }) => {
              if (!fetchMoreResult) return prev;
              return {
                meta: prev.meta,
                items: [...prev.items, ...fetchMoreResult.items]
              };
            }
          });
        }
      }, loadingRef);
      return core.jsx(fields.selectComponents.MenuList, props, children, core.jsx("div", {
        css: {
          textAlign: 'center'
        },
        ref: loadingRef
      }, props.options.length < count && core.jsx("span", {
        css: {
          padding: 8
        }
      }, "Loading...")));
    }
  }), [count, list.gqlNames.listQueryName]); // TODO: better error UI
  // TODO: Handle permission errors
  // (ie; user has permission to read this relationship field, but
  // not the related list, or some items on the list)

  if (error) {
    return core.jsx("span", null, "Error");
  }

  const options = (data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.map((_ref2) => {
    let {
      [idField]: value,
      [labelField]: label
    } = _ref2,
        data = _objectWithoutProperties(_ref2, [idField, labelField].map(_toPropertyKey));

    return {
      value,
      label: label || value,
      data
    };
  })) || [];

  if (state.kind === 'one') {
    return core.jsx(fields.Select // this is necessary because react-select passes a second argument to onInputChange
    // and useState setters log a warning if a second argument is passed
    , {
      onInputChange: val => setSearch(val),
      isLoading: loading || isLoading,
      autoFocus: autoFocus,
      components: relationshipSelectComponents,
      portalMenu: true,
      value: state.value ? {
        value: state.value.id,
        label: state.value.label,
        // @ts-ignore
        data: state.value.data
      } : null,
      options: options,
      onChange: value => {
        state.onChange(value ? {
          id: value.value,
          label: value.label,
          data: value.data
        } : null);
      },
      placeholder: placeholder,
      controlShouldRenderValue: controlShouldRenderValue,
      isClearable: controlShouldRenderValue,
      isDisabled: isDisabled
    });
  }

  return core.jsx(fields.MultiSelect // this is necessary because react-select passes a second argument to onInputChange
  // and useState setters log a warning if a second argument is passed
  , {
    onInputChange: val => setSearch(val),
    isLoading: loading || isLoading,
    autoFocus: autoFocus,
    components: relationshipSelectComponents,
    portalMenu: true,
    value: state.value.map(value => ({
      value: value.id,
      label: value.label,
      data: value.data
    })),
    options: options,
    onChange: value => {
      state.onChange(value.map(x => ({
        id: x.value,
        label: x.label,
        data: x.data
      })));
    },
    placeholder: placeholder,
    controlShouldRenderValue: controlShouldRenderValue,
    isClearable: controlShouldRenderValue,
    isDisabled: isDisabled
  });
};

exports.RelationshipSelect = RelationshipSelect;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var context = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
var router = __webpack_require__(/*! @keystone-next/admin-ui/router */ "@keystone-next/admin-ui/router");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var modals = __webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
var tooltip = __webpack_require__(/*! @keystone-ui/tooltip */ "@keystone-ui/tooltip");
var loading = __webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
var adminUiUtils = __webpack_require__(/*! @keystone-next/admin-ui-utils */ "@keystone-next/admin-ui-utils");
var apollo = __webpack_require__(/*! @keystone-next/admin-ui/apollo */ "@keystone-next/admin-ui/apollo");
var toast = __webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
var isDeepEqual = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
var types_relationship_views_RelationshipSelect_dist_fields = __webpack_require__(/*! ../RelationshipSelect/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/toPropertyKey */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
__webpack_require__(/*! intersection-observer */ "intersection-observer");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

function useItemState({
  selectedFields,
  localList,
  id,
  field
}) {
  const {
    data,
    error,
    loading
  } = apollo.useQuery(apollo.gql`query($id: ID!) {
  item: ${localList.key}(where: {id: $id}) {
    id
    relationship: ${field.path} {
      ${selectedFields}
    }
  }
}`, {
    variables: {
      id
    },
    errorPolicy: 'all'
  });
  const {
    itemsArrFromData,
    relationshipGetter
  } = React.useMemo(() => {
    const dataGetter = adminUiUtils.makeDataGetter(data, error === null || error === void 0 ? void 0 : error.graphQLErrors);
    const relationshipGetter = dataGetter.get('item').get('relationship');
    const isMany = Array.isArray(relationshipGetter.data);
    const itemsArrFromData = (isMany ? relationshipGetter.data.map((_, i) => relationshipGetter.get(i)) : [relationshipGetter]).filter(x => {
      var _x$data;

      return ((_x$data = x.data) === null || _x$data === void 0 ? void 0 : _x$data.id) != null;
    });
    return {
      relationshipGetter,
      itemsArrFromData
    };
  }, [data, error]);
  let [{
    items,
    itemsArrFromData: itemsArrFromDataState
  }, setItemsState] = React.useState({
    itemsArrFromData: [],
    items: {}
  });

  if (itemsArrFromDataState !== itemsArrFromData) {
    let newItems = {};
    itemsArrFromData.forEach(item => {
      var _items$item$data$id, _item$errors, _initialItemInState$e;

      const initialItemInState = (_items$item$data$id = items[item.data.id]) === null || _items$item$data$id === void 0 ? void 0 : _items$item$data$id.fromInitialQuery;

      if ((items[item.data.id] && initialItemInState || !items[item.data.id]) && (!initialItemInState || item.data !== initialItemInState.data || ((_item$errors = item.errors) === null || _item$errors === void 0 ? void 0 : _item$errors.length) !== ((_initialItemInState$e = initialItemInState.errors) === null || _initialItemInState$e === void 0 ? void 0 : _initialItemInState$e.length) || (item.errors || []).some((err, i) => {
        var _initialItemInState$e2;

        return err !== ((_initialItemInState$e2 = initialItemInState.errors) === null || _initialItemInState$e2 === void 0 ? void 0 : _initialItemInState$e2[i]);
      }))) {
        newItems[item.data.id] = {
          current: item,
          fromInitialQuery: item
        };
      } else {
        newItems[item.data.id] = items[item.data.id];
      }
    });
    items = newItems;
    setItemsState({
      items: newItems,
      itemsArrFromData
    });
  }

  return {
    items: React.useMemo(() => {
      const itemsToReturn = {};
      Object.keys(items).forEach(id => {
        itemsToReturn[id] = items[id].current;
      });
      return itemsToReturn;
    }, [items]),
    setItems: React.useCallback(items => {
      setItemsState(state => {
        let itemsForState = {};
        Object.keys(items).forEach(id => {
          var _state$items$id;

          if (items[id] === ((_state$items$id = state.items[id]) === null || _state$items$id === void 0 ? void 0 : _state$items$id.current)) {
            itemsForState[id] = state.items[id];
          } else {
            var _state$items$id2;

            itemsForState[id] = {
              current: items[id],
              fromInitialQuery: (_state$items$id2 = state.items[id]) === null || _state$items$id2 === void 0 ? void 0 : _state$items$id2.fromInitialQuery
            };
          }
        });
        return {
          itemsArrFromData: state.itemsArrFromData,
          items: itemsForState
        };
      });
    }, [setItemsState]),
    state: (() => {
      if (loading) {
        return {
          kind: 'loading'
        };
      }

      if (error !== null && error !== void 0 && error.networkError) {
        return {
          kind: 'error',
          message: error.networkError.message
        };
      }

      if (field.many && !relationshipGetter.data) {
        var _relationshipGetter$e;

        return {
          kind: 'error',
          message: ((_relationshipGetter$e = relationshipGetter.errors) === null || _relationshipGetter$e === void 0 ? void 0 : _relationshipGetter$e[0].message) || ''
        };
      }

      return {
        kind: 'loaded'
      };
    })()
  };
}
function useFieldsObj(list, fields) {
  return React.useMemo(() => {
    const editFields = {};
    fields === null || fields === void 0 ? void 0 : fields.forEach(fieldPath => {
      editFields[fieldPath] = list.fields[fieldPath];
    });
    return editFields;
  }, [fields, list.fields]);
}

function InlineEdit({
  fields,
  list,
  selectedFields,
  itemGetter,
  onCancel,
  onSave
}) {
  var _itemGetter$errors;

  const fieldsObj = useFieldsObj(list, fields);
  const [update, {
    loading,
    error
  }] = apollo.useMutation(apollo.gql`mutation ($data: ${list.gqlNames.updateInputName}!, $id: ID!) {
          item: ${list.gqlNames.updateMutationName}(id: $id, data: $data) {
            ${selectedFields}
          }
        }`, {
    errorPolicy: 'all'
  });
  const [state, setValue] = React.useState(() => {
    const value = adminUiUtils.deserializeValue(fieldsObj, itemGetter);
    return {
      value,
      item: itemGetter.data
    };
  });

  if (state.item !== itemGetter.data && (_itemGetter$errors = itemGetter.errors) !== null && _itemGetter$errors !== void 0 && _itemGetter$errors.every(x => {
    var _x$path;

    return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) !== 1;
  })) {
    const value = adminUiUtils.deserializeValue(fieldsObj, itemGetter);
    setValue({
      value,
      item: itemGetter.data
    });
  }

  const {
    changedFields,
    dataForUpdate
  } = adminUiUtils.useChangedFieldsAndDataForUpdate(fieldsObj, itemGetter, state.value);
  const invalidFields = adminUiUtils.useInvalidFields(fieldsObj, state.value);
  const [forceValidation, setForceValidation] = React.useState(false);
  const toasts = toast.useToasts();
  const saveButtonProps = {
    isLoading: loading,
    weight: 'bold',
    size: 'small',
    tone: 'active',
    onClick: () => {
      const newForceValidation = invalidFields.size !== 0;
      setForceValidation(newForceValidation);
      if (newForceValidation) return;
      update({
        variables: {
          data: dataForUpdate,
          id: itemGetter.get('id').data
        }
      }).then(({
        data,
        errors
      }) => {
        // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
        // which are handled seperately and do not indicate a failure to update the item
        const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
          var _x$path2;

          return ((_x$path2 = x.path) === null || _x$path2 === void 0 ? void 0 : _x$path2.length) === 1;
        });

        if (error) {
          toasts.addToast({
            title: 'Failed to update item',
            tone: 'negative',
            message: error.message
          });
        } else {
          toasts.addToast({
            title: data.item[list.labelField] || data.item.id,
            tone: 'positive',
            message: 'Saved successfully'
          });
          onSave(adminUiUtils.makeDataGetter(data, errors).get('item'));
        }
      }).catch(err => {
        toasts.addToast({
          title: 'Failed to update item',
          tone: 'negative',
          message: err.message
        });
      });
    },
    children: 'Save'
  };
  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
    // which are handled seperately and do not indicate a failure to update the item
    ,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors.filter(x => {
      var _x$path3;

      return ((_x$path3 = x.path) === null || _x$path3 === void 0 ? void 0 : _x$path3.length) === 1;
    })
  }), core.jsx(adminUiUtils.Fields, {
    fieldModes: null,
    fields: fieldsObj,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: React.useCallback(value => {
      setValue(state => ({
        item: state.item,
        value: value(state.value)
      }));
    }, [setValue]),
    value: state.value
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, changedFields.size ? core.jsx(button.Button, saveButtonProps) : core.jsx(tooltip.Tooltip, {
    content: "No fields have been modified so you cannot save changes"
  }, props => core.jsx(button.Button, _extends({}, props, saveButtonProps, {
    // making onClick undefined instead of making the button disabled so the button can be focussed so keyboard users can see the tooltip
    onClick: undefined
  }))), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

/* @jsx jsx */
function InlineCreate({
  list,
  onCancel,
  onCreate,
  fields: fieldPaths,
  selectedFields
}) {
  const toasts = toast.useToasts();
  const fields = useFieldsObj(list, fieldPaths);
  const [createItem, {
    loading,
    error
  }] = apollo.useMutation(apollo.gql`mutation($data: ${list.gqlNames.createInputName}!) {
      item: ${list.gqlNames.createMutationName}(data: $data) {
        ${selectedFields}
    }
  }`);
  const [value, setValue] = React.useState(() => {
    const value = {};
    Object.keys(fields).forEach(fieldPath => {
      value[fieldPath] = {
        kind: 'value',
        value: fields[fieldPath].controller.defaultValue
      };
    });
    return value;
  });
  const invalidFields = adminUiUtils.useInvalidFields(fields, value);
  const [forceValidation, setForceValidation] = React.useState(false);

  const onCreateClick = () => {
    const newForceValidation = invalidFields.size !== 0;
    setForceValidation(newForceValidation);
    if (newForceValidation) return;
    const data = {};
    const allSerializedValues = adminUiUtils.serializeValueToObjByFieldKey(fields, value);
    Object.keys(allSerializedValues).forEach(fieldPath => {
      const {
        controller
      } = fields[fieldPath];
      const serialized = allSerializedValues[fieldPath];

      if (!isDeepEqual__default['default'](serialized, controller.serialize(controller.defaultValue))) {
        Object.assign(data, serialized);
      }
    });
    createItem({
      variables: {
        data
      }
    }).then(({
      data,
      errors
    }) => {
      // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
      // which are handled seperately and do not indicate a failure to update the item
      const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
        var _x$path;

        return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) === 1;
      });

      if (error) {
        toasts.addToast({
          title: 'Failed to create item',
          tone: 'negative',
          message: error.message
        });
      } else {
        toasts.addToast({
          title: data.item[list.labelField] || data.item.id,
          tone: 'positive',
          message: 'Saved successfully'
        });
        onCreate(adminUiUtils.makeDataGetter(data, errors).get('item'));
      }
    }).catch(err => {
      toasts.addToast({
        title: 'Failed to update item',
        tone: 'negative',
        message: err.message
      });
    });
  };

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors
  }), core.jsx(adminUiUtils.Fields, {
    fieldModes: null,
    fields: fields,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: setValue,
    value: value
  }), core.jsx(core.Stack, {
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    isLoading: loading,
    size: "small",
    tone: "positive",
    weight: "bold",
    onClick: onCreateClick
  }, "Create ", list.singular), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

const CardContainer = (_ref) => {
  let {
    mode = 'view'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["mode"]);

  const {
    tones
  } = core.useTheme();
  const tone = tones[mode === 'edit' ? 'active' : mode === 'create' ? 'positive' : 'passive'];
  return core.jsx(core.Box, _extends({
    paddingLeft: "xlarge",
    css: {
      position: 'relative',
      ':before': {
        content: '" "',
        backgroundColor: tone.border,
        borderRadius: 4,
        width: 4,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1
      }
    }
  }, props));
};

function Cards({
  localList,
  field,
  foreignList,
  id,
  value,
  onChange,
  forceValidation
}) {
  var _field$display$inline;

  let selectedFields = [...new Set([...field.display.cardFields, ...(((_field$display$inline = field.display.inlineEdit) === null || _field$display$inline === void 0 ? void 0 : _field$display$inline.fields) || [])])].map(fieldPath => {
    return foreignList.fields[fieldPath].controller.graphqlSelection;
  }).join('\n');

  if (!field.display.cardFields.includes('id')) {
    selectedFields += '\nid';
  }

  if (!field.display.cardFields.includes(foreignList.labelField) && foreignList.labelField !== 'id') {
    selectedFields += `\n${foreignList.labelField}`;
  }

  const {
    items,
    setItems,
    state: itemsState
  } = useItemState({
    selectedFields,
    localList,
    id,
    field
  });
  const client = apollo.useApolloClient();
  const [isLoadingLazyItems, setIsLoadingLazyItems] = React.useState(false);
  const [showConnectItems, setShowConnectItems] = React.useState(false);
  const [hideConnectItemsLabel, setHideConnectItemsLabel] = React.useState('Cancel');
  const isMountedRef = React.useRef(false);
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  });

  if (itemsState.kind === 'loading') {
    return core.jsx("div", null, core.jsx(loading.LoadingDots, {
      label: `Loading items for ${field.label} field`
    }));
  }

  if (itemsState.kind === 'error') {
    return core.jsx("span", {
      css: {
        color: 'red'
      }
    }, itemsState.message);
  }

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, [...value.currentIds].map(id => {
    const itemGetter = items[id];
    return value.itemsBeingEdited.has(id) && onChange !== undefined ? core.jsx(CardContainer, {
      mode: "edit",
      key: id
    }, core.jsx(InlineEdit, {
      list: foreignList,
      fields: field.display.inlineEdit.fields,
      onSave: newItemGetter => {
        setItems(_objectSpread(_objectSpread({}, items), {}, {
          [id]: newItemGetter
        }));
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      },
      selectedFields: selectedFields,
      itemGetter: itemGetter,
      onCancel: () => {
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      }
    })) : core.jsx(CardContainer, {
      mode: "view",
      key: id
    }, core.jsx(core.Stack, {
      gap: "xlarge"
    }, field.display.cardFields.map(fieldPath => {
      const field = foreignList.fields[fieldPath];
      const itemForField = {};

      for (const graphqlField of adminUiUtils.getRootGraphQLFieldsFromFieldController(field.controller)) {
        const fieldGetter = itemGetter.get(graphqlField);

        if (fieldGetter.errors) {
          const errorMessage = fieldGetter.errors[0].message;
          return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), errorMessage);
        }

        itemForField[graphqlField] = fieldGetter.data;
      }

      return core.jsx(field.views.CardValue, {
        key: fieldPath,
        field: field.controller,
        item: itemForField
      });
    })), core.jsx(core.Stack, {
      across: true,
      gap: "small",
      marginTop: "xlarge"
    }, field.display.inlineEdit && onChange !== undefined && core.jsx(button.Button, {
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited: new Set([...value.itemsBeingEdited, id])
        }));
      },
      tone: "active"
    }, "Edit"), field.display.removeMode === 'disconnect' && onChange !== undefined && core.jsx(tooltip.Tooltip, {
      content: "This item will not be deleted. It will only be removed from this field."
    }, props => core.jsx(button.Button, _extends({
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        const currentIds = new Set(value.currentIds);
        currentIds.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          currentIds
        }));
      }
    }, props, {
      tone: "negative"
    }), "Remove")), field.display.linkToItem && core.jsx(button.Button, {
      size: "small",
      weight: "link",
      tone: "active",
      css: {
        textDecoration: 'none'
      },
      as: router.Link,
      href: `/${foreignList.path}/${id}`
    }, "View ", foreignList.singular, " details")));
  }), onChange === undefined ? null : field.display.inlineConnect && showConnectItems ? core.jsx(CardContainer, {
    mode: "edit"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginY: "medium",
    across: true
  }, core.jsx(types_relationship_views_RelationshipSelect_dist_fields.RelationshipSelect, {
    autoFocus: true,
    controlShouldRenderValue: isLoadingLazyItems,
    isDisabled: onChange === undefined,
    list: foreignList,
    isLoading: isLoadingLazyItems,
    placeholder: `Select a ${foreignList.singular}`,
    state: {
      kind: 'many',

      async onChange(options) {
        // TODO: maybe use the extraSelection prop on RelationshipSelect here
        const itemsToFetchAndConnect = [];
        options.forEach(item => {
          if (!value.currentIds.has(item.id)) {
            itemsToFetchAndConnect.push(item.id);
          }
        });

        if (itemsToFetchAndConnect.length) {
          try {
            const {
              data,
              errors
            } = await client.query({
              query: apollo.gql`query ($ids: [ID!]!) {
                      items: ${foreignList.gqlNames.listQueryName}(where: {id_in:$ids}) {
                        ${selectedFields}
                      }
                    }`,
              variables: {
                ids: itemsToFetchAndConnect
              }
            });

            if (isMountedRef.current) {
              const dataGetters = adminUiUtils.makeDataGetter(data, errors);
              const itemsDataGetter = dataGetters.get('items');

              let newItems = _objectSpread({}, items);

              let newCurrentIds = field.many ? new Set(value.currentIds) : new Set();

              if (Array.isArray(itemsDataGetter.data)) {
                itemsDataGetter.data.forEach((item, i) => {
                  if ((item === null || item === void 0 ? void 0 : item.id) != null) {
                    newCurrentIds.add(item.id);
                    newItems[item.id] = itemsDataGetter.get(i);
                  }
                });
              }

              if (newCurrentIds.size) {
                setItems(newItems);
                onChange(_objectSpread(_objectSpread({}, value), {}, {
                  currentIds: newCurrentIds
                }));
                setHideConnectItemsLabel('Done');
              }
            }
          } finally {
            if (isMountedRef.current) {
              setIsLoadingLazyItems(false);
            }
          }
        }
      },

      value: (() => {
        let options = [];
        Object.keys(items).forEach(id => {
          if (value.currentIds.has(id)) {
            options.push({
              id,
              label: id
            });
          }
        });
        return options;
      })()
    }
  }), core.jsx(button.Button, {
    onClick: () => setShowConnectItems(false)
  }, hideConnectItemsLabel))) : value.itemBeingCreated ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(InlineCreate, {
    selectedFields: selectedFields,
    fields: field.display.inlineCreate.fields,
    list: foreignList,
    onCancel: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false
      }));
    },
    onCreate: itemGetter => {
      const id = itemGetter.data.id;
      setItems(_objectSpread(_objectSpread({}, items), {}, {
        [id]: itemGetter
      }));
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false,
        currentIds: field.many ? new Set([...value.currentIds, id]) : new Set([id])
      }));
    }
  })) : field.display.inlineCreate || field.display.inlineConnect ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginTop: "medium",
    across: true
  }, field.display.inlineCreate && core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    tone: "positive",
    onClick: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: true
      }));
    }
  }, "Create ", foreignList.singular), field.display.inlineConnect && core.jsx(button.Button, {
    size: "small",
    weight: "none",
    tone: "passive",
    onClick: () => {
      setShowConnectItems(true);
      setHideConnectItemsLabel('Cancel');
    }
  }, "Link existing ", foreignList.singular))) : null, forceValidation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, "You must finish creating and editing any related ", foreignList.label.toLowerCase(), " before saving the ", localList.singular.toLowerCase()));
}

function LinkToRelatedItems({
  value,
  list
}) {
  var _value$value;

  const commonProps = {
    size: 'small',
    tone: 'active',
    weight: 'link'
  };

  if (value.kind === 'many') {
    return core.jsx(button.Button, _extends({}, commonProps, {
      as: router.Link // What happens when there are 10,000 ids? The URL would be too
      // big, so we arbitrarily limit it to the first 100
      // TODO: we should be able to filter by this, no?
      ,
      href: `/${list.path}?!id_in="${value.value.slice(0, 100).map(({
        id
      }) => id).join(',')}"`
    }), "View related ", list.plural);
  }

  return core.jsx(button.Button, _extends({}, commonProps, {
    as: router.Link,
    href: `/${list.path}/${(_value$value = value.value) === null || _value$value === void 0 ? void 0 : _value$value.id}`
  }), "View ", list.singular, " details");
}

const RelationshipLinkButton = ({
  href,
  children
}) => core.jsx(button.Button, {
  css: {
    padding: 0,
    height: 'auto'
  },
  weight: "link",
  tone: "active",
  as: router.Link,
  href: href
}, children);

const RelationshipDisplay = ({
  list,
  value
}) => {
  if (value.kind === 'many') {
    if (value.value.length) {
      return core.jsx(core.Inline, {
        gap: "small"
      }, value.value.map(i => core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${i.id}`
      }, i.label)));
    } else {
      return core.jsx("div", null, "(No ", list.plural, ")");
    }
  } else {
    if (value.value) {
      return core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${value.value.id}`
      }, value.value.label);
    } else {
      return core.jsx("div", null, "(No ", list.singular, ")");
    }
  }
};

const Field = ({
  field,
  autoFocus,
  value,
  onChange,
  forceValidation
}) => {
  const keystone = context.useKeystone();
  const foreignList = context.useList(field.refListKey);
  const localList = context.useList(field.listKey);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  if (value.kind === 'cards-view') {
    return core.jsx(core.Stack, {
      as: "fieldset",
      gap: "medium"
    }, core.jsx(fields.FieldLegend, null, field.label), core.jsx(Cards, {
      forceValidation: forceValidation,
      field: field,
      id: value.id,
      value: value,
      onChange: onChange,
      foreignList: foreignList,
      localList: localList
    }));
  }

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange ? core.jsx(React.Fragment, null, core.jsx(core.Stack, {
    gap: "medium"
  }, core.jsx(types_relationship_views_RelationshipSelect_dist_fields.RelationshipSelect, {
    controlShouldRenderValue: true,
    autoFocus: autoFocus,
    isDisabled: onChange === undefined,
    list: foreignList,
    state: value.kind === 'many' ? {
      kind: 'many',
      value: value.value,

      onChange(newItems) {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: newItems
        }));
      }

    } : {
      kind: 'one',
      value: value.value,

      onChange(newVal) {
        if (value.kind === 'one') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: newVal
          }));
        }
      }

    }
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, !field.hideCreate && core.jsx(button.Button, {
    size: "small",
    disabled: isDrawerOpen,
    onClick: () => {
      setIsDrawerOpen(true);
    }
  }, "Create related ", foreignList.singular), keystone.authenticatedItem.state === 'authenticated' && keystone.authenticatedItem.listKey === field.refListKey && core.jsx(button.Button, {
    size: "small",
    isDisabled: onChange === undefined,
    onClick: () => {
      if (keystone.authenticatedItem.state === 'authenticated') {
        const val = {
          label: keystone.authenticatedItem.label,
          id: keystone.authenticatedItem.id
        };

        if (value.kind === 'many') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: [...value.value, val]
          }));
        } else {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: val
          }));
        }
      }
    }
  }, value.kind === 'many' ? 'Add ' : 'Set as ', keystone.authenticatedItem.label), !!(value.kind === 'many' ? value.value.length : value.kind === 'one' && value.value) && core.jsx(LinkToRelatedItems, {
    list: foreignList,
    value: value
  }))), core.jsx(modals.DrawerController, {
    isOpen: isDrawerOpen
  }, core.jsx(components.CreateItemDrawer, {
    listKey: foreignList.key,
    onClose: () => {
      setIsDrawerOpen(false);
    },
    onCreate: val => {
      setIsDrawerOpen(false);

      if (value.kind === 'many') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: [...value.value, val]
        }));
      } else if (value.kind === 'one') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: val
        }));
      }
    }
  }))) : core.jsx(RelationshipDisplay, {
    value: value,
    list: foreignList
  }));
};
const Cell = ({
  field,
  item
}) => {
  const list = context.useList(field.refListKey);
  const data = item[field.path];
  const items = (Array.isArray(data) ? data : [data]).filter(item => item);
  const displayItems = items.length < 5 ? items : items.slice(0, 3);
  const overflow = items.length < 5 ? 0 : items.length - 3;
  const {
    colors
  } = core.useTheme();
  const styles = {
    color: colors.foreground,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  };
  return core.jsx(components.CellContainer, null, displayItems.map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(router.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`,
    css: styles
  }, item.label || item.id))), overflow ? `, and ${overflow} more` : null);
};
const CardValue = ({
  field,
  item
}) => {
  const list = context.useList(field.refListKey);
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), (Array.isArray(data) ? data : [data]).filter(item => item).map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(router.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`
  }, item.label || item.id))));
};
const controller = config => {
  return {
    many: config.fieldMeta.many,
    listKey: config.listKey,
    path: config.path,
    label: config.label,
    display: config.fieldMeta.displayMode === 'cards' ? {
      mode: 'cards',
      cardFields: config.fieldMeta.cardFields,
      inlineCreate: config.fieldMeta.inlineCreate,
      inlineEdit: config.fieldMeta.inlineEdit,
      linkToItem: config.fieldMeta.linkToItem,
      removeMode: config.fieldMeta.removeMode,
      inlineConnect: config.fieldMeta.inlineConnect
    } : {
      mode: 'select',
      refLabelField: config.fieldMeta.refLabelField
    },
    refListKey: config.fieldMeta.refListKey,
    graphqlSelection: config.fieldMeta.displayMode === 'cards' ? // TODO: namespace this stuff at the Keystone level
    `${config.path}__id: id
           ${config.path} {
            id
           }` : `${config.path} {
             id
             label: ${config.fieldMeta.refLabelField}
           }`,
    hideCreate: config.fieldMeta.hideCreate,
    defaultValue: config.fieldMeta.many ? {
      kind: 'many',
      initialValue: [],
      value: []
    } : {
      kind: 'one',
      value: null,
      initialValue: null
    },
    deserialize: data => {
      if (config.fieldMeta.displayMode === 'cards') {
        const initialIds = new Set((Array.isArray(data[config.path]) ? data[config.path] : data[config.path] ? [data[config.path]] : []).map(x => x.id));
        return {
          kind: 'cards-view',
          id: data[`${config.path}__id`],
          itemsBeingEdited: new Set(),
          itemBeingCreated: false,
          initialIds,
          currentIds: initialIds
        };
      }

      if (config.fieldMeta.many) {
        let value = (data[config.path] || []).map(x => ({
          id: x.id,
          label: x.label || x.id
        }));
        return {
          kind: 'many',
          initialValue: value,
          value
        };
      }

      let value = data[config.path];

      if (value) {
        value = {
          id: value.id,
          label: value.label || value.id
        };
      }

      return {
        kind: 'one',
        value,
        initialValue: value
      };
    },

    validate(value) {
      return value.kind !== 'cards-view' || value.itemsBeingEdited.size === 0 && !value.itemBeingCreated;
    },

    serialize: state => {
      if (state.kind === 'many') {
        const newAllIds = new Set(state.value.map(x => x.id));
        const initialIds = new Set(state.initialValue.map(x => x.id));
        let disconnect = state.initialValue.filter(x => !newAllIds.has(x.id)).map(x => ({
          id: x.id
        }));
        let connect = state.value.filter(x => !initialIds.has(x.id)).map(x => ({
          id: x.id
        }));

        if (disconnect.length || connect.length) {
          let output = {};

          if (disconnect.length) {
            output.disconnect = disconnect;
          }

          if (connect.length) {
            output.connect = connect;
          }

          return {
            [config.path]: output
          };
        }
      } else if (state.kind === 'one') {
        var _state$initialValue;

        if (state.initialValue && !state.value) {
          return {
            [config.path]: {
              disconnect: {
                id: state.initialValue.id
              }
            }
          };
        } else if (state.value && state.value.id !== ((_state$initialValue = state.initialValue) === null || _state$initialValue === void 0 ? void 0 : _state$initialValue.id)) {
          return {
            [config.path]: {
              connect: {
                id: state.value.id
              }
            }
          };
        }
      } else if (state.kind === 'cards-view') {
        let disconnect = [...state.initialIds].filter(id => !state.currentIds.has(id)).map(id => ({
          id
        }));
        let connect = [...state.currentIds].filter(id => !state.initialIds.has(id)).map(id => ({
          id
        }));

        if (config.fieldMeta.many) {
          if (disconnect.length || connect.length) {
            return {
              [config.path]: {
                connect: connect.length ? connect : undefined,
                disconnect: disconnect.length ? disconnect : undefined
              }
            };
          }
        } else if (connect.length) {
          return {
            [config.path]: {
              connect: connect[0]
            }
          };
        } else if (disconnect.length) {
          return {
            [config.path]: {
              disconnect: disconnect[0]
            }
          };
        }
      }

      return {};
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), field.displayMode === 'select' ? core.jsx(fields.Select, {
  isClearable: true,
  autoFocus: autoFocus,
  options: field.options,
  isDisabled: onChange === undefined,
  onChange: value => {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  },
  value: value,
  portalMenu: true
}) : core.jsx(segmentedControl.SegmentedControl, {
  segments: field.options.map(x => x.label),
  selectedIndex: value ? field.options.findIndex(x => x.value === value.value) : undefined,
  onChange: index => {
    onChange === null || onChange === void 0 ? void 0 : onChange(field.options[index]);
  }
}));
const Cell = ({
  item,
  field,
  linkTo
}) => {
  var _field$options$find;

  let value = item[field.path] + '';
  const label = (_field$options$find = field.options.find(x => x.value === value)) === null || _field$options$find === void 0 ? void 0 : _field$options$find.label;
  return linkTo ? core.jsx(components.CellLink, linkTo, label) : core.jsx(components.CellContainer, null, label);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  var _field$options$find2;

  const label = (_field$options$find2 = field.options.find(x => x.value === item[field.path])) === null || _field$options$find2 === void 0 ? void 0 : _field$options$find2.label;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), label);
};
const controller = config => {
  const optionsWithStringValues = config.fieldMeta.options.map(x => ({
    label: x.label,
    value: x.value.toString()
  }));
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: null,
    dataType: config.fieldMeta.dataType,
    displayMode: config.fieldMeta.displayMode,
    options: optionsWithStringValues,
    deserialize: data => {
      for (const option of config.fieldMeta.options) {
        if (option.value === data[config.path]) {
          return {
            label: option.label,
            value: option.value.toString()
          };
        }
      }

      return null;
    },
    serialize: value => {
      var _value$value;

      return {
        [config.path]: (_value$value = value === null || value === void 0 ? void 0 : value.value) !== null && _value$value !== void 0 ? _value$value : null
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(fields.MultiSelect, {
          onChange: props.onChange,
          options: optionsWithStringValues,
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value: options
      }) => {
        const inverted = type === 'not_matches';

        if (!options.length) {
          return {
            [`${config.path}${inverted ? '_not' : ''}`]: null
          };
        }

        const isMulti = options.length > 1;
        let key = config.path;

        if (isMulti && inverted) {
          key = `${config.path}_not_in`;
        } else if (isMulti) {
          key = `${config.path}_in`;
        } else if (inverted) {
          key = `${config.path}_not`;
        }

        const value = isMulti ? options.map(x => x.value) : options[0].value;
        return {
          [key]: value
        };
      },

      Label({
        type,
        value
      }) {
        if (!value.length) {
          return type === 'not_matches' ? `is set` : `has no value`;
        }

        if (value.length > 1) {
          const values = value.map(i => i.label).join(', ');
          return type === 'not_matches' ? `is not in [${values}]` : `is in [${values}]`;
        }

        const optionLabel = value[0].label;
        return type === 'not_matches' ? `is not ${optionLabel}` : `is ${optionLabel}`;
      },

      types: {
        matches: {
          label: 'Matches',
          initialValue: []
        },
        not_matches: {
          label: 'Does not match',
          initialValue: []
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? field.displayMode === 'textarea' ? core.jsx(fields.TextArea, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    displayMode: config.fieldMeta.displayMode,
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'string' ? value : '';
    },
    serialize: value => ({
      [config.path]: value
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is_i' ? `${config.path}_i` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label,
        value
      }) {
        return `${label.toLowerCase()}: "${value}"`;
      },

      types: {
        contains_i: {
          label: 'Contains',
          initialValue: ''
        },
        not_contains_i: {
          label: 'Does not contain',
          initialValue: ''
        },
        is_i: {
          label: 'Is exactly',
          initialValue: ''
        },
        not_i: {
          label: 'Is not exactly',
          initialValue: ''
        },
        starts_with_i: {
          label: 'Starts with',
          initialValue: ''
        },
        not_starts_with_i: {
          label: 'Does not start with',
          initialValue: ''
        },
        ends_with_i: {
          label: 'Ends with',
          initialValue: ''
        },
        not_ends_with_i: {
          label: 'Does not end with',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var dateFns = __webpack_require__(/*! date-fns */ "date-fns");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

const getTime = timeValue => {
  if (!timeValue) return [0, 0];
  return timeValue.split(':').map(n => Number(n));
};

function isValidDate(date) {
  if (!date) return false;
  return Boolean(dateFns.parseISO(date).toISOString());
}
function isValidTime(time) {
  if (!time) {
    return false;
  }

  return dateFns.isValid(dateFns.parse(time, 'HH:mm', new Date()));
}
function isValidISO(value) {
  try {
    // toISOString converts our string into zulu time
    // instead of checking for the timestamp to be specifically in zulu time
    // we relax the validation here a little, to just be a valid ISO string.
    return Boolean(dateFns.parseISO(constructTimestamp(value)).toISOString());
  } catch (err) {
    return false;
  }
}
function constructTimestamp({
  dateValue,
  timeValue
}) {
  let formattedDate = new Date(dateValue);
  const [hours, minutes] = getTime(timeValue);
  formattedDate.setHours(hours);
  formattedDate.setMinutes(minutes);
  return dateFns.formatISO(formattedDate);
}
function deconstructTimestamp(value) {
  return {
    dateValue: value,
    timeValue: resolveInitialTimeValue(value)
  };
}
function formatOutput(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
function resolveInitialTimeValue(value, defaultValue) {
  const date = value || defaultValue;
  if (!date) return '';
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

const TimePicker = ({
  autoFocus,
  onBlur,
  disabled,
  onChange,
  format = '24hr',
  value
}) => {
  return core.jsx(fields.TextInput, {
    autoFocus: autoFocus,
    maxLength: format === '24hr' ? 5 : 7,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    placeholder: format === '24hr' ? '00:00' : '00:00am',
    value: value
  });
};

const Field = ({
  field,
  value,
  onChange,
  forceValidation
}) => {
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const showValidation = touchedFirstInput && touchedSecondInput || forceValidation;

  const showDateError = dateValue => {
    if (!dateValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a date value.");
    }

    return !isValidDate(dateValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Incorrect date value");
  };

  const showTimeError = timeValue => {
    if (!timeValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a time value.");
    }

    return !isValidTime(timeValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Time must be in the form HH:mm");
  };

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(core.Stack, null, core.jsx(core.Inline, {
    gap: "small"
  }, core.jsx(core.Stack, null, core.jsx(fields.DatePicker, {
    onUpdate: date => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: date || ''
      }));
    },
    onClear: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: ''
      }));
    },
    onBlur: () => setTouchedFirstInput(true),
    value: value.dateValue
  }), showValidation && showDateError(value.dateValue)), core.jsx(core.Stack, null, core.jsx(TimePicker, {
    onBlur: () => setTouchedSecondInput(true),
    disabled: onChange === undefined,
    format: "24hr",
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      timeValue: event.target.value
    })),
    value: value.timeValue || ''
  }), showValidation && showTimeError(value.timeValue)))) : isValidISO(value) ? formatOutput(constructTimestamp(value)) : '');
};
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path];
  return linkTo ? core.jsx(components.CellLink, linkTo, formatOutput(value)) : core.jsx(components.CellContainer, null, formatOutput(value));
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      dateValue: '',
      timeValue: ''
    },
    deserialize: data => {
      const value = data[config.path];

      if (value) {
        return deconstructTimestamp(value);
      }

      return {
        dateValue: '',
        timeValue: ''
      };
    },
    serialize: ({
      dateValue,
      timeValue
    }) => {
      if (dateValue && timeValue && isValidISO({
        dateValue,
        timeValue
      })) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue
        });
        return {
          [config.path]: formattedDate
        };
      }

      return {
        [config.path]: null
      };
    },

    validate({
      dateValue,
      timeValue
    }) {
      if (!dateValue && !timeValue) return true;
      if (!dateValue) return false;
      if (!timeValue) return false;
      return isValidISO({
        dateValue,
        timeValue
      });
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var React = __webpack_require__(/*! react */ "react");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// but I'd like to present it as best as possible.
// ToDo: Better presentation for more types of data

const stringify = data => {
  const omitTypename = (key, value) => key === '__typename' ? undefined : value;

  const dataWithoutTypename = JSON.parse(JSON.stringify(data), omitTypename);
  return JSON.stringify(dataWithoutTypename, null, 2);
};

function PrettyData({
  data
}) {
  if (!data) return null;
  let prettyData = '';
  if (typeof data === 'string') prettyData = data;else if (typeof data === 'number') prettyData = data;else if (typeof data === 'object') {
    prettyData = /*#__PURE__*/React__default['default'].createElement("pre", null, stringify(data));
  } else {
    prettyData = /*#__PURE__*/React__default['default'].createElement("pre", null, stringify(data));
  }
  return /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, prettyData);
}

/* @jsx jsx */
const Field = ({
  field,
  value
}) => value === createViewValue ? null : core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), core.jsx(PrettyData, {
  data: value
}));
const Cell = ({
  item,
  field
}) => {
  return core.jsx(PrettyData, {
    data: item[field.path]
  });
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), core.jsx(PrettyData, {
    data: item[field.path]
  }));
};
const createViewValue = Symbol('create view virtual field value');
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}${config.fieldMeta.graphQLReturnFragment}`,
    defaultValue: createViewValue,
    deserialize: data => {
      return data[config.path];
    },
    serialize: () => ({})
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /Users/KIM/Documents/react_projects/Advanced-React-master/sick-fits/backend/node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\nvar core = __webpack_require__(/*! @keystone-ui/core */ \"@keystone-ui/core\");\nvar fields = __webpack_require__(/*! @keystone-ui/fields */ \"@keystone-ui/fields\");\nvar React = __webpack_require__(/*! react */ \"react\");\n\nfunction _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }\n\nvar React__default = /*#__PURE__*/_interopDefault(React);\n\n// but I'd like to present it as best as possible.\n// ToDo: Better presentation for more types of data\n\nconst stringify = data => {\n  const omitTypename = (key, value) => key === '__typename' ? undefined : value;\n\n  const dataWithoutTypename = JSON.parse(JSON.stringify(data), omitTypename);\n  return JSON.stringify(dataWithoutTypename, null, 2);\n};\n\nfunction PrettyData({\n  data\n}) {\n  if (!data) return null;\n  let prettyData = '';\n  if (typeof data === 'string') prettyData = data;else if (typeof data === 'number') prettyData = data;else if (typeof data === 'object') {\n    prettyData = /*#__PURE__*/React__default['default'].createElement(\"pre\", null, stringify(data));\n  } else {\n    prettyData = /*#__PURE__*/React__default['default'].createElement(\"pre\", null, stringify(data));\n  }\n  return /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, prettyData);\n}\n\n/* @jsx jsx */\nconst Field = ({\n  field,\n  value\n}) => value === createViewValue ? null : core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), core.jsx(PrettyData, {\n  data: value\n}));\nconst Cell = ({\n  item,\n  field\n}) => {\n  return core.jsx(PrettyData, {\n    data: item[field.path]\n  });\n};\nconst CardValue = ({\n  item,\n  field\n}) => {\n  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), core.jsx(PrettyData, {\n    data: item[field.path]\n  }));\n};\nconst createViewValue = Symbol('create view virtual field value');\nconst controller = config => {\n  return {\n    path: config.path,\n    label: config.label,\n    graphqlSelection: `${config.path}${config.fieldMeta.graphQLReturnFragment}`,\n    defaultValue: createViewValue,\n    deserialize: data => {\n      return data[config.path];\n    },\n    serialize: () => ({})\n  };\n};\n\nexports.CardValue = CardValue;\nexports.Cell = Cell;\nexports.Field = Field;\nexports.controller = controller;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL0tJTS9Eb2N1bWVudHMvcmVhY3RfcHJvamVjdHMvQWR2YW5jZWQtUmVhY3QtbWFzdGVyL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdmlydHVhbC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzPzg5MGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQThDLGNBQWM7O0FBRTVELFdBQVcsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLGdEQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsb0JBQU87O0FBRTNCLDhCQUE4QixpQ0FBaUMsZ0JBQWdCOztBQUUvRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGtEQUFrRCxxREFBcUQ7QUFDdkc7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWSxFQUFFLHVDQUF1QztBQUM5RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy92aXJ0dWFsL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIFJlYWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG5cbi8vIGJ1dCBJJ2QgbGlrZSB0byBwcmVzZW50IGl0IGFzIGJlc3QgYXMgcG9zc2libGUuXG4vLyBUb0RvOiBCZXR0ZXIgcHJlc2VudGF0aW9uIGZvciBtb3JlIHR5cGVzIG9mIGRhdGFcblxuY29uc3Qgc3RyaW5naWZ5ID0gZGF0YSA9PiB7XG4gIGNvbnN0IG9taXRUeXBlbmFtZSA9IChrZXksIHZhbHVlKSA9PiBrZXkgPT09ICdfX3R5cGVuYW1lJyA/IHVuZGVmaW5lZCA6IHZhbHVlO1xuXG4gIGNvbnN0IGRhdGFXaXRob3V0VHlwZW5hbWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpLCBvbWl0VHlwZW5hbWUpO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YVdpdGhvdXRUeXBlbmFtZSwgbnVsbCwgMik7XG59O1xuXG5mdW5jdGlvbiBQcmV0dHlEYXRhKHtcbiAgZGF0YVxufSkge1xuICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuICBsZXQgcHJldHR5RGF0YSA9ICcnO1xuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSBwcmV0dHlEYXRhID0gZGF0YTtlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHByZXR0eURhdGEgPSBkYXRhO2Vsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgIHByZXR0eURhdGEgPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFwicHJlXCIsIG51bGwsIHN0cmluZ2lmeShkYXRhKSk7XG4gIH0gZWxzZSB7XG4gICAgcHJldHR5RGF0YSA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXCJwcmVcIiwgbnVsbCwgc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0WydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcHJldHR5RGF0YSk7XG59XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZVxufSkgPT4gdmFsdWUgPT09IGNyZWF0ZVZpZXdWYWx1ZSA/IG51bGwgOiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGNvcmUuanN4KFByZXR0eURhdGEsIHtcbiAgZGF0YTogdmFsdWVcbn0pKTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goUHJldHR5RGF0YSwge1xuICAgIGRhdGE6IGl0ZW1bZmllbGQucGF0aF1cbiAgfSk7XG59O1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgY29yZS5qc3goUHJldHR5RGF0YSwge1xuICAgIGRhdGE6IGl0ZW1bZmllbGQucGF0aF1cbiAgfSkpO1xufTtcbmNvbnN0IGNyZWF0ZVZpZXdWYWx1ZSA9IFN5bWJvbCgnY3JlYXRlIHZpZXcgdmlydHVhbCBmaWVsZCB2YWx1ZScpO1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBgJHtjb25maWcucGF0aH0ke2NvbmZpZy5maWVsZE1ldGEuZ3JhcGhRTFJldHVybkZyYWdtZW50fWAsXG4gICAgZGVmYXVsdFZhbHVlOiBjcmVhdGVWaWV3VmFsdWUsXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFbY29uZmlnLnBhdGhdO1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiAoKSA9PiAoe30pXG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js\n");

/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/KIM/Documents/react_projects/Advanced-React-master/sick-fits/backend/node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ \"../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL0tJTS9Eb2N1bWVudHMvcmVhY3RfcHJvamVjdHMvQWR2YW5jZWQtUmVhY3QtbWFzdGVyL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdmlydHVhbC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanM/NWE3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyxnSEFBcUI7QUFDaEQiLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy92aXJ0dWFsL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/mongoId/views */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/text/views */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/password/views */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/relationship/views */ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/timestamp/views */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/select/views */ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/integer/views */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/cloudinary/views */ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js");
/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/virtual/views */ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__);













const adminConfig = {};
const fieldViews = {
  view1dd14475: _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__,
  viewd511c4d5: _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__,
  view8fd27854: _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__,
  viewdca94151: _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__,
  view3d102dd9: _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__,
  view6fe3c4de: _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__,
  viewc4768746: _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__,
  viewc39a39fa: _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__,
  view1662f201: _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__
};
const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'query',
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'keystone',
          loc: {
            start: 22,
            end: 30
          }
        },
        arguments: [],
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'adminMeta',
              loc: {
                start: 39,
                end: 48
              }
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'lists',
                  loc: {
                    start: 59,
                    end: 64
                  }
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [{
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'key',
                      loc: {
                        start: 77,
                        end: 80
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 77,
                      end: 80
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'isHidden',
                      loc: {
                        start: 91,
                        end: 99
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 91,
                      end: 99
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'fields',
                      loc: {
                        start: 110,
                        end: 116
                      }
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [{
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'path',
                          loc: {
                            start: 131,
                            end: 135
                          }
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 131,
                          end: 135
                        }
                      }, {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'createView',
                          loc: {
                            start: 148,
                            end: 158
                          }
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'fieldMode',
                              loc: {
                                start: 175,
                                end: 184
                              }
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 175,
                              end: 184
                            }
                          }],
                          loc: {
                            start: 159,
                            end: 198
                          }
                        },
                        loc: {
                          start: 148,
                          end: 198
                        }
                      }],
                      loc: {
                        start: 117,
                        end: 210
                      }
                    },
                    loc: {
                      start: 110,
                      end: 210
                    }
                  }],
                  loc: {
                    start: 65,
                    end: 220
                  }
                },
                loc: {
                  start: 59,
                  end: 220
                }
              }],
              loc: {
                start: 49,
                end: 228
              }
            },
            loc: {
              start: 39,
              end: 228
            }
          }],
          loc: {
            start: 31,
            end: 234
          }
        },
        loc: {
          start: 22,
          end: 234
        }
      }, {
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'authenticatedItem'
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'InlineFragment',
            typeCondition: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User'
              }
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id'
                }
              }, {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name'
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__["Core"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__["KeystoneProvider"], {
    adminConfig: adminConfig,
    adminMetaHash: "z9nuzj",
    fieldViews: fieldViews,
    lazyMetadataQuery: lazyMetadataQuery
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__["ErrorBoundary"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps))));
}
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-next/admin-ui/context */ \"@keystone-next/admin-ui/context\");\n/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-next/admin-ui/components */ \"@keystone-next/admin-ui/components\");\n/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @keystone-ui/core */ \"@keystone-ui/core\");\n/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/mongoId/views */ \"../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js\");\n/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/text/views */ \"../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js\");\n/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/password/views */ \"../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js\");\n/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/relationship/views */ \"../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js\");\n/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/timestamp/views */ \"../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js\");\n/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/select/views */ \"../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js\");\n/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/integer/views */ \"../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js\");\n/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/cloudinary/views */ \"../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js\");\n/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/virtual/views */ \"../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js\");\n/* harmony import */ var _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst adminConfig = {};\nconst fieldViews = {\n  viewc4af6ed7: _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__,\n  viewedbc19a8: _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__,\n  viewff31cbb6: _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__,\n  view2f9c3075: _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__,\n  view37163a3d: _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__,\n  viewbf908dc6: _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__,\n  view8632f765: _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__,\n  view83400b35: _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__,\n  view3099f692: _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__\n};\nconst lazyMetadataQuery = {\n  kind: 'Document',\n  definitions: [{\n    kind: 'OperationDefinition',\n    operation: 'query',\n    selectionSet: {\n      kind: 'SelectionSet',\n      selections: [{\n        kind: 'Field',\n        name: {\n          kind: 'Name',\n          value: 'keystone',\n          loc: {\n            start: 22,\n            end: 30\n          }\n        },\n        arguments: [],\n        directives: [],\n        selectionSet: {\n          kind: 'SelectionSet',\n          selections: [{\n            kind: 'Field',\n            name: {\n              kind: 'Name',\n              value: 'adminMeta',\n              loc: {\n                start: 39,\n                end: 48\n              }\n            },\n            arguments: [],\n            directives: [],\n            selectionSet: {\n              kind: 'SelectionSet',\n              selections: [{\n                kind: 'Field',\n                name: {\n                  kind: 'Name',\n                  value: 'lists',\n                  loc: {\n                    start: 59,\n                    end: 64\n                  }\n                },\n                arguments: [],\n                directives: [],\n                selectionSet: {\n                  kind: 'SelectionSet',\n                  selections: [{\n                    kind: 'Field',\n                    name: {\n                      kind: 'Name',\n                      value: 'key',\n                      loc: {\n                        start: 77,\n                        end: 80\n                      }\n                    },\n                    arguments: [],\n                    directives: [],\n                    loc: {\n                      start: 77,\n                      end: 80\n                    }\n                  }, {\n                    kind: 'Field',\n                    name: {\n                      kind: 'Name',\n                      value: 'isHidden',\n                      loc: {\n                        start: 91,\n                        end: 99\n                      }\n                    },\n                    arguments: [],\n                    directives: [],\n                    loc: {\n                      start: 91,\n                      end: 99\n                    }\n                  }, {\n                    kind: 'Field',\n                    name: {\n                      kind: 'Name',\n                      value: 'fields',\n                      loc: {\n                        start: 110,\n                        end: 116\n                      }\n                    },\n                    arguments: [],\n                    directives: [],\n                    selectionSet: {\n                      kind: 'SelectionSet',\n                      selections: [{\n                        kind: 'Field',\n                        name: {\n                          kind: 'Name',\n                          value: 'path',\n                          loc: {\n                            start: 131,\n                            end: 135\n                          }\n                        },\n                        arguments: [],\n                        directives: [],\n                        loc: {\n                          start: 131,\n                          end: 135\n                        }\n                      }, {\n                        kind: 'Field',\n                        name: {\n                          kind: 'Name',\n                          value: 'createView',\n                          loc: {\n                            start: 148,\n                            end: 158\n                          }\n                        },\n                        arguments: [],\n                        directives: [],\n                        selectionSet: {\n                          kind: 'SelectionSet',\n                          selections: [{\n                            kind: 'Field',\n                            name: {\n                              kind: 'Name',\n                              value: 'fieldMode',\n                              loc: {\n                                start: 175,\n                                end: 184\n                              }\n                            },\n                            arguments: [],\n                            directives: [],\n                            loc: {\n                              start: 175,\n                              end: 184\n                            }\n                          }],\n                          loc: {\n                            start: 159,\n                            end: 198\n                          }\n                        },\n                        loc: {\n                          start: 148,\n                          end: 198\n                        }\n                      }],\n                      loc: {\n                        start: 117,\n                        end: 210\n                      }\n                    },\n                    loc: {\n                      start: 110,\n                      end: 210\n                    }\n                  }],\n                  loc: {\n                    start: 65,\n                    end: 220\n                  }\n                },\n                loc: {\n                  start: 59,\n                  end: 220\n                }\n              }],\n              loc: {\n                start: 49,\n                end: 228\n              }\n            },\n            loc: {\n              start: 39,\n              end: 228\n            }\n          }],\n          loc: {\n            start: 31,\n            end: 234\n          }\n        },\n        loc: {\n          start: 22,\n          end: 234\n        }\n      }, {\n        kind: 'Field',\n        name: {\n          kind: 'Name',\n          value: 'authenticatedItem'\n        },\n        selectionSet: {\n          kind: 'SelectionSet',\n          selections: [{\n            kind: 'InlineFragment',\n            typeCondition: {\n              kind: 'NamedType',\n              name: {\n                kind: 'Name',\n                value: 'User'\n              }\n            },\n            selectionSet: {\n              kind: 'SelectionSet',\n              selections: [{\n                kind: 'Field',\n                name: {\n                  kind: 'Name',\n                  value: 'id'\n                }\n              }, {\n                kind: 'Field',\n                name: {\n                  kind: 'Name',\n                  value: 'name'\n                }\n              }]\n            }\n          }]\n        }\n      }]\n    }\n  }]\n};\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Core\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__[\"KeystoneProvider\"], {\n    adminConfig: adminConfig,\n    adminMetaHash: \"1hnnifs\",\n    fieldViews: fieldViews,\n    lazyMetadataQuery: lazyMetadataQuery\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__[\"ErrorBoundary\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiYWRtaW5Db25maWciLCJmaWVsZFZpZXdzIiwidmlld2M0YWY2ZWQ3Iiwidmlld2VkYmMxOWE4Iiwidmlld2ZmMzFjYmI2IiwidmlldzJmOWMzMDc1IiwidmlldzM3MTYzYTNkIiwidmlld2JmOTA4ZGM2Iiwidmlldzg2MzJmNzY1IiwidmlldzgzNDAwYjM1IiwidmlldzMwOTlmNjkyIiwibGF6eU1ldGFkYXRhUXVlcnkiLCJraW5kIiwiZGVmaW5pdGlvbnMiLCJvcGVyYXRpb24iLCJzZWxlY3Rpb25TZXQiLCJzZWxlY3Rpb25zIiwibmFtZSIsInZhbHVlIiwibG9jIiwic3RhcnQiLCJlbmQiLCJhcmd1bWVudHMiLCJkaXJlY3RpdmVzIiwidHlwZUNvbmRpdGlvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBRyxFQUFwQjtBQUVBLE1BQU1DLFVBQVUsR0FBRztBQUNqQkMsbUdBRGlCO0FBRWpCQyxnR0FGaUI7QUFHakJDLG9HQUhpQjtBQUlqQkMsd0dBSmlCO0FBS2pCQyxxR0FMaUI7QUFNakJDLGtHQU5pQjtBQU9qQkMsb0dBUGlCO0FBUWpCQywwRkFSaUI7QUFTakJDLG9HQUFZQTtBQVRLLENBQW5CO0FBWUEsTUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJDLE1BQUksRUFBRSxVQURrQjtBQUV4QkMsYUFBVyxFQUFFLENBQ1g7QUFDRUQsUUFBSSxF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VSxFQUFFLENBQ1Y7QUFBRUosb0JBQUksRUFBRSxPQUFSO0FBQWlCSyxvQkFBSSxFQUFFO0FBQUVMLHNCQUFJLEVBQUUsTUFBUjtBQUFnQk0sdUJBQUssRUFBRTtBQUF2QjtBQUF2QixlQURVLEVBRVY7QUFBRU4sb0JBQUksRUFBRSxPQUFSO0FBQWlCSyxvQkFBSSxFQUFFO0FBQUVMLHNCQUFJLEVBQUUsTUFBUjtBQUFnQk0sdUJBQUssRUFBRTtBQUF2QjtBQUF2QixlQUZVO0FBRkE7QUFOaEIsV0FEVTtBQUZBO0FBSGhCLE9BbElVO0FBRkE7QUFIaEIsR0FEVztBQUZXLENBQTFCO0FBdUtlLFNBQVNPLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNwRCxzQkFDRSwyREFBQyxzREFBRCxxQkFDRSwyREFBQyxnRkFBRDtBQUNFLGVBQVcsRUFBRTNCLFdBRGY7QUFFRSxpQkFBYSxFQUFDLFNBRmhCO0FBR0UsY0FBVSxFQUFFQyxVQUhkO0FBSUUscUJBQWlCLEVBQUVVO0FBSnJCLGtCQU1FLDJEQUFDLGdGQUFELHFCQUNFLDJEQUFDLFNBQUQsRUFBZWdCLFNBQWYsQ0FERixDQU5GLENBREYsQ0FERjtBQWNEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEtleXN0b25lUHJvdmlkZXIgfSBmcm9tICdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb250ZXh0JztcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IENvcmUgfSBmcm9tICdAa2V5c3RvbmUtdWkvY29yZSc7XG5cbmltcG9ydCAqIGFzIHZpZXdjNGFmNmVkNyBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlld2VkYmMxOWE4IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGV4dC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3ZmYzMWNiYjYgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3MmY5YzMwNzUgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9yZWxhdGlvbnNoaXAvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzM3MTYzYTNkIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXdiZjkwOGRjNiBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3ODYzMmY3NjUgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9pbnRlZ2VyL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXc4MzQwMGIzNSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvY2xvdWRpbmFyeS92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3MzA5OWY2OTIgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy92aXJ0dWFsL3ZpZXdzJztcblxuY29uc3QgYWRtaW5Db25maWcgPSB7fTtcblxuY29uc3QgZmllbGRWaWV3cyA9IHtcbiAgdmlld2M0YWY2ZWQ3LFxuICB2aWV3ZWRiYzE5YTgsXG4gIHZpZXdmZjMxY2JiNixcbiAgdmlldzJmOWMzMDc1LFxuICB2aWV3MzcxNjNhM2QsXG4gIHZpZXdiZjkwOGRjNixcbiAgdmlldzg2MzJmNzY1LFxuICB2aWV3ODM0MDBiMzUsXG4gIHZpZXczMDk5ZjY5Mixcbn07XG5cbmNvbnN0IGxhenlNZXRhZGF0YVF1ZXJ5ID0ge1xuICBraW5kOiAnRG9jdW1lbnQnLFxuICBkZWZpbml0aW9uczogW1xuICAgIHtcbiAgICAgIGtpbmQ6ICdPcGVyYXRpb25EZWZpbml0aW9uJyxcbiAgICAgIG9wZXJhdGlvbjogJ3F1ZXJ5JyxcbiAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdrZXlzdG9uZScsXG4gICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMjIsIGVuZDogMzAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYWRtaW5NZXRhJyxcbiAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAzOSwgZW5kOiA0OCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdsaXN0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNTksIGVuZDogNjQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAna2V5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA3NywgZW5kOiA4MCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNzcsIGVuZDogODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdpc0hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogOTEsIGVuZDogOTkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDkxLCBlbmQ6IDk5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmllbGRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTAsIGVuZDogMTE2IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3BhdGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDEzMSwgZW5kOiAxMzUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDEzMSwgZW5kOiAxMzUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdjcmVhdGVWaWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNDgsIGVuZDogMTU4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpZWxkTW9kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTc1LCBlbmQ6IDE4NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTc1LCBlbmQ6IDE4NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTU5LCBlbmQ6IDE5OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTQ4LCBlbmQ6IDE5OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTE3LCBlbmQ6IDIxMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTEwLCBlbmQ6IDIxMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNjUsIGVuZDogMjIwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA1OSwgZW5kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDQ5LCBlbmQ6IDIyOCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzksIGVuZDogMjI4IH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAzMSwgZW5kOiAyMzQgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDIyLCBlbmQ6IDIzNCB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ2F1dGhlbnRpY2F0ZWRJdGVtJyB9LFxuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2luZDogJ0lubGluZUZyYWdtZW50JyxcbiAgICAgICAgICAgICAgICAgIHR5cGVDb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWVkVHlwZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ1VzZXInIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgeyBraW5kOiAnRmllbGQnLCBuYW1lOiB7IGtpbmQ6ICdOYW1lJywgdmFsdWU6ICdpZCcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsga2luZDogJ0ZpZWxkJywgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnbmFtZScgfSB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb3JlPlxuICAgICAgPEtleXN0b25lUHJvdmlkZXJcbiAgICAgICAgYWRtaW5Db25maWc9e2FkbWluQ29uZmlnfVxuICAgICAgICBhZG1pbk1ldGFIYXNoPVwiMWhubmlmc1wiXG4gICAgICAgIGZpZWxkVmlld3M9e2ZpZWxkVmlld3N9XG4gICAgICAgIGxhenlNZXRhZGF0YVF1ZXJ5PXtsYXp5TWV0YWRhdGFRdWVyeX1cbiAgICAgID5cbiAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICA8L0tleXN0b25lUHJvdmlkZXI+XG4gICAgPC9Db3JlPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");
>>>>>>> 174ad752374eaafa0d3858c41c3a9d1cc18ddf1b

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@keystone-next/admin-ui-utils":
/*!************************************************!*\
  !*** external "@keystone-next/admin-ui-utils" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui-utils");

/***/ }),

/***/ "@keystone-next/admin-ui/apollo":
/*!*************************************************!*\
  !*** external "@keystone-next/admin-ui/apollo" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/apollo");

/***/ }),

/***/ "@keystone-next/admin-ui/components":
/*!*****************************************************!*\
  !*** external "@keystone-next/admin-ui/components" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/components");

/***/ }),

/***/ "@keystone-next/admin-ui/context":
/*!**************************************************!*\
  !*** external "@keystone-next/admin-ui/context" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/context");

/***/ }),

/***/ "@keystone-next/admin-ui/router":
/*!*************************************************!*\
  !*** external "@keystone-next/admin-ui/router" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/router");

/***/ }),

/***/ "@keystone-ui/button":
/*!**************************************!*\
  !*** external "@keystone-ui/button" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/button");

/***/ }),

/***/ "@keystone-ui/core":
/*!************************************!*\
  !*** external "@keystone-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/core");

/***/ }),

/***/ "@keystone-ui/fields":
/*!**************************************!*\
  !*** external "@keystone-ui/fields" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/fields");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeIcon":
/*!***************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeIcon" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeOffIcon":
/*!******************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeOffIcon" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeOffIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/XIcon":
/*!*************************************************!*\
  !*** external "@keystone-ui/icons/icons/XIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/XIcon");

/***/ }),

/***/ "@keystone-ui/loading":
/*!***************************************!*\
  !*** external "@keystone-ui/loading" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/loading");

/***/ }),

/***/ "@keystone-ui/modals":
/*!**************************************!*\
  !*** external "@keystone-ui/modals" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/modals");

/***/ }),

/***/ "@keystone-ui/pill":
/*!************************************!*\
  !*** external "@keystone-ui/pill" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/pill");

/***/ }),

/***/ "@keystone-ui/segmented-control":
/*!*************************************************!*\
  !*** external "@keystone-ui/segmented-control" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/segmented-control");

/***/ }),

/***/ "@keystone-ui/toast":
/*!*************************************!*\
  !*** external "@keystone-ui/toast" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/toast");

/***/ }),

/***/ "@keystone-ui/tooltip":
/*!***************************************!*\
  !*** external "@keystone-ui/tooltip" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/tooltip");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "fast-deep-equal":
/*!**********************************!*\
  !*** external "fast-deep-equal" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),

/***/ "intersection-observer":
/*!****************************************!*\
  !*** external "intersection-observer" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMva2ltL0Rlc2t0b3AvanMvc2lja2ZpdHMtYmFja2VuZC1WMi9zaWNrZml0cy1iYWNrZW5kL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2Nsb3VkaW5hcnkvdmlld3MvZGlzdC9jbG91ZGluYXJ5LmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvY2xvdWRpbmFyeS92aWV3cy9kaXN0L2Nsb3VkaW5hcnkuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9pbnRlZ2VyL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL2ludGVnZXIvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9tb25nb0lkL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cy9SZWxhdGlvbnNoaXBTZWxlY3QvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMva2ltL0Rlc2t0b3AvanMvc2lja2ZpdHMtYmFja2VuZC1WMi9zaWNrZml0cy1iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcmVsYXRpb25zaGlwL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9zZWxlY3Qvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90ZXh0L3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RleHQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90aW1lc3RhbXAvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMva2ltL0Rlc2t0b3AvanMvc2lja2ZpdHMtYmFja2VuZC1WMi9zaWNrZml0cy1iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMva2ltL0Rlc2t0b3AvanMvc2lja2ZpdHMtYmFja2VuZC1WMi9zaWNrZml0cy1iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdmlydHVhbC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy92aXJ0dWFsL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpLXV0aWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvZmllbGRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZUljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllT2ZmSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9YSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9sb2FkaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL21vZGFsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9waWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3RvYXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3Rvb2x0aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZhc3QtZGVlcC1lcXVhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludGVyc2VjdGlvbi1vYnNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiYWRtaW5Db25maWciLCJmaWVsZFZpZXdzIiwidmlldzFkZDE0NDc1Iiwidmlld2Q1MTFjNGQ1IiwidmlldzhmZDI3ODU0Iiwidmlld2RjYTk0MTUxIiwidmlldzNkMTAyZGQ5IiwidmlldzZmZTNjNGRlIiwidmlld2M0NzY4NzQ2Iiwidmlld2MzOWEzOWZhIiwidmlldzE2NjJmMjAxIiwibGF6eU1ldGFkYXRhUXVlcnkiLCJraW5kIiwiZGVmaW5pdGlvbnMiLCJvcGVyYXRpb24iLCJzZWxlY3Rpb25TZXQiLCJzZWxlY3Rpb25zIiwibmFtZSIsInZhbHVlIiwibG9jIiwic3RhcnQiLCJlbmQiLCJhcmd1bWVudHMiLCJkaXJlY3RpdmVzIiwidHlwZUNvbmRpdGlvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6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QTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxZQUFZO0FBQzFFO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7O0FDcE5ELDBEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDI7IiwidmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSByZXF1aXJlKFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcblxuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cblxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlXCIpO1xuXG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Qcm9wZXJ0eUtleTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIHBpbGwgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvcGlsbCcpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcblxuZnVuY3Rpb24gdXNlT2JqZWN0VVJMKGZpbGVEYXRhKSB7XG4gIGxldCBbb2JqZWN0VVJMLCBzZXRPYmplY3RVUkxdID0gcmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgcmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZmlsZURhdGEpIHtcbiAgICAgIGxldCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVEYXRhKTtcbiAgICAgIHNldE9iamVjdFVSTCh1cmwpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtmaWxlRGF0YV0pO1xuICByZXR1cm4gb2JqZWN0VVJMO1xufVxuXG5mdW5jdGlvbiBGaWVsZCh7XG4gIGF1dG9Gb2N1cyxcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZVxufSkge1xuICBjb25zdCBpbnB1dFJlZiA9IHJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gdmFsdWUua2luZCA9PT0gJ3VwbG9hZCcgPyB2YWxpZGF0ZUltYWdlKHZhbHVlLmRhdGEpIDogdW5kZWZpbmVkO1xuICBjb25zdCBpbWFnZVBhdGhGcm9tVXBsb2FkID0gdXNlT2JqZWN0VVJMKGVycm9yTWVzc2FnZSA9PT0gdW5kZWZpbmVkICYmIHZhbHVlLmtpbmQgPT09ICd1cGxvYWQnID8gdmFsdWUuZGF0YS5maWxlIDogdW5kZWZpbmVkKTtcbiAgY29uc3QgaW1hZ2VQYXRoID0gdmFsdWUua2luZCA9PT0gJ2Zyb20tc2VydmVyJyA/IHZhbHVlLmRhdGEucHVibGljVXJsVHJhbnNmb3JtZWQgOiBpbWFnZVBhdGhGcm9tVXBsb2FkOyAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBpbnB1dCBrZXkgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcywgdG8gZW5zdXJlIHRoZSBmaWxlIGlucHV0IGlzIHVubW91bnRlZCBhbmRcbiAgLy8gcmVtb3VudGVkICh0aGlzIGlzIHRoZSBvbmx5IHdheSB0byByZXNldCBpdHMgdmFsdWUgYW5kIGVuc3VyZSBvbkNoYW5nZSB3aWxsIGZpcmUgYWdhaW4gaWZcbiAgLy8gdGhlIHVzZXIgc2VsZWN0cyB0aGUgc2FtZSBmaWxlIGFnYWluKVxuXG4gIGNvbnN0IGlucHV0S2V5ID0gcmVhY3QudXNlTWVtbygoKSA9PiBNYXRoLnJhbmRvbSgpLCBbdmFsdWVdKTtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgdmFsdWUua2luZCA9PT0gJ2Zyb20tc2VydmVyJyB8fCB2YWx1ZS5raW5kID09PSAndXBsb2FkJyA/IGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwic21hbGxcIlxuICB9LCBpbWFnZVBhdGggJiYgZXJyb3JNZXNzYWdlID09PSB1bmRlZmluZWQgJiYgY29yZS5qc3goSW1hZ2UsIHtcbiAgICBzcmM6IGltYWdlUGF0aCxcbiAgICBhbHQ6IGZpZWxkLnBhdGhcbiAgfSksIG9uQ2hhbmdlICYmIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBhY3Jvc3M6IHRydWUsXG4gICAgZ2FwOiBcInNtYWxsXCIsXG4gICAgYWxpZ246IFwiY2VudGVyXCJcbiAgfSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICB2YXIgX2lucHV0UmVmJGN1cnJlbnQ7XG5cbiAgICAgIChfaW5wdXRSZWYkY3VycmVudCA9IGlucHV0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9pbnB1dFJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5wdXRSZWYkY3VycmVudC5jbGljaygpO1xuICAgIH1cbiAgfSwgXCJDaGFuZ2UgaW1hZ2VcIiksIHZhbHVlLmtpbmQgPT09ICdmcm9tLXNlcnZlcicgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB0b25lOiBcIm5lZ2F0aXZlXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICBraW5kOiAncmVtb3ZlJyxcbiAgICAgICAgcHJldmlvdXM6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFwiUmVtb3ZlXCIpLCB2YWx1ZS5raW5kID09PSAndXBsb2FkJyAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHRvbmU6IFwibmVnYXRpdmVcIixcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZS5wcmV2aW91cyk7XG4gICAgfVxuICB9LCBcIkNhbmNlbFwiKSwgZXJyb3JNZXNzYWdlID8gY29yZS5qc3gocGlsbC5QaWxsLCB7XG4gICAgdG9uZTogXCJuZWdhdGl2ZVwiLFxuICAgIHdlaWdodDogXCJsaWdodFwiXG4gIH0sIGVycm9yTWVzc2FnZSkgOiB2YWx1ZS5raW5kID09PSAndXBsb2FkJyAmJiBjb3JlLmpzeChwaWxsLlBpbGwsIHtcbiAgICB3ZWlnaHQ6IFwibGlnaHRcIixcbiAgICB0b25lOiBcInBvc2l0aXZlXCJcbiAgfSwgXCJTYXZlIHRvIHVwbG9hZCB0aGlzIGltYWdlXCIpKSkgOiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgY3NzOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgZ2FwOiBcInNtYWxsXCIsXG4gICAgYWNyb3NzOiB0cnVlXG4gIH0sIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgdmFyIF9pbnB1dFJlZiRjdXJyZW50MjtcblxuICAgICAgKF9pbnB1dFJlZiRjdXJyZW50MiA9IGlucHV0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9pbnB1dFJlZiRjdXJyZW50MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2lucHV0UmVmJGN1cnJlbnQyLmNsaWNrKCk7XG4gICAgfVxuICB9LCBcIlVwbG9hZCBJbWFnZVwiKSwgdmFsdWUua2luZCA9PT0gJ3JlbW92ZScgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB0b25lOiBcIm5lZ2F0aXZlXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKHZhbHVlLnByZXZpb3VzKTtcbiAgICB9XG4gIH0sIFwiVW5kbyByZW1vdmFsXCIpLCB2YWx1ZS5raW5kID09PSAncmVtb3ZlJyAmJiAvLyBOT1RFIC0tIFVYIGRlY2lzaW9uIGlzIHRvIG5vdCBkaXNwbGF5IHRoaXMsIEkgdGhpbmsgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAvLyBmb3IgZGVsZXRpbmcgdXBsb2FkZWQgaW1hZ2VzIChhbmQgd2UgZG9uJ3Qgc3VwcG9ydCB0aGF0IHlldClcbiAgLy8gPFBpbGwgd2VpZ2h0PVwibGlnaHRcIiB0b25lPVwid2FybmluZ1wiPlxuICAvLyAgIFNhdmUgdG8gcmVtb3ZlIHRoaXMgaW1hZ2VcbiAgLy8gPC9QaWxsPlxuICBudWxsKSwgY29yZS5qc3goXCJpbnB1dFwiLCB7XG4gICAgY3NzOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9LFxuICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICByZWY6IGlucHV0UmVmLFxuICAgIGtleTogaW5wdXRLZXksXG4gICAgbmFtZTogZmllbGQucGF0aCxcbiAgICBvbkNoYW5nZTogKHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWxpZGl0eSxcbiAgICAgICAgZmlsZXNcbiAgICAgIH1cbiAgICB9KSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXMgPT09IG51bGwgfHwgZmlsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpbGVzWzBdO1xuICAgICAgaWYgKCFmaWxlKSByZXR1cm47IC8vIGJhaWwgaWYgdGhlIHVzZXIgY2FuY2VscyBmcm9tIHRoZSBmaWxlIGJyb3dzZXJcblxuICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKHtcbiAgICAgICAga2luZDogJ3VwbG9hZCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBmaWxlLFxuICAgICAgICAgIHZhbGlkaXR5XG4gICAgICAgIH0sXG4gICAgICAgIHByZXZpb3VzOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB0eXBlOiBcImZpbGVcIixcbiAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZFxuICB9KSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUltYWdlKHtcbiAgZmlsZSxcbiAgdmFsaWRpdHlcbn0pIHtcbiAgaWYgKCF2YWxpZGl0eS52YWxpZCkge1xuICAgIHJldHVybiAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSByZWxvYWQgYW5kIHRyeSBhZ2Fpbi4nO1xuICB9IC8vIGNoZWNrIGlmIHRoZSBmaWxlIGlzIGFjdHVhbGx5IGFuIGltYWdlXG5cblxuICBpZiAoIWZpbGUudHlwZS5pbmNsdWRlcygnaW1hZ2UnKSkge1xuICAgIHJldHVybiAnT25seSBpbWFnZSBmaWxlcyBhcmUgYWxsb3dlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nO1xuICB9XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGVkIENvbXBvbmVudHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBJbWFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgdGhlbWUgPSBjb3JlLnVzZVRoZW1lKCk7XG4gIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgY3NzOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLm1lZGl1bSxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJ9YCxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBsaW5lSGVpZ2h0OiAwLFxuICAgICAgcGFkZGluZzogNCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAxMzAgLy8gMTIwcHggaW1hZ2UgKyBjaHJvbWVcblxuICAgIH1cbiAgfSwgY29yZS5qc3goXCJpbWdcIiwgX2V4dGVuZHMoe1xuICAgIGNzczoge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfVxuICB9LCBwcm9wcykpKTtcbn07XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBDZWxsID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgY29uc3QgZGF0YSA9IGl0ZW1bZmllbGQucGF0aF07XG4gIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgY3NzOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGhlaWdodDogMjQsXG4gICAgICBsaW5lSGVpZ2h0OiAwLFxuICAgICAgd2lkdGg6IDI0XG4gICAgfVxuICB9LCBjb3JlLmpzeChcImltZ1wiLCB7XG4gICAgYWx0OiBkYXRhLmZpbGVuYW1lLFxuICAgIGNzczoge1xuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBzcmM6IGRhdGEucHVibGljVXJsVHJhbnNmb3JtZWRcbiAgfSkpO1xufTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBpdGVtW2ZpZWxkLnBhdGhdO1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBkYXRhICYmIGNvcmUuanN4KFwiaW1nXCIsIHtcbiAgICBhbHQ6IGRhdGEuZmlsZW5hbWUsXG4gICAgc3JjOiBkYXRhLnB1YmxpY1VybFRyYW5zZm9ybWVkXG4gIH0pKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGAke2NvbmZpZy5wYXRofSB7XG4gICAgICAgIGlkXG4gICAgICAgIGZpbGVuYW1lXG4gICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkKHRyYW5zZm9ybWF0aW9uOiB7IHdpZHRoOiBcIjEyMFwiIGNyb3A6IFwibGltaXRcIiB9KVxuICAgICAgfWAsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICBraW5kOiAnZW1wdHknXG4gICAgfSxcblxuICAgIGRlc2VyaWFsaXplKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gaXRlbVtjb25maWcucGF0aF07XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4ge1xuICAgICAgICBraW5kOiAnZW1wdHknXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ2Zyb20tc2VydmVyJyxcbiAgICAgICAgZGF0YTogdmFsdWVcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUua2luZCAhPT0gJ3VwbG9hZCcgfHwgdmFsaWRhdGVJbWFnZSh2YWx1ZS5kYXRhKSA9PT0gdW5kZWZpbmVkO1xuICAgIH0sXG5cbiAgICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5raW5kID09PSAndXBsb2FkJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtjb25maWcucGF0aF06IHZhbHVlLmRhdGEuZmlsZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbY29uZmlnLnBhdGhdOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jbG91ZGluYXJ5LmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jbG91ZGluYXJ5LmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcblxuLyogQGpzeCBqc3ggKi9cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgYXV0b0ZvY3VzXG59KSA9PiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID8gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgdHlwZTogXCJudW1iZXJcIixcbiAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gIH0sXG4gIHZhbHVlOiB2YWx1ZVxufSkgOiB2YWx1ZSk7XG5jb25zdCBDZWxsID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxpbmtUb1xufSkgPT4ge1xuICBsZXQgdmFsdWUgPSBpdGVtW2ZpZWxkLnBhdGhdICsgJyc7XG4gIHJldHVybiBsaW5rVG8gPyBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxMaW5rLCBsaW5rVG8sIHZhbHVlKSA6IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgdmFsdWUpO1xufTtcbkNlbGwuc3VwcG9ydHNMaW5rVG8gPSB0cnVlO1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgaXRlbVtmaWVsZC5wYXRoXSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtjb25maWcucGF0aF07XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlICsgJycgOiAnJztcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogdmFsdWUgPT4gKHtcbiAgICAgIFtjb25maWcucGF0aF06IHZhbHVlID09PSAnJyA/IG51bGwgOiBwYXJzZUludCh2YWx1ZSwgMTApXG4gICAgfSksXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgvW15cXGQsXFxzXS9nLCAnJykpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogcHJvcHMuYXV0b0ZvY3VzXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgZ3JhcGhxbDogKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHlwZSA9PT0gJ2lzJyA/IGNvbmZpZy5wYXRoIDogYCR7Y29uZmlnLnBhdGh9XyR7dHlwZX1gO1xuICAgICAgICBjb25zdCB2YWx1ZVdpdGhvdXRXaGl0ZXNwYWNlID0gdmFsdWUucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBba2V5XTogWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyh0eXBlKSA/IHZhbHVlV2l0aG91dFdoaXRlc3BhY2Uuc3BsaXQoJywnKS5tYXAoaSA9PiBwYXJzZUludChpKSkgOiBwYXJzZUludCh2YWx1ZVdpdGhvdXRXaGl0ZXNwYWNlKVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHR5cGVcbiAgICAgIH0pIHtcbiAgICAgICAgbGV0IHJlbmRlcmVkVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICAgIHJlbmRlcmVkVmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiB2YWx1ZS50cmltKCkpLmpvaW4oJywgJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7bGFiZWwudG9Mb3dlckNhc2UoKX06ICR7cmVuZGVyZWRWYWx1ZX1gO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgaXM6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3QgZXhhY3RseScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBndDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgZ3JlYXRlciB0aGFuJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGx0OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBsZXNzIHRoYW4nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgZ3RlOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbHRlOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG9uZSBvZicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3RfaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBvbmUgb2YnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIHR5cGVzX3RleHRfdmlld3NfZGlzdF9maWVsZHMgPSByZXF1aXJlKCcuLi8uLi8uLi90ZXh0L3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcblxuLyogQGpzeCBqc3ggKi9cbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcblxuICAgIGRlc2VyaWFsaXplKGl0ZW0pIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gaXRlbVtjb25maWcucGF0aF07XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogJyc7XG4gICAgfSxcblxuICAgIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gICAgICAgICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgICAgYXV0b0ZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgZ3JhcGhxbCh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2lzJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnbm90JzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbYCR7Y29uZmlnLnBhdGh9X25vdGBdOiB2YWx1ZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnaW4nOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFtgJHtjb25maWcucGF0aH1faW5gXTogdmFsdWUuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnbm90X2luJzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBbYCR7Y29uZmlnLnBhdGh9X25vdF9pbmBdOiB2YWx1ZS5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiB2YWx1ZS50cmltKCkpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge307XG4gICAgICB9LFxuXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICBsZXQgcmVuZGVyZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChbJ2luJywgJ25vdF9pbiddLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICAgICAgcmVuZGVyZWRWYWx1ZSA9IHZhbHVlLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IHZhbHVlLnRyaW0oKSkuam9pbignLCAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHtsYWJlbC50b0xvd2VyQ2FzZSgpfTogJHtyZW5kZXJlZFZhbHVlfWA7XG4gICAgICB9LFxuXG4gICAgICB0eXBlczoge1xuICAgICAgICBpczoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgZXhhY3RseScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3Q6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBpbjoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgb25lIG9mJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9pbjoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbm90IG9uZSBvZicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzLkNhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IHR5cGVzX3RleHRfdmlld3NfZGlzdF9maWVsZHMuQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzLkZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG52YXIgYnV0dG9uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2J1dHRvbicpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBFeWVJY29uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZUljb24nKTtcbnZhciBFeWVPZmZJY29uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZU9mZkljb24nKTtcbnZhciBYSWNvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9YSWNvbicpO1xudmFyIHNlZ21lbnRlZENvbnRyb2wgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvc2VnbWVudGVkLWNvbnRyb2wnKTtcblxuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBmb3JjZVZhbGlkYXRpb24sXG4gIGF1dG9Gb2N1c1xufSkgPT4ge1xuICBjb25zdCBbc2hvd0lucHV0VmFsdWUsIHNldFNob3dJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvdWNoZWRGaXJzdElucHV0LCBzZXRUb3VjaGVkRmlyc3RJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3VjaGVkU2Vjb25kSW5wdXQsIHNldFRvdWNoZWRTZWNvbmRJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3VsZFNob3dWYWxpZGF0aW9uID0gZm9yY2VWYWxpZGF0aW9uIHx8IHRvdWNoZWRGaXJzdElucHV0ICYmIHRvdWNoZWRTZWNvbmRJbnB1dDtcbiAgY29uc3QgdmFsaWRhdGlvbiA9IHNob3VsZFNob3dWYWxpZGF0aW9uICYmIHZhbHVlLmtpbmQgPT09ICdlZGl0aW5nJyA/IHZhbHVlLnZhbHVlID09PSB2YWx1ZS5jb25maXJtID8gdmFsdWUudmFsdWUubGVuZ3RoID49IGZpZWxkLm1pbkxlbmd0aCA/IHVuZGVmaW5lZCA6IGBUaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCAke2ZpZWxkLm1pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nYCA6ICdUaGUgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IGlucHV0VHlwZSA9IHNob3dJbnB1dFZhbHVlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPT09IHVuZGVmaW5lZCA/IHZhbHVlLmlzU2V0ID8gJ1Bhc3N3b3JkIGlzIHNldCcgOiAnUGFzc3dvcmQgaXMgbm90IHNldCcgOiB2YWx1ZS5raW5kID09PSAnaW5pdGlhbCcgPyBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICBraW5kOiAnZWRpdGluZycsXG4gICAgICAgIGNvbmZpcm06ICcnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGlzU2V0OiB2YWx1ZS5pc1NldFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB2YWx1ZS5pc1NldCA/ICdDaGFuZ2UgUGFzc3dvcmQnIDogJ1NldCBQYXNzd29yZCcpIDogY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJzbWFsbFwiXG4gIH0sIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH1cbiAgfSwgY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgIGF1dG9Gb2N1czogdHJ1ZSxcbiAgICBpbnZhbGlkOiB2YWxpZGF0aW9uICE9PSB1bmRlZmluZWQsXG4gICAgdHlwZTogaW5wdXRUeXBlLFxuICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcbiAgICBwbGFjZWhvbGRlcjogXCJOZXcgUGFzc3dvcmRcIixcbiAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4ge1xuICAgICAgc2V0VG91Y2hlZEZpcnN0SW5wdXQodHJ1ZSk7XG4gICAgfVxuICB9KSwgY29yZS5qc3goU3BhY2VyLCBudWxsKSwgY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgIGludmFsaWQ6IHZhbGlkYXRpb24gIT09IHVuZGVmaW5lZCxcbiAgICB0eXBlOiBpbnB1dFR5cGUsXG4gICAgdmFsdWU6IHZhbHVlLmNvbmZpcm0sXG4gICAgcGxhY2Vob2xkZXI6IFwiQ29uZmlybSBQYXNzd29yZFwiLFxuICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgY29uZmlybTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHtcbiAgICAgIHNldFRvdWNoZWRTZWNvbmRJbnB1dCh0cnVlKTtcbiAgICB9XG4gIH0pLCBjb3JlLmpzeChTcGFjZXIsIG51bGwpLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgc2V0U2hvd0lucHV0VmFsdWUoIXNob3dJbnB1dFZhbHVlKTtcbiAgICB9XG4gIH0sIGNvcmUuanN4KGNvcmUuVmlzdWFsbHlIaWRkZW4sIG51bGwsIHNob3dJbnB1dFZhbHVlID8gJ0hpZGUgVGV4dCcgOiAnU2hvdyBUZXh0JyksIHNob3dJbnB1dFZhbHVlID8gY29yZS5qc3goRXllT2ZmSWNvbi5FeWVPZmZJY29uLCBudWxsKSA6IGNvcmUuanN4KEV5ZUljb24uRXllSWNvbiwgbnVsbCkpLCBjb3JlLmpzeChTcGFjZXIsIG51bGwpLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICBraW5kOiAnaW5pdGlhbCcsXG4gICAgICAgIGlzU2V0OiB2YWx1ZS5pc1NldFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBjb3JlLmpzeChjb3JlLlZpc3VhbGx5SGlkZGVuLCBudWxsLCBcIkNhbmNlbFwiKSwgY29yZS5qc3goWEljb24uWEljb24sIG51bGwpKSksIHZhbGlkYXRpb24gJiYgY29yZS5qc3goY29yZS5UZXh0LCB7XG4gICAgY29sb3I6IFwicmVkNjAwXCIsXG4gICAgc2l6ZTogXCJzbWFsbFwiXG4gIH0sIHZhbGlkYXRpb24pKSk7XG59O1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIGl0ZW1bYCR7ZmllbGQucGF0aH1faXNfc2V0YF0gPyAnSXMgc2V0JyA6ICdJcyBub3Qgc2V0Jyk7XG59O1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgaXRlbVtgJHtmaWVsZC5wYXRofV9pc19zZXRgXSA/ICdJcyBzZXQnIDogJ0lzIG5vdCBzZXQnKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGAke2NvbmZpZy5wYXRofV9pc19zZXRgLFxuICAgIG1pbkxlbmd0aDogY29uZmlnLmZpZWxkTWV0YS5taW5MZW5ndGgsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICBraW5kOiAnaW5pdGlhbCcsXG4gICAgICBpc1NldDogbnVsbFxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZShzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmtpbmQgPT09ICdpbml0aWFsJyB8fCBzdGF0ZS52YWx1ZSA9PT0gc3RhdGUuY29uZmlybSAmJiBzdGF0ZS52YWx1ZS5sZW5ndGggPj0gY29uZmlnLmZpZWxkTWV0YS5taW5MZW5ndGg7XG4gICAgfSxcblxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+ICh7XG4gICAgICBraW5kOiAnaW5pdGlhbCcsXG4gICAgICBpc1NldDogZGF0YVtgJHtjb25maWcucGF0aH1faXNfc2V0YF1cbiAgICB9KSxcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZS5raW5kID09PSAnaW5pdGlhbCcpIHJldHVybiB7fTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtjb25maWcucGF0aF06IHZhbHVlLnZhbHVlXG4gICAgICB9O1xuICAgIH0sXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KHNlZ21lbnRlZENvbnRyb2wuU2VnbWVudGVkQ29udHJvbCwge1xuICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IE51bWJlcihwcm9wcy52YWx1ZSksXG4gICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKCEhdmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VnbWVudHM6IFsnSXMgTm90IFNldCcsICdJcyBTZXQnXVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWw6ICh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV8ke3R5cGV9YF06IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBMYWJlbCh7XG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/ICdpcyBzZXQnIDogJ2lzIG5vdCBzZXQnO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgaXNfc2V0OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBTZXQnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgU3BhY2VyID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgc3BhY2luZ1xuICB9ID0gY29yZS51c2VUaGVtZSgpO1xuICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwge1xuICAgIGNzczoge1xuICAgICAgd2lkdGg6IHNwYWNpbmcuc21hbGwsXG4gICAgICBmbGV4U2hyaW5rOiAwXG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX3RvUHJvcGVydHlLZXkgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXknKTtcbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5yZXF1aXJlKCdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYXBvbGxvID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvYXBvbGxvJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xuXG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcihjYiwgcmVmKSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNiLCB7fSk7XG4gICAgbGV0IG5vZGUgPSByZWYuY3VycmVudDtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUpO1xuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShub2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCBpbml0aWFsSXRlbXNUb0xvYWQgPSAxMDtcbmNvbnN0IHN1YnNlcXVlbnRJdGVtc1RvTG9hZCA9IDUwO1xuY29uc3QgaWRGaWVsZCA9ICdfX19faWRfX19fJztcbmNvbnN0IGxhYmVsRmllbGQgPSAnX19fX2xhYmVsX19fXyc7XG5jb25zdCBSZWxhdGlvbnNoaXBTZWxlY3QgPSAoe1xuICBhdXRvRm9jdXMsXG4gIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgaXNEaXNhYmxlZCxcbiAgaXNMb2FkaW5nLFxuICBsaXN0LFxuICBwbGFjZWhvbGRlcixcbiAgc3RhdGUsXG4gIGV4dHJhU2VsZWN0aW9uID0gJydcbn0pID0+IHtcbiAgdmFyIF9kYXRhJGl0ZW1zO1xuXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFFVRVJZID0gYXBvbGxvLmdxbGBcbiAgICBxdWVyeSBSZWxhdGlvbnNoaXBTZWxlY3QoJHNlYXJjaDogU3RyaW5nISwgJGZpcnN0OiBJbnQhLCAkc2tpcDogSW50ISkge1xuICAgICAgaXRlbXM6ICR7bGlzdC5ncWxOYW1lcy5saXN0UXVlcnlOYW1lfShzZWFyY2g6ICRzZWFyY2gsIGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICAgICR7aWRGaWVsZH06IGlkXG4gICAgICAgICR7bGFiZWxGaWVsZH06ICR7bGlzdC5sYWJlbEZpZWxkfVxuICAgICAgICAke2V4dHJhU2VsZWN0aW9ufVxuICAgICAgfVxuXG4gICAgICBtZXRhOiAke2xpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TWV0YU5hbWV9KHNlYXJjaDogJHNlYXJjaCkge1xuICAgICAgICBjb3VudFxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3Qge1xuICAgIGRhdGEsXG4gICAgZXJyb3IsXG4gICAgbG9hZGluZyxcbiAgICBmZXRjaE1vcmVcbiAgfSA9IGFwb2xsby51c2VRdWVyeShRVUVSWSwge1xuICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNlYXJjaCxcbiAgICAgIGZpcnN0OiBpbml0aWFsSXRlbXNUb0xvYWQsXG4gICAgICBza2lwOiAwXG4gICAgfVxuICB9KTtcbiAgY29uc3QgY291bnQgPSAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLm1ldGEuY291bnQpIHx8IDA7XG4gIGNvbnN0IHJlbGF0aW9uc2hpcFNlbGVjdENvbXBvbmVudHMgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgTWVudUxpc3Q6IChfcmVmKSA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICBjaGlsZHJlblxuICAgICAgfSA9IF9yZWYsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2hpbGRyZW5cIl0pO1xuXG4gICAgICBjb25zdCBsb2FkaW5nUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgICAgY29uc3QgUVVFUlkgPSBhcG9sbG8uZ3FsYFxuICAgICAgICAgICAgcXVlcnkgUmVsYXRpb25zaGlwU2VsZWN0TW9yZSgkc2VhcmNoOiBTdHJpbmchLCAkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgICAgICAgICAgIGl0ZW1zOiAke2xpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZX0oc2VhcmNoOiAkc2VhcmNoLCBmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgICAgICAgICAgICR7bGFiZWxGaWVsZH06ICR7bGlzdC5sYWJlbEZpZWxkfVxuICAgICAgICAgICAgICAgICR7aWRGaWVsZH06IGlkXG4gICAgICAgICAgICAgICAgJHtleHRyYVNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGA7XG4gICAgICB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcigoW3tcbiAgICAgICAgaXNJbnRlcnNlY3RpbmdcbiAgICAgIH1dKSA9PiB7XG4gICAgICAgIGlmICghcHJvcHMuc2VsZWN0UHJvcHMuaXNMb2FkaW5nICYmIGlzSW50ZXJzZWN0aW5nICYmIHByb3BzLm9wdGlvbnMubGVuZ3RoIDwgY291bnQpIHtcbiAgICAgICAgICBmZXRjaE1vcmUoe1xuICAgICAgICAgICAgcXVlcnk6IFFVRVJZLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgIHNlYXJjaCxcbiAgICAgICAgICAgICAgZmlyc3Q6IHN1YnNlcXVlbnRJdGVtc1RvTG9hZCxcbiAgICAgICAgICAgICAgc2tpcDogcHJvcHMub3B0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGVRdWVyeTogKHByZXYsIHtcbiAgICAgICAgICAgICAgZmV0Y2hNb3JlUmVzdWx0XG4gICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtZXRhOiBwcmV2Lm1ldGEsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5wcmV2Lml0ZW1zLCAuLi5mZXRjaE1vcmVSZXN1bHQuaXRlbXNdXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIGxvYWRpbmdSZWYpO1xuICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5zZWxlY3RDb21wb25lbnRzLk1lbnVMaXN0LCBwcm9wcywgY2hpbGRyZW4sIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9LFxuICAgICAgICByZWY6IGxvYWRpbmdSZWZcbiAgICAgIH0sIHByb3BzLm9wdGlvbnMubGVuZ3RoIDwgY291bnQgJiYgY29yZS5qc3goXCJzcGFuXCIsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgcGFkZGluZzogOFxuICAgICAgICB9XG4gICAgICB9LCBcIkxvYWRpbmcuLi5cIikpKTtcbiAgICB9XG4gIH0pLCBbY291bnQsIGxpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZV0pOyAvLyBUT0RPOiBiZXR0ZXIgZXJyb3IgVUlcbiAgLy8gVE9ETzogSGFuZGxlIHBlcm1pc3Npb24gZXJyb3JzXG4gIC8vIChpZTsgdXNlciBoYXMgcGVybWlzc2lvbiB0byByZWFkIHRoaXMgcmVsYXRpb25zaGlwIGZpZWxkLCBidXRcbiAgLy8gbm90IHRoZSByZWxhdGVkIGxpc3QsIG9yIHNvbWUgaXRlbXMgb24gdGhlIGxpc3QpXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KFwic3BhblwiLCBudWxsLCBcIkVycm9yXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGF0YSRpdGVtcyA9IGRhdGEuaXRlbXMpID09PSBudWxsIHx8IF9kYXRhJGl0ZW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGF0YSRpdGVtcy5tYXAoKF9yZWYyKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIFtpZEZpZWxkXTogdmFsdWUsXG4gICAgICBbbGFiZWxGaWVsZF06IGxhYmVsXG4gICAgfSA9IF9yZWYyLFxuICAgICAgICBkYXRhID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbaWRGaWVsZCwgbGFiZWxGaWVsZF0ubWFwKF90b1Byb3BlcnR5S2V5KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbDogbGFiZWwgfHwgdmFsdWUsXG4gICAgICBkYXRhXG4gICAgfTtcbiAgfSkpIHx8IFtdO1xuXG4gIGlmIChzdGF0ZS5raW5kID09PSAnb25lJykge1xuICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuU2VsZWN0IC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgcmVhY3Qtc2VsZWN0IHBhc3NlcyBhIHNlY29uZCBhcmd1bWVudCB0byBvbklucHV0Q2hhbmdlXG4gICAgLy8gYW5kIHVzZVN0YXRlIHNldHRlcnMgbG9nIGEgd2FybmluZyBpZiBhIHNlY29uZCBhcmd1bWVudCBpcyBwYXNzZWRcbiAgICAsIHtcbiAgICAgIG9uSW5wdXRDaGFuZ2U6IHZhbCA9PiBzZXRTZWFyY2godmFsKSxcbiAgICAgIGlzTG9hZGluZzogbG9hZGluZyB8fCBpc0xvYWRpbmcsXG4gICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgIGNvbXBvbmVudHM6IHJlbGF0aW9uc2hpcFNlbGVjdENvbXBvbmVudHMsXG4gICAgICBwb3J0YWxNZW51OiB0cnVlLFxuICAgICAgdmFsdWU6IHN0YXRlLnZhbHVlID8ge1xuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUuaWQsXG4gICAgICAgIGxhYmVsOiBzdGF0ZS52YWx1ZS5sYWJlbCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkYXRhOiBzdGF0ZS52YWx1ZS5kYXRhXG4gICAgICB9IDogbnVsbCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBvbkNoYW5nZTogdmFsdWUgPT4ge1xuICAgICAgICBzdGF0ZS5vbkNoYW5nZSh2YWx1ZSA/IHtcbiAgICAgICAgICBpZDogdmFsdWUudmFsdWUsXG4gICAgICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsLFxuICAgICAgICAgIGRhdGE6IHZhbHVlLmRhdGFcbiAgICAgICAgfSA6IG51bGwpO1xuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxuICAgICAgaXNDbGVhcmFibGU6IGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuTXVsdGlTZWxlY3QgLy8gdGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSByZWFjdC1zZWxlY3QgcGFzc2VzIGEgc2Vjb25kIGFyZ3VtZW50IHRvIG9uSW5wdXRDaGFuZ2VcbiAgLy8gYW5kIHVzZVN0YXRlIHNldHRlcnMgbG9nIGEgd2FybmluZyBpZiBhIHNlY29uZCBhcmd1bWVudCBpcyBwYXNzZWRcbiAgLCB7XG4gICAgb25JbnB1dENoYW5nZTogdmFsID0+IHNldFNlYXJjaCh2YWwpLFxuICAgIGlzTG9hZGluZzogbG9hZGluZyB8fCBpc0xvYWRpbmcsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgY29tcG9uZW50czogcmVsYXRpb25zaGlwU2VsZWN0Q29tcG9uZW50cyxcbiAgICBwb3J0YWxNZW51OiB0cnVlLFxuICAgIHZhbHVlOiBzdGF0ZS52YWx1ZS5tYXAodmFsdWUgPT4gKHtcbiAgICAgIHZhbHVlOiB2YWx1ZS5pZCxcbiAgICAgIGxhYmVsOiB2YWx1ZS5sYWJlbCxcbiAgICAgIGRhdGE6IHZhbHVlLmRhdGFcbiAgICB9KSksXG4gICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICBvbkNoYW5nZTogdmFsdWUgPT4ge1xuICAgICAgc3RhdGUub25DaGFuZ2UodmFsdWUubWFwKHggPT4gKHtcbiAgICAgICAgaWQ6IHgudmFsdWUsXG4gICAgICAgIGxhYmVsOiB4LmxhYmVsLFxuICAgICAgICBkYXRhOiB4LmRhdGFcbiAgICAgIH0pKSk7XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXG4gICAgaXNDbGVhcmFibGU6IGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gIH0pO1xufTtcblxuZXhwb3J0cy5SZWxhdGlvbnNoaXBTZWxlY3QgPSBSZWxhdGlvbnNoaXBTZWxlY3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29udGV4dCcpO1xudmFyIHJvdXRlciA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL3JvdXRlcicpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgbW9kYWxzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL21vZGFscycpO1xudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcbnZhciB0b29sdGlwID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3Rvb2x0aXAnKTtcbnZhciBsb2FkaW5nID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2xvYWRpbmcnKTtcbnZhciBhZG1pblVpVXRpbHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS11dGlscycpO1xudmFyIGFwb2xsbyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2Fwb2xsbycpO1xudmFyIHRvYXN0ID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3RvYXN0Jyk7XG52YXIgaXNEZWVwRXF1YWwgPSByZXF1aXJlKCdmYXN0LWRlZXAtZXF1YWwnKTtcbnZhciB0eXBlc19yZWxhdGlvbnNoaXBfdmlld3NfUmVsYXRpb25zaGlwU2VsZWN0X2Rpc3RfZmllbGRzID0gcmVxdWlyZSgnLi4vUmVsYXRpb25zaGlwU2VsZWN0L2Rpc3QvZmllbGRzLmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleScpO1xucmVxdWlyZSgnaW50ZXJzZWN0aW9uLW9ic2VydmVyJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG52YXIgaXNEZWVwRXF1YWxfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0KGlzRGVlcEVxdWFsKTtcblxuZnVuY3Rpb24gdXNlSXRlbVN0YXRlKHtcbiAgc2VsZWN0ZWRGaWVsZHMsXG4gIGxvY2FsTGlzdCxcbiAgaWQsXG4gIGZpZWxkXG59KSB7XG4gIGNvbnN0IHtcbiAgICBkYXRhLFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmdcbiAgfSA9IGFwb2xsby51c2VRdWVyeShhcG9sbG8uZ3FsYHF1ZXJ5KCRpZDogSUQhKSB7XG4gIGl0ZW06ICR7bG9jYWxMaXN0LmtleX0od2hlcmU6IHtpZDogJGlkfSkge1xuICAgIGlkXG4gICAgcmVsYXRpb25zaGlwOiAke2ZpZWxkLnBhdGh9IHtcbiAgICAgICR7c2VsZWN0ZWRGaWVsZHN9XG4gICAgfVxuICB9XG59YCwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWRcbiAgICB9LFxuICAgIGVycm9yUG9saWN5OiAnYWxsJ1xuICB9KTtcbiAgY29uc3Qge1xuICAgIGl0ZW1zQXJyRnJvbURhdGEsXG4gICAgcmVsYXRpb25zaGlwR2V0dGVyXG4gIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBkYXRhR2V0dGVyID0gYWRtaW5VaVV0aWxzLm1ha2VEYXRhR2V0dGVyKGRhdGEsIGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5ncmFwaFFMRXJyb3JzKTtcbiAgICBjb25zdCByZWxhdGlvbnNoaXBHZXR0ZXIgPSBkYXRhR2V0dGVyLmdldCgnaXRlbScpLmdldCgncmVsYXRpb25zaGlwJyk7XG4gICAgY29uc3QgaXNNYW55ID0gQXJyYXkuaXNBcnJheShyZWxhdGlvbnNoaXBHZXR0ZXIuZGF0YSk7XG4gICAgY29uc3QgaXRlbXNBcnJGcm9tRGF0YSA9IChpc01hbnkgPyByZWxhdGlvbnNoaXBHZXR0ZXIuZGF0YS5tYXAoKF8sIGkpID0+IHJlbGF0aW9uc2hpcEdldHRlci5nZXQoaSkpIDogW3JlbGF0aW9uc2hpcEdldHRlcl0pLmZpbHRlcih4ID0+IHtcbiAgICAgIHZhciBfeCRkYXRhO1xuXG4gICAgICByZXR1cm4gKChfeCRkYXRhID0geC5kYXRhKSA9PT0gbnVsbCB8fCBfeCRkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfeCRkYXRhLmlkKSAhPSBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICByZWxhdGlvbnNoaXBHZXR0ZXIsXG4gICAgICBpdGVtc0FyckZyb21EYXRhXG4gICAgfTtcbiAgfSwgW2RhdGEsIGVycm9yXSk7XG4gIGxldCBbe1xuICAgIGl0ZW1zLFxuICAgIGl0ZW1zQXJyRnJvbURhdGE6IGl0ZW1zQXJyRnJvbURhdGFTdGF0ZVxuICB9LCBzZXRJdGVtc1N0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBpdGVtc0FyckZyb21EYXRhOiBbXSxcbiAgICBpdGVtczoge31cbiAgfSk7XG5cbiAgaWYgKGl0ZW1zQXJyRnJvbURhdGFTdGF0ZSAhPT0gaXRlbXNBcnJGcm9tRGF0YSkge1xuICAgIGxldCBuZXdJdGVtcyA9IHt9O1xuICAgIGl0ZW1zQXJyRnJvbURhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHZhciBfaXRlbXMkaXRlbSRkYXRhJGlkLCBfaXRlbSRlcnJvcnMsIF9pbml0aWFsSXRlbUluU3RhdGUkZTtcblxuICAgICAgY29uc3QgaW5pdGlhbEl0ZW1JblN0YXRlID0gKF9pdGVtcyRpdGVtJGRhdGEkaWQgPSBpdGVtc1tpdGVtLmRhdGEuaWRdKSA9PT0gbnVsbCB8fCBfaXRlbXMkaXRlbSRkYXRhJGlkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaXRlbXMkaXRlbSRkYXRhJGlkLmZyb21Jbml0aWFsUXVlcnk7XG5cbiAgICAgIGlmICgoaXRlbXNbaXRlbS5kYXRhLmlkXSAmJiBpbml0aWFsSXRlbUluU3RhdGUgfHwgIWl0ZW1zW2l0ZW0uZGF0YS5pZF0pICYmICghaW5pdGlhbEl0ZW1JblN0YXRlIHx8IGl0ZW0uZGF0YSAhPT0gaW5pdGlhbEl0ZW1JblN0YXRlLmRhdGEgfHwgKChfaXRlbSRlcnJvcnMgPSBpdGVtLmVycm9ycykgPT09IG51bGwgfHwgX2l0ZW0kZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaXRlbSRlcnJvcnMubGVuZ3RoKSAhPT0gKChfaW5pdGlhbEl0ZW1JblN0YXRlJGUgPSBpbml0aWFsSXRlbUluU3RhdGUuZXJyb3JzKSA9PT0gbnVsbCB8fCBfaW5pdGlhbEl0ZW1JblN0YXRlJGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pbml0aWFsSXRlbUluU3RhdGUkZS5sZW5ndGgpIHx8IChpdGVtLmVycm9ycyB8fCBbXSkuc29tZSgoZXJyLCBpKSA9PiB7XG4gICAgICAgIHZhciBfaW5pdGlhbEl0ZW1JblN0YXRlJGUyO1xuXG4gICAgICAgIHJldHVybiBlcnIgIT09ICgoX2luaXRpYWxJdGVtSW5TdGF0ZSRlMiA9IGluaXRpYWxJdGVtSW5TdGF0ZS5lcnJvcnMpID09PSBudWxsIHx8IF9pbml0aWFsSXRlbUluU3RhdGUkZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pbml0aWFsSXRlbUluU3RhdGUkZTJbaV0pO1xuICAgICAgfSkpKSB7XG4gICAgICAgIG5ld0l0ZW1zW2l0ZW0uZGF0YS5pZF0gPSB7XG4gICAgICAgICAgY3VycmVudDogaXRlbSxcbiAgICAgICAgICBmcm9tSW5pdGlhbFF1ZXJ5OiBpdGVtXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdJdGVtc1tpdGVtLmRhdGEuaWRdID0gaXRlbXNbaXRlbS5kYXRhLmlkXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpdGVtcyA9IG5ld0l0ZW1zO1xuICAgIHNldEl0ZW1zU3RhdGUoe1xuICAgICAgaXRlbXM6IG5ld0l0ZW1zLFxuICAgICAgaXRlbXNBcnJGcm9tRGF0YVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtc1RvUmV0dXJuID0ge307XG4gICAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgIGl0ZW1zVG9SZXR1cm5baWRdID0gaXRlbXNbaWRdLmN1cnJlbnQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpdGVtc1RvUmV0dXJuO1xuICAgIH0sIFtpdGVtc10pLFxuICAgIHNldEl0ZW1zOiBSZWFjdC51c2VDYWxsYmFjayhpdGVtcyA9PiB7XG4gICAgICBzZXRJdGVtc1N0YXRlKHN0YXRlID0+IHtcbiAgICAgICAgbGV0IGl0ZW1zRm9yU3RhdGUgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgIHZhciBfc3RhdGUkaXRlbXMkaWQ7XG5cbiAgICAgICAgICBpZiAoaXRlbXNbaWRdID09PSAoKF9zdGF0ZSRpdGVtcyRpZCA9IHN0YXRlLml0ZW1zW2lkXSkgPT09IG51bGwgfHwgX3N0YXRlJGl0ZW1zJGlkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RhdGUkaXRlbXMkaWQuY3VycmVudCkpIHtcbiAgICAgICAgICAgIGl0ZW1zRm9yU3RhdGVbaWRdID0gc3RhdGUuaXRlbXNbaWRdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgX3N0YXRlJGl0ZW1zJGlkMjtcblxuICAgICAgICAgICAgaXRlbXNGb3JTdGF0ZVtpZF0gPSB7XG4gICAgICAgICAgICAgIGN1cnJlbnQ6IGl0ZW1zW2lkXSxcbiAgICAgICAgICAgICAgZnJvbUluaXRpYWxRdWVyeTogKF9zdGF0ZSRpdGVtcyRpZDIgPSBzdGF0ZS5pdGVtc1tpZF0pID09PSBudWxsIHx8IF9zdGF0ZSRpdGVtcyRpZDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdGF0ZSRpdGVtcyRpZDIuZnJvbUluaXRpYWxRdWVyeVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGl0ZW1zQXJyRnJvbURhdGE6IHN0YXRlLml0ZW1zQXJyRnJvbURhdGEsXG4gICAgICAgICAgaXRlbXM6IGl0ZW1zRm9yU3RhdGVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0sIFtzZXRJdGVtc1N0YXRlXSksXG4gICAgc3RhdGU6ICgoKSA9PiB7XG4gICAgICBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdsb2FkaW5nJ1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3IgIT09IG51bGwgJiYgZXJyb3IgIT09IHZvaWQgMCAmJiBlcnJvci5uZXR3b3JrRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiAnZXJyb3InLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm5ldHdvcmtFcnJvci5tZXNzYWdlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZC5tYW55ICYmICFyZWxhdGlvbnNoaXBHZXR0ZXIuZGF0YSkge1xuICAgICAgICB2YXIgX3JlbGF0aW9uc2hpcEdldHRlciRlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogJ2Vycm9yJyxcbiAgICAgICAgICBtZXNzYWdlOiAoKF9yZWxhdGlvbnNoaXBHZXR0ZXIkZSA9IHJlbGF0aW9uc2hpcEdldHRlci5lcnJvcnMpID09PSBudWxsIHx8IF9yZWxhdGlvbnNoaXBHZXR0ZXIkZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3JlbGF0aW9uc2hpcEdldHRlciRlWzBdLm1lc3NhZ2UpIHx8ICcnXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6ICdsb2FkZWQnXG4gICAgICB9O1xuICAgIH0pKClcbiAgfTtcbn1cbmZ1bmN0aW9uIHVzZUZpZWxkc09iaihsaXN0LCBmaWVsZHMpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRGaWVsZHMgPSB7fTtcbiAgICBmaWVsZHMgPT09IG51bGwgfHwgZmllbGRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaWVsZHMuZm9yRWFjaChmaWVsZFBhdGggPT4ge1xuICAgICAgZWRpdEZpZWxkc1tmaWVsZFBhdGhdID0gbGlzdC5maWVsZHNbZmllbGRQYXRoXTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWRpdEZpZWxkcztcbiAgfSwgW2ZpZWxkcywgbGlzdC5maWVsZHNdKTtcbn1cblxuZnVuY3Rpb24gSW5saW5lRWRpdCh7XG4gIGZpZWxkcyxcbiAgbGlzdCxcbiAgc2VsZWN0ZWRGaWVsZHMsXG4gIGl0ZW1HZXR0ZXIsXG4gIG9uQ2FuY2VsLFxuICBvblNhdmVcbn0pIHtcbiAgdmFyIF9pdGVtR2V0dGVyJGVycm9ycztcblxuICBjb25zdCBmaWVsZHNPYmogPSB1c2VGaWVsZHNPYmoobGlzdCwgZmllbGRzKTtcbiAgY29uc3QgW3VwZGF0ZSwge1xuICAgIGxvYWRpbmcsXG4gICAgZXJyb3JcbiAgfV0gPSBhcG9sbG8udXNlTXV0YXRpb24oYXBvbGxvLmdxbGBtdXRhdGlvbiAoJGRhdGE6ICR7bGlzdC5ncWxOYW1lcy51cGRhdGVJbnB1dE5hbWV9ISwgJGlkOiBJRCEpIHtcbiAgICAgICAgICBpdGVtOiAke2xpc3QuZ3FsTmFtZXMudXBkYXRlTXV0YXRpb25OYW1lfShpZDogJGlkLCBkYXRhOiAkZGF0YSkge1xuICAgICAgICAgICAgJHtzZWxlY3RlZEZpZWxkc31cbiAgICAgICAgICB9XG4gICAgICAgIH1gLCB7XG4gICAgZXJyb3JQb2xpY3k6ICdhbGwnXG4gIH0pO1xuICBjb25zdCBbc3RhdGUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGFkbWluVWlVdGlscy5kZXNlcmlhbGl6ZVZhbHVlKGZpZWxkc09iaiwgaXRlbUdldHRlcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlLFxuICAgICAgaXRlbTogaXRlbUdldHRlci5kYXRhXG4gICAgfTtcbiAgfSk7XG5cbiAgaWYgKHN0YXRlLml0ZW0gIT09IGl0ZW1HZXR0ZXIuZGF0YSAmJiAoX2l0ZW1HZXR0ZXIkZXJyb3JzID0gaXRlbUdldHRlci5lcnJvcnMpICE9PSBudWxsICYmIF9pdGVtR2V0dGVyJGVycm9ycyAhPT0gdm9pZCAwICYmIF9pdGVtR2V0dGVyJGVycm9ycy5ldmVyeSh4ID0+IHtcbiAgICB2YXIgX3gkcGF0aDtcblxuICAgIHJldHVybiAoKF94JHBhdGggPSB4LnBhdGgpID09PSBudWxsIHx8IF94JHBhdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF94JHBhdGgubGVuZ3RoKSAhPT0gMTtcbiAgfSkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFkbWluVWlVdGlscy5kZXNlcmlhbGl6ZVZhbHVlKGZpZWxkc09iaiwgaXRlbUdldHRlcik7XG4gICAgc2V0VmFsdWUoe1xuICAgICAgdmFsdWUsXG4gICAgICBpdGVtOiBpdGVtR2V0dGVyLmRhdGFcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBjaGFuZ2VkRmllbGRzLFxuICAgIGRhdGFGb3JVcGRhdGVcbiAgfSA9IGFkbWluVWlVdGlscy51c2VDaGFuZ2VkRmllbGRzQW5kRGF0YUZvclVwZGF0ZShmaWVsZHNPYmosIGl0ZW1HZXR0ZXIsIHN0YXRlLnZhbHVlKTtcbiAgY29uc3QgaW52YWxpZEZpZWxkcyA9IGFkbWluVWlVdGlscy51c2VJbnZhbGlkRmllbGRzKGZpZWxkc09iaiwgc3RhdGUudmFsdWUpO1xuICBjb25zdCBbZm9yY2VWYWxpZGF0aW9uLCBzZXRGb3JjZVZhbGlkYXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2FzdHMgPSB0b2FzdC51c2VUb2FzdHMoKTtcbiAgY29uc3Qgc2F2ZUJ1dHRvblByb3BzID0ge1xuICAgIGlzTG9hZGluZzogbG9hZGluZyxcbiAgICB3ZWlnaHQ6ICdib2xkJyxcbiAgICBzaXplOiAnc21hbGwnLFxuICAgIHRvbmU6ICdhY3RpdmUnLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0ZvcmNlVmFsaWRhdGlvbiA9IGludmFsaWRGaWVsZHMuc2l6ZSAhPT0gMDtcbiAgICAgIHNldEZvcmNlVmFsaWRhdGlvbihuZXdGb3JjZVZhbGlkYXRpb24pO1xuICAgICAgaWYgKG5ld0ZvcmNlVmFsaWRhdGlvbikgcmV0dXJuO1xuICAgICAgdXBkYXRlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgZGF0YTogZGF0YUZvclVwZGF0ZSxcbiAgICAgICAgICBpZDogaXRlbUdldHRlci5nZXQoJ2lkJykuZGF0YVxuICAgICAgICB9XG4gICAgICB9KS50aGVuKCh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGVycm9yc1xuICAgICAgfSkgPT4ge1xuICAgICAgICAvLyB3ZSdyZSBjaGVja2luZyBmb3IgcGF0aC5sZW5ndGggPT09IDEgYmVjYXVzZSBlcnJvcnMgd2l0aCBhIHBhdGggbGFyZ2VyIHRoYW4gMSB3aWxsIGJlIGZpZWxkIGxldmVsIGVycm9yc1xuICAgICAgICAvLyB3aGljaCBhcmUgaGFuZGxlZCBzZXBlcmF0ZWx5IGFuZCBkbyBub3QgaW5kaWNhdGUgYSBmYWlsdXJlIHRvIHVwZGF0ZSB0aGUgaXRlbVxuICAgICAgICBjb25zdCBlcnJvciA9IGVycm9ycyA9PT0gbnVsbCB8fCBlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9ycy5maW5kKHggPT4ge1xuICAgICAgICAgIHZhciBfeCRwYXRoMjtcblxuICAgICAgICAgIHJldHVybiAoKF94JHBhdGgyID0geC5wYXRoKSA9PT0gbnVsbCB8fCBfeCRwYXRoMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkcGF0aDIubGVuZ3RoKSA9PT0gMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnRmFpbGVkIHRvIHVwZGF0ZSBpdGVtJyxcbiAgICAgICAgICAgIHRvbmU6ICduZWdhdGl2ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiBkYXRhLml0ZW1bbGlzdC5sYWJlbEZpZWxkXSB8fCBkYXRhLml0ZW0uaWQsXG4gICAgICAgICAgICB0b25lOiAncG9zaXRpdmUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1NhdmVkIHN1Y2Nlc3NmdWxseSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvblNhdmUoYWRtaW5VaVV0aWxzLm1ha2VEYXRhR2V0dGVyKGRhdGEsIGVycm9ycykuZ2V0KCdpdGVtJykpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAnRmFpbGVkIHRvIHVwZGF0ZSBpdGVtJyxcbiAgICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxuICAgICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBjaGlsZHJlbjogJ1NhdmUnXG4gIH07XG4gIHJldHVybiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgZ2FwOiBcInhsYXJnZVwiXG4gIH0sIGVycm9yICYmIGNvcmUuanN4KGNvbXBvbmVudHMuR3JhcGhRTEVycm9yTm90aWNlLCB7XG4gICAgbmV0d29ya0Vycm9yOiBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubmV0d29ya0Vycm9yIC8vIHdlJ3JlIGNoZWNraW5nIGZvciBwYXRoLmxlbmd0aCA9PT0gMSBiZWNhdXNlIGVycm9ycyB3aXRoIGEgcGF0aCBsYXJnZXIgdGhhbiAxIHdpbGwgYmUgZmllbGQgbGV2ZWwgZXJyb3JzXG4gICAgLy8gd2hpY2ggYXJlIGhhbmRsZWQgc2VwZXJhdGVseSBhbmQgZG8gbm90IGluZGljYXRlIGEgZmFpbHVyZSB0byB1cGRhdGUgdGhlIGl0ZW1cbiAgICAsXG4gICAgZXJyb3JzOiBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IuZ3JhcGhRTEVycm9ycy5maWx0ZXIoeCA9PiB7XG4gICAgICB2YXIgX3gkcGF0aDM7XG5cbiAgICAgIHJldHVybiAoKF94JHBhdGgzID0geC5wYXRoKSA9PT0gbnVsbCB8fCBfeCRwYXRoMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkcGF0aDMubGVuZ3RoKSA9PT0gMTtcbiAgICB9KVxuICB9KSwgY29yZS5qc3goYWRtaW5VaVV0aWxzLkZpZWxkcywge1xuICAgIGZpZWxkTW9kZXM6IG51bGwsXG4gICAgZmllbGRzOiBmaWVsZHNPYmosXG4gICAgZm9yY2VWYWxpZGF0aW9uOiBmb3JjZVZhbGlkYXRpb24sXG4gICAgaW52YWxpZEZpZWxkczogaW52YWxpZEZpZWxkcyxcbiAgICBvbkNoYW5nZTogUmVhY3QudXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xuICAgICAgc2V0VmFsdWUoc3RhdGUgPT4gKHtcbiAgICAgICAgaXRlbTogc3RhdGUuaXRlbSxcbiAgICAgICAgdmFsdWU6IHZhbHVlKHN0YXRlLnZhbHVlKVxuICAgICAgfSkpO1xuICAgIH0sIFtzZXRWYWx1ZV0pLFxuICAgIHZhbHVlOiBzdGF0ZS52YWx1ZVxuICB9KSwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGFjcm9zczogdHJ1ZSxcbiAgICBnYXA6IFwic21hbGxcIlxuICB9LCBjaGFuZ2VkRmllbGRzLnNpemUgPyBjb3JlLmpzeChidXR0b24uQnV0dG9uLCBzYXZlQnV0dG9uUHJvcHMpIDogY29yZS5qc3godG9vbHRpcC5Ub29sdGlwLCB7XG4gICAgY29udGVudDogXCJObyBmaWVsZHMgaGF2ZSBiZWVuIG1vZGlmaWVkIHNvIHlvdSBjYW5ub3Qgc2F2ZSBjaGFuZ2VzXCJcbiAgfSwgcHJvcHMgPT4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgX2V4dGVuZHMoe30sIHByb3BzLCBzYXZlQnV0dG9uUHJvcHMsIHtcbiAgICAvLyBtYWtpbmcgb25DbGljayB1bmRlZmluZWQgaW5zdGVhZCBvZiBtYWtpbmcgdGhlIGJ1dHRvbiBkaXNhYmxlZCBzbyB0aGUgYnV0dG9uIGNhbiBiZSBmb2N1c3NlZCBzbyBrZXlib2FyZCB1c2VycyBjYW4gc2VlIHRoZSB0b29sdGlwXG4gICAgb25DbGljazogdW5kZWZpbmVkXG4gIH0pKSksIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgd2VpZ2h0OiBcIm5vbmVcIixcbiAgICBvbkNsaWNrOiBvbkNhbmNlbFxuICB9LCBcIkNhbmNlbFwiKSkpO1xufVxuXG4vKiBAanN4IGpzeCAqL1xuZnVuY3Rpb24gSW5saW5lQ3JlYXRlKHtcbiAgbGlzdCxcbiAgb25DYW5jZWwsXG4gIG9uQ3JlYXRlLFxuICBmaWVsZHM6IGZpZWxkUGF0aHMsXG4gIHNlbGVjdGVkRmllbGRzXG59KSB7XG4gIGNvbnN0IHRvYXN0cyA9IHRvYXN0LnVzZVRvYXN0cygpO1xuICBjb25zdCBmaWVsZHMgPSB1c2VGaWVsZHNPYmoobGlzdCwgZmllbGRQYXRocyk7XG4gIGNvbnN0IFtjcmVhdGVJdGVtLCB7XG4gICAgbG9hZGluZyxcbiAgICBlcnJvclxuICB9XSA9IGFwb2xsby51c2VNdXRhdGlvbihhcG9sbG8uZ3FsYG11dGF0aW9uKCRkYXRhOiAke2xpc3QuZ3FsTmFtZXMuY3JlYXRlSW5wdXROYW1lfSEpIHtcbiAgICAgIGl0ZW06ICR7bGlzdC5ncWxOYW1lcy5jcmVhdGVNdXRhdGlvbk5hbWV9KGRhdGE6ICRkYXRhKSB7XG4gICAgICAgICR7c2VsZWN0ZWRGaWVsZHN9XG4gICAgfVxuICB9YCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0ge307XG4gICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKGZpZWxkUGF0aCA9PiB7XG4gICAgICB2YWx1ZVtmaWVsZFBhdGhdID0ge1xuICAgICAgICBraW5kOiAndmFsdWUnLFxuICAgICAgICB2YWx1ZTogZmllbGRzW2ZpZWxkUGF0aF0uY29udHJvbGxlci5kZWZhdWx0VmFsdWVcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9KTtcbiAgY29uc3QgaW52YWxpZEZpZWxkcyA9IGFkbWluVWlVdGlscy51c2VJbnZhbGlkRmllbGRzKGZpZWxkcywgdmFsdWUpO1xuICBjb25zdCBbZm9yY2VWYWxpZGF0aW9uLCBzZXRGb3JjZVZhbGlkYXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ3JlYXRlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3Rm9yY2VWYWxpZGF0aW9uID0gaW52YWxpZEZpZWxkcy5zaXplICE9PSAwO1xuICAgIHNldEZvcmNlVmFsaWRhdGlvbihuZXdGb3JjZVZhbGlkYXRpb24pO1xuICAgIGlmIChuZXdGb3JjZVZhbGlkYXRpb24pIHJldHVybjtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgY29uc3QgYWxsU2VyaWFsaXplZFZhbHVlcyA9IGFkbWluVWlVdGlscy5zZXJpYWxpemVWYWx1ZVRvT2JqQnlGaWVsZEtleShmaWVsZHMsIHZhbHVlKTtcbiAgICBPYmplY3Qua2V5cyhhbGxTZXJpYWxpemVkVmFsdWVzKS5mb3JFYWNoKGZpZWxkUGF0aCA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvbnRyb2xsZXJcbiAgICAgIH0gPSBmaWVsZHNbZmllbGRQYXRoXTtcbiAgICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSBhbGxTZXJpYWxpemVkVmFsdWVzW2ZpZWxkUGF0aF07XG5cbiAgICAgIGlmICghaXNEZWVwRXF1YWxfX2RlZmF1bHRbJ2RlZmF1bHQnXShzZXJpYWxpemVkLCBjb250cm9sbGVyLnNlcmlhbGl6ZShjb250cm9sbGVyLmRlZmF1bHRWYWx1ZSkpKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgc2VyaWFsaXplZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3JlYXRlSXRlbSh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgZGF0YVxuICAgICAgfVxuICAgIH0pLnRoZW4oKHtcbiAgICAgIGRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9KSA9PiB7XG4gICAgICAvLyB3ZSdyZSBjaGVja2luZyBmb3IgcGF0aC5sZW5ndGggPT09IDEgYmVjYXVzZSBlcnJvcnMgd2l0aCBhIHBhdGggbGFyZ2VyIHRoYW4gMSB3aWxsIGJlIGZpZWxkIGxldmVsIGVycm9yc1xuICAgICAgLy8gd2hpY2ggYXJlIGhhbmRsZWQgc2VwZXJhdGVseSBhbmQgZG8gbm90IGluZGljYXRlIGEgZmFpbHVyZSB0byB1cGRhdGUgdGhlIGl0ZW1cbiAgICAgIGNvbnN0IGVycm9yID0gZXJyb3JzID09PSBudWxsIHx8IGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3JzLmZpbmQoeCA9PiB7XG4gICAgICAgIHZhciBfeCRwYXRoO1xuXG4gICAgICAgIHJldHVybiAoKF94JHBhdGggPSB4LnBhdGgpID09PSBudWxsIHx8IF94JHBhdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF94JHBhdGgubGVuZ3RoKSA9PT0gMTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ0ZhaWxlZCB0byBjcmVhdGUgaXRlbScsXG4gICAgICAgICAgdG9uZTogJ25lZ2F0aXZlJyxcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcbiAgICAgICAgICB0aXRsZTogZGF0YS5pdGVtW2xpc3QubGFiZWxGaWVsZF0gfHwgZGF0YS5pdGVtLmlkLFxuICAgICAgICAgIHRvbmU6ICdwb3NpdGl2ZScsXG4gICAgICAgICAgbWVzc2FnZTogJ1NhdmVkIHN1Y2Nlc3NmdWxseSdcbiAgICAgICAgfSk7XG4gICAgICAgIG9uQ3JlYXRlKGFkbWluVWlVdGlscy5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvcnMpLmdldCgnaXRlbScpKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdGYWlsZWQgdG8gdXBkYXRlIGl0ZW0nLFxuICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxuICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwieGxhcmdlXCJcbiAgfSwgZXJyb3IgJiYgY29yZS5qc3goY29tcG9uZW50cy5HcmFwaFFMRXJyb3JOb3RpY2UsIHtcbiAgICBuZXR3b3JrRXJyb3I6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5uZXR3b3JrRXJyb3IsXG4gICAgZXJyb3JzOiBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IuZ3JhcGhRTEVycm9yc1xuICB9KSwgY29yZS5qc3goYWRtaW5VaVV0aWxzLkZpZWxkcywge1xuICAgIGZpZWxkTW9kZXM6IG51bGwsXG4gICAgZmllbGRzOiBmaWVsZHMsXG4gICAgZm9yY2VWYWxpZGF0aW9uOiBmb3JjZVZhbGlkYXRpb24sXG4gICAgaW52YWxpZEZpZWxkczogaW52YWxpZEZpZWxkcyxcbiAgICBvbkNoYW5nZTogc2V0VmFsdWUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pLCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgZ2FwOiBcInNtYWxsXCIsXG4gICAgYWNyb3NzOiB0cnVlXG4gIH0sIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBpc0xvYWRpbmc6IGxvYWRpbmcsXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHRvbmU6IFwicG9zaXRpdmVcIixcbiAgICB3ZWlnaHQ6IFwiYm9sZFwiLFxuICAgIG9uQ2xpY2s6IG9uQ3JlYXRlQ2xpY2tcbiAgfSwgXCJDcmVhdGUgXCIsIGxpc3Quc2luZ3VsYXIpLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHdlaWdodDogXCJub25lXCIsXG4gICAgb25DbGljazogb25DYW5jZWxcbiAgfSwgXCJDYW5jZWxcIikpKTtcbn1cblxuY29uc3QgQ2FyZENvbnRhaW5lciA9IChfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgbW9kZSA9ICd2aWV3J1xuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcIm1vZGVcIl0pO1xuXG4gIGNvbnN0IHtcbiAgICB0b25lc1xuICB9ID0gY29yZS51c2VUaGVtZSgpO1xuICBjb25zdCB0b25lID0gdG9uZXNbbW9kZSA9PT0gJ2VkaXQnID8gJ2FjdGl2ZScgOiBtb2RlID09PSAnY3JlYXRlJyA/ICdwb3NpdGl2ZScgOiAncGFzc2l2ZSddO1xuICByZXR1cm4gY29yZS5qc3goY29yZS5Cb3gsIF9leHRlbmRzKHtcbiAgICBwYWRkaW5nTGVmdDogXCJ4bGFyZ2VcIixcbiAgICBjc3M6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgJzpiZWZvcmUnOiB7XG4gICAgICAgIGNvbnRlbnQ6ICdcIiBcIicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdG9uZS5ib3JkZXIsXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgd2lkdGg6IDQsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgekluZGV4OiAxXG4gICAgICB9XG4gICAgfVxuICB9LCBwcm9wcykpO1xufTtcblxuZnVuY3Rpb24gQ2FyZHMoe1xuICBsb2NhbExpc3QsXG4gIGZpZWxkLFxuICBmb3JlaWduTGlzdCxcbiAgaWQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgZm9yY2VWYWxpZGF0aW9uXG59KSB7XG4gIHZhciBfZmllbGQkZGlzcGxheSRpbmxpbmU7XG5cbiAgbGV0IHNlbGVjdGVkRmllbGRzID0gWy4uLm5ldyBTZXQoWy4uLmZpZWxkLmRpc3BsYXkuY2FyZEZpZWxkcywgLi4uKCgoX2ZpZWxkJGRpc3BsYXkkaW5saW5lID0gZmllbGQuZGlzcGxheS5pbmxpbmVFZGl0KSA9PT0gbnVsbCB8fCBfZmllbGQkZGlzcGxheSRpbmxpbmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9maWVsZCRkaXNwbGF5JGlubGluZS5maWVsZHMpIHx8IFtdKV0pXS5tYXAoZmllbGRQYXRoID0+IHtcbiAgICByZXR1cm4gZm9yZWlnbkxpc3QuZmllbGRzW2ZpZWxkUGF0aF0uY29udHJvbGxlci5ncmFwaHFsU2VsZWN0aW9uO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICBpZiAoIWZpZWxkLmRpc3BsYXkuY2FyZEZpZWxkcy5pbmNsdWRlcygnaWQnKSkge1xuICAgIHNlbGVjdGVkRmllbGRzICs9ICdcXG5pZCc7XG4gIH1cblxuICBpZiAoIWZpZWxkLmRpc3BsYXkuY2FyZEZpZWxkcy5pbmNsdWRlcyhmb3JlaWduTGlzdC5sYWJlbEZpZWxkKSAmJiBmb3JlaWduTGlzdC5sYWJlbEZpZWxkICE9PSAnaWQnKSB7XG4gICAgc2VsZWN0ZWRGaWVsZHMgKz0gYFxcbiR7Zm9yZWlnbkxpc3QubGFiZWxGaWVsZH1gO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGl0ZW1zLFxuICAgIHNldEl0ZW1zLFxuICAgIHN0YXRlOiBpdGVtc1N0YXRlXG4gIH0gPSB1c2VJdGVtU3RhdGUoe1xuICAgIHNlbGVjdGVkRmllbGRzLFxuICAgIGxvY2FsTGlzdCxcbiAgICBpZCxcbiAgICBmaWVsZFxuICB9KTtcbiAgY29uc3QgY2xpZW50ID0gYXBvbGxvLnVzZUFwb2xsb0NsaWVudCgpO1xuICBjb25zdCBbaXNMb2FkaW5nTGF6eUl0ZW1zLCBzZXRJc0xvYWRpbmdMYXp5SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0Nvbm5lY3RJdGVtcywgc2V0U2hvd0Nvbm5lY3RJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoaWRlQ29ubmVjdEl0ZW1zTGFiZWwsIHNldEhpZGVDb25uZWN0SXRlbXNMYWJlbF0gPSBSZWFjdC51c2VTdGF0ZSgnQ2FuY2VsJyk7XG4gIGNvbnN0IGlzTW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0pO1xuXG4gIGlmIChpdGVtc1N0YXRlLmtpbmQgPT09ICdsb2FkaW5nJykge1xuICAgIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCBudWxsLCBjb3JlLmpzeChsb2FkaW5nLkxvYWRpbmdEb3RzLCB7XG4gICAgICBsYWJlbDogYExvYWRpbmcgaXRlbXMgZm9yICR7ZmllbGQubGFiZWx9IGZpZWxkYFxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChpdGVtc1N0YXRlLmtpbmQgPT09ICdlcnJvcicpIHtcbiAgICByZXR1cm4gY29yZS5qc3goXCJzcGFuXCIsIHtcbiAgICAgIGNzczoge1xuICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgIH1cbiAgICB9LCBpdGVtc1N0YXRlLm1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwieGxhcmdlXCJcbiAgfSwgWy4uLnZhbHVlLmN1cnJlbnRJZHNdLm1hcChpZCA9PiB7XG4gICAgY29uc3QgaXRlbUdldHRlciA9IGl0ZW1zW2lkXTtcbiAgICByZXR1cm4gdmFsdWUuaXRlbXNCZWluZ0VkaXRlZC5oYXMoaWQpICYmIG9uQ2hhbmdlICE9PSB1bmRlZmluZWQgPyBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XG4gICAgICBtb2RlOiBcImVkaXRcIixcbiAgICAgIGtleTogaWRcbiAgICB9LCBjb3JlLmpzeChJbmxpbmVFZGl0LCB7XG4gICAgICBsaXN0OiBmb3JlaWduTGlzdCxcbiAgICAgIGZpZWxkczogZmllbGQuZGlzcGxheS5pbmxpbmVFZGl0LmZpZWxkcyxcbiAgICAgIG9uU2F2ZTogbmV3SXRlbUdldHRlciA9PiB7XG4gICAgICAgIHNldEl0ZW1zKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaXRlbXMpLCB7fSwge1xuICAgICAgICAgIFtpZF06IG5ld0l0ZW1HZXR0ZXJcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBpdGVtc0JlaW5nRWRpdGVkID0gbmV3IFNldCh2YWx1ZS5pdGVtc0JlaW5nRWRpdGVkKTtcbiAgICAgICAgaXRlbXNCZWluZ0VkaXRlZC5kZWxldGUoaWQpO1xuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICBpdGVtc0JlaW5nRWRpdGVkXG4gICAgICAgIH0pKTtcbiAgICAgIH0sXG4gICAgICBzZWxlY3RlZEZpZWxkczogc2VsZWN0ZWRGaWVsZHMsXG4gICAgICBpdGVtR2V0dGVyOiBpdGVtR2V0dGVyLFxuICAgICAgb25DYW5jZWw6ICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXNCZWluZ0VkaXRlZCA9IG5ldyBTZXQodmFsdWUuaXRlbXNCZWluZ0VkaXRlZCk7XG4gICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWQuZGVsZXRlKGlkKTtcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgaXRlbXNCZWluZ0VkaXRlZFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSkpIDogY29yZS5qc3goQ2FyZENvbnRhaW5lciwge1xuICAgICAgbW9kZTogXCJ2aWV3XCIsXG4gICAgICBrZXk6IGlkXG4gICAgfSwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgICAgZ2FwOiBcInhsYXJnZVwiXG4gICAgfSwgZmllbGQuZGlzcGxheS5jYXJkRmllbGRzLm1hcChmaWVsZFBhdGggPT4ge1xuICAgICAgY29uc3QgZmllbGQgPSBmb3JlaWduTGlzdC5maWVsZHNbZmllbGRQYXRoXTtcbiAgICAgIGNvbnN0IGl0ZW1Gb3JGaWVsZCA9IHt9O1xuXG4gICAgICBmb3IgKGNvbnN0IGdyYXBocWxGaWVsZCBvZiBhZG1pblVpVXRpbHMuZ2V0Um9vdEdyYXBoUUxGaWVsZHNGcm9tRmllbGRDb250cm9sbGVyKGZpZWxkLmNvbnRyb2xsZXIpKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkR2V0dGVyID0gaXRlbUdldHRlci5nZXQoZ3JhcGhxbEZpZWxkKTtcblxuICAgICAgICBpZiAoZmllbGRHZXR0ZXIuZXJyb3JzKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZmllbGRHZXR0ZXIuZXJyb3JzWzBdLm1lc3NhZ2U7XG4gICAgICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1Gb3JGaWVsZFtncmFwaHFsRmllbGRdID0gZmllbGRHZXR0ZXIuZGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkLnZpZXdzLkNhcmRWYWx1ZSwge1xuICAgICAgICBrZXk6IGZpZWxkUGF0aCxcbiAgICAgICAgZmllbGQ6IGZpZWxkLmNvbnRyb2xsZXIsXG4gICAgICAgIGl0ZW06IGl0ZW1Gb3JGaWVsZFxuICAgICAgfSk7XG4gICAgfSkpLCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgICBhY3Jvc3M6IHRydWUsXG4gICAgICBnYXA6IFwic21hbGxcIixcbiAgICAgIG1hcmdpblRvcDogXCJ4bGFyZ2VcIlxuICAgIH0sIGZpZWxkLmRpc3BsYXkuaW5saW5lRWRpdCAmJiBvbkNoYW5nZSAhPT0gdW5kZWZpbmVkICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICAgIHNpemU6IFwic21hbGxcIixcbiAgICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICBpdGVtc0JlaW5nRWRpdGVkOiBuZXcgU2V0KFsuLi52YWx1ZS5pdGVtc0JlaW5nRWRpdGVkLCBpZF0pXG4gICAgICAgIH0pKTtcbiAgICAgIH0sXG4gICAgICB0b25lOiBcImFjdGl2ZVwiXG4gICAgfSwgXCJFZGl0XCIpLCBmaWVsZC5kaXNwbGF5LnJlbW92ZU1vZGUgPT09ICdkaXNjb25uZWN0JyAmJiBvbkNoYW5nZSAhPT0gdW5kZWZpbmVkICYmIGNvcmUuanN4KHRvb2x0aXAuVG9vbHRpcCwge1xuICAgICAgY29udGVudDogXCJUaGlzIGl0ZW0gd2lsbCBub3QgYmUgZGVsZXRlZC4gSXQgd2lsbCBvbmx5IGJlIHJlbW92ZWQgZnJvbSB0aGlzIGZpZWxkLlwiXG4gICAgfSwgcHJvcHMgPT4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJZHMgPSBuZXcgU2V0KHZhbHVlLmN1cnJlbnRJZHMpO1xuICAgICAgICBjdXJyZW50SWRzLmRlbGV0ZShpZCk7XG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgIGN1cnJlbnRJZHNcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0sIHByb3BzLCB7XG4gICAgICB0b25lOiBcIm5lZ2F0aXZlXCJcbiAgICB9KSwgXCJSZW1vdmVcIikpLCBmaWVsZC5kaXNwbGF5LmxpbmtUb0l0ZW0gJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgd2VpZ2h0OiBcImxpbmtcIixcbiAgICAgIHRvbmU6IFwiYWN0aXZlXCIsXG4gICAgICBjc3M6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJ1xuICAgICAgfSxcbiAgICAgIGFzOiByb3V0ZXIuTGluayxcbiAgICAgIGhyZWY6IGAvJHtmb3JlaWduTGlzdC5wYXRofS8ke2lkfWBcbiAgICB9LCBcIlZpZXcgXCIsIGZvcmVpZ25MaXN0LnNpbmd1bGFyLCBcIiBkZXRhaWxzXCIpKSk7XG4gIH0pLCBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGZpZWxkLmRpc3BsYXkuaW5saW5lQ29ubmVjdCAmJiBzaG93Q29ubmVjdEl0ZW1zID8gY29yZS5qc3goQ2FyZENvbnRhaW5lciwge1xuICAgIG1vZGU6IFwiZWRpdFwiXG4gIH0sIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwic21hbGxcIixcbiAgICBtYXJnaW5ZOiBcIm1lZGl1bVwiLFxuICAgIGFjcm9zczogdHJ1ZVxuICB9LCBjb3JlLmpzeCh0eXBlc19yZWxhdGlvbnNoaXBfdmlld3NfUmVsYXRpb25zaGlwU2VsZWN0X2Rpc3RfZmllbGRzLlJlbGF0aW9uc2hpcFNlbGVjdCwge1xuICAgIGF1dG9Gb2N1czogdHJ1ZSxcbiAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWU6IGlzTG9hZGluZ0xhenlJdGVtcyxcbiAgICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxuICAgIGlzTG9hZGluZzogaXNMb2FkaW5nTGF6eUl0ZW1zLFxuICAgIHBsYWNlaG9sZGVyOiBgU2VsZWN0IGEgJHtmb3JlaWduTGlzdC5zaW5ndWxhcn1gLFxuICAgIHN0YXRlOiB7XG4gICAgICBraW5kOiAnbWFueScsXG5cbiAgICAgIGFzeW5jIG9uQ2hhbmdlKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gVE9ETzogbWF5YmUgdXNlIHRoZSBleHRyYVNlbGVjdGlvbiBwcm9wIG9uIFJlbGF0aW9uc2hpcFNlbGVjdCBoZXJlXG4gICAgICAgIGNvbnN0IGl0ZW1zVG9GZXRjaEFuZENvbm5lY3QgPSBbXTtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmICghdmFsdWUuY3VycmVudElkcy5oYXMoaXRlbS5pZCkpIHtcbiAgICAgICAgICAgIGl0ZW1zVG9GZXRjaEFuZENvbm5lY3QucHVzaChpdGVtLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpdGVtc1RvRmV0Y2hBbmRDb25uZWN0Lmxlbmd0aCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGVycm9yc1xuICAgICAgICAgICAgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICAgIHF1ZXJ5OiBhcG9sbG8uZ3FsYHF1ZXJ5ICgkaWRzOiBbSUQhXSEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogJHtmb3JlaWduTGlzdC5ncWxOYW1lcy5saXN0UXVlcnlOYW1lfSh3aGVyZToge2lkX2luOiRpZHN9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAke3NlbGVjdGVkRmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGlkczogaXRlbXNUb0ZldGNoQW5kQ29ubmVjdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGlzTW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGFHZXR0ZXJzID0gYWRtaW5VaVV0aWxzLm1ha2VEYXRhR2V0dGVyKGRhdGEsIGVycm9ycyk7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW1zRGF0YUdldHRlciA9IGRhdGFHZXR0ZXJzLmdldCgnaXRlbXMnKTtcblxuICAgICAgICAgICAgICBsZXQgbmV3SXRlbXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBpdGVtcyk7XG5cbiAgICAgICAgICAgICAgbGV0IG5ld0N1cnJlbnRJZHMgPSBmaWVsZC5tYW55ID8gbmV3IFNldCh2YWx1ZS5jdXJyZW50SWRzKSA6IG5ldyBTZXQoKTtcblxuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtc0RhdGFHZXR0ZXIuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtc0RhdGFHZXR0ZXIuZGF0YS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbS5pZCkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdDdXJyZW50SWRzLmFkZChpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3SXRlbXNbaXRlbS5pZF0gPSBpdGVtc0RhdGFHZXR0ZXIuZ2V0KGkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG5ld0N1cnJlbnRJZHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zKG5ld0l0ZW1zKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJZHM6IG5ld0N1cnJlbnRJZHNcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgc2V0SGlkZUNvbm5lY3RJdGVtc0xhYmVsKCdEb25lJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGlzTW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHNldElzTG9hZGluZ0xhenlJdGVtcyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICB2YWx1ZTogKCgpID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50SWRzLmhhcyhpZCkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICBsYWJlbDogaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfSkoKVxuICAgIH1cbiAgfSksIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBvbkNsaWNrOiAoKSA9PiBzZXRTaG93Q29ubmVjdEl0ZW1zKGZhbHNlKVxuICB9LCBoaWRlQ29ubmVjdEl0ZW1zTGFiZWwpKSkgOiB2YWx1ZS5pdGVtQmVpbmdDcmVhdGVkID8gY29yZS5qc3goQ2FyZENvbnRhaW5lciwge1xuICAgIG1vZGU6IFwiY3JlYXRlXCJcbiAgfSwgY29yZS5qc3goSW5saW5lQ3JlYXRlLCB7XG4gICAgc2VsZWN0ZWRGaWVsZHM6IHNlbGVjdGVkRmllbGRzLFxuICAgIGZpZWxkczogZmllbGQuZGlzcGxheS5pbmxpbmVDcmVhdGUuZmllbGRzLFxuICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxuICAgIG9uQ2FuY2VsOiAoKSA9PiB7XG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgaXRlbUJlaW5nQ3JlYXRlZDogZmFsc2VcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQ3JlYXRlOiBpdGVtR2V0dGVyID0+IHtcbiAgICAgIGNvbnN0IGlkID0gaXRlbUdldHRlci5kYXRhLmlkO1xuICAgICAgc2V0SXRlbXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtcyksIHt9LCB7XG4gICAgICAgIFtpZF06IGl0ZW1HZXR0ZXJcbiAgICAgIH0pKTtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICBpdGVtQmVpbmdDcmVhdGVkOiBmYWxzZSxcbiAgICAgICAgY3VycmVudElkczogZmllbGQubWFueSA/IG5ldyBTZXQoWy4uLnZhbHVlLmN1cnJlbnRJZHMsIGlkXSkgOiBuZXcgU2V0KFtpZF0pXG4gICAgICB9KSk7XG4gICAgfVxuICB9KSkgOiBmaWVsZC5kaXNwbGF5LmlubGluZUNyZWF0ZSB8fCBmaWVsZC5kaXNwbGF5LmlubGluZUNvbm5lY3QgPyBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XG4gICAgbW9kZTogXCJjcmVhdGVcIlxuICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgZ2FwOiBcInNtYWxsXCIsXG4gICAgbWFyZ2luVG9wOiBcIm1lZGl1bVwiLFxuICAgIGFjcm9zczogdHJ1ZVxuICB9LCBmaWVsZC5kaXNwbGF5LmlubGluZUNyZWF0ZSAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIHRvbmU6IFwicG9zaXRpdmVcIixcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgaXRlbUJlaW5nQ3JlYXRlZDogdHJ1ZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwgXCJDcmVhdGUgXCIsIGZvcmVpZ25MaXN0LnNpbmd1bGFyKSwgZmllbGQuZGlzcGxheS5pbmxpbmVDb25uZWN0ICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgd2VpZ2h0OiBcIm5vbmVcIixcbiAgICB0b25lOiBcInBhc3NpdmVcIixcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBzZXRTaG93Q29ubmVjdEl0ZW1zKHRydWUpO1xuICAgICAgc2V0SGlkZUNvbm5lY3RJdGVtc0xhYmVsKCdDYW5jZWwnKTtcbiAgICB9XG4gIH0sIFwiTGluayBleGlzdGluZyBcIiwgZm9yZWlnbkxpc3Quc2luZ3VsYXIpKSkgOiBudWxsLCBmb3JjZVZhbGlkYXRpb24gJiYgY29yZS5qc3goY29yZS5UZXh0LCB7XG4gICAgY29sb3I6IFwicmVkNjAwXCIsXG4gICAgc2l6ZTogXCJzbWFsbFwiXG4gIH0sIFwiWW91IG11c3QgZmluaXNoIGNyZWF0aW5nIGFuZCBlZGl0aW5nIGFueSByZWxhdGVkIFwiLCBmb3JlaWduTGlzdC5sYWJlbC50b0xvd2VyQ2FzZSgpLCBcIiBiZWZvcmUgc2F2aW5nIHRoZSBcIiwgbG9jYWxMaXN0LnNpbmd1bGFyLnRvTG93ZXJDYXNlKCkpKTtcbn1cblxuZnVuY3Rpb24gTGlua1RvUmVsYXRlZEl0ZW1zKHtcbiAgdmFsdWUsXG4gIGxpc3Rcbn0pIHtcbiAgdmFyIF92YWx1ZSR2YWx1ZTtcblxuICBjb25zdCBjb21tb25Qcm9wcyA9IHtcbiAgICBzaXplOiAnc21hbGwnLFxuICAgIHRvbmU6ICdhY3RpdmUnLFxuICAgIHdlaWdodDogJ2xpbmsnXG4gIH07XG5cbiAgaWYgKHZhbHVlLmtpbmQgPT09ICdtYW55Jykge1xuICAgIHJldHVybiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgIGFzOiByb3V0ZXIuTGluayAvLyBXaGF0IGhhcHBlbnMgd2hlbiB0aGVyZSBhcmUgMTAsMDAwIGlkcz8gVGhlIFVSTCB3b3VsZCBiZSB0b29cbiAgICAgIC8vIGJpZywgc28gd2UgYXJiaXRyYXJpbHkgbGltaXQgaXQgdG8gdGhlIGZpcnN0IDEwMFxuICAgICAgLy8gVE9ETzogd2Ugc2hvdWxkIGJlIGFibGUgdG8gZmlsdGVyIGJ5IHRoaXMsIG5vP1xuICAgICAgLFxuICAgICAgaHJlZjogYC8ke2xpc3QucGF0aH0/IWlkX2luPVwiJHt2YWx1ZS52YWx1ZS5zbGljZSgwLCAxMDApLm1hcCgoe1xuICAgICAgICBpZFxuICAgICAgfSkgPT4gaWQpLmpvaW4oJywnKX1cImBcbiAgICB9KSwgXCJWaWV3IHJlbGF0ZWQgXCIsIGxpc3QucGx1cmFsKTtcbiAgfVxuXG4gIHJldHVybiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICBhczogcm91dGVyLkxpbmssXG4gICAgaHJlZjogYC8ke2xpc3QucGF0aH0vJHsoX3ZhbHVlJHZhbHVlID0gdmFsdWUudmFsdWUpID09PSBudWxsIHx8IF92YWx1ZSR2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3ZhbHVlJHZhbHVlLmlkfWBcbiAgfSksIFwiVmlldyBcIiwgbGlzdC5zaW5ndWxhciwgXCIgZGV0YWlsc1wiKTtcbn1cblxuY29uc3QgUmVsYXRpb25zaGlwTGlua0J1dHRvbiA9ICh7XG4gIGhyZWYsXG4gIGNoaWxkcmVuXG59KSA9PiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gIGNzczoge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgaGVpZ2h0OiAnYXV0bydcbiAgfSxcbiAgd2VpZ2h0OiBcImxpbmtcIixcbiAgdG9uZTogXCJhY3RpdmVcIixcbiAgYXM6IHJvdXRlci5MaW5rLFxuICBocmVmOiBocmVmXG59LCBjaGlsZHJlbik7XG5cbmNvbnN0IFJlbGF0aW9uc2hpcERpc3BsYXkgPSAoe1xuICBsaXN0LFxuICB2YWx1ZVxufSkgPT4ge1xuICBpZiAodmFsdWUua2luZCA9PT0gJ21hbnknKSB7XG4gICAgaWYgKHZhbHVlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KGNvcmUuSW5saW5lLCB7XG4gICAgICAgIGdhcDogXCJzbWFsbFwiXG4gICAgICB9LCB2YWx1ZS52YWx1ZS5tYXAoaSA9PiBjb3JlLmpzeChSZWxhdGlvbnNoaXBMaW5rQnV0dG9uLCB7XG4gICAgICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9LyR7aS5pZH1gXG4gICAgICB9LCBpLmxhYmVsKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwgbnVsbCwgXCIoTm8gXCIsIGxpc3QucGx1cmFsLCBcIilcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh2YWx1ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KFJlbGF0aW9uc2hpcExpbmtCdXR0b24sIHtcbiAgICAgICAgaHJlZjogYC8ke2xpc3QucGF0aH0vJHt2YWx1ZS52YWx1ZS5pZH1gXG4gICAgICB9LCB2YWx1ZS52YWx1ZS5sYWJlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCBudWxsLCBcIihObyBcIiwgbGlzdC5zaW5ndWxhciwgXCIpXCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgYXV0b0ZvY3VzLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGZvcmNlVmFsaWRhdGlvblxufSkgPT4ge1xuICBjb25zdCBrZXlzdG9uZSA9IGNvbnRleHQudXNlS2V5c3RvbmUoKTtcbiAgY29uc3QgZm9yZWlnbkxpc3QgPSBjb250ZXh0LnVzZUxpc3QoZmllbGQucmVmTGlzdEtleSk7XG4gIGNvbnN0IGxvY2FsTGlzdCA9IGNvbnRleHQudXNlTGlzdChmaWVsZC5saXN0S2V5KTtcbiAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0SXNEcmF3ZXJPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBpZiAodmFsdWUua2luZCA9PT0gJ2NhcmRzLXZpZXcnKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICAgIGFzOiBcImZpZWxkc2V0XCIsXG4gICAgICBnYXA6IFwibWVkaXVtXCJcbiAgICB9LCBjb3JlLmpzeChmaWVsZHMuRmllbGRMZWdlbmQsIG51bGwsIGZpZWxkLmxhYmVsKSwgY29yZS5qc3goQ2FyZHMsIHtcbiAgICAgIGZvcmNlVmFsaWRhdGlvbjogZm9yY2VWYWxpZGF0aW9uLFxuICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgaWQ6IHZhbHVlLmlkLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgZm9yZWlnbkxpc3Q6IGZvcmVpZ25MaXN0LFxuICAgICAgbG9jYWxMaXN0OiBsb2NhbExpc3RcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwge1xuICAgIGFzOiBcImxlZ2VuZFwiXG4gIH0sIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBjb3JlLmpzeChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJtZWRpdW1cIlxuICB9LCBjb3JlLmpzeCh0eXBlc19yZWxhdGlvbnNoaXBfdmlld3NfUmVsYXRpb25zaGlwU2VsZWN0X2Rpc3RfZmllbGRzLlJlbGF0aW9uc2hpcFNlbGVjdCwge1xuICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxuICAgIHN0YXRlOiB2YWx1ZS5raW5kID09PSAnbWFueScgPyB7XG4gICAgICBraW5kOiAnbWFueScsXG4gICAgICB2YWx1ZTogdmFsdWUudmFsdWUsXG5cbiAgICAgIG9uQ2hhbmdlKG5ld0l0ZW1zKSB7XG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgIHZhbHVlOiBuZXdJdGVtc1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICB9IDoge1xuICAgICAga2luZDogJ29uZScsXG4gICAgICB2YWx1ZTogdmFsdWUudmFsdWUsXG5cbiAgICAgIG9uQ2hhbmdlKG5ld1ZhbCkge1xuICAgICAgICBpZiAodmFsdWUua2luZCA9PT0gJ29uZScpIHtcbiAgICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICAgIHZhbHVlOiBuZXdWYWxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBhY3Jvc3M6IHRydWUsXG4gICAgZ2FwOiBcInNtYWxsXCJcbiAgfSwgIWZpZWxkLmhpZGVDcmVhdGUgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICBkaXNhYmxlZDogaXNEcmF3ZXJPcGVuLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIHNldElzRHJhd2VyT3Blbih0cnVlKTtcbiAgICB9XG4gIH0sIFwiQ3JlYXRlIHJlbGF0ZWQgXCIsIGZvcmVpZ25MaXN0LnNpbmd1bGFyKSwga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0uc3RhdGUgPT09ICdhdXRoZW50aWNhdGVkJyAmJiBrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5saXN0S2V5ID09PSBmaWVsZC5yZWZMaXN0S2V5ICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgaXNEaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBpZiAoa2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0uc3RhdGUgPT09ICdhdXRoZW50aWNhdGVkJykge1xuICAgICAgICBjb25zdCB2YWwgPSB7XG4gICAgICAgICAgbGFiZWw6IGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLmxhYmVsLFxuICAgICAgICAgIGlkOiBrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh2YWx1ZS5raW5kID09PSAnbWFueScpIHtcbiAgICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICAgIHZhbHVlOiBbLi4udmFsdWUudmFsdWUsIHZhbF1cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB2YWx1ZS5raW5kID09PSAnbWFueScgPyAnQWRkICcgOiAnU2V0IGFzICcsIGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLmxhYmVsKSwgISEodmFsdWUua2luZCA9PT0gJ21hbnknID8gdmFsdWUudmFsdWUubGVuZ3RoIDogdmFsdWUua2luZCA9PT0gJ29uZScgJiYgdmFsdWUudmFsdWUpICYmIGNvcmUuanN4KExpbmtUb1JlbGF0ZWRJdGVtcywge1xuICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KSkpLCBjb3JlLmpzeChtb2RhbHMuRHJhd2VyQ29udHJvbGxlciwge1xuICAgIGlzT3BlbjogaXNEcmF3ZXJPcGVuXG4gIH0sIGNvcmUuanN4KGNvbXBvbmVudHMuQ3JlYXRlSXRlbURyYXdlciwge1xuICAgIGxpc3RLZXk6IGZvcmVpZ25MaXN0LmtleSxcbiAgICBvbkNsb3NlOiAoKSA9PiB7XG4gICAgICBzZXRJc0RyYXdlck9wZW4oZmFsc2UpO1xuICAgIH0sXG4gICAgb25DcmVhdGU6IHZhbCA9PiB7XG4gICAgICBzZXRJc0RyYXdlck9wZW4oZmFsc2UpO1xuXG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ21hbnknKSB7XG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgIHZhbHVlOiBbLi4udmFsdWUudmFsdWUsIHZhbF1cbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5raW5kID09PSAnb25lJykge1xuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKSkgOiBjb3JlLmpzeChSZWxhdGlvbnNoaXBEaXNwbGF5LCB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGxpc3Q6IGZvcmVpZ25MaXN0XG4gIH0pKTtcbn07XG5jb25zdCBDZWxsID0gKHtcbiAgZmllbGQsXG4gIGl0ZW1cbn0pID0+IHtcbiAgY29uc3QgbGlzdCA9IGNvbnRleHQudXNlTGlzdChmaWVsZC5yZWZMaXN0S2V5KTtcbiAgY29uc3QgZGF0YSA9IGl0ZW1bZmllbGQucGF0aF07XG4gIGNvbnN0IGl0ZW1zID0gKEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdKS5maWx0ZXIoaXRlbSA9PiBpdGVtKTtcbiAgY29uc3QgZGlzcGxheUl0ZW1zID0gaXRlbXMubGVuZ3RoIDwgNSA/IGl0ZW1zIDogaXRlbXMuc2xpY2UoMCwgMyk7XG4gIGNvbnN0IG92ZXJmbG93ID0gaXRlbXMubGVuZ3RoIDwgNSA/IDAgOiBpdGVtcy5sZW5ndGggLSAzO1xuICBjb25zdCB7XG4gICAgY29sb3JzXG4gIH0gPSBjb3JlLnVzZVRoZW1lKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBjb2xvcjogY29sb3JzLmZvcmVncm91bmQsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgfVxuICB9O1xuICByZXR1cm4gY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCBkaXNwbGF5SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gY29yZS5qc3goUmVhY3QuRnJhZ21lbnQsIHtcbiAgICBrZXk6IGl0ZW0uaWRcbiAgfSwgISFpbmRleCA/ICcsICcgOiAnJywgY29yZS5qc3gocm91dGVyLkxpbmssIHtcbiAgICBocmVmOiBgLyR7bGlzdC5wYXRofS9baWRdYCxcbiAgICBhczogYC8ke2xpc3QucGF0aH0vJHtpdGVtLmlkfWAsXG4gICAgY3NzOiBzdHlsZXNcbiAgfSwgaXRlbS5sYWJlbCB8fCBpdGVtLmlkKSkpLCBvdmVyZmxvdyA/IGAsIGFuZCAke292ZXJmbG93fSBtb3JlYCA6IG51bGwpO1xufTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGZpZWxkLFxuICBpdGVtXG59KSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBjb250ZXh0LnVzZUxpc3QoZmllbGQucmVmTGlzdEtleSk7XG4gIGNvbnN0IGRhdGEgPSBpdGVtW2ZpZWxkLnBhdGhdO1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCAoQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV0pLmZpbHRlcihpdGVtID0+IGl0ZW0pLm1hcCgoaXRlbSwgaW5kZXgpID0+IGNvcmUuanN4KFJlYWN0LkZyYWdtZW50LCB7XG4gICAga2V5OiBpdGVtLmlkXG4gIH0sICEhaW5kZXggPyAnLCAnIDogJycsIGNvcmUuanN4KHJvdXRlci5MaW5rLCB7XG4gICAgaHJlZjogYC8ke2xpc3QucGF0aH0vW2lkXWAsXG4gICAgYXM6IGAvJHtsaXN0LnBhdGh9LyR7aXRlbS5pZH1gXG4gIH0sIGl0ZW0ubGFiZWwgfHwgaXRlbS5pZCkpKSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgbWFueTogY29uZmlnLmZpZWxkTWV0YS5tYW55LFxuICAgIGxpc3RLZXk6IGNvbmZpZy5saXN0S2V5LFxuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZGlzcGxheTogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSA9PT0gJ2NhcmRzJyA/IHtcbiAgICAgIG1vZGU6ICdjYXJkcycsXG4gICAgICBjYXJkRmllbGRzOiBjb25maWcuZmllbGRNZXRhLmNhcmRGaWVsZHMsXG4gICAgICBpbmxpbmVDcmVhdGU6IGNvbmZpZy5maWVsZE1ldGEuaW5saW5lQ3JlYXRlLFxuICAgICAgaW5saW5lRWRpdDogY29uZmlnLmZpZWxkTWV0YS5pbmxpbmVFZGl0LFxuICAgICAgbGlua1RvSXRlbTogY29uZmlnLmZpZWxkTWV0YS5saW5rVG9JdGVtLFxuICAgICAgcmVtb3ZlTW9kZTogY29uZmlnLmZpZWxkTWV0YS5yZW1vdmVNb2RlLFxuICAgICAgaW5saW5lQ29ubmVjdDogY29uZmlnLmZpZWxkTWV0YS5pbmxpbmVDb25uZWN0XG4gICAgfSA6IHtcbiAgICAgIG1vZGU6ICdzZWxlY3QnLFxuICAgICAgcmVmTGFiZWxGaWVsZDogY29uZmlnLmZpZWxkTWV0YS5yZWZMYWJlbEZpZWxkXG4gICAgfSxcbiAgICByZWZMaXN0S2V5OiBjb25maWcuZmllbGRNZXRhLnJlZkxpc3RLZXksXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSA9PT0gJ2NhcmRzJyA/IC8vIFRPRE86IG5hbWVzcGFjZSB0aGlzIHN0dWZmIGF0IHRoZSBLZXlzdG9uZSBsZXZlbFxuICAgIGAke2NvbmZpZy5wYXRofV9faWQ6IGlkXG4gICAgICAgICAgICR7Y29uZmlnLnBhdGh9IHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgIH1gIDogYCR7Y29uZmlnLnBhdGh9IHtcbiAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgIGxhYmVsOiAke2NvbmZpZy5maWVsZE1ldGEucmVmTGFiZWxGaWVsZH1cbiAgICAgICAgICAgfWAsXG4gICAgaGlkZUNyZWF0ZTogY29uZmlnLmZpZWxkTWV0YS5oaWRlQ3JlYXRlLFxuICAgIGRlZmF1bHRWYWx1ZTogY29uZmlnLmZpZWxkTWV0YS5tYW55ID8ge1xuICAgICAga2luZDogJ21hbnknLFxuICAgICAgaW5pdGlhbFZhbHVlOiBbXSxcbiAgICAgIHZhbHVlOiBbXVxuICAgIH0gOiB7XG4gICAgICBraW5kOiAnb25lJyxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgaW5pdGlhbFZhbHVlOiBudWxsXG4gICAgfSxcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XG4gICAgICBpZiAoY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSA9PT0gJ2NhcmRzJykge1xuICAgICAgICBjb25zdCBpbml0aWFsSWRzID0gbmV3IFNldCgoQXJyYXkuaXNBcnJheShkYXRhW2NvbmZpZy5wYXRoXSkgPyBkYXRhW2NvbmZpZy5wYXRoXSA6IGRhdGFbY29uZmlnLnBhdGhdID8gW2RhdGFbY29uZmlnLnBhdGhdXSA6IFtdKS5tYXAoeCA9PiB4LmlkKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogJ2NhcmRzLXZpZXcnLFxuICAgICAgICAgIGlkOiBkYXRhW2Ake2NvbmZpZy5wYXRofV9faWRgXSxcbiAgICAgICAgICBpdGVtc0JlaW5nRWRpdGVkOiBuZXcgU2V0KCksXG4gICAgICAgICAgaXRlbUJlaW5nQ3JlYXRlZDogZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbElkcyxcbiAgICAgICAgICBjdXJyZW50SWRzOiBpbml0aWFsSWRzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuZmllbGRNZXRhLm1hbnkpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gKGRhdGFbY29uZmlnLnBhdGhdIHx8IFtdKS5tYXAoeCA9PiAoe1xuICAgICAgICAgIGlkOiB4LmlkLFxuICAgICAgICAgIGxhYmVsOiB4LmxhYmVsIHx8IHguaWRcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdtYW55JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IHZhbHVlLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGxldCB2YWx1ZSA9IGRhdGFbY29uZmlnLnBhdGhdO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgaWQ6IHZhbHVlLmlkLFxuICAgICAgICAgIGxhYmVsOiB2YWx1ZS5sYWJlbCB8fCB2YWx1ZS5pZFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiAnb25lJyxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGluaXRpYWxWYWx1ZTogdmFsdWVcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUua2luZCAhPT0gJ2NhcmRzLXZpZXcnIHx8IHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQuc2l6ZSA9PT0gMCAmJiAhdmFsdWUuaXRlbUJlaW5nQ3JlYXRlZDtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplOiBzdGF0ZSA9PiB7XG4gICAgICBpZiAoc3RhdGUua2luZCA9PT0gJ21hbnknKSB7XG4gICAgICAgIGNvbnN0IG5ld0FsbElkcyA9IG5ldyBTZXQoc3RhdGUudmFsdWUubWFwKHggPT4geC5pZCkpO1xuICAgICAgICBjb25zdCBpbml0aWFsSWRzID0gbmV3IFNldChzdGF0ZS5pbml0aWFsVmFsdWUubWFwKHggPT4geC5pZCkpO1xuICAgICAgICBsZXQgZGlzY29ubmVjdCA9IHN0YXRlLmluaXRpYWxWYWx1ZS5maWx0ZXIoeCA9PiAhbmV3QWxsSWRzLmhhcyh4LmlkKSkubWFwKHggPT4gKHtcbiAgICAgICAgICBpZDogeC5pZFxuICAgICAgICB9KSk7XG4gICAgICAgIGxldCBjb25uZWN0ID0gc3RhdGUudmFsdWUuZmlsdGVyKHggPT4gIWluaXRpYWxJZHMuaGFzKHguaWQpKS5tYXAoeCA9PiAoe1xuICAgICAgICAgIGlkOiB4LmlkXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoZGlzY29ubmVjdC5sZW5ndGggfHwgY29ubmVjdC5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgb3V0cHV0ID0ge307XG5cbiAgICAgICAgICBpZiAoZGlzY29ubmVjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIG91dHB1dC5kaXNjb25uZWN0ID0gZGlzY29ubmVjdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29ubmVjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIG91dHB1dC5jb25uZWN0ID0gY29ubmVjdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXTogb3V0cHV0XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5raW5kID09PSAnb25lJykge1xuICAgICAgICB2YXIgX3N0YXRlJGluaXRpYWxWYWx1ZTtcblxuICAgICAgICBpZiAoc3RhdGUuaW5pdGlhbFZhbHVlICYmICFzdGF0ZS52YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB7XG4gICAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IHtcbiAgICAgICAgICAgICAgICBpZDogc3RhdGUuaW5pdGlhbFZhbHVlLmlkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLnZhbHVlICYmIHN0YXRlLnZhbHVlLmlkICE9PSAoKF9zdGF0ZSRpbml0aWFsVmFsdWUgPSBzdGF0ZS5pbml0aWFsVmFsdWUpID09PSBudWxsIHx8IF9zdGF0ZSRpbml0aWFsVmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdGF0ZSRpbml0aWFsVmFsdWUuaWQpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IHtcbiAgICAgICAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgICAgICAgIGlkOiBzdGF0ZS52YWx1ZS5pZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5raW5kID09PSAnY2FyZHMtdmlldycpIHtcbiAgICAgICAgbGV0IGRpc2Nvbm5lY3QgPSBbLi4uc3RhdGUuaW5pdGlhbElkc10uZmlsdGVyKGlkID0+ICFzdGF0ZS5jdXJyZW50SWRzLmhhcyhpZCkpLm1hcChpZCA9PiAoe1xuICAgICAgICAgIGlkXG4gICAgICAgIH0pKTtcbiAgICAgICAgbGV0IGNvbm5lY3QgPSBbLi4uc3RhdGUuY3VycmVudElkc10uZmlsdGVyKGlkID0+ICFzdGF0ZS5pbml0aWFsSWRzLmhhcyhpZCkpLm1hcChpZCA9PiAoe1xuICAgICAgICAgIGlkXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoY29uZmlnLmZpZWxkTWV0YS5tYW55KSB7XG4gICAgICAgICAgaWYgKGRpc2Nvbm5lY3QubGVuZ3RoIHx8IGNvbm5lY3QubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB7XG4gICAgICAgICAgICAgICAgY29ubmVjdDogY29ubmVjdC5sZW5ndGggPyBjb25uZWN0IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IGRpc2Nvbm5lY3QubGVuZ3RoID8gZGlzY29ubmVjdCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb25uZWN0Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB7XG4gICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3RbMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGRpc2Nvbm5lY3QubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IHtcbiAgICAgICAgICAgICAgZGlzY29ubmVjdDogZGlzY29ubmVjdFswXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgc2VnbWVudGVkQ29udHJvbCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9zZWdtZW50ZWQtY29udHJvbCcpO1xuXG4vKiBAanN4IGpzeCAqL1xuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBhdXRvRm9jdXNcbn0pID0+IGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgZmllbGQuZGlzcGxheU1vZGUgPT09ICdzZWxlY3QnID8gY29yZS5qc3goZmllbGRzLlNlbGVjdCwge1xuICBpc0NsZWFyYWJsZTogdHJ1ZSxcbiAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gIG9wdGlvbnM6IGZpZWxkLm9wdGlvbnMsXG4gIGlzRGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XG4gICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKHZhbHVlKTtcbiAgfSxcbiAgdmFsdWU6IHZhbHVlLFxuICBwb3J0YWxNZW51OiB0cnVlXG59KSA6IGNvcmUuanN4KHNlZ21lbnRlZENvbnRyb2wuU2VnbWVudGVkQ29udHJvbCwge1xuICBzZWdtZW50czogZmllbGQub3B0aW9ucy5tYXAoeCA9PiB4LmxhYmVsKSxcbiAgc2VsZWN0ZWRJbmRleDogdmFsdWUgPyBmaWVsZC5vcHRpb25zLmZpbmRJbmRleCh4ID0+IHgudmFsdWUgPT09IHZhbHVlLnZhbHVlKSA6IHVuZGVmaW5lZCxcbiAgb25DaGFuZ2U6IGluZGV4ID0+IHtcbiAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UoZmllbGQub3B0aW9uc1tpbmRleF0pO1xuICB9XG59KSk7XG5jb25zdCBDZWxsID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxpbmtUb1xufSkgPT4ge1xuICB2YXIgX2ZpZWxkJG9wdGlvbnMkZmluZDtcblxuICBsZXQgdmFsdWUgPSBpdGVtW2ZpZWxkLnBhdGhdICsgJyc7XG4gIGNvbnN0IGxhYmVsID0gKF9maWVsZCRvcHRpb25zJGZpbmQgPSBmaWVsZC5vcHRpb25zLmZpbmQoeCA9PiB4LnZhbHVlID09PSB2YWx1ZSkpID09PSBudWxsIHx8IF9maWVsZCRvcHRpb25zJGZpbmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9maWVsZCRvcHRpb25zJGZpbmQubGFiZWw7XG4gIHJldHVybiBsaW5rVG8gPyBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxMaW5rLCBsaW5rVG8sIGxhYmVsKSA6IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgbGFiZWwpO1xufTtcbkNlbGwuc3VwcG9ydHNMaW5rVG8gPSB0cnVlO1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgdmFyIF9maWVsZCRvcHRpb25zJGZpbmQyO1xuXG4gIGNvbnN0IGxhYmVsID0gKF9maWVsZCRvcHRpb25zJGZpbmQyID0gZmllbGQub3B0aW9ucy5maW5kKHggPT4geC52YWx1ZSA9PT0gaXRlbVtmaWVsZC5wYXRoXSkpID09PSBudWxsIHx8IF9maWVsZCRvcHRpb25zJGZpbmQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkb3B0aW9ucyRmaW5kMi5sYWJlbDtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgbGFiZWwpO1xufTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICBjb25zdCBvcHRpb25zV2l0aFN0cmluZ1ZhbHVlcyA9IGNvbmZpZy5maWVsZE1ldGEub3B0aW9ucy5tYXAoeCA9PiAoe1xuICAgIGxhYmVsOiB4LmxhYmVsLFxuICAgIHZhbHVlOiB4LnZhbHVlLnRvU3RyaW5nKClcbiAgfSkpO1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGRhdGFUeXBlOiBjb25maWcuZmllbGRNZXRhLmRhdGFUeXBlLFxuICAgIGRpc3BsYXlNb2RlOiBjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNXaXRoU3RyaW5nVmFsdWVzLFxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcbiAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGNvbmZpZy5maWVsZE1ldGEub3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBkYXRhW2NvbmZpZy5wYXRoXSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbDogb3B0aW9uLmxhYmVsLFxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZS50b1N0cmluZygpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogdmFsdWUgPT4ge1xuICAgICAgdmFyIF92YWx1ZSR2YWx1ZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogKF92YWx1ZSR2YWx1ZSA9IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS52YWx1ZSkgIT09IG51bGwgJiYgX3ZhbHVlJHZhbHVlICE9PSB2b2lkIDAgPyBfdmFsdWUkdmFsdWUgOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5NdWx0aVNlbGVjdCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zV2l0aFN0cmluZ1ZhbHVlcyxcbiAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgICAgYXV0b0ZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgZ3JhcGhxbDogKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWU6IG9wdGlvbnNcbiAgICAgIH0pID0+IHtcbiAgICAgICAgY29uc3QgaW52ZXJ0ZWQgPSB0eXBlID09PSAnbm90X21hdGNoZXMnO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW2Ake2NvbmZpZy5wYXRofSR7aW52ZXJ0ZWQgPyAnX25vdCcgOiAnJ31gXTogbnVsbFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc011bHRpID0gb3B0aW9ucy5sZW5ndGggPiAxO1xuICAgICAgICBsZXQga2V5ID0gY29uZmlnLnBhdGg7XG5cbiAgICAgICAgaWYgKGlzTXVsdGkgJiYgaW52ZXJ0ZWQpIHtcbiAgICAgICAgICBrZXkgPSBgJHtjb25maWcucGF0aH1fbm90X2luYDtcbiAgICAgICAgfSBlbHNlIGlmIChpc011bHRpKSB7XG4gICAgICAgICAga2V5ID0gYCR7Y29uZmlnLnBhdGh9X2luYDtcbiAgICAgICAgfSBlbHNlIGlmIChpbnZlcnRlZCkge1xuICAgICAgICAgIGtleSA9IGAke2NvbmZpZy5wYXRofV9ub3RgO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc011bHRpID8gb3B0aW9ucy5tYXAoeCA9PiB4LnZhbHVlKSA6IG9wdGlvbnNbMF0udmFsdWU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2tleV06IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBMYWJlbCh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdub3RfbWF0Y2hlcycgPyBgaXMgc2V0YCA6IGBoYXMgbm8gdmFsdWVgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5tYXAoaSA9PiBpLmxhYmVsKS5qb2luKCcsICcpO1xuICAgICAgICAgIHJldHVybiB0eXBlID09PSAnbm90X21hdGNoZXMnID8gYGlzIG5vdCBpbiBbJHt2YWx1ZXN9XWAgOiBgaXMgaW4gWyR7dmFsdWVzfV1gO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZVswXS5sYWJlbDtcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdub3RfbWF0Y2hlcycgPyBgaXMgbm90ICR7b3B0aW9uTGFiZWx9YCA6IGBpcyAke29wdGlvbkxhYmVsfWA7XG4gICAgICB9LFxuXG4gICAgICB0eXBlczoge1xuICAgICAgICBtYXRjaGVzOiB7XG4gICAgICAgICAgbGFiZWw6ICdNYXRjaGVzJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9tYXRjaGVzOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBtYXRjaCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBbXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcblxuLyogQGpzeCBqc3ggKi9cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgYXV0b0ZvY3VzXG59KSA9PiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID8gZmllbGQuZGlzcGxheU1vZGUgPT09ICd0ZXh0YXJlYScgPyBjb3JlLmpzeChmaWVsZHMuVGV4dEFyZWEsIHtcbiAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gIG9uQ2hhbmdlOiBldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpLFxuICB2YWx1ZTogdmFsdWVcbn0pIDogY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgb25DaGFuZ2U6IGV2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSksXG4gIHZhbHVlOiB2YWx1ZVxufSkgOiB2YWx1ZSk7XG5jb25zdCBDZWxsID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxpbmtUb1xufSkgPT4ge1xuICBsZXQgdmFsdWUgPSBpdGVtW2ZpZWxkLnBhdGhdICsgJyc7XG4gIHJldHVybiBsaW5rVG8gPyBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxMaW5rLCBsaW5rVG8sIHZhbHVlKSA6IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgdmFsdWUpO1xufTtcbkNlbGwuc3VwcG9ydHNMaW5rVG8gPSB0cnVlO1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgaXRlbVtmaWVsZC5wYXRoXSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIGRpc3BsYXlNb2RlOiBjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlLFxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtjb25maWcucGF0aF07XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogJyc7XG4gICAgfSxcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+ICh7XG4gICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZVxuICAgIH0pLFxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gICAgICAgICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgICAgYXV0b0ZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgZ3JhcGhxbDogKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHlwZSA9PT0gJ2lzX2knID8gYCR7Y29uZmlnLnBhdGh9X2lgIDogYCR7Y29uZmlnLnBhdGh9XyR7dHlwZX1gO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pIHtcbiAgICAgICAgcmV0dXJuIGAke2xhYmVsLnRvTG93ZXJDYXNlKCl9OiBcIiR7dmFsdWV9XCJgO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgY29udGFpbnNfaToge1xuICAgICAgICAgIGxhYmVsOiAnQ29udGFpbnMnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2NvbnRhaW5zX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0RvZXMgbm90IGNvbnRhaW4nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgaXNfaToge1xuICAgICAgICAgIGxhYmVsOiAnSXMgZXhhY3RseScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3RfaToge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbm90IGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRzX3dpdGhfaToge1xuICAgICAgICAgIGxhYmVsOiAnU3RhcnRzIHdpdGgnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X3N0YXJ0c193aXRoX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0RvZXMgbm90IHN0YXJ0IHdpdGgnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgZW5kc193aXRoX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0VuZHMgd2l0aCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3RfZW5kc193aXRoX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0RvZXMgbm90IGVuZCB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZGF0ZUZucyA9IHJlcXVpcmUoJ2RhdGUtZm5zJyk7XG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG5cbmNvbnN0IGdldFRpbWUgPSB0aW1lVmFsdWUgPT4ge1xuICBpZiAoIXRpbWVWYWx1ZSkgcmV0dXJuIFswLCAwXTtcbiAgcmV0dXJuIHRpbWVWYWx1ZS5zcGxpdCgnOicpLm1hcChuID0+IE51bWJlcihuKSk7XG59O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRGF0ZShkYXRlKSB7XG4gIGlmICghZGF0ZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gQm9vbGVhbihkYXRlRm5zLnBhcnNlSVNPKGRhdGUpLnRvSVNPU3RyaW5nKCkpO1xufVxuZnVuY3Rpb24gaXNWYWxpZFRpbWUodGltZSkge1xuICBpZiAoIXRpbWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0ZUZucy5pc1ZhbGlkKGRhdGVGbnMucGFyc2UodGltZSwgJ0hIOm1tJywgbmV3IERhdGUoKSkpO1xufVxuZnVuY3Rpb24gaXNWYWxpZElTTyh2YWx1ZSkge1xuICB0cnkge1xuICAgIC8vIHRvSVNPU3RyaW5nIGNvbnZlcnRzIG91ciBzdHJpbmcgaW50byB6dWx1IHRpbWVcbiAgICAvLyBpbnN0ZWFkIG9mIGNoZWNraW5nIGZvciB0aGUgdGltZXN0YW1wIHRvIGJlIHNwZWNpZmljYWxseSBpbiB6dWx1IHRpbWVcbiAgICAvLyB3ZSByZWxheCB0aGUgdmFsaWRhdGlvbiBoZXJlIGEgbGl0dGxlLCB0byBqdXN0IGJlIGEgdmFsaWQgSVNPIHN0cmluZy5cbiAgICByZXR1cm4gQm9vbGVhbihkYXRlRm5zLnBhcnNlSVNPKGNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSkpLnRvSVNPU3RyaW5nKCkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIGNvbnN0cnVjdFRpbWVzdGFtcCh7XG4gIGRhdGVWYWx1ZSxcbiAgdGltZVZhbHVlXG59KSB7XG4gIGxldCBmb3JtYXR0ZWREYXRlID0gbmV3IERhdGUoZGF0ZVZhbHVlKTtcbiAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IGdldFRpbWUodGltZVZhbHVlKTtcbiAgZm9ybWF0dGVkRGF0ZS5zZXRIb3Vycyhob3Vycyk7XG4gIGZvcm1hdHRlZERhdGUuc2V0TWludXRlcyhtaW51dGVzKTtcbiAgcmV0dXJuIGRhdGVGbnMuZm9ybWF0SVNPKGZvcm1hdHRlZERhdGUpO1xufVxuZnVuY3Rpb24gZGVjb25zdHJ1Y3RUaW1lc3RhbXAodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXRlVmFsdWU6IHZhbHVlLFxuICAgIHRpbWVWYWx1ZTogcmVzb2x2ZUluaXRpYWxUaW1lVmFsdWUodmFsdWUpXG4gIH07XG59XG5mdW5jdGlvbiBmb3JtYXRPdXRwdXQodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICByZXR1cm4gYCR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX0gJHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfWA7XG59XG5mdW5jdGlvbiByZXNvbHZlSW5pdGlhbFRpbWVWYWx1ZSh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGNvbnN0IGRhdGUgPSB2YWx1ZSB8fCBkZWZhdWx0VmFsdWU7XG4gIGlmICghZGF0ZSkgcmV0dXJuICcnO1xuICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIGhvdXIxMjogZmFsc2VcbiAgfSk7XG59XG5cbmNvbnN0IFRpbWVQaWNrZXIgPSAoe1xuICBhdXRvRm9jdXMsXG4gIG9uQmx1cixcbiAgZGlzYWJsZWQsXG4gIG9uQ2hhbmdlLFxuICBmb3JtYXQgPSAnMjRocicsXG4gIHZhbHVlXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgbWF4TGVuZ3RoOiBmb3JtYXQgPT09ICcyNGhyJyA/IDUgOiA3LFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgb25CbHVyOiBvbkJsdXIsXG4gICAgcGxhY2Vob2xkZXI6IGZvcm1hdCA9PT0gJzI0aHInID8gJzAwOjAwJyA6ICcwMDowMGFtJyxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59O1xuXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGZvcmNlVmFsaWRhdGlvblxufSkgPT4ge1xuICBjb25zdCBbdG91Y2hlZEZpcnN0SW5wdXQsIHNldFRvdWNoZWRGaXJzdElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvdWNoZWRTZWNvbmRJbnB1dCwgc2V0VG91Y2hlZFNlY29uZElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2hvd1ZhbGlkYXRpb24gPSB0b3VjaGVkRmlyc3RJbnB1dCAmJiB0b3VjaGVkU2Vjb25kSW5wdXQgfHwgZm9yY2VWYWxpZGF0aW9uO1xuXG4gIGNvbnN0IHNob3dEYXRlRXJyb3IgPSBkYXRlVmFsdWUgPT4ge1xuICAgIGlmICghZGF0ZVZhbHVlKSB7XG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwge1xuICAgICAgICBjc3M6IHtcbiAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgfVxuICAgICAgfSwgXCJQbGVhc2Ugc2VsZWN0IGEgZGF0ZSB2YWx1ZS5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuICFpc1ZhbGlkRGF0ZShkYXRlVmFsdWUpICYmIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICAgIGNzczoge1xuICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgIH1cbiAgICB9LCBcIkluY29ycmVjdCBkYXRlIHZhbHVlXCIpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dUaW1lRXJyb3IgPSB0aW1lVmFsdWUgPT4ge1xuICAgIGlmICghdGltZVZhbHVlKSB7XG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwge1xuICAgICAgICBjc3M6IHtcbiAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgfVxuICAgICAgfSwgXCJQbGVhc2Ugc2VsZWN0IGEgdGltZSB2YWx1ZS5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuICFpc1ZhbGlkVGltZSh0aW1lVmFsdWUpICYmIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICAgIGNzczoge1xuICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgIH1cbiAgICB9LCBcIlRpbWUgbXVzdCBiZSBpbiB0aGUgZm9ybSBISDptbVwiKTtcbiAgfTtcblxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA/IGNvcmUuanN4KGNvcmUuU3RhY2ssIG51bGwsIGNvcmUuanN4KGNvcmUuSW5saW5lLCB7XG4gICAgZ2FwOiBcInNtYWxsXCJcbiAgfSwgY29yZS5qc3goY29yZS5TdGFjaywgbnVsbCwgY29yZS5qc3goZmllbGRzLkRhdGVQaWNrZXIsIHtcbiAgICBvblVwZGF0ZTogZGF0ZSA9PiB7XG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgZGF0ZVZhbHVlOiBkYXRlIHx8ICcnXG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkNsZWFyOiAoKSA9PiB7XG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgZGF0ZVZhbHVlOiAnJ1xuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25CbHVyOiAoKSA9PiBzZXRUb3VjaGVkRmlyc3RJbnB1dCh0cnVlKSxcbiAgICB2YWx1ZTogdmFsdWUuZGF0ZVZhbHVlXG4gIH0pLCBzaG93VmFsaWRhdGlvbiAmJiBzaG93RGF0ZUVycm9yKHZhbHVlLmRhdGVWYWx1ZSkpLCBjb3JlLmpzeChjb3JlLlN0YWNrLCBudWxsLCBjb3JlLmpzeChUaW1lUGlja2VyLCB7XG4gICAgb25CbHVyOiAoKSA9PiBzZXRUb3VjaGVkU2Vjb25kSW5wdXQodHJ1ZSksXG4gICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgZm9ybWF0OiBcIjI0aHJcIixcbiAgICBvbkNoYW5nZTogZXZlbnQgPT4gb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICB0aW1lVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pKSxcbiAgICB2YWx1ZTogdmFsdWUudGltZVZhbHVlIHx8ICcnXG4gIH0pLCBzaG93VmFsaWRhdGlvbiAmJiBzaG93VGltZUVycm9yKHZhbHVlLnRpbWVWYWx1ZSkpKSkgOiBpc1ZhbGlkSVNPKHZhbHVlKSA/IGZvcm1hdE91dHB1dChjb25zdHJ1Y3RUaW1lc3RhbXAodmFsdWUpKSA6ICcnKTtcbn07XG5jb25zdCBDZWxsID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxpbmtUb1xufSkgPT4ge1xuICBsZXQgdmFsdWUgPSBpdGVtW2ZpZWxkLnBhdGhdO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goY29tcG9uZW50cy5DZWxsTGluaywgbGlua1RvLCBmb3JtYXRPdXRwdXQodmFsdWUpKSA6IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgZm9ybWF0T3V0cHV0KHZhbHVlKSk7XG59O1xuQ2VsbC5zdXBwb3J0c0xpbmtUbyA9IHRydWU7XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2ZpZWxkLnBhdGhdKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAgZGF0ZVZhbHVlOiAnJyxcbiAgICAgIHRpbWVWYWx1ZTogJydcbiAgICB9LFxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtjb25maWcucGF0aF07XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZGVjb25zdHJ1Y3RUaW1lc3RhbXAodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRlVmFsdWU6ICcnLFxuICAgICAgICB0aW1lVmFsdWU6ICcnXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiAoe1xuICAgICAgZGF0ZVZhbHVlLFxuICAgICAgdGltZVZhbHVlXG4gICAgfSkgPT4ge1xuICAgICAgaWYgKGRhdGVWYWx1ZSAmJiB0aW1lVmFsdWUgJiYgaXNWYWxpZElTTyh7XG4gICAgICAgIGRhdGVWYWx1ZSxcbiAgICAgICAgdGltZVZhbHVlXG4gICAgICB9KSkge1xuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGNvbnN0cnVjdFRpbWVzdGFtcCh7XG4gICAgICAgICAgZGF0ZVZhbHVlLFxuICAgICAgICAgIHRpbWVWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbY29uZmlnLnBhdGhdOiBmb3JtYXR0ZWREYXRlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtjb25maWcucGF0aF06IG51bGxcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZhbGlkYXRlKHtcbiAgICAgIGRhdGVWYWx1ZSxcbiAgICAgIHRpbWVWYWx1ZVxuICAgIH0pIHtcbiAgICAgIGlmICghZGF0ZVZhbHVlICYmICF0aW1lVmFsdWUpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKCFkYXRlVmFsdWUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghdGltZVZhbHVlKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gaXNWYWxpZElTTyh7XG4gICAgICAgIGRhdGVWYWx1ZSxcbiAgICAgICAgdGltZVZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoUmVhY3QpO1xuXG4vLyBidXQgSSdkIGxpa2UgdG8gcHJlc2VudCBpdCBhcyBiZXN0IGFzIHBvc3NpYmxlLlxuLy8gVG9EbzogQmV0dGVyIHByZXNlbnRhdGlvbiBmb3IgbW9yZSB0eXBlcyBvZiBkYXRhXG5cbmNvbnN0IHN0cmluZ2lmeSA9IGRhdGEgPT4ge1xuICBjb25zdCBvbWl0VHlwZW5hbWUgPSAoa2V5LCB2YWx1ZSkgPT4ga2V5ID09PSAnX190eXBlbmFtZScgPyB1bmRlZmluZWQgOiB2YWx1ZTtcblxuICBjb25zdCBkYXRhV2l0aG91dFR5cGVuYW1lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSwgb21pdFR5cGVuYW1lKTtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGFXaXRob3V0VHlwZW5hbWUsIG51bGwsIDIpO1xufTtcblxuZnVuY3Rpb24gUHJldHR5RGF0YSh7XG4gIGRhdGFcbn0pIHtcbiAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcbiAgbGV0IHByZXR0eURhdGEgPSAnJztcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykgcHJldHR5RGF0YSA9IGRhdGE7ZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSBwcmV0dHlEYXRhID0gZGF0YTtlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICBwcmV0dHlEYXRhID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0WydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcInByZVwiLCBudWxsLCBzdHJpbmdpZnkoZGF0YSkpO1xuICB9IGVsc2Uge1xuICAgIHByZXR0eURhdGEgPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFwicHJlXCIsIG51bGwsIHN0cmluZ2lmeShkYXRhKSk7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHByZXR0eURhdGEpO1xufVxuXG4vKiBAanN4IGpzeCAqL1xuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWVcbn0pID0+IHZhbHVlID09PSBjcmVhdGVWaWV3VmFsdWUgPyBudWxsIDogY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBjb3JlLmpzeChQcmV0dHlEYXRhLCB7XG4gIGRhdGE6IHZhbHVlXG59KSk7XG5jb25zdCBDZWxsID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KFByZXR0eURhdGEsIHtcbiAgICBkYXRhOiBpdGVtW2ZpZWxkLnBhdGhdXG4gIH0pO1xufTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGNvcmUuanN4KFByZXR0eURhdGEsIHtcbiAgICBkYXRhOiBpdGVtW2ZpZWxkLnBhdGhdXG4gIH0pKTtcbn07XG5jb25zdCBjcmVhdGVWaWV3VmFsdWUgPSBTeW1ib2woJ2NyZWF0ZSB2aWV3IHZpcnR1YWwgZmllbGQgdmFsdWUnKTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogYCR7Y29uZmlnLnBhdGh9JHtjb25maWcuZmllbGRNZXRhLmdyYXBoUUxSZXR1cm5GcmFnbWVudH1gLFxuICAgIGRlZmF1bHRWYWx1ZTogY3JlYXRlVmlld1ZhbHVlLFxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcbiAgICAgIHJldHVybiBkYXRhW2NvbmZpZy5wYXRoXTtcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogKCkgPT4gKHt9KVxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBLZXlzdG9uZVByb3ZpZGVyIH0gZnJvbSAnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29udGV4dCc7XG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSAnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSAnQGtleXN0b25lLXVpL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyB2aWV3MWRkMTQ0NzUgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9tb25nb0lkL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXdkNTExYzRkNSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RleHQvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzhmZDI3ODU0IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcGFzc3dvcmQvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlld2RjYTk0MTUxIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcmVsYXRpb25zaGlwL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXczZDEwMmRkOSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RpbWVzdGFtcC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3NmZlM2M0ZGUgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9zZWxlY3Qvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlld2M0NzY4NzQ2IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvaW50ZWdlci92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3YzM5YTM5ZmEgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2Nsb3VkaW5hcnkvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzE2NjJmMjAxIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdmlydHVhbC92aWV3cyc7XG5cbmNvbnN0IGFkbWluQ29uZmlnID0ge307XG5cbmNvbnN0IGZpZWxkVmlld3MgPSB7XG4gIHZpZXcxZGQxNDQ3NSxcbiAgdmlld2Q1MTFjNGQ1LFxuICB2aWV3OGZkMjc4NTQsXG4gIHZpZXdkY2E5NDE1MSxcbiAgdmlldzNkMTAyZGQ5LFxuICB2aWV3NmZlM2M0ZGUsXG4gIHZpZXdjNDc2ODc0NixcbiAgdmlld2MzOWEzOWZhLFxuICB2aWV3MTY2MmYyMDEsXG59O1xuXG5jb25zdCBsYXp5TWV0YWRhdGFRdWVyeSA9IHtcbiAga2luZDogJ0RvY3VtZW50JyxcbiAgZGVmaW5pdGlvbnM6IFtcbiAgICB7XG4gICAgICBraW5kOiAnT3BlcmF0aW9uRGVmaW5pdGlvbicsXG4gICAgICBvcGVyYXRpb246ICdxdWVyeScsXG4gICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgIHZhbHVlOiAna2V5c3RvbmUnLFxuICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDIyLCBlbmQ6IDMwIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2FkbWluTWV0YScsXG4gICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzksIGVuZDogNDggfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbGlzdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDU5LCBlbmQ6IDY0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2tleScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNzcsIGVuZDogODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDc3LCBlbmQ6IDgwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnaXNIaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDkxLCBlbmQ6IDk5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA5MSwgZW5kOiA5OSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpZWxkcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTEwLCBlbmQ6IDExNiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdwYXRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMzEsIGVuZDogMTM1IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMzEsIGVuZDogMTM1IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnY3JlYXRlVmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTQ4LCBlbmQ6IDE1OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdmaWVsZE1vZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE3NSwgZW5kOiAxODQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE3NSwgZW5kOiAxODQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE1OSwgZW5kOiAxOTggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE0OCwgZW5kOiAxOTggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDExNywgZW5kOiAyMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDExMCwgZW5kOiAyMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDY1LCBlbmQ6IDIyMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNTksIGVuZDogMjIwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA0OSwgZW5kOiAyMjggfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDM5LCBlbmQ6IDIyOCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzEsIGVuZDogMjM0IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAyMiwgZW5kOiAyMzQgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICBuYW1lOiB7IGtpbmQ6ICdOYW1lJywgdmFsdWU6ICdhdXRoZW50aWNhdGVkSXRlbScgfSxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtpbmQ6ICdJbmxpbmVGcmFnbWVudCcsXG4gICAgICAgICAgICAgICAgICB0eXBlQ29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lZFR5cGUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB7IGtpbmQ6ICdOYW1lJywgdmFsdWU6ICdVc2VyJyB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgIHsga2luZDogJ0ZpZWxkJywgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnaWQnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGtpbmQ6ICdGaWVsZCcsIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ25hbWUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29yZT5cbiAgICAgIDxLZXlzdG9uZVByb3ZpZGVyXG4gICAgICAgIGFkbWluQ29uZmlnPXthZG1pbkNvbmZpZ31cbiAgICAgICAgYWRtaW5NZXRhSGFzaD1cIno5bnV6alwiXG4gICAgICAgIGZpZWxkVmlld3M9e2ZpZWxkVmlld3N9XG4gICAgICAgIGxhenlNZXRhZGF0YVF1ZXJ5PXtsYXp5TWV0YWRhdGFRdWVyeX1cbiAgICAgID5cbiAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICA8L0tleXN0b25lUHJvdmlkZXI+XG4gICAgPC9Db3JlPlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWktdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvZmllbGRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVPZmZJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9YSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvbG9hZGluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvbW9kYWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9waWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9zZWdtZW50ZWQtY29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvdG9hc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL3Rvb2x0aXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdC1kZWVwLWVxdWFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludGVyc2VjdGlvbi1vYnNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9