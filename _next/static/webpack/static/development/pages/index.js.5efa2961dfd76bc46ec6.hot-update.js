webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/sections/skills/SkillsSection.jsx":
/*!**********************************************************!*\
  !*** ./src/components/sections/skills/SkillsSection.jsx ***!
  \**********************************************************/
/*! exports provided: SkillsSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsSection", function() { return SkillsSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _ui_library_skill_Skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui_library/skill/Skill */ "./src/components/ui_library/skill/Skill.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva.com-reactjs/src/components/sections/skills/SkillsSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "SkillsSection__Container",
  componentId: "sc-83ah7x-0"
})(["width:100%;background-color:#1B262C;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SkillsSection__Wrapper",
  componentId: "sc-83ah7x-1"
})(["width:80%;margin-left:auto;margin-right:auto;padding-top:3rem;padding-bottom:4rem;display:flex;flex-direction:column;align-items:center;@media ", "{width:90%;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptop);
const SkillsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SkillsSection__SkillsContainer",
  componentId: "sc-83ah7x-2"
})(["width:100%;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);grid-row-gap:2rem;grid-column-gap:4rem;@media ", "{grid-template-columns:100%;grid-template-rows:repeat(4,1fr);grid-row-gap:2rem;grid-column-gap:0;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_3__["device"].lowerThanLaptopL);
const TitleLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "SkillsSection__TitleLabel",
  componentId: "sc-83ah7x-3"
})(["margin-bottom:4rem;font-size:2em;color:#CCD5DB;"]);
class SkillsSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, __jsx(TitleLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, "Tech Stack"), __jsx(SkillsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Element"], {
      name: "skills_android",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx(_ui_library_skill_Skill__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Android",
      logoSrc: "/images/ic_android.svg",
      level: "Intermediate",
      title: "Native Kotlin/Java, Flutter",
      details: ["IDE: Android Studio", "Tools/Libraries: Dagger, Retrofit, RxJava, Gson, bloc, get_it", "Architecture - MVP, MVVM, Clean Architecture", "Others: Play Store Deployment, Firebase"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    })), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Element"], {
      name: "skills_ios",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, __jsx(_ui_library_skill_Skill__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "iOS",
      logoSrc: "/images/ic_ios.svg",
      level: "Advanced",
      title: "Native Objective-C/Swift, Flutter",
      details: ["IDE: XCode", "Tools/Libraries: Cocoapods, Carthage, XCodeGen, IGListKit, RxSwift, Fastlane, bloc, get_it", "Architecture - MVP, MVVM, uFeatures, Coordinator", "Others: App Store Deployment, Firebase, Buddybuild, TestFlight"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    })), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Element"], {
      name: "skills_web",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, __jsx(_ui_library_skill_Skill__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Web",
      logoSrc: "/images/ic_web.svg",
      level: "Beginner",
      title: "React.js, Next.js, Wordpress",
      details: ["Code Editor: Visual Studio Code", "Tools/Libraries: Yarn, npm, Storybook, Moment.js, particles.js", "Others: Static Site Deployment to GitHub Pages, Digital Ocean Deployment"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    })), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Element"], {
      name: "skills_backend",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, __jsx(_ui_library_skill_Skill__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Backend",
      logoSrc: "/images/ic_backend.svg",
      level: "Intermediate",
      title: "Spring Boot Kotlin/Java, Laravel, AdonisJS",
      details: ["IDE/Code Editor: IntelliJ IDEA, PHP Storm, Visual Studio Code", "Tools/Libraries: Gson, Feign, Laravel Nova, Laravel Socialite, Laravel Passport", "Architecture - MVC, Clean Architecture, Microservices", "Others: LEMP stack Deployment in Digital Ocean, Postman, Swagger"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    })))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (SkillsSection);

/***/ })

})
//# sourceMappingURL=index.js.5efa2961dfd76bc46ec6.hot-update.js.map