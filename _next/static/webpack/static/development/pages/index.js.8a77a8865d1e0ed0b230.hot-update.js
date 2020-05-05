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
        title: 'Zing at Ayala Malls',
        role: 'Role: Team Lead, iOS, and Backend',
        vendor: 'Developed at White Cloak Technologies, Inc.',
        description: 'Z!ng is Ayala Malls’ mobile app that includes indoor navigation, cinema booking, offers, promos, and rewards.',
        involvement: 'Involvement: X',
        features: ['Loyalty and Rewards', 'Indoor Map', 'Cinema Booking', 'Mall Information'],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Web Admin Portal',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }, {
        title: 'UnionBank Online',
        role: 'Role: Lead iOS Developer',
        vendor: 'Developed at White Cloak Technologies, Inc.',
        description: 'I worked on the core features of the app including the Dashboard, Fund Transfer, Bills Payment, Buy Load, and a lot more.',
        involvement: 'Involvement: ',
        features: ['Fund Transfer', 'Bills Payment', 'Buy Load', 'Quick Balance'],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Web Admin Portal',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }, {
        title: 'TakeFive Outdoors',
        role: 'Role: Team Lead, iOS, and Backend',
        vendor: 'Freelance',
        description: 'TakeFive Outdoors organize monthly trips to mountains, beach, and anything outdoors. Book for trips using the app.',
        involvement: 'Involvement: ',
        features: ['Trips', 'Online Booking', 'Profile Levels', 'Vouchers'],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Web Admin Portal',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }, {
        title: 'Figaro Coffee Systems Inc.',
        role: 'Role: iOS Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'The Figaro Coffee App has a built-in rewards system that provides a give-gifts function to loyal and regular customers.',
        involvement: 'Involvement: ',
        features: ['', '', '', ''],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Web Admin Portal',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }, {
        title: 'BG BRIDAL GALLERY',
        role: 'Role: iOS Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'With its easy interface, Bridal Gallery is the most innovative wedding planning app in the Philippines today.',
        involvement: 'Involvement: ',
        features: ['', '', '', ''],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Web Admin Portal',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }, {
        title: 'MyPocketDoctor',
        role: 'Role: iOS and Android Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'MyPocketDoctor is a medical advisory app, that provides you with fast access to doctors (telemedicine).',
        involvement: 'Involvement: ',
        features: ['', '', '', ''],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Web Admin Portal',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }, {
        title: 'POS!BLE',
        role: 'Role: Android Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'Using an Android device, the retailers of POS!BLE can transact Bills Payment, Prepaid Load, and a lot more.',
        involvement: 'Involvement: ',
        features: ['', '', '', ''],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Web Admin Portal',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }, {
        title: '',
        role: '',
        vendor: 'Developed at ',
        description: '',
        involvement: 'Involvement: ',
        features: ['', '', '', ''],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }, {
        title: '',
        role: '',
        vendor: 'Developed at ',
        description: '',
        involvement: 'Involvement: ',
        features: ['', '', '', ''],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }, {
        title: '',
        role: '',
        vendor: 'Developed at ',
        description: '',
        involvement: 'Involvement: ',
        features: ['', '', '', ''],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }],
      selectedIndex: 0
    });

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    if (this.state.selectedIndex >= this.state.projects.length - 1) {
      return;
    }

    let newIndex = this.state.selectedIndex + 1;
    this.setState({
      selectedIndex: newIndex
    });
  }

  previous() {
    if (this.state.selectedIndex <= 0) {
      return;
    }

    let newIndex = this.state.selectedIndex - 1;
    this.setState({
      selectedIndex: newIndex
    });
  }

  render() {
    let project = this.state.projects[this.state.selectedIndex];
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }
    }, __jsx(HeaderContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 11
      }
    }, __jsx(ProjectCountLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 13
      }
    }, this.state.selectedIndex + 1, " of ", this.state.projects.length, " projects"), __jsx(NavigationContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 13
      }
    }, __jsx(NavIconWrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 15
      }
    }, __jsx(_ui_library_nav_icon_button_NavIconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "previous project",
      iconSrc: "/images/ic_previous.svg",
      onClick: this.previous,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 31
      }
    })), __jsx(NavIconWrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 15
      }
    }, __jsx(_ui_library_nav_icon_button_NavIconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "next project",
      iconSrc: "/images/ic_next.svg",
      onClick: this.next,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 31
      }
    })))), __jsx(_ui_library_project_Project__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: project.title,
      role: project.role,
      vendor: project.vendor,
      description: project.description,
      involvement: project.involvement,
      features: project.features,
      platforms: project.platforms,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 11
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (ProjectsSection);

/***/ })

})
//# sourceMappingURL=index.js.8a77a8865d1e0ed0b230.hot-update.js.map