webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ui_library/project/Project.jsx":
/*!*******************************************************!*\
  !*** ./src/components/ui_library/project/Project.jsx ***!
  \*******************************************************/
/*! exports provided: Project, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project_feature/ProjectFeature */ "./src/components/ui_library/project_feature/ProjectFeature.jsx");
/* harmony import */ var _project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project_platform/ProjectPlatform */ "./src/components/ui_library/project_platform/ProjectPlatform.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/project/Project.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Project__Container",
  componentId: "sc-1sw0h1o-0"
})(["display:flex;flex-direction:column;"]);
const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Project__DetailsContainer",
  componentId: "sc-1sw0h1o-1"
})(["margin-top:2rem;display:grid;grid-template-columns:1fr auto;grid-template-rows:auto;grid-column-gap:15%;@media ", "{display:flex;flex-direction:column-reverse;}@media ", "{}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptopL, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileL);
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Project__InfoContainer",
  componentId: "sc-1sw0h1o-2"
})([""]);
const FeatureList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Project__FeatureList",
  componentId: "sc-1sw0h1o-3"
})(["display:flex;flex-direction:column;@media ", "{flex-direction:row;margin-bottom:1rem;}@media ", "{flex-wrap:wrap;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptopL, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop);
const FeatureItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Project__FeatureItem",
  componentId: "sc-1sw0h1o-4"
})(["margin-bottom:1.5rem;@media ", "{margin-right:1rem;margin-bottom:1rem;}@media ", "{margin-right:0.5rem;margin-bottom:0.5rem;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptopL, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanTablet);
const PlatformList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Project__PlatformList",
  componentId: "sc-1sw0h1o-5"
})(["margin-top:2rem;display:flex;flex-direction:row;flex-wrap:wrap;"]);
const PlatformItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Project__PlatformItem",
  componentId: "sc-1sw0h1o-6"
})(["margin-right:1.5rem;margin-top:1rem;"]);
const RoleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Project__RoleContainer",
  componentId: "sc-1sw0h1o-7"
})(["padding-left:0.8rem;border-left-style:solid;border-width:0.25rem;border-color:#24A255;display:flex;flex-direction:column;justify-content:center;"]);
const ProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "Project__ProjectTitle",
  componentId: "sc-1sw0h1o-8"
})(["color:#1B262C;font-size:3em;@media ", "{font-size:2.5em;}@media ", "{font-size:2em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
const RoleLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Project__RoleLabel",
  componentId: "sc-1sw0h1o-9"
})(["color:#4E5F69;font-size:1.5em;@media ", "{font-size:1.2em;}@media ", "{font-size:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
const DevelopedLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Project__DevelopedLabel",
  componentId: "sc-1sw0h1o-10"
})(["margin-top:0.6em;color:#A7ADB1;font-size:1.5em;@media ", "{font-size:1.2em;}@media ", "{font-size:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
const ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Project__ProjectDescription",
  componentId: "sc-1sw0h1o-11"
})(["margin-top:1.3rem;color:#4E5F69;font-size:1.2em;@media ", "{font-size:1em;}@media ", "{font-size:0.8em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
const InvolvementDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Project__InvolvementDescription",
  componentId: "sc-1sw0h1o-12"
})(["margin-top:2rem;color:#A7ADB1;font-size:1.2em;@media ", "{font-size:1em;}@media ", "{font-size:0.8em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
class Project extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 7
      }
    }, __jsx(ProjectTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }, "Mall\u2019s App and Website"), __jsx(DetailsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }
    }, __jsx(InfoContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }
    }, __jsx(RoleContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }
    }, __jsx(RoleLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 15
      }
    }, "Role: Team Captain, iOS Developer, Backend Developer"), __jsx(DevelopedLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 15
      }
    }, "Developed at White Cloak Technologies, Inc.")), __jsx(PlatformList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }, __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 15
      }
    }, __jsx(_project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "iOS",
      logoSrc: "/images/ic_ios.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 29
      }
    })), __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 15
      }
    }, __jsx(_project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "Android",
      logoSrc: "/images/ic_android.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 29
      }
    })), __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 15
      }
    }, __jsx(_project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "Web",
      logoSrc: "/images/ic_web.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 29
      }
    })), __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 15
      }
    }, __jsx(_project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "Backend",
      logoSrc: "/images/ic_backend.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 29
      }
    }))), __jsx(ProjectDescription, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }, "Z!ng is Ayala Malls\u2019 mobile app that includes indoor navigation, cinema booking, offers, promos, and rewards. Z!ng is Ayala Malls\u2019 mobile app that includes indoor navigation, cinema booking, offers, promos, and rewards."), __jsx(InvolvementDescription, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }
    }, "Involvement: January 2019 - May 2020")), __jsx(FeatureList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }
    }, __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, __jsx(_project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Loyalty and Rewards",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 26
      }
    })), __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }, __jsx(_project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Indoor Map",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 26
      }
    })), __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, __jsx(_project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Cinema Booking",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 26
      }
    })), __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }
    }, __jsx(_project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Mall Information",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 26
      }
    })))));
  }

}
Project.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.912db8ec381483d0ab79.hot-update.js.map