/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./plugins/interactive-posts-ippm/blocks/assets-manager/attributes.js":
/*!****************************************************************************!*\
  !*** ./plugins/interactive-posts-ippm/blocks/assets-manager/attributes.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  cssAssets: {
    type: 'array',
    default: []
  },
  jsAssets: {
    type: 'array',
    default: []
  },
  currentPackage: {
    type: 'string',
    default: 'none'
  }
});

/***/ }),

/***/ "./plugins/interactive-posts-ippm/blocks/assets-manager/edit.js":
/*!**********************************************************************!*\
  !*** ./plugins/interactive-posts-ippm/blocks/assets-manager/edit.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./plugins/interactive-posts-ippm/blocks/assets-manager/editor.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lit_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/react */ "./node_modules/@lit/react/development/index.js");
/* harmony import */ var kemet_ui_dist_components_kemet_field_kemet_field_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-field/kemet-field.js */ "./node_modules/kemet-ui/dist/components/kemet-field/kemet-field.js");
/* harmony import */ var kemet_ui_dist_components_kemet_input_kemet_input_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-input/kemet-input.js */ "./node_modules/kemet-ui/dist/components/kemet-input/kemet-input.js");
/* harmony import */ var kemet_ui_dist_components_kemet_combo_kemet_combo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-combo/kemet-combo.js */ "./node_modules/kemet-ui/dist/components/kemet-combo/kemet-combo.js");
/* harmony import */ var kemet_ui_dist_components_kemet_sortable_kemet_sortable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-sortable/kemet-sortable.js */ "./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable.js");
/* harmony import */ var kemet_ui_dist_components_kemet_sortable_kemet_sortable_item_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-sortable/kemet-sortable-item.js */ "./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable-item.js");
/* harmony import */ var kemet_ui_dist_components_kemet_checkbox_kemet_checkbox_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! kemet-ui/dist/components/kemet-checkbox/kemet-checkbox.js */ "./node_modules/kemet-ui/dist/components/kemet-checkbox/kemet-checkbox.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */











const KemetField = (0,_lit_react__WEBPACK_IMPORTED_MODULE_6__.createComponent)({
  react: react__WEBPACK_IMPORTED_MODULE_4__,
  tagName: 'kemet-field',
  elementClass: kemet_ui_dist_components_kemet_field_kemet_field_js__WEBPACK_IMPORTED_MODULE_7__["default"]
});
const KemetInput = (0,_lit_react__WEBPACK_IMPORTED_MODULE_6__.createComponent)({
  react: react__WEBPACK_IMPORTED_MODULE_4__,
  tagName: 'kemet-input',
  elementClass: kemet_ui_dist_components_kemet_input_kemet_input_js__WEBPACK_IMPORTED_MODULE_8__["default"]
});
const KemetCombo = (0,_lit_react__WEBPACK_IMPORTED_MODULE_6__.createComponent)({
  react: react__WEBPACK_IMPORTED_MODULE_4__,
  tagName: 'kemet-combo',
  elementClass: kemet_ui_dist_components_kemet_combo_kemet_combo_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  events: {
    onSelection: 'kemet-combo-selection'
  }
});
const KemetSortable = (0,_lit_react__WEBPACK_IMPORTED_MODULE_6__.createComponent)({
  react: react__WEBPACK_IMPORTED_MODULE_4__,
  tagName: 'kemet-sortable',
  elementClass: kemet_ui_dist_components_kemet_sortable_kemet_sortable_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  events: {
    onDragEnd: 'kemet-sortable-drag-end'
  }
});
const KemetSortableItem = (0,_lit_react__WEBPACK_IMPORTED_MODULE_6__.createComponent)({
  react: react__WEBPACK_IMPORTED_MODULE_4__,
  tagName: 'kemet-sortable-item',
  elementClass: kemet_ui_dist_components_kemet_sortable_kemet_sortable_item_js__WEBPACK_IMPORTED_MODULE_11__["default"]
});
const KemetCheckbox = (0,_lit_react__WEBPACK_IMPORTED_MODULE_6__.createComponent)({
  react: react__WEBPACK_IMPORTED_MODULE_4__,
  tagName: 'kemet-checkbox',
  elementClass: kemet_ui_dist_components_kemet_checkbox_kemet_checkbox_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  events: {
    onCheckboxChange: 'kemet-checkbox-change'
  }
});
const styles = {
  button: {
    cursor: 'pointer',
    color: 'var(--wp-admin-theme-color)',
    fontSize: '1.25rem',
    margin: '0.25rem 0 0 0',
    padding: '0',
    position: 'relative',
    top: '0.1rem',
    left: '0.2rem',
    border: 'none',
    background: 'none'
  },
  sortableItem: {
    display: 'flex',
    gap: '0.5rem',
    flexDirection: 'column'
  },
  sortableLabel: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  inspectorControls: {
    marginBottom: '40px'
  },
  toggle: {
    '--kemet-toggle-height': '1rem',
    '--kemet-toggle-width': '2rem',
    '--kemet-toggle-handle-diameter': '1rem'
  }
};
const AssetsManager = props => {
  const [packages, setPackages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const getAssets = async event => {
    const regExp = /(?:\.([^.]+))?$/;
    const assets = await fetch(`${window.location.origin}/wp-json/ippm/v1/package/${event.detail.text}`).then(response => response.json());
    const cssFiles = assets.filter(asset => regExp.exec(asset)[1] === 'css');
    const jsFiles = assets.filter(asset => regExp.exec(asset)[1] === 'js');
    const cssAssets = cssFiles.map(file => {
      return {
        filename: file,
        isJSModule: false
      };
    });
    const jsAssets = jsFiles.map(file => {
      return {
        filename: file,
        isJSModule: false
      };
    });
    props.setAttributes({
      currentPackage: event.detail.text
    });
    props.setAttributes({
      cssAssets: cssAssets
    });
    props.setAttributes({
      jsAssets: jsAssets
    });
  };
  const sortFiles = (event, type) => {
    const files = [];
    event.detail.all.forEach(item => {
      const isJSModule = item.querySelector('kemet-checkbox')?.checked || false;
      files.push({
        filename: item.innerText,
        isJSModule
      });
    });
    props.setAttributes({
      [type]: files
    });
  };
  const removePackage = () => {
    props.setAttributes({
      cssAssets: []
    });
    props.setAttributes({
      jsAssets: []
    });
    props.setAttributes({
      currentPackage: 'none'
    });
  };
  const checkboxChange = (event, index) => {
    // if you don't stringify, wordpress will not detect a change in setting the attribute
    // reference: https://stackoverflow.com/questions/61778389/why-doesnt-a-mutated-array-of-objects-save-in-gutenberg
    const jsAssets = JSON.parse(JSON.stringify(props.attributes.jsAssets));
    jsAssets[index].isJSModule = event.target.checked;
    props.setAttributes({
      jsAssets: jsAssets
    });
  };
  const Asset = props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(KemetSortableItem, {
      style: styles.sortableItem,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        style: styles.sortableLabel,
        children: props.children
      }), props.type === 'js' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(KemetCheckbox, {
        label: "Enable module type.",
        checked: props.isJSModule,
        onCheckboxChange: event => checkboxChange(event, props.index)
      })]
    });
  };
  const CSSAssets = props => {
    if (props.attributes.cssAssets.length > 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h4", {
          children: "CSS Assets"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(KemetSortable, {
          onDragEnd: event => sortFiles(event, 'cssAssets'),
          children: props.attributes.cssAssets.map((file, index) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Asset, {
              filename: file.filename,
              isJSModule: props.attributes.cssAssets[index].isJSModule,
              type: "css",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("strong", {
                children: file.filename
              })
            }, `${file.filename}-css-${index}`);
          })
        })]
      });
    }
    return null;
  };
  const JSAssets = props => {
    if (props.attributes.jsAssets.length > 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h4", {
          children: "JS Assets"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(KemetSortable, {
          onDragEnd: event => sortFiles(event, 'jsAssets'),
          children: props.attributes.jsAssets.map((file, index) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Asset, {
              filename: file.filename,
              isJSModule: props.attributes.jsAssets[index].isJSModule,
              type: "js",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("strong", {
                children: file.filename
              })
            }, `${file.filename}-js-${index}`);
          })
        })]
      });
    }
    return null;
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const fetchPackages = async () => {
      const response = await fetch('/wp-json/ippm/v1/packages').then(response => response.json());
      setPackages(response);
    };
    fetchPackages();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("section", {
    className: "ippm-assets-manager",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(KemetField, {
        label: "Select a package.",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(KemetInput, {
          slot: "input",
          name: "package",
          value: props.attributes.currentPackage === 'none' ? null : props.attributes.currentPackage,
          placeholder: "Start typing a package name."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(KemetCombo, {
          slot: "component",
          options: packages,
          onSelection: event => getAssets(event)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
        children: ["Current Package: ", props.attributes.currentPackage, props.attributes.currentPackage !== 'none' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
          style: styles.button,
          onClick: () => removePackage(),
          children: "\xD7"
        }) : null]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(CSSAssets, {
      attributes: props.attributes,
      setAttributes: props.setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(JSAssets, {
      attributes: props.attributes,
      setAttributes: props.setAttributes
    })]
  });
};
const Edit = ({
  attributes,
  setAttributes
}) => {
  return [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    style: styles.inspectorControls,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(AssetsManager, {
        attributes: attributes,
        setAttributes: setAttributes
      })
    })
  }, "asset-manager-controls"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("section", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h3", {
      children: "Asset Management"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      children: "Select the block then use the controls to the right to add assets."
    })]
  }, "asset-manager")];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./plugins/interactive-posts-ippm/blocks/assets-manager/save.js":
/*!**********************************************************************!*\
  !*** ./plugins/interactive-posts-ippm/blocks/assets-manager/save.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

// import { InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

const Save = () => {
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./plugins/interactive-posts-ippm/blocks/assets-manager/supports.js":
/*!**************************************************************************!*\
  !*** ./plugins/interactive-posts-ippm/blocks/assets-manager/supports.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  align: true
});

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-checkbox/kemet-checkbox.js":
/*!********************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-checkbox/kemet-checkbox.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit_directives_live_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/live.js */ "./node_modules/lit/directives/live.js");
/* harmony import */ var _utilities_controllers_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/controllers/forms */ "./node_modules/kemet-ui/dist/utilities/controllers/forms.js");
/* harmony import */ var _utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/misc/events */ "./node_modules/kemet-ui/dist/utilities/misc/events.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./node_modules/kemet-ui/dist/components/kemet-checkbox/styles.js");








/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-checkbox
 * @summary An enhanced checkbox.
 *
 * @prop {string} label - Label text for the checkbox
 * @prop {boolean} checked - Determines if the checkbox is selected
 * @prop {boolean} indeterminate - An indeterminate selection status
 * @prop {string} name - Name of the checkbox
 * @prop {string} value - Value of the checkbox
 * @prop {boolean} disabled - Determines if a checkbox is disabled
 * @prop {boolean} required - Determines if a checkbox is required
 * @prop {boolean} focused - Is true when the checkbox is focused
 * @prop {boolean} rounded - Gives the checkbox rounded edges
 * @prop {boolean} filled - Fills the checkbox with color
 * @prop {string} status - The status of the checkbox
 * @prop {string} message - Message associated with checkbox status
 *
 * @csspart label - The label element.
 * @csspart text - The label's text.
 * @csspart mark - The icon of the check mark.
 *
 * @cssproperty --kemet-checkbox-size - The width and height of the checkbox.
 * @cssproperty --kemet-checkbox-color - The color of the checkbox mark.
 * @cssproperty --kemet-checkbox-border - The border of the checkbox.
 * @cssproperty --kemet-checkbox-border-radius - The border radius of the checkbox.
 * @cssproperty --kemet-checkbox-filled-color - The filled color of the checkbox mark.
 * @cssproperty --kemet-checkbox-filled-background-color - The filled background color.
 *
 * @event kemet-checkbox-change - Fires when the state of the checkbox changes
 * @event kemet-checkbox-focused - Fires when the checkbox loses or receives focus
 *
 */
let KemetCheckbox = class KemetCheckbox extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super();
        this.label = '';
        this.name = 'checkbox';
        this.disabled = false;
        this.required = false;
        this.rounded = false;
        this.filled = false;
        this.status = 'standard';
        /** @internal */
        this.formSubmitController = new _utilities_controllers_forms__WEBPACK_IMPORTED_MODULE_4__.FormSubmitController(this);
    }
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <label part="label">
        <input
          type="checkbox"
          name=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.name)}
          .value=${this.value}
          .indeterminate=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_3__.live)(this.indeterminate)}
          .checked=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_3__.live)(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? 'true' : 'false'}
          @click=${() => this.handleClick()}
          @blur=${() => this.handleBlur()}
          @focus=${() => this.handleFocus()}
          @change=${() => this.handleChange()}
        />
        <button part="checkbox" aria-label=${this.label}>
          ${this.makeCheckMark()}
        </button>
        <span part="text">${this.label}</span>
      </label>
      ${this.makeMessage()}
    `;
    }
    click() {
        this.input.click();
    }
    handleClick() {
        this.checked = !this.checked;
        this.indeterminate = false;
        (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(this, 'kemet-checkbox-change', this);
    }
    handleBlur() {
        this.focused = false;
        (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(this, 'kemet-checkbox-focused', false);
    }
    handleFocus() {
        this.focused = true;
        (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(this, 'kemet-checkbox-focused', true);
    }
    handleChange() {
        this.value = this.checked;
        if (this.input.checkValidity()) {
            this.status = 'standard';
        }
    }
    makeMessage() {
        if (this.status === 'error' || this.status === 'warning') {
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<span part="message">${this.message}</span>`;
        }
        return null;
    }
    makeCheckMark() {
        if (this.checked) {
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
        <span part="mark">
          <svg viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
              <g stroke="currentColor" stroke-width="2">
                <g transform="translate(3.428571, 3.428571)">
                  <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                  <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      `;
        }
        if (!this.checked && this.indeterminate) {
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
        <span part="mark">
          <svg viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
              <g stroke="currentColor" stroke-width="2">
                <g transform="translate(2.285714, 6.857143)">
                  <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      `;
        }
        return null;
    }
    checkValidity() {
        return this.input.checkValidity();
    }
};
KemetCheckbox.styles = [_styles__WEBPACK_IMPORTED_MODULE_6__.stylesBase];
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetCheckbox.prototype, "label", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetCheckbox.prototype, "checked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetCheckbox.prototype, "indeterminate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetCheckbox.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], KemetCheckbox.prototype, "value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetCheckbox.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetCheckbox.prototype, "required", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetCheckbox.prototype, "focused", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetCheckbox.prototype, "rounded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetCheckbox.prototype, "filled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, reflect: true })
], KemetCheckbox.prototype, "status", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetCheckbox.prototype, "message", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('input')
], KemetCheckbox.prototype, "input", void 0);
KemetCheckbox = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('kemet-checkbox')
], KemetCheckbox);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KemetCheckbox);
//# sourceMappingURL=kemet-checkbox.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-checkbox/styles.js":
/*!************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-checkbox/styles.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stylesBase: () => (/* binding */ stylesBase)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const stylesBase = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    --kemet-checkbox-size: 18px;
    --kemet-checkbox-color: rgb(var(--kemet-color-foreground));
    --kemet-checkbox-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-checkbox-border-radius: var(--kemet-border-radius-md);
    --kemet-checkbox-filled-background-color: rgb(var(--kemet-color-primary));
    --kemet-checkbox-filled-color: rgb(var(--kemet-color-white));

    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  label {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
  }

  input {
    cursor: pointer;
    margin: 0;
    padding: 0;
    width: var(--kemet-checkbox-size);
    height: var(--kemet-checkbox-size);
    position: absolute;
    opacity: 0;
  }

  button {
    margin: 0;
    border: none;
    background: none;
  }

  [part='checkbox'] {
    color: var(--kemet-checkbox-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--kemet-checkbox-size);
    height: var(--kemet-checkbox-size);
    border: var(--kemet-checkbox-border);
  }

  :host([rounded]) [part='checkbox'] {
    border-radius: var(--kemet-checkbox-border-radius);
  }

  :host([filled][checked]) [part='checkbox'],
  :host([filled][indeterminate]) [part='checkbox'] {
    border: none;
    background-color: var(--kemet-checkbox-filled-background-color);
  }

  [part='mark'] {
    display: flex;
    width: calc(var(--kemet-checkbox-size) - 4px);
    height: calc(var(--kemet-checkbox-size) - 4px);
  }

  :host([filled][checked]) [part='mark'],
  :host([filled][indeterminate]) [part='mark'] {
    color: var(--kemet-checkbox-filled-color);
  }

  [part='message'] {
    display: block;
    margin-top: 0.5rem;
  }

  :host([status='error']) [part='message'] {
    color: rgb(var(--kemet-color-error));
  }

  :host([status='warning']) [part='message'] {
    color: rgb(var(--kemet-color-error));
  }
