webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ui_library/link_button/LinkButton.jsx":
/*!**************************************************************!*\
  !*** ./src/components/ui_library/link_button/LinkButton.jsx ***!
  \**************************************************************/
/*! exports provided: LinkButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/link_button/LinkButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "LinkButton__StyledLink",
  componentId: "sc-1oqrjb6-0"
})(["border-radius:3px;border:1.5px solid #23A155;padding:0.5rem 1rem;font-size:1.2rem;background-color:#23A155;color:#FFFFFF;cursor:pointer;"]);
class LinkButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const children = this.props.children;
    return __jsx(StyledLink, {
      onClick: this.props.onClick,
      href: this.props.href,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, children);
  }

}
LinkButton.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LinkButton);

/***/ })

})
//# sourceMappingURL=index.js.1ab7d907a84e9aeff272.hot-update.js.map