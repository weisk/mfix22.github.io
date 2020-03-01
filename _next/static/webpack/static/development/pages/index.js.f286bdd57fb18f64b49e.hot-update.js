webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/index.js":
/*!**********************************!*\
  !*** ./components/Home/index.js ***!
  \**********************************/
/*! exports provided: Grey, Black, LI, Terminal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grey", function() { return Grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Black", function() { return Black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LI", function() { return LI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return Terminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_writings_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/writings.json */ "./static/writings.json");
var _static_writings_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/writings.json */ "./static/writings.json", 1);

var _jsxFileName = "/Users/mike/Projects/Personal/Mike/components/Home/index.js";




var Link = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"]).withConfig({
  displayName: "Home__Link",
  componentId: "sc-5cb01z-0"
})(["&:hover{background:rgba(255,255,255,0.1);text-decoration:none;}"]);
var Grey = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"]).withConfig({
  displayName: "Home__Grey",
  componentId: "sc-5cb01z-1"
})(["border-radius:4px;height:350px;background:#aaa;justify-content:center;align-items:center;padding:16px;z-index:2;"]);
var Black = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"]).withConfig({
  displayName: "Home__Black",
  componentId: "sc-5cb01z-2"
})(["background:black;border-radius:1px;width:100%;height:100%;"]);
var LI = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "Home__LI",
  componentId: "sc-5cb01z-3"
})(["margin-bottom:", "px;cursor:", ";display:flex;&:before{content:'\u261B ';margin-right:", "px;}"], function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.onClick ? 'pointer' : null;
}, function (props) {
  return props.theme.space[2];
});
var Terminal = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "Home__Terminal",
  componentId: "sc-5cb01z-4"
})(["display:block;font-family:", ";overflow:auto;"], function (props) {
  return props.theme.fonts.mono;
});
function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      more = _React$useState2[0],
      setMore = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Terminal, {
    px: ['24px', '24px', 4],
    py: 3,
    fontSize: 2,
    mb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mb: 4,
    lineHeight: 1.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Hey \uD83D\uDC4B. I'm currently working as a software engineer at", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    color: "mint",
    href: "https://stripe.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Stripe"), ", but", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), " you may know me from my work on", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    color: "mint",
    href: "https://carbon.now.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Carbon"), ' ', "and", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    color: "mint",
    href: "https://reporanger.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Ranger"), ".", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), "Here are a few things I'm into:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    color: "inherit",
    href: "https://goo.gl/maps/VsJW2cLXMcGCWrgs5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Drinking coffee with others")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Skiing, rock climbing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Open-source software"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "JavaScript +", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    color: "inherit",
    href: "https://www.youtube.com/watch?v=d0xMqeVhlhQ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "GraphQL")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Music by Kendrick Lamar, Dessa, & Vince Staples"), !more ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    onClick: function onClick() {
      return setMore(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "More\u2026") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    color: "inherit",
    href: "https://fieldnotesbrand.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Field Notes")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Financing / Sustaining OSS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Digital / Interactive / Open Art"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Micro-grants"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    color: "inherit",
    href: "http://cheeseboardcollective.coop/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Pizza")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: 0,
    mt: 3,
    mb: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "(If you want to chat about any of these things,", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    color: "mint",
    href: "mailto:mrfix84@gmail.com?subject=Let's%20grab%20coffee!&body=Hey%20Mike%2C%0AI%20saw%20the%20offer%20to%20grab%20coffee%20on%20your%20website%2C%20and%20I%20thought%20I'd%20take%20you%20up%20on%20it!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "let's grab a coffee"), "!)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 5,
    mb: 2,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://carbon.now.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Carbon")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://reporanger.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Ranger")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://dawnlabs.io/alchemy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Alchemy")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    target: "_blank",
    color: "inherit",
    href: "https://transcenduw.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Transcend")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    target: "_blank",
    color: "inherit",
    href: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9321503.PN.&OS=PN/9321503&RS=PN/9321503",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Band Wagon"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mt: 5,
    mb: 2,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Articles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, _static_writings_json__WEBPACK_IMPORTED_MODULE_4__.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LI, {
      key: item.guid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
      href: item.link,
      target: "_blank",
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, item.title));
  })));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home */ "./components/Home/index.js");

var _jsxFileName = "/Users/mike/Projects/Personal/Mike/pages/index.js";



var theme = {
  colors: {
    mint: '#00f1ff'
  },
  fonts: {
    sans: '"Josefin Sans", "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    mono: ['Consolas', 'Menlo', 'Courier', 'monospace'].join(', ')
  }
};
var relative = {
  position: 'relative'
};

function Icon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    color: "mint",
    href: props.href,
    mr: 2,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ion-icon", {
    name: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    is: "main",
    mt: [0, 0, 3],
    pl: [0, 0, 5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    mt: 4,
    mb: 3,
    fontSize: [61, 61, 96],
    pl: [3, 3, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    alignItems: "center",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    color: "white",
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Mike Fix"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: [3, 3, 4],
    mr: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    name: "logo-twitter",
    href: "https://twitter.com/fixitup2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    name: "logo-github",
    href: "https://github.com/mfix22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledFlex, {
    flexDirection: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

var _StyledFlex = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"]).withConfig({
  displayName: "pages___StyledFlex",
  componentId: "yy02qt-0"
})(["", ""], relative);

/***/ })

})
//# sourceMappingURL=index.js.f286bdd57fb18f64b49e.hot-update.js.map