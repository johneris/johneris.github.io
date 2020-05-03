webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/sections/footer/FooterSection.jsx":
/*!**********************************************************!*\
  !*** ./src/components/sections/footer/FooterSection.jsx ***!
  \**********************************************************/
/*! exports provided: Footer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/footer/FooterSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].footer.withConfig({
  displayName: "FooterSection__Container",
  componentId: "a3l03e-0"
})(["width:100%;background-color:#1B262C;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FooterSection__Wrapper",
  componentId: "a3l03e-1"
})(["width:80%;margin-left:auto;margin-right:auto;padding-top:5.3em;padding-bottom:5.3em;display:flex;flex-direction:row;justify-content:space-between;@media ", "{grid-template-columns:100%;grid-template-rows:repeat(4,1fr);grid-row-gap:2rem;grid-column-gap:0;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FooterSection__InfoContainer",
  componentId: "a3l03e-2"
})(["display:flex;flex-direction:column;margin-right:4rem;"]);
const SectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FooterSection__SectionsContainer",
  componentId: "a3l03e-3"
})(["display:flex;flex-direction:column;align-items:flex-end;"]);
const LogoWebsiteContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FooterSection__LogoWebsiteContainer",
  componentId: "a3l03e-4"
})(["display:flex;flex-flow:row;"]);
const InfoSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FooterSection__InfoSectionContainer",
  componentId: "a3l03e-5"
})(["margin-top:2em;"]);
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "FooterSection__LogoImage",
  componentId: "a3l03e-6"
})(["height:1.5em;margin-right:1em;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "FooterSection__Info",
  componentId: "a3l03e-7"
})(["font-size:1em;color:#E1E2E7;"]);
const SectionLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "FooterSection__SectionLabel",
  componentId: "a3l03e-8"
})(["font-size:1em;color:#E1E2E7;"]);
const SectionButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "FooterSection__SectionButton",
  componentId: "a3l03e-9"
})(["margin-top:1em;font-size:1em;color:#E1E2E7;background-color:transparent;text-decoration:underline;text-transform:lowercase;:focus{outline:none;}"]);
class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, __jsx(InfoContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, __jsx(LogoWebsiteContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, __jsx(LogoImage, {
      src: "/images/ic_logo.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }), __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }, "johnerisvillanueva.com")), __jsx(InfoSectionContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, "This is my personal website that shows my portfolio."), __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }, "It is created using React.js. The code for this website is available at github.com.")), __jsx(InfoSectionContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }, "For my blog about software development, visit https://pinoydev.com."), __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 15
      }
    }, "For my blog about adventure and recreation, visit https://weekendersph.com.")), __jsx(InfoSectionContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }, "\xA9 John Eris Villanueva 2020"))), __jsx(SectionsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }, __jsx(SectionLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, "Section"), __jsx(SectionButton, {
      onClick: this.props.onHomeClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, "Home"), __jsx(SectionButton, {
      onClick: this.props.onProjectsClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, "Projects"), __jsx(SectionButton, {
      onClick: this.props.onSkillsClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }, "Skills"), __jsx(SectionButton, {
      onClick: this.props.onAboutClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, "About"), __jsx(SectionButton, {
      onClick: this.props.onContactClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, "Contact"))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.38936431cbe2fadca4e3.hot-update.js.map