`;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-combo/kemet-combo.js":
/*!**************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-combo/kemet-combo.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _utilities_misc_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/misc/events */ "./node_modules/kemet-ui/dist/utilities/misc/events.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./node_modules/kemet-ui/dist/components/kemet-combo/styles.js");





/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-combo
 * @summary Allows the user to select a choice filtered through an Input. May only be used as a component of Field.
 *
 * @prop {string} slug - Uniquely identifies the component. Should match the slug used in a control.
 * @prop {array} options - An array of items listed for the combo box
 * @prop {boolean} show - Controls the display of the combo box
 *
 * @csspart combobox - The combo's container element.
 * @csspart listbox - The list element in the combo.
 *
 * @cssproperty --kemet-combo-width - The width of the combo box.
 * @cssproperty --kemet-combo-margin - The margins on the combo box.
 * @cssproperty --kemet-combo-max-height - The max height of the combo box.
 * @cssproperty --kemet-combo-border - The border of the combo box.
 * @cssproperty --kemet-combo-border-radius - The border radius of the combo box.
 * @cssproperty --kemet-combo-background-color - The background color of the combo box.
 * @cssproperty --kemet-combo-shadow - The shadow of the combo box.
 * @cssproperty --kemet-combo-hover-color - The hover item's text color.
 * @cssproperty --kemet-combo-hover-background-color - The hover item's background color.
 *
 * @event kemet-combo-selection - Fires when a selection has been made
 *
 */
let KemetCombo = class KemetCombo extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.options = [];
    }
    firstUpdated() {
        // standard properties
        this.field = this.closest('kemet-field');
        this.input = this.field.querySelector('[slot="input"]');
        // managed properties
        this.slug = this.field.slug || 'slug';
        // events listeners
        this.input.addEventListener('kemet-input-input', this.handleInput.bind(this));
        this.input.addEventListener('keydown', event => this.handleInputKeyDown(event));
    }
    render() {
        var _a;
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div
        role="combobox"
        part="combobox"
        aria-expanded=${this.show}
        aria-controls="${this.slug}-listbox"
        aria-haspopup="listbox"
        id="${this.slug}-combobox"
        aria-label="${(_a = this.field) === null || _a === void 0 ? void 0 : _a.label}"
      >
        <ul role="listbox" aria-labelledby="${this.slug}-label" id="${this.slug}-listbox" part="listbox">
          ${this.makeOptions()}
        </ul>
      </div>
    `;
    }
    makeOptions() {
        if (this.input) {
            this.filteredOptions = this.options.filter(option => { var _a; return option.toLowerCase().indexOf((_a = this.input.value) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== -1; });
            return this.filteredOptions.map((option, index) => (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<li
            id="${this.slug}-option-${index}"
            role="option"
            tabindex="0"
            aria-selected="false"
            @click=${(event) => this.handleSelection(event)}
            @keydown=${(event) => this.handleOptionKeyDown(event)}
          >
            ${option}
          </li>`);
        }
        return null;
    }
    handleInput(event) {
        this.makeOptions();
        this.show = event.detail.length > 0;
    }
    handleSelection(event) {
        const target = event.target;
        this.input.value = target.innerText;
        this.show = false;
        (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_2__.emitEvent)(this, 'kemet-combo-selection', {
            element: target,
            text: target.innerText,
            id: target.getAttribute('id'),
        });
    }
    handleOptionKeyDown(event) {
        event.preventDefault();
        const target = event.target;
        if (event.code === 'ArrowDown') {
            const next = target.nextElementSibling;
            if (next) {
                next.focus();
            }
            else {
                this.shadowRoot.querySelector('li').focus();
            }
        }
        if (event.code === 'ArrowUp') {
            const previous = target.previousElementSibling;
            const lastChild = this.shadowRoot.querySelector('li:last-child');
            if (previous) {
                previous.focus();
            }
            else {
                lastChild.focus();
            }
        }
        if (event.code === 'Escape' || event.code === 'Tab') {
            this.show = false;
            this.input.focus();
        }
        if (event.code === 'Enter' || event.code === 'Space') {
            this.handleSelection(event);
        }
    }
    handleInputKeyDown(event) {
        if (event.code === 'ArrowDown') {
            this.shadowRoot.querySelector('li').focus();
        }
        if (event.code === 'Escape') {
            this.show = false;
        }
    }
};
KemetCombo.styles = [_styles__WEBPACK_IMPORTED_MODULE_3__.stylesBase];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetCombo.prototype, "slug", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], KemetCombo.prototype, "options", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetCombo.prototype, "show", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], KemetCombo.prototype, "filteredOptions", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], KemetCombo.prototype, "field", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], KemetCombo.prototype, "input", void 0);
KemetCombo = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('kemet-combo')
], KemetCombo);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KemetCombo);
//# sourceMappingURL=kemet-combo.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-combo/styles.js":
/*!*********************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-combo/styles.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stylesBase: () => (/* binding */ stylesBase)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const stylesBase = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
  :host {
    --kemet-combo-width: calc(100% - 2px);
    --kemet-combo-margin: 1rem auto;
    --kemet-combo-max-height: calc(5 * 3rem);
    --kemet-combo-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-combo-border-radius: var(--kemet-border-radius-md);
    --kemet-combo-background-color: rgb(var(--kemet-color-white-to-black));
    --kemet-combo-shadow: var(--kemet-elevation-layer-5);
    --kemet-combo-hover-color: rgb(var(--kemet-color-white));
    --kemet-combo-hover-background-color: rgb(var(--kemet-color-primary));

    opacity: 0;
    width: var(--kemet-combo-width);
    margin: var(--kemet-combo-margin);
    pointer-events: none;
    display: block;
    position: relative;
    transition: opacity 0.3s ease-in-out;
  }

  :host([show]) {
    opacity: 1;
    pointer-events: auto;
  }

  ul {
    width: 100%;
    max-height: var(--kemet-combo-max-height);
    position: absolute;
    z-index: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    border: var(--kemet-combo-border);
    border-radius: var(--kemet-combo-border-radius);
    background-color: var(--kemet-combo-background-color);
    box-shadow: var(--kemet-combo-shadow);
  }

  li {
    line-height: 3rem;
    padding: 0 1.5rem;
    cursor: pointer;
  }

  li:hover,
  li:focus {
    color: var(--kemet-combo-hover-color);
    outline: none;
    background-color: var(--kemet-combo-hover-background-color);
  }
`;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-field/kemet-field.js":
/*!**************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-field/kemet-field.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _utilities_misc_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/misc/events */ "./node_modules/kemet-ui/dist/utilities/misc/events.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./node_modules/kemet-ui/dist/components/kemet-field/styles.js");





/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-field
 * @summary Used in combination with Input, Select, and Textarea, to make a Field.
 *
 * @prop {string} slug - Uniquely identifies the control. Use the same slug for slotted subcomponents.
 * @prop {string} label - The label text
 * @prop {string} message - The validation message for error or success
 * @prop {boolean} focused - Determines if the containing input is focused
 * @prop {string} status - The validation status of standard, error, or success
 * @prop {boolean} filled - Is true when the containing input has a value
 * @prop {number} length - The length of the containing input
 * @prop {boolean} disabled - Determines the disabled state of the control
 * @prop {string} errorIcon - The icon while in an error or warning state
 * @prop {string} successIcon - The icon while in a success state
 *
 * @slot component - Allows subcomponents of the field to display.
 *
 * @csspart label - The label of the field.
 * @csspart message - The validation message of the field.
 * @csspart text - The text in the label.
 *
 * @event kemet-field-input - Fires when input fires on the input slot
 *
 */
let KemetField = class KemetField extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super();
        this.status = 'standard';
        this.errorIcon = 'exclamation-triangle-fill';
        this.successIcon = 'check-lg';
        // listeners
        this.addEventListener('kemet-input-focused', (event) => this.handleFocused(event));
        this.addEventListener('kemet-input-status', (event) => this.handleStatus(event));
        this.addEventListener('kemet-input-input', (event) => this.handleInput(event));
        this.addEventListener('kemet-count-status', (event) => this.handleStatus(event));
        this.addEventListener('kemet-combo-selection', (event) => this.handleSelection(event));
    }
    firstUpdated() {
        this.slotInput = this.querySelector('[slot="input"]');
        this.slotCombo = this.querySelector('[slot="combo"]');
        if (this.slotInput.value) {
            this.length = this.slotInput.value.length;
        }
        else {
            this.length = 0;
        }
    }
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <label for="${this.slug}" id="${this.slug}-label" part="label">
        <span part="text">${this.label}${this.makeStatusIcon()}</span>
        <slot name="input"></slot>
      </label>
      ${this.makeStatusMessage()}
      <slot name="component"></slot>
    `;
    }
    makeStatusIcon() {
        if (this.status === 'error' || this.status === 'warning') {
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<kemet-icon icon="${this.errorIcon}" size="16"></kemet-icon>`;
        }
        if (this.status === 'success') {
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<kemet-icon icon="${this.successIcon}" size="16"></kemet-icon>`;
        }
        return null;
    }
    makeStatusMessage() {
        if (this.status !== 'standard') {
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<span class="message" part="message">${this.message}</span>`;
        }
        return null;
    }
    handleFocused(event) {
        this.focused = event.detail;
        if (!this.focused && this.slotCombo && this.slotCombo.options.length < 1) {
            this.slotCombo.show = false;
        }
    }
    handleStatus(event) {
        this.status = event.detail.status;
    }
    handleInput(event) {
        (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_2__.emitEvent)(this, 'kemet-field-input', event.detail.length);
        this.filled = event.detail !== '';
    }
    handleSelection(event) {
        this.slotInput.setAttribute('aria-activedescendant', event.detail);
    }
};
KemetField.styles = [_styles__WEBPACK_IMPORTED_MODULE_3__.stylesBase];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetField.prototype, "slug", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetField.prototype, "label", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetField.prototype, "message", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetField.prototype, "focused", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, reflect: true })
], KemetField.prototype, "status", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetField.prototype, "filled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
], KemetField.prototype, "length", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetField.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, attribute: 'error-icon' })
], KemetField.prototype, "errorIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, attribute: 'success-icon' })
], KemetField.prototype, "successIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], KemetField.prototype, "slotInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], KemetField.prototype, "slotCombo", void 0);
KemetField = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('kemet-field')
], KemetField);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KemetField);
//# sourceMappingURL=kemet-field.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-field/styles.js":
/*!*********************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-field/styles.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stylesBase: () => (/* binding */ stylesBase)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const stylesBase = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    display: block;
  }

  :host([disabled]) {
    opacity: 0.5;
  }

  label {
    position: relative;
    display: block;
  }

  label span {
    color: inherit;
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.8rem;
  }

  :host([status='error']) kemet-icon {
    color: rgb(var(--kemet-color-error));
  }

  :host([status='success']) kemet-icon {
    color: rgb(var(--kemet-color-success));
  }

  :host([status='warning']) kemet-icon {
    color: rgb(var(--kemet-color-warning));
  }

  .message {
    font-size: 0.9rem;
    line-height: 1;
    display: block;
    margin-top: 0.8rem;
  }

  :host([status='error']) .message {
    color: rgb(var(--kemet-color-error));
  }

  :host([status='success']) .message {
    color: rgb(var(--kemet-color-success));
  }

  :host([status='warning']) .message {
    color: rgb(var(--kemet-color-warning));
  }
