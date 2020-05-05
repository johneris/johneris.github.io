webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/sections/projects/ProjectsSection.jsx":
/*!**************************************************************!*\
  !*** ./src/components/sections/projects/ProjectsSection.jsx ***!
  \**************************************************************/
/*! exports provided: ProjectsSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsSection", function() { return ProjectsSection; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _ui_library_project_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui_library/project/Project */ "./src/components/ui_library/project/Project.jsx");
/* harmony import */ var _ui_library_nav_icon_button_NavIconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui_library/nav_icon_button/NavIconButton */ "./src/components/ui_library/nav_icon_button/NavIconButton.jsx");

var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/projects/ProjectsSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectsSection__Container",
  componentId: "jgrlco-0"
})(["width:100%;margin-top:4rem;margin-bottom:4rem;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectsSection__Wrapper",
  componentId: "jgrlco-1"
})(["width:80%;margin-left:auto;margin-right:auto;display:flex;flex-direction:column;"]);
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectsSection__HeaderContainer",
  componentId: "jgrlco-2"
})(["width:100%;margin-bottom:0.5rem;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;"]);
const NavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectsSection__NavigationContainer",
  componentId: "jgrlco-3"
})(["display:flex;flex-direction:row;"]);
const ProjectCountLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "ProjectsSection__ProjectCountLabel",
  componentId: "jgrlco-4"
})(["color:#ADC6D5;font-size:1.5em;@media ", "{font-size:1.2em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanMobileM);
const NavIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectsSection__NavIconWrapper",
  componentId: "jgrlco-5"
})(["margin-left:1rem;"]);
class ProjectsSection extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      projects: [{
        name: 'Project A'
      }, {
        name: 'Project B'
      }],
      selectedIndex: 0
    });

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    console.log(this.state.selectedIndex);

    if (this.state.selectedIndex <= this.state.projects.length) {
      return;
    }

    let newIndex = this.state.selectedIndex + 1;
    this.setState({
      selectedIndex: newIndex
    });
  }

  previous() {
    console.log(this.state.selectedIndex);

    if (this.state.selectedIndex <= 0) {
      return;
    }

    let newIndex = this.state.selectedIndex - 1;
    this.setState({
      selectedIndex: newIndex
    });
  }

  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }
    }, __jsx(HeaderContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }, __jsx(ProjectCountLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, this.state.selectedIndex + 1, " of ", this.state.projects.length, " projects"), __jsx(NavigationContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, __jsx(NavIconWrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }, __jsx(_ui_library_nav_icon_button_NavIconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "previous project",
      iconSrc: "/images/ic_previous.svg",
      onClick: this.previous,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 31
      }
    })), __jsx(NavIconWrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }, __jsx(_ui_library_nav_icon_button_NavIconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "next project",
      iconSrc: "/images/ic_next.svg",
      onClick: this.next,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 31
      }
    })))), __jsx(_ui_library_project_Project__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (ProjectsSection);

/***/ })

})
//# sourceMappingURL=index.js.eca964185ba3a06b536f.hot-update.js.map