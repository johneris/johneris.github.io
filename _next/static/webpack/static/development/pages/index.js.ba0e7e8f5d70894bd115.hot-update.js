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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _components_ui_library_particles_CustomizedParticles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui_library/particles/CustomizedParticles */ "./src/components/ui_library/particles/CustomizedParticles.jsx");
/* harmony import */ var _components_sections_header_HeaderSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/header/HeaderSection */ "./src/components/sections/header/HeaderSection.jsx");
/* harmony import */ var _components_sections_home_HomeSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/home/HomeSection */ "./src/components/sections/home/HomeSection.jsx");
/* harmony import */ var _components_sections_projects_ProjectsSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/projects/ProjectsSection */ "./src/components/sections/projects/ProjectsSection.jsx");
/* harmony import */ var _components_sections_skills_SkillsSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sections/skills/SkillsSection */ "./src/components/sections/skills/SkillsSection.jsx");
/* harmony import */ var _components_sections_quotation_QuotationSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sections/quotation/QuotationSection */ "./src/components/sections/quotation/QuotationSection.jsx");
/* harmony import */ var _components_sections_about_AboutSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/sections/about/AboutSection */ "./src/components/sections/about/AboutSection.jsx");
/* harmony import */ var _components_sections_contact_ContactSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/sections/contact/ContactSection */ "./src/components/sections/contact/ContactSection.jsx");
/* harmony import */ var _components_sections_footer_FooterSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/sections/footer/FooterSection */ "./src/components/sections/footer/FooterSection.jsx");
/* harmony import */ var _components_ui_library_scroll_top_button_ScrollTopButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/ui_library/scroll_top_button/ScrollTopButton */ "./src/components/ui_library/scroll_top_button/ScrollTopButton.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__MainContainer",
  componentId: "l606ox-0"
})(["display:flex;flex-direction:column;"]);
const HeaderHomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "pages__HeaderHomeContainer",
  componentId: "l606ox-1"
})(["height:100vh;width:100%;background-color:#1B262C;min-height:768px;@media ", "{height:calc(100vh + 35rem);min-height:calc(768px + 35rem);display:flex;flex-direction:column;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_6__["device"].lowerThanLaptop);
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__HeaderContainer",
  componentId: "l606ox-2"
})(["position:relative;z-index:3;@media ", "{position:static;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_6__["device"].lowerThanLaptop);
const HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__HomeContainer",
  componentId: "l606ox-3"
})(["height:100vh;width:100%;position:absolute;top:0;left:0;z-index:2;@media ", "{position:static;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_6__["device"].lowerThanLaptop);
const ParticleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__ParticleContainer",
  componentId: "l606ox-4"
})(["height:100vh;width:100%;position:absolute;top:0;left:0;z-index:1;"]);
const ScrollTopButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__ScrollTopButtonContainer",
  componentId: "l606ox-5"
})(["position:fixed;bottom:2rem;right:5%;display:", ";"], props => {
  return props.showSrollToTop ? "flex" : "none";
});
class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      showSrollToTop: false
    };
  }

  componentDidMount() {
    if (false) {}

    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        this.setState({
          showSrollToTop: false
        });
      }
    }.bind(this);

    react_scroll__WEBPACK_IMPORTED_MODULE_3__["Events"].scrollEvent.register('end', function (to, element) {
      if (to === "home" || to === null) {
        return;
      }

      this.setState({
        showSrollToTop: true
      });
    }.bind(this));
    react_scroll__WEBPACK_IMPORTED_MODULE_3__["scrollSpy"].update();
  }

  componentWillUnmount() {
    window.onscroll = null;
    react_scroll__WEBPACK_IMPORTED_MODULE_3__["Events"].scrollEvent.remove('end');
  }

  scrollTo(elementName) {
    react_scroll__WEBPACK_IMPORTED_MODULE_3__["scroller"].scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }
    }, "Eris | Web and Mobile Developer"), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "manifest",
      href: "/site.webmanifest",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "msapplication-TileColor",
      content: "#da532c",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#ffffff",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }
    })), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_5__["Helmet"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }
    }, "Eris | Web and Mobile Developer (Philippines)"), __jsx("meta", {
      name: "description",
      content: "Hi",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    })), __jsx(MainContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
      name: "home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }), __jsx(HeaderHomeContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }, __jsx(HeaderContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    }, __jsx(_components_sections_header_HeaderSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
      height: "4em",
      onHomeClicked: this.scrollTo.bind(this, 'home'),
      onProjectsClicked: this.scrollTo.bind(this, 'projects'),
      onSkillsClicked: this.scrollTo.bind(this, 'skills'),
      onAboutClicked: this.scrollTo.bind(this, 'about'),
      onContactClicked: this.scrollTo.bind(this, 'contact'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    })), __jsx(ParticleContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 13
      }
    }, __jsx(_components_ui_library_particles_CustomizedParticles__WEBPACK_IMPORTED_MODULE_7__["default"], {
      width: "100%",
      height: "100vh",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 32
      }
    })), __jsx(HomeContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, __jsx(_components_sections_home_HomeSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onAndroidClicked: this.scrollTo.bind(this, 'skills_android'),
      oniOSClicked: this.scrollTo.bind(this, 'skills_ios'),
      onWebClicked: this.scrollTo.bind(this, 'skills_web'),
      onBackendClicked: this.scrollTo.bind(this, 'skills_backend'),
      onContactMeClicked: this.scrollTo.bind(this, 'contact'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 15
      }
    }))), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
      name: "projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 11
      }
    }), __jsx(_components_sections_projects_ProjectsSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 11
      }
    }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
      name: "skills",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }), __jsx(_components_sections_skills_SkillsSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }
    }), __jsx(_components_sections_quotation_QuotationSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 11
      }
    }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
      name: "about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }
    }), __jsx(_components_sections_about_AboutSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }
    }), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
      name: "contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }
    }), __jsx(_components_sections_contact_ContactSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }
    }), __jsx(_components_sections_footer_FooterSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onHomeClicked: this.scrollTo.bind(this, 'home'),
      onProjectsClicked: this.scrollTo.bind(this, 'projects'),
      onSkillsClicked: this.scrollTo.bind(this, 'skills'),
      onAboutClicked: this.scrollTo.bind(this, 'about'),
      onContactClicked: this.scrollTo.bind(this, 'contact'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }), __jsx(ScrollTopButtonContainer, {
      showSrollToTop: this.state.showSrollToTop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 11
      }
    }, __jsx(_components_ui_library_scroll_top_button_ScrollTopButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      onClick: this.scrollTo.bind(this, 'home'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.ba0e7e8f5d70894bd115.hot-update.js.map