`;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-input/kemet-input.js":
/*!**************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-input/kemet-input.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit_directives_live_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/live.js */ "./node_modules/lit/directives/live.js");
/* harmony import */ var _utilities_controllers_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/controllers/forms */ "./node_modules/kemet-ui/dist/utilities/controllers/forms.js");
/* harmony import */ var _utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/misc/events */ "./node_modules/kemet-ui/dist/utilities/misc/events.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./node_modules/kemet-ui/dist/components/kemet-input/styles.js");








/**
 * @since 1.0.0
 * @status stable
 *
 * @tagname kemet-input
 * @summary An enhanced input element.
 *
 * @prop {string} slug - Used for the id of the input. Should match the slug used in a control if applicable.
 * @prop {string} name - The name of the input
 * @prop {string} placeholder - The placeholder attribute
 * @prop {string} minlength - The minlength attribute
 * @prop {string} maxlength - The maxlength attribute
 * @prop {string} min - The min attribute
 * @prop {string} max - The max attribute
 * @prop {string} step - The step attribute
 * @prop {string} autocomplete - The autocomplete attribute
 * @prop {string} pattern - The pattern attribute
 * @prop {string} inputmode - The input mode attribute
 * @prop {boolean} autofocus - The autofocus attribute
 * @prop {boolean} disabled - The disable attribute
 * @prop {boolean} readonly - The readonly attribute
 * @prop {boolean} required - The required attribute
 * @prop {string} type - The type of input
 * @prop {string} value - The input's value
 * @prop {boolean} invalid - States whether the input is invalid
 * @prop {string} status - The status of the input
 * @prop {boolean} validateOnBlur - Activates validation on blur
 * @prop {string} ariaAutoComplete - Aria Autocomplete
 * @prop {string} ariaControls - Aria Controls
 * @prop {string} ariaActiveDescendant - Aria Active Descendant
 * @prop {boolean} rounded - Displays rounded corners
 * @prop {boolean} filled - Displays a filled input box
 * @prop {string} iconRight - Custom Icon to the right of the input
 * @prop {string} iconLeft - Custom Icon to the left of the input
 * @prop {number} iconSize - Size of the icons
 * @prop {object} validity - The HTML5 validity object.
 * @prop {boolean} isPasswordVisible - Manages password visibility
 * @prop {string} inputType - Input Type of keypress handled through handleInput(e)
 * @prop {boolean} focused - Determines if the input is focused
 *
 * @csspart input
 *
 * @cssproperty --kemet-input-height - The height of the input.
 * @cssproperty --kemet-input-padding - The padding on the input.
 * @cssproperty --kemet-input-border - The border of the input.
 * @cssproperty --kemet-input-border-color-error -  The border of the error state.
 * @cssproperty --kemet-input-border-color-success - The border of the success state.
 * @cssproperty --kemet-input-border-color-warning - The border of the warning state.
 * @cssproperty --kemet-input-icon-left-padding - The icon-left padding.
 * @cssproperty --kemet-input-icon-right-padding - The icon-right padding.
 * @cssproperty --kemet-input-border-radius-rounded - The border radius on rounded.
 * @cssproperty --kemet-input-border-filled - The border on filled.
 * @cssproperty --kemet-input-color-filled - The color on filled.
 * @cssproperty --kemet-input-background-color-filled - The background-color on filled.
 * @cssproperty --kemet-input-background-color-error - The error state background color.
 * @cssproperty --kemet-input-background-color-success - The success state background color.
 * @cssproperty --kemet-input-background-color-warning - The warning state background color.
 *
 * @event kemet-input-focused - Fires when the input receives and loses focus
 * @event kemet-input-status Fires when there's a change in status. This event includes an object that reports: 1) the status. 2) HTML5 validity object. 3) the component element.
 * Use the validity object to support custom validation messages.
 * @event kemet-input-input - Fires when the input receives input
 *
 */
let KemetInput = class KemetInput extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super();
        this.name = 'input';
        this.type = 'text';
        this.value = '';
        this.status = 'standard';
        this.validateOnBlur = false;
        this.iconSize = 20;
        this.isPasswordVisible = false;
        this.focused = false;
        /** @internal */
        this.formSubmitController = new _utilities_controllers_forms__WEBPACK_IMPORTED_MODULE_4__.FormSubmitController(this);
    }
    firstUpdated() {
        // elements
        this.input = this.shadowRoot.querySelector('input');
        this.field = this.closest('kemet-field');
        this.form = this.closest('form');
        this.slug = this.field ? this.field.slug : 'input';
        if (this.field) {
            this.field.addEventListener('fmc-password-status', (event) => this.handleStatus(event));
        }
    }
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div>
        ${this.makeIconLeft()}
        <input
          part="input"
          id=${this.slug}
          name=${this.name}
          placeholder=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.placeholder)}
          minlength=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.minlength)}
          maxlength=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.maxlength)}
          min=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.min)}
          max=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.max)}
          step=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.step)}
          autocomplete=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.autocomplete)}
          aria-autocomplete=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.ariaAutoComplete)}
          aria-controls=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.ariaControls)}
          aria-activedescendant=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.ariaActiveDescendant)}
          pattern=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.pattern)}
          inputmode=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.inputmode)}
          aria-invalid=${this.invalid ? 'true' : 'false'}
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .type="${this.type === 'password' && this.isPasswordVisible ? 'text' : this.type}"
          .value=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_3__.live)(this.value)}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        />
        ${this.makeIconRight()} ${this.makeIconClear()} ${this.makeVisibilityToggle()}
      </div>
    `;
    }
    makeIconRight() {
        if (this.iconRight) {
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
        <kemet-icon class="right" icon="${this.iconRight}" size="${this.iconSize ? this.iconSize : 20}"></kemet-icon>
      `;
        }
        return null;
    }
    makeIconLeft() {
        if (this.iconLeft) {
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
        <kemet-icon class="left" icon="${this.iconLeft}" size="${this.iconSize ? this.iconSize : 16}"></kemet-icon>
      `;
        }
        return null;
    }
    makeIconClear() {
        if (this.type === 'search' && this.value !== '') {
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
        <kemet-icon class="search right" icon="x-lg" size="${this.iconSize}" @click=${() => this.handleClear()}></kemet-icon>
      `;
        }
        return null;
    }
    makeVisibilityToggle() {
        if (this.type === 'password') {
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<kemet-icon
        class="eye right"
        icon="${this.setPasswordIcon()}"
        @click=${() => this.togglePasswordVisibility()}
      ></kemet-icon>`;
        }
        return null;
    }
    setPasswordIcon() {
        if (this.isPasswordVisible) {
            return 'eye';
        }
        return 'eye-slash';
    }
    /**
     * Handles when the input receives focus
     * @private
     */
    handleFocus() {
        this.focused = true;
        (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(this, 'kemet-input-focused', true);
    }
    /**
     * Handles when the input loses focus
     * @private
     */
    handleBlur() {
        var _a, _b;
        if (this.validateOnBlur && this.form && !this.form.noValidate) {
            (_a = this.input) === null || _a === void 0 ? void 0 : _a.checkValidity();
            this.validity = (_b = this.input) === null || _b === void 0 ? void 0 : _b.validity;
        }
        this.focused = false;
        (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(this, 'kemet-input-focused', false);
    }
    /**
     * Handles when the input changes value
     * @private
     */
    handleChange() {
        this.value = this.input.value;
        if (this.input.checkValidity() && this.checkLimitValidity() && this.status !== 'success') {
            this.invalid = false;
            this.status = 'standard';
            this.validity = this.input.validity;
            (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(this, 'kemet-input-status', {
                status: 'standard',
                validity: this.input.validity,
                element: this,
            });
        }
    }
    /**
     * Handles when the input receives input
     * @private
     */
    handleInput() {
        this.value = this.input.value;
        (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(this, 'kemet-input-input', this.value);
    }
    /**
     * Handles when the input has an error
     * @private
     */
    handleInvalid() {
        var _a, _b;
        this.validity = (_a = this.input) === null || _a === void 0 ? void 0 : _a.validity;
        if (this.validateOnBlur) {
            this.invalid = true;
            this.status = 'error';
            (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(this, 'kemet-input-status', {
                status: 'error',
                validity: (_b = this.input) === null || _b === void 0 ? void 0 : _b.validity,
                element: this,
            });
        }
    }
    handleStatus(event) {
        this.status = event.detail.status;
    }
    /**
     * Toggles password visibility
     * @private
     */
    togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
    }
    /**
     * Handles the clear button for search
     * @private
     */
    handleClear() {
        this.value = '';
        (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(this, 'kemet-input-input', this.value);
    }
    /**
     * Checks the validity of the character limit for the count component
     * @public
     * @returns {boolean}
     */
    checkLimitValidity() {
        if (this.field) {
            const count = this.field.querySelector('kemet-count');
            if (count) {
                return this.value.length < count.limit;
            }
        }
        return true;
    }
    /**
     * Checks the validity of the standard input
     * @public
     * @returns {boolean}
     */
    checkValidity() {
        var _a;
        return (_a = this.input) === null || _a === void 0 ? void 0 : _a.checkValidity();
    }
    /**
     * Focuses the standard input
     * @public
     */
    focus() {
        var _a;
        (_a = this.input) === null || _a === void 0 ? void 0 : _a.focus();
    }
};
KemetInput.styles = [_styles__WEBPACK_IMPORTED_MODULE_6__.stylesBase];
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetInput.prototype, "slug", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetInput.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetInput.prototype, "placeholder", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
], KemetInput.prototype, "minlength", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
], KemetInput.prototype, "maxlength", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetInput.prototype, "min", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetInput.prototype, "max", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
], KemetInput.prototype, "step", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetInput.prototype, "autocomplete", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetInput.prototype, "pattern", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetInput.prototype, "inputmode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], KemetInput.prototype, "autofocus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetInput.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], KemetInput.prototype, "readonly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetInput.prototype, "required", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetInput.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, reflect: true })
], KemetInput.prototype, "value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetInput.prototype, "invalid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, reflect: true })
], KemetInput.prototype, "status", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, attribute: 'validate-on-blur' })
], KemetInput.prototype, "validateOnBlur", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, attribute: 'aria-autocomplete' })
], KemetInput.prototype, "ariaAutoComplete", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, attribute: 'aria-controls' })
], KemetInput.prototype, "ariaControls", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, attribute: 'aria-activedescendant' })
], KemetInput.prototype, "ariaActiveDescendant", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetInput.prototype, "rounded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetInput.prototype, "filled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, reflect: true, attribute: 'icon-right' })
], KemetInput.prototype, "iconRight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, reflect: true, attribute: 'icon-left' })
], KemetInput.prototype, "iconLeft", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
], KemetInput.prototype, "iconSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Object })
], KemetInput.prototype, "validity", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], KemetInput.prototype, "isPasswordVisible", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], KemetInput.prototype, "inputType", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetInput.prototype, "focused", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], KemetInput.prototype, "field", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], KemetInput.prototype, "form", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], KemetInput.prototype, "input", void 0);
KemetInput = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('kemet-input')
], KemetInput);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KemetInput);
//# sourceMappingURL=kemet-input.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-input/styles.js":
/*!*********************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-input/styles.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stylesBase: () => (/* binding */ stylesBase)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const stylesBase = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
  :host {
    --kemet-input-height: 50px;
    --kemet-input-padding: 0.5rem 1rem;
    --kemet-input-border: 1px solid rgb(var(--kemet-color-foreground));
    --kemet-input-border-color-error: 1px solid rgb(var(--kemet-color-error));
    --kemet-input-border-color-success: 1px solid rgb(var(--kemet-color-success));
    --kemet-input-border-color-warning: 1px solid rgb(var(--kemet-color-warning));
    --kemet-input-icon-left-padding: 3rem;
    --kemet-input-icon-right-padding: 3rem;
    --kemet-input-border-radius-rounded: var(--kemet-border-radius-md);
    --kemet-input-border-filled: none;
    --kemet-input-color-filled: rgb(var(--kemet-color-white));
    --kemet-input-background-color-filled: rgb(var(--kemet-color-primary));
    --kemet-input-color-filled: rgb(var(--kemet-color-white));
    --kemet-input-background-color-error: rgb(var(--kemet-color-error));
    --kemet-input-background-color-success: rgb(var(--kemet-color-success));
    --kemet-input-background-color-warning: rgb(var(--kemet-color-warning));

    position: relative;
    display: block;
  }

  input {
    color: rgb(var(--kemet-color-text));
    display: block;
    font-size: 1rem;
    width: 100%;
    height: var(--kemet-input-height);
    padding: var(--kemet-input-padding);
    border: var(--kemet-input-border);
    appearance: none;
    box-sizing: border-box;
    background-color: transparent;
  }

  input[type='color'] {
    min-width: 10rem;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  :host([status='error']) input {
    border: var(--kemet-input-border-color-error);
  }

  :host([status='success']) input {
    border: var(--kemet-input-border-color-success);
  }

  :host([status='warning']) input {
    border: var(--kemet-input-border-color-warning);
  }

  :host([disabled]) input {
    opacity: 0.5;
  }

  :host([icon-left]) input {
    padding-left: var(--kemet-input-icon-left-padding);
  }

  :host([icon-right]) input {
    padding-right: var(--kemet-input-icon-right-padding);
  }

  :host([rounded]) input {
    border-radius: var(--kemet-input-border-radius-rounded);
  }

  :host([filled]) input {
    border: var(--kemet-input-border-filled);
    color: var(--kemet-input-color-filled);
    background-color: var(--kemet-input-background-color-filled);
  }

  :host([filled]) kemet-icon,
  :host([filled]) input::placeholder {
    color: var(--kemet-input-color-filled);
  }

  :host([status='error'][filled]) input {
    background-color: var(--kemet-input-background-color-error);
  }

  :host([status='success'][filled]) input {
    background-color: var(--kemet-input-background-color-success);
  }

  :host([status='warning'][filled]) input {
    background-color: var(--kemet-input-background-color-warning);
  }

  kemet-icon {
    color: rgb(var(--kemet-color-text));
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  kemet-icon.left {
    left: 1rem;
  }

  kemet-icon.right {
    right: 1rem;
  }

  kemet-icon.eye,
  kemet-icon.search {
    cursor: pointer;
  }

  :host([status='error']) kemet-icon {
    color: rgb(var(--kemet-color-error));
  }

  :host([status='warning']) kemet-icon {
    color: rgb(var(--kemet-color-error));
  }

  :host([status='success']) kemet-icon {
    color: rgb(var(--kemet-color-success));
  }
`;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable-item.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable-item.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./node_modules/kemet-ui/dist/components/kemet-sortable/styles.js");




/**
 * @since 1.3.0
 * @status stable
 *
 * @tagname kemet-sortable-item
 * @summary An item in a sortable list.
 *
 * @prop {boolean} ghost - Automatically set to true when an item is dragged to a new spot.
 */
let KemetSortableItem = class KemetSortableItem extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    firstUpdated() {
        this.draggable = true;
    }
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<slot></slot>`;
    }
};
KemetSortableItem.styles = [_styles__WEBPACK_IMPORTED_MODULE_2__.stylesSortableItem];
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], KemetSortableItem.prototype, "ghost", void 0);
KemetSortableItem = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('kemet-sortable-item')
], KemetSortableItem);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KemetSortableItem);
//# sourceMappingURL=kemet-sortable-item.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-sortable/kemet-sortable.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var mobile_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobile-drag-drop */ "./node_modules/mobile-drag-drop/index.min.js");
/* harmony import */ var mobile_drag_drop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobile_drag_drop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_misc_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/misc/events */ "./node_modules/kemet-ui/dist/utilities/misc/events.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./node_modules/kemet-ui/dist/components/kemet-sortable/styles.js");






const getMouseOffset = (event) => {
    const target = event.target;
    const targetRect = target.getBoundingClientRect();
    return {
        x: event.pageX - targetRect.left,
        y: event.pageY - targetRect.top,
    };
};
const getElementVerticalCenter = (element) => {
    const rect = element.getBoundingClientRect();
    return (rect.bottom - rect.top) / 2;
};
/**
 * @since 1.3.0
 * @status stable
 *
 * @tagname kemet-sortable
 * @summary A list that can be sorted by drag and drop.
 *
 * @event kemet-sortable-drag-end - Fires when an item has been moved to a new spot.
 */
let KemetSortable = class KemetSortable extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    firstUpdated() {
        (0,mobile_drag_drop__WEBPACK_IMPORTED_MODULE_2__.polyfill)();
        this.addEventListener('dragstart', event => this.handleDragStart(event), false);
        this.addEventListener('dragenter', (event) => { event.preventDefault(); });
    }
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<slot></slot>`;
    }
    handleDragStart(event) {
        this.sortableItem = event.target;
        this.addEventListener('dragover', dragOverEvent => this.handleDragOver(dragOverEvent), false);
        this.addEventListener('dragend', dragEndEvent => this.handleDragEnd(dragEndEvent), false);
        setTimeout(() => {
            this.sortableItem.ghost = true;
        }, 0);
    }
    handleDragOver(event) {
        event.preventDefault();
        const target = event.target;
        if (target && target.tagName === 'KEMET-SORTABLE-ITEM') {
            const offset = getMouseOffset(event);
            const middleY = getElementVerticalCenter(target);
            if (offset.y > middleY) {
                this.insertBefore(this.sortableItem, target.nextSibling);
            }
            else {
                this.insertBefore(this.sortableItem, target);
            }
        }
    }
    handleDragEnd(event) {
        event.preventDefault();
        this.sortableItem.ghost = false;
        (0,_utilities_misc_events__WEBPACK_IMPORTED_MODULE_3__.emitEvent)(this, 'kemet-sortable-drag-end', {
            event,
            current: this.sortableItem,
            all: this.querySelectorAll('kemet-sortable-item'),
        });
    }
};
KemetSortable.styles = [_styles__WEBPACK_IMPORTED_MODULE_4__.stylesSortable];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], KemetSortable.prototype, "sortableItem", void 0);
KemetSortable = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('kemet-sortable')
], KemetSortable);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KemetSortable);
//# sourceMappingURL=kemet-sortable.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/components/kemet-sortable/styles.js":
/*!************************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/components/kemet-sortable/styles.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stylesSortable: () => (/* binding */ stylesSortable),
/* harmony export */   stylesSortableItem: () => (/* binding */ stylesSortableItem)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const stylesSortable = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
  :host {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
`;
const stylesSortableItem = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
  :host {
    cursor: grab;
    display: block;
    padding: 1rem;
    border: 1px solid rgb(var(--kemet-color-foreground));
  }

  :host([ghost]) {
    opacity: 0.5;
    border-style: dashed;
  }
