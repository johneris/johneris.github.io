webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/sections/contact/ContactSection.jsx":
/*!************************************************************!*\
  !*** ./src/components/sections/contact/ContactSection.jsx ***!
  \************************************************************/
/*! exports provided: ContactSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSection", function() { return ContactSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/contact/ContactSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ContactSection__Container",
  componentId: "sc-1a7bzbo-0"
})(["width:80%;margin:auto;padding-top:5em;padding-bottom:5em;display:flex;flex-direction:column;align-items:center;"]);
const TitleLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "ContactSection__TitleLabel",
  componentId: "sc-1a7bzbo-1"
})(["color:#1B262C;font-size:2em;text-align:center;"]);
const HubspotFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ContactSection__HubspotFormContainer",
  componentId: "sc-1a7bzbo-2"
})(["width:25em;margin-top:3em;"]);
class ContactSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '7066917',
          formId: '43535f8f-187c-40c7-bdd2-0b41d59c0142',
          target: '#hubspotForm'
        });
      }
    });
  }

  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }
    }, __jsx(TitleLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, "Have something to say or just want to say Hi?"), __jsx(HubspotFormContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "hubspotForm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (ContactSection);

/***/ })

})
//# sourceMappingURL=index.js.7d9a46c0279dd455e2e5.hot-update.js.map