webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ui_library/skill/Skill.jsx":
/*!***************************************************!*\
  !*** ./src/components/ui_library/skill/Skill.jsx ***!
  \***************************************************/
/*! exports provided: Skill, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/skill/Skill.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Skill__Container",
  componentId: "sc-1ufjzml-0"
})(["width:100%;min-height:10em;padding-top:2em;padding-bottom:2em;border-style:solid;border-color:#90B7CC;border-width:1px;display:flex;flex-direction:row;position:relative;"]);
const SkillContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Skill__SkillContainer",
  componentId: "sc-1ufjzml-1"
})(["width:10em;min-width:10em;display:flex;flex-direction:column;align-items:center;@media ", "{width:8em;min-width:8em;}@media ", "{width:7.5em;min-width:7.5em;}@media ", "{width:7em;min-width:7em;}@media ", "{width:6.5em;min-width:6.5em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileL, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileS);
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Skill__InfoContainer",
  componentId: "sc-1ufjzml-2"
})(["margin-right:1em;display:flex;flex-direction:column;"]);
const LevelContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Skill__LevelContainer",
  componentId: "sc-1ufjzml-3"
})(["width:8em;height:1.5em;background-color:#90B7CC;position:absolute;right:0;top:0;display:flex;justify-content:center;align-items:center;"]);
const SkillIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "Skill__SkillIcon",
  componentId: "sc-1ufjzml-4"
})(["height:5em;@media ", "{height:4.5em;}@media ", "{height:4em;}@media ", "{height:3.5em;}@media ", "{height:3em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileL, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileS);
const SkillLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "Skill__SkillLabel",
  componentId: "sc-1ufjzml-5"
})(["font-size:1em;margin-top:1em;color:#CCD5DB;"]);
const InfoTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "Skill__InfoTitle",
  componentId: "sc-1ufjzml-6"
})(["font-size:1em;margin-top:0.5em;color:#CCD5DB;font-weight:bold;"]);
const InfoDetailContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Skill__InfoDetailContainer",
  componentId: "sc-1ufjzml-7"
})(["margin-top:1em;"]);
const InfoDetail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Skill__InfoDetail",
  componentId: "sc-1ufjzml-8"
})(["margin-bottom:0.4rem;font-size:1em;color:#CCD5DB;"]);
const LevelLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Skill__LevelLabel",
  componentId: "sc-1ufjzml-9"
})(["font-size:0.8em;color:#4E5F69;"]);
class Skill extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      logoSrc,
      level,
      title,
      details
    } = this.props;
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 7
      }
    }, __jsx(LevelContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }, __jsx(LevelLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    }, level)), __jsx(SkillContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }
    }, __jsx(SkillIcon, {
      src: logoSrc,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }
    }), __jsx(SkillLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    }, name)), __jsx(InfoContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }
    }, __jsx(InfoTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }, title), __jsx(InfoDetailContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    }, details.map(info => {
      return __jsx(InfoDetail, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 22
        }
      }, info);
    }))));
  }

}
Skill.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  level: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Skill);

/***/ })

})
//# sourceMappingURL=index.js.d59f4d9f2ad04018bcff.hot-update.js.map