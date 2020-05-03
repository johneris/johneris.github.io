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
})(["width:80%;margin-left:auto;margin-right:auto;padding-top:5.3em;padding-bottom:5.3em;display:flex;flex-direction:row;justify-content:space-between;@media ", "{flex-direction:column;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FooterSection__InfoContainer",
  componentId: "a3l03e-2"
})(["margin-right:4rem;display:flex;flex-direction:column;@media ", "{margin-right:0;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const SectionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FooterSection__SectionsContainer",
  componentId: "a3l03e-3"
})(["display:flex;flex-direction:column;align-items:flex-end;flex-wrap:nowrap;@media ", "{margin-top:4rem;flex-direction:row;justify-content:center;flex-wrap:wrap;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const LogoWebsiteContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FooterSection__LogoWebsiteContainer",
  componentId: "a3l03e-4"
})(["display:flex;flex-flow:row;align-items:flex-start;@media ", "{flex-flow:column;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const InfoSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FooterSection__InfoSectionContainer",
  componentId: "a3l03e-5"
})(["margin-top:2em;"]);
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "FooterSection__LogoImage",
  componentId: "a3l03e-6"
})(["height:1.5em;margin-right:1em;@media ", "{margin-bottom:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "FooterSection__Info",
  componentId: "a3l03e-7"
})(["font-size:1em;color:#E1E2E7;"]);
const SectionButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "FooterSection__SectionButton",
  componentId: "a3l03e-8"
})(["margin-top:1em;font-size:1em;color:#E1E2E7;background-color:transparent;text-decoration:underline;text-transform:lowercase;:focus{outline:none;}"]);
const WebsiteLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "FooterSection__WebsiteLink",
  componentId: "a3l03e-9"
})(["font-size:1em;color:#E1E2E7;text-decoration:underline;"]);
class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }, __jsx(InfoContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, __jsx(LogoWebsiteContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, __jsx(LogoImage, {
      src: "/images/ic_logo.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }), __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }
    }, __jsx(WebsiteLink, {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://johnerisvillanueva.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, "johnerisvillanueva.com"))), __jsx(InfoSectionContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, "This is my personal website that is created to showcase my portfolio."), __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    }, "It is created using\xA0", __jsx(WebsiteLink, {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://reactjs.org/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, "React"), "\xA0and statically exported using\xA0", __jsx(WebsiteLink, {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://nextjs.org/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, "Next.js"), "."), __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }, "The code for this website is available at\xA0", __jsx(WebsiteLink, {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://github.com/johneris/johnerisvillanueva.com-reactjs/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, "github.com"), ".")), __jsx(InfoSectionContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }, __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }
    }, "For my blog about software development, visit https://pinoydev.com."), __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 15
      }
    }, "For my blog about adventure and recreation, visit https://weekendersph.com.")), __jsx(InfoSectionContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }, __jsx(Info, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    }, "\xA9 John Eris Villanueva 2020"))), __jsx(SectionsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }
    }, __jsx(SectionButton, {
      onClick: this.props.onHomeClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    }, "Home"), __jsx(SectionButton, {
      onClick: this.props.onProjectsClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, "Projects"), __jsx(SectionButton, {
      onClick: this.props.onSkillsClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    }, "Skills"), __jsx(SectionButton, {
      onClick: this.props.onAboutClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, "About"), __jsx(SectionButton, {
      onClick: this.props.onContactClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }
    }, "Contact"))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.f9dbc0c79788bc1f2652.hot-update.js.map