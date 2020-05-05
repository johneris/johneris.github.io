webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ui_library/nav_icon_button/NavIconButton.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/ui_library/nav_icon_button/NavIconButton.jsx ***!
  \*********************************************************************/
/*! exports provided: NavIconButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavIconButton", function() { return NavIconButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/nav_icon_button/NavIconButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NavIconButton__Container",
  componentId: "sc-7ichfy-0"
})(["width:3em;height:3em;border-radius:1.5em;background-color:#A7ADB1;display:flex;justify-content:center;align-items:center;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "NavIconButton__Button",
  componentId: "sc-7ichfy-1"
})(["background-color:#A7ADB1;padding:0;display:flex;justify-content:center;align-items:center;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "NavIconButton__Icon",
  componentId: "sc-7ichfy-2"
})(["height:1.5em;max-width:1.5em;"]);
class NavIconButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      iconSrc,
      onClick
    } = this.props;
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, __jsx(Button, {
      onClick: onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx(Icon, {
      src: iconSrc,
      alt: name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    })));
  }

}
NavIconButton.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  iconSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NavIconButton);

/***/ })

})
//# sourceMappingURL=index.js.900f62ab52c34da5c7d0.hot-update.js.map