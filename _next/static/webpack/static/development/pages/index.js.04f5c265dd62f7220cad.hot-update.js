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

var _jsxFileName = "/Users/johneris/Documents/workspace/reactjs/johnerisvillanueva.com-reactjs/src/components/sections/projects/ProjectsSection.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "ProjectsSection__Container",
  componentId: "jgrlco-0"
})(["width:100%;padding-top:4rem;padding-bottom:4rem;"]);
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
        appImageSrc: '/images/projects/ic_zing.png',
        role: 'Role: Team Lead, iOS and Backend Developer',
        vendor: 'Developed at White Cloak Technologies, Inc.',
        description: 'Zing is Ayala Malls’ mobile app and website that is meant to maximize the malling experience of its customers. With Zing, users can get free WiFi in all Ayala Malls, book movie tickets instantly, earn Zing points and redeem them as vouchers, find and navigate to shops and restaurants, and get updates on exclusive sales and promos.',
        involvementDescription: 'Involvement: from start to production and maintenance',
        involvementDate: 'Date: Jan 2019 - May 2020',
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
        appImageSrc: '/images/projects/ic_ubonline.png',
        role: 'Role: Lead iOS Developer',
        vendor: 'Developed at White Cloak Technologies, Inc.',
        description: 'UnionBank Online allows customers to bank securely whenever and wherever they need. With the app, users can easily manage accounts, cards, transfer funds, pay bills, buy load, split bills, request for payment, and a lot more.\n\nAwards:\n- 2018 Best Retail Mobile Banking Experience by The Asset Magazine\n- 2018 Online Banking Initiative of the Year by Asian Banking and Finance\n- 2018 Best Technology Implementation - Front End by Retail Banker International (Highly Commended).',
        involvementDescription: 'Involvement: from start to production and maintenance',
        involvementDate: 'Date: Apr 2017 – Dec 2018',
        features: ['Fund Transfer', 'Bills Payment', 'Buy Load', 'Request Payment'],
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
        title: 'Luxe Lips',
        appImageSrc: '/images/projects/ic_luxelips.png',
        role: 'Role: Team Lead, Flutter (iOS, Android) and Backend Developer',
        vendor: 'Freelance Client: Luxe Lips',
        description: 'Luxe Lips is a medical app for non-invasive aesthetic professionals. It also lets clients access consultations, face maps, and aesthetic tools and bookings via their mobile phones. Luxe Lips is also a patient management software designed for private cosmetic clinics.',
        involvementDescription: 'Involvement: from start to production and maintenance',
        involvementDate: 'Date: Aug 2020 – Present',
        features: ['Cosmetic Clinic', 'Prescriptions', 'Consulations', 'Face Map'],
        platforms: [{
          name: 'iOS',
          logoSrc: '/images/ic_ios.svg'
        }, {
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }, {
          name: 'Web Admin Portal',
          logoSrc: '/images/ic_web.svg'
        }, {
          name: 'Backend',
          logoSrc: '/images/ic_backend.svg'
        }]
      }, {
        title: 'TakeFive Outdoors',
        appImageSrc: '/images/projects/ic_takefive.png',
        role: 'Role: Team Lead, iOS and Backend Developer',
        vendor: 'Freelance Client: Takefive Outdoors',
        description: 'TakeFive Outdoors transformed into a digital enterprise by providing customers access to easy online booking of trips. With the app, users can browse the avaialable schedule of trips and readily know how many seats are still available. TakeFive helps local communities benefit from tourism by giving authentic experience to its clients. They organize monthly trips to different mountains, falls, beach, cave and anything related to the outdoors.',
        involvementDescription: 'Involvement: from start to production and maintenance',
        involvementDate: 'Date: Oct 2018 – Present',
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
        appImageSrc: '/images/projects/ic_figaro.png',
        role: 'Role: iOS Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'Figaro prides itself in serving coffee made from freshly-roasted beans sourced from all over the Philippines. The Figaro Coffee App has a built-in rewards system that provides a give-gifts function to loyal customers.',
        involvementDescription: 'Involvement: from start to production',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['Loyalty and Rewards', 'Online Ordering', 'Store Locations'],
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
        appImageSrc: '/images/projects/ic_bridal_gallery.png',
        role: 'Role: iOS Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'With its user friendly interface, Bridal Gallery is the most innovative wedding planning app in the Philippines today. Reliable wedding planning services in Philippines is just so easy to find. Users can create an idea gallery by finding great planning tips, global themes, and the finest professionals.',
        involvementDescription: 'Involvement: from start to production and maintenace',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['Wedding Tips', 'Wedding Planning', 'Wedding Professionals'],
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
        appImageSrc: '/images/projects/ic_mypocketdoctor.png',
        role: 'Role: iOS and Android Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'MyPocketDoctor is a medical advisory app that provides fast access to doctors (telemedicine). The doctors are all fully licensed European doctors. There are many cases where fast medical advise is needed such as when traveling, communicating with staff in foreign clinics, finding out if there is a need to go to the emergency ward or go to see a doctor. Clients can avoid the waiting time and travel involved.',
        involvementDescription: 'Involvement: from start to production and maintenace',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['Medical Profile', 'Online Consultation', 'Online Payment'],
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
        appImageSrc: '/images/projects/ic_posible.png',
        role: 'Role: Android Developer',
        vendor: 'Developed at Coreproc, Inc.',
        description: 'POS!BLE is a network that connects established brands and service providers. Using an Android device, the retailers of POS!BLE can transact Bills Payment (through Bayad Center), Prepaid Load, Online Pins, Inventory Management, and a lot more.',
        involvementDescription: 'Involvement: maintenace',
        involvementDate: 'Date: while still at Coreproc, Inc.',
        features: ['Bills Payment', 'Prepaid Load', 'Online Pins'],
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
        title: 'Old Spice Sales App',
        appImageSrc: '/images/projects/ic_oldspice.png',
        role: 'Role: Android Developer',
        vendor: 'Freelance Client: MASA Inc.',
        description: 'This app runs on a tablet and is used to advertise Old Spice products. The app allows the agent to browse the products and play commercial videos of Old Spice.',
        involvementDescription: 'Involvement: design to finish',
        involvementDate: 'Date: 2015',
        features: ['Products Gallery', 'Commercial Videos'],
        platforms: [{
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
        }]
      }, {
        title: 'Oral-B Electric Toothbrush Sales App',
        appImageSrc: '/images/projects/ic_oralb.png',
        role: 'Role: Android Developer',
        vendor: 'Freelance Client: MASA Inc.',
        description: 'This app runs on a tablet and is used to advertise the electric toothbrush of Oral-B. The app is a brushing game comparing the manual and electric toothbrush.',
        involvementDescription: 'Involvement: design to finish',
        involvementDate: 'Date: 2015',
        features: ['Products Gallery', 'Brushing Game'],
        platforms: [{
          name: 'Android',
          logoSrc: '/images/ic_android.svg'
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
        lineNumber: 250,
        columnNumber: 7
      }
    }, __jsx(Wrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }
    }, __jsx(HeaderContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 11
      }
    }, __jsx(ProjectCountLabel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 13
      }
    }, this.state.selectedIndex + 1, " of ", this.state.projects.length, " projects"), __jsx(NavigationContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 13
      }
    }, __jsx(NavIconWrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 15
      }
    }, __jsx(_ui_library_nav_icon_button_NavIconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "previous project",
      iconSrc: "/images/ic_previous.svg",
      onClick: this.previous,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 31
      }
    })), __jsx(NavIconWrapper, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 15
      }
    }, __jsx(_ui_library_nav_icon_button_NavIconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "next project",
      iconSrc: "/images/ic_next.svg",
      onClick: this.next,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 31
      }
    })))), __jsx(_ui_library_project_Project__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: project.title,
      appImageSrc: project.appImageSrc,
      role: project.role,
      vendor: project.vendor,
      description: project.description,
      involvementDescription: project.involvementDescription,
      involvementDate: project.involvementDate,
      features: project.features,
      platforms: project.platforms,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 11
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (ProjectsSection);

/***/ })

})
//# sourceMappingURL=index.js.04f5c265dd62f7220cad.hot-update.js.map