`;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/utilities/controllers/forms.js":
/*!*******************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/utilities/controllers/forms.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormSubmitController: () => (/* binding */ FormSubmitController)
/* harmony export */ });
class FormSubmitController {
    constructor(host, options = undefined) {
        (this.host = host).addController(this);
        this.options = {
            form: (input) => input.closest('form'),
            name: (input) => input.name,
            value: (input) => input.value,
            disabled: (input) => input.disabled,
            checkValidity: (input) => (typeof input.checkValidity === 'function' ? input.checkValidity() : true),
            ...options,
        };
        this.handleFormData = this.handleFormData.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    hostConnected() {
        this.form = this.options.form(this.host);
        if (this.form) {
            this.form.addEventListener('formdata', this.handleFormData);
            this.form.addEventListener('submit', this.handleFormSubmit);
        }
    }
    hostDisconnected() {
        if (this.form) {
            this.form.removeEventListener('formdata', this.handleFormData);
            this.form.removeEventListener('submit', this.handleFormSubmit);
            this.form = undefined;
        }
    }
    handleFormData(event) {
        var _a;
        const disabled = this.options.disabled(this.host);
        const name = this.options.name(this.host);
        const value = this.options.value(this.host);
        if (!disabled && typeof name === 'string' && typeof value !== 'undefined') {
            if (Array.isArray(value)) {
                value.forEach((val) => {
                    var _a;
                    (_a = event.formData) === null || _a === void 0 ? void 0 : _a.append(name, val.toString());
                });
            }
            else {
                (_a = event.formData) === null || _a === void 0 ? void 0 : _a.append(name, value.toString());
            }
        }
    }
    handleFormSubmit(event) {
        const disabled = this.options.disabled(this.host);
        const checkValidity = this.options.checkValidity;
        this.form = this.options.form(this.host);
        if (this.form && !this.form.noValidate && !disabled && !checkValidity(this.host)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            const components = this.form.querySelectorAll('kemet-input, kemet-textarea, kemet-select, kemet-checkbox, kemet-radios');
            components.forEach((component) => {
                component.checkValidity();
                if (!component.checkValidity()) {
                    component.status = 'error';
                    component.invalid = true;
                    component.dispatchEvent(new CustomEvent('kemet-input-status', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            status: 'error',
                            validity: component.validity ? component.validity : {},
                            element: component,
                        },
                    }));
                }
                if (component.checkLimitValidity && !component.checkLimitValidity()) {
                    component.status = 'error';
                    component.invalid = true;
                    component.dispatchEvent(new CustomEvent('kemet-input-status', {
                        bubbles: true,
                        composed: true,
                        detail: {
                            status: 'error',
                            validity: { passedLimit: true },
                            element: component,
                        },
                    }));
                }
            });
        }
    }
    submit() {
        const button = document.createElement('button');
        if (this.form) {
            button.type = 'submit';
            button.style.position = 'absolute';
            button.style.width = '0';
            button.style.height = '0';
            button.style.clip = 'rect(0 0 0 0)';
            button.style.clipPath = 'inset(50%)';
            button.style.overflow = 'hidden';
            button.style.whiteSpace = 'nowrap';
            this.form.append(button);
            button.click();
            button.remove();
        }
    }
}
//# sourceMappingURL=forms.js.map

/***/ }),

/***/ "./node_modules/kemet-ui/dist/utilities/misc/events.js":
/*!*************************************************************!*\
  !*** ./node_modules/kemet-ui/dist/utilities/misc/events.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emitEvent: () => (/* binding */ emitEvent)
/* harmony export */ });
const emitEvent = (element, name, detail, bubbles = true, composed = true) => {
    element.dispatchEvent(new CustomEvent(name, { bubbles, composed, detail }));
};
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./plugins/interactive-posts-ippm/blocks/assets-manager/editor.scss":
/*!**************************************************************************!*\
  !*** ./plugins/interactive-posts-ippm/blocks/assets-manager/editor.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mobile-drag-drop/index.min.js":
/*!****************************************************!*\
  !*** ./node_modules/mobile-drag-drop/index.min.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*! mobile-drag-drop 2.1.0 | Copyright (c) 2017 Tim Ruffles | MIT License */
!function(a,b){ true?b(exports):0}(this,function(a){"use strict";function b(){var a={dragEvents:"ondragstart"in document.documentElement,draggable:"draggable"in document.documentElement,touchEvents:"ontouchstart"in document.documentElement,userAgentSupportingNativeDnD:void 0},b=!!window.chrome||/chrome/i.test(navigator.userAgent);return a.userAgentSupportingNativeDnD=!(/iPad|iPhone|iPod|Android/.test(navigator.userAgent)||b&&a.touchEvents),A&&Object.keys(a).forEach(function(a){}),a}function c(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,b)}catch(a){}return a}function d(a){if(a&&Object.keys(a).forEach(function(b){B[b]=a[b]}),!B.forceApply){var d=b();if(d.userAgentSupportingNativeDnD&&d.draggable&&d.dragEvents)return!1}return y=c(),B.holdToDrag?h("touchstart",w,!1):h("touchstart",e,!1),!0}function e(a){if(!z){var b=f(a);if(b)try{z=new J(a,B,b,g)}catch(b){throw g(B,a,3),b}}}function f(a){var b=a.target;do if(b.draggable!==!1&&b.getAttribute&&"true"===b.getAttribute("draggable"))return b;while((b=b.parentNode)&&b!==document.body)}function g(a,b,c){if(0===c&&a.defaultActionOverride)try{a.defaultActionOverride(b),b.defaultPrevented}catch(a){}z=null}function h(a,b,c){void 0===c&&(c=!0),document.addEventListener(a,b,!!y&&{passive:c})}function i(a,b){document.removeEventListener(a,b)}function j(a){return 0===a.length?0:a.reduce(function(a,b){return b+a},0)/a.length}function k(a){return a&&a.tagName}function l(a,b){for(var c=0;c<a.changedTouches.length;c++){var d=a.changedTouches[c];if(d.identifier===b)return!0}return!1}function m(a,b,c,d,e,f,g){void 0===g&&(g=null);var h=b.changedTouches[0],i=new Event(c,{bubbles:!0,cancelable:d});i.dataTransfer=f,i.relatedTarget=g,i.screenX=h.screenX,i.screenY=h.screenY,i.clientX=h.clientX,i.clientY=h.clientY,i.pageX=h.pageX,i.pageY=h.pageY;var j=a.getBoundingClientRect();return i.offsetX=i.clientX-j.left,i.offsetY=i.clientY-j.top,i}function n(a,b,c){for(var d=[],e=[],f=0;f<b.touches.length;f++){var g=b.touches[f];d.push(g[a+"X"]),e.push(g[a+"Y"])}c.x=j(d),c.y=j(e)}function o(a,b){if(1===a.nodeType){for(var c=getComputedStyle(a),d=0;d<c.length;d++){var e=c[d];b.style.setProperty(e,c.getPropertyValue(e),c.getPropertyPriority(e))}b.style.pointerEvents="none",b.removeAttribute("id"),b.removeAttribute("class"),b.removeAttribute("draggable")}if(a.hasChildNodes())for(var d=0;d<a.childNodes.length;d++)o(a.childNodes[d],b.childNodes[d])}function p(a){var b=a.cloneNode(!0);return o(a,b),b.style.position="absolute",b.style.left="0px",b.style.top="0px",b.style.zIndex="999999",b.classList.add(G),b.classList.add(I),b}function q(a){return E.map(function(b){var c=a.style[b+"transform"];return c&&"none"!==c?c.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g,""):""})}function r(a,b,c,d,e){void 0===e&&(e=!0);var f=b.x,g=b.y;d&&(f+=d.x,g+=d.y),e&&(f-=parseInt(a.offsetWidth,10)/2,g-=parseInt(a.offsetHeight,10)/2);for(var h="translate3d("+f+"px,"+g+"px, 0)",i=0;i<E.length;i++){var j=E[i]+"transform";a.style[j]=h+" "+c[i]}}function s(a,b,c,d){var e=getComputedStyle(a);if("hidden"===e.visibility||"none"===e.display)return void d();b.classList.add(H);var f=getComputedStyle(b),g=parseFloat(f.transitionDuration);if(isNaN(g)||0===g)return void d();var h=a.getBoundingClientRect(),i={x:h.left,y:h.top};i.x+=document.body.scrollLeft||document.documentElement.scrollLeft,i.y+=document.body.scrollTop||document.documentElement.scrollTop,i.x-=parseInt(e.marginLeft,10),i.y-=parseInt(e.marginTop,10);var j=parseFloat(f.transitionDelay),k=Math.round(1e3*(g+j));r(b,i,c,void 0,!1),setTimeout(d,k)}function t(a,b){return a?a===C[0]?D[0]:0===a.indexOf(C[1])||a===C[7]?D[1]:0===a.indexOf(C[4])?D[3]:a===C[6]?D[2]:D[1]:3===b.nodeType&&"A"===b.tagName?D[3]:D[1]}function u(a,b,c,d,e,f,g){if(void 0===f&&(f=!0),void 0===g&&(g=null),A){var h=F+"debug",i=F+"event-target",j=F+"event-related-target";b.classList.add(h),b.classList.add(i),g&&(g.classList.add(h),g.classList.add(j))}var k=m(b,c,a,f,document.defaultView,e,g),l=!b.dispatchEvent(k);return d.g=0,A&&(b.classList.remove(i),g&&g.classList.remove(j)),l}function v(a,b){if(!a||a===C[7])return b;if(b===D[1]){if(0===a.indexOf(D[1]))return D[1]}else if(b===D[3]){if(0===a.indexOf(D[3])||a.indexOf("Link")>-1)return D[3]}else if(b===D[2]&&(0===a.indexOf(D[2])||a.indexOf("Move")>-1))return D[2];return D[0]}function w(a){var b=a.target,c=function(){g.off(),h.off(),i.off(),e(a)},d=function(){g.off(),h.off(),i.off(),clearTimeout(f)},f=setTimeout(c,B.holdToDrag),g=x(b,"touchend",d,this),h=x(b,"touchcancel",d,this),i=x(window,"scroll",d,this)}function x(a,b,c,d){return d&&(c=c.bind(d)),a.addEventListener(b,c),{off:function(){return a.removeEventListener(b,c)}}}var y,z,A=!1,B={iterationInterval:150},C=["none","copy","copyLink","copyMove","link","linkMove","move","all"],D=["none","copy","move","link"],E=["","-webkit-"],F="dnd-poly-",G=F+"drag-image",H=F+"snapback",I=F+"icon",J=function(){function a(a,b,c,d){this.h=a,this.i=b,this.j=c,this.k=d,this.l=0,this.m=null,this.o=null,this.p=a,this.q=a.changedTouches[0],this.s=this.t.bind(this),this.u=this.v.bind(this),h("touchmove",this.s,!1),h("touchend",this.u,!1),h("touchcancel",this.u,!1)}return a.prototype.A=function(){var a=this;this.l=1,this.B=D[0],this.C={D:{},F:void 0,g:3,G:[]},this.H={x:null,y:null},this.I={x:null,y:null};var b=this.j;if(this.J=new K(this.C,function(c,d,e){b=c,"number"!=typeof d&&"number"!=typeof e||(a.K={x:d||0,y:e||0})}),this.C.g=2,this.J.dropEffect=D[0],u("dragstart",this.j,this.p,this.C,this.J))return this.l=3,this.L(),!1;if(n("page",this.p,this.I),this.M=p(b),this.N=q(this.M),!this.K)if(this.i.dragImageOffset)this.K={x:this.i.dragImageOffset.x,y:this.i.dragImageOffset.y};else if(this.i.dragImageCenterOnTouch){var c=getComputedStyle(b);this.K={x:0-parseInt(c.marginLeft,10),y:0-parseInt(c.marginTop,10)}}else{var d=b.getBoundingClientRect(),c=getComputedStyle(b);this.K={x:d.left-this.q.clientX-parseInt(c.marginLeft,10)+d.width/2,y:d.top-this.q.clientY-parseInt(c.marginTop,10)+d.height/2}}return r(this.M,this.I,this.N,this.K,this.i.dragImageCenterOnTouch),document.body.appendChild(this.M),this.O=setInterval(function(){a.P||(a.P=!0,a.R(),a.P=!1)},this.i.iterationInterval),!0},a.prototype.L=function(){this.O&&(clearInterval(this.O),this.O=null),i("touchmove",this.s),i("touchend",this.u),i("touchcancel",this.u),this.M&&(this.M.parentNode.removeChild(this.M),this.M=null),this.k(this.i,this.p,this.l)},a.prototype.t=function(a){var b=this;if(l(a,this.q.identifier)!==!1){if(this.p=a,0===this.l){var c=void 0;if(this.i.dragStartConditionOverride)try{c=this.i.dragStartConditionOverride(a)}catch(a){c=!1}else c=1===a.touches.length;return c?void(this.A()===!0&&(this.h.preventDefault(),a.preventDefault())):void this.L()}if(a.preventDefault(),n("client",a,this.H),n("page",a,this.I),this.i.dragImageTranslateOverride)try{var d=!1;if(this.i.dragImageTranslateOverride(a,{x:this.H.x,y:this.H.y},this.m,function(a,c){b.M&&(d=!0,b.H.x+=a,b.H.y+=c,b.I.x+=a,b.I.y+=c,r(b.M,b.I,b.N,b.K,b.i.dragImageCenterOnTouch))}),d)return}catch(a){}r(this.M,this.I,this.N,this.K,this.i.dragImageCenterOnTouch)}},a.prototype.v=function(a){if(l(a,this.q.identifier)!==!1){if(this.i.dragImageTranslateOverride)try{this.i.dragImageTranslateOverride(void 0,void 0,void 0,function(){})}catch(a){}if(0===this.l)return void this.L();a.preventDefault(),this.l="touchcancel"===a.type?3:2}},a.prototype.R=function(){var a=this;if(A)var b=F+"debug",c=F+"immediate-user-selection",d=F+"current-drop-target";var e=this.B;this.C.g=3,this.J.dropEffect=D[0];var f=u("drag",this.j,this.p,this.C,this.J);if(f&&(this.B=D[0]),f||2===this.l||3===this.l){var g=this.S(this.l);return g?void s(this.j,this.M,this.N,function(){a.T()}):void this.T()}var h=document.elementFromPoint(this.H.x,this.H.y),i=this.o;h!==this.m&&h!==this.o&&(A&&(this.m&&this.m.classList.remove(c),h&&(h.classList.add(b),h.classList.add(c))),this.m=h,null!==this.o&&(this.C.g=3,this.J.dropEffect=D[0],u("dragexit",this.o,this.p,this.C,this.J,!1)),null===this.m?this.o=this.m:(this.C.g=3,this.J.dropEffect=t(this.C.F,this.j),u("dragenter",this.m,this.p,this.C,this.J)?(this.o=this.m,this.B=v(this.J.effectAllowed,this.J.dropEffect)):this.m!==document.body&&(this.o=document.body))),i!==this.o&&k(i)&&(A&&i.classList.remove(d),this.C.g=3,this.J.dropEffect=D[0],u("dragleave",i,this.p,this.C,this.J,!1,this.o)),k(this.o)&&(A&&(this.o.classList.add(b),this.o.classList.add(d)),this.C.g=3,this.J.dropEffect=t(this.C.F,this.j),u("dragover",this.o,this.p,this.C,this.J)===!1?this.B=D[0]:this.B=v(this.J.effectAllowed,this.J.dropEffect)),e!==this.B&&this.M.classList.remove(F+e);var j=F+this.B;this.M.classList.contains(j)===!1&&this.M.classList.add(j)},a.prototype.S=function(a){if(A){var b=F+"immediate-user-selection",c=F+"current-drop-target";this.o&&this.o.classList.remove(c),this.m&&this.m.classList.remove(b)}var d=this.B===D[0]||null===this.o||3===a;return d?k(this.o)&&(this.C.g=3,this.J.dropEffect=D[0],u("dragleave",this.o,this.p,this.C,this.J,!1)):k(this.o)&&(this.C.g=1,this.J.dropEffect=this.B,u("drop",this.o,this.p,this.C,this.J)===!0?this.B=this.J.dropEffect:this.B=D[0]),d},a.prototype.T=function(){this.C.g=3,this.J.dropEffect=this.B,u("dragend",this.j,this.p,this.C,this.J,!1),this.l=2,this.L()},a}(),K=function(){function a(a,b){this.U=a,this.V=b,this.W=D[0]}return Object.defineProperty(a.prototype,"types",{get:function(){if(0!==this.U.g)return Object.freeze(this.U.G)},enumerable:!0,configurable:!0}),a.prototype.setData=function(a,b){if(2===this.U.g){if(a.indexOf(" ")>-1)throw new Error("illegal arg: type contains space");this.U.D[a]=b,this.U.G.indexOf(a)===-1&&this.U.G.push(a)}},a.prototype.getData=function(a){if(1===this.U.g||2===this.U.g)return this.U.D[a]||""},a.prototype.clearData=function(a){if(2===this.U.g){if(a&&this.U.D[a]){delete this.U.D[a];var b=this.U.G.indexOf(a);return void(b>-1&&this.U.G.splice(b,1))}this.U.D={},this.U.G=[]}},a.prototype.setDragImage=function(a,b,c){2===this.U.g&&this.V(a,b,c)},Object.defineProperty(a.prototype,"effectAllowed",{get:function(){return this.U.F},set:function(a){2===this.U.g&&C.indexOf(a)>-1&&(this.U.F=a)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"dropEffect",{get:function(){return this.W},set:function(a){0!==this.U.g&&C.indexOf(a)>-1&&(this.W=a)},enumerable:!0,configurable:!0}),a}();a.polyfill=d,Object.defineProperty(a,"__esModule",{value:!0})});
//# sourceMappingURL=index.min.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@lit/react/development/create-component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@lit/react/development/create-component.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComponent: () => (/* binding */ createComponent)
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
const DEV_MODE = true;
const reservedReactProperties = new Set([
    'children',
    'localName',
    'ref',
    'style',
    'className',
]);
const listenedEvents = new WeakMap();
/**
 * Adds an event listener for the specified event to the given node. In the
 * React setup, there should only ever be one event listener. Thus, for
 * efficiency only one listener is added and the handler for that listener is
 * updated to point to the given listener function.
 */
const addOrUpdateEventListener = (node, event, listener) => {
    let events = listenedEvents.get(node);
    if (events === undefined) {
        listenedEvents.set(node, (events = new Map()));
    }
    let handler = events.get(event);
    if (listener !== undefined) {
        // If necessary, add listener and track handler
        if (handler === undefined) {
            events.set(event, (handler = { handleEvent: listener }));
            node.addEventListener(event, handler);
            // Otherwise just update the listener with new value
        }
        else {
            handler.handleEvent = listener;
        }
        // Remove listener if one exists and value is undefined
    }
    else if (handler !== undefined) {
        events.delete(event);
        node.removeEventListener(event, handler);
    }
};
/**
 * Sets properties and events on custom elements. These properties and events
 * have been pre-filtered so we know they should apply to the custom element.
 */
const setProperty = (node, name, value, old, events) => {
    const event = events?.[name];
    // Dirty check event value.
    if (event !== undefined) {
        if (value !== old) {
            addOrUpdateEventListener(node, event, value);
        }
        return;
    }
    // But don't dirty check properties; elements are assumed to do this.
    node[name] = value;
    // This block is to replicate React's behavior for attributes of native
    // elements where `undefined` or `null` values result in attributes being
    // removed.
    // https://github.com/facebook/react/blob/899cb95f52cc83ab5ca1eb1e268c909d3f0961e7/packages/react-dom-bindings/src/client/DOMPropertyOperations.js#L107-L141
    //
    // It's only needed here for native HTMLElement properties that reflect
    // attributes of the same name but don't have that behavior like "id" or
    // "draggable".
    if ((value === undefined || value === null) &&
        name in HTMLElement.prototype) {
        node.removeAttribute(name);
    }
};
/**
 * Creates a React component for a custom element. Properties are distinguished
 * from attributes automatically, and events can be configured so they are added
 * to the custom element as event listeners.
 *
 * @param options An options bag containing the parameters needed to generate a
 * wrapped web component.
 *
 * @param options.react The React module, typically imported from the `react`
 * npm package.
 * @param options.tagName The custom element tag name registered via
 * `customElements.define`.
 * @param options.elementClass The custom element class registered via
 * `customElements.define`.
 * @param options.events An object listing events to which the component can
 * listen. The object keys are the event property names passed in via React
 * props and the object values are the names of the corresponding events
 * generated by the custom element. For example, given `{onactivate:
 * 'activate'}` an event function may be passed via the component's `onactivate`
 * prop and will be called when the custom element fires its `activate` event.
 * @param options.displayName A React component display name, used in debugging
 * messages. Default value is inferred from the name of custom element class
 * registered via `customElements.define`.
 */
const createComponent = ({ react: React, tagName, elementClass, events, displayName, }) => {
    const eventProps = new Set(Object.keys(events ?? {}));
    if (DEV_MODE) {
        for (const p of reservedReactProperties) {
            if (p in elementClass.prototype && !(p in HTMLElement.prototype)) {
                // Note, this effectively warns only for `ref` since the other
                // reserved props are on HTMLElement.prototype. To address this
                // would require crawling down the prototype, which doesn't feel worth
                // it since implementing these properties on an element is extremely
                // rare.
                console.warn(`${tagName} contains property ${p} which is a React reserved ` +
                    `property. It will be used by React and not set on the element.`);
            }
        }
    }
    const ReactComponent = React.forwardRef((props, ref) => {
        const prevElemPropsRef = React.useRef(new Map());
        const elementRef = React.useRef(null);
        // Props to be passed to React.createElement
        const reactProps = {};
        // Props to be set on element with setProperty
        const elementProps = {};
        for (const [k, v] of Object.entries(props)) {
            if (reservedReactProperties.has(k)) {
                // React does *not* handle `className` for custom elements so
                // coerce it to `class` so it's handled correctly.
                reactProps[k === 'className' ? 'class' : k] = v;
                continue;
            }
            if (eventProps.has(k) || k in elementClass.prototype) {
                elementProps[k] = v;
                continue;
            }
            reactProps[k] = v;
        }
        // useLayoutEffect produces warnings during server rendering.
        if (!NODE_MODE) {
            // This one has no dependency array so it'll run on every re-render.
            React.useLayoutEffect(() => {
                if (elementRef.current === null) {
                    return;
                }
                const newElemProps = new Map();
                for (const key in elementProps) {
                    setProperty(elementRef.current, key, props[key], prevElemPropsRef.current.get(key), events);
                    prevElemPropsRef.current.delete(key);
                    newElemProps.set(key, props[key]);
                }
                // "Unset" any props from previous render that no longer exist.
                // Setting to `undefined` seems like the correct thing to "unset"
                // but currently React will set it as `null`.
                // See https://github.com/facebook/react/issues/28203
                for (const [key, value] of prevElemPropsRef.current) {
                    setProperty(elementRef.current, key, undefined, value, events);
                }
                prevElemPropsRef.current = newElemProps;
            });
            // Empty dependency array so this will only run once after first render.
            React.useLayoutEffect(() => {
                elementRef.current?.removeAttribute('defer-hydration');
            }, []);
        }
        if (NODE_MODE) {
            // If component is to be server rendered with `@lit/ssr-react`, pass
            // element properties in a special bag to be set by the server-side
            // element renderer.
            if ((React.createElement.name === 'litPatchedCreateElement' ||
                globalThis.litSsrReactEnabled) &&
                Object.keys(elementProps).length) {
                // This property needs to remain unminified.
                reactProps['_$litProps$'] = elementProps;
            }
        }
        else {
            // Suppress hydration warning for server-rendered attributes.
            // This property needs to remain unminified.
            reactProps['suppressHydrationWarning'] = true;
        }
        return React.createElement(tagName, {
            ...reactProps,
            ref: React.useCallback((node) => {
                elementRef.current = node;
                if (typeof ref === 'function') {
                    ref(node);
                }
                else if (ref !== null) {
                    ref.current = node;
                }
            }, [ref]),
        });
    });
    ReactComponent.displayName = displayName ?? elementClass.name;
    return ReactComponent;
};
//# sourceMappingURL=create-component.js.map

/***/ }),

/***/ "./node_modules/@lit/react/development/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@lit/react/development/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComponent: () => (/* reexport safe */ _create_component_js__WEBPACK_IMPORTED_MODULE_0__.createComponent)
/* harmony export */ });
/* harmony import */ var _create_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-component.js */ "./node_modules/@lit/react/development/create-component.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* binding */ CSSResult),
/* harmony export */   adoptStyles: () => (/* binding */ adoptStyles),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   getCompatibleStyle: () => (/* binding */ getCompatibleStyle),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* binding */ unsafeCSS)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = global.ShadowRoot &&
    (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = new WeakMap();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */
class CSSResult {
    constructor(cssText, strings, safeToken) {
        // This property needs to remain unminified.
        this['_$cssResult$'] = true;
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
        this._strings = strings;
    }
    // This is a getter so that it's lazy. In practice, this means stylesheets
    // are not created until the first element instance is made.
    get styleSheet() {
        // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
        // constructable.
        let styleSheet = this._styleSheet;
        const strings = this._strings;
        if (supportsAdoptingStyleSheets && styleSheet === undefined) {
            const cacheable = strings !== undefined && strings.length === 1;
            if (cacheable) {
                styleSheet = cssTagCache.get(strings);
            }
            if (styleSheet === undefined) {
                (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
                if (cacheable) {
                    cssTagCache.set(strings, styleSheet);
                }
            }
        }
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const textFromCSSResult = (value) => {
    // This property needs to remain unminified.
    if (value['_$cssResult$'] === true) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ` +
            `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` +
            `to ensure page security.`);
    }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */
