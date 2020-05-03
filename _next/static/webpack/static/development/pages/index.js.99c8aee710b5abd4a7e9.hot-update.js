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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project_feature/ProjectFeature */ "./src/components/ui_library/project_feature/ProjectFeature.jsx");
/* harmony import */ var _project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project_platform/ProjectPlatform */ "./src/components/ui_library/project_platform/ProjectPlatform.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/ui_library/project/Project.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Project__Container",
  componentId: "sc-1sw0h1o-0"
})(["display:flex;flex-direction:column;"]);
const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Project__DetailsContainer",
  componentId: "sc-1sw0h1o-1"
})(["margin-top:2rem;display:grid;grid-template-columns:1fr auto;grid-template-rows:auto;grid-column-gap:15%;@media ", "{display:flex;flex-direction:column-reverse;}@media ", "{}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptopL, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Project__InfoContainer",
  componentId: "sc-1sw0h1o-2"
})([""]);
const FeatureList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Project__FeatureList",
  componentId: "sc-1sw0h1o-3"
})(["display:flex;flex-direction:column;@media ", "{flex-direction:row;margin-bottom:1rem;}@media ", "{flex-wrap:wrap;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptopL, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const FeatureItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Project__FeatureItem",
  componentId: "sc-1sw0h1o-4"
})(["margin-bottom:1.5rem;@media ", "{margin-right:1rem;margin-bottom:1rem;}@media ", "{width:50%;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptopL, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const PlatformList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Project__PlatformList",
  componentId: "sc-1sw0h1o-5"
})(["margin-top:3rem;display:flex;flex-direction:row;"]);
const PlatformItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Project__PlatformItem",
  componentId: "sc-1sw0h1o-6"
})(["margin-right:1.5rem;"]);
const RoleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Project__RoleContainer",
  componentId: "sc-1sw0h1o-7"
})(["padding-left:0.8rem;border-left-style:solid;border-width:0.25rem;border-color:#24A255;display:flex;flex-direction:column;justify-content:center;"]);
const ProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Project__ProjectTitle",
  componentId: "sc-1sw0h1o-8"
})(["color:#1B262C;font-size:3em;"]);
const RoleLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Project__RoleLabel",
  componentId: "sc-1sw0h1o-9"
})(["color:#4E5F69;font-size:1.5em;"]);
const DevelopedLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Project__DevelopedLabel",
  componentId: "sc-1sw0h1o-10"
})(["margin-top:0.6em;color:#A7ADB1;font-size:1.5em;"]);
const ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Project__ProjectDescription",
  componentId: "sc-1sw0h1o-11"
})(["margin-top:1.3rem;color:#4E5F69;font-size:1.2em;"]);
const InvolvementDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Project__InvolvementDescription",
  componentId: "sc-1sw0h1o-12"
})(["margin-top:2rem;color:#A7ADB1;font-size:1.2em;"]);
class Project extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }
    }, __jsx(ProjectTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, "Mall\u2019s App and Website"), __jsx(DetailsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }, __jsx(InfoContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }
    }, __jsx(RoleContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, __jsx(RoleLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 15
      }
    }, "Role: Team Captain, iOS Developer, Backend Developer"), __jsx(DevelopedLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, "Developed at White Cloak Technologies, Inc.")), __jsx(PlatformList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, __jsx(_project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "iOS",
      logoSrc: "/images/ic_ios.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 29
      }
    })), __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 15
      }
    }, __jsx(_project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Android",
      logoSrc: "/images/ic_android.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 29
      }
    })), __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }, __jsx(_project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Web",
      logoSrc: "/images/ic_web.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    })), __jsx(PlatformItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }
    }, __jsx(_project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Backend",
      logoSrc: "/images/ic_backend.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }))), __jsx(ProjectDescription, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }, "Z!ng is Ayala Malls\u2019 mobile app that includes indoor navigation, cinema booking, offers, promos, and rewards. Z!ng is Ayala Malls\u2019 mobile app that includes indoor navigation, cinema booking, offers, promos, and rewards."), __jsx(InvolvementDescription, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }, "Involvement: January 2019 - May 2020")), __jsx(FeatureList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    }, __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }, __jsx(_project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Loyalty and Rewards",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 26
      }
    })), __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, __jsx(_project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Indoor Map",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 26
      }
    })), __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, __jsx(_project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Cinema Booking",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 26
      }
    })), __jsx(FeatureItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }, __jsx(_project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Mall Information",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 26
      }
    })))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.99c8aee710b5abd4a7e9.hot-update.js.map