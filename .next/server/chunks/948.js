exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 7373:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 8501:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8438))

/***/ }),

/***/ 8438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "min-h-screen flex items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-center p-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-6xl font-bold mb-4 gradient-text",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-2xl font-semibold mb-6",
                    children: "Page Not Found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-gray-300 mb-8",
                    children: "The page you are looking for might have been removed or is temporarily unavailable."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    className: "px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",
                    children: "Return Home"
                })
            ]
        })
    });
}


/***/ }),

/***/ 7099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(4490);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/utils/paths.ts
const getBasePath = ()=>{
    if (false) {}
    if (true) {
        return  false || "";
    }
    const baseElement = document.querySelector("base");
    return baseElement ? baseElement.getAttribute("href")?.replace(/\/$/, "") || "" :  false || "";
};
const getMediaPath = (path)=>{
    const basePath = getBasePath();
    const cleanPath = path.replace(/^\/+/, "");
    return `${basePath}/media/${cleanPath}`;
};
const getImagePath = (path)=>{
    const basePath = getBasePath();
    const cleanPath = path.replace(/^\/+/, "");
    return `${basePath}/images/${cleanPath}`;
};
const getPdfPath = (path)=>{
    const basePath = getBasePath();
    const cleanPath = path.replace(/^\/+/, "");
    return `${basePath}/media/pdfs/${cleanPath}`;
};
const getAudioPath = (path)=>{
    const basePath = getBasePath();
    const cleanPath = path.replace(/^\/+/, "");
    return `${basePath}/media/audio/${cleanPath}`;
};
const getVideoPath = (path)=>{
    const basePath = getBasePath();
    const cleanPath = path.replace(/^\/+/, "");
    return `${basePath}/media/videos/${cleanPath}`;
};

;// CONCATENATED MODULE: ./src/app/layout.tsx





const metadata = {
    title: "AI Research & Supply Chain Analytics Portfolio",
    description: "Showcasing research papers and supply chain analytics projects"
};
function RootLayout({ children }) {
    const basePath = getBasePath();
    const baseHref = basePath ? `${basePath}/` : "/";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("base", {
                    href: baseHref
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "bg-gray-900 border-b border-gray-800",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-between h-16",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            className: "text-2xl font-bold gradient-text",
                                            children: "Portfolio"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden md:block ml-10",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center space-x-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/research",
                                                        className: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                                        children: "Research Papers"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/supply-chain",
                                                        className: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                                        children: "Supply Chain & Analytics"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "min-h-screen",
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Projects\webpage\ai-research-sc-analytics-main\jw-ai-sc-de\src\app\not-found.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;