const css = (strings, ...values) => {
    const cssText = strings.length === 1
        ? strings[0]
        : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, strings, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
const adoptStyles = (renderRoot, styles) => {
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    }
    else {
        styles.forEach((s) => {
            const style = document.createElement('style');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nonce = global['litNonce'];
            if (nonce !== undefined) {
                style.setAttribute('nonce', nonce);
            }
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        });
    }
};
const cssResultFromStyleSheet = (sheet) => {
    let cssText = '';
    for (const rule of sheet.cssRules) {
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets ||
    (NODE_MODE && global.CSSStyleSheet === undefined)
    ? (s) => s
    : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/base.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/base.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decorateProperty: () => (/* binding */ decorateProperty),
/* harmony export */   legacyPrototypeMethod: () => (/* binding */ legacyPrototypeMethod),
/* harmony export */   standardPrototypeMethod: () => (/* binding */ standardPrototypeMethod)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyPrototypeMethod = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardPrototypeMethod = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
/**
 * Helper for decorating a property that is compatible with both TypeScript
 * and Babel decorators. The optional `finisher` can be used to perform work on
 * the class. The optional `descriptor` should return a PropertyDescriptor
 * to install for the given property.
 *
 * @param finisher {function} Optional finisher method; receives the element
 * constructor and property key as arguments and has no return value.
 * @param descriptor {function} Optional descriptor method; receives the
 * property key as an argument and returns a property descriptor to define for
 * the given property.
 * @returns {ClassElement|void}
 */
const decorateProperty = ({ finisher, descriptor, }) => (protoOrDescriptor, name
// Note TypeScript requires the return type to be `void|any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
    var _a;
    // TypeScript / Babel legacy mode
    if (name !== undefined) {
        const ctor = protoOrDescriptor
            .constructor;
        if (descriptor !== undefined) {
            Object.defineProperty(protoOrDescriptor, name, descriptor(name));
        }
        finisher === null || finisher === void 0 ? void 0 : finisher(ctor, name);
        // Babel standard mode
    }
    else {
        // Note, the @property decorator saves `key` as `originalKey`
        // so try to use it here.
        const key = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (_a = protoOrDescriptor.originalKey) !== null && _a !== void 0 ? _a : protoOrDescriptor.key;
        const info = descriptor != undefined
            ? {
                kind: 'method',
                placement: 'prototype',
                key,
                descriptor: descriptor(protoOrDescriptor.key),
            }
            : { ...protoOrDescriptor, key };
        if (finisher != undefined) {
            info.finisher = function (ctor) {
                finisher(ctor, key);
            };
        }
        return info;
    }
};
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/custom-element.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* binding */ customElement)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyCustomElement = (tagName, clazz) => {
    customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            customElements.define(tagName, clazz);
        },
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
const customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === 'function'
    ? legacyCustomElement(tagName, classOrDescriptor)
    : standardCustomElement(tagName, classOrDescriptor);
//# sourceMappingURL=custom-element.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/event-options.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/event-options.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventOptions: () => (/* binding */ eventOptions)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */
function eventOptions(options) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        finisher: (ctor, name) => {
            Object.assign(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ctor.prototype[name], options);
        },
    });
}
//# sourceMappingURL=event-options.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/property.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   property: () => (/* binding */ property)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' &&
        element.descriptor &&
        !('value' in element.descriptor)) {
        return {
            ...element,
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            },
        };
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // store the original key so subsequent decorators have access to it.
            originalKey: element.key,
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            },
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a reactive property that reflects a
 * corresponding attribute value. When a decorated property is set
 * the element will update and render. A {@linkcode PropertyDeclaration} may
 * optionally be supplied to configure property features.
 *
 * This decorator should only be used for public fields. As public fields,
 * properties should be considered as primarily settable by element users,
 * either via attribute or the property itself.
 *
 * Generally, properties that are changed by the element should be private or
 * protected fields and should use the {@linkcode state} decorator.
 *
 * However, sometimes element code does need to set a public property. This
 * should typically only be done in response to user interaction, and an event
 * should be fired informing the user; for example, a checkbox sets its
 * `checked` property when clicked and fires a `changed` event. Mutating public
 * properties should typically not be done for non-primitive (object or array)
 * properties. In other cases when an element needs to manage state, a private
 * property decorated via the {@linkcode state} decorator should be used. When
 * needed, state properties can be initialized via public properties to
 * facilitate complex interactions.
 *
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (protoOrDescriptor, name) => name !== undefined
        ? legacyProperty(options, protoOrDescriptor, name)
        : standardProperty(options, protoOrDescriptor);
}
//# sourceMappingURL=property.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-all.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-all.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAll: () => (/* binding */ queryAll)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs: NodeListOf<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function queryAll(selector) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a, _b;
                return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector)) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-all.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedElements: () => (/* binding */ queryAssignedElements)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a;
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
/**
 * A tiny module scoped polyfill for HTMLSlotElement.assignedElements.
 */
