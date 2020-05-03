webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/sections/home/HomeSection.jsx":
/*!******************************************************!*\
  !*** ./src/components/sections/home/HomeSection.jsx ***!
  \******************************************************/
/*! exports provided: HomeSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSection", function() { return HomeSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");
/* harmony import */ var _ui_library_skill_preview_SkillPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui_library/skill_preview/SkillPreview */ "./src/components/ui_library/skill_preview/SkillPreview.jsx");
/* harmony import */ var _ui_library_social_media_link_SocialMediaLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui_library/social_media_link/SocialMediaLink */ "./src/components/ui_library/social_media_link/SocialMediaLink.jsx");
/* harmony import */ var _ui_library_button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui_library/button/Button */ "./src/components/ui_library/button/Button.jsx");
var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/home/HomeSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeSection__Container",
  componentId: "sc-1r5yvxi-0"
})(["height:100%;width:100%;min-height:768px;@media ", "{height:calc(100vh - 4rem + 35rem);min-height:calc(768px - 4rem + 35rem);}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeSection__Wrapper",
  componentId: "sc-1r5yvxi-1"
})(["width:90%;height:100%;margin-left:auto;margin-right:0;display:grid;grid-template-columns:1fr auto;grid-template-rows:auto auto;grid-column-gap:4rem;grid-row-gap:4rem;align-content:center;@media ", "{width:80%;margin-right:auto;min-height:0;grid-template-columns:100%;grid-template-rows:repeat(2,1fr) calc(35rem - 4rem);grid-row-gap:4rem;}@media ", "{grid-template-rows:0.75fr 0.25fr calc(35rem - 1rem);grid-row-gap:1rem;}@media ", "{grid-template-rows:0.6fr 0.4fr 35rem;grid-row-gap:0;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanTablet, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanMobileL);
const HeadingSkillsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeSection__HeadingSkillsContainer",
  componentId: "sc-1r5yvxi-2"
})(["grid-column:1 / span 1;grid-row:1 / span 1;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;@media ", "{justify-content:flex-end;}@media ", "{justify-content:center;align-items:center;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanTablet);
const ContactContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeSection__ContactContainer",
  componentId: "sc-1r5yvxi-3"
})(["grid-column:1 / span 1;grid-row:2 / span 1;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;@media ", "{justify-content:flex-start;}@media ", "{justify-content:flex-start;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanMobileL);
const GreetingsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeSection__GreetingsContainer",
  componentId: "sc-1r5yvxi-4"
})(["grid-column:2 / span 1;grid-row:1 / span 2;display:flex;flex-direction:column;justify-content:center;align-items:center;@media ", "{grid-column:1 / span 1;grid-row:3 / span 1;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const SoftwareDevLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "HomeSection__SoftwareDevLabel",
  componentId: "sc-1r5yvxi-5"
})(["color:#FFFFFF;font-size:2em;@media (max-width:1160px){font-size:1.2em;}@media ", "{font-size:2em;}@media ", "{font-size:1.5em;}@media ", "{font-size:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanTablet, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanMobileL);
const WebMobileLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "HomeSection__WebMobileLabel",
  componentId: "sc-1r5yvxi-6"
})(["color:#FFFFFF;font-size:4em;white-space:nowrap;@media (max-width:1160px){font-size:3.2em;}@media ", "{font-size:4em;}@media ", "{font-size:2.5em;}@media ", "{font-size:1.5em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanTablet, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanMobileL);
const SkillListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeSection__SkillListContainer",
  componentId: "sc-1r5yvxi-7"
})(["margin-top:2.8rem;display:grid;grid-template-columns:repeat(4,minmax(7em,10em));grid-template-rows:10em;grid-column-gap:1em;@media (max-width:1160px){margin-top:2rem;}@media ", "{margin-top:1.5em;grid-template-columns:repeat(2,minmax(7em,10em));grid-template-rows:repeat(2,minmax(7em,10em));grid-column-gap:2em;grid-row-gap:2em;}@media ", "{margin-top:1em;grid-template-columns:repeat(2,minmax(7em,8em));grid-template-rows:repeat(2,minmax(7em,8em));grid-column-gap:1em;grid-row-gap:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanTablet, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanMobileL);
const EmailLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "HomeSection__EmailLabel",
  componentId: "sc-1r5yvxi-8"
})(["margin-top:1.4rem;color:#CCD5DB;font-size:1.5em;@media (max-width:1160px){font-size:1em;}@media ", "{font-size:1.5em;}@media ", "{font-size:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanTablet);
const SocialMediaListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeSection__SocialMediaListContainer",
  componentId: "sc-1r5yvxi-9"
})(["margin-top:1.4rem;"]);
const SocialMediaList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "HomeSection__SocialMediaList",
  componentId: "sc-1r5yvxi-10"
})(["list-style:none;display:flex;padding-inline-start:0px;li:not(:last-child){margin-right:1.4em;}"]);
const SocialMediaItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "HomeSection__SocialMediaItem",
  componentId: "sc-1r5yvxi-11"
})([""]);
const MeBackground = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeSection__MeBackground",
  componentId: "sc-1r5yvxi-12"
})(["height:100%;width:19em;background-color:#212B31;position:absolute;top:0;right:9em;z-index:1;@media (max-width:1250px){width:23%;right:11%;}@media (max-width:1200px){width:21%;right:11%;}@media (max-width:1150px){width:19%;right:11%;}@media (max-width:1100px){width:17%;right:11%;}@media ", "{display:none;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const MeImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "HomeSection__MeImage",
  componentId: "sc-1r5yvxi-13"
})(["max-width:35rem;position:relative;z-index:2;@media (max-width:1350px){width:100%;}@media ", "{height:80%;width:auto;}@media ", "{height:auto;width:100%;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop, _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanMobileL);
const GreetingsLabelContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeSection__GreetingsLabelContainer",
  componentId: "sc-1r5yvxi-14"
})(["height:0px;width:10em;position:relative;top:2em;left:-1em;z-index:3;display:flex;justify-content:center;@media ", "{height:auto;width:auto;position:static;margin-bottom:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_2__["device"].lowerThanLaptop);
const GreetingsLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "HomeSection__GreetingsLabel",
  componentId: "sc-1r5yvxi-15"
})(["color:#CCD5DB;font-size:1.5em;@media (max-width:1160px){font-size:1em;}"]);
class HomeSection extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 9
      }
    }, __jsx(HeadingSkillsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 11
      }
    }, __jsx(SoftwareDevLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 13
      }
    }, "Software Developer"), __jsx(WebMobileLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 13
      }
    }, "Web and Mobile"), __jsx(SkillListContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 13
      }
    }, __jsx(_ui_library_skill_preview_SkillPreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Android",
      logoSrc: "/images/ic_android.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 15
      }
    }), __jsx(_ui_library_skill_preview_SkillPreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "iOS",
      logoSrc: "/images/ic_ios.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 15
      }
    }), __jsx(_ui_library_skill_preview_SkillPreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Web",
      logoSrc: "/images/ic_web.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 15
      }
    }), __jsx(_ui_library_skill_preview_SkillPreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "Backend",
      logoSrc: "/images/ic_backend.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 15
      }
    }))), __jsx(ContactContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 11
      }
    }, __jsx(_ui_library_button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: this.props.onContactMeClicked,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 13
      }
    }, "Contact Me"), __jsx(EmailLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 13
      }
    }, "email: me@johnerisvillanueva.com"), __jsx(SocialMediaListContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 13
      }
    }, __jsx(SocialMediaList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 15
      }
    }, __jsx(SocialMediaItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 17
      }
    }, __jsx(_ui_library_social_media_link_SocialMediaLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "LinkedIn",
      logoSrc: "/images/ic_linkedin.svg",
      link: "https://www.linkedin.com/in/john-eris-villanueva-838216b2/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 19
      }
    })), __jsx(SocialMediaItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 17
      }
    }, __jsx(_ui_library_social_media_link_SocialMediaLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "Github",
      logoSrc: "/images/ic_github.svg",
      link: "https://github.com/johneris/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 19
      }
    }))))), __jsx(GreetingsContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 11
      }
    }, __jsx(MeBackground, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 13
      }
    }), __jsx(GreetingsLabelContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 13
      }
    }, __jsx(GreetingsLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 38
      }
    }, "Hi, I'm Eris")), __jsx(MeImage, {
      src: "/images/img_me.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 13
      }
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (HomeSection);

/***/ })

})
//# sourceMappingURL=index.js.bbc927a34b7b4cdac5e4.hot-update.js.map