"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Navbar.tsx":
/*!************************!*\
  !*** ./app/Navbar.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuItems = [\n        {\n            name: \"Home\",\n            href: \"/\"\n        },\n        {\n            name: \"Services\",\n            href: \"/services\"\n        },\n        {\n            name: \"Portfolio\",\n            href: \"/portfolio\"\n        },\n        {\n            name: \"About Us\",\n            href: \"/about\"\n        },\n        {\n            name: \"Blog\",\n            href: \"/blog\"\n        },\n        {\n            name: \"Contact\",\n            href: \"/contact\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative z-50 font-inconsolata\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setIsMenuOpen(!isMenuOpen),\n                    className: \"focus:outline-none text-white bg-transparent p-1\" // No border and smaller padding\n                    ,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"block w-5 h-0.5 bg-white\"\n                            }, void 0, false, {\n                                fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"block w-5 h-0.5 bg-white\"\n                            }, void 0, false, {\n                                fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"block w-5 h-0.5 bg-white\"\n                            }, void 0, false, {\n                                fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                children: isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        height: 0\n                    },\n                    animate: {\n                        opacity: 1,\n                        height: \"auto\"\n                    },\n                    exit: {\n                        opacity: 0,\n                        height: 0\n                    },\n                    transition: {\n                        duration: 0.4\n                    },\n                    className: \"bg-transparent text-white w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: item.href,\n                                className: \"text-sm py-3 px-6 relative group\" // Reduced font size and padding\n                                ,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"relative inline-block\",\n                                    children: [\n                                        item.name,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, item.name, false, {\n                                fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/seruji/code/sikhra/olll/app/Navbar.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"vK10R+uCyHfZ4DZVnxbYkMWJB8g=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDSjtBQUMyQjtBQUV4RCxNQUFNSSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNTyxZQUFZO1FBQ2hCO1lBQUVDLE1BQU07WUFBUUMsTUFBTTtRQUFJO1FBQzFCO1lBQUVELE1BQU07WUFBWUMsTUFBTTtRQUFZO1FBQ3RDO1lBQUVELE1BQU07WUFBYUMsTUFBTTtRQUFhO1FBQ3hDO1lBQUVELE1BQU07WUFBWUMsTUFBTTtRQUFTO1FBQ25DO1lBQUVELE1BQU07WUFBUUMsTUFBTTtRQUFRO1FBQzlCO1lBQUVELE1BQU07WUFBV0MsTUFBTTtRQUFXO0tBQ3JDO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQ0NDLFNBQVMsSUFBTVAsY0FBYyxDQUFDRDtvQkFDOUJNLFdBQVUsbURBQW1ELGdDQUFnQzs7OEJBRTdGLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFLSCxXQUFVOzs7Ozs7MENBQ2hCLDhEQUFDRztnQ0FBS0gsV0FBVTs7Ozs7OzBDQUNoQiw4REFBQ0c7Z0NBQUtILFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXRCLDhEQUFDVCwwREFBZUE7MEJBQ2JHLDRCQUNDLDhEQUFDRixpREFBTUEsQ0FBQ08sR0FBRztvQkFDVEssU0FBUzt3QkFBRUMsU0FBUzt3QkFBR0MsUUFBUTtvQkFBRTtvQkFDakNDLFNBQVM7d0JBQUVGLFNBQVM7d0JBQUdDLFFBQVE7b0JBQU87b0JBQ3RDRSxNQUFNO3dCQUFFSCxTQUFTO3dCQUFHQyxRQUFRO29CQUFFO29CQUM5QkcsWUFBWTt3QkFBRUMsVUFBVTtvQkFBSTtvQkFDNUJWLFdBQVU7OEJBRVYsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNaSixVQUFVZSxHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUN0QixrREFBSUE7Z0NBRUhRLE1BQU1jLEtBQUtkLElBQUk7Z0NBQ2ZFLFdBQVUsbUNBQW1DLGdDQUFnQzs7MENBRTdFLDRFQUFDRztvQ0FBS0gsV0FBVTs7d0NBQ2JZLEtBQUtmLElBQUk7c0RBQ1YsOERBQUNNOzRDQUFLSCxXQUFVOzs7Ozs7Ozs7Ozs7K0JBTmJZLEtBQUtmLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JoQztHQXpETUo7S0FBQUE7QUEyRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL05hdmJhci50c3g/NzdhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgeyBuYW1lOiAnSG9tZScsIGhyZWY6ICcvJyB9LFxuICAgIHsgbmFtZTogJ1NlcnZpY2VzJywgaHJlZjogJy9zZXJ2aWNlcycgfSxcbiAgICB7IG5hbWU6ICdQb3J0Zm9saW8nLCBocmVmOiAnL3BvcnRmb2xpbycgfSxcbiAgICB7IG5hbWU6ICdBYm91dCBVcycsIGhyZWY6ICcvYWJvdXQnIH0sXG4gICAgeyBuYW1lOiAnQmxvZycsIGhyZWY6ICcvYmxvZycgfSxcbiAgICB7IG5hbWU6ICdDb250YWN0JywgaHJlZjogJy9jb250YWN0JyB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTUwIGZvbnQtaW5jb25zb2xhdGFcIj5cbiAgICAgIHsvKiBNZW51IFRvZ2dsZSBCdXR0b24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgcC00XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVPcGVuKCFpc01lbnVPcGVuKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBiZy10cmFuc3BhcmVudCBwLTFcIiAvLyBObyBib3JkZXIgYW5kIHNtYWxsZXIgcGFkZGluZ1xuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHctNSBoLTAuNSBiZy13aGl0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHctNSBoLTAuNSBiZy13aGl0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHctNSBoLTAuNSBiZy13aGl0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIERyb3Bkb3duIE1lbnUgKi99XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICB7aXNNZW51T3BlbiAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgaGVpZ2h0OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIGhlaWdodDogJ2F1dG8nIH19XG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIHctZnVsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBweS0zIHB4LTYgcmVsYXRpdmUgZ3JvdXBcIiAvLyBSZWR1Y2VkIGZvbnQgc2l6ZSBhbmQgcGFkZGluZ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgYm90dG9tLTAgaC0wLjUgYmctd2hpdGUgdy0wIGdyb3VwLWhvdmVyOnctZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsIk5hdmJhciIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwibWVudUl0ZW1zIiwibmFtZSIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsImluaXRpYWwiLCJvcGFjaXR5IiwiaGVpZ2h0IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXAiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Navbar.tsx\n"));

/***/ })

});