webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ui_library/skill_preview/SkillPreview.jsx":
/*!******************************************************************!*\
  !*** ./src/components/ui_library/skill_preview/SkillPreview.jsx ***!
  \******************************************************************/
/*! exports provided: SkillPreview, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillPreview", function() { return SkillPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/skill_preview/SkillPreview.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "SkillPreview__Container",
  componentId: "sc-1ed890c-0"
})(["width:100%;height:100%;max-width:10rem;max-height:10rem;min-width:7rem;min-height:7rem;border-style:solid;border-color:#90B7CC;border-width:1px;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const SkillIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "SkillPreview__SkillIcon",
  componentId: "sc-1ed890c-1"
})(["height:50%;"]);
const SkillLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "SkillPreview__SkillLabel",
  componentId: "sc-1ed890c-2"
})(["font-size:1rem;margin-top:.75rem;color:#CCD5DB;"]);
class SkillPreview extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      logoSrc,
      onClick,
      href
    } = this.props;
    return __jsx(Container, {
      onClick: onClick,
      href: href,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, __jsx(SkillIcon, {
      src: logoSrc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }), __jsx(SkillLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, name));
  }

}
SkillPreview.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SkillPreview);

/***/ })

})
//# sourceMappingURL=index.js.91d83c375870c8b71ba7.hot-update.js.map