const slotAssignedElements = ((_a = global.HTMLSlotElement) === null || _a === void 0 ? void 0 : _a.prototype.assignedElements) != null
    ? (slot, opts) => slot.assignedElements(opts)
    : (slot, opts) => slot
        .assignedNodes(opts)
        .filter((node) => node.nodeType === Node.ELEMENT_NODE);
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedElements` of the given `slot`. Provides a declarative
 * way to use
 * [`HTMLSlotElement.assignedElements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements).
 *
 * Can be passed an optional {@linkcode QueryAssignedElementsOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedElements({ slot: 'list' })
 *   listItems!: Array<HTMLElement>;
 *   @queryAssignedElements()
 *   unnamedSlotEls!: Array<HTMLElement>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *       <slot></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note, the type of this property should be annotated as `Array<HTMLElement>`.
 *
 * @category Decorator
 */
function queryAssignedElements(options) {
    const { slot, selector } = options !== null && options !== void 0 ? options : {};
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a;
                const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                const elements = slotEl != null ? slotAssignedElements(slotEl, options) : [];
                if (selector) {
                    return elements.filter((node) => node.matches(selector));
                }
                return elements;
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-assigned-elements.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedNodes: () => (/* binding */ queryAssignedNodes)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */


function queryAssignedNodes(slotOrOptions, flatten, selector) {
    // Normalize the overloaded arguments.
    let slot = slotOrOptions;
    let assignedNodesOptions;
    if (typeof slotOrOptions === 'object') {
        slot = slotOrOptions.slot;
        assignedNodesOptions = slotOrOptions;
    }
    else {
        assignedNodesOptions = { flatten };
    }
    // For backwards compatibility, queryAssignedNodes with a selector behaves
    // exactly like queryAssignedElements with a selector.
    if (selector) {
        return (0,_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__.queryAssignedElements)({
            slot: slot,
            flatten,
            selector,
        });
    }
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a, _b;
                const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                return (_b = slotEl === null || slotEl === void 0 ? void 0 : slotEl.assignedNodes(assignedNodesOptions)) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-assigned-nodes.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-async.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-async.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAsync: () => (/* binding */ queryAsync)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first: Promise<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */
function queryAsync(selector) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            async get() {
                var _a;
                await this.updateComplete;
                return (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-async.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   query: () => (/* binding */ query)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 *     once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first: HTMLDivElement;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (name) => {
            const descriptor = {
                get() {
                    var _a, _b;
                    return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                },
                enumerable: true,
                configurable: true,
            };
            if (cache) {
                const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
                descriptor.get = function () {
                    var _a, _b;
                    if (this[key] === undefined) {
                        this[key] = (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                    }
                    return this[key];
                };
            }
            return descriptor;
        },
    });
}
//# sourceMappingURL=query.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/state.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

/**
 * Declares a private or protected reactive property that still triggers
 * updates to the element when it changes. It does not reflect from the
 * corresponding attribute.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
function state(options) {
    return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__.property)({
        ...options,
        state: true,
    });
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   ReactiveElement: () => (/* binding */ ReactiveElement),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   defaultConverter: () => (/* binding */ defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   notEqual: () => (/* binding */ notEqual),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
var _e;
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */

// In the Node build, this import will be injected by Rollup:
// import {HTMLElement, customElements} from '@lit-labs/ssr-dom-shim';

const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
if (NODE_MODE) {
    (_a = global.customElements) !== null && _a !== void 0 ? _a : (global.customElements = customElements);
}
const DEV_MODE = true;
let requestUpdateThenable;
let issueWarning;
const trustedTypes = global
    .trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
const polyfillSupport = DEV_MODE
    ? global.reactiveElementPolyfillSupportDevMode
    : global.reactiveElementPolyfillSupport;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_b = global.litIssuedWarnings) !== null && _b !== void 0 ? _b : (global.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
    // Issue polyfill support warning.
    if (((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.inUse) && polyfillSupport === undefined) {
        issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` +
            `the \`polyfill-support\` module has not been loaded.`);
    }
    requestUpdateThenable = (name) => ({
        then: (onfulfilled, _onrejected) => {
            issueWarning('request-update-promise', `The \`requestUpdate\` method should no longer return a Promise but ` +
                `does so on \`${name}\`. Use \`updateComplete\` instead.`);
            if (onfulfilled !== undefined) {
                onfulfilled(false);
            }
        },
    });
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                value = value ? emptyStringForBooleanAttribute : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute(value, type) {
        let fromValue = value;
        switch (type) {
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                }
                catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    },
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual,
};
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class ReactiveElement
// In the Node build, this `extends` clause will be substituted with
// `(globalThis.HTMLElement ?? HTMLElement)`.
//
// This way, we will first prefer any global `HTMLElement` polyfill that the
// user has assigned, and then fall back to the `HTMLElement` shim which has
// been imported (see note at the top of this file about how this import is
// generated by Rollup). Note that the `HTMLElement` variable has been
// shadowed by this import, so it no longer refers to the global.
 extends HTMLElement {
    constructor() {
        super();
        this.__instanceProperties = new Map();
        /**
         * True if there is a pending update as a result of calling `requestUpdate()`.
         * Should only be read.
         * @category updates
         */
        this.isUpdatePending = false;
        /**
         * Is set to `true` after the first update. The element code cannot assume
         * that `renderRoot` exists before the element `hasUpdated`.
         * @category updates
         */
        this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */
        this.__reflectingProperty = null;
        this.__initialize();
    }
    /**
     * Adds an initializer function to the class that is called during instance
     * construction.
     *
     * This is useful for code that runs against a `ReactiveElement`
     * subclass, such as a decorator, that needs to do work for each
     * instance, such as setting up a `ReactiveController`.
     *
     * ```ts
     * const myDecorator = (target: typeof ReactiveElement, key: string) => {
     *   target.addInitializer((instance: ReactiveElement) => {
     *     // This is run during construction of the element
     *     new MyController(instance);
     *   });
     * }
     * ```
     *
     * Decorating a field will then cause each instance to run an initializer
     * that adds a controller:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   @myDecorator foo;
     * }
     * ```
     *
     * Initializers are stored per-constructor. Adding an initializer to a
     * subclass does not add it to a superclass. Since initializers are run in
     * constructors, initializers will run in order of the class hierarchy,
     * starting with superclasses and progressing to the instance's class.
     *
     * @nocollapse
     */
    static addInitializer(initializer) {
        var _a;
        this.finalize();
        ((_a = this._initializers) !== null && _a !== void 0 ? _a : (this._initializers = [])).push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.elementProperties.forEach((v, p) => {
            const attr = this.__attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a {@linkcode PropertyDeclaration} for the property with the
     * given options. The property setter calls the property's `hasChanged`
     * property option or uses a strict identity check to determine whether or not
     * to request an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * ```ts
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        var _a;
        // if this is a state property, force the attribute to false.
        if (options.state) {
            // Cast as any since this is readonly.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options.attribute = false;
        }
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure finalization has been kicked off.
        this.finalize();
        this.elementProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                Object.defineProperty(this.prototype, name, descriptor);
                if (DEV_MODE) {
                    // If this class doesn't have its own set, create one and initialize
                    // with the values in the set from the nearest ancestor class, if any.
                    if (!this.hasOwnProperty('__reactivePropertyKeys')) {
                        this.__reactivePropertyKeys = new Set((_a = this.__reactivePropertyKeys) !== null && _a !== void 0 ? _a : []);
                    }
                    this.__reactivePropertyKeys.add(name);
                }
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     * ```ts
     * class MyElement extends LitElement {
     *   static getPropertyDescriptor(name, key, options) {
     *     const defaultDescriptor =
     *         super.getPropertyDescriptor(name, key, options);
     *     const setter = defaultDescriptor.set;
     *     return {
     *       get: defaultDescriptor.get,
     *       set(value) {
     *         setter.call(this, value);
     *         // custom action.
     *       },
     *       configurable: true,
     *       enumerable: true
     *     }
     *   }
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true,
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a `PropertyDeclaration` via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override
     * {@linkcode createProperty}.
     *
     * @nocollapse
     * @final
     * @category properties
     */
    static getPropertyOptions(name) {
        return this.elementProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties, sets up element
     * styling, and ensures any superclasses are also finalized. Returns true if
     * the element was finalized.
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(finalized)) {
            return false;
        }
        this[finalized] = true;
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        superCtor.finalize();
        // Create own set of initializers for this class if any exist on the
        // superclass and copy them down. Note, for a small perf boost, avoid
        // creating initializers unless needed.
        if (superCtor._initializers !== undefined) {
            this._initializers = [...superCtor._initializers];
        }
        this.elementProperties = new Map(superCtor.elementProperties);
        // initialize Map populated in observedAttributes
        this.__attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...Object.getOwnPropertySymbols(props),
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeScript lack of support for symbol in
                // index types
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.createProperty(p, props[p]);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        // DEV mode warnings
        if (DEV_MODE) {
            const warnRemovedOrRenamed = (name, renamed = false) => {
                if (this.prototype.hasOwnProperty(name)) {
                    issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${this.name}. It ` +
                        `has been ${renamed ? 'renamed' : 'removed'} ` +
                        `in this version of LitElement.`);
                }
            };
            warnRemovedOrRenamed('initialize');
            warnRemovedOrRenamed('requestUpdateInternal');
            warnRemovedOrRenamed('_getUpdateComplete', true);
        }
        return true;
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */
    static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // Casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set) {
                elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
            }
        }
        else if (styles !== undefined) {
            elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false
            ? undefined
            : typeof attribute === 'string'
                ? attribute
                : typeof name === 'string'
                    ? name.toLowerCase()
                    : undefined;
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     */
    __initialize() {
        var _a;
        this.__updatePromise = new Promise((res) => (this.enableUpdating = res));
        this._$changedProperties = new Map();
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        (_a = this.constructor._initializers) === null || _a === void 0 ? void 0 : _a.forEach((i) => i(this));
    }
    /**
     * Registers a `ReactiveController` to participate in the element's reactive
     * update cycle. The element automatically calls into any registered
     * controllers during its lifecycle callbacks.
     *
     * If the element is connected when `addController()` is called, the
     * controller's `hostConnected()` callback will be immediately called.
     * @category controllers
     */
    addController(controller) {
        var _a, _b;
        ((_a = this.__controllers) !== null && _a !== void 0 ? _a : (this.__controllers = [])).push(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            (_b = controller.hostConnected) === null || _b === void 0 ? void 0 : _b.call(controller);
        }
    }
    /**
     * Removes a `ReactiveController` from the element.
     * @category controllers
     */
    removeController(controller) {
        var _a;
        // Note, if the indexOf is -1, the >>> will flip the sign which makes the
        // splice do nothing.
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.splice(this.__controllers.indexOf(controller) >>> 0, 1);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    __saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor.elementProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                this.__instanceProperties.set(p, this[p]);
                delete this[p];
            }
        });
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        const renderRoot = (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this.attachShadow(this.constructor.shadowRootOptions);
        (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        // create renderRoot before first update.
        if (this.renderRoot === undefined) {
            this.renderRoot = this.createRenderRoot();
        }
        this.enableUpdating(true);
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostConnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */
    enableUpdating(_requestedUpdate) { }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostDisconnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Synchronizes property values when attributes change.
     *
     * Specifically, when an attribute is set, the corresponding property is set.
     * You should rarely need to implement this callback. If this method is
     * overridden, `super.attributeChangedCallback(name, _old, value)` must be
     * called.
     *
     * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
     * on MDN for more information about the `attributeChangedCallback`.
     * @category attributes
     */
    attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        var _a;
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            const converter = ((_a = options.converter) === null || _a === void 0 ? void 0 : _a.toAttribute) !==
                undefined
                ? options.converter
                : defaultConverter;
            const attrValue = converter.toAttribute(value, options.type);
            if (DEV_MODE &&
                this.constructor.enabledWarnings.indexOf('migration') >= 0 &&
                attrValue === undefined) {
                issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` +
                    `undefined on element ${this.localName}. The attribute will be ` +
                    `removed, but in the previous version of \`ReactiveElement\`, ` +
                    `the attribute would not have changed.`);
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */
    _$attributeToProperty(name, value) {
        var _a;
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            const options = ctor.getPropertyOptions(propName);
            const converter = typeof options.converter === 'function'
                ? { fromAttribute: options.converter }
                : ((_a = options.converter) === null || _a === void 0 ? void 0 : _a.fromAttribute) !== undefined
                    ? options.converter
                    : defaultConverter;
            // mark state reflecting
            this.__reflectingProperty = propName;
            this[propName] = converter.fromAttribute(value, options.type
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            );
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @category updates
     */
    requestUpdate(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            options =
                options ||
                    this.constructor.getPropertyOptions(name);
            const hasChanged = options.hasChanged || notEqual;
            if (hasChanged(this[name], oldValue)) {
                if (!this._$changedProperties.has(name)) {
                    this._$changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true && this.__reflectingProperty !== name) {
                    if (this.__reflectingProperties === undefined) {
                        this.__reflectingProperties = new Map();
                    }
                    this.__reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this.isUpdatePending && shouldRequestUpdate) {
            this.__updatePromise = this.__enqueueUpdate();
        }
        // Note, since this no longer returns a promise, in dev mode we return a
        // thenable which warns if it's called.
        return DEV_MODE
            ? requestUpdateThenable(this.localName)
            : undefined;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
        }
        catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.scheduleUpdate();
        // If `scheduleUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Schedules an element update. You can override this method to change the
     * timing of updates by returning a Promise. The update will await the
     * returned Promise, and you should resolve the Promise to allow the update
     * to proceed. If this method is overridden, `super.scheduleUpdate()`
     * must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```ts
     * override protected async scheduleUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.scheduleUpdate();
     * }
     * ```
     * @category updates
     */
    scheduleUpdate() {
        return this.performUpdate();
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * Call `performUpdate()` to immediately process a pending update. This should
     * generally not be needed, but it can be done in rare cases when you need to
     * update synchronously.
     *
     * Note: To ensure `performUpdate()` synchronously completes a pending update,
     * it should not be overridden. In LitElement 2.x it was suggested to override
     * `performUpdate()` to also customizing update scheduling. Instead, you should now
     * override `scheduleUpdate()`. For backwards compatibility with LitElement 2.x,
     * scheduling updates via `performUpdate()` continues to work, but will make
     * also calling `performUpdate()` to synchronously process updates difficult.
     *
     * @category updates
     */
    performUpdate() {
        var _a, _b;
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({ kind: 'update' });
        // create renderRoot before first update.
        if (!this.hasUpdated) {
            // Produce warning if any class properties are shadowed by class fields
            if (DEV_MODE) {
                const shadowedProperties = [];
                (_a = this.constructor.__reactivePropertyKeys) === null || _a === void 0 ? void 0 : _a.forEach((p) => {
                    var _a;
                    if (this.hasOwnProperty(p) && !((_a = this.__instanceProperties) === null || _a === void 0 ? void 0 : _a.has(p))) {
                        shadowedProperties.push(p);
                    }
                });
                if (shadowedProperties.length) {
                    throw new Error(`The following properties on element ${this.localName} will not ` +
                        `trigger updates as expected because they are set using class ` +
                        `fields: ${shadowedProperties.join(', ')}. ` +
                        `Native class fields and some compiled output will overwrite ` +
                        `accessors used for detecting changes. See ` +
                        `https://lit.dev/msg/class-field-shadowing ` +
                        `for more information.`);
                }
            }
        }
        // Mixin instance properties once, if they exist.
        if (this.__instanceProperties) {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.__instanceProperties.forEach((v, p) => (this[p] = v));
            this.__instanceProperties = undefined;
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.willUpdate(changedProperties);
                (_b = this.__controllers) === null || _b === void 0 ? void 0 : _b.forEach((c) => { var _a; return (_a = c.hostUpdate) === null || _a === void 0 ? void 0 : _a.call(c); });
                this.update(changedProperties);
            }
            else {
                this.__markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * Invoked before `update()` to compute values needed during the update.
     *
     * Implement `willUpdate` to compute property values that depend on other
     * properties and are used in the rest of the update process.
     *
     * ```ts
     * willUpdate(changedProperties) {
     *   // only need to check changed properties for an expensive computation.
     *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
     *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
     *   }
     * }
     *
     * render() {
     *   return html`SHA: ${this.sha}`;
     * }
     * ```
     *
     * @category updates
     */
    willUpdate(_changedProperties) { }
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostUpdated) === null || _a === void 0 ? void 0 : _a.call(c); });
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (DEV_MODE &&
            this.isUpdatePending &&
            this.constructor.enabledWarnings.indexOf('change-in-update') >= 0) {
            issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` +
                `(generally because a property was set) ` +
                `after an update completed, causing a new update to be scheduled. ` +
                `This is inefficient and should be avoided unless the next update ` +
                `can only be scheduled as a side effect of the previous update.`);
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   override async getUpdateComplete() {
     *     const result = await super.getUpdateComplete();
     *     await this._myChild.updateComplete;
     *     return result;
     *   }
     * }
     * ```
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update()` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    update(_changedProperties) {
        if (this.__reflectingProperties !== undefined) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));
            this.__reflectingProperties = undefined;
        }
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    updated(_changedProperties) { }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * ```ts
     * firstUpdated() {
     *   this.renderRoot.getElementById('my-text-area').focus();
     * }
     * ```
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    firstUpdated(_changedProperties) { }
}
_e = finalized;
/**
 * Marks class as having finished creating properties.
 */
ReactiveElement[_e] = true;
/**
 * Memoized list of all element properties, including any superclass properties.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category properties
 */
ReactiveElement.elementProperties = new Map();
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = { mode: 'open' };
// Apply polyfills if available
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ ReactiveElement });
// Dev mode warnings...
if (DEV_MODE) {
    // Default warning set.
    ReactiveElement.enabledWarnings = ['change-in-update'];
    const ensureOwnWarnings = function (ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function (warning) {
        ensureOwnWarnings(this);
        if (this.enabledWarnings.indexOf(warning) < 0) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function (warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
((_d = global.reactiveElementVersions) !== null && _d !== void 0 ? _d : (global.reactiveElementVersions = [])).push('1.6.3');
if (DEV_MODE && global.reactiveElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=reactive-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   LitElement: () => (/* binding */ LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   UpdatingElement: () => (/* binding */ UpdatingElement),
/* harmony export */   _$LE: () => (/* binding */ _$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   noChange: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




// For backwards compatibility export ReactiveElement as UpdatingElement. Note,
// IE transpilation requires exporting like this.
const UpdatingElement = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;
const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */
class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
    constructor() {
        super(...arguments);
        /**
         * @category rendering
         */
        this.renderOptions = { host: this };
        this.__childPart = undefined;
    }
    /**
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        var _b;
        const renderRoot = super.createRenderRoot();
        // When adoptedStyleSheets are shimmed, they are inserted into the
        // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
        // any styles in Lit content render before adoptedStyleSheets. This is
        // important so that adoptedStyleSheets have precedence over styles in
        // the shadowRoot.
        (_a = (_b = this.renderOptions).renderBefore) !== null && _a !== void 0 ? _a : (_b.renderBefore = renderRoot.firstChild);
        return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const value = this.render();
        if (!this.hasUpdated) {
            this.renderOptions.isConnected = this.isConnected;
        }
        super.update(changedProperties);
        this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
    }
    /**
     * Invoked when the component is added to the document's DOM.
     *
     * In `connectedCallback()` you should setup tasks that should only occur when
     * the element is connected to the document. The most common of these is
     * adding event listeners to nodes external to the element, like a keydown
     * event handler added to the window.
     *
     * ```ts
     * connectedCallback() {
     *   super.connectedCallback();
     *   addEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * Typically, anything done in `connectedCallback()` should be undone when the
     * element is disconnected, in `disconnectedCallback()`.
     *
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(true);
    }
    /**
     * Invoked when the component is removed from the document's DOM.
     *
     * This callback is the main signal to the element that it may no longer be
     * used. `disconnectedCallback()` should ensure that nothing is holding a
     * reference to the element (such as event listeners added to nodes external
     * to the element), so that it is free to be garbage collected.
     *
     * ```ts
     * disconnectedCallback() {
     *   super.disconnectedCallback();
     *   window.removeEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * An element may be re-connected after being disconnected.
     *
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */
    render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement['finalized'] = true;
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
// Install hydration if available
(_b = globalThis.litElementHydrateSupport) === null || _b === void 0 ? void 0 : _b.call(globalThis, { LitElement });
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? globalThis.litElementPolyfillSupportDevMode
    : globalThis.litElementPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ LitElement });
// DEV mode warnings
if (DEV_MODE) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // Note, for compatibility with closure compilation, this access
    // needs to be as a string property index.
    LitElement['finalize'] = function () {
        const finalized = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement.finalize.call(this);
        if (!finalized) {
            return false;
        }
        const warnRemovedOrRenamed = (obj, name, renamed = false) => {
            if (obj.hasOwnProperty(name)) {
                const ctorName = (typeof obj === 'function' ? obj : obj.constructor)
                    .name;
                issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${ctorName}. It ` +
                    `has been ${renamed ? 'renamed' : 'removed'} ` +
                    `in this version of LitElement.`);
            }
        };
        warnRemovedOrRenamed(this, 'render');
        warnRemovedOrRenamed(this, 'getStyles', true);
        warnRemovedOrRenamed(this.prototype, 'adoptStyles');
        return true;
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
const _$LE = {
    _$attributeToProperty: (el, name, value) => {
        // eslint-disable-next-line
        el._$attributeToProperty(name, value);
    },
    // eslint-disable-next-line
    _$changedProperties: (el) => el._$changedProperties,
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
((_c = globalThis.litElementVersions) !== null && _c !== void 0 ? _c : (globalThis.litElementVersions = [])).push('3.3.3');
if (DEV_MODE && globalThis.litElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directive-helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/lit-html/development/directive-helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateResultType: () => (/* binding */ TemplateResultType),
/* harmony export */   clearPart: () => (/* binding */ clearPart),
/* harmony export */   getCommittedValue: () => (/* binding */ getCommittedValue),
/* harmony export */   getDirectiveClass: () => (/* binding */ getDirectiveClass),
/* harmony export */   insertPart: () => (/* binding */ insertPart),
/* harmony export */   isCompiledTemplateResult: () => (/* binding */ isCompiledTemplateResult),
/* harmony export */   isDirectiveResult: () => (/* binding */ isDirectiveResult),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isSingleExpression: () => (/* binding */ isSingleExpression),
/* harmony export */   isTemplateResult: () => (/* binding */ isTemplateResult),
/* harmony export */   removePart: () => (/* binding */ removePart),
/* harmony export */   setChildPartValue: () => (/* binding */ setChildPartValue),
/* harmony export */   setCommittedValue: () => (/* binding */ setCommittedValue)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b;

const { _ChildPart: ChildPart } = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__._$LH;
const ENABLE_SHADYDOM_NOPATCH = true;
const wrap = ENABLE_SHADYDOM_NOPATCH &&
    ((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) &&
    ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true
    ? window.ShadyDOM.wrap
    : (node) => node;
/**
 * Tests if a value is a primitive value.
 *
 * See https://tc39.github.io/ecma262/#sec-typeof-operator
 */
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const TemplateResultType = {
    HTML: 1,
    SVG: 2,
};
/**
 * Tests if a value is a TemplateResult or a CompiledTemplateResult.
 */
const isTemplateResult = (value, type) => type === undefined
    ? // This property needs to remain unminified.
        (value === null || value === void 0 ? void 0 : value['_$litType$']) !== undefined
    : (value === null || value === void 0 ? void 0 : value['_$litType$']) === type;
/**
 * Tests if a value is a CompiledTemplateResult.
 */
const isCompiledTemplateResult = (value) => {
    var _a;
    return ((_a = value === null || value === void 0 ? void 0 : value['_$litType$']) === null || _a === void 0 ? void 0 : _a.h) != null;
};
/**
 * Tests if a value is a DirectiveResult.
 */
const isDirectiveResult = (value) => 
// This property needs to remain unminified.
(value === null || value === void 0 ? void 0 : value['_$litDirective$']) !== undefined;
/**
 * Retrieves the Directive class for a DirectiveResult
 */
const getDirectiveClass = (value) => 
// This property needs to remain unminified.
value === null || value === void 0 ? void 0 : value['_$litDirective$'];
/**
 * Tests whether a part has only a single-expression with no strings to
 * interpolate between.
 *
 * Only AttributePart and PropertyPart can have multiple expressions.
 * Multi-expression parts have a `strings` property and single-expression
 * parts do not.
 */
const isSingleExpression = (part) => part.strings === undefined;
const createMarker = () => document.createComment('');
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */
const insertPart = (containerPart, refPart, part) => {
    var _a;
    const container = wrap(containerPart._$startNode).parentNode;
    const refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;
    if (part === undefined) {
        const startNode = wrap(container).insertBefore(createMarker(), refNode);
        const endNode = wrap(container).insertBefore(createMarker(), refNode);
        part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
    }
    else {
        const endNode = wrap(part._$endNode).nextSibling;
        const oldParent = part._$parent;
        const parentChanged = oldParent !== containerPart;
        if (parentChanged) {
            (_a = part._$reparentDisconnectables) === null || _a === void 0 ? void 0 : _a.call(part, containerPart);
            // Note that although `_$reparentDisconnectables` updates the part's
            // `_$parent` reference after unlinking from its current parent, that
            // method only exists if Disconnectables are present, so we need to
            // unconditionally set it here
            part._$parent = containerPart;
            // Since the _$isConnected getter is somewhat costly, only
            // read it once we know the subtree has directives that need
            // to be notified
            let newConnectionState;
            if (part._$notifyConnectionChanged !== undefined &&
                (newConnectionState = containerPart._$isConnected) !==
                    oldParent._$isConnected) {
                part._$notifyConnectionChanged(newConnectionState);
            }
        }
        if (endNode !== refNode || parentChanged) {
            let start = part._$startNode;
            while (start !== endNode) {
                const n = wrap(start).nextSibling;
                wrap(container).insertBefore(start, refNode);
                start = n;
            }
        }
    }
    return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */
const setChildPartValue = (part, value, directiveParent = part) => {
    part._$setValue(value, directiveParent);
    return part;
};
// A sentinel value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.
const RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */
const setCommittedValue = (part, value = RESET_VALUE) => (part._$committedValue = value);
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being committed.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */
const getCommittedValue = (part) => part._$committedValue;
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */
const removePart = (part) => {
    var _a;
    (_a = part._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(part, false, true);
    let start = part._$startNode;
    const end = wrap(part._$endNode).nextSibling;
    while (start !== end) {
        const n = wrap(start).nextSibling;
        wrap(start).remove();
        start = n;
    }
};
const clearPart = (part) => {
    part._$clear();
};
//# sourceMappingURL=directive-helpers.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directive.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/directive.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Directive: () => (/* binding */ Directive),
/* harmony export */   PartType: () => (/* binding */ PartType),
/* harmony export */   directive: () => (/* binding */ directive)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
const directive = (c) => (...values) => ({
    // This property needs to remain unminified.
    ['_$litDirective$']: c,
    values,
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
class Directive {
    constructor(_partInfo) { }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /** @internal */
    _$initialize(part, parent, attributeIndex) {
        this.__part = part;
        this._$parent = parent;
        this.__attributeIndex = attributeIndex;
    }
    /** @internal */
    _$resolve(part, props) {
        return this.update(part, props);
    }
    update(_part, props) {
        return this.render(...props);
    }
}
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/if-defined.js":
/*!********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/if-defined.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ifDefined: () => (/* binding */ ifDefined)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = (value) => value !== null && value !== void 0 ? value : _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
//# sourceMappingURL=if-defined.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/live.js":
/*!**************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/live.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   live: () => (/* binding */ live)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */



class LiveDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        super(partInfo);
        if (!(partInfo.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.PROPERTY ||
            partInfo.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE ||
            partInfo.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.BOOLEAN_ATTRIBUTE)) {
            throw new Error('The `live` directive is not allowed on child or event bindings');
        }
        if (!(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.isSingleExpression)(partInfo)) {
            throw new Error('`live` bindings can only contain a single expression');
        }
    }
    render(value) {
        return value;
    }
    update(part, [value]) {
        if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange || value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing) {
            return value;
        }
        const element = part.element;
        const name = part.name;
        if (part.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.PROPERTY) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (value === element[name]) {
                return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
            }
        }
        else if (part.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.BOOLEAN_ATTRIBUTE) {
            if (!!value === element.hasAttribute(name)) {
                return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
            }
        }
        else if (part.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE) {
            if (element.getAttribute(name) === String(value)) {
                return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
            }
        }
        // Resets the part's value, causing its dirty-check to fail so that it
        // always sets the value.
        (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setCommittedValue)(part);
        return value;
    }
}
/**
 * Checks binding values against live DOM values, instead of previously bound
 * values, when determining whether to update the value.
 *
 * This is useful for cases where the DOM value may change from outside of
 * lit-html, such as with a binding to an `<input>` element's `value` property,
 * a content editable elements text, or to a custom element that changes it's
 * own properties or attributes.
 *
 * In these cases if the DOM value changes, but the value set through lit-html
 * bindings hasn't, lit-html won't know to update the DOM value and will leave
 * it alone. If this is not what you want--if you want to overwrite the DOM
 * value with the bound value no matter what--use the `live()` directive:
 *
 * ```js
 * html`<input .value=${live(x)}>`
 * ```
 *
 * `live()` performs a strict equality check against the live DOM value, and if
 * the new value is equal to the live value, does nothing. This means that
 * `live()` should not be used when the binding will cause a type conversion. If
 * you use `live()` with an attribute binding, make sure that only strings are
 * passed in, or the binding will update every render.
 */
const live = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(LiveDirective);
//# sourceMappingURL=live.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/is-server.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/is-server.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isServer: () => (/* binding */ isServer)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @fileoverview
 *
 * This file exports a boolean const whose value will depend on what environment
 * the module is being imported from.
 */
const NODE_MODE = false;
/**
 * A boolean that will be `true` in server environments like Node, and `false`
 * in browser environments. Note that your server environment or toolchain must
 * support the `"node"` export condition for this to be `true`.
 *
 * This can be used when authoring components to change behavior based on
 * whether or not the component is executing in an SSR context.
 */
const isServer = NODE_MODE;
//# sourceMappingURL=is-server.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _$LH: () => (/* binding */ _$LH),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   noChange: () => (/* binding */ noChange),
/* harmony export */   nothing: () => (/* binding */ nothing),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   svg: () => (/* binding */ svg)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
const NODE_MODE = false;
// Use window for browser builds because IE11 doesn't have globalThis.
const global = NODE_MODE ? globalThis : window;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
let issueWarning;
if (DEV_MODE) {
    (_a = global.litIssuedWarnings) !== null && _a !== void 0 ? _a : (global.litIssuedWarnings = new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += code
            ? ` See https://lit.dev/msg/${code} for more information.`
            : '';
        if (!global.litIssuedWarnings.has(warning)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
}
const wrap = ENABLE_SHADYDOM_NOPATCH &&
    ((_b = global.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) &&
    ((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true
    ? global.ShadyDOM.wrap
    : (node) => node;
const trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = trustedTypes
    ? trustedTypes.createPolicy('lit-html', {
        createHTML: (s) => s,
    })
    : undefined;
const identityFunction = (value) => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */
const setSanitizer = (newSanitizer) => {
    if (!ENABLE_EXTRA_SECURITY_HOOKS) {
        return;
    }
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error(`Attempted to overwrite existing lit-html security policy.` +
            ` setSanitizeDOMValueFactory should be called at most once.`);
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${String(Math.random()).slice(9)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = NODE_MODE && global.document === undefined
    ? {
        createTreeWalker() {
            return {};
        },
    }
    : document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = () => d.createComment('');
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const isArray = Array.isArray;
const isIterable = (value) => isArray(value) ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === 'function';
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
const HTML_RESULT = 1;
const SVG_RESULT = 2;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
const tag = (type) => (strings, ...values) => {
    // Warn against templates octal escape sequences
    // We do this here rather than in render so that the warning is closer to the
    // template definition.
    if (DEV_MODE && strings.some((s) => s === undefined)) {
        console.warn('Some template strings are undefined.\n' +
            'This is probably caused by illegal octal escape sequences.');
    }
    return {
        // This property needs to remain unminified.
        ['_$litType$']: type,
        strings,
        values,
    };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus cannot be used within an `<svg>` HTML element.
 */
const svg = tag(SVG_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - the must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
const templateCache = new WeakMap();
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */, null, false);
let sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
    // A security check to prevent spoofing of Lit template results.
    // In the future, we may be able to replace this with Array.isTemplateObject,
    // though we might need to make that check inside of the html and svg
    // functions, because precompiled templates don't come in as
    // TemplateStringArray objects.
    if (!Array.isArray(tsa) || !tsa.hasOwnProperty('raw')) {
        let message = 'invalid template strings array';
        if (DEV_MODE) {
            message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `
                .trim()
                .replace(/\n */g, '\n');
        }
        throw new Error(message);
    }
    return policy !== undefined
        ? policy.createHTML(stringFromTSA)
        : stringFromTSA;
}
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
const getTemplateHtml = (strings, type) => {
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT ? '<svg>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for (let i = 0; i < l; i++) {
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while (lastIndex < s.length) {
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                }
                else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                }
                else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                    }
                    regex = tagEndRegex;
                }
                else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    if (DEV_MODE) {
                        throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' +
                            'See https://lit.dev/docs/templates/expressions/#static-expressions');
                    }
                    regex = tagEndRegex;
                }
            }
            else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                }
                else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                }
                else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex =
                        match[QUOTE_CHAR] === undefined
                            ? tagEndRegex
                            : match[QUOTE_CHAR] === '"'
                                ? doubleQuoteAttrEndRegex
                                : singleQuoteAttrEndRegex;
                }
            }
            else if (regex === doubleQuoteAttrEndRegex ||
                regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            }
            else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            }
            else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        if (DEV_MODE) {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 ||
                regex === tagEndRegex ||
                regex === singleQuoteAttrEndRegex ||
                regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html +=
            regex === textEndRegex
                ? s + nodeMarker
                : attrNameEndIndex >= 0
                    ? (attrNames.push(attrName),
                        s.slice(0, attrNameEndIndex) +
                            boundAttributeSuffix +
                            s.slice(attrNameEndIndex)) +
                        marker +
                        end
                    : s +
                        marker +
                        (attrNameEndIndex === -2 ? (attrNames.push(undefined), i) : end);
    }
    const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : '');
    // Returned as an array for terseness
    return [trustFromTemplateString(strings, htmlResult), attrNames];
};
class Template {
    constructor(
    // This property needs to remain unminified.
    { strings, ['_$litType$']: type }, options) {
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Reparent SVG nodes into template root
        if (type === SVG_RESULT) {
            const content = this.el.content;
            const svgElement = content.firstChild;
            svgElement.remove();
            content.append(...svgElement.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while ((node = walker.nextNode()) !== null && parts.length < partCount) {
            if (node.nodeType === 1) {
                if (DEV_MODE) {
                    const tag = node.localName;
                    // Warn if `textarea` includes an expression and throw if `template`
                    // does since these are not supported. We do this by checking
                    // innerHTML for anything that looks like a marker. This catches
                    // cases like bindings in textarea there markers turn into text nodes.
                    if (/^(?:textarea|template)$/i.test(tag) &&
                        node.innerHTML.includes(marker)) {
                        const m = `Expressions are not supported inside \`${tag}\` ` +
                            `elements. See https://lit.dev/msg/expression-in-${tag} for more ` +
                            `information.`;
                        if (tag === 'template') {
                            throw new Error(m);
                        }
                        else
                            issueWarning('', m);
                    }
                }
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    // We defer removing bound attributes because on IE we might not be
                    // iterating attributes in their template order, and would sometimes
                    // remove an attribute that we still need to create a part for.
                    const attrsToRemove = [];
                    for (const name of node.getAttributeNames()) {
                        // `name` is the name of the attribute we're iterating over, but not
                        // _necessarily_ the name of the attribute we will create a part
                        // for. They can be different in browsers that don't iterate on
                        // attributes in source order. In that case the attrNames array
                        // contains the attribute name we'll process next. We only need the
                        // attribute name here to know if we should process a bound attribute
                        // on this element.
                        if (name.endsWith(boundAttributeSuffix) ||
                            name.startsWith(marker)) {
                            const realName = attrNames[attrNameIndex++];
                            attrsToRemove.push(name);
                            if (realName !== undefined) {
                                // Lowercase for case-sensitive SVG attributes like viewBox
                                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                                const statics = value.split(marker);
                                const m = /([.?@])?(.*)/.exec(realName);
                                parts.push({
                                    type: ATTRIBUTE_PART,
                                    index: nodeIndex,
                                    name: m[2],
                                    strings: statics,
                                    ctor: m[1] === '.'
                                        ? PropertyPart
                                        : m[1] === '?'
                                            ? BooleanAttributePart
                                            : m[1] === '@'
                                                ? EventPart
                                                : AttributePart,
                                });
                            }
                            else {
                                parts.push({
                                    type: ELEMENT_PART,
                                    index: nodeIndex,
                                });
                            }
                        }
                    }
                    for (const name of attrsToRemove) {
                        node.removeAttribute(name);
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes
                            ? trustedTypes.emptyScript
                            : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        // We can't use empty text nodes as markers because they're
                        // normalized when cloning in IE (could simplify when
                        // IE is no longer supported)
                        for (let i = 0; i < lastIndex; i++) {
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({ type: CHILD_PART, index: ++nodeIndex });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            }
            else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({ type: CHILD_PART, index: nodeIndex });
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        parts.push({ type: COMMENT_PART, index: nodeIndex });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
        // We could set walker.currentNode to another node here to prevent a memory
        // leak, but every time we prepare a template, we immediately render it
        // and re-use the walker in new TemplateInstance._clone().
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'template prep',
            template: this,
            clonableTemplate: this.el,
            parts: this.parts,
            strings,
        });
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @nocollapse */
    static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
    var _a, _b, _c;
    var _d;
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined
        ? (_a = parent.__directives) === null || _a === void 0 ? void 0 : _a[attributeIndex]
        : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value)
        ? undefined
        : // This property needs to remain unminified.
            value['_$litDirective$'];
    if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
        // This property needs to remain unminified.
        (_b = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(currentDirective, false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        }
        else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            ((_c = (_d = parent).__directives) !== null && _c !== void 0 ? _c : (_d.__directives = []))[attributeIndex] =
                currentDirective;
        }
        else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
class TemplateInstance {
    constructor(template, parent) {
        this._$parts = [];
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
    // Called by ChildPart parentNode getter
    get parentNode() {
        return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        var _a;
        const { el: { content }, parts: parts, } = this._$template;
        const fragment = ((_a = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a !== void 0 ? _a : d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while (templatePart !== undefined) {
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                }
                else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                }
                else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._$parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        // We need to set the currentNode away from the cloned tree so that we
        // don't hold onto the tree even if the tree is detached and should be
        // freed.
        walker.currentNode = d;
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._$parts) {
            if (part !== undefined) {
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'set part',
                    part,
                    value: values[i],
                    valueIndex: i,
                    values,
                    templateInstance: this,
                });
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                }
                else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
}
class ChildPart {
    constructor(startNode, endNode, parent, options) {
        var _a;
        this.type = CHILD_PART;
        this._$committedValue = nothing;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        // Note __isConnected is only ever accessed on RootParts (i.e. when there is
        // no _$parent); the value on a non-root-part is "don't care", but checking
        // for parent would be more code
        this.__isConnected = (_a = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a !== void 0 ? _a : true;
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        var _a, _b;
        // ChildParts that are not at the root should always be created with a
        // parent; only RootChildNode's won't, so they return the local isConnected
        // state
        return (_b = (_a = this._$parent) === null || _a === void 0 ? void 0 : _a._$isConnected) !== null && _b !== void 0 ? _b : this.__isConnected;
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */
    get parentNode() {
        let parentNode = wrap(this._$startNode).parentNode;
        const parent = this._$parent;
        if (parent !== undefined &&
            (parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 11 /* Node.DOCUMENT_FRAGMENT */) {
            // If the parentNode is a DocumentFragment, it may be because the DOM is
            // still in the cloned fragment during initial render; if so, get the real
            // parentNode the part will be committed into by asking the parent.
            parentNode = parent.parentNode;
        }
        return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
    get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
    get endNode() {
        return this._$endNode;
    }
    _$setValue(value, directiveParent = this) {
        var _a;
        if (DEV_MODE && this.parentNode === null) {
            throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
        }
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                        kind: 'commit nothing to child',
                        start: this._$startNode,
                        end: this._$endNode,
                        parent: this._$parent,
                        options: this.options,
                    });
                    this._$clear();
                }
                this._$committedValue = nothing;
            }
            else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
            // This property needs to remain unminified.
        }
        else if (value['_$litType$'] !== undefined) {
            this._commitTemplateResult(value);
        }
        else if (value.nodeType !== undefined) {
            if (DEV_MODE && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.host) === value) {
                this._commitText(`[probable mistake: rendered a template's host in itself ` +
                    `(commonly caused by writing \${this} in a template]`);
                console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
                return;
            }
            this._commitNode(value);
        }
        else if (isIterable(value)) {
            this._commitIterable(value);
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
    }
    _commitNode(value) {
        var _a;
        if (this._$committedValue !== value) {
            this._$clear();
            if (ENABLE_EXTRA_SECURITY_HOOKS &&
                sanitizerFactoryInternal !== noopSanitizer) {
                const parentNodeName = (_a = this._$startNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    let message = 'Forbidden';
                    if (DEV_MODE) {
                        if (parentNodeName === 'STYLE') {
                            message =
                                `Lit does not support binding inside style nodes. ` +
                                    `This is a security risk, as style injection attacks can ` +
                                    `exfiltrate data and spoof UIs. ` +
                                    `Consider instead using css\`...\` literals ` +
                                    `to compose styles, and make do dynamic styling with ` +
                                    `css custom properties, ::parts, <slot>s, ` +
                                    `and by mutating the DOM rather than stylesheets.`;
                        }
                        else {
                            message =
                                `Lit does not support binding inside script nodes. ` +
                                    `This is a security risk, as it could allow arbitrary ` +
                                    `code execution.`;
                        }
                    }
                    throw new Error(message);
                }
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit node',
                start: this._$startNode,
                parent: this._$parent,
                value: value,
                options: this.options,
            });
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        // If the committed value is a primitive it means we called _commitText on
        // the previous render, and we know that this._$startNode.nextSibling is a
        // Text node. We can now just replace the text content (.data) of the node.
        if (this._$committedValue !== nothing &&
            isPrimitive(this._$committedValue)) {
            const node = wrap(this._$startNode).nextSibling;
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit text',
                node,
                value,
                options: this.options,
            });
            node.data = value;
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                const textNode = d.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its content.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: textNode,
                    value,
                    options: this.options,
                });
                textNode.data = value;
            }
            else {
                this._commitNode(d.createTextNode(value));
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: wrap(this._$startNode).nextSibling,
                    value,
                    options: this.options,
                });
            }
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        var _a;
        // This property needs to remain unminified.
        const { values, ['_$litType$']: type } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof type === 'number'
            ? this._$getTemplate(result)
            : (type.el === undefined &&
                (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)),
                type);
        if (((_a = this._$committedValue) === null || _a === void 0 ? void 0 : _a._$template) === template) {
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template updating',
                template,
                instance: this._$committedValue,
                parts: this._$committedValue._$parts,
                options: this.options,
                values,
            });
            this._$committedValue._update(values);
        }
        else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated',
                template,
                instance,
                parts: instance._$parts,
                options: this.options,
                fragment,
                values,
            });
            instance._update(values);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated and updated',
                template,
                instance,
                parts: instance._$parts,
                options: this.options,
                fragment,
                values,
            });
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */
    _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, (template = new Template(result)));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push((itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)));
            }
            else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives in
     *     those Parts.
     *
     * @internal
     */
    _$clear(start = wrap(this._$startNode).nextSibling, from) {
        var _a;
        (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, false, true, from);
        while (start && start !== this._$endNode) {
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this metod
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */
    setConnected(isConnected) {
        var _a;
        if (this._$parent === undefined) {
            this.__isConnected = isConnected;
            (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, isConnected);
        }
        else if (DEV_MODE) {
            throw new Error('part.setConnected() may only be called on a ' +
                'RootPart returned from render().');
        }
    }
}
class AttributePart {
    constructor(element, name, strings, parent, options) {
        this.type = ATTRIBUTE_PART;
        /** @internal */
        this._$committedValue = nothing;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(new String());
            this.strings = strings;
        }
        else {
            this._$committedValue = nothing;
        }
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            this._sanitizer = undefined;
        }
    }
    get tagName() {
        return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */
    _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change =
                !isPrimitive(value) ||
                    (value !== this._$committedValue && value !== noChange);
            if (change) {
                this._$committedValue = value;
            }
        }
        else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for (i = 0; i < strings.length - 1; i++) {
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
                if (v === nothing) {
                    value = nothing;
                }
                else if (value !== nothing) {
                    value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */
    _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value !== null && value !== void 0 ? value : '');
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit attribute',
                element: this.element,
                name: this.name,
                value,
                options: this.options,
            });
            wrap(this.element).setAttribute(this.name, (value !== null && value !== void 0 ? value : ''));
        }
    }
}
class PropertyPart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = PROPERTY_PART;
    }
    /** @internal */
    _commitValue(value) {
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit property',
            element: this.element,
            name: this.name,
            value,
            options: this.options,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
}
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
class BooleanAttributePart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
    /** @internal */
    _commitValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit boolean attribute',
            element: this.element,
            name: this.name,
            value: !!(value && value !== nothing),
            options: this.options,
        });
        if (value && value !== nothing) {
            wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
        }
        else {
            wrap(this.element).removeAttribute(this.name);
        }
    }
}
class EventPart extends AttributePart {
    constructor(element, name, strings, parent, options) {
        super(element, name, strings, parent, options);
        this.type = EVENT_PART;
        if (DEV_MODE && this.strings !== undefined) {
            throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` +
                'invalid content. Event listeners in templates must have exactly ' +
                'one expression and no surrounding text.');
        }
    }
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */
    _$setValue(newListener, directiveParent = this) {
        var _a;
        newListener =
            (_a = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a !== void 0 ? _a : nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = (newListener === nothing && oldListener !== nothing) ||
            newListener.capture !==
                oldListener.capture ||
            newListener.once !==
                oldListener.once ||
            newListener.passive !==
                oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing &&
            (oldListener === nothing || shouldRemoveListener);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit event listener',
            element: this.element,
            name: this.name,
            value: newListener,
            options: this.options,
            removeListener: shouldRemoveListener,
            addListener: shouldAddListener,
            oldListener,
        });
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            // Beware: IE11 and Chrome 41 don't like using the listener as the
            // options object. Figure out how to deal w/ this in IE11 - maybe
            // patch addEventListener?
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        var _a, _b;
        if (typeof this._$committedValue === 'function') {
            this._$committedValue.call((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : this.element, event);
        }
        else {
            this._$committedValue.handleEvent(event);
        }
    }
}
class ElementPart {
    constructor(element, parent, options) {
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$parent = parent;
        this.options = options;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit to element binding',
            element: this.element,
            value,
            options: this.options,
        });
        resolveDirective(this, value);
    }
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
const _$LH = {
    // Used in lit-ssr
    _boundAttributeSuffix: boundAttributeSuffix,
    _marker: marker,
    _markerMatch: markerMatch,
    _HTML_RESULT: HTML_RESULT,
    _getTemplateHtml: getTemplateHtml,
    // Used in tests and private-ssr-support
    _TemplateInstance: TemplateInstance,
    _isIterable: isIterable,
    _resolveDirective: resolveDirective,
    _ChildPart: ChildPart,
    _AttributePart: AttributePart,
    _BooleanAttributePart: BooleanAttributePart,
    _EventPart: EventPart,
    _PropertyPart: PropertyPart,
    _ElementPart: ElementPart,
};
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? global.litHtmlPolyfillSupportDevMode
    : global.litHtmlPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
((_d = global.litHtmlVersions) !== null && _d !== void 0 ? _d : (global.litHtmlVersions = [])).push('2.8.0');
if (DEV_MODE && global.litHtmlVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` +
        `Loading multiple versions is not recommended.`);
}
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */
const render = (value, container, options) => {
    var _a, _b;
    if (DEV_MODE && container == null) {
        // Give a clearer error message than
        //     Uncaught TypeError: Cannot read properties of null (reading
        //     '_$litPart$')
        // which reads like an internal Lit error.
        throw new TypeError(`The container to render into may not be ${container}`);
    }
    const renderId = DEV_MODE ? debugLogRenderId++ : 0;
    const partOwnerNode = (_a = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a !== void 0 ? _a : container;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode['_$litPart$'];
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'begin render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    if (part === undefined) {
        const endNode = (_b = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b !== void 0 ? _b : null;
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
    }
    part._$setValue(value);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'end render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    if (DEV_MODE) {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse =
            _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
}
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/lit/decorators.js":
/*!****************************************!*\
  !*** ./node_modules/lit/decorators.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   eventOptions: () => (/* reexport safe */ _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__.eventOptions),
/* harmony export */   property: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property),
/* harmony export */   query: () => (/* reexport safe */ _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__.query),
/* harmony export */   queryAll: () => (/* reexport safe */ _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__.queryAll),
/* harmony export */   queryAssignedElements: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__.queryAssignedElements),
/* harmony export */   queryAssignedNodes: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedNodes),
/* harmony export */   queryAsync: () => (/* reexport safe */ _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__.queryAsync),
/* harmony export */   state: () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__.state)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js");
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/development/decorators/state.js");
/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/development/decorators/event-options.js");
/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/development/decorators/query.js");
/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/development/decorators/query-all.js");
/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/development/decorators/query-async.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");

