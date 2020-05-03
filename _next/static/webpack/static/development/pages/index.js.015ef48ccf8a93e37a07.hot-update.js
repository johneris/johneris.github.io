webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/sections/about/AboutSection.jsx":
/*!********************************************************!*\
  !*** ./src/components/sections/about/AboutSection.jsx ***!
  \********************************************************/
/*! exports provided: AboutSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSection", function() { return AboutSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _ui_library_hobby_Hobby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui_library/hobby/Hobby */ "./src/components/ui_library/hobby/Hobby.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/about/AboutSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__Container",
  componentId: "t5p5rt-0"
})(["width:100%;background-color:#1B262C;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__Wrapper",
  componentId: "t5p5rt-1"
})(["width:calc(80% + (0.9rem * 2));height:100%;margin-left:auto;margin-right:auto;display:grid;grid-template-columns:repeat(3,0.9rem) 25.5rem 0.9rem auto 0.9rem;grid-template-rows:1fr;@media ", "{display:flex;flex-direction:column;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptopL);
const ExperienceContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__ExperienceContainer",
  componentId: "t5p5rt-2"
})(["padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:1em;border-style:solid;border-color:#1B262C;border-width:1px;background-color:#FFFFFF;display:flex;flex-direction:column;justify-content:center;@media ", "{margin-top:2rem;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptopL);
const InterestsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__InterestsContainer",
  componentId: "t5p5rt-3"
})(["padding:4rem 2rem;display:flex;flex-direction:column;justify-content:center;align-items:center;@media ", "{padding:2rem 1rem;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanTablet);
const HobbiesContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__HobbiesContainer",
  componentId: "t5p5rt-4"
})(["margin-top:2rem;display:flex;"]);
const VerticalBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AboutSection__VerticalBar",
  componentId: "t5p5rt-5"
})(["width:0.9rem;height:100%;@media ", "{display:none;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptopL);
const WhiteVerticalBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalBar).withConfig({
  displayName: "AboutSection__WhiteVerticalBar",
  componentId: "t5p5rt-6"
})(["background-color:#FFFFFF;"]);
const ColoredVerticalBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalBar).withConfig({
  displayName: "AboutSection__ColoredVerticalBar",
  componentId: "t5p5rt-7"
})(["background-color:#1B262C;"]);
const YearMonthDayLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "AboutSection__YearMonthDayLabel",
  componentId: "t5p5rt-8"
})(["color:#1B262C;font-size:4em;@media ", "{font-size:3em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanTablet);
const ExperienceInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "AboutSection__ExperienceInfo",
  componentId: "t5p5rt-9"
})(["margin-top:1.4em;color:#1B262C;font-size:1.5em;@media ", "{font-size:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanTablet);
const InterestHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "AboutSection__InterestHeader",
  componentId: "t5p5rt-10"
})(["color:#E1E2E7;font-size:1.5em;text-align:center;@media ", "{font-size:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanTablet);
class AboutSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  getExperienceDate() {
    let today = new Date();
    let startDate = new Date(2015, 4, 1);
    return today - startDate;
  }

  render() {
    let experience = this.getExperienceDate();
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }
    }, __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }
    }), __jsx(ColoredVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }
    }), __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    }), __jsx(ExperienceContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }, __jsx(YearMonthDayLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        color: '#23A155'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 32
      }
    }, experience, "Y"), "EARS"), __jsx(YearMonthDayLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        color: '#23A155'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 32
      }
    }, "7M"), "ONTHS"), __jsx(YearMonthDayLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        color: '#23A155'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 32
      }
    }, "5D"), "AYS"), __jsx(ExperienceInfo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }, "in the professional software development industry")), __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }
    }), __jsx(InterestsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }
    }, __jsx(InterestHeader, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    }, "My hobbies and interests beside", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 60
      }
    }), "software development"), __jsx(HobbiesContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, __jsx(_ui_library_hobby_Hobby__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Run",
      logoSrc: "/images/ic_run.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 15
      }
    }), __jsx(_ui_library_hobby_Hobby__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Hike",
      logoSrc: "/images/ic_hike.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 15
      }
    }), __jsx(_ui_library_hobby_Hobby__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Swim",
      logoSrc: "/images/ic_swim.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }))), __jsx(WhiteVerticalBar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

/***/ })

})
//# sourceMappingURL=index.js.015ef48ccf8a93e37a07.hot-update.js.map