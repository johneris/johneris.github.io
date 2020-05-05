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
const AppRoleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Project__AppRoleContainer",
  componentId: "sc-1sw0h1o-7"
})(["display:flex;flex-direction:row;"]);
const RoleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Project__RoleContainer",
  componentId: "sc-1sw0h1o-8"
})(["padding-left:0.8rem;display:flex;flex-direction:column;justify-content:center;"]);
const ProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "Project__ProjectTitle",
  componentId: "sc-1sw0h1o-9"
})(["color:#1B262C;font-size:3em;@media ", "{font-size:2.5em;}@media ", "{font-size:2em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
const RoleLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Project__RoleLabel",
  componentId: "sc-1sw0h1o-10"
})(["color:#4E5F69;font-size:1.5em;@media ", "{font-size:1.2em;}@media ", "{font-size:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
const DevelopedLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Project__DevelopedLabel",
  componentId: "sc-1sw0h1o-11"
})(["margin-top:0.6em;color:#A7ADB1;font-size:1.5em;@media ", "{font-size:1.2em;}@media ", "{font-size:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
const ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Project__ProjectDescription",
  componentId: "sc-1sw0h1o-12"
})(["margin-top:1.3rem;color:#4E5F69;font-size:1.2em;@media ", "{font-size:1em;}@media ", "{font-size:0.8em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
const InvolvementDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Project__InvolvementDescription",
  componentId: "sc-1sw0h1o-13"
})(["margin-top:2rem;color:#A7ADB1;font-size:1.2em;@media ", "{font-size:1em;}@media ", "{font-size:0.8em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
class Project extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      title,
      role,
      vendor,
      description,
      involvement,
      features,
      platforms
    } = this.props;
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 7
      }
    }, __jsx(ProjectTitle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }
    }, title), __jsx(DetailsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }
    }, __jsx(InfoContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 11
      }
    }, __jsx(AppRoleContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/images/projects/ic_zing.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 15
      }
    }), __jsx(RoleContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 15
      }
    }, __jsx(RoleLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    }, role), __jsx(DevelopedLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }
    }, vendor))), __jsx(PlatformList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }, platforms.map(platform => {
      return __jsx(PlatformItem, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 24
        }
      }, __jsx(_project_platform_ProjectPlatform__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: platform.name,
        logoSrc: platform.logoSrc,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 38
        }
      }));
    })), __jsx(ProjectDescription, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }, description), __jsx(InvolvementDescription, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, involvement)), __jsx(FeatureList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }, features.map(feature => {
      return __jsx(FeatureItem, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 22
        }
      }, __jsx(_project_feature_ProjectFeature__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: feature,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 35
        }
      }));
    }))));
  }

}
Project.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  vendor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  involvement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  features: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired,
  platforms: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.exact({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.cc11b3ddb8cb7c9eefb3.hot-update.js.map