//# sourceMappingURL=decorators.js.map


/***/ }),

/***/ "./node_modules/lit/directives/if-defined.js":
/*!***************************************************!*\
  !*** ./node_modules/lit/directives/if-defined.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ifDefined: () => (/* reexport safe */ lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__.ifDefined)
/* harmony export */ });
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/development/directives/if-defined.js");

//# sourceMappingURL=if-defined.js.map


/***/ }),

/***/ "./node_modules/lit/directives/live.js":
/*!*********************************************!*\
  !*** ./node_modules/lit/directives/live.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   live: () => (/* reexport safe */ lit_html_directives_live_js__WEBPACK_IMPORTED_MODULE_0__.live)
/* harmony export */ });
/* harmony import */ var lit_html_directives_live_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/live.js */ "./node_modules/lit-html/development/directives/live.js");

//# sourceMappingURL=live.js.map


/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   LitElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   UpdatingElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement),
/* harmony export */   _$LE: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html),
/* harmony export */   isServer: () => (/* reexport safe */ lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__.isServer),
/* harmony export */   noChange: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");
/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "./node_modules/lit-html/development/is-server.js");

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./plugins/interactive-posts-ippm/blocks/assets-manager/block.json":
/*!*************************************************************************!*\
  !*** ./plugins/interactive-posts-ippm/blocks/assets-manager/block.json ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ippm/assets-manager","version":"1.0.0","title":"IPPM: Assets","category":"design","icon":"format-image","description":"Add CSS and or JavaScript to a post.","supports":{"html":false},"textdomain":"ippm","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************************************************!*\
  !*** ./plugins/interactive-posts-ippm/blocks/assets-manager/index.js ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./plugins/interactive-posts-ippm/blocks/assets-manager/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./plugins/interactive-posts-ippm/blocks/assets-manager/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./plugins/interactive-posts-ippm/blocks/assets-manager/save.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supports */ "./plugins/interactive-posts-ippm/blocks/assets-manager/supports.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./plugins/interactive-posts-ippm/blocks/assets-manager/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';

/**
 * Internal dependencies
 */






/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  supports: _supports__WEBPACK_IMPORTED_MODULE_4__["default"],
  title: _block_json__WEBPACK_IMPORTED_MODULE_5__.title
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map