webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _components_ui_library_particles_CustomizedParticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui_library/particles/CustomizedParticles */ "./src/components/ui_library/particles/CustomizedParticles.jsx");
/* harmony import */ var _components_sections_header_HeaderSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/header/HeaderSection */ "./src/components/sections/header/HeaderSection.jsx");
/* harmony import */ var _components_sections_home_HomeSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/home/HomeSection */ "./src/components/sections/home/HomeSection.jsx");
/* harmony import */ var _components_sections_projects_ProjectsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/projects/ProjectsSection */ "./src/components/sections/projects/ProjectsSection.jsx");
/* harmony import */ var _components_sections_skills_SkillsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/skills/SkillsSection */ "./src/components/sections/skills/SkillsSection.jsx");
/* harmony import */ var _components_sections_quotation_QuotationSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/quotation/QuotationSection */ "./src/components/sections/quotation/QuotationSection.jsx");
/* harmony import */ var _components_sections_about_AboutSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/about/AboutSection */ "./src/components/sections/about/AboutSection.jsx");
/* harmony import */ var _components_sections_contact_ContactSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sections/contact/ContactSection */ "./src/components/sections/contact/ContactSection.jsx");
/* harmony import */ var _components_sections_footer_FooterSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sections/footer/FooterSection */ "./src/components/sections/footer/FooterSection.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__MainContainer",
  componentId: "l606ox-0"
})(["display:flex;flex-direction:column;"]);
const HeaderHomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__HeaderHomeContainer",
  componentId: "l606ox-1"
})(["height:100vh;width:100%;background-color:#1B262C;min-height:768px;@media ", "{height:calc(100vh + 35rem);min-height:calc(768px + 35rem);display:flex;flex-direction:column;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop);
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__HeaderContainer",
  componentId: "l606ox-2"
})(["position:relative;z-index:3;@media ", "{position:static;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop);
const HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__HomeContainer",
  componentId: "l606ox-3"
})(["height:100vh;width:100%;position:absolute;top:0;left:0;z-index:2;@media ", "{position:static;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop);
const ParticleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ParticleContainer",
  componentId: "l606ox-4"
})(["height:100vh;width:100%;position:absolute;top:0;left:0;z-index:1;"]);
class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  onHomeClicked() {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["scroller"].scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  onProjectsClicked() {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["scroller"].scrollTo('projects', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  onSkillsClicked() {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["scroller"].scrollTo('skills', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  onAboutClicked() {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["scroller"].scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  onContactClicked() {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["scroller"].scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  render() {
    return __jsx(MainContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Element"], {
      name: "home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }), __jsx(HeaderHomeContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }, __jsx(HeaderContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }, __jsx(_components_sections_header_HeaderSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
      height: "4em",
      onHomeClicked: this.onHomeClicked,
      onProjectsClicked: this.onProjectsClicked,
      onSkillsClicked: this.onSkillsClicked,
      onAboutClicked: this.onAboutClicked,
      onContactClicked: this.onContactClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    })), __jsx(ParticleContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }
    }, __jsx(_components_ui_library_particles_CustomizedParticles__WEBPACK_IMPORTED_MODULE_4__["default"], {
      width: "100%",
      height: "100vh",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 30
      }
    })), __jsx(HomeContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    }, __jsx(_components_sections_home_HomeSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 26
      }
    }))), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Element"], {
      name: "projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }
    }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Element"], {
      name: "skills",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }
    }), __jsx(_components_sections_skills_SkillsSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }
    }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Element"], {
      name: "about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }
    }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Element"], {
      name: "contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.7b05b340f8afea7a9fb5.hot-update.js.map