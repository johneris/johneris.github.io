webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/sections/header/HeaderSection.jsx":
/*!**********************************************************!*\
  !*** ./src/components/sections/header/HeaderSection.jsx ***!
  \**********************************************************/
/*! exports provided: HeaderSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSection", function() { return HeaderSection; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/MediaQueryHelper */ "./src/helpers/MediaQueryHelper.jsx");

var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva-reactjs/src/components/sections/header/HeaderSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav.withConfig({
  displayName: "HeaderSection__Container",
  componentId: "sc-62xg8g-0"
})(["height:", ";display:flex;align-items:center;"], props => {
  return props.height;
});
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "HeaderSection__Wrapper",
  componentId: "sc-62xg8g-1"
})(["width:80%;margin:auto;padding-top:0.6em;padding-bottom:0.6em;display:flex;justify-content:space-between;align-items:center;"]);
const LeftSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "HeaderSection__LeftSideContainer",
  componentId: "sc-62xg8g-2"
})(["width:10em;display:flex;justify-content:flex-start;align-items:center;"]);
const RightSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "HeaderSection__RightSideContainer",
  componentId: "sc-62xg8g-3"
})(["width:10em;display:flex;justify-content:flex-end;align-items:center;visibility:hidden;@media ", "{visibility:visible;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__["device"].lowerThanLaptop);
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "HeaderSection__LogoImage",
  componentId: "sc-62xg8g-4"
})(["height:1.75em;margin-top:0.4em;@media ", "{margin-top:0;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__["device"].lowerThanLaptop);
const MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "HeaderSection__MenuButton",
  componentId: "sc-62xg8g-5"
})(["background-color:transparent;padding:0;display:", ";"], props => {
  return props.isOpen ? "none" : "block";
});
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "HeaderSection__CloseButton",
  componentId: "sc-62xg8g-6"
})(["background-color:transparent;padding:0;position:absolute;display:", ";"], props => {
  return props.isOpen ? "block" : "none";
});
const ImageIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "HeaderSection__ImageIcon",
  componentId: "sc-62xg8g-7"
})(["height:3em;"]);
const NavListContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "HeaderSection__NavListContainer",
  componentId: "sc-62xg8g-8"
})(["@media ", "{width:100%;height:100vh;background-color:#1B262C;opacity:0.95;position:absolute;top:0;left:0;display:", ";align-items:center;justify-content:center;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__["device"].lowerThanLaptop, props => {
  return props.isOpen ? "flex" : "none";
});
const NavList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul.withConfig({
  displayName: "HeaderSection__NavList",
  componentId: "sc-62xg8g-9"
})(["list-style:none;padding-inline-start:0;display:flex;align-items:center;justify-content:center;@media ", "{height:100%;flex-direction:column;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__["device"].lowerThanLaptop);
const NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "HeaderSection__NavListItem",
  componentId: "sc-62xg8g-10"
})(["@media ", "{margin-top:1em;margin-bottom:1em;}"], _helpers_MediaQueryHelper__WEBPACK_IMPORTED_MODULE_4__["device"].lowerThanLaptop);
const NavListItemLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "HeaderSection__NavListItemLink",
  componentId: "sc-62xg8g-11"
})(["padding:0.2em 0.4em;margin:0.4em;color:#CCD5DB;background-color:transparent;font-size:1.5rem;text-transform:lowercase;cursor:pointer;:hover{background-color:#22A055;border-radius:4px;color:white;}"]);
class HeaderSection extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      isResponsiveNavOpen: false
    });

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    this.setState({
      isResponsiveNavOpen: true
    });
  }

  closeNav() {
    this.setState({
      isResponsiveNavOpen: false
    });
  }

  onNavClicked(navItem) {
    this.setState({
      isResponsiveNavOpen: false
    });

    switch (navItem) {
      case "home":
        this.props.onHomeClicked();
        break;

      case "projects":
        this.props.onProjectsClicked();
        break;

      case "skills":
        this.props.onSkillsClicked();
        break;

      case "about":
        this.props.onAboutClicked();
        break;

      case "contact":
        this.props.onContactClicked();
        break;

      default:
        break;
    }
  }

  render() {
    return __jsx(Container, {
      height: this.props.height,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }
    }, __jsx(LeftSideContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }
    }, __jsx(LogoImage, {
      src: "/images/ic_logo.svg",
      alt: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 30
      }
    })), __jsx(NavListContainer, {
      isOpen: this.state.isResponsiveNavOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }
    }, __jsx(NavList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }, __jsx(NavListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 15
      }
    }, __jsx(NavListItemLink, {
      onClick: this.onNavClicked.bind(this, 'home'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 28
      }
    }, "Home")), __jsx(NavListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 15
      }
    }, __jsx(NavListItemLink, {
      onClick: this.onNavClicked.bind(this, 'projects'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 28
      }
    }, "Projects")), __jsx(NavListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }
    }, __jsx(NavListItemLink, {
      onClick: this.onNavClicked.bind(this, 'skills'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 28
      }
    }, "Skills")), __jsx(NavListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }
    }, __jsx(NavListItemLink, {
      onClick: this.onNavClicked.bind(this, 'about'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 28
      }
    }, "About")), __jsx(NavListItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    }, __jsx(NavListItemLink, {
      onClick: this.onNavClicked.bind(this, 'contact'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 28
      }
    }, "Contact")))), __jsx(RightSideContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 11
      }
    }, __jsx(MenuButton, {
      onClick: this.openNav,
      isOpen: this.state.isResponsiveNavOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }
    }, __jsx(ImageIcon, {
      src: "/images/ic_menu_24px.svg",
      alt: "menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 15
      }
    })), __jsx(CloseButton, {
      onClick: this.closeNav,
      isOpen: this.state.isResponsiveNavOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }
    }, __jsx(ImageIcon, {
      src: "/images/ic_close_24px.svg",
      alt: "close menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 15
      }
    })))));
  }

}
HeaderSection.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);

/***/ })

})
//# sourceMappingURL=index.js.50c69d88e9bbdafdf2f3.hot